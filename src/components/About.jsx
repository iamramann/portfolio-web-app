import React from "react";
import {
  aboutMeText,
  assetReferences,
  educationDetails,
  workExperienceDetails,
} from "../../constants";
import { Link } from "react-router-dom";
import { GithubSvg, HackerrankSvg, LinkedInSvg } from "./svg/Icons";

function About() {
  return (
    <>
      <div className="container lg:w-5/6 flex justify-center flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-4/6 p-5 mx-auto bg-white">
          <div className="mx-auto p-5 rounded-lg shadow-md">
            <h1 className="font-semibold text-lg lg:text-4xl mb-2 w-full">
              About
            </h1>
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
            {/* <div className="profile-image flex justify-center w-full">
              <img
                src={assetReferences.pic}
                alt=""
                width={125}
                height={125}
                className="rounded-full"
              />
            </div> */}

            <div className="about-me p-5">
              <h1 className="text-center">{aboutMeText}</h1>
            </div>
          </div>
          <div className="mx-auto p-5 rounded-lg shadow-md">
            <h1 className="font-semibold text-lg lg:text-4xl mb-2 w-full">
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
        </div>
        <div className="w-full lg:w-4/6 lg:p-0 p-5 mx-auto bg-white">
          <div>
            <div className="p-5 px-8 mx-auto bg-white rounded-lg shadow-md">
              <h1 className="font-semibold text-lg lg:text-4xl mb-2">
                Experience
              </h1>
              <hr />
              {workExperienceDetails.map(
                ({ companyName, jobDescription, joinedOn, position, logo }) => {
                  return (
                    <div key={companyName}>
                      <div className="my-1">
                        <h1 className="my-2 p-1 lg:text-md font-semibold text-lg">
                          {companyName}
                        </h1>
                        <div className="flex lg:flex-row flex-col items-center">
                          <img
                            src={logo}
                            alt=""
                            width={145}
                            height={140}
                            className="rounded-full"
                          />
                          <div className="p-2">
                            <h1 className="lg:text-md font-semibold text-sm">
                              {companyName}
                            </h1>
                            <span>
                              <label className="font-semibold text-sm lg:text-md">
                                Key Responsibilities:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {jobDescription}
                              </span>
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
          <div className="my-2 p-5 px-8 mx-auto bg-white rounded-lg shadow-md">
            <h1 className="font-semibold text-lg lg:text-4xl mb-2">
              Education
            </h1>
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
                        <h1 className="my-2 p-1 lg:text-lg font-semibold text-sm">
                          {type}
                        </h1>
                        <div className="flex flex-col lg:flex-row items-center">
                          <img
                            src={logo}
                            alt=""
                            width={145}
                            height={140}
                            className="rounded-full"
                          />
                          <div className="p-2">
                            <h1 className="text-sm lg:text-md font-semibold">
                              {instituteName}
                            </h1>
                            <span>
                              <label className="font-semibold text-sm lg:text-md">
                                Description:{" "}
                              </label>
                              <span className="text-sm lg:text-md">
                                {description}
                              </span>
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
      </div>
    </>
  );
}

export default About;
