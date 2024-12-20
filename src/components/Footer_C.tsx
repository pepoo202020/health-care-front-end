import { FOOTER_ELEMNTS, FooterLinks } from "@/constants/footer";
import React from "react";
import "@/styles/footer.css";
import Image from "next/image";
import { RiTelegram2Line } from "react-icons/ri";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer_C() {
  return (
    <div
      className="global_padding footer_container"
      style={{ backgroundColor: FOOTER_ELEMNTS.background }}
    >
      <div className="footer_container_content pb-20">
        <Footer_El_One />
        <div className="links_container">
          {FOOTER_ELEMNTS.footerLinks.map((footerLink) => (
            <Footer_El_two
              key={footerLink.LinksHeader}
              footerLinks={footerLink}
            />
          ))}
        </div>
        <Footer_El_three />
      </div>
      <div className="w-full bg-white/50 h-px mb-6"></div>
      <Footer_Privacy_El />
    </div>
  );
}

const Footer_El_One = () => {
  return (
    <div className="footer_el one">
      <Image src="/logo_white.png" alt="logo white" width={159} height={78} />
      <p className="pt-4 pb-6">{FOOTER_ELEMNTS.footerSlogan}</p>
      <div className="subscribe_container">
        <input
          className="subscribe_input"
          type="email"
          placeholder="Email Address"
        />
        <button className="subscibe_btn">
          <RiTelegram2Line />
          <span>Subscribe</span>
        </button>
      </div>
      <div className="terms_checkbox_container pt-8">
        <input className="terms_checkbox" id="terms_checkbox" type="checkbox" />
        <label htmlFor="terms_checkbox">
          I accept terms and conditions & privacy policy
        </label>
      </div>
    </div>
  );
};

interface FooterELementsTwoProps {
  footerLinks: FooterLinks;
}

const Footer_El_two: React.FC<FooterELementsTwoProps> = ({ footerLinks }) => {
  return (
    <div className="footer_el two">
      <h5>{footerLinks.LinksHeader}</h5>
      <div className="links">
        {footerLinks.links.map((link) => (
          <Link href={link.path} className="link" key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Footer_El_three = () => {
  return (
    <div className="footer_el three">
      <h5>{FOOTER_ELEMNTS.aboutHeader}</h5>
      <div className="address_info">
        <div className="address">
          <IoLocationOutline size={25} />
          <span>{FOOTER_ELEMNTS.address}</span>
        </div>
        <div className="email">
          <MdOutlineEmail size={25} />
          <span>{FOOTER_ELEMNTS.email}</span>
        </div>
      </div>
      <div className="social_links">
        {FOOTER_ELEMNTS.socialLinks.map((socialLink) => (
          <Link
            href={socialLink.link}
            key={socialLink.link}
            className="socail_link"
          >
            {socialLink.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Footer_Privacy_El = () => {
  return (
    <div className="footer_privacy_container">
      <p>
        @ Copyright {new Date().getFullYear()} Abanob Shenoda. All Rights
        Reserved
      </p>
    </div>
  );
};
