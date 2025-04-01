import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-medium">
            Plant Pulse
          </Link>

          <Link
            to="/weather"
            className="relative block p-2 rounded text-sm font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg transition-transform transform hover:scale-105"
          >
            <span className="relative z-10">Check Weather</span>

            {/* Rain Effect */}
            <div className="absolute inset-0 bg-transparent pointer-events-none overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-transparent bg-[linear-gradient(rgba(255,255,255,0.3)_10%,transparent_40%)] bg-[4px_20px] animate-rainfall"></div>
            </div>
          </Link>
        </div>

        {/* Center Navigation Pictures */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all?category=Plants"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            PLANTS
          </Link>
          <Link
            to="/collections/all?category=Seeds"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            SEEDS
          </Link>
          <Link
            to="/collections/all?category=Fungicides"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            FUNGICIDES
          </Link>
          <Link
            to="/collections/all?category=Fertilizers"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            FERTILIZERS
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-color-green text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
          <Link
            to="/video-gallery"
            className="relative block px-4 py-2 rounded-lg text-sm font-semibold text-white bg-red-500 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <span className="relative z-10">Watch Videos</span>

            {/* Subtle Ripple Effect */}
            <div className="absolute inset-0 pointer-events-none rounded-lg scale-105 opacity-0 transition-all hover:opacity-100 hover:scale-100 border border-yellow-500"></div>
          </Link>
        </div>
      </nav>
      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation*/}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?category=Plants"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Plants
            </Link>
            <Link
              to="/collections/all?category=Seeds"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Seeds
            </Link>
            <Link
              to="/collections/all?category=Fungicides"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Fungicides
            </Link>
            <Link
              to="/collections/all?category=Fertilizers"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Fertilizers
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
