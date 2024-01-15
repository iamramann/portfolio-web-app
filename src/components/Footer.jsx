import React from "react";
import { disclaimerText } from "../../constants";

function Footer() {
  return (
    <footer className="bg-slate-50">
      <span className="flex justify-center font-bold  text-xs text-gray-400">
        <p className="text-center">{disclaimerText}</p>
      </span>
      <div className="flex justify-center py-4">
        <p className="text-sm lg:text-md font-semibold text-gray-700">
          &copy; Raman Sharma All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
