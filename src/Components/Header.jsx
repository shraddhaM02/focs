import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="w-full relative flex py-6 justify-between items-center text-slate-400 bg-gray-200">
        <div className="sm:hidden w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex justify-around">
                  <Disclosure.Button>
                    <FontAwesomeIcon
                      icon={open ? faClose : faBars}
                      size="xl"
                      className="text-red-600"
                    />
                  </Disclosure.Button>
                  <h1 className="">LOGO</h1>
                  <div>&nbsp;&nbsp;</div>
                </div>

                <Disclosure.Panel>
                  <ol className="grid justify-items-center space-y-10 my-5">
                    <li>
                      <Link to="">Home</Link>
                    </li>
                    <li>
                      <Link to="gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="events">Events</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact Us</Link>
                    </li>
                  </ol>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="hidden sm:flex sm:mx-auto">
          LOGO
        </div>
        <div className="sm:mx-auto">
          <ol className="sm:flex sm:visible hidden sm:space-x-6">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li>
              <Link to="events">Events</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}

export default Header;
