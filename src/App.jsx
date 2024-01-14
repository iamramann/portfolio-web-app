import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

const navItems = [
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
    name: "Projects",
    slug: "/projects",
    active: false,
  },
  {
    name: "Experience",
    slug: "/experience",
    active: false,
  },
  {
    name: "Contact",
    slug: "/contact",
    active: false,
  },
];

function App() {
  return (
    <>
      <div className="h-screen w-full container-snap">
        <Header navItems={navItems} />
        <main className="min-h-[94%] py-8 mt-4 2xl:w-4/5 m-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
