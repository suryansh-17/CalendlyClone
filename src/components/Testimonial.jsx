import React from "react";

const Testimonial = ({ heading, desc, photo, className }) => {
  return (
    <div
      className={`w-28 h-64 md:w-64 md:h-80 p-2 md:p-5 bg-sky-50 flex flex-col ${className}`}
    >
      <h2 className="font-sans font-bold text-sky-950 text-xl md:text-5xl mb-4">
        {heading}
      </h2>
      <p className="text-sm md:text-lg text-blue-500">{desc}</p>
      <img
        src={photo}
        alt="Description"
        className="max-w-20 max-h-6 md:max-w-40 md:max-h-10 m-auto"
      />
    </div>
  );
};

export default Testimonial;
