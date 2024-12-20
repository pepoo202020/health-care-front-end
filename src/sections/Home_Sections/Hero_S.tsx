"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/styles/hero.css";
import Image from "next/image";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import {
  CATEGOREAS_SORTED_BY_NAME,
  CATEGORIES,
  CategoriesIF,
} from "@/constants/cates";
import { useRouter } from "next/navigation";

export default function Hero_S() {
  return (
    <div className="hero_container">
      <div className="col_one ">
        <Hero_Slogan />
        <Hero_Header />
        <Hero_Search_Container />
      </div>
      <Hero_Image />
    </div>
  );
}

const Hero_Slogan = () => {
  return (
    <div className="hero_slogan_container anton">
      <h1>Health Matters</h1>
      <Image src="/heart.png" alt="heart" width={61} height={40} />
    </div>
  );
};

const Hero_Header = () => {
  return (
    <h2 className="hero_header abril-fatface">
      <span>One Step Solution </span>
      get the right routine.
    </h2>
  );
};

const Hero_Image = () => {
  return (
    <div className="hero_image_container">
      <Image src="/hero_img.png" alt="hero_image" width={647} height={457} />
    </div>
  );
};

const Hero_Search_Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // Set initial state to  "All Categories"
  const [cate, setCate] = useState<CategoriesIF>({
    name: "All Categories",
    slogan: "all-categories",
  });
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    if (search) {
      if (cate === CATEGORIES[0]) {
        router.push(`/search?q=${search}`);
      } else {
        router.push(`/search?q=${search}&cate=${cate.slogan}`);
      }
    }
  };

  const handleCate = (cate: CategoriesIF) => {
    setCate(cate);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Node;
      if (
        dropdownRef.current instanceof Node &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="hero_search_container">
      <div className="relative" ref={dropdownRef}>
        <div
          className="cates_container abril-fatface"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiBars3CenterLeft size={35} fill="#184363" />
          <h2 className="cate_header">{cate.name}</h2>
        </div>
        {isOpen && <Cates_Container handleCate={handleCate} />}
      </div>
      <input
        type="text"
        placeholder="search for our products.........."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <FaSearch size={30} onClick={handleSearch} />
    </div>
  );
};

interface CATESPROPS {
  handleCate: (cate: CategoriesIF) => void;
}

const Cates_Container: React.FC<CATESPROPS> = ({ handleCate }) => {
  // Create a new array with "All Categories" first, followed by sorted categories
  const sortedCategories = [
    CATEGORIES[0],
    ...CATEGOREAS_SORTED_BY_NAME.filter((cat) => cat.name !== "All Categories"),
  ];

  return (
    <div className="cates_content_container">
      <div className="py-2">
        {sortedCategories.map((cate, index) => (
          <div key={index} className="cate" onClick={() => handleCate(cate)}>
            <p>{cate.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
