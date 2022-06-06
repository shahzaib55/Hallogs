import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white  sticky z-50  top-0 shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex w-full  justify-between h-16">
              {/* <div className="flex justify-between w-full"> */}
              <div className="-ml-2 mr-2 flex items-center  md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex  items-center justify-center p-2 rounded-md 
                  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                    focus:ring-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    
                   <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-shrink-0 mx-auto flex">
                <img
                  className="lg  h-20 w-20 sm:items-center shadow-lg "
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="hidden md:ml-6 w-full justify-center flex-1  mx-auto md:flex md:space-x-8">
                <Link
                  to="/"
                  className="order-indigo-500  mx-2  text-gray-900 inline-flex  items-center 
                    px-2 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/About"
                  className="border-transparent text-gray-500 hover:border-gray-300 
                    hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  About us
                </Link>
                <Link
                  to="/Team"
                  className="border-transparent text-gray-500 hover:border-gray-300 
                    hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Team
                </Link>
                <Link
                  to="/Contact"
                  className="border-transparent text-gray-500 hover:border-gray-300 
                    hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Contact us
                </Link>
              </div>
              {/* </div>  comment kr is line ko  or 14 ko ?? */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                   <span></span>
             
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"></div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                to="/"
                className="bg-indigo-50 border-indigo-500
                 text-indigo-700 block pl-3 pr-4 py-2 border-l-4
                  text-base font-medium sm:pl-5 sm:pr-6"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="border-transparent text-gray-500 
                hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700
                 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                About us
              </Link>
              <Link
                to="/Team"
                className="border-transparent text-gray-500
                 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 
                 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Team
              </Link>
              <Link
                to="/contact"
                className="border-transparent text-gray-500 hover:bg-gray-50 
                hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2
                 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Contact us
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
