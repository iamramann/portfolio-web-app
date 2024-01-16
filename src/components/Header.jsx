import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Svg, XMarkSvg } from "./svg/Icons";

function Header({ navItems }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function toggleSidebar(e) {
    setIsSideMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className="bg-slate-50 sticky top-0">
        <nav className="relative top-0 p-4 lg:p-8  bg-gray-100">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="###" alt="" />
              <span className="ml-3 text-lg xl:text-2xl md:text-xxl  md:block cursor-pointer">
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
                        `font-medium px-3 py-2 text-slate-700 rounded hover:border-b-4 hover:border-b-gray-900 hover:text-slate-900 
											${isActive ? "border-b-4 border-b-gray-900" : ""}`
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <Link to="/blog">
              <span className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-3 px-6 bg-gray-900 text-sm text-gray-50  100font-bold  rounded-xl transition duration-200">
                Read Blog
              </span>
            </Link>
            <div>
              {!isSideMenuOpen ? (
                <Bars3Svg
                  className="cursor-pointer lg:hidden"
                  toggleSidebar={toggleSidebar}
                />
              ) : null}
            </div>
          </div>
          {isSideMenuOpen ? (
            <div className="navbar-menu relative z-50 lg:hidden">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
              <nav className="fixed   top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                  <a
                    className="mr-auto text-3xl font-bold leading-none flex align-center"
                    href="/"
                  >
                    <span className="ml-3 text-lg xl:text-2xl md:text-xxl  md:block cursor-pointer">
                      Raman Sharma
                    </span>
                  </a>

                  <XMarkSvg
                    className="cursor-pointer lg:hidden"
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
                              to={slug}
                              className={({ isActive }) =>
                                `font-medium px-3 py-2 rounded   
                                ${
                                  isActive ? "text-slate-900" : "text-slate-400"
                                }`
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
