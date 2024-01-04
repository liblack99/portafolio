import React from "react";
import { projects } from "../../services/project";
import ProjectsCard from "../ProjectsCard";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-4 pt-[100px] sm:w-full ">
      <h2 className="text-3xl p-2 mb-2 text-white lg:hidden sm:block">
        Proyectos
      </h2>
      {projects.map((project, index) => (
        <ProjectsCard key={index} projects={project} />
      ))}
    </section>
  );
}

export default ProjectsSection;
