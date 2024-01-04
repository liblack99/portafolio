import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useSection from "../../Hooks/useSection";
import Icon from "../Icon";

function Header() {
  const sectionActual = useSection();

  const line = () => {
    return "-".repeat(18);
  };

  const handle = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const sectionTarget = document.getElementById(href.slice(2));
    sectionTarget.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 font-onest">
      <div className="lg:fixed md:relative sm:relative">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-[white]">Andres Negrette</h1>
          <h2 className="text-2xl text-[white] mt-2">
            Desarrollador Front-End
          </h2>
          <p className="text-white mt-4 w-[400px]">
            Construyo experiencias digitales excepcionales y accesibles para la
            web.
          </p>
        </div>
        <div className="w-[200px] overflow-hidden mt-[60px] md:hidden sm:hidden lg:block ssm_anchor">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/#about"
                onClick={(event) => handle(event)}
                className={`${
                  sectionActual === "about" ? "selected" : "active"
                }`}>
                <span className="tracking-[-3px] text-bold ">{line()}</span>{" "}
                Sobre Mi
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className={`${
                  sectionActual === "projects" ? "selected" : "active"
                }`}
                onClick={(event) => handle(event)}>
                <span className="tracking-[-3px]">{line()}</span>
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={(event) => handle(event)}
                className={`${
                  sectionActual === "contact" ? "selected" : "active"
                }`}>
                <span className="tracking-[-3px]">{line()}</span>
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 mt-[40px]">
          <span>
            <a href="https://github.com/liblack99" target="_blank">
              <Icon
                icon={faGithub}
                css={"text-[#94a3b8] w-7 h-7 hover:text-white"}></Icon>{" "}
            </a>
          </span>
          <span>
            <a href="mailto:andresfc-@hotmail.com" target="_blank">
              <Icon
                icon={faEnvelope}
                css={"text-[#94a3b8] w-7 h-7 hover:text-white"}></Icon>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/andres-felipe-negrette-castro-9b6727290/"
              target="_blank">
              <Icon
                icon={faLinkedin}
                css={"text-[#94a3b8] w-7 h-7 hover:text-white"}></Icon>
            </a>
          </span>
          <span>
            <a
              href="https://www.canva.com/design/DAFrStlntes/OvBUVDAZTFHsORvRjxpoeQ/view?utm_content=DAFrStlntes&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank">
              <Icon
                icon={faUser}
                css={"text-[#94a3b8] w-7 h-7 hover:text-white"}></Icon>
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
