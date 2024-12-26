import AboutUs_S from "@/sections/Home_Sections/AboutUs_S";
import BestSellers_S from "@/sections/Home_Sections/BestSellers_S";
import Categories_S from "@/sections/Home_Sections/Categories_S";
import Comments_S from "@/sections/Home_Sections/Comments_S";
import Gallery_S from "@/sections/Home_Sections/Gallery_S";
import Hero_S from "@/sections/Home_Sections/Hero_S";
import OurOffers_S from "@/sections/Home_Sections/OurOffers_S";
import Stories_S from "@/sections/Home_Sections/Stories_S";

export default function Home() {
  return (
    <div className="global_padding py-10 lg:pt-[200px] pt-[160px]">
      <Hero_S />
      <Stories_S />
      <BestSellers_S />
      <OurOffers_S />
      <Categories_S />
      <AboutUs_S />
      <Gallery_S />
      <Comments_S />
    </div>
  );
}
