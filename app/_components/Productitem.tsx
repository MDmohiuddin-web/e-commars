import React from "react";
import { Product } from "../lib/models/ProdectModel";
import Link from "next/link";
import Image from "next/image";

const Productitem = ({ product }: { product: Product }) => {
  return (
    <div className="card bg-base-100 w-[350px] shadow-xl">
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover h-64 w-full"
          loading="lazy"
        ></Image>
      </figure>
      <Link href={`/product/${product.slug}`}>
        <div className="card-body ">
          <h2 className="card-title font-normal">{product.name}</h2>

          <p className="mb-2">{product.brand}</p>

          <div className="card-actions ">
            <span className="text-2xl">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Productitem;
