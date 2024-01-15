import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { navItems } from "../constants";

function App() {
  return (
    <>
      <div className="h-screen w-full container-snap">
        <Header navItems={navItems} />
        <main className="min-h-[94%] py-4 mt-4 2xl:w-4/5 m-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
