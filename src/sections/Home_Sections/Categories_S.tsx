"use client";
import SectionHeader_C from "@/components/SectionHeader_C";
import React from "react";
import "@/styles/categories.css";
import { CATEGORIES, CategoriesIF } from "@/constants/cates";
import { useRouter } from "next/navigation";

export default function Categories_S() {
  return (
    <div className="categories_section_container">
      <SectionHeader_C title="Categories" />
      <div className="categories_section_content">
        {CATEGORIES.filter((cate) => cate.name !== "All Categories").map(
          (category) => (
            <Category_Card category={category} key={category.name} />
          )
        )}
      </div>
    </div>
  );
}

interface Category_Card_Props {
  category: CategoriesIF;
}

const Category_Card: React.FC<Category_Card_Props> = ({ category }) => {
  const router = useRouter();
  return (
    <div
      className="category_card_container"
      onClick={() => router.push(`/products/cate=${category.slogan}`)}
    >
      <div className="cate_card_title pt-sans">{category.name}</div>
    </div>
  );
};
