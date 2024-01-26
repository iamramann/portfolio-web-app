import React, { useId } from "react";

function Input({ label, className = "", type = "text", ...props }) {
  const id = useId();
  return (
    <>
      <div className="p-2 w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-md font-bold leading-6 text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}
        <div className="lg:relative mt-2 rounded-md shadow-sm">
          <input
            type={type}
            id={id}
            name={type}
            autoComplete="false"
            className={`w-full border-zinc-300 dark:bg-slate-700 bg-opacity-50 rounded border dark:border-slate-900 focus:border-slate-600 dark:focus:bg-white focus:ring-2 focus:ring-gray-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${className}`}
            {...props}
          />
        </div>
      </div>
    </>
  );
}

export default Input;
