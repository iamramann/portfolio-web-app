export default function BtnSub({ children, className = "" }) {
  return (
    <>
      <button
        className={`dark:bg-slate-700 bg-black  font-bold rounded-md
               dark:text-white border-2 dark:border-slate-600 dark:hover:bg-slate-900 ${className}`}
      >
        {children}
      </button>
    </>
  );
}
