"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, Search } from "lucide-react";
import AppSidebar from "../AppSidebar";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const categoryItems = [
    "Menswear",
    "Womenswear",
    "Kids",
    "Sports",
    "Brands",
    "Sale",
  ];

  const router = useRouter();
  return (
    <div className="fixed z-10 bg-white w-full">
      <div className="h-16 border-b">
        <div className="mx-2 lg:mx-8 h-full flex items-center justify-between">
          <span className="flex items-center gap-4">
            <AppSidebar categoryItems={categoryItems} />
            <Image
              src={"/depop-logo.png"}
              alt="logo"
              width={90}
              height={24}
              quality={100}
              style={{ width: 90, height: 24, cursor: "pointer" }}
              onClick={() => router.push("/")}
            />
          </span>
          <div className="w-[600px] h-10 rounded-full border-2 border-black bg-[#f3f3f3] hidden lg:flex items-center justify-start px-3 gap-1">
            <Search color="#545454" strokeWidth={1.75} size={20} />
            <Input
              className="h-1/2 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 rounded-none placeholder:text-zinc-950 placeholder:font-medium"
              placeholder="Search for items, brands, or styles..."
            />
          </div>
          <span className="lg:w-[406px] h-10 flex items-center gap-4 lg:gap-6">
            <span className="flex items-center gap-2 lg:gap-6">
              <Heart
                color="#000000"
                strokeWidth={1.75}
                size={25}
                className="hidden lg:block hover:cursor-pointer"
              />
              {/* Small Screen Search Button */}
              <Search
                color="#000000"
                strokeWidth={1.75}
                size={25}
                className="block lg:hidden hover:cursor-pointer"
              />
              <span className="relative">
                <ShoppingBag
                  color="#000000"
                  strokeWidth={1.75}
                  size={25}
                  className="hover:cursor-pointer"
                />
                <span className="absolute size-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold -top-1.5 -right-1.5">
                  1
                </span>
              </span>
            </span>
            {/* Small Screen Button */}
            <Button className="flex lg:hidden items-center justify-center w-[116px] h-8 rounded-none font-bold text-lg">
              Sign Up
            </Button>
            {/* Large Screen Button */}
            <span className="hidden lg:flex items-center gap-2">
              <Button className="w-[116px] h-8 rounded-none font-bold text-lg">
                Sell Now
              </Button>
              <Button
                className="w-[108px] h-8 rounded-none font-bold text-lg border-2 border-black"
                variant="outline"
              >
                Sign Up
              </Button>
              <Button
                className="w-[74px] h-7 no-underline font-bold text-lg"
                variant="link"
              >
                Log in
              </Button>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="h-[53px] mx-8 hidden lg:flex items-center">
          {categoryItems.map((item, index) => {
            return (
              <span
                key={index}
                className={`p-4 hover:cursor-pointer font-bold ${
                  item.toLowerCase() === "sale"
                    ? "text-red-600 hover:bg-red-600 hover:text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
