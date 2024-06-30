import React from "react";

function ServiceCard() {
  const serviceHighlightData = [
    " from venue selection,to vendor coordination & budget management, we ensure your event runs flawlessly.",
    "specialists in weddings, parties, corporate functions and more.",
    "one-stop shop for planning expertise across a wide range of events.",
    "Quick turnaround for you to relive the day's highlights.",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div>
        <div className="flex gap-2">
          <p className="text-[1.75rem] md:text-[3.625rem] text-customGrayAlt font-[600] uppercase">
            Events
          </p>
          <img
            src="/images/arrow_purple_button.png"
            alt="arrow purple button"
          />
        </div>
        <p className="text-customGrayAlt2 text-[1/125rem] mt-[0.75rem]">
        We’re your sounding board, keeping everything organized and your plans guaranteed to be on track for a successful result.Whether it&apos;s a wedding, corporate event,
          or milestone celebration, we&apos;re there to document every heartfelt
          moment. 
        </p>

        <p className="mt-[3.12rem] mb-[1.25rem] text-lightGray font-[500] text-[1.125rem]">
          Service Highlights
        </p>
        <div className="flex flex-col gap-[0.62rem]">
          {serviceHighlightData.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-lightDark p-[1.12rem] rounded-[0.75rem]"
            >
              <img src="/images/legged_stars_gray.png" alt="gray star" />
              <p className="uppercase text-customGrayAlt2 text-[1.125rem]">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img
          src="/images/damien_2.png"
          alt="damien on stage"
          className="rounded-[1.25rem] rounded-bl-[6.25rem]"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
