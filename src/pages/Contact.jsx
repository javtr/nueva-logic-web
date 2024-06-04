import React, { useState, useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  ValidateForm,
  getBannedEmail,
  ValidateEmail,
} from "../../src/helpers/formValidation";
import ReCAPTCHA from "react-google-recaptcha";
import { TailSpin } from "react-loader-spinner";

import LanguageContext from "../context/langContext";
import { textEn, textEs } from "../assets/text/form-contact";
import { SeoDataEs, SeoDataEn } from "../assets/objects/SEO_data";

import { Helmet, HelmetProvider } from "react-helmet-async";




const Contact = () => {
  const [arrVar, setArrVar] = useState([]);
  const [mailState, setMailState] = useState("none");
  const [captcha, setCaptcha] = useState(null);

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [seo, setSeo] = useState([]);

  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
      setSeo(SeoDataEn);

    } else if (lang === "es") {
      setText(textEs);
      setSeo(SeoDataEs);

    } else {
      setText(textEn);
      setSeo(SeoDataEn);

    }
    setIsloading(false);
  }, [lang]);


  useEffect(() => {
    obtainFeatures();
  }, []);

  //variables de oficial
  const service = "service_g9gfwit";
  const template = "template_7vyrf6s";
  const emailKey = "QyQP72Hg4ObCGjDYM";
  const captchaLocal = "6Le251MpAAAAAJ0Oec0l7x-koMG_kKUg6EypEbbi";
  const captchaWeb = "6LdmJucpAAAAAPN--0vzj_7NuxLvMHqsRDrOkpxO";//6LdmJucpAAAAAAFjvyg_8pbH1mN9Mk6c-aQi7I24

  // 6Ld2wr4fAAAAAJ3Op2VrKv4Vzn865fJm8wPcRh0e
  // 6Ld2wr4fAAAAAOBRXktWM6IWMoLWOju2HxZQx4uk

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const obtainFeatures = () => {
    getBannedEmail()
      .then((response) => {
        setArrVar(response);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {});
  };

  const sendEmail = (formData) => {
    let filtro = true;

    //validaciones de email -----------------------------
    //validacion blacklist
    if (arrVar.indexOf(formData.email) > -1) {
      console.log("filtro mail");
      filtro = false;
    }

    //verificar el formato del email
    if (!ValidateEmail(formData.email)) {
      console.log("no tiene un formato valido");
      filtro = false;
    }

    if (filtro) {
      if (captcha) {
        console.log("-----------");
        console.log("Datos del formulario:", formData);
        console.log(filtro);

        setMailState("sending");
        scrollToTop();

        //! Test 
        // setTimeout(function() {
        //   // Código que se ejecutará después de esperar 10 segundos
        //   console.log("Han pasado 10 segundos");
        //   setMailState("succes");
        //   scrollToTop();
        // },5000);



        //! No eliminar 
        emailjs.send(service, template, formData, emailKey).then(
          (result) => {
            setMailState("succes");
        scrollToTop();

          },
          (error) => {
            setMailState("fail");
        scrollToTop();

          }
        );





      }
    }
  };

  function onChange(value) {
    setCaptcha(true);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <HelmetProvider>

    <>
      {!isloading ? (
        <>

          {text !== undefined ? (


    <div>
            <Helmet>
              <title>{seo[4].title}</title>
              <meta name="description" content={seo[4].og_description} />
              <meta name="keywords" content={seo[4].keywords} />
              <link rel="canonical" href={seo[4].canonical} />

              <meta property="og:title" content={seo[4].og_title} />
              <meta property="og:description" content={seo[4].og_description} />
              <meta property="og:image" content={seo[4].og_image} />
              <meta property="og:url" content={seo[4].og_url} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={seo[4].og_title} />
              <meta
                name="twitter:description"
                content={seo[4].og_description}
              />
              <meta name="twitter:image" content={seo[4].og_image} />

              <link
                rel="icon"
                href="https://www.logicindicators.com/logic.ico"
              />
            </Helmet>

      {mailState === "sending" && (
        <div style={{ display: "flex", justifyContent: "center" }}
            className="form__container--sending"
        >
          <TailSpin
            height="100"
            width="100"
            color="rgb(97, 255, 189)"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      {mailState !== "none" && mailState !== "sending" ? (
        <div
          className={
            mailState === "fail" && mailState !== "sending"
              ? "form__container--fail"
              : "form__container--succes"
          }
        >
          {mailState === "fail" && mailState !== "sending"
            ? <p>{text.error}</p>
            : <p>{text.ok}</p>}
        </div>
      ) : (
        <></>
      )}

      {mailState === "none" && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form__container">
            <div className="form__container--form">
              <h2 className="form__container--form-title">{text.tit}</h2>
              <label className="form__container--form-name">{text.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label className="form__container--form-mail">
                <p>{text.mail}</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="form__container--form-message">
                <p>{text.mess}</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="formContact__recaptcha">
                <ReCAPTCHA
                  sitekey={captchaWeb}
                  onChange={onChange}
                  size={window.innerWidth < 640 ? "compact" : "normal"}
                  theme="dark"
                />
              </div>

              <button type="submit" className="form__container--form-button">
              {text.button}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>

    ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>

    </HelmetProvider>
  );

};

export default Contact;
