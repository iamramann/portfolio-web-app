import React from "react";
import { ProjectInfoCard } from "./sub";
const projects = [
  {
    id: 1,
    name: "Blog Application",
    purpose: "Blog application with appwrite backend",
    contributions: [
      "Build scalable architecture using Redux-Toolkit",
      "Used appwrite backend as a service",
      "Implemented authentication service",
      "Used react-hook-form for handling forms",
    ],
    technologies: ["Reactjs", "RTK", "Appwrite"],
    projectLink: "https://appwriteblog-zeta.vercel.app/",
  },
  {
    id: 2,
    name: "Project A",
    purpose: "Project A purpose",
    contributions: [
      "Project A contribution1",
      "Project A contribution2",
      "Project A contribution3",
      "Project A contribution4",
    ],
    technologies: ["Reactjs"],
    projectLink: "some_link",
  },
];
function Projects() {
  return (
    <>
      <div className="flex flex-wrap">
        {projects.map((project) => {
          return <ProjectInfoCard key={project.id} project={project} />;
        })}
      </div>
    </>
  );
}

export default Projects;
