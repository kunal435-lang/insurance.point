
import React, { useState } from "react";
import faqBanner from "../images/faq-banner.png";
import faqImg from "../images/faq.png";
import "./FAQ.css";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Insurance Point?",
      answer:
        "Insurance Point, led by Hemant Kumar, is a trusted insurance broker that provides all kinds of insurance solutions under one roof."
    },
    {
      question: "How does an insurance broker work?",
      answer:
        "An insurance broker finds the best policy for you by comparing options from multiple companies and helps you understand and manage your coverage and helps you to get claims "
    },
    {
      question: "Insurance point is trusted",
      answer:
        " 'YES' insurance point is fully trust worthy it have to be 350+ coustomer and its certified by many company like ICICI Lombard "
    },
    {
      question: "How much does it cost to hire a broker ?",
      answer:
        "'FREE' insurance broker usually costs nothing for the client; brokers earn a commission from the insurance company when you buy a policy through them."
    },
    {
      question: "How do I get started?",
      answer:
        "Simply contact our team, share your needs, and we’ll suggest the best plans for you or your business."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container fade-in" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <img src={faqBanner} alt="FAQ Banner" style={{ width: "100%", maxHeight: "180px", objectFit: "cover", borderRadius: "12px", marginBottom: "2vh", boxShadow: "0 2px 12px rgba(40,53,147,0.10)" }} />
      <h1 className="faq-title" style={{ marginBottom: "2vh" }}>Frequently Asked Questions</h1>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "flex-start", gap: "3vw" }}>
        <div className="faq-list" style={{ flex: 2 }}>
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer fade-in">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img src={faqImg} alt="FAQ Illustration" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(40,53,147,0.10)" }} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
