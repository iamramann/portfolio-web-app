import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ navItems }) {
  return (
    <>
      <header className="bg-slate-50 sticky top-0">
        <nav className="relative top-0 p-4 lg:p-8 flex justify-between items-center bg-gray-100 dark:bg-slate-800">
          <Link href="/">
            <img src="###" alt="" />
            <span className="ml-3 text-lg xl:text-2xl md:text-xxl  md:block cursor-pointer dark:text-white">
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
            <span className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-3 px-6 bg-gray-900 dark:bg-gray-50  text-sm text-gray-50 dark:text-gray-900 100font-bold  rounded-xl transition duration-200">
              Read Blog
            </span>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
