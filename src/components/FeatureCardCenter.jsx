import React from "react";
import { Button } from "../components";
function FeatureCardCenter({ heading1, heading2, descriprion }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-sans text-blue-500 font-semibold mt-3 text-lg md:text-2xl text-center">
        {heading1}
      </h3>

      <h1 className="font-sans font-bold text-xl md:text-3xl lg:text-4xl text-blue-950 mt-3 text-center">
        {heading2}
      </h1>
      <div className="mt-5 text-sm px-5 lg:text-lg text-center text-gray-600">
        {descriprion}
      </div>
    </div>
  );
}

export default FeatureCardCenter;
