import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../assets/icons/chevron-left.svg";

function MangerFeuille() {
  // faire le fetch ici en filtrant sur feu
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/manger");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}restaurants`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-start justify-around w-full p-auto px-7 bg-bg-sable">
      <div className="flex flex-row w-full justify-evenly items-center">
        <button
          type="button"
          className="bg-white rounded-full h-[30px] w-[30px] flex items-center justify-center"
          onClick={handleClick}
        >
          <img src={back} alt="go back" />
        </button>

        <h1 className="py-5 font-sans font-semibold text-xl">
          MANGER ? Manger feuille ! 🌿
        </h1>
      </div>

      <div className="flex flex-col justify-evenly p-auto m-auto">
        {data
          .filter(
            (feu) =>
              feu.cuisine === "Pokébowl" ||
              feu.cuisine === "Sushi" ||
              feu.cuisine === "Bar à fruits"
          )
          .map((restaurant) => (
            <div
              className="bg-white rounded-xl p-auto my-4"
              key={restaurant.id}
            >
              <img
                className="aspect-video
                rounded-t-xl "
                src={restaurant.url}
                alt="Affiche restaurant"
              />
              <div className="flex justify-between font-sans font-semibold p-3">
                <h2 className="text-base">{restaurant.restaurant_name}</h2>
                <p className="text-xl">{restaurant.rating}/5</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MangerFeuille;
