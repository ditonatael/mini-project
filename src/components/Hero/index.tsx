import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="w-full flex">
      <div className="w-1/2 h-[595px] relative overflow-hidden">
        <Image
          src={"/hero-menswear.webp"}
          alt="Menswear"
          fill={true}
          quality={100}
          className="object-cover object-[25%_30%] hover:scale-105 transition-transform duration-700 hover:cursor-pointer"
        />
        <div className="absolute h-[125px] w-full m-auto right-0 bottom-40 left-0 flex flex-col items-center justify-center gap-4">
          <span className="text-5xl font-extrabold text-white drop-shadow-xl">
            Menswear
          </span>
          <Button className="w-[126px] h-[45px] bg-white text-black text-lg font-bold hover:bg-white">
            Shop Now
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-[595px] relative overflow-hidden">
        <Image
          src={"/hero-womenswear.webp"}
          alt="Menswear"
          fill={true}
          quality={100}
          className="object-cover hover:scale-105 transition-transform duration-700 hover:cursor-pointer"
        />
        <div className="absolute h-[125px] w-full m-auto right-0 bottom-40 left-0 flex flex-col items-center justify-center gap-4">
          <span className="text-5xl font-extrabold text-white drop-shadow-xl">
            Womenswear
          </span>
          <Button className="w-[126px] h-[45px] bg-white text-black text-lg font-bold hover:bg-white">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
