import BeboLogo from "./src/images/bebo_logo.jpg";
import KukLogo from "./src/images/kuk_logo.png";
import Pic from "./src/images/pic.jpg";
import Pic1 from "./src/images/pic-1.jpg";
import BgImg from "./src/images/bg-img.jpg";
import {
  AngularSvg,
  BootstrapSvg,
  CSSSvg,
  CSharpSvg,
  DotNetSvg,
  HTMLSvg,
  JSSvg,
  JiraSvg,
  ReactSvg,
  TailwindSvg,
  Github1Svg,
  GitSvg,
  JavaSvg,
  PythonSvg,
  FirebaseSvg,
  VSSvg,
  VSCSvg,
  PostmanSvg,
  SSMSSvg,
} from "./src/images/svg/";

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
    name: "Portfolio",
    slug: "/portfolio",
    active: false,
  },
  {
    name: "About",
    slug: "/about",
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
  TailwindCSS: ["bg-sky-50", "text-sky-600"],
  CSS: ["bg-sky-50", "text-sky-600"],
  defaultColor: ["bg-sky-50", "text-sky-600"],
};

export const assetReferences = {
  pic: Pic,
  kukLogo: KukLogo,
  beboLogo: BeboLogo,
  pic1: Pic1,
  bgImg: BgImg,
};

export const educationDetails = [
  {
    type: "Post Graduation",
    logo: assetReferences.kukLogo,
    instituteName: "Kurukshetra University (2019-2022)",
    courseName: "Master of computer applications",
    marks: "8.82 CGPA",
    description:
      "Holding a post graduated degree in Master of Computer Applications (MCA) from Kurukshetra University. My academic journey has equipped me with a comprehensive understanding of various aspects of computer science, software development, and information technology.",
  },
  {
    type: "Graduation",
    logo: assetReferences.kukLogo,
    instituteName: "Sanatan Dharma College (2014-2017)",
    courseName: "B.Sc. (Information Technology)",
    marks: "75.56%",
    description:
      "I am a dynamic software engineer, and my journey in the realm of information technology began with a strong foundation laid during my undergraduate studies. I hold a Bachelor of Science in Information Technology (B.Sc. IT) from S.D. College.",
  },
];

export const workExperienceDetails = [
  {
    companyName: "Bebo Technologies Pvt. Ltd.",
    jobDescription:
      "As a software engineer, I design, develop, and test cutting-edge software solutions, collaborating seamlessly with cross-functional teams to meet project requirements. My responsibilities extend to system architecture, where I contribute to the design of scalable and efficient software systems.",
    position: "Software Engineer",
    joinedOn: "January 31, 2022",
    logo: assetReferences.beboLogo,
  },
];

export const frontendTechnologies = [
  {
    name: "HTML5",
    logo: HTMLSvg,
  },
  {
    name: "CSS3",
    logo: CSSSvg,
  },
  {
    name: "JavaScript",
    logo: JSSvg,
  },
  {
    name: "Bootstrap",
    logo: BootstrapSvg,
  },
  {
    name: "TailwindCSS",
    logo: TailwindSvg,
  },
  {
    name: "React",
    logo: ReactSvg,
  },
  {
    name: "Angular 2+",
    logo: AngularSvg,
  },
];

export const backendTechnologies = [
  {
    name: ".NET",
    logo: DotNetSvg,
  },
  {
    name: "C#",
    logo: CSharpSvg,
  },
  {
    name: "Java",
    logo: JavaSvg,
  },
  {
    name: "Python",
    logo: PythonSvg,
  },
  {
    name: "SQL Server",
    logo: SSMSSvg,
  },
];
export const projectManagementTools = [
  {
    name: "GIT",
    logo: GitSvg,
  },
  {
    name: "Github",
    logo: Github1Svg,
  },
  {
    name: "JIRA",
    logo: JiraSvg,
  },
  {
    name: "Visual Studio",
    logo: VSSvg,
  },
  {
    name: "VS Code",
    logo: VSCSvg,
  },
  {
    name: "Postman",
    logo: PostmanSvg,
  },
  {
    name: "Firebase",
    logo: FirebaseSvg,
  },
];

export const aboutMeText =
  "Welcome to my corner of the web! I'm Raman Sharma, a dedicated software engineer with a knack for crafting efficient and innovative solutions. Specializing in Fullstack development, I thrive on turning challenges into opportunities. I believe in the power of teamwork and effective communication.";

export const disclaimerText =
  "Disclaimer: The images* used on this website are not owned by me. All images* are the property of their respective owners. I do not claim ownership of these images and acknowledge the intellectual property rights of the original creators.";
