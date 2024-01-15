/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-sky-50",
    "text-sky-600",
    "bg-rose-50",
    "text-rose-600",
    "bg-indigo-50",
    "text-indigo-600",
    "bg-yellow-50",
    "text-yellow-600",
    "bg-orange-50",
    "text-orange-600",
    "bg-teal-50",
    "text-teal-600",
    "bg-pink-50",
    "text-pink-600",
    "bg-purple-50",
    "text-purple-600",
  ],
};
