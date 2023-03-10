import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className=" z-50  w-full flex bg-navbar items-center justify-between">
      <div className="container  px-4 mx-auto flex  flex-wrap items-center justify-between">
        <div className="relative w-full md:w-0 flex justify-between">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            <p className="p-2 md:w-1/2 font-cursive text-white text-4xl whitespace-nowrap ">
              {" "}
              HUUU BERT
            </p>
          </a>
          <button
            className="text-white  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />{" "}
          </button>
        </div>
        <div
          className={`flex flex-grow justify-between items-center${
            navbarOpen
              ? "z-50 bottom-0 h-screen top-20  w-full flex flex-col  items-center md:flex-row md:justify-end text-xl "
              : "relative md:mr-6 hidden md:align-middle md:items-center md:flex md:flex-row md:justify-end text-xl"
          }`}
          id="example-navbar-danger"
        >
          <ul className="flex flex-col  md:flex-row list-none md:ml-auto">
            <li className="nav-item">
              <a
                className="text-brown px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug md:text-white hover:animate-wiggle font-cursive"
                href="/personnages"
              >
                <span className="mt-10 md:mt-0">Toi</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-brown px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug  md:text-white hover:animate-wiggle font-cursive"
                href="/manger"
              >
                <span className="mt-10 md:mt-0">Manger quoi ?</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-brown px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug  md:text-white hover:animate-wiggle font-cursive"
                href="/panier"
              >
                <span className="mt-10 md:mt-0">Sac de manger</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="text-brown px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug  md:text-white hover:animate-wiggle font-cursive"
                href="/commentaires"
              >
                <span className="mt-10 md:mt-0">Bon ? Pas Bon ?</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
