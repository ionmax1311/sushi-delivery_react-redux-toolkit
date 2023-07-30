import React from "react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductItem = ({ id, name, price, text, img, totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-[300px] ">
      <div>
        <img className="max-w-[300px] mx-auto h-[300px]" src={img} alt="" />
      </div>
      <div className="text-white font-bold text-center mt-6 text-2xl">
        <h4>
          {name} - <span>{price}$</span>
        </h4>
      </div>
      <p className="text-white text-sm text-center mt-6 mb-6">{text}</p>
      <div className="text-center">
        <Button
          className="rounded-full text-black font-extrabold"
          color="yellow"
          ripple={true}
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                name: name,
                img: img,
                text: text,
                price: price,
                amount: 1,
              })
            )
          }
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
