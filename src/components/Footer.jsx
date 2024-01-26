import React from "react";
import { disclaimerText } from "../../constants";

function Footer() {
  return (
    <footer className="dark:bg-slate-950">
      <span className="flex justify-center text-sm dark:text-white">
        <p className="text-center mx-2 lg:mx-0 text-xs">{disclaimerText}</p>
      </span>
      <div className="flex justify-center py-4">
        <p className="text-sm lg:text-md font-semibold dark:text-white">
          &copy; Raman Sharma All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
