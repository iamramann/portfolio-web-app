import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Svg, CodeSvg, DownloadSvg, XMarkSvg } from "./svg/Icons";
import { BtnSub } from "./sub";
import resume from "./Raman_Sharma_Resume.pdf";
function Header({ navItems }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function toggleSidebar() {
    setIsSideMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className="bg-slate-50 shadow-xl dark:border-b-2 border-slate-700">
        <nav className="relative top-0 p-4 lg:p-6 bg-gray-100 dark:bg-slate-950">
          <div className="flex justify-between items-center">
            <Link className="flex items-center">
              <CodeSvg />
              <span className="ml-3 text-lg xl:text-2xl md:text-xxl font-bold md:block cursor-pointer dark:text-white">
                Raman Sharma
              </span>
            </Link>
            <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
              {navItems.map(({ name, slug }) => {
                return (
                  <li key={name}>
                    <NavLink
                      to={slug}
                      className={({ isActive }) =>
                        `font-bold px-3 py-2 dark:text-slate-700 rounded hover:border-b-4 hover:border-b-slate-700 hover:text-slate-900 
											${isActive ? "border-b-4 border-b-gray-900 dark:border-b-slate-700" : ""}`
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <Link to="#">
              <BtnSub className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-4 hover:scale-105">
                <span className="text-sm text-white dark:text-white font-bold">
                  Read Blog
                </span>
              </BtnSub>
            </Link>
            <a
              href={resume}
              download="Raman_Sharma_Resume"
              target="_blank"
              rel="noreferrer"
            >
              <BtnSub className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-4 hover:scale-105">
                <span className="text-sm text-white dark:text-white font-bold flex justify-between items-center">
                  <span htmlFor="">Resume</span>&nbsp;
                  <DownloadSvg />
                </span>
              </BtnSub>
            </a>
            <div className="flex items-center">
              <a
                href={resume}
                download="Raman_Sharma_Resume"
                target="_blank"
                rel="noreferrer"
                className="lg:hidden"
              >
                <DownloadSvg className="text-white mx-2" />
              </a>
              {!isSideMenuOpen ? (
                <Bars3Svg
                  className="cursor-pointer lg:hidden dark:text-white"
                  toggleSidebar={toggleSidebar}
                />
              ) : null}
            </div>
          </div>
          {isSideMenuOpen ? (
            <div className="navbar-menu relative z-50 lg:hidden">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-slate-700 border-r border-r-slate-700 overflow-y-auto">
                <div className="flex items-center mb-8">
                  <a
                    className="mr-auto text-3xl font-bold leading-none flex align-center dark:text-white"
                    href="/"
                  >
                    <CodeSvg />
                    <span className="ml-3 text-lg xl:text-2xl md:text-xxl md:block cursor-pointer dark:text-white">
                      Raman Sharma
                    </span>
                  </a>

                  <XMarkSvg
                    className="cursor-pointer lg:hidden dark:text-white"
                    toggleSidebar={toggleSidebar}
                  />
                </div>
                <div>
                  <ul className="flex flex-col">
                    {navItems.map(({ name, slug }) => {
                      return (
                        <li key={name} className="mb-1">
                          <span className="block p-4 text-sm text-gray-400 font-semibold rounded">
                            <NavLink
                              onClick={() => {
                                setIsSideMenuOpen((prev) => !prev);
                              }}
                              to={slug}
                              className={({ isActive }) =>
                                `font-bold px-3 py-2 rounded   
                                ${isActive ? "text-slate-950" : ""}`
                              }
                            >
                              {name}
                            </NavLink>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          ) : null}
        </nav>
      </header>
    </>
  );
}

export default Header;
