import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Formulario.css"

export const Formulario = () => {
  const reForm = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_wz763cj";
    const templateId = "template_f8fh91c";
    const apiKey = "T-AyP1aJSn0LBUnbb";

    emailjs
      .sendForm(serviceId, templateId, reForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        // Mostrar el mensaje de éxito
        setShowSuccessMessage(true);
        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => setShowSuccessMessage(false), 3000);
        // Limpiar el formulario
        reForm.current.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contact-us" id="contactame">
      <form ref={reForm} action="" onSubmit={handleSubmit} className="form-contact">
        <div>
          <h1>Contáctame </h1>
        </div>
        <fieldset >
          <label>Nombre</label>
          <input name="username" type="text" placeholder="Ingresa tu nombre" required className="label-names" />
        </fieldset>
        <fieldset  >
          <label >Correo</label>
          <input name="email" type="email" placeholder="Ingresa tu correo electrónico " required  className="label-names"/>
        </fieldset>
        <fieldset  >
          <label >Mensaje</label>
          <textarea name="message" className="label-names" type="text" placeholder="Ingresa tu mensaje" required cols="30" rows="5" maxlength="300" />
        </fieldset>
        <button type="submit" className="button"><i class="fa-solid fa-paper-plane"></i>Enviar</button>
      </form>

      {showSuccessMessage && (
        <div className="message" >
          Correo enviado. ¡Gracias por tu mensaje!
        </div>
      )}
      <footer>
                <div className="footer-content">
                    <img src="img/logo.png" className="logo-footer" />
                    <div className="redes">
                        <p>Todos los derechos reservados HDevs</p>
                        <p>Redes sociales</p>
                        <a href="https://www.facebook.com/chan.munoz.35" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/hdevs421/?igsh=ODA1NTc5OTg5Nw%3D%3D" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/haroldmd42" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/yan-harold-mu%C3%B1oz-dominguez-44a2a6b9/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://wa.link/kcceff" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>

                        
                    </div>

                </div>
            </footer>
    </div>
  );
};
