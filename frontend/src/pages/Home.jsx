import React, { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import Collection from "../components/Products/Collection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/Slices/productsSlice";
import axios from "axios";
import prod1 from "../assets/ECOM_img/prod1.png";
import prod2 from "../assets/ECOM_img/prod2.png";

// const placeholderProducts = [
//   {
//     _id: 1,
//     name: "Product 1",
//     price: 100,
//     images: [
//       {
//         url: prod1,
//       },
//     ],
//   },
//   {
//     _id: 2,
//     name: "Product 2",
//     price: 200,
//     images: [
//       {
//         url: prod2,
//       },
//     ],
//   },
//   {
//     _id: 3,
//     name: "Product 3",
//     price: 100,
//     images: [
//       {
//         url: prod2,
//       },
//     ],
//   },
//   {
//     _id: 4,
//     name: "Product 4",
//     price: 100,
//     images: [
//       {
//         url: prod2,
//       },
//     ],
//   },
//   {
//     _id: 5,
//     name: "Product 5",
//     price: 100,
//     images: [
//       {
//         url: prod1,
//       },
//     ],
//   },
//   {
//     _id: 6,
//     name: "Product 6",
//     price: 200,
//     images: [
//       {
//         url: prod2,
//       },
//     ],
//   },
//   {
//     _id: 7,
//     name: "Product 7",
//     price: 100,
//     images: [
//       {
//         url: prod2,
//       },
//     ],
//   },
//   {
//     _id: 8,
//     name: "Product 8",
//     price: 100,
//     images: [
//       {
//         url: prod2,
//       },
//     ],
//   },
// ];

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        category: "Plants",
        limit: 8,
      })
    );
    // Fetch the best seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <Collection />
      <NewArrivals />

      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller Product...</p>
      )}

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Products of The Year
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Home;
