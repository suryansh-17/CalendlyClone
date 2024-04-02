import React from "react";
import Testimonial from "../components/Testimonial";

function Testimonials() {
  return (
    <div className="flex justify-center bg-sky-50 pt-4 lg:pt-10 lg:pb-10">
      <Testimonial
        heading="75%"
        desc="This is a description of the rectangle component."
        photo="https://images.ctfassets.net/k0lk9kiuza3o/6fo1ntHspDIwlAN45IgxRU/8a88fd5d7b8e91bf7ca03f1ee8a44ca2/Vector__2_.svg"
        className=""
      />
      <Testimonial
        heading="200%"
        desc="increase in connections between sales and customer leads"
        photo="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg"
        className="border border-r-0 border-t-0 border-b-0 border-l-blue-300 lg:ml-20"
      />
      <Testimonial
        heading="200%"
        desc="more customers onboard per month"
        photo="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/0e998b1376e2e3b2fc5489cfa7b3f11c/Zendesk_wordmark__1_.svg"
        className="border border-r-0 border-t-0 border-b-0 border-l-blue-300 lg:ml-20"
      />
    </div>
  );
}

export default Testimonials;
