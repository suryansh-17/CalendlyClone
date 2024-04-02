import React from "react";
import { Button, StoryCard } from "../components";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
function Story() {
  return (
    <>
      <div className="flex px-14 lg:px-32  justify-center my-10">
        <StoryCard
          image={s1}
          description="Stack Overflow's streamlined admin forges relationships with new recruits "
        />
        <StoryCard
          image={s2}
          description="University of Texas at Austin saves money through administrative scheduling"
          className="mx-5"
        />
        <StoryCard
          image={s3}
          description="More meetings, better prospects boost Bitly's conversions across the board"
          className="md:ml-10"
        />
      </div>
      <div className="bg-sky-950 px-5 lg:mx-30 md:px-10 lg:px-52 pb-5 lg:pb-10 pt-10 ">
        <h1 className="flex justify-center font-bold font-sans text-white text-2xl md:text-5xl md:px-32 text-center">
          Secure connection, empowered teams
        </h1>
        <p className="text-center text-white font-sans md:px-44 md:mt-5 py-10 ">
          Calendly enables teams across the organization to do their jobs more
          efficiently, create better customer connections, and get more value
          from the tools they already rely on.
        </p>
        <Button
          className="flex mx-auto border-2 px-8 py-4 hover:bg-white hover:text-sky-950"
          textColor="text-white"
          bgColor=""
        >
          Talk with sales
        </Button>
      </div>
    </>
  );
}

export default Story;
