import React from "react";
import "antd/dist/antd.less";

import { Carousel, Radio } from "antd";
import { useState } from "react";
/*const contentStyle = {
    height:"800px",
    color: '#364d79',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'white',
}as React.CSSProperties;*/

const Crousel = () => {
  const [dotPosition, setDotPosition] = useState("left");

  const handlePositionChange = ({ target: { value } }: any) => {
    setDotPosition(value);
  };

  return (
    <div>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}
      ></Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 className="h-20p bg-black cRes:h-10p  cBrands:h-10p">
            <img src="https://assets.weareadaptable.com/app/uploads/2021/08/04133943/team-2021.jpg" />{" "}
          </h3>
        </div>
        <div>
          <h3 className="h-20p bg-black cRes:h-10p cBrands:h-10p">
            <img src="https://assets.weareadaptable.com/app/uploads/2021/01/19102616/studio21.jpg" />{" "}
          </h3>
        </div>
        <div>
          <h3 className="h-20p bg-black cRes:h-10p cBrands:h-10p">
            <img src="https://assets.weareadaptable.com/app/uploads/2021/01/19102627/studio41.jpg" />{" "}
          </h3>
        </div>
        <div>
          <h3 className="h-20p bg-black cRes:h-10p cBrands:h-10p">
            <img src="https://assets.weareadaptable.com/app/uploads/2021/01/19102637/studio6.jpg" />{" "}
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Crousel;
