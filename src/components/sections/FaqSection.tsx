import React from "react";
import Header from "../common/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  const faqData = [
    {
      id: "0",
      question: "What types of events do you plan?",
      answer:
        "We specialize in planning a wide range of events, from weddings and corporate functions to social gatherings and themed parties. No matter the occasion, we'll work with you to create a unique and memorable experience.",
    },
    {
      id: "1",
      question: "Why should I hire an event planner?",
      answer:
        "Event planners take the stress out of hosting! We handle all the details, from venue selection and vendor coordination to budget management and day-of execution. This allows you to focus on enjoying your event.",
    },
    {
      id: "2",
      question: "What are your fees?",
      answer:
        "Our fees vary depending on the complexity of your event and the level of service you require. We offer a free consultation to discuss your needs and provide a customized quote.",
    },
    {
      id: "3",
      question: "How far in advance should I book your services?",
      answer:
        "The sooner, the better! Ideally, booking at least 6 months in advance allows us ample time to secure the perfect vendors and venue for your event.",
    },
    {
      id: "4",
      question: " Can I customize my event package?",
      answer:
        "Absolutely! We understand that every event is unique. We'll work with you to create a package that includes the services you need to bring your vision to life.",
    },
    {
      id: "5",
      question: "Do you have preferred vendors?",
      answer:
        "We work with a network of trusted and talented vendors across various industries. However, we are always open to your suggestions and happy to collaborate with your preferred vendors.",
    },
    {
      id: "6",
      question: "What happens on the day of the event?",
      answer:
        "We'll be there every step of the way! Our team will manage all logistics, ensuring everything runs smoothly and according to plan. You can relax and enjoy your event knowing we've got it covered.",
    },
    {
      id: "7",
      question:
        "How can I get started?",
      answer:
        "Contact us today for a free consultation! We'd love to hear about your event vision and discuss how we can help you make it a reality.",
    },
  ];

  const validIndexForBorderRight = (index: number) => {
    if (index === 0 || index === 2 || index === 4 || index === 6) {
      return true;
    }
    return false;
  };
  return (
    <section className="">
      <section className="flex justify-between gap-[1.25rem] mb-[3.12rem]">
        <div>
          <Header title="faqs" description="Frequently Asked Questions" />
        </div>
      </section>
      <div className="flex justify-between gap-[3.12rem] flex-col xl:flex-row">
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 md:grid-cols-2"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              value={faq.id}
              key={faq.id}
              className={`border-y border-y-lightDark px-[3.12rem] py-[1.88rem] ${
                validIndexForBorderRight(index)
                  ? "md:border-r md:border-r-lightDark"
                  : ""
              }`}
            >
              <AccordionTrigger className="text-customGrayAlt2 font-[600] text-[1rem] md:text-[1.25rem] uppercase">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-customGrayAlt text-[0.875rem] md:text-[1.125rem]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
