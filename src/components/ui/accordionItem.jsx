"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span
          className={`text-lg font-bold transition-colors ${isOpen ? "text-secondary" : "text-neutral-text group-hover:text-primary"}`}
        >
          {question}
        </span>
        <div
          className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${isOpen ? "bg-secondary text-white" : "bg-neutral-bg text-primary group-hover:bg-primary group-hover:text-white"}`}
        >
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden text-neutral-text/70 leading-relaxed pr-8">
          {answer}
        </div>
      </div>
    </div>
  );
}
