import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question:`What types of visa services do you offer?`,
    answer:`We offer Business, Meeting, Industrial Visit, and Tourist visas, tailored specifically for corporate professionals.`
  },
  {
    question:`How long does the visa processing take?`,
    answer:`Processing times vary depending on the type of visa, but we prioritize fast and efficient processing to ensure timely approvals.`
  },
  {
    question:`Are there any hidden charges in your pricing?`,
    answer:`No, we provide upfront pricing with a flat rate, ensuring full transparency and no hidden fees throughout the process.`
  },
  {
    question:`Can you handle urgent visa appointments?`,
    answer:`Yes, we specialize in urgent visa appointment solutions, providing fast-track services for time-sensitive needs.`
  },
  {
    question:`Do you provide support throughout the entire visa process?`,
    answer:`Yes! Our dedicated visa experts offer end-to-end support, keeping you updated with real-time status updates for a hassle-free experience.`
  }
  
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
            className="w-full flex justify-between items-center pb-4 text-left  font-medium"
          >
            <span className="text-sm md:text-base  text-gray-600">{faq.question}</span>
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
            <div className="pb-4 text-gray-600 text-xs md:text-sm">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
