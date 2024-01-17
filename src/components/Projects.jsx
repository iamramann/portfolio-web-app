import React from "react";
import { ProjectInfoCard } from "./sub";
import { projects as projectInfo } from "../../constants";

function Projects() {
  return (
    <>
      <div className="mx-auto w-full lg:w-5/6 mt-5">
        <div className="flex flex-wrap gap-5 justify-evenly">
          {projectInfo.map((project) => {
            return <ProjectInfoCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
