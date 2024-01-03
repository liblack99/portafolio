import React from "react";
import { projects } from "../../services/project";
import ProjectsCard from "../ProjectsCard";

function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-4 pt-[100px] ">
      {projects.map((project, index) => (
        <ProjectsCard key={index} projects={project} />
      ))}
    </section>
  );
}

export default ProjectsSection;
