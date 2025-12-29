"use client";

import { useState } from "react";
import { productTable, productVariantTable } from "@/db/schema";
import ProductItem from "./product-item";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>

      {/* VIEWPORT */}
      <div
        onClick={() => setActive(true)}
        className={`px-5 ${
          active ? "overflow-x-auto" : "overflow-hidden"
        }`}
      >
        {/* TRACK */}
        <div
          className={`flex gap-4 w-max ${
            active ? "" : "animate-products-loop"
          }`}
        >
          {[...products, ...products].map((product, index) => (
            <ProductItem
              key={`${product.id}-${index}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
