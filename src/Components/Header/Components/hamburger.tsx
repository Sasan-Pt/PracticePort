import React, { useContext } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

type Props = {
  ButtonColor: string | null;
};
const Hamburger = ({ ButtonColor }: Props) => {
  console.log(ButtonColor);
  const ctx = useContext(Context);
  let color = null;
  if (ButtonColor) {
    color = ButtonColor;
  }

  return (
    <div className={`flex cResH:hidden text-white justify-between ${color}`}>
      <Link
        to="/"
        className={`flex mt-14 justify-between ${color}`}
        onClick={ctx?.setMRespan}
      >
        adaptable
      </Link>
      <div onClick={ctx?.clicker} className={`mt-14 ${color}`}>
        <MenuOutlined style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default Hamburger;
