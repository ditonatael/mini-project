import Navbar from "~/components/Navbar";
import HeroSection from "~/components/Hero";
import ShopByPriceSection from "~/components/PriceCategory";
import ProductList from "~/components/ProductList";

export default function Home() {
  return (
    <div className="font-worksans">
      <Navbar />
      <HeroSection />
      <ShopByPriceSection />
      <ProductList />
    </div>
  );
}
