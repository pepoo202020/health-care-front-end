"use client";
import React, { useState } from "react";
import "@/styles/notification.css";
import CURRENCY_INTERFACE, {
  initialNotification,
} from "@/constants/notification";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setCurrency } from "@/lib/slices/currencySlice";
import { useAppSelector } from "@/lib/hooks";

export const Notification_C = () => {
  return (
    <div
      className="main_container global_padding"
      style={{ backgroundColor: initialNotification.backgroundColor }}
    >
      <PhoneComponent />
      <MessageComponent />
      <CurrencyComponent />
    </div>
  );
};

const PhoneComponent = () => {
  return (
    <Link href={initialNotification.phone.link} className="phone_container">
      <FiPhoneCall />
      {initialNotification.phone.number}
    </Link>
  );
};

const MessageComponent = () => {
  return <div className="message_container">{initialNotification.message}</div>;
};

const CurrencyComponent = () => {
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const currency = useAppSelector((state) => state.currency);

  const handleCurrencyChange = (currency: CURRENCY_INTERFACE) => {
    dispatch(setCurrency(currency));
    setShowCurrencyModal(false);
  };
  return (
    <div className="currency_container">
      <button
        onClick={() => setShowCurrencyModal(!showCurrencyModal)}
        className="currency_btn"
      >
        {currency.selectedCurrency.name} <IoIosArrowDown />{" "}
      </button>
      {showCurrencyModal && (
        <div className="currency_modal">
          {initialNotification.currency.map((currency) => (
            <div
              key={currency.name}
              className="currency_modal_item"
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
