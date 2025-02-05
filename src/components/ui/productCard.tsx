import { Heart } from "lucide-react";
import Image from "next/image";
import type { Products } from "../../../types/productType";

export default function ProductCard({ products }: { products: Products[] }) {
  return (
    <>
      {products.map((item, index) => {
        return (
          <div
            key={index}
            className="col-span-6 lg:col-span-3 w-[170px] h-[220px] md:w-[310px] md:h-[380px] flex flex-col items-center justify-center gap-4"
          >
            <div className="w-full h-[90%] bg-zinc-900 relative rounded-md">
              <Image
                src={item.image[0]}
                alt="Menswear"
                fill={true}
                sizes="fill"
                quality={100}
                loading="lazy"
                priority={false}
                className="object-cover group-hover:scale-105 transition-transform duration-700 hover:cursor-pointer rounded-md"
              />
              <Heart
                color="#ffffff"
                strokeWidth={1.75}
                size={25}
                className="hover:cursor-pointer absolute bottom-3 right-3"
              />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <span className="text-lg font-bold">${item.price}</span>
              <span>{item.brand}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
