// CHANGE IMAGES IN PRODUCT.JS FILE AND RUN NPM RUN SEED

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import fertilizer1 from "../../assets/ECOM_img/fertilizer1.webp";
import fertilizer2 from "../../assets/ECOM_img/fertilizer2.jpg";
import tulsi1 from "../../assets/ECOM_img/tulsi1.jpg";
import rose1 from "../../assets/ECOM_img/rose1.jpg";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // const newArrivals = [
  //   {
  //     _id: "1",
  //     name: "Flower Growth Booster",
  //     price: 120,
  //     images: [
  //       {
  //         url: fertilizer1,
  //         altText: "Flower Growth Booster",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     name: "Tulsi Pot",
  //     price: 120,
  //     images: [
  //       {
  //         url: tulsi1,
  //         altText: "Tulsi Pot",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     name: "Rose Plant Vase",
  //     price: 120,
  //     images: [
  //       {
  //         url: rose1,
  //         altText: "Rose Plant",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "4",
  //     name: "Booster",
  //     price: 120,
  //     images: [
  //       {
  //         url: fertilizer2,
  //         altText: "Booster",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "5",
  //     name: "Rose Plant",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=5",
  //         altText: "Rose Plant",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "6",
  //     name: "Rose Plant",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=6",
  //         altText: "Rose Plant",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "7",
  //     name: "Rose Plant",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=7",
  //         altText: "Rose Plant",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "8",
  //     name: "Rose Plant",
  //     price: 120,
  //     images: [
  //       {
  //         url: "https://picsum.photos/500/500?random=8",
  //         altText: "Rose Plant",
  //       },
  //     ],
  //   },
  // ];

  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  //   UPDATE SCROLL BUTTONS
  const udpateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.ScrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", udpateScrollButtons);
      udpateScrollButtons();
    }
  }, [newArrivals]);

  return (
    <section className="py-8 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>

        {/* Scroll Button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 pr-12">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl " />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl " />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="container mx-auto flex space-x-6 relative overflow-x-scroll"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="h-[65px] absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p>${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
