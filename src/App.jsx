import { useEffect, useState } from "react";
import AboutNew from "./components/AboutNew";
import ContactNew from "./components/ContactNew";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { CustomThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("themeMode") || "dark",
  );

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <CustomThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Header />
        <main>
          <Home />
          <AboutNew />
          <Experience />
          <Projects />
          <ContactNew />
        </main>
        <Footer />
      </div>
    </CustomThemeProvider>
  );
}

export default App;
