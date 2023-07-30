import React, { useState } from "react";
import { filterProducts } from "../../features/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import { buttons_config } from "../NavigateButtons/config";
import ProductItem from "./ProductItem";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  const [type, setType] = useState("Sets");
  const dispatch = useDispatch();
  const productHandler = (button) => {
    buttons_config.forEach((val, index) => {
      if (val === button) {
        setType(val);
      }
    });

    dispatch(filterProducts(button));
  };

  return (
    <div>
      <div className="container mx-auto pt-24">
        <h2 className="text-white font-semibold text-[35px] text-center mb-4">
          Menu
          <span className="w-[40px] h-[3px] bg-white block mx-auto"></span>
        </h2>

        <NavigateButtons productHandler={productHandler} type={type} />

        <div className="text-white grid grid-cols-1 justify-items-center py-6 gap-x-12 gap-y-16 lg:grid-cols-3">
          {products
            .slice(0, 9)
            .filter((product) => product.type === type)
            .map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                text={item.text}
                img={item.img}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
