import SectionHeader_C from "@/components/SectionHeader_C";
import React from "react";
import "@/styles/bestSellers.css";
import ProductCard_C from "@/components/ProductCard_C";
import { products } from "@/constants/products";

export default function BestSellers_S() {
  const featuredProducts = products.filter((product) => product.featured);
  return (
    <div className="section_container">
      <SectionHeader_C title="Best Sellers Products" />
      <div className="products_container">
        {featuredProducts.map((product) => (
          <ProductCard_C key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
