import React from "react";
import FooterMenu from "./FooterMenu";
import { Dropdown } from "../Dropdown";
import apple from "../../assets/appleStore.jpeg";
import android from "../../assets/playStore.jpeg";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="portrait:hidden grid grid-cols-5 grid-rows-6 gap-4 my-16">
        <div className="col-span-2 row-span-3 md:pl-5 lg:pl-24">
          <h2 className="font-sans text-4xl font-bold text-sky-950">Easy</h2>
          <h2 className="font-sans text-4xl font-bold text-sky-700">Ahead</h2>
          <p className="text-gray-600 font-sans mt-5">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <Dropdown />
        </div>
        <div className="row-span-3 col-start-3">
          <FooterMenu
            heading="About"
            menueItems={[
              {
                name: "About Calendly",
                url: "",
              },
              {
                name: "Contact Sales",
                url: "",
              },
              {
                name: "Newsroom",
                url: "",
              },
              {
                name: "Careers",
                url: "",
              },
              {
                name: "Security",
                url: "",
              },
            ]}
          />
        </div>
        <div className="row-span-3 col-start-4">
          <FooterMenu
            heading="Solutions"
            menueItems={[
              {
                name: "Customer Success",
                url: "",
              },
              {
                name: "Sales",
                url: "",
              },
              {
                name: "Recruiting",
                url: "",
              },
              {
                name: "Information Technology",
                url: "",
              },
              {
                name: "Marketing",
                url: "",
              },
            ]}
          />
        </div>
        <div className="row-span-3 col-start-5">
          <FooterMenu
            heading="Popular Features"
            menueItems={[
              {
                name: "Embed Calendly",
                url: "",
              },
              {
                name: "Availability",
                url: "",
              },
              {
                name: "Sending Notifications",
                url: "",
              },
              {
                name: "Using Calendly Mobile",
                url: "",
              },
            ]}
          />
        </div>
        <div className="col-span-2 row-span-3 row-start-4 mx-auto">
          <div className="flex">
            <a href="">
              <img src={android} alt="" className="w-32 lg:w-44 m-2" />
            </a>
            <a href="">
              <img src={apple} alt="" className="w-32 lg:w-44 m-2" />
            </a>
          </div>
          <div className="flex m-5 mx-auto">
            <a href="">
              <FaFacebook className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaInstagram className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaLinkedin className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaTwitter className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaYoutube className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
          </div>
        </div>
        <div className="row-span-3 col-start-3 row-start-4">
          <FooterMenu
            heading="Support"
            menueItems={[
              {
                name: "Help Center",
                url: "",
              },
              {
                name: "Video Tutorials",
                url: "",
              },
              {
                name: "Cookie Settings",
                url: "",
              },
            ]}
          />
          <div className="flex"></div>
        </div>
        <div className="row-span-3 col-start-4 row-start-4">
          <FooterMenu
            heading="Add-Ons"
            menueItems={[
              {
                name: "Download for Chrome",
                url: "",
              },
              {
                name: "Download for Firefox",
                url: "",
              },
            ]}
          />
        </div>
        <div className="row-span-3 col-start-5 row-start-4">
          <FooterMenu
            heading="Developers"
            menueItems={[
              {
                name: "Developer Tools",
                url: "",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <div className="landscape:hidden m-5 pl-10">
          <h2 className="font-sans text-4xl font-bold text-sky-950">Easy</h2>
          <h2 className="font-sans text-4xl font-bold text-sky-700">Ahead</h2>
          <p className="text-gray-600 font-sans mt-5">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <Dropdown />
        </div>
        <div className="landscape:hidden mx-auto m-5 pl-10">
          <div className="flex">
            <a href="">
              <img src={android} alt="" className="w-32 lg:w-44 m-2" />
            </a>
            <a href="">
              <img src={apple} alt="" className="w-32 lg:w-44 m-2" />
            </a>
          </div>
          <div className="flex m-5 mx-auto">
            <a href="">
              <FaFacebook className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaInstagram className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaLinkedin className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaTwitter className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
            <a href="">
              <FaYoutube className="m-2 lg:m-5 text-2xl lg:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
