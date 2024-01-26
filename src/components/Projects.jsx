import React from "react";
import { ProjectInfoCard } from "./sub";
import { projects as projectInfo } from "../../constants";

function Projects() {
  return (
    <>
      <div className="mx-auto w-full lg:w-5/6 m-[120px]">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {projectInfo.map((project) => {
              return (
                <div key={project.id} className="m-2 flex justify-center">
                  <ProjectInfoCard project={project} />;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
