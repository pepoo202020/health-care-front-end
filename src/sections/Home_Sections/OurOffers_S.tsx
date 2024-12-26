"use client";
import SectionHeader_C from "@/components/SectionHeader_C";
import React from "react";
import "@/styles/ourOffers.css";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { OFFERIF, OFFERS } from "@/constants/offers";
import { useRouter } from "next/navigation";

export default function OurOffers_S() {
  return (
    <div className="our_offers_contianer">
      <SectionHeader_C title="Our Offers" />
      <div className="offers_container">
        {OFFERS.map((offer) => (
          <Offer_C key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}

interface Offer_CProps {
  offer: OFFERIF;
}

const Offer_C: React.FC<Offer_CProps> = ({ offer }) => {
  const router = useRouter();
  return (
    <div className="offer_container">
      <Image
        src={offer.image}
        alt={offer.title}
        width={608}
        height={270}
        className="offer_image"
      />
      <div className="offer_details">
        <h3
          className={`offer_sub_title ${
            offer.id % 2 !== 0 ? "primary" : ""
          } pt-sans`}
        >
          {offer.subHeader}
        </h3>
        <h2 className="offer_title pt-sans">
          {offer.title} <span>{offer.subTitle}</span>
        </h2>
        <button className="offer_btn" onClick={() => router.push(offer.link)}>
          Show More{" "}
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};
