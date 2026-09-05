
import {Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

export default function App() {
  return (
    <div>
      <h1 className="bg-red-500">Hello Test Test </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Home />
      <Shop />
      <About />
    </div>
  );
}
