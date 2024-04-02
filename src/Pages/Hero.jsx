import React from "react";
import Button from "../components/Button";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
function Hero() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 bg-sky-950 text-white pb-5">
        <div className="col-span-2 row-span-5 ml-5 mt-10 mv-5 md:ml-20 md:mt-20 md:mb-10">
          <div className="font-sans font-bold text-3xl md:text-5xl lg:text-7xl text-justify">
            <p className="">Secure</p>
            <p className="">connections,</p>
            <p className="">empowered</p>
            <p className="">teams</p>
          </div>
          <div className=" mt-8 md:mt-16 text-sm md:text-2xl ">
            <p>Bring your teams together in a centrally-</p>
            <p>managed ecosystem with a complete</p>
            <p>oversight and visibility.</p>
          </div>
          <Button
            type="submit"
            textColor="text-white"
            className="font-semibold m-auto ml-0 text-sm md:text-xl px-3 py-1 md:px-8 md:py-5 mt-3 mb-5 md:mt-10 md:ml-0"
          >
            Contact Sales
          </Button>
        </div>
        <div className="col-span-3 row-span-5 col-start-3">
          <p>
            <img
              src="https://logos-world.net/wp-content/uploads/2021/06/Calendly-New-Logo.png"
              alt=""
              className="bg-white rounded-2xl w-24 md:w-40 m-auto mt-16"
            />
          </p>
          <div className="lg:flex m-auto mt-10 ">
            <img
              src={p1}
              alt=""
              className="w-28 md:w-52 lg:w-64 m-auto mt-2 lg:mr-10 rounded-xl "
            />
            <img
              src={p2}
              alt=""
              className="w-28 md:w-52 lg:w-64 m-auto lg:ml-0 lg:mr-0  mt-2 rounded-xl"
            />
            <img
              src={p3}
              alt=""
              className="w-28 md:w-52 lg:w-64 m-auto mt-2 lg:ml-10 rounded-xl "
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex text-3xl md:text-5xl lg:text-6xl font-bold font-sans text-sky-950 justify-center md:pl-40 md:pr-40  lg:pl-80 lg:pr-80 text-center mt-10">
          Work faster, smarter, and more securely
        </div>
        <div className="md:mt-10 text-sm md:text-2xl text-blue-500 justify-center text-center m-5 lg:ml-64 lg:mr-64 lg:pl-64  lg:pr-64 lg:w-42">
          Sales,Customer Success, Support, Recuriting, and Marketing teams rely
          on scheduling platforms to save time and quickly connect with
          customers.
        </div>
      </div>
    </>
  );
}

export default Hero;
