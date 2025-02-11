import HeroSection from "~/components/Hero";
import ShopByPriceSection from "~/components/PriceCategory";
import ProductList from "~/components/ProductList";
import PageWrapper from "~/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="font-worksans">
        <HeroSection />
        <ShopByPriceSection />
        <ProductList />
      </div>
    </PageWrapper>
  );
}
