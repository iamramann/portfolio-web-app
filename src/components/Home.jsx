import { assetReferences } from "../../constants";
import resume from "./Raman_Sharma_Resume.pdf";
import { GithubSvg, HackerrankSvg, LinkedInSvg } from "./svg/Icons";

function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-300/10 to-indigo-300/10 dark:from-violet-800/10 dark:to-indigo-800/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/40 border border-violet-200 dark:border-violet-700/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Raman Sharma
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
              Full Stack{" "}
              <span className="text-violet-600 dark:text-violet-400">
                Software Engineer
              </span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Specializing in building scalable, efficient web applications with
              modern technologies. Passionate about clean code and great user
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-glow hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <a
                href={resume}
                download="Raman_Sharma_Resume"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-violet-600 dark:border-violet-500 text-violet-600 dark:text-violet-400 font-semibold text-sm hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all duration-200 text-center"
              >
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Connect:
              </span>
              <a
                href="https://github.com/iamramann"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubSvg />
              </a>
              <a
                href="https://www.linkedin.com/in/iamramann/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInSvg />
              </a>
              <a
                href="https://www.hackerrank.com/profile/hey_raman"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all duration-200"
                aria-label="HackerRank"
              >
                <HackerrankSvg />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 blur-2xl opacity-30 dark:opacity-20 scale-110 animate-pulse-slow" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-br from-violet-600 to-indigo-600 shadow-glow-lg animate-float">
                <img
                  src={assetReferences.pic1}
                  alt="Raman Sharma"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-slate-800 rounded-xl px-3 py-2 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💼</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">
                      3+ Years
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white dark:bg-slate-800 rounded-xl px-3 py-2 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">
                      7+ Projects
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex flex-col items-center gap-1">
          <button
            onClick={() => scrollTo("about")}
            className="text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
