import React from "react";
import { ProjectInfoCard } from "./sub";
import { projects as projectInfo } from "../../constants";

function Projects() {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between">
        {projectInfo.map((project) => {
          return <ProjectInfoCard key={project.id} project={project} />;
        })}
      </div>
    </>
  );
}

export default Projects;
