"use client";
import { useState } from "react";
import AccordionItem from "@/components/ui/accordionItem";

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
