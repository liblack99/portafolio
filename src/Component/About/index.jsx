import React from "react";

function About() {
  return (
    <section
      className="flex w-[100%] min-w-[400px] pt-[100px] flex-col  justify-center sm:min-w-full"
      id="about">
      <h2 className="text-3xl mb-4 text-white lg:hidden sm:block">Sobre mi</h2>
      <p className="text-white sm:w-full ">
        Soy un entusiasta del desarrollo web con un enfoque en la parte
        frontend. Aunque aún no tengo experiencia laboral profesional, mi
        entusiasmo y dedicación por aprender y crecer en el mundo de la
        programación son inquebrantables.
        <br />
        <br /> A lo largo de mi educación y autodidactismo, he adquirido un
        sólido conocimiento de HTML, CSS y JavaScript, y he explorado
        tecnologías como React, para crear interfaces dinámicas y atractivas. Mi
        camino en el desarrollo web ha sido impulsado por mi amor por la
        resolución creativa de problemas y el deseo de mejorar la experiencia en
        línea para los usuarios.
        <br />
        <br />
        Aunque mi viaje aún está en sus primeros pasos, estoy comprometido con
        el proceso de convertirme en un desarrollador destacado.
      </p>
    </section>
  );
}

export default About;
