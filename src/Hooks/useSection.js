import React, { useState, useEffect } from "react";

function useSection() {
  const [sectionActual, setSectionActual] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const about = document.getElementById("about").offsetTop;
      const projects = document.getElementById("projects").offsetTop;
      const contact = document.getElementById("contact").offsetTop;

      if (scrollPosition < projects && scrollPosition > about) {
        setSectionActual("about");
      } else if (scrollPosition >= projects && scrollPosition < contact) {
        setSectionActual("projects");
      } else if (scrollPosition >= contact) {
        setSectionActual("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return sectionActual;
}

export default useSection;
