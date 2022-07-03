import React from "react";
import PropTypes from "prop-types";
import Button from "../../../Button";

const Endstudio = () => {
  return (
    <div className="flex items-center justify-center text-black cRes:flex-col-reverse mt-96 gap-x-14 cResp:mt-16 ">
      <div className="cResp:mt-8">
        <h1>Working With:</h1>
        <div>
          In this series, we chat to our partners about our working
          relationships. Includes conversations with St.Philips Homes, Mailbox &
          Mayhew.
        </div>
        <Button stylee="bg-black cResp:mt-8" />
      </div>
      <div>
        <img
          src="https://assets.weareadaptable.com/app/uploads/2020/11/17153754/working-with-image.png"
          alt="there is no alt"
        />
      </div>
    </div>
  );
};

export default Endstudio;
