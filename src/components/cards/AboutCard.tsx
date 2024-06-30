import React from "react";
import { Separator } from "../ui/separator";
import MainButton from "../common/MainButton";

function AboutCard() {
  return (
    <div className="border border-lightDark rounded-[0.625rem]">
      <div className="flex gap-2 items-center  pt-[2.5rem] px-[2.5rem]">
        <img src="/images/few_legs_star.png" alt="half star" />
        <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
          WHO WE ARE
        </p>
      </div>
      <p className="text-customGrayAlt2 text-[0.875rem] mt-[0.75rem]  px-[2.5rem]">
      Our mission is to plan and design your event by carefully selecting vendors that cater to your vision,
      expectation, and budget. Curating a detailed timeline, diagram, and checklist to ensure every little 
      detail is addressed and executed.
      </p>

      <Separator className="bg-lightDark my-[2.5rem]" />

      <div className="px-[2.5rem]">
        <div className="flex gap-2 items-center">
          <img src="/images/few_legs_star.png" alt="half star" />
          <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
            Contact Information
          </p>
        </div>

        <div className="flex flex-col xl:flex-row  gap-4 justify-between my-[2.5rem]">
          <div>
            <p className="text-[1.125rem] font-[500] text-customGray90">
              Email
            </p>
            <p className="text-[1.125rem] font-[500] text-customGrayAlt2">
              contact@panevents.ng
            </p>
          </div>

          <div>
            <p className="text-[1.125rem] font-[500] text-customGray90">
              Phone Number
            </p>
            <p className="text-[1.125rem] font-[500] text-customGrayAlt2">
              +234 80321045800
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-4  p-[2.5rem]">
        <div className="border border-lightDark rounded-[6.25rem] inline-flex justify-between p-[0.62rem] gap-4 w-[210px]">
          <img
            src="/images/facebook_icon.png"
            alt="facebook icon"
            className="cursor-pointer"
          />
          <img
            src="/images/x_icon.png"
            alt="x icon"
            className="cursor-pointer"
          />
          <img
            src="/images/instagram_icon.png"
            alt="instagram icon"
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-[1.25rem]">
          <MainButton text="Let's Work" classes="w-full md:w-[inherit]" />
          <MainButton text="Download Portfolio" classes="w-full md:w-[inherit]" />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
