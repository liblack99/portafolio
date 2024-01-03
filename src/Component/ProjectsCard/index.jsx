import React from "react";
import Icon from "../Icon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Technologies from "../Technologies";

function ProjectsCard({ projects }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={projects.page} target="_blank">
      <article
        className="w-[576px]  flex gap-2 justify-start rounded-md hover:bg-[#ffffff08] mb-8"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
        <figure className=" w-[120px] h-[70px] m-2 ">
          <img
            src={projects.image}
            alt={projects.name}
            className="rounded-sm"
          />
        </figure>
        <div>
          <div className="flex items-center gap-1">
            <h3
              className={`${
                hover ? "textProject" : null
              } font-semibold text-white text-xl`}>
              {projects.name}
            </h3>
            <span>
              <Icon
                icon={faArrowRight}
                css={`
                  ${hover && "hoverProject"} text-white rotate-[-45deg]
                `}
              />
            </span>
          </div>
          <p className="w-[392px] h-[118px] text-white">
            {projects.description}
          </p>
          <div className="flex gap-2">
            {projects.technologies.map((technology, index) => (
              <Technologies key={index} technology={technology} />
            ))}
          </div>
        </div>
      </article>
    </a>
  );
}

export default ProjectsCard;
