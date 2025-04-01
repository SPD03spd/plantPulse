import React from "react";
import collection_1 from "../../assets/ECOM_img/collection_1.jpg";
import collection_2 from "../../assets/ECOM_img/collection_2.jpg";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* First Collection */}
        <div className="relative flex-1">
          <img
            src={collection_1}
            alt="Plant Pots"
            className="w-full h-[680px] object-fill ml-4 pr-4"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-xl">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Plant Pots & Seeds
            </h2>
            <Link
              to="/collections/all?category=Plants"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Second Collection */}
        <div className="relative flex-1">
          <img
            src={collection_2}
            alt="Plant Fertilizers"
            className="w-full h-[680px] object-cover pr-4"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-xl">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Plant Fertilizers
            </h2>
            <Link
              to="/collections/all?category=Fertilizers"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
