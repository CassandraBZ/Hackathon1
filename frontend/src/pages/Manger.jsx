import React from "react";
import { useNavigate } from "react-router-dom";
import eucalyptus from "../assets/img/eucalyptus 1.svg";

function Manger() {
//   const navigate = useNavigate();

// //   const handleClick = (e) => {
// //     if (e.target.value === "feu") {
// //       navigate("/MangerFeu");
// //     }
// //     if (e.target.value === "feuille") {
// //       navigate("/MangerFeuille");
// //     }
// //   };
  return (
    <>
      <div className="flex flex-col items-start justify-around w-full">
        <img
          src={eucalyptus}
          alt="eucalyptus"
          className="fixed right-0 top-0"
        />
        <p className="py-5 font-cursive text-brown text-4xl"> HUUU BERT </p>
        <h1 className="py-10 text-xl font-semibold">MANGER ? Manger.</h1>
      </div>
      <div className="flex flex-col justify-between text-xl font-semibold h-2/5 my-10">
        <button
          type="button"
          className="bg-white py-14 rounded-xl mb-10"
          value="feu"
        //   onClick={handleClick}
        >
          Manger feu ?
        </button>
        <button
          type="button"
          className="bg-white p-14 rounded-xl"
          value="feuille"
        //   onClick={handleClick}
        >
          Manger feuille ?
        </button>
      </div>
    </>
  );
}

export default Manger;