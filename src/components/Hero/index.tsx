import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center group">
      <div className="w-full lg:w-1/2 h-[270px] md:h-[400px] lg:h-[595px] relative overflow-hidden">
        <Image
          src={"/hero-menswear.webp"}
          alt="Menswear"
          fill={true}
          quality={100}
          className="object-cover object-[25%_30%] group-hover:scale-105 transition-transform duration-700 hover:cursor-pointer opacity-95"
        />
        <div className="absolute h-[125px] w-full m-auto right-0 -bottom-3 md:bottom-7 lg:bottom-40 left-0 flex flex-col items-center justify-center gap-1 lg:gap-4">
          <span className="text-2xl lg:text-5xl font-extrabold text-white drop-shadow-xl">
            Menswear
          </span>
          <Button className="w-[100px] md:w-[126px] h-[30px] md:h-[45px] bg-white text-black lg:text-lg font-bold hover:bg-white">
            Shop Now
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[270px] md:h-[400px] lg:h-[595px] relative overflow-hidden">
        <Image
          src={"/hero-womenswear.webp"}
          alt="Menswear"
          fill={true}
          quality={100}
          className="object-cover group-hover:scale-105 transition-transform duration-700 hover:cursor-pointer"
        />
        <div className="absolute h-[125px] w-full m-auto right-0 -bottom-3 md:bottom-7 lg:bottom-40 left-0 flex flex-col items-center justify-center gap-1 lg:gap-4">
          <span className="text-2xl lg:text-5xl font-extrabold text-white drop-shadow-xl">
            Womenswear
          </span>
          <Button className="w-[100px] md:w-[126px] h-[30px] md:h-[45px] bg-white text-black lg:text-lg font-bold hover:bg-white">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
