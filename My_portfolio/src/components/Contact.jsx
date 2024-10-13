import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
           <a href="https://wa.me/917081116880" target="_blank" className="items">
            <IoLogoWhatsapp className="icons" />
          </a>
          <a href="https://www.instagram.com/i_am_ks200/profilecard/?igsh=MXFyZXNvZzVsYWszNg==" target="_blank" className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://www.facbook.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/kishan-shaw-7ab481276" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/KishanShaw2005?t=GA4Y0pjJG_AJgHer1h0yLg&s=09" target="_blank" className="items">
            <CiTwitter className="icons" />
          </a>
          <a href="https://github.com/shawkishan" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:kishanshawks2005@gmail.com"
            target="_blank"
            className="items"
          >
            <IoIosMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
