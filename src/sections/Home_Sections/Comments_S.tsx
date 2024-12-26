"use client";
import React, { useEffect, useState } from "react";
import "@/styles/comments.css";
import SectionHeader_C from "@/components/SectionHeader_C";
import { CommentsIF, products } from "@/constants/products";
import Image from "next/image";

export default function Comments_S() {
  // get comments from products list
  const comments: CommentsIF[] = products.flatMap(
    (product) => product.comments
  );
  // filter verified comments
  const verifiedComments = comments.filter((comment) => comment.verified);
  //get the random 3 verified comments
  const randomComments = verifiedComments
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="comments_section_container">
      <SectionHeader_C title="Reviews" />
      <div className="comment_main_container">
        {randomComments.map((comentIndex, index) => {
          const position = index === activeIndex ? "center" : "";

          return (
            <div
              key={index}
              className={`comment_container ${
                position === "center"
                  ? "centered_comment"
                  : "uncentered_comment"
              } `}
            >
              <div className="comment_content_container">
                <Image
                  src={comentIndex.image}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="comment_content_avatar"
                />
                <h3 className="commment_content_title">{comentIndex.name}</h3>
                <p className="comment_content_text">{comentIndex.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
