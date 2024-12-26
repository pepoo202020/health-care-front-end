"use client";
import React from "react";
import "@/styles/productCard.css";
import Image from "next/image";
import { ProductIF } from "@/constants/products";
import { IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { addToWishlist, removeFromWishlist } from "@/lib/slices/wishlistSlice";

interface ProductCardProps {
  product: ProductIF;
}

export default function ProductCard_C({ product }: ProductCardProps) {
  const currency = useAppSelector((state) => state.currency);
  const route = useRouter();
  const wishlist = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  const convertPrice = (price: number) => {
    if (currency.selectedCurrency.name === "EGP") {
      return price;
    } else {
      return price / 50;
    }
  };
  const handleWishlist = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    const isInWishlist = wishlist.items.some((item) => item.id === product.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div
      className="product_card_container"
      onClick={() => route.push(`/products/${product.id}`)}
    >
      <Image
        src={product.main_image}
        alt={product.title}
        width={248}
        height={266}
        className="product_card_image"
      />
      {product.featured && (
        <div className="product_card_featured pt-sans">Featured</div>
      )}
      <div className="product_card_wishlist">
        <IoHeartOutline
          className="header_icon"
          onClick={handleWishlist}
          color={
            wishlist.items.some((item) => item.id === product.id)
              ? "#FF385C"
              : "#000"
          }
        />
      </div>
      <div className="product_card_content_container">
        <h6 className="product_card_content_category pt-sans">
          {product.category}
        </h6>
        <h2 className="product_card_content_title pt-sans">{product.title}</h2>
        <div className="product_card_content_price">
          <h6 className="product_card_content_price_discount pt-sans">
            {convertPrice(product.price * (product.discount / 100)).toFixed(2)}{" "}
            {currency.selectedCurrency.symbol}
          </h6>
          {product.discount && (
            <h6 className="product_card_content_price_original pt-sans">
              {convertPrice(product.price).toFixed(2)}{" "}
              {currency.selectedCurrency.symbol}
            </h6>
          )}
        </div>
      </div>
    </div>
  );
}
