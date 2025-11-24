import React, { useState, useRef, useEffect } from "react";
import { faqData } from "./faqData";

const styles = {
  pageContainer: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "rgba(12, 13, 18, 1)",
    borderRadius: "32px",
    padding: "24px",
  },
  faqItem: {
    marginBottom: "15px",
    padding: "15px 20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
  },
  faqItemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: "20px",
    fontWeight: "700",
    marginLeft: "10px",
  },
  question: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#333",
  },
  answerWrapper: {
    overflow: "hidden",
    transition: "max-height 0.4s ease",
  },
  answer: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // maxHeight animatsiyasi
    answerRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (activeIndex === idx) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [activeIndex]);

  return (
    <div style={styles.pageContainer}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        Your Questions,  Answered
      </h1>

      {faqData.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            style={styles.faqItem}
          >
            <div
              style={styles.faqItemHeader}
              onClick={() => toggleAnswer(index)}
            >
              <div style={styles.question}>{item.question}</div>
              <div style={styles.icon}>{isActive ? "×" : "+"}</div>
            </div>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              style={styles.answerWrapper}
            >
              <div style={styles.answer}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
