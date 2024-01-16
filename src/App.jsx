import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { navItems } from "../constants";

function App() {
  return (
    <>
      <div className="h-screen w-full container-snap">
        <Header navItems={navItems} />
        <main className="min-h-[94%] overflow-hidden ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
