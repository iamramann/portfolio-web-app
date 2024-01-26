import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { navItems } from "../constants";
import { CustomThemeProvider } from "./contexts/theme";
import { useEffect, useState } from "react";
import { DaySvg, NightSvg } from "./components/svg/Icons";

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
    head.classList.add(localStorage.getItem("themeMode") || themeMode);
    setThemeMode(localStorage.getItem("themeMode"));
  }, [themeMode]);

  return (
    <>
      <CustomThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="w-full container-snap dark:bg-slate-950 relative">
          <Header navItems={navItems} />
          <main
            className="min-h-[94%] overflow-hidden"
            style={{ marginTop: "-61px" }}
          >
            <Outlet />
          </main>
          <Footer />

          <div className="w-10 h-10 fixed bottom-10 right-10  rounded-full inline-flex  justify-center items-center bg-white   py-2 border-slate-600 dark:bg-slate-700  shadow-xl">
            {themeMode === "dark" ? (
              <span>
                <DaySvg
                  className="text-black cursor-pointer day-svg"
                  toggleTheme={lightTheme}
                />
              </span>
            ) : (
              <span>
                <NightSvg
                  className="text-black cursor-pointer night-svg"
                  toggleTheme={darkTheme}
                />
              </span>
            )}
          </div>
        </div>
      </CustomThemeProvider>
    </>
  );
}

export default App;
