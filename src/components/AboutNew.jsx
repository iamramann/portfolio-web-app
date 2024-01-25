import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import {
  aboutMeText,
  assetReferences,
  educationDetails,
  workExperienceDetails,
  frontendTechnologies,
  backendTechnologies,
  projectManagementTools,
} from "../../constants";
import { useState } from "react";
import { GithubSvg, HackerrankSvg, LinkedInSvg } from "./svg/Icons";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
export default function AboutNew() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-5">
          <div className="lg:col-span-1 lg:p-5">
            <Card className="lg:w-96">
              <CardHeader floated={false} className="h-80">
                <img src={assetReferences.pic1} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Raman Sharma
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  Software Engineer
                </Typography>
                <div className="flex justify-center items-center">
                  <Link
                    to={"https://github.com/iamramann"}
                    className="flex items-center text-sm me-5"
                  >
                    <span>
                      <GithubSvg />
                    </span>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/iamramann/"}
                    className="flex items-center text-sm me-5"
                  >
                    <span>
                      <LinkedInSvg />
                    </span>
                  </Link>
                  <Link
                    to={"https://www.hackerrank.com/profile/hey_raman"}
                    className="flex items-center text-sm me-2"
                  >
                    <span>
                      <HackerrankSvg />
                    </span>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="lg:col-span-2 p-5">
            <div className="w-full">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Experience{" "}
                </AccordionHeader>
                <AccordionBody>
                  <Timeline>
                    {workExperienceDetails.map((item, index) => {
                      return (
                        <TimelineItem key={item.joinedOn}>
                          {index !== workExperienceDetails.length - 1 ? (
                            <TimelineConnector />
                          ) : null}
                          <TimelineHeader>
                            <TimelineIcon className="p-0">
                              <Avatar
                                size="sm"
                                src={assetReferences.beboLogo}
                                alt="user 1"
                              />
                            </TimelineIcon>
                            <Typography variant="h5" color="blue-gray">
                              {item.companyName}
                            </Typography>
                          </TimelineHeader>
                          <TimelineBody className="pb-8">
                            <Typography
                              color="gray"
                              className="font-normal text-gray-600"
                            >
                              <span className="grid">
                                <p className="font-bold">{item.position}</p>
                                <p className="text-justify">
                                  {item.jobDescription}
                                </p>
                                <p className="font-semibold">{item.joinedOn}</p>
                              </span>
                            </Typography>
                          </TimelineBody>
                        </TimelineItem>
                      );
                    })}
                  </Timeline>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Tools & Technologies
                </AccordionHeader>
                <AccordionBody>
                  <div className="grid lg:grid-cols-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 border-b-2 lg:border-b-0">
                      {frontendTechnologies.map((item) => (
                        <div
                          className="my-2 flex items-center justify-start py-2 mx-1"
                          key={item.name}
                        >
                          <span>
                            <img src={item.logo} alt="" className="w-8 h-8" />
                          </span>
                          &nbsp; {item.name}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 border-b-2 lg:border-b-0">
                      {backendTechnologies.map((item) => (
                        <div
                          className="my-2 flex items-center justify-start py-2 mx-1"
                          key={item.name}
                        >
                          <span>
                            <img src={item.logo} alt="" className="w-8 h-8" />
                          </span>
                          &nbsp; {item.name}
                        </div>
                      ))}
                    </div>
                    <div className="grid lg:grid-cols-1  grid-cols-2 border-b-2 lg:border-b-0">
                      {projectManagementTools.map((item) => (
                        <div
                          className="my-2 flex items-center justify-start py-2 mx-1"
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
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Education{" "}
                </AccordionHeader>
                <AccordionBody>
                  <Timeline>
                    {educationDetails.map((item, index) => {
                      return (
                        <TimelineItem key={item.instituteName}>
                          {index !== workExperienceDetails.length - 1 ? (
                            <TimelineConnector />
                          ) : null}
                          <TimelineHeader>
                            <TimelineIcon className="p-0">
                              <Avatar
                                size="sm"
                                src={item.logo}
                                alt="user 1"
                                withBorder
                              />
                            </TimelineIcon>
                            <Typography variant="h5" color="blue-gray">
                              {item.instituteName}
                            </Typography>
                          </TimelineHeader>
                          <TimelineBody className="pb-8">
                            <Typography
                              color="gray"
                              className="font-normal text-gray-600"
                            >
                              <span className="grid">
                                <p className="font-bold">{item.courseName}</p>
                                <p className="text-justify">
                                  {item.description}
                                </p>
                                <p className="font-semibold">{item.marks}</p>
                              </span>
                            </Typography>
                          </TimelineBody>
                        </TimelineItem>
                      );
                    })}
                  </Timeline>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
