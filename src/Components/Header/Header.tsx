import React, { useContext, useEffect } from "react";
import AntButton from "../Button";

import { Link } from "react-router-dom";
import Hamburger from "./Components/hamburger";
import ResMenu from "./Components/ResMenu";
import Context from "../Context/Context";
type Props = {
  ButtonColor: string | null;
  LastColor: string | null;
};
const Header = ({ ButtonColor, LastColor }: Props) => {
  const ctx = useContext(Context);

  useEffect(() => {
    if (!ctx?.mRespon) {
      document.body.style.background = "#765cff";
    }
  });

  let color = null;
  let resColor = null;
  if (ButtonColor) {
    color = ButtonColor;
  }
  if (LastColor) {
    resColor = LastColor;
  }

  if (ctx?.mRespon) {
    return (
      <div className="bg-transparent">
        <Hamburger ButtonColor={color} />
        <nav className="mt-14 text-xl font-bold cResp:hidden">
          <ul>
            <Link to="/" className="float-left" onClick={ctx?.setMRespan}>
              adaptable.
            </Link>
            <Link to="/Invalid" className="float-right pl-8 ">
              <AntButton stylee={` hover:bg-white hover:text-black ${color}`} />
            </Link>
            <Link to="/Contact" className="float-right pl-8">
              Contact
            </Link>

            <Link to="/Studio" className="float-right pl-8">
              Studio
            </Link>
            <Link to="/work" className="float-right pl-8">
              Work
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <>
      <Hamburger ButtonColor={color} />
      <ResMenu ButtonColor={color} LastColor={resColor} />
    </>
  );
};

export default Header;
