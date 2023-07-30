import React from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const CartItem = ({ img, name, text, amount, price, totalPrice, item }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 py-5 gap-4">
      <div>
        <img className="h-[125px] rounded-md" src={img} alt={name}></img>
        <div className="flex flex-col items-start">
          <h4 className="text-black text-base  font-bold tracking-normal leading-none pt-3">
            {name}
          </h4>
        </div>
        <div className="max-w-xs">
          <p className="text-black text-xs  tracking-normal leading-4 pt-2">
            {text}
          </p>
        </div>
      </div>
      <div>
        <p className="text-black text-sm  tracking-normal leading-none pt-2">
          Amount: <span className="ml-2">{amount}</span>
        </p>
        <p className="text-black text-sm  tracking-normal leading-none pt-2">
          Single Item Price: <span className="ml-2">{price}$</span>
        </p>
        <p className="text-black text-sm  tracking-normal leading-none pt-2">
          Total Item Prices: <span className="ml-2">{totalPrice}$</span>
        </p>
        <div className="pt-4">
          <Tooltip content="Remove from the Cart" placement="bottom">
            <Button
              onClick={() => dispatch(removeFromCart(item))}
              size="sm"
              color="red"
              ripple={true}
              variant="filled"
              className="rounded-full"
            >
              Remove
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
