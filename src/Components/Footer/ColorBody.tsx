import React from "react";
import AntButton from "../Button";

const ColorBody = () => {
  return (
    <div className="flex mt-28 bg-sky-500  w-full h-20p items-center justify-center flex-col ">
      <div>
        <div>We'd love to build something amazing together!</div>
      </div>
      <div>
        <AntButton stylee="border-white hover:bg-white hover:text-black mt-4" />
      </div>
    </div>
  );
};

export default ColorBody;
