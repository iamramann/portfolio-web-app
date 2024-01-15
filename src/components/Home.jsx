import React from "react";

function Home() {
  return (
    <>
      <div>
        <div className="container flex justify-center flex-row">
          <div className=" w-4/6 p-5 px-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="section-1 mx-auto flex items-center flex-col p-5">
              <div className="max-w-xs profile-image">
                <img
                  src="src\assets\pic.jpg"
                  alt=""
                  width={125}
                  height={125}
                  className="rounded-full"
                />
              </div>
              <div className="about-me p-5">
                <h1 className="text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis, expedita repellendus, maiores quasi perspiciatis,
                  amet officia cupiditate eligendi praesentium ad omnis quos sit
                  porro dicta accusamus quas non possimus neque?
                </h1>
              </div>
            </div>
            <div className="border-2"></div>
          </div>
          <div>
            <div>
              <div className="section-1 flex-col mx-2">
                <div className="p-5 px-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h1 className="dark:text-gray-100 text-4xl mb-2">
                    Working in
                  </h1>
                  <hr />
                  <div className="education">
                    <div className="my-1 p-2">
                      <h1 className="my-2 p-1 text-xl font-semibold">
                        Bebo Technologies Pvt. Ltd.
                      </h1>
                      <div className="flex">
                        <img
                          src="src\assets\bebo_logo.jpg"
                          alt=""
                          width={145}
                          height={140}
                          className="rounded-full"
                        />
                        <div className="p-2">
                          <h1 className="text-lg font-semibold">
                            Bebo Technologies Pvt. Ltd.
                          </h1>
                          <span>
                            <label className="font-semibold">
                              Job Description:{" "}
                            </label>
                            <span className="text-md">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Dignissimos commodi
                            </span>
                          </span>
                          <br />
                          <div className="my-1">
                            <label className="font-semibold">Position: </label>
                            <span className="text-md">Software Engineer</span>
                          </div>
                          {/* <div className="my-1">
                            <label className="font-semibold">Marks: </label>
                            <span className="text-md">8.82 CGPA</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="p-5 my-2 px-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h1 className="dark:text-gray-100 text-4xl mb-2">
                    Education
                  </h1>
                  <hr />
                  <div className="education">
                    <div className="my-1 p-2">
                      <h1 className="my-2 p-1 text-xl font-semibold">
                        Post Graduation
                      </h1>
                      <div className="flex">
                        <img
                          src="src\assets\kuk_logo.png"
                          alt=""
                          width={145}
                          height={140}
                          className="rounded-full"
                        />
                        <div className="p-2">
                          <h1 className="text-lg font-semibold">
                            Kurukshetra University (2019-2022)
                          </h1>
                          <span>
                            <label className="font-semibold">
                              Description:{" "}
                            </label>
                            <span className="text-md">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Dignissimos commodi
                            </span>
                          </span>
                          <br />
                          <div className="my-1">
                            <label className="font-semibold">Course: </label>
                            <span className="text-md">
                              Master of computer applications
                            </span>
                          </div>
                          <div className="my-1">
                            <label className="font-semibold">Marks: </label>
                            <span className="text-md">8.82 CGPA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="my-1 p-2">
                      <h1 className="my-2 p-1 text-xl font-semibold">
                        Graduation
                      </h1>
                      <div className="flex">
                        <img
                          src="src\assets\kuk_logo.png"
                          alt=""
                          width={145}
                          height={140}
                          className="rounded-full"
                        />
                        <div className="p-2">
                          <h1 className="text-lg font-semibold">
                            Sanatan Dharma College (2014-2017)
                          </h1>
                          <span>
                            <label className="font-semibold">
                              Description:{" "}
                            </label>
                            <span className="text-md">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Dignissimos commodi
                            </span>
                          </span>
                          <br />
                          <div className="my-1">
                            <label className="font-semibold">Course: </label>
                            <span className="text-md">
                              B.Sc. (Information Technology)
                            </span>
                          </div>
                          <div className="my-1">
                            <label className="font-semibold">Marks: </label>
                            <span className="text-md">75.56%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-1 flex-col mx-2">
            <div className="p-5 px-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h1 className="dark:text-gray-100 text-4xl mb-2">Education</h1>
              <hr />
              <div className="education">
                <div className="my-1 p-2">
                  <h1 className="my-2 p-1 text-xl font-semibold">
                    Post Graduation
                  </h1>
                  <div className="flex">
                    <img
                      src="src\assets\kuk_logo.png"
                      alt=""
                      width={145}
                      height={140}
                      className="rounded-full"
                    />
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">
                        Kurukshetra University (2019-2022)
                      </h1>
                      <span>
                        <label className="font-semibold">Description: </label>
                        <span className="text-md">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Dignissimos commodi
                        </span>
                      </span>
                      <br />
                      <div className="my-1">
                        <label className="font-semibold">Course: </label>
                        <span className="text-md">
                          Master of computer applications
                        </span>
                      </div>
                      <div className="my-1">
                        <label className="font-semibold">Marks: </label>
                        <span className="text-md">8.82 CGPA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="my-1 p-2">
                  <h1 className="my-2 p-1 text-xl font-semibold">Graduation</h1>
                  <div className="flex">
                    <img
                      src="src\assets\kuk_logo.png"
                      alt=""
                      width={145}
                      height={140}
                      className="rounded-full"
                    />
                    <div className="p-2">
                      <h1 className="text-lg font-semibold">
                        Sanatan Dharma College (2014-2017)
                      </h1>
                      <span>
                        <label className="font-semibold">Description: </label>
                        <span className="text-md">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Dignissimos commodi
                        </span>
                      </span>
                      <br />
                      <div className="my-1">
                        <label className="font-semibold">Course: </label>
                        <span className="text-md">
                          B.Sc. (Information Technology)
                        </span>
                      </div>
                      <div className="my-1">
                        <label className="font-semibold">Marks: </label>
                        <span className="text-md">75.56%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-5 m-2 px-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h1 className="dark:text-gray-100 text-4xl mb-2">
            Professional Experience
          </h1>
          <hr />
          <div className="my-1 p-2">
            <h1 className="my-2 p-1 text-xl font-semibold">
              {" "}
              Bebo Technologies Pvt. Ltd.
            </h1>
            <div className="flex">
              <img
                src="src\assets\bebo_logo.jpg"
                alt=""
                width={145}
                height={140}
                className="rounded-full"
              />
              <div className="p-2">
                <h1 className="text-lg font-semibold">
                  Bebo Technologies Pvt. Ltd.
                </h1>
                <span>
                  <label className="font-semibold">Designation: </label>
                  <span className="text-md">Software Engineer</span>
                </span>
                <br />
                <div className="my-1">
                  <label className="font-semibold">Joined: </label>
                  <span className="text-md">January 31, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
