/* eslint-disable react/prop-types */
import { useState } from "react";

function FaqButton({ faqData }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mu-faq-content container mt-4">
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq) => (
          <div className="card mb-1" key={faq.id}>
            {/* Click anywhere on the header to toggle FAQ */}
            <div 
              className="card-header d-flex align-items-center"
              onClick={() => toggleFAQ(faq.id)}
              style={{ cursor: "pointer" }}
            >
              <h4 className="panel-title text-left m-0 flex-grow-1">
                <span className={`fa ${openId === faq.id ? "fa-minus" : "fa-plus"} mr-2`}></span>
                {faq.question}
              </h4>
            </div>
            {/* Collapsible content with smooth transition */}
            <div 
              className={`collapse ${openId === faq.id ? "show" : ""}`}
              style={{ transition: "max-height 0.4s ease-out", overflow: "hidden" }}
            >
              <div className="card-body text-left">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqButton;
