import {
  aboutMeText,
  assetReferences,
  backendTechnologies,
  frontendTechnologies,
  projectManagementTools,
} from "../../constants";

const skillCategories = [
  { label: "Frontend", items: frontendTechnologies, color: "violet" },
  { label: "Backend", items: backendTechnologies, color: "indigo" },
  { label: "Tools", items: projectManagementTools, color: "slate" },
];

export default function AboutNew() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Passionate about building{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              great software
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden ring-4 ring-violet-200 dark:ring-violet-800 shadow-2xl">
                <img
                  src={assetReferences.pic1}
                  alt="Raman Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-6 right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      4+
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Years Exp.
                    </p>
                  </div>
                  <div className="border-x border-slate-200 dark:border-slate-700">
                    <p className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      7+
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Projects
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      MCA
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Degree
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Hi there! I&apos;m Raman 👋
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {aboutMeText}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Angular",
                ".NET",
                "C#",
                "SQL Server",
                "TailwindCSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Technologies &amp; Tools
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Technologies I&apos;ve worked with
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map(({ label, items }) => (
              <div
                key={label}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-6 rounded-full bg-gradient-to-b from-violet-600 to-indigo-600" />
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                    {label}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-200/80 dark:border-slate-600/40 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-150 group"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-7 h-7 object-contain flex-shrink-0"
                      />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
