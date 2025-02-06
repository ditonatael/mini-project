"use client";

import { ChevronRight, ShieldCheck, Star, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import ProductDetailCarousel from "~/components/ProductDetailCarousel";

export default function ProductDetail() {
  const alsoLikeItems = [1, 2, 3, 4, 5, 6, 7, 8];
  const productImages = [1, 2, 3, 4];
  const hashtags = [
    "#onitsuka",
    "#onitsukatiger",
    "#shoe",
    "#streetwear",
    "#style",
  ];
  const router = useRouter();
  return (
    <div className="container px-2 md:px-7 xl:mx-24 flex flex-col overflow-scroll">
      {/* Header Section */}
      <div className="pt-12 pb-7 flex flex-col gap-4">
        <div className="font-bold md:text-lg">You might also like</div>
        <div className="flex items-start gap-0.5 xl:items-center xl:justify-between">
          {alsoLikeItems.map((item, index) => {
            return (
              <div
                key={index}
                className="size-[50px] md:size-[90px] lg:size-[120px] xl:size-[150px] bg-stone-400 rounded-md"
              ></div>
            );
          })}
        </div>
      </div>
      {/* Product Detail */}
      <div className="pb-7">
        {/* Home Breadcrumb */}
        <span
          className="w-fit flex items-center justify-start decoration-[#616161] hover:underline hover:underline-offset-4 hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <p className="text-[#616161] text-sm">Home</p>{" "}
          <ChevronRight color="#616161" strokeWidth={1} size={15} />
        </span>
        {/* Product */}
        <div className="w-full h-screen flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="hidden w-1/2 h-full md:flex flex-col gap-2 overflow-scroll">
            {productImages.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:min-h-[350px] lg:min-h-[640px] bg-blue-400 "
                ></div>
              );
            })}
          </div>
          <ProductDetailCarousel />
          {/* Product Description */}
          <div className="md:w-[400px] h-full flex flex-col px-4 md:pl-8">
            {/* Product Title and Price */}
            <div className="flex flex-col gap-1 border-b pb-6">
              <span className="text-lg md:text-xl">
                Onitsuka Tiger Men's multi Trainers
              </span>
              <span className="text-xl font-bold">$40.00</span>
              <span className="flex gap-1 text-xs md:text-base text-stone-600">
                Excellent condition •
                <p className="underline underline-offset-1">Onitsuka Tiger</p>
              </span>
              <div className="pt-3 flex flex-col gap-2">
                <Button className="h-11 rounded-none">Button Here</Button>
                <Button
                  variant={"outline"}
                  className="h-11 rounded-none border-2 border-black"
                >
                  Button Here
                </Button>
              </div>
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck color="#000000" strokeWidth={1.5} size={30} />
                  <span className="text-xs">
                    All purchases through Depop are covered by Buyer Protection.{" "}
                    <br />{" "}
                    <p className="text-[11px] underline underline-offset-1 hover:cursor-pointer">
                      Learn more
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-2 pl-1">
                  <Truck color="#000000" strokeWidth={1.5} />
                  <span className="text-xs flex gap-1">
                    This seller often ships in{" "}
                    <p className="font-bold">2 days</p>
                  </span>
                </div>
              </div>
            </div>
            {/* Product Text */}
            <div className="py-6 border-b">
              <span>
                Onitsuka Tiger Colorado Eighty-Five Runner, sz 11 Men’s
                <span className="flex flex-wrap gap-1">
                  {hashtags.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="font-bold hover:underline underline-offset-1 hover:cursor-pointer"
                      >
                        {item}
                      </span>
                    );
                  })}
                </span>
              </span>
            </div>
            {/* Seller Profile */}
            <div className="flex flex-col py-6 md:border-b">
              <div className="flex gap-4">
                <div className="flex items-center justify-center size-16 rounded-full bg-stone-200"></div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold hover:underline underline-offset-1 hover:cursor-pointer">
                    AnonymSeller
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-1">
                      <Star fill="#FADA5E" strokeWidth={1} size={15} />
                      <Star fill="#FADA5E" strokeWidth={1} size={15} />
                      <Star fill="#FADA5E" strokeWidth={1} size={15} />
                      <Star fill="#FADA5E" strokeWidth={1} size={15} />
                      <Star fill="#FADA5E" strokeWidth={1} size={15} />
                    </div>
                    <span className="text-sm">{"(20)"}</span>
                  </div>
                  <div className="text-xs text-stone-600">
                    79 sold • Active today
                  </div>
                </div>
              </div>
              <div className="pt-4 flex justify-between gap-1">
                <Button
                  variant={"outline"}
                  className="w-1/2 border border-black"
                >
                  <span className="font-bold">Visit shop</span>
                </Button>
                <Button
                  variant={"outline"}
                  className="w-1/2 border border-black"
                >
                  <span className="font-bold">Ask a question </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
