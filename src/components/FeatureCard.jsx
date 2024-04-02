import React from "react";

function FeatureCard({
  heading1,
  heading2 = "",
  description = "",
  image,
  imgRight,
  className = "",
}) {
  return (
    <>
      {imgRight ? (
        <div className={`grid grid-cols-2 mt-10 mb-10 ${className}`}>
          <div className="ml-4 lg:ml-12 my-auto">
            {heading1 ? (
              <h3 className="font-sans text-blue-500 font-semibold mt-3 text-sm md:text-xl">
                {heading1}
              </h3>
            ) : null}
            <h1 className="font-sans font-semibold md:text-2xl text-blue-950 mt-3">
              {heading2}
            </h1>
            <div className="mt-5 text-sm lg:text-lg portrait:hidden text-gray-600">
              {description}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={image} alt="" className="mx-auto" />
          </div>
        </div>
      ) : (
        <div className={`grid grid-cols-2 mt-10 mb-10 ${className}`}>
          <div className=" flex justify-center items-center">
            <img src={image} alt="" className="" />
          </div>
          <div className="mr-4 lg:mr-12 my-auto">
            {heading1 ? (
              <h3 className="font-sans text-blue-500 font-semibold mt-3 text-sm md:text-xl">
                {heading1}
              </h3>
            ) : null}
            <h1 className="font-sans font-semibold md:text-2xl text-blue-950 mt-3">
              {heading2}
            </h1>
            <div className="mt-5 text-sm lg:text-lg portrait:hidden text-gray-600">
              {description}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeatureCard;
