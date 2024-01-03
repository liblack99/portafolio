import React from "react";

function Modal() {
  return (
    <div className={`modal`}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-[#193756] w-[400px] mx-auto mt-20 p-4 rounded-md shadow-lg">
        <p className="text-2xl text-white">¡Gracias por contactarme!</p>
      </div>
    </div>
  );
}

export default Modal;
