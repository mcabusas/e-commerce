import React from "react";
import constants from "../../utils/constants";

const DashboardCategories = () => {
  return (
    <div
      id="categories-section"
      className="flex flex-col p-2 rounded-xl bg-cyan shadow-sm shadow-cyan text-black"
    >
      <div className="mb-5">
        <h1 className="text-4xl underline underline-offset-8 decoration-rich-black">
          Categories
        </h1>
      </div>

      <div className="flex flex-row space-x-8">
        {constants.product_categories.map((prod) => (
          <a className="hover:cursor-pointer">
            <p
              className="font-light hover:font-normal hover:underline"
              key={prod.name}
            >
              {prod.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DashboardCategories;
