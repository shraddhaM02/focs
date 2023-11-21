import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faFacebook,faTwitter,faGit,faSnapchat,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center p-6 space-y-4">
        <h1 className="text-2xl">Get in touch with us</h1>
        <div className="space-x-8">
              <FontAwesomeIcon icon={faFacebook} size="xl"/>
              <FontAwesomeIcon icon={faInstagram} size="xl" />
              <FontAwesomeIcon icon={faTwitter} size="xl"/>
              <FontAwesomeIcon icon={faGit} size="xl" />
              <FontAwesomeIcon icon={faSnapchat} size="xl" />
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
        <div className="grid grid-cols-3">
              <div>
                     <h1>CONTACT US</h1>
                     <div className="gap-3 space-x-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Call Us</span>
                     </div>
                     <span>9448668317,9611076613</span>
              </div>
              <div></div>
              <div>2</div>
        </div>
      </div>
    </>
  );
}

export default Contact;
