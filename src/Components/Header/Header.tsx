import React, { useContext } from "react";
import AntButton from "../Button";

import { Link } from "react-router-dom";
import Hamburger from "./Components/hamburger";
import ResMenu from "./Components/ResMenu";
import Context from "../Context/Context";
type Props = {
  ButtonColor: string | null;
};
const Header = ({ ButtonColor }: Props) => {
  const ctx = useContext(Context);

  let color = null;
  if (ButtonColor) {
    color = ButtonColor;
  }

  if (ctx?.mRespon) {
    return (
      <div className="bg-transparent">
        <Hamburger />
        <nav className="mt-14 text-xl font-bold cResp:hidden">
          <ul>
            <Link to="/" className="float-left">
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
      <Hamburger />
      <ResMenu />
    </>
  );
};

export default Header;
