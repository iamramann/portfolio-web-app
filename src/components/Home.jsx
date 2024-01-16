import React from "react";
import { assetReferences } from "../../constants";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-screen">
        <div className={`h-screen flex justify-center`}>
          <div className="flex flex-wrap justify-center mt-0 lg:mt-5 lg:justify-start flex-col items-center">
            <div className="w-6/12 sm:w-4/12   flex justify-center">
              <img
                src={assetReferences.pic1}
                width={215}
                height={215}
                alt="..."
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>

            <div className="mt-5 w-full">
              <article className="text-center dark:text-white">
                <h1 className="text-center text-white text-3xl lg:text-7xl">
                  Hi, I'm Raman Sharma
                </h1>
                <h1 className="text-center mt-5 text-2xl lg:text-5xl text-white">
                  Software Engineer
                </h1>
                <div className="w-full p-5 mt-2">
                  <Link to={"/about"}>
                    <button className="p-3 border-2 w-5/6 lg:w-2/6 text-lg bg-slate-900 text-white rounded-2xl transition hover:scale-105">
                      Know More
                    </button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
