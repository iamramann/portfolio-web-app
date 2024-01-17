import React from "react";
import { Link } from "react-router-dom";
import { mapTechnologiesColor } from "../../../constants";
function ProjectInfoCard({ project }) {
  const { id, name, purpose, contributions, technologies, projectLink } =
    project;

  return (
    <>
      <div className="w-5/6 mx-auto lg:mx-0 m-2 md:mx-0 md:w-[42%] lg:w-[30%] rounded-b-lg shadow-xl hover:outline outline-2 hover:outline-gray-200 cursor-pointer">
        <div className="bg-gray-900 p-4">
          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>

            <h1 className="text-white font-bold">{name}</h1>
          </div>
        </div>
        <div className="m-3 p-1">
          <div>
            <h1 className="text-lg font-bold text-gray-800"> {purpose}</h1>
          </div>
          <div>
            <h1 className="mt-2 mb-2 text-xl">Project Contributions</h1>
            <div>
              {contributions &&
                contributions.map((contribution, index) => {
                  return (
                    <div className="mb-2" key={`contribution-${id + index}`}>
                      <span className="text-gray-500 w-4 mr-2 rounded-full inline-flex items-center justify-center pt-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {contribution}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="m-3 p-1">
          <h1 className="text-lg font-bold text-gray-800">Technologies</h1>
          <div className="flex flex-wrap">
            {technologies &&
              technologies.map((technology, index) => {
                return (
                  <nav
                    key={`technology-${id + index}`}
                    className={`text-xs mr-2 py-1.5 px-4 my-1 text-black-600 rounded-2xl font-semibold ${
                      (mapTechnologiesColor[technology] &&
                        mapTechnologiesColor[technology][0]) ||
                      mapTechnologiesColor["defaultColor"][0]
                    } ${
                      (mapTechnologiesColor[technology] &&
                        mapTechnologiesColor[technology][1]) ||
                      mapTechnologiesColor["defaultColor"][1]
                    }`}
                  >
                    {technology}
                  </nav>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="ml-3 m-2 p-1 flex">
          &nbsp;
          <span>
            {projectLink ? (
              <>
                <Link className="underline text-blue-600" to={projectLink}>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                    &nbsp; Demo
                  </div>
                </Link>
              </>
            ) : (
              "Not available (Internal)"
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default ProjectInfoCard;
