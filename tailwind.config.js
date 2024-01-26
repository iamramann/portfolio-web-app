/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bermuda: "#78dcca",
      sky: "#0369a1",
      blue400: "#60a5fa",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
      },
      slate: {
        600: "#475569",
        700: "#334155",
        900: "#0f172a",
        950: "#020617",
      },
      zinc: {
        300: "#d1d5db",
        200: "#e5e7eb",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/bg-img.jpg')",
      },
      margin: {
        "80px": "80px",
        "120px": "120px",
      },
      minHeight: {
        "128px": "32rem",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    {
      pattern:
        /bg-(rose|indigo|yellow|orange|teal|pink|purple|sky|red|gray|blue)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /text-(rose|indigo|yellow|orange|teal|pink|purple|sky|red|gray|blue)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  // safelist: [
  //   "bg-sky-50",
  //   "text-sky-600",
  //   "bg-rose-50",
  //   "bg-red-100",
  //   "text-rose-600",
  //   "bg-indigo-50",
  //   "text-indigo-600",
  //   "bg-yellow-50",
  //   "text-yellow-600",
  //   "bg-orange-50",
  //   "text-orange-600",
  //   "bg-teal-50",
  //   "text-teal-600",
  //   "bg-pink-50",
  //   "text-pink-600",
  //   "bg-purple-50",
  //   "bg-red-50",
  //   "bg-red-900",
  //   "bg-slate-900",
  //   "text-purple-600",
  // ],
});
