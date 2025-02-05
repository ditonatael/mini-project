"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import type { Products } from "../../../types/productType";
import { useState } from "react";

export default function ProductCard({ products }: { products: Products }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="col-span-6 lg:col-span-3 w-[170px] h-[220px] md:w-[310px] md:h-[380px] flex flex-col items-center justify-center gap-4">
      <div
        className="w-full h-[90%] bg-zinc-100 relative rounded-md hover:cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Default Image */}
        <Image
          src={products.image[0]}
          alt="Product Image"
          fill
          sizes="fill"
          quality={100}
          loading="lazy"
          className={`object-cover transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hovered Image */}
        {products.image[1] && (
          <Image
            src={products.image[1]}
            alt="Product Hover Image"
            fill
            sizes="fill"
            quality={100}
            loading="lazy"
            className={`object-cover absolute top-0 left-0 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <Heart
          color="#ffffff"
          strokeWidth={1.75}
          size={25}
          className="hover:cursor-pointer absolute bottom-3 right-3"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <span className="text-lg font-bold">${products.price}</span>
        <span>{products.brand}</span>
      </div>
    </div>
  );
}
