import React, { useEffect } from "react";
import Headerstud from "./Components/Headerstud";
import { useParams } from "react-router-dom";
import Crousel from "./Crousel";

const Studio = () => {
  let params = useParams();

  let color = null;
  useEffect(() => {
    document.body.style.background = "white";
  });
  return (
    <>
      <Headerstud />
    </>
  );
};

export default Studio;
