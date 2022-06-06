import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Stats from "./Stats";
import p1 from "../assets/p1.jpg";

import Carousel from "./Carsouel";
export default function Home() {
  return (
    <>
      <Carousel />
      <Stats />
      <div className="relative  bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-20 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"></div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                ></Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-xl tracking-tight font-extrabold text-purple-500 sm:text-5xl md:text-5xl">
                  <span className="block xl:inline">
                    Reserve your million Worthy
                  </span>{" "}
                  <span className="block bg-fuchsia-300 xl:inline">
                    moments with Hallogs
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We make sure to turn your mood vibrant and book your halls,
                  Marriage lawns with world class experience.We offer you Number
                  of choices in a glimpse and save your time no more frustration
                  though it is easy to reserve your ultimate choice. You can
                  feel eager enjoyment when you reserve your venue while sitting
                  in the same place
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={p1}
            alt="sumair"
          />
        </div>
      </div>
    </>
  );
}
