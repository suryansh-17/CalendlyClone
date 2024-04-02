import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StoryCard = ({ image, heading, description, link, className }) => {
  return (
    <a href="">
      <div
        className={`md:w-52  lg:w-full  bg-white rounded-lg overflow-hidden shadow-xl cursor-pointer ${className}`}
      >
        <img
          className="w-full md:w-52 object-cover"
          src={image}
          alt="Customer Story"
        />
        <div className="p-4">
          <h2 className="text-sm md:text-xl font-sans text-blue-500 mb-2">
            Customer Story
          </h2>
          <p className="text-sky-950 font-bold text-base mb-4 portrait:hidden">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-blue-500 font-bold hover:underline text-sm"
              onClick={link}
            >
              Read Now
            </span>
            <FaArrowRight className="text-blue-500" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default StoryCard;
