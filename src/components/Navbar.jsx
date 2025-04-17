import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="bg-gray-900 py-5 flex space-x-4 items-center justify-between px-10">
        <Link to="/">
          <img src="/logo@2040x480.png" alt="CAME Brasil" className="w-60" />
        </Link>
        <a
          href="https://br.came.ar/"
          className="float-right"
          rel="noopener noreferrer"
        >
          <h1 className="text-white text-md font-bold ml-4">Catálogo</h1>
        </a>
      </header>
    </>
  );
};
