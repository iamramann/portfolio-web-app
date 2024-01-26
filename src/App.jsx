import { Outlet, useSearchParams } from "react-router-dom";
import { Footer, Header } from "./components";
import { navItems } from "../constants";
import { ThemeProvider } from "@material-tailwind/react";
import { CustomThemeProvider } from "./contexts/theme";
import { useEffect, useState } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const head = document.querySelector("html");
    head.classList.remove("light", "dark");
    head.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <CustomThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="h-screen w-full container-snap bg-slate-900">
          <Header navItems={navItems} />
          <main className="min-h-[94%] overflow-hidden">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CustomThemeProvider>
    </>
  );
}

export default App;
