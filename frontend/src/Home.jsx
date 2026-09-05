import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <nav className="flex gap-5">
      <Link to="/about" className="hover:text-blue-500">
        Home
      </Link>

      <Link to="/about" className="hover:text-blue-500">
        Shop
      </Link>

      <Link to="/about" className="hover:text-blue-500">
        About
      </Link>
    </nav>
  );
}
