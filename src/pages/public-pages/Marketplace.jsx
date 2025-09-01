import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const categories = ["All", "Fertilizer", "Waste"];

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          selectedCategory === "All"
            ? "http://localhost:5000/products"
            : `http://localhost:5000/products/category/${selectedCategory}`;
        const res = await axios.get(url);
        setProducts(
          res.data.sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
          )
        );
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [selectedCategory, sortOrder]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#7aad37] text-white py-16 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-4">
          AgroLink Marketplace
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-2xl mx-auto">
          Explore organic fertilizers and compost waste to grow your farm efficiently.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4 dark:bg-gray-800 bg-gray-100 p-4 rounded-lg shadow-md flex-shrink-0">
          <h2 className="font-semibold text-black dark:text-white text-xl mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer p-2 rounded hover:bg-[#a0d167] ${
                  selectedCategory === cat ? "bg-[#7aad37] font-bold text-black dark:text-white" : "text-black dark:text-white"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

          {/* Price Sort */}
          <div className="mt-6">
            <h2 className="font-semibold text-xl mb-2 text-black dark:text-white">Sort by Price</h2>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full p-2 border rounded text-black dark:text-white dark:bg-gray-800 bg-gray-100"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <p className="mt-2 text-green-600 font-bold">${product.price}</p>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-10">
              No products found in this category.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm sm:text-base">
        <p>© 2025 AgroMarketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;