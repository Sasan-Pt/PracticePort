import React from "react";
import AntButton from "../../Button";

const ResMenu = () => {
  return (
    <div className="border-t-4 mt-4 pt-4 h-3/4">
      <ul>
        <li>Work</li>
        <li className="pt-2">Studio</li>
        <li className="pt-2">Services</li>
        <li className="pt-2">Whitepapers</li>
        <li className="pt-2">Journal</li>
        <li className="pt-2">Contact</li>
        <li className="pt-2 flex justify-center items-center mt-8">
          <AntButton stylee="w-full border-white hover:bg-white hover:text-black" />
        </li>
      </ul>
    </div>
  );
};

export default ResMenu;
