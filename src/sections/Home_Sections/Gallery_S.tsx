import React from "react";
import "@/styles/gallery.css";
import SectionHeader_C from "@/components/SectionHeader_C";
import Image from "next/image";

const gallery_data = [
  "https://images.pexels.com/photos/125532/pexels-photo-125532.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/29854247/pexels-photo-29854247/free-photo-of-artistic-dome-ceiling-inside-milwaukee-building.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2268556/pexels-photo-2268556.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/7792778/pexels-photo-7792778.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=600",
];
export default function Gallery_S() {
  return (
    <section className="gallery_section_container">
      <SectionHeader_C title="Gallery" />

      <div className="gallery_iamges_container">
        {gallery_data.map((img, i) => (
          <div className="gallery_image_container" key={i}>
            <Image
              src={img}
              alt="gallery"
              className="gallery_image"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
