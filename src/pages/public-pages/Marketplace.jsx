import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import Footer from "../../components/Footer";

const categories = ["All", "Fertilizer", "Waste"];

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { cartCount, addToCart } = useCart();

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url =
          selectedCategory === "All"
            ? "https://team-project-bakend.vercel.app/products"
            : `https://team-project-bakend.vercel.app/products/category/${selectedCategory}`;
        const res = await axios.get(url);

        const sorted = [...res.data].sort((a, b) =>
          sortOrder === "asc"
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price)
        );

        setProducts(sorted);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory, sortOrder]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar cartCount={cartCount} />

      {/* Hero Section */}
      <div className="bg-[#7aad37] text-white py-16 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-4">
          AgroLink Marketplace
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-2xl mx-auto">
          Explore organic fertilizers and compost waste to grow your farm
          efficiently.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[#7aad37] font-semibold rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4 dark:bg-gray-800 bg-gray-100 p-4 rounded-lg shadow-md flex-shrink-0">
          <h2 className="font-semibold text-black dark:text-white text-xl mb-4">
            Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer p-2 rounded hover:bg-[#a0d167] ${
                  selectedCategory === cat
                    ? "bg-[#7aad37] font-bold text-black dark:text-white"
                    : "text-black dark:text-white"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="font-semibold text-xl mb-2 text-black dark:text-white">
              Sort by Price
            </h2>
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
          {loading ? (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              Loading products...
            </p>
          ) : products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={product._id || index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-black dark:text-white">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-green-600 font-bold">
                    ${parseFloat(product.price).toFixed(2)} / {product.unit || "kg"}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 col-span-full text-center mt-10">
              No products found in this category.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Marketplace;
