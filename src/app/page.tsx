import Navbar from "~/components/Navbar";
import HeroSection from "~/components/Hero";
import ShopByPriceSection from "~/components/PriceCategory";

export default function Home() {
  return (
    <div className="font-worksans">
      <Navbar />
      <HeroSection />
      <ShopByPriceSection />
    </div>
  );
}
