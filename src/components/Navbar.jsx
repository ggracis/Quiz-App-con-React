import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-gray-900 py-5 flex justify-center">
      <Link to="/">
        <img
          src="/src/assets/logo@2040x480.png"
          alt="CAME Brasil"
          className="w-60"
        />
      </Link>
    </header>
  );
};
