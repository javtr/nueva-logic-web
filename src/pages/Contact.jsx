import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  ValidateForm,
  getBannedEmail,
  ValidateEmail,
} from "../../src/helpers/formValidation";
import ReCAPTCHA from "react-google-recaptcha";
import { TailSpin } from "react-loader-spinner";

const Contact = () => {
  const [arrVar, setArrVar] = useState([]);
  const [mailState, setMailState] = useState("none");
  const [captcha, setCaptcha] = useState(null);

  useEffect(() => {
    obtainFeatures();
  }, []);

  //variables de oficial
  const service = "service_g9gfwit";
  const template = "template_7vyrf6s";
  const emailKey = "QyQP72Hg4ObCGjDYM";
  const captchaLocal = "6Le251MpAAAAAJ0Oec0l7x-koMG_kKUg6EypEbbi";

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
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, a través de una API.
    sendEmail(formData);
    // Puedes resetear el formulario después de enviarlo si es necesario
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


        setTimeout(function() {
          // Código que se ejecutará después de esperar 10 segundos
          console.log("Han pasado 10 segundos");
          setMailState("succes");
          scrollToTop();
        },5000);




        // emailjs.send(service, template, formData, emailKey).then(
        //   (result) => {
        //     setMailState("succes");
        // scrollToTop();

        //   },
        //   (error) => {
        //     setMailState("fail");
        // scrollToTop();

        //   }
        // );





      }
    }
  };

  function onChange(value) {
    setCaptcha(true);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Opcional: hace el desplazamiento suave
    });
  };


  return (
    <div>
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
            ? "el mensaje no pudo ser enviado"
            : "mensaje enviado exitosamente"}
        </div>
      ) : (
        <></>
      )}

      {mailState === "none" && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form__container">
            <div className="form__container--form">
              <h2 className="form__container--form-title">Contacto</h2>
              <label className="form__container--form-name">Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label className="form__container--form-mail">
                <p>Correo Electrónico:</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="form__container--form-message">
                <p>Mensaje:</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="formContact__recaptcha">
                <ReCAPTCHA
                  sitekey={captchaLocal}
                  onChange={onChange}
                  size={window.innerWidth < 640 ? "compact" : "normal"}
                  theme="dark"
                />
              </div>

              <button type="submit" className="form__container--form-button">
                Enviar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
