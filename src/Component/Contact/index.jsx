import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import Modal from "../Modal";

function Contact() {
  const [state, handleSubmit] = useForm("xvojkrab");
  const [showModal, setShowModal] = useState(false);

  const handleSubmitForm = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      clearInput();
    }, 1500);
  };
  const clearInput = () => {
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputMessage = document.getElementById("message");
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
  };

  return (
    <section
      id="contact"
      className="pt-[120px] flex flex-col w-[100%] mb-[100px]">
      <h2 className="text-3xl mb-8 text-white lg:hidden sm:block">Contacto</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center  gap-4">
        <label htmlFor="name" className="text-white text-2xl">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="rounded-md bg-[#193756] p-2 focus:outline-none"
        />
        <ValidationError prefix="Nombre" field="name" errors={state.errors} />
        <label htmlFor="email" className="text-white text-2xl">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="rounded-md bg-[#193756] p-2 focus:outline-none"
        />
        <ValidationError
          prefix="Correo electrónico"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message" className="text-white text-2xl">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          className="rounded-md bg-[#193756] h-[100px] p-4 focus:outline-none sm:h-[200px]"
        />
        <ValidationError
          prefix="Mensaje"
          field="message"
          errors={state.errors}
        />
        <div className="w-full flex justify-center items-center mt-[12px]">
          <button
            type="submit"
            onClick={handleSubmitForm}
            disabled={state.submitting}
            className="bg-[#193756] text-[#51cbce] border border-white w-[80px] text-center rounded-md h-[32px] hover:border-[#51cbce] hover:text-white">
            Enviar
          </button>
        </div>
      </form>
      {showModal && <Modal />}
    </section>
  );
}

export default Contact;
