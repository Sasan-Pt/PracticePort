import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";

const Contact = () => {
  useEffect(() => {
    document.body.style.background = "white";
  });
  return (
    <div className="mt-48">
      <div className="flex font-bold text-6xl">
        <div className="basis-2/5 cResp:basis-full">
          We'd love to build something amazing together!
        </div>
      </div>

      <div className="flex flex-wrap">
        <form className="mt-16 flex basis-4/5 flex-col cResp:basis-full">
          <div>Whats your name?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-4 cResp:w-full" />
          <div className="mt-8">What's the name of your company?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8 cResp:w-full" />
          <div className="mt-8">What's your email?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8 cResp:w-full" />
          <div className="mt-8">What's your phone number?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8 cResp:w-full" />
          <div className="mt-8">What's your phone number?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8 cResp:w-full" />
          <div className="mt-8">
            Tell us about your project goals and timeframe in one line.
          </div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8 cResp:w-full" />
          <div className="mt-14">
            <Button stylee="text-black border-black hover:text-black hover:bg-white hover:border-black" />
          </div>
        </form>
        <div className="flex flex-col basis-20pe  cResp:basis-full cResp:flex-row cResp:mt-16 cResp:justify-between">
          <div className="flex flex-col ">
            <h1>Call us</h1>
            <div>+959115462589</div>
          </div>
          <div className="flex flex-col mt-8 cResp:mt-0">
            <h1>Find Us</h1>
            <div>7c Frederick St.</div>
            <div>Victoria Works</div>
            <div>Birmingham</div>
            <div>B1 3HE</div>
          </div>
          <div className="flex flex-col mt-8 cResp:mt-0">
            <h1>Socials</h1>
            <div>Awwwards</div>
            <div>Instagram</div>
            <div>Linkedin</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
