const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Full Stack Web Development",
    description:
      "End-to-end development of modern web applications — from pixel-perfect frontends to robust, scalable backends. Built with React, Angular, .NET, and more.",
    highlights: ["Custom Web Apps", "REST API Development", "Database Design", "Cloud Deployment"],
    accent: "violet",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: "Business Application Development",
    description:
      "Custom software tailored to your business workflows. I build tools that automate processes, reduce overhead, and help your team work smarter and faster.",
    highlights: ["ERP & CRM Systems", "Workflow Automation", "Admin Dashboards", "Reporting Tools"],
    accent: "indigo",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "UI/UX & Frontend Engineering",
    description:
      "Crafting responsive, accessible, and visually stunning interfaces that convert visitors into customers. Every pixel is intentional, every interaction is smooth.",
    highlights: ["Responsive Design", "Component Libraries", "Performance Optimization", "Accessibility"],
    accent: "violet",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    title: "System Modernization & Migration",
    description:
      "Transform outdated legacy systems into modern, maintainable platforms. I help businesses migrate to newer tech stacks without disrupting existing operations.",
    highlights: ["Legacy Code Refactoring", "Tech Stack Migration", "API Integration", "Performance Tuning"],
    accent: "indigo",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "Technical Consulting",
    description:
      "Strategic guidance on architecture, technology choices, and digital transformation. Backed by experience at Deloitte and BearingPoint delivering enterprise-scale solutions.",
    highlights: ["Architecture Review", "Tech Stack Advisory", "Code Audits", "Digital Strategy"],
    accent: "violet",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "MVP & Product Launch",
    description:
      "Got a business idea? I'll help you go from concept to a fully functional MVP — fast, lean, and built to scale as your user base grows.",
    highlights: ["Rapid Prototyping", "MVP Development", "Scalable Architecture", "Launch Support"],
    accent: "indigo",
  },
];

const accentClasses = {
  violet: {
    iconBg: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    badge: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-800/40",
    hover: "hover:border-violet-300 dark:hover:border-violet-700",
    bar: "from-violet-600 to-indigo-600",
  },
  indigo: {
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    badge: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800/40",
    hover: "hover:border-indigo-300 dark:hover:border-indigo-700",
    bar: "from-indigo-600 to-violet-600",
  },
};

export default function Services() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Services That{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            From idea to deployment — I deliver technology solutions that solve
            real problems and create measurable impact for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service) => {
            const accent = accentClasses[service.accent];
            return (
              <div
                key={service.title}
                className={`group flex flex-col bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-hidden ${accent.hover} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`h-1 bg-gradient-to-r ${accent.bar}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accent.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${accent.badge}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_white_0%,_transparent_60%)]" />
          <div className="relative px-8 py-10 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Ready to build something great?
              </h3>
              <p className="text-violet-100 text-sm">
                Let&apos;s discuss your project and turn your vision into reality.
              </p>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="flex-shrink-0 px-7 py-3 rounded-xl bg-white text-violet-700 font-semibold text-sm hover:bg-violet-50 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
