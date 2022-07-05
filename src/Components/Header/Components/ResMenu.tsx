import React, { useContext } from "react";
import AntButton from "../../Button";

import { Link } from "react-router-dom";
import Context from "../../Context/Context";

type Props = {
  ButtonColor: string | null;
  LastColor: string | null;
};
const ResMenu = ({ ButtonColor, LastColor }: Props) => {
  let LastColors = null;
  if (LastColor) {
    LastColors = LastColor;
  }
  const ctx = useContext(Context);

  return (
    <div className="border-t-4 mt-4 pt-4 h-3/4">
      <ul>
        <Link to="/Work" className="block pt-2" onClick={ctx?.setMRespan}>
          Work
        </Link>
        <Link to="/Studio" className="block pt-2" onClick={ctx?.setMRespan}>
          Studio
        </Link>
        <Link to="/Contact" className="block pt-2" onClick={ctx?.setMRespan}>
          Contact
        </Link>
        <Link
          to="/Contact"
          className="pt-2 flex justify-center items-center mt-8 "
          onClick={ctx?.setMRespan}
        >
          <AntButton
            stylee={`w-full border-white hover:bg-white hover:text-black ${LastColors}`}
          />
        </Link>
      </ul>
    </div>
  );
};

export default ResMenu;
