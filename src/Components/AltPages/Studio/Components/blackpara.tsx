import React from "react";
import Button from "../../../Button";

const Blackpara = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between mt-9">
        <div>Why partner with us?</div>
        <div>
          <Button stylee="w-44 bg-black text-white" />
        </div>
      </div>
      <div className="flex text-white mt-9 cRes:flex-col cBrands:flex-wrap pb-96">
        <div className="basis-1/3 cBrands:basis-3/6">
          <h1 className="text-white">We love what we do.</h1>
          <div className="pt-9">
            Ask anyone, we love what we do. We’re passionate about our craft and
            we’ve proven our ability to generate real results, helping clients
            to grow, attract and retain customers.
          </div>
        </div>
        <div className="basis-1/3 pl-[2%] cRes:pl-0 cRes:pt-4 cBrands:basis-3/6 cBrands:pl-0 ">
          <h1 className="text-white">We love what we do.</h1>
          <div className="pt-9">
            Ask anyone, we love what we do. We’re passionate about our craft and
            we’ve proven our ability to generate real results, helping clients
            to grow, attract and retain customers.
          </div>
        </div>
        <div className="basis-1/3 pl-[2%] cRes:pl-0 cRes:pt-4 cBrands:basis-3/6 cBrands:pl-0 cBrands:mt-9">
          <h1 className="text-white">We love what we do.</h1>
          <div className="pt-9">
            Ask anyone, we love what we do. We’re passionate about our craft and
            we’ve proven our ability to generate real results, helping clients
            to grow, attract and retain customers.
          </div>
        </div>
        <div className="basis-1/3 pl-[2%] cRes:pl-0 cRes:pt-4 cBrands:basis-3/6 cBrands:pl-0 cBrands:mt-9">
          <h1 className="text-white">We love what we do.</h1>
          <div className="pt-9">
            Ask anyone, we love what we do. We’re passionate about our craft and
            we’ve proven our ability to generate real results, helping clients
            to grow, attract and retain customers.
          </div>
        </div>
      </div>
    </>
  );
};

export default Blackpara;
