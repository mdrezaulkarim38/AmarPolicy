import { useState } from "react";

function FaqButton({faqData} ) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container fs-4">
            <div className="accordion" id="faqAccordion">
                {faqData.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className={`btn btn-info w-100 text-left ${openIndex === index ? "" : "collapsed"}`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.question}
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default FaqButton;
