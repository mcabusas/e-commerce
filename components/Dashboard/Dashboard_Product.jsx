import React from "react";

import Image from "next/image";

//images
import Sample1 from "../../images/sample1.png";
import Sample2 from "../../images/sample2.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardProduct = ({ products }) => {
  return (
    <div className="flex-col mb-5">
      <div className=" bg-white px-10 py-5 rounded-2xl">
        <div className="text-center">
          <Image src={Sample1} width={150} height={150} />
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col">
            <p>{products[0].name}</p>
            <p>{`$${products[0].price}`}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              {Array(products[0].rate)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <div className="flex-row flex-wrap">
              {products[0].category.map((category) => (
                <div
                  className="px-5 py-1 rounded-xl text-white border-cyan border hover:cursor-pointer"
                  style={{ backgroundColor: "#52BA5E" }}
                >
                  <p className="font-extralight text-xs">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 py-2 bg-cyan text-rich-black inline-block mt-5 rounded-xl hover:cursor-pointer">
          <div className="">
            <FontAwesomeIcon icon={faCartPlus} color="black" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
