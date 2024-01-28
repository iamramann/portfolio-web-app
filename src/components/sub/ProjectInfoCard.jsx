import { mapTechnologiesColor } from "../../../constants";
function ProjectInfoCard({ project }) {
  const { id, name, purpose, contributions, technologies } = project;

  return (
    <>
      <div className="w-full m-2 shadow-xl bg-zic-300 border-zinc-200 border-2 dark:border-0 dark:bg-slate-700 cursor-pointer hover:scale-105">
        <div className="dark:bg-slate-900 bg-black p-4">
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
            <h1 className="text-lg font-bold dark:text-white"> {purpose}</h1>
          </div>
          <div className="dark:text-white">
            <h1 className="mt-2 mb-2 text-xl">Project Contributions</h1>
            <div>
              {contributions &&
                contributions.map((contribution, index) => {
                  return (
                    <div className="mb-2" key={`contribution-${id + index}`}>
                      <span className="text-gray-500 w-4 mr-2   inline-flex items-center justify-center pt-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="w-3 h-3 dark:text-white text-black"
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
        <div className="m-3 p-1 dark:text-white">
          <h1 className="text-lg font-bold">Technologies</h1>
          <div className="flex flex-wrap">
            {technologies &&
              technologies.map((technology, index) => {
                return (
                  <nav
                    key={`technology-${id + index}`}
                    className={`text-xs mr-2 py-1.5 px-4 my-1 text-black-600  font-semibold rounded-full ${
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
      </div>
    </>
  );
}

export default ProjectInfoCard;
