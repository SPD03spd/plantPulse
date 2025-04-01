import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/Slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  // const cartProducts = [
  //   {
  //     productId: 1,
  //     name: "Tshirt",
  //     size: "M",
  //     quantity: 1,
  //     price: 15,
  //     color: "Blue",
  //     image: "https://picsum.photos/200?random=1",
  //   },
  //   {
  //     productId: 2,
  //     name: "shirt",
  //     size: "M",
  //     quantity: 1,
  //     price: 30,
  //     color: "Red",
  //     image: "https://picsum.photos/200?random=2",
  //   },
  // ];
  const dispatch = useDispatch();
  console.log("Cart Products:", cart.products);

  // Handle adding or subtracting to cart
  const handleAddToCart = (productId, delta, quantity, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          color,
        })
      );
    }
  };

  const handleRemoveFromCart = (productId, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, color }));
  };

  return (
    <div>
      {cart.products.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2"></div>
              <button
                onClick={() =>
                  handleAddToCart(
                    product.productId,
                    -1,
                    product.quantity,
                    product.color
                  )
                }
                className="border rounded px-2 py-1 text-xl font-medium"
              >
                -
              </button>
              <span className="mx-4">{product.quantity}</span>
              <button
                onClick={() =>
                  handleAddToCart(
                    product.productId,
                    1,
                    product.quantity,
                    product.color
                  )
                }
                className="border rounded px-2 py-1 text-xl font-medium"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p>Rs. {product.price.toLocaleString()}</p>
            <button
              onClick={() =>
                handleRemoveFromCart(product.productId, product.color)
              }
            >
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
