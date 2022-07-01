import React, { Fragment } from "react";
import AntButton from "../../Button";

const News = () => {
  return (
    <Fragment>
      <div className="flex justify-between mt-14">
        <div>Latest News</div>
        <div>
          <AntButton stylee="border-white hover:bg-white hover:text-black" />
        </div>
      </div>
      <div className="flex mt-8 gap-x-8 cRes:flex-col  cRes:gap-x-0">
        <div className="cursor-view hover:-mt-8  cRes:hover:mt-0 cRes:mb-8">
          <img
            src="https://assets.weareadaptable.com/app/uploads/2022/02/22110451/our-staff-650x650.jpg"
            alt="fukck u"
          />
          <div>korem</div>
          <div>lorem lorem lorem</div>
        </div>
        <div className="cursor-view hover:-mt-8 cRes:hover:mt-0 cRes:mb-8">
          <img
            src="https://assets.weareadaptable.com/app/uploads/2022/03/22114441/onboarding_hero-650x650.jpg"
            alt="fukck u"
          />
          <div>korem</div>
          <div>lorem lorem lorem</div>
        </div>
        <div className="cursor-view hover:-mt-8 cRes:hover:mt-0 cRes:mb-8">
          <img
            src="https://assets.weareadaptable.com/app/uploads/2022/02/22103902/onboarding-experience-hero-650x650.jpg"
            alt="fukck u"
          />
          <div>korem</div>
          <div>lorem lorem lorem</div>
        </div>
        <div className="cursor-view hover:-mt-8 cRes:hover:mt-0">
          <img
            src="https://assets.weareadaptable.com/app/uploads/2022/01/07095223/digital-giving-whitepaper-hero-1-650x650.jpg"
            alt="fukck u"
          />
          <div>korem</div>
          <div>lorem lorem lorem</div>
        </div>
      </div>
      <div className="grid justify-between mt-24  ">
        <div className="flex gap-x-14 cRes:flex-col cRes:gap-y-10">
          <div className="relative flex justify-center flex-col items-center overflow-hidden">
            <div>
              <img
                src="https://assets.weareadaptable.com/app/uploads/2019/09/04103057/80D80100-0F4F-42C8-9BB4-2AE63BA71ABC-2-1-1024x678.jpeg"
                className="hover:scale-150 brightness-percent"
              />
            </div>
            <div className="absolute ">
              Our framework is proven to deliver results for our clients.
              <div>
                <AntButton stylee="border-white hover:bg-white hover:text-black top-4" />
              </div>
            </div>
          </div>
          <div className="relative flex justify-center flex-col items-center  overflow-hidden">
            <div>
              <img
                src="https://assets.weareadaptable.com/app/uploads/2019/05/14094129/studio1-1024x678.jpg"
                className="brightness-percent hover:scale-150"
              />
            </div>
            <div className="absolute z-40 ">
              We’re a team of problem solvers delivering effective digital
              solutions that work.
              <div>
                <AntButton stylee="border-white hover:bg-white hover:text-black top-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default News;
