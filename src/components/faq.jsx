import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question:`How quickly can you process Dubai Business visa applications?`,
    answer:`We prioritize fast, efficient processing, ensuring your employees can travel as scheduled. Regardless of country specific Business visa from Dubai regulations and processing time, our team backs your applications with punctual delivery`
  },
  {
    question:`What if there are complications with the application of Business visa from Dubai?`,
    answer:`Our team is stationed 24/7 for your personalized Dubai Business visa processing time comfort. Any enquiries, delays, challenges or needs are promptly addressed to make your journey hassle-free`
  },
  {
    question:`Whom can I contact in terms of assistance?`,
    answer:`You will be assigned a dedicated Dubai Business visa specialist account manager who provides personalized support and regular updates regarding renewals, documentation and paperwork`
  },
  {
    question:`What are the steps that follow in processing Business visa from Dubai for employees?`,
    answer:`From gathering required documentation, submitting visa applications to following up with the appropriate authorities could never be your concern with our Business visa services in Dubai as your support. Leave the entire responsibility to us.`
  },
  {
    question:`Is application processing of Business visa from Dubai to multiple countries in your service portfolio?`,
    answer:`Absolutely, whether it’s one destination or several, our team of experts guides your Dubai Business visa processing journey from documentation to attestation.`
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto mt-5 space-y-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border-b last:border-b-0 border-gray-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-4 text-left  font-medium"
          >
            <span className="text-base xl:text-lg text-gray-600">{faq.question}</span>
            <div
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <FiChevronDown className="text-xl" />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="pb-4 text-gray-600 ">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
