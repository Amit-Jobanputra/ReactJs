import React from "react";
import "./Amit.css"; // Ensure this file does not override Tailwind styles
import { About } from "./Abount";

function Amit() {
  return (
    <>
      
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          <h2 className="text-xl font-bold">Amit Jobanputra</h2>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-red-500 transition duration-300" href="#Home">Home</a>
            </li>
            <li>
              <a className="text-white hover:text-red-500 transition duration-300 " href="#About">About</a>
            </li>
            <li>
              <a className="text-white hover:text-red-500 transition duration-300" href="#">Service</a>
            </li>
            <li>
              <a className="text-white hover:text-red-500 transition duration-300" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Amit;
