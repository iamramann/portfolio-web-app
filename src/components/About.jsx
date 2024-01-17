import React, { useState } from "react";
import {
  aboutMeText,
  assetReferences,
  educationDetails,
  workExperienceDetails,
  frontendTechnologies,
  backendTechnologies,
  projectManagementTools,
} from "../../constants";
import { Link } from "react-router-dom";
import { GithubSvg, HackerrankSvg, LinkedInSvg } from "./svg/Icons";
import { DownSvg, UpSvg } from "../images/svg";

function About() {
  const [isFrontendTechVisible, setIsFrontendTechVisible] = useState(true);
  const [isBackendTechVisible, setIsBackendTechVisible] = useState(false);
  const [isPMToolsVisible, setIsPMToolsVisible] = useState(false);

  return (
    <>
      <div className="container lg:w-5/6 gap-0 flex justify-center flex-col lg:flex-row mx-auto prose-h3:text-lg prose-h2:text-xl prose-h1:text-3xl">
        <div className="w-full lg:w-4/6 p-5 px-3 mx-auto bg-white order-2">
          <div className="mx-auto p-5 rounded-lg shadow-lg">
            <h1 className="prose font-semibold mb-2 w-full">
              Social Media Profile
            </h1>
            <hr />
            <div className="w-full grid grid-cols-2">
              <div className="my-2 flex items-center py-2 mx-1">
                <Link
                  to={"https://github.com/iamramann"}
                  className="flex items-center text-sm"
                >
                  <span>
                    <GithubSvg />
                  </span>
                  &nbsp; GitHub
                </Link>
              </div>
              <div className="my-2 flex items-center py-2 mx-1">
                <Link
                  to={"https://www.linkedin.com/in/iamramann/"}
                  className="flex items-center text-sm"
                >
                  <span>
                    <LinkedInSvg />
                  </span>
                  &nbsp; LinkedIn
                </Link>
              </div>
              <div className=" my-2 flex items-center py-2 mx-1">
                <Link
                  to={"https://www.hackerrank.com/profile/hey_raman"}
                  className="flex items-center text-sm"
                >
                  <span>
                    <HackerrankSvg />
                  </span>
                  &nbsp; Hackerrank
                </Link>
              </div>
            </div>
          </div>
          <div className="my-2 p-5 px-8 mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="prose font-semibold mb-2">Education</h1>
            <hr />
            <div>
              {educationDetails.map(
                ({
                  type,
                  logo,
                  instituteName,
                  courseName,
                  description,
                  marks,
                }) => {
                  return (
                    <div key={courseName}>
                      <div className="my-1 p-2">
                        <h2 className="prose prose-stone my-2 p-1 font-semibold text-center lg:text-left">
                          {type}
                        </h2>
                        <div className="flex flex-col lg:flex-row items-center">
                          <img
                            src={logo}
                            alt=""
                            width={145}
                            height={140}
                            className="rounded-full"
                          />
                          <div className="p-2">
                            <h3 className="text-sm lg:text-md font-semibold text-center lg:text-left">
                              {instituteName}
                            </h3>
                            <span>
                              <article className="text-justify prose prose-sm prose-stone">
                                {description}
                              </article>
                              {/* <label className="font-semibold text-sm lg:text-md">
                                Description:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {description}
                              </span> */}
                            </span>

                            <br />
                            <div className="my-1">
                              <label className="font-semibold text-sm lg:text-md">
                                Course:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {courseName}
                              </span>
                            </div>
                            <div className="my-1">
                              <label className="font-semibold text-sm lg:text-md">
                                Marks:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {marks}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/6 p-5 px-3 mx-auto bg-white order-1">
          <div>
            <div className="mx-auto p-5 rounded-lg shadow-lg">
              <h1 className="prose font-semibold  mb-2 w-full">About</h1>
              <hr />
              <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                  <img
                    src={assetReferences.pic1}
                    width={215}
                    height={215}
                    alt="..."
                    className="shadow rounded-full max-w-full h-auto align-middle border-none"
                  />
                </div>
              </div>
              <div className="about-me p-5">
                <article className="text-center prose lg:prose-md prose-stone">
                  {aboutMeText}
                </article>
              </div>
            </div>
            <div className="p-5 mt-2 px-8 mx-auto bg-white rounded-lg shadow-lg">
              <h1 className="prose font-semibold  mb-2">Experience</h1>
              <hr />
              {workExperienceDetails.map(
                ({ companyName, jobDescription, joinedOn, position, logo }) => {
                  return (
                    <div key={companyName}>
                      <div className="my-1">
                        <h2 className="prose prose-stone my-2 p-1 font-semibold">
                          {companyName}
                        </h2>
                        <div className="flex lg:flex-row flex-col items-center">
                          <img
                            src={logo}
                            alt=""
                            width={145}
                            height={140}
                            className="rounded-full"
                          />
                          <div className="p-2">
                            <h3 className="hidden lg:visible lg:text-md font-semibold text-sm">
                              {companyName}
                            </h3>
                            <span>
                              <article className="text-justify prose prose-sm prose-stone">
                                {jobDescription}
                              </article>
                            </span>
                            <br />
                            <div className="my-1">
                              <label className="font-semibold text-sm lg:text-md">
                                Position:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {position}
                              </span>
                            </div>
                            <div className="my-1">
                              <label className="font-semibold text-sm lg:text-md">
                                Employee since:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {joinedOn}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className=" p-5 mt-2 px-8 mx-auto bg-white rounded-lg shadow-lg m-2">
            <h1 className="prose font-semibold  mb-2 w-full">Technologies</h1>
            <hr />
            <div className="mt-5 w-full">
              <div
                className="my-2  bg-gray-50 p-1 flex justify-between"
                onClick={() => {
                  setIsFrontendTechVisible((prev) => !prev);
                }}
              >
                <h2 className="prose prose-stone font-semibold">
                  Frontend Technologies
                </h2>
                <img
                  src={!isFrontendTechVisible ? DownSvg : UpSvg}
                  alt=""
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
              <div
                className="w-full grid grid-cols-2 lg:grid-cols-3"
                style={{
                  display: isFrontendTechVisible ? "grid" : "none",
                }}
              >
                {frontendTechnologies.map((item) => (
                  <div
                    className="my-2 flex items-center py-2 mx-1"
                    key={item.name}
                  >
                    <span>
                      <img src={item.logo} alt="" className="w-8 h-8" />
                    </span>
                    &nbsp; {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full">
              <div
                className="my-2  bg-gray-50 p-1 flex justify-between"
                onClick={() => {
                  setIsBackendTechVisible((prev) => !prev);
                }}
              >
                <h2 className="prose prose-stone font-semibold">
                  Backend Technologies
                </h2>
                <img
                  src={!isBackendTechVisible ? DownSvg : UpSvg}
                  alt=""
                  className="w-8 h-8 cursor-pointer"
                />
              </div>

              <div
                className="w-full grid grid-cols-2 lg:grid-cols-3"
                style={{
                  display: isBackendTechVisible ? "grid" : "none",
                }}
              >
                {backendTechnologies.map((item) => (
                  <div
                    className="my-2 flex items-center py-2 mx-1"
                    key={item.name}
                  >
                    <span>
                      <img src={item.logo} alt="" className="w-8 h-8" />
                    </span>
                    &nbsp; {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="  w-full ">
              <div
                className="my-2  bg-gray-50 p-1 flex justify-between"
                onClick={() => {
                  setIsPMToolsVisible((prev) => !prev);
                }}
              >
                <h2 className="prose prose-stone font-semibold">
                  Project Management Tools
                </h2>
                <img
                  src={!isPMToolsVisible ? DownSvg : UpSvg}
                  alt=""
                  className="w-8 h-8 cursor-pointer"
                />
              </div>

              <div
                className="w-full grid grid-cols-2 lg:grid-cols-3"
                style={{
                  display: isPMToolsVisible ? "grid" : "none",
                }}
              >
                {projectManagementTools.map((item) => (
                  <div
                    className="my-2 flex items-center py-2 mx-1"
                    key={item.name}
                  >
                    <span>
                      <img src={item.logo} alt="" className="w-8 h-8" />
                    </span>
                    &nbsp; {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
