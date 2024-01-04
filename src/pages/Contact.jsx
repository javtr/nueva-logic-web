import React, { useState } from "react";

const Contact = () => {
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
    console.log("Datos del formulario:", formData);
    // Puedes resetear el formulario después de enviarlo si es necesario
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
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
          <button type="submit" className="form__container--form-button">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
