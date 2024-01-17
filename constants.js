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
    id: 7,
    name: "Portfolio Application",
    purpose: "React based portfolio app",
    contributions: [
      "Built personal portfolio application.",
      "Used tailwind css framework for UI.",
      "Fully responsive.",
      "Deployed using github and vercel.",
    ],
    technologies: ["React", "TailwindCSS", "Vercel"],
    projectLink: "https://raman-dev.vercel.app/",
  },
  {
    id: 1,
    name: "Blog Application",
    purpose: "Blog application with appwrite backend",
    contributions: [
      "Built scalable architecture using Redux-Toolkit.",
      "Used appwrite backend as a service.",
      "Implemented authentication service.",
      "Used react-hook-form for handling forms.",
    ],
    technologies: ["React", "RTK", "Appwrite", "TailwindCSS", "Vercel"],
    projectLink: "https://appwriteblog-zeta.vercel.app/",
  },
  {
    id: 2,
    name: "Currency Convertor",
    purpose: "React based currency coversion app",
    contributions: [
      "Built personal currency conversion project.",
      "Used tailwind css framework for UI.",
      "Fully responsive.",
      "Deployed using github and firebase.",
    ],
    technologies: ["Reactjs", "TailwindCSS", "Firebase"],
    projectLink: "https://currency-convertor-9a4f8.firebaseapp.com/",
  },
  {
    id: 6,
    name: "Photo Sharing Application",
    purpose: "React based photo sharing application.",
    contributions: [
      "Built personal photo sharing applicaiton.",
      "Used CSS3 for UI.",
      "Fully responsive.",
    ],
    technologies: ["React"],
    projectLink: "https://github.com/iamramann/MERN-photoApp",
  },
  {
    id: 5,
    name: "Plasma Donor App",
    purpose: "React based plasma donor application",
    contributions: [
      "Built plasma donor applicaiton.",
      "Used CSS3 for UI.",
      "Fully responsive.",
    ],
    technologies: ["React"],
    projectLink: "https://github.com/iamramann/plasma-donor-app",
  },
  {
    id: 3,
    name: "HousingVousing",
    purpose: "rental property management system",
    contributions: [
      "Built the project from scratch.",
      "Used latest angular version for frontend development.",
      "Developed backend in .NET technologies.",
      "Deployed both frontend and backend on google firebase and azure cloud.",
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
    name: "CQKart",
    purpose: "Web based e-Commerce app",
    contributions: [
      "Built the project from scratch.",
      "Used HTML, CSS and Vanila JS for frontend development.",
      "Developed backend in node and express js.",
      "Deployed both frontend and backend on heroku.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Nodejs",
      "ExpressJs",
      "Cloudinary",
      "Stripe",
      "Heroku",
    ],
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
  React: ["bg-sky-50", "text-sky-600"],
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
  Vercel: ["bg-gray-50", "text-gray-600"],
  Stripe: ["bg-gray-50", "text-blue-600"],
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
