import React, { useState, useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  ValidateForm,
  getBannedEmail,
  ValidateEmail,
} from "../../src/helpers/formValidation";
import idmachine from "../assets/img/licence.jpg";

import ReCAPTCHA from "react-google-recaptcha";
import { TailSpin } from "react-loader-spinner";

import LanguageContext from "../context/langContext";
import { textEn, textEs } from "../assets/text/form-contactLic";

const ContactLic = () => {
  const [arrVar, setArrVar] = useState([]);
  const [mailState, setMailState] = useState("none");
  const [captcha, setCaptcha] = useState(null);

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
    } else if (lang === "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
    setIsloading(false);
  }, [lang]);

  useEffect(() => {
    obtainFeatures();
  }, []);

  //variables de oficial
  const service = "service_g9gfwit"; //! estos 3 valores son  de emailjs, se puede crear un template aparte
  const template = "template_6r8ymzt";
  const emailKey = "QyQP72Hg4ObCGjDYM";
  const captchaLocal = "6Le251MpAAAAAJ0Oec0l7x-koMG_kKUg6EypEbbi"; //! se debe meter en la pagina la url de la pagina y obtener un nuevo codigo
  const captchaWeb = "6LdmJucpAAAAAPN--0vzj_7NuxLvMHqsRDrOkpxO";

  const [formData, setFormData] = useState({
    name: "",
    idmachine: "",
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
      idmachine: "",
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
        // setTimeout(function () {
        //   // Código que se ejecutará después de esperar 10 segundos
        //   console.log("Han pasado 10 segundos");
        //   setMailState("fail");
        //   scrollToTop();
        // }, 5000);

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
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isloading ? (
        <>
          {text !== undefined ? (
            <div>
              <div className="noClose">
                <div className="noClose-msg">{text.alert}</div>
              </div>

              {mailState === "sending" && (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="formLic__container--sending"
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
                      ? "formLic__container--fail"
                      : "formLic__container--succes"
                  }
                >
                  {mailState === "fail" && mailState !== "sending" ? (
                    <p>{text.error}</p>
                  ) : (
                    <p>{text.ok}</p>
                  )}
                </div>
              ) : (
                <></>
              )}

              {mailState === "none" && (
                <form onSubmit={handleSubmit} className="formLic">
                  <div className="formLic__container">
                    <div className="formLic__container--form">
                      <h2 className="formLic__container--form-title">
                        {text.tit}
                      </h2>

                      <p className="formLic__container--form-subt">
                        {text.sub1}
                      </p>

                      <p className="formLic__container--form-subp">
                        {text.subp1}
                      </p>

                      <div className="formLic__container--form-licImg">
                        <img src={idmachine} alt="id machine"></img>
                      </div>

                      <p className="formLic__container--form-subp">
                        {text.subp2}
                      </p>

                      <label className="formLic__container--form-name">
                        {text.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                      <label className="formLic__container--form-mail">
                        <p>Machine ID</p>
                        <input
                          type="idmachine"
                          name="idmachine"
                          value={formData.idmachine}
                          onChange={handleChange}
                          required
                        />
                      </label>

                      <label className="formLic__container--form-mail">
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

                      <button
                        type="submit"
                        className="form__container--form-button"
                      >
                        {text.button}
                      </button>

                      <div className="formLic__container--form-indications">
                        <p>{text.p1}</p>
                        <p>{text.p2}</p>
                        <p>{text.p3}</p>
                        <p> {text.p4}</p>
                        <p> {text.p5}</p>
                      </div>
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
  );
};

export default ContactLic;
