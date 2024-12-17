"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/styles/header.css";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/constants/nav";
import { usePathname } from "next/navigation";
import {
  IoCartOutline,
  IoClose,
  IoHeartOutline,
  IoMenu,
  IoPersonOutline,
} from "react-icons/io5";
import { profileContents } from "@/constants/profile_contents";
import { initialNotification } from "@/constants/notification";

export default function Header_C() {
  return (
    <div className="global_padding header_container">
      <Header_Logo />
      <Header_Nav />
      <Icons_C />
      <Header_Phone_Menu_C />
    </div>
  );
}

const Header_Logo = () => {
  return (
    <Link href={"/"} className="header_logo">
      <Image src="/logo.png" alt="logo" width={159} height={78} />
    </Link>
  );
};

const Header_Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="header_nav tapestry">
      {NAV_ITEMS.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className={
            pathName === item.path
              ? "active header_nav_item"
              : "header_nav_item"
          }
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

const Icons_C = () => {
  return (
    <div className="header_icons">
      <Profile_Icon_C />
      <Wishlist_Icon_C />
      <Cart_Icon_C />
    </div>
  );
};

const Profile_Icon_C = () => {
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const profileIconRef = useRef<HTMLDivElement>(null);

  const handleProfileIconClick = () => {
    setShowProfileModal(!showProfileModal);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileIconRef.current &&
        !profileIconRef.current.contains(event.target as Node)
      ) {
        setShowProfileModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="header_profile_icon " ref={profileIconRef}>
      <IoPersonOutline
        className="header_icon"
        onClick={handleProfileIconClick}
      />
      {showProfileModal && <Profile_Modal_C />}
    </div>
  );
};

const Profile_Modal_C = () => {
  const user = null;
  return (
    <div className="profile_modal">
      <div className="main_information">
        <h1>{profileContents.name}</h1>
        <Link href={`mailto:${profileContents.email}`} className="email">
          {profileContents.email}
        </Link>
      </div>
      <div className="profile_modal_contents">
        {profileContents.content.map((content, index) => {
          if (
            user &&
            (content.name === "Login" || content.name === "Register")
          ) {
            return null;
          }
          if (!user && content.name === "Logout") {
            return null;
          }
          return (
            <Link
              href={content.path}
              key={index}
              className="profile_modal_link"
            >
              <h2>{content.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Wishlist_Icon_C = () => {
  const wishlist = 2;
  return (
    <Link href={"/wishlists"}>
      <div className="header_wishlist_icon relative">
        <IoHeartOutline
          className="header_icon"
          color={wishlist > 0 ? "red" : "black"}
        />
        {wishlist > 0 && (
          <div className="padge_count">
            <p>{wishlist}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

const Cart_Icon_C = () => {
  const cart_items = 2;
  return (
    <Link href={"/cart"}>
      <div className="header_cart_icon relative">
        <IoCartOutline
          className="header_icon"
          color={cart_items > 0 ? "#0C3C5D" : "black"}
        />
        {cart_items > 0 && (
          <div className="padge_count">
            <p>{cart_items}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

const Header_Phone_Menu_C = () => {
  const [showPhoneMenuModal, setShowPhoneMenuModal] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handlePhoneMenuIconClick = () => {
    setShowPhoneMenuModal(true);
  };

  const handleClosePhoneMenuModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPhoneMenuModal(false);
      setIsClosing(false);
    }, 300);
  };
  return (
    <div className="header_phone_menu">
      <div className="header_phone_menu_icon">
        <IoMenu onClick={handlePhoneMenuIconClick} />
      </div>
      {showPhoneMenuModal && (
        <div className={`header_phone_menu_modal ${isClosing ? "hide" : ""}`}>
          <Header_Phone_Menu_Modal_C
            handleClosePhoneMenuModal={handleClosePhoneMenuModal}
          />
        </div>
      )}
    </div>
  );
};

interface Header_Phone_Menu_Modal_Props {
  handleClosePhoneMenuModal: () => void;
}

const Header_Phone_Menu_Modal_C: React.FC<Header_Phone_Menu_Modal_Props> = ({
  handleClosePhoneMenuModal,
}) => {
  const pathName = usePathname();
  return (
    <div className="header_phone_menu_modal">
      <div
        className="header_phone_menu_modal_close"
        onClick={handleClosePhoneMenuModal}
      >
        <IoClose fill="white" />
      </div>
      <div className="notification_message">{initialNotification.message}</div>
      <nav className="header_nav_phone tapestry">
        {NAV_ITEMS.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={
              pathName === item.path
                ? "active header_nav_item_phone"
                : "header_nav_item_phone"
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Phone_Icons_C />
    </div>
  );
};

const Phone_Icons_C = () => {
  return (
    <div className="header_icons_phone">
      <Profile_Icon_C />
      <Wishlist_Icon_C />
      <Cart_Icon_C />
    </div>
  );
};
