import React from "react";
import { Button } from "@material-tailwind/react";
import { buttons_config } from "../NavigateButtons/config";

const NavigateButtons = ({ productHandler, type }) => (
  <div className="flex items-center justify-center py-8 gap-x-6">
    {buttons_config.map((button, index) => {
      return (
        <div className="" key={index}>
          <Button
            className={`rounded-full font-extrabold ${
              type === button ? "text-black" : "text-white"
            }`}
            color="yellow"
            ripple={true}
            variant={type !== button ? "outlined" : "filled"}
            onClick={() => productHandler(button)}
          >
            {button}
          </Button>
        </div>
      );
    })}
  </div>
);

export default NavigateButtons;
