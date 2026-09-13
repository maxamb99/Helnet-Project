import React, { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }

    fetchAPI();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.brand?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="px-10 py-20 md:px-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p> THE COLLECTION</p>

            <h1 className="text-4xl font-semibold md:text-5xl">
              Pieces worth keeping
            </h1>
          </div>

          <div className="md:w-80">
            <p className="text-gray-500 ">
              Everyday objects and wardrobe staples, chosen with care.
            </p>
          </div>
        </div>

        <div className="mt-12 flex max-w-2xl items-center border border-gray-300 px-5 py-4">
          <input
            type="text"
            placeholder="Search by product..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full mx-10 outline-none"
          />
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-80 rounded-lg bg-white p-6 shadow-md"
            >
              <div>
                <button className="rounded px-2 py-2 bg-black text-white ">
                  NEW
                </button>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto mb-4 h-40 w-40 object-contain"
                />
              </div>

              <h2 className="mb-2 text-xl font-bold">{product.title}</h2>

              <h3 className="mb-2 text-lg font-semibold">
                Brand: {product.brand}
              </h3>

              <p className="mb-2 text-gray-600">Category: {product.category}</p>

              <p className="mb-2 text-gray-600">Price: ${product.price}</p>

              <p className="mb-4 text-gray-600">Rating: {product.rating}</p>

              <button className="rounded bg-black px-4 py-2 text-white">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
