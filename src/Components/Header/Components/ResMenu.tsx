import React from "react";
import AntButton from "../../Button";

import { Link } from "react-router-dom";

const ResMenu = () => {
  return (
    <div className="border-t-4 mt-4 pt-4 h-3/4">
      <ul>
        <Link to="/Work" className="block pt-2">
          Work
        </Link>
        <Link to="/Studio" className="block pt-2">
          Studio
        </Link>
        <Link to="/Contact" className="block pt-2">
          Contact
        </Link>
        <li className="pt-2 flex justify-center items-center mt-8">
          <AntButton stylee="w-full border-white hover:bg-white hover:text-black" />
        </li>
      </ul>
    </div>
  );
};

export default ResMenu;
