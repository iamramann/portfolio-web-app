import BeboLogo from "./src/images/bebo_logo.jpg";
import KukLogo from "./src/images/kuk_logo.png";
import pic from "./src/images/pic.jpg";

export const projects = [
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
    technologies: ["Reactjs", "RTK", "Appwrite", "TailwindCSS"],
    projectLink: "https://appwriteblog-zeta.vercel.app/",
  },
  {
    id: 2,
    name: "Currency Convertor",
    purpose: "React based currency coversion application",
    contributions: [
      "Integrating free currency API and performing real time currency conversion",
      "Design using tailwind",
      "Deployed the project to google firebase",
    ],
    technologies: ["Reactjs", "TailwindCSS", "Firebase"],
    projectLink: "https://currency-convertor-9a4f8.firebaseapp.com/",
  },
  {
    id: 3,
    name: "HousingVousing",
    purpose: "Angular based rental property management system",
    contributions: [
      "Integrating free currency API and performing real time currency conversion",
      "Design using tailwind",
      "Deployed the project to google firebase",
    ],
    technologies: [
      "Angular",
      "Dotnet",
      "SQLServer",
      "Bootstrap",
      "Firebase",
      "Azure",
    ],
    projectLink: "https://housingvousing.com/",
  },
  {
    id: 4,
    name: "HousingVousing",
    purpose: "Angular based rental property management system",
    contributions: [
      "Integrating free currency API and performing real time currency conversion",
      "Design using tailwind",
      "Deployed the project to google firebase",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Nodejs",
      "ExpressJs",
      "Heroku",
    ],
    projectLink: "https://github.com/iamramann/cqkart",
  },
  {
    id: 5,
    name: "Plasma Donor App",
    purpose: "React based plasma donor application",
    contributions: [
      "Integrating free currency API and performing real time currency conversion",
      "Design using tailwind",
      "Deployed the project to google firebase",
    ],
    technologies: ["React"],
    projectLink: "https://github.com/iamramann/cqkart",
  },
  {
    id: 6,
    name: "Photo Sharing Application",
    purpose: "React based photo sharing application",
    contributions: [
      "Integrating free currency API and performing real time currency conversion",
      "Design using tailwind",
      "Deployed the project to google firebase",
    ],
    technologies: ["React"],
    projectLink: "https://github.com/iamramann/cqkart",
  },
  {
    id: 7,
    name: "Portfolio Application",
    purpose: "React based portfolio application",
    contributions: [
      "Integrating free currency API and performing real time currency conversion",
      "Design using tailwind",
      "Deployed the project to google firebase",
    ],
    technologies: ["React"],
    projectLink: "https://github.com/iamramann/cqkart",
  },
];

export const navItems = [
  {
    name: "Home",
    slug: "/home",
    active: true,
  },
  {
    name: "About",
    slug: "/about",
    active: false,
  },
  {
    name: "Portfolio",
    slug: "/portfolio",
    active: false,
  },
  {
    name: "Contact",
    slug: "/contact",
    active: false,
  },
];

export const mapTechnologiesColor = {
  Reactjs: ["bg-sky-50", "text-sky-600"],
  Angular: ["bg-rose-50", "text-rose-600"],
  HTML: ["bg-rose-50", "text-rose-600"],
  ExpressJs: ["bg-rose-50", "text-rose-600"],
  Dotnet: ["bg-indigo-50", "text-indigo-600"],
  SQLServer: ["bg-yellow-50", "text-yellow-600"],
  Javascript: ["bg-yellow-50", "text-yellow-600"],
  Firebase: ["bg-orange-50", "text-orange-600"],
  Azure: ["bg-teal-50", "text-teal-600"],
  Nodejs: ["bg-teal-50", "text-teal-600"],
  Appwrite: ["bg-pink-50", "text-pink-600"],
  RTK: ["bg-purple-50", "text-purple-600"],
  Heroku: ["bg-purple-50", "text-purple-600"],
  Bootstrap: ["bg-purple-50", "text-purple-600"],
  TailwindCSS: ["bg-sky-50", "text-sky-400"],
  CSS: ["bg-sky-50", "text-sky-400"],
  defaultColor: ["bg-sky-50", "text-sky-600"],
};

export const assetReferences = {
  pic: pic,
  kukLogo: KukLogo,
  beboLogo: BeboLogo,
};

export const educationDetails = [
  {
    type: "Post Graduation",
    logo: assetReferences.kukLogo,
    instituteName: "Kurukshetra University (2019-2022)",
    courseName: "Master of computer applications",
    marks: "8.82 CGPA",
    description:
      "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Dignissimos commodi",
  },
  {
    type: "Graduation",
    logo: assetReferences.kukLogo,
    instituteName: "Sanatan Dharma College (2014-2017)",
    courseName: "B.Sc. (Information Technology)",
    marks: "75.56%",
    description:
      "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Dignissimos commodi",
  },
];

export const workExperienceDetails = [
  {
    companyName: "Bebo Technologies Pvt. Ltd.",
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos commodi",
    position: "Software Engineer",
    joinedOn: "January 31, 2022",
    logo: assetReferences.beboLogo,
  },
];

export const aboutMeText =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, expedita repellendus, maiores quasi perspiciatis, amet officia cupiditate eligendi praesentium ad omnis quos sit porro dicta accusamus quas non possimus neque?";

export const disclaimerText =
  "Disclaimer: The images used on this website are not owned by me. All images are the property of their respective owners. We do not claim ownership of these images and acknowledge the ntellectual property rights of the original creators.";
