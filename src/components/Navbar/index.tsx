import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div>
      <div className="h-16 border-b">
        <div className="mx-8 h-full flex items-center justify-between">
          <Image
            src={"/depop-logo.png"}
            alt="logo"
            width={90}
            height={24}
            quality={100}
          />
          <div className="w-[600px] h-10 rounded-full border-2 border-black bg-[#f3f3f3] flex items-center justify-start px-3 gap-1">
            <Search color="#545454" strokeWidth={1.75} size={20} />
            <Input
              className="h-1/2 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 rounded-none placeholder:text-zinc-950 placeholder:font-medium"
              placeholder="Search for items, brands, or styles..."
            />
          </div>
          <span className="w-[406px] h-10 flex items-center gap-6">
            <span className="flex items-center gap-6">
              <Heart
                color="#000000"
                strokeWidth={1.75}
                size={25}
                className="hover:cursor-pointer"
              />
              <span className="relative">
                <ShoppingBag
                  color="#000000"
                  strokeWidth={1.75}
                  size={25}
                  className="hover:cursor-pointer"
                />
                {/* <span className="absolute size-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold -top-1.5 -right-1.5">
                1
              </span> */}
              </span>
            </span>
            <span className="flex items-center gap-2">
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
      <div className="h-[53px] mx-8 flex items-center">
        <span className="p-4 hover:bg-black hover:cursor-pointer hover:text-white font-extrabold ">
          Menswear
        </span>
        <span className="p-4 hover:bg-black hover:cursor-pointer hover:text-white font-extrabold ">
          WomensWear
        </span>
        <span className="p-4 hover:bg-black hover:cursor-pointer hover:text-white font-extrabold ">
          Kids
        </span>
        <span className="p-4 hover:bg-black hover:cursor-pointer hover:text-white font-extrabold ">
          Sports
        </span>
        <span className="p-4 hover:bg-black hover:cursor-pointer hover:text-white font-extrabold ">
          Brands
        </span>
        <span className="p-4 text-red-600 hover:bg-red-600 hover:cursor-pointer hover:text-white font-extrabold ">
          Sale
        </span>
      </div>
    </div>
  );
}
