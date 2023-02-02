import React from "react";
import Pizzeria from "../assets/img/Pizzeria.png";
import back from "../assets/img/chevron-left.png";

function Resto() {
  return (
    <div className="flex flex-col items-start justify-around w-full p-auto">
      <div className="w-full">
        <button
          type="button"
          className="fixed z-10 top-8 left-8 h-[30px] w-[30px] rounded-full bg-white m-0 flex items-center justify-center"
        >
          <img src={back} alt="go back" />
        </button>
        <img
          src={Pizzeria}
          alt="Restaurant"
          className="max-h-[60%] w-full"
        />
      </div>
    </div>
  );
}

export default Resto;
