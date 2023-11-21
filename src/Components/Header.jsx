import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="w-full relative flex py-6 justify-between items-center text-slate-100 bg-blue-600 h-screen">
        <div className="sm:hidden w-full ">
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex justify-around">
                  <Disclosure.Button>
                    <FontAwesomeIcon
                      icon={open ? faClose : faBars}
                      size="xl"
                      className="text-slate-100"
                    />
                  </Disclosure.Button>
                  <h1 className="font-bold text-3xl">FOCS</h1>
                  <div>&nbsp;&nbsp;</div>
                </div>

                <Disclosure.Panel>
                  <ol className="grid justify-items-center space-y-10 my-5">
                    <li>
                      <Link to="" className="hover:text-lg hover:font-bold">Home</Link>
                    </li>
                    <li>
                      <Link to="gallery" className="hover:text-lg hover:font-bold">Gallery</Link>
                    </li>
                    <li>
                      <Link to="events" className="hover:text-lg hover:font-bold">Events</Link>
                    </li>
                    <li>
                      <Link to="contact" className="hover:text-lg hover:font-bold">Contact Us</Link>
                    </li>
                  </ol>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="hidden sm:flex sm:mx-auto font-bold text-3xl">
          FOCS
        </div>
        <div className="sm:mx-auto">
          <ol className="sm:flex sm:visible hidden sm:space-x-6">
            <li>
              <Link to="" className="hover:text-lg transition-all duration-500 hover:font-semibold">Home</Link>
            </li>
            <li>
              <Link to="gallery" className="hover:text-lg transition-all duration-500 hover:font-semibold">Gallery</Link>
            </li>
            <li>
              <Link to="events" className="hover:text-lg transition-all duration-500 hover:font-semibold">Events</Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-lg transition-all duration-500 hover:font-semibold">Contact Us</Link>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}

export default Header;
