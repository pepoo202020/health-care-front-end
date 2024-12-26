import React from "react";
import "@/styles/sectionHeader.css";

interface SectionHeader_CProps {
  title: string;
}

export default function SectionHeader_C({ title }: SectionHeader_CProps) {
  return (
    <div className="section_header_container">
      <h2 className="section_header">{title}</h2>
    </div>
  );
}
