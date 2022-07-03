import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Contact = () => {
  useEffect(() => {
    document.body.style.background = "white";
  });
  return (
    <div className="mt-48">
      <div className="flex font-bold text-6xl">
        <div className="basis-2/5 ">
          We'd love to build something amazing together!
        </div>
      </div>

      <div className="flex">
        <form className="mt-16 flex basis-4/5 flex-col">
          <div>Whats your name?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-4" />
          <div className="mt-8">What's the name of your company?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8" />
          <div className="mt-8">What's your email?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8" />
          <div className="mt-8">What's your phone number?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8" />
          <div className="mt-8">What's your phone number?</div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8" />
          <div className="mt-8">
            Tell us about your project goals and timeframe in one line.
          </div>
          <input className="w-40p bg-silver-grey h-[10vh] text-4xl mt-8" />
        </form>
        <div className="flex flex-col basis-20pe">
          <h1>Call us</h1>
          <div>+959115462589</div>
          <h1>Find Us</h1>
          <div>7c Frederick St.</div>
          <div>Victoria Works</div>
          <div>Birmingham</div>
          <div>B1 3HE</div>
          <h2>Socials</h2>
          <div>Awwwards</div>
          <div>Instagram</div>
          <div>Linkedin</div>
          <div>Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
