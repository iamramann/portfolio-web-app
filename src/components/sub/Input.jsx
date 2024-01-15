import React, { useId } from "react";

function Input({ label, className = "", type = "text", ...props }) {
  const id = useId();
  return (
    <>
      <div className="p-2 w-full lg:w-1/2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type={type}
            id={id}
            name={type}
            autoComplete="false"
            className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${className}`}
            {...props}
          />
        </div>
      </div>
    </>
  );
}

export default Input;
