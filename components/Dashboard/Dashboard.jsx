import React, { useEffect, useState } from "react";
import DashboardProduct from "./Dashboard_Product";
import DashboardCategories from "./Dashboard-Categoies";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardComponent = ({ products }) => {
  let bg = "";
  useEffect(() => {
    console.log(products);
  }, []);

  const star = <p>⭐</p>;

  return (
    <>
      <DashboardCategories />
      <div className=" float-right my-10">
        <FontAwesomeIcon icon={faFilter} color="black" size="lg" />
      </div>
      <div className="flex flex-col  text-black w-full space-x-5">
        <div
          id="product-grid"
          className="flex flex-wrap flex-col md:flex-row justify-between"
        >
          <DashboardProduct products={products} />
          <DashboardProduct products={products} />
          <DashboardProduct products={products} />
          <DashboardProduct products={products} />
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
