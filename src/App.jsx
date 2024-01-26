import { Outlet, useSearchParams } from "react-router-dom";
import { Footer, Header } from "./components";
import { navItems } from "../constants";
import { ThemeProvider } from "@material-tailwind/react";
import { CustomThemeProvider } from "./contexts/theme";
import { useEffect, useState } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  useEffect(() => {
    const head = document.querySelector("html");
    head.classList.remove("light", "dark");
    if (!localStorage.getItem("themeMode")) {
      head.classList.add(themeMode);
      localStorage.setItem("themeMode", themeMode);
    } else {
      head.classList.add(localStorage.getItem("themeMode"));
      setThemeMode(themeMode);
    }
  }, [themeMode]);

  return (
    <>
      <CustomThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="w-full container-snap dark:bg-slate-950">
          <Header navItems={navItems} />
          <main
            className="min-h-[94%] overflow-hidden"
            style={{ marginTop: "-61px" }}
          >
            <Outlet />
          </main>
          <Footer />
        </div>
      </CustomThemeProvider>
    </>
  );
}

export default App;
