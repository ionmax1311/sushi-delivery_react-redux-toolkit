import React, { useState } from "react";
import { storeData } from "../../assets/data/data";
import { Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart/Cart";
import { addToCart } from "../../features/slices/cartSlice";

const Hero = () => {
  const { id, img, name, text, price } = storeData[9];
  const priceDiscount = Math.round((storeData[9].price / 100) * 70);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="fixed right-10 top-10 cursor-pointer z-10"
        onClick={handleOpen}
      >
        <div color="white" className="rounded-full bg-white w-14 h-14 relative">
          <span className="rounded-full text-center text-white h-5 w-5 font-inter text-sm bg-red-800 absolute right-0">
            {totalAmount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000"
            className="w-6 h-6 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
      </div>

      <div className="container mx-auto pt-24">
        <h1 className="text-white font-semibold text-[35px] text-center mb-10">
          Set of the day🔥
          <span className="w-[40px] h-[3px] bg-white block mx-auto"></span>
        </h1>

        <div className="max-w-[300px] mx-auto">
          <div>
            <img className="w-[300px] mx-auto" src={img} alt="" />
          </div>
          <div className="text-white font-bold text-center mt-6 text-2xl">
            <h4>
              {name} -{" "}
              <span className="text-yellow-600">{priceDiscount}$ </span>
              <span className="line-through">{price}$</span>
            </h4>
          </div>
          <p className="text-white text-sm text-center mt-6 mb-6">{text}</p>
          <div className="text-center">
            <Button
              className="rounded-full text-black font-extrabold"
              color="white"
              ripple={true}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    name: name,
                    img: img,
                    text: text,
                    price: priceDiscount,
                    amount: 1,
                  })
                )
              }
            >
              Add To Cart
            </Button>
          </div>
        </div>
        <div className="rounded-xl bg-yellow-600 mt-10 text-center p-4 max-w-[1190px] mx-auto">
          <h4>When ordering more than 3 sets</h4>
          <p className="font-bold text-2xl">Free delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
