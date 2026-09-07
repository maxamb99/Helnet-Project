import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#22231f]">
      <header className="border-b border-gray-300">
        <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#263c32] text-xl font-bold text-white">
              N
            </div>

            <span className="text-xl font-semibold ]">NORDLY</span>
          </NavLink>

          <div className="flex items-center gap-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border-b pb-2 ${
                  isActive
                    ? "border-black"
                    : "border-transparent hover:border-gray-400"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `border-b pb-2 ${
                  isActive
                    ? "border-black"
                    : "border-transparent hover:border-gray-400"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `border-b pb-2 ${
                  isActive
                    ? "border-black"
                    : "border-transparent hover:border-gray-400"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
