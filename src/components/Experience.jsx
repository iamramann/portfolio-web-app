import { useState } from "react";
import { educationDetails, workExperienceDetails } from "../../constants";

const BriefcaseIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`w-5 h-5 ${active ? "text-white" : "text-violet-500 dark:text-violet-400"}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    />
  </svg>
);

const GradCapIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`w-5 h-5 ${active ? "text-white" : "text-indigo-500 dark:text-indigo-400"}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);

function CenterTimeline({ items, accent }) {
  const isViolet = accent === "violet";
  const dotColor = isViolet
    ? "from-violet-500 to-indigo-500"
    : "from-indigo-500 to-violet-500";
  const lineColor = isViolet
    ? "from-violet-500 via-indigo-400 to-transparent"
    : "from-indigo-500 via-violet-400 to-transparent";

  return (
    <div className="relative">
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b ${lineColor} hidden md:block`}
      />
      <div className="space-y-6">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const accentRing = isLeft
            ? isViolet
              ? "ring-violet-400 dark:ring-violet-600"
              : "ring-indigo-400 dark:ring-indigo-600"
            : isViolet
              ? "ring-indigo-400 dark:ring-indigo-600"
              : "ring-violet-400 dark:ring-violet-600";
          const accentText = isLeft
            ? isViolet
              ? "text-violet-600 dark:text-violet-400"
              : "text-indigo-600 dark:text-indigo-400"
            : isViolet
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-violet-600 dark:text-violet-400";
          const badgeCls = isLeft
            ? isViolet
              ? "bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/40"
              : "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/40"
            : isViolet
              ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/40"
              : "bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/40";
          const hoverBorder = isLeft
            ? "hover:border-violet-300 dark:hover:border-violet-700"
            : "hover:border-indigo-300 dark:hover:border-indigo-700";

          const isExperience = "position" in item;
          const title = isExperience ? item.position : item.courseName;
          const subtitle = isExperience ? item.companyName : item.instituteName;
          const badge = isExperience ? item.joinedOn : item.marks;
          const description = isExperience
            ? item.jobDescription
            : item.description;
          const logo = item.logo;
          const initial = isExperience
            ? item.companyName.charAt(0)
            : item.instituteName.charAt(0);

          const Card = (
            <div
              className={`bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/60 ${hoverBorder} hover:shadow-xl transition-all duration-300`}
            >
              <div
                className={`flex items-start gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full overflow-hidden ring-2 ${accentRing} flex-shrink-0 bg-white dark:bg-slate-700 flex items-center justify-center`}
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={subtitle}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className={`text-sm font-bold ${accentText}`}>
                      {initial}
                    </span>
                  )}
                </div>
                <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {title}
                  </h4>
                  <p className={`text-sm font-semibold ${accentText}`}>
                    {subtitle}
                  </p>
                  <span
                    className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeCls}`}
                  >
                    {badge}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>
          );

          return (
            <div
              key={index}
              className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
            >
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${dotColor} ring-4 ring-slate-50 dark:ring-slate-950 z-10 hidden md:block`}
              />
              {isLeft ? (
                <>
                  <div className="md:pr-8">{Card}</div>
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" />
                  <div className="md:pl-8">{Card}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");
  const isExp = activeTab === "experience";

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            My professional journey — from early engineering roots to consulting
            at global firms.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isExp
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <BriefcaseIcon active={isExp} />
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                !isExp
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <GradCapIcon active={!isExp} />
              Education
            </button>
          </div>
        </div>

        {/* Timeline content */}
        {isExp ? (
          <CenterTimeline items={workExperienceDetails} accent="violet" />
        ) : (
          <CenterTimeline items={educationDetails} accent="indigo" />
        )}
      </div>
    </section>
  );
}
