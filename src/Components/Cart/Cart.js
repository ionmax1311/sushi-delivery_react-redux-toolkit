import React, { useState } from "react";
import { delivery_config } from "../Cart/config";
import { Button, Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  deliveryInCart,
  clearCart,
  clearOrder,
} from "../../features/slices/cartSlice";
import CartItem from "./CartItem";

const Cart = ({ setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryPrice = useSelector((state) => state.cart.deliveryPrice);
  const isOrder = useSelector((state) => state.cart.isOrder);
  const [type, setType] = useState(0);

  const dispatch = useDispatch();

  const closePopup = (e) => {
    e.stopPropagation();
    setOpen(false);
    dispatch(clearOrder());
  };

  const deliveryHandler = (price) => {
    delivery_config.forEach((item) => {
      if (item.price === price) {
        setType(item.price);
      }
    });
    dispatch(deliveryInCart(price));
  };

  return (
    <div
      className="h-full w-full bg-black fixed top-0 left-0 flex items-center justify-center"
      onClick={closePopup}
    >
      <div
        className="p-7 bg-white relative  h-full md:h-auto md:max-h-[80%] max-w-[700px] w-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:absolute fixed right-2 top-2" onClick={closePopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {cart.length > 0 ? (
          <div>
            <div className="flex gap-8 flex-col md:flex-row">
              <div className="basis-[50%] md:sticky md:top-0 md:h-1/2">
                <h2 className="text-xl font-semibold">
                  Placing an order 12:00-22:15 (pickup/delivery by 23:00)
                </h2>
                <div className="flex flex-col justify-center items-start">
                  <h3 className="py-4 font-medium">Delivery method:</h3>
                  <div className="w-full">
                    {delivery_config.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`border  mb-3 p-2 ${
                            type === item.price
                              ? "border-black"
                              : "border-blue-gray-200"
                          }`}
                          onClick={() => deliveryHandler(item.price)}
                        >
                          <p className="text-black text-sm">{item.name}</p>
                          <p className="text-gray-600 text-sm">
                            Price:<span className="ml-2">{item.price}$</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="basis-[50%]">
                <h2 className="text-xl font-semibold">Order</h2>
                <div className="flex flex-col justify-center items-start">
                  {cart.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border-b border-blue-gray-600"
                      >
                        <CartItem
                          img={item.img}
                          name={item.name}
                          text={item.text}
                          amount={item.amount}
                          price={item.price}
                          totalPrice={item.totalPrice}
                          item={item}
                        />
                      </div>
                    );
                  })}
                  <div className="pt-5">
                    <p className="text-black text-base  tracking-normal leading-none font-medium pb-3">
                      Delivery price:{" "}
                      <span className="ml-2">{deliveryPrice}$</span>
                    </p>
                    <p className="text-black text-base  tracking-normal leading-none font-medium">
                      Total Price of All Products:{" "}
                      <span className="ml-2">
                        {totalPrice + deliveryPrice}$
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Tooltip content="Order" placement="top">
                <Button
                  className="rounded-full text-black font-extrabold"
                  color="yellow"
                  ripple={true}
                  onClick={() => dispatch(clearCart())}
                >
                  Order
                </Button>
              </Tooltip>
            </div>
          </div>
        ) : !isOrder ? (
          <div className="flex flex-col justify-center items-center h-full">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-10 h-10 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-black text-2xl text-center font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <p className="text-black text-base text-center tracking-normal leading-none ">
                Add some products
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-10 h-10 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="">
              <h1 className="text-black text-2xl text-center font-bold tracking-normal leading-none py-4">
                Order is accepted
              </h1>
              <p className="text-black text-base text-center tracking-normal leading-none ">
                Our manager will contact you soon
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
