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
        <div className="sm:hidden">
          <Disclosure className="">
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <FontAwesomeIcon
                    icon={open ? faClose : faBars}
                    size="xl"
                    className="text-red-600"
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <ol className="sm:flex sm:visible sm:space-x-6">
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
        <div className="absolute inset-y-0 left-0 flex items-center sm:relative sm:mx-auto">
          LOGO
        </div>
        <div className="sm:mx-auto">
          <ol className="sm:flex sm:visible sm:space-x-6">
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
