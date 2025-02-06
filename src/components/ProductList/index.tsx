"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Products } from "../../../types/productType";
import ProductCard from "../ui/productCard";

export default function ProductList() {
  const [products, setProducts] = useState<Products[] | null>(null);

  const HandleGetProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGetProducts();
  });
  return (
    <div className="container mx-auto py-7">
      <div className="text-2xl md:text-3xl font-bold px-7 md:px-14 xl:px-0 flex justify-start">
        Find your best style
      </div>
      <div className="w-full grid grid-cols-12 gap-y-4 py-7 justify-items-center">
        {products?.length &&
          products.map((item, index) => (
            <ProductCard products={item} key={index} />
          ))}
      </div>
    </div>
  );
}
