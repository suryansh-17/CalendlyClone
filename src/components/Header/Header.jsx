import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  //   const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItems = [
    {
      name: "Individuals down",
      slug: "",
    },
    {
      name: "Teams",
      slug: "",
    },
    {
      name: "Enterprise",
      slug: "",
    },
    {
      name: "Product",
      slug: "",
      dropdown: true,
    },
    {
      name: "Pricing",
      slug: "",
    },
    {
      name: "Resources",
      dropdown: true,
    },
  ];

  return (
    <header className="p-2 md:p-5">
      <nav className="md:p-2 md:mr-10 md:ml-10">
        <div className="w-full flex bg-white p-0">
          <img
            src="https://marketing-assets.calendly.com/media/logo.svg"
            alt=""
            className="w-24 md:w-48 mr-auto "
          />
          <div className="flex portrait:hidden ">
            <ul className="flex ">
              {navItems.map((item) => (
                <li key={item.name} className="my-auto">
                  <button className=" font-semibold px-2 duration-200 text-xl m-2 items-center  text-black flex">
                    {item.name}
                    {item.dropdown ? <FaChevronDown className="m-2" /> : null}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto mt-auto mb-auto flex">
            <a
              href=""
              className="inline-block font-semibold px-2 duration-200 text-sm md:text-xl m-auto md:mr-3 items-center text-black "
            >
              Log In
            </a>
            <Button
              type="submit"
              textColor="text-white"
              className="font-semibold text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 mr-0"
            >
              Get Started
            </Button>
          </div>
          <div className="landscape:hidden flex items-center ml-3 inset-y-0 right-0">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? <MdOutlineClose /> : <RiMenu2Fill />}
            </button>
          </div>
        </div>

        {/*mobile nav bar*/}
        <div
          className={`fixed w-full z-50 bg-white  text-black overflow-hidden flex mt-1 landscape:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-100vh"
          }`}
        >
          <div className="flex font-bold tracking-wider rounded-md">
            <ul className="">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button className="inline-block text-sm px-6 py-2 duration-200 rounded-full">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
