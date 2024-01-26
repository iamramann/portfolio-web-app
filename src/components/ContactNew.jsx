import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BtnSub, Input } from "./sub";

export default function ContactNew() {
  return (
    <div className="m-[80px] lg:h-dvh lg:my-0 container mx-auto flex justify-center items-center ">
      <Card className="mt-6 w-5/6 lg:w-3/6 dark:bg-slate-950 border-zinc-200 border-2 dark:border-slate-900">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 dark:text-white"
          >
            Contact Me
          </Typography>
          <div className="grid">
            <Input label="Name" type="text" placeholder="Enter your name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <div className="w-full p-2">
              <label
                htmlFor="message"
                className="block text-black text-md font-bold leading-6 dark:text-white"
              >
                Message
              </label>
              <textarea
                placeholder="Enter your message..."
                id="message"
                name="message"
                className="w-full dark:bg-slate-700 bg-opacity-50 rounded border border-zinc-300 dark:border-slate-900 focus:border-slate-0 dark:focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 focus:border-slate-600 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="w-full p-2">
              {/* <button className="w-full inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-gray-700">
                Send Message
              </button> */}
              <BtnSub className="w-full inline-block border border-transparent bg-gray-900 px-8 py-2 text-center font-medium text-white hover:bg-gray-700 mx-auto">
                Send Message
              </BtnSub>
            </div>
          </div>
          <div className="lg:relative flex justify-center flex-col mx-auto ">
            <div className="w-full mx-auto lg:w-full border-2 border-zinc-300 dark:border-slate-700 h-0 my-2"></div>
            <p className="text-center p-2text-gray-700 text-md lg:text-md dark:text-white">
              or send me direct email at
            </p>
            <p className="text-center text-md font-bold lg:text-xl text-slate-700 dark:text-white">
              <a href="mailto:kukreti.rs@gmail.com">kukreti.rs@gmail.com</a>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
