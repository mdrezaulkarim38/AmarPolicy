/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function FaqButton({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion w-100">
      {faqData.map((faq, index) => (
        <div className="accordion-item m-2" key={index}>
          <h2 className="accordion-header bg-info text-white p-2">
            <button
              className={`accordion-button w-100 text-left ${
                openIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              openIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqButton;
