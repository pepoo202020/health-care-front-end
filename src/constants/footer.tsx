import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { colors } from "./colors";

interface Links {
  name: string;
  path: string;
}

export interface FooterLinks {
  LinksHeader: string;
  links: Links[];
}

interface SocialLinks {
  icon: React.ReactElement;
  link: string;
}

interface FooterContent {
  background: string;
  footerSlogan: string;
  footerLinks: FooterLinks[];
  aboutHeader: string;
  address: string;
  email: string;
  socialLinks: SocialLinks[];
}

export const FOOTER_ELEMNTS: FooterContent = {
  background: colors.mainColor,
  footerSlogan: "Stay tuned for latest updates and new features",
  footerLinks: [
    {
      LinksHeader: "Information",
      links: [
        { name: "About us", path: "/about-us" },
        { name: "Delivery information", path: "/delivery-information" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Sales", path: "/sales" },
        { name: "Terms & Conditions", path: "/terms-conditions" },
      ],
    },
    {
      LinksHeader: "Account",
      links: [
        { name: "Dashboard", path: "/dashboard" },
        { name: "My orders", path: "/my-orders" },
        { name: "Account details", path: "/account-details" },
        { name: "Returns", path: "/returns" },
        { name: "Wishlist", path: "/wishlist" },
      ],
    },
  ],
  aboutHeader: "About / Contacts",
  address: "70 Washington Square South,New York, NY 10012, United States",
  email: "Pavanvkoli@gmail.com",
  socialLinks: [
    { icon: <FaFacebookF />, link: "http://www.facebook.com" },
    { icon: <FaInstagram />, link: "http://instagram.com" },
    { icon: <FaLinkedinIn />, link: "http://www.linkedin.com" },
    { icon: <FaTwitter />, link: "http://twitter.com" },
    { icon: <FaYoutube />, link: "http://www.youtube.com" },
  ],
};
