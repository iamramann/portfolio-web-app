import { useState } from "react";
import { projects as projectInfo } from "../../constants";

const techColorMap = {
  React:
    "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700/40",
  Angular:
    "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700/40",
  TailwindCSS:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700/40",
  Dotnet:
    "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700/40",
  Firebase:
    "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700/40",
  Vercel:
    "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600",
  Reactjs:
    "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700/40",
  default:
    "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/40",
};

const gradients = [
  "from-violet-600 to-indigo-600",
  "from-indigo-600 to-blue-600",
  "from-violet-600 to-purple-600",
  "from-fuchsia-600 to-violet-600",
  "from-blue-600 to-indigo-600",
  "from-indigo-600 to-violet-600",
  "from-purple-600 to-indigo-600",
];

function getTechColor(tech) {
  return techColorMap[tech] || techColorMap.default;
}

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

function Projects() {
  const [activeId, setActiveId] = useState(projectInfo[0]?.id);
  const activeProject =
    projectInfo.find((p) => p.id === activeId) || projectInfo[0];
  const idx = projectInfo.findIndex((p) => p.id === activeId);
  const gradient = gradients[idx % gradients.length];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Click any project to explore it in detail — from architecture
            decisions to live demos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Project list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {projectInfo.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`group w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
                  activeId === project.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 border-transparent shadow-lg scale-[1.02]"
                    : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-md"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm transition-all duration-200 ${
                    activeId === project.id
                      ? "bg-white/20 text-white"
                      : "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-semibold text-sm truncate transition-colors duration-200 ${
                      activeId === project.id
                        ? "text-white"
                        : "text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {project.name}
                  </p>
                  <p
                    className={`text-xs truncate mt-0.5 transition-colors duration-200 ${
                      activeId === project.id
                        ? "text-violet-200"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {project.purpose}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                    activeId === project.id
                      ? "text-white"
                      : "text-slate-400 group-hover:text-violet-500 group-hover:translate-x-1"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Project detail */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-xl">
              {/* Header banner */}
              <div className={`relative bg-gradient-to-br ${gradient} p-8`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_white_0%,_transparent_70%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                      Project {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(projectInfo.length).padStart(2, "0")}
                    </span>
                    <a
                      href={activeProject.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-sm transition-all duration-200"
                    >
                      Live Demo <ExternalLinkIcon />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {activeProject.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {activeProject.purpose}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white dark:bg-slate-800/80 p-6">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                    What I built
                  </p>
                  <ul className="space-y-2.5">
                    {activeProject.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3 h-3 text-violet-600 dark:text-violet-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-700/60">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={activeProject.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${gradient} hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-md`}
                >
                  View Project
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
