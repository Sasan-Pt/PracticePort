import React from "react";
import { Link } from "react-router-dom";

const LayPictures = (props: any) => {
  console.log(props);
  return (
    <div className="mt-14 ">
      <div className="flex justify-between cRes:flex-col ">
        <div className="w-40p cRes:w-full cursor-view ">
          <Link to="/Invalid">
            <img src={props.pic.left} className="h-90p cursor-view" />
            <h2 className="cursor-view">
              Laying the digital foundations for an award-winning homebuilder
            </h2>
            <h3 className="cursor-view">Spitfire Homes</h3>
          </Link>
        </div>

        <div className="w-40p cRes:w-full cRes:mt-12 cursor-view">
          <Link to="/Invalid">
            <img src={props.pic.right} className="h-90p w-44p cursor-view" />
            <h2 className="cursor-view">
              Relaunching the world leaders in audio branding
            </h2>
            <h3 className="cursor-view">PHMG</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LayPictures;
