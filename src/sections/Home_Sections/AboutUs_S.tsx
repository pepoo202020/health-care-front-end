import React from "react";
import "@/styles/aboutUs.css";
import SectionHeader_C from "@/components/SectionHeader_C";
import { ABOUTDATA } from "@/constants/about";
import Image from "next/image";

export default function AboutUs_S() {
  return (
    <div className="about_us_section_container">
      <SectionHeader_C title="About Us" />
      <div
        className="about_us_section_content"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about_us_section_content_inner_bg"></div>
        <div className="about_us_section_content_inner">
          <h2 className="about_us_section_content_inner_title aclonica">
            {ABOUTDATA.title}
          </h2>
          <p className="about_us_section_content_inner_text allan">
            <span>{ABOUTDATA.highhlightedText}</span>
            {ABOUTDATA.description}
          </p>
          <div className="about_us_section_content_inner_div allan">
            {ABOUTDATA.features.map((feature, index) => (
              <div
                key={index}
                className="about_us_section_content_inner_div_card"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="about_us_section_content_inner_div_card_icon"
                />
                <h3 className="about_us_section_content_inner_div_card_title">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
