import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const SellerProductForm = () => {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    unit: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("https://team-project-bakend.vercel.app/products", {
        ...form,
        email: user?.email, // seller email
      });

      setMessage(res.data.message);
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        unit: "",
        image: ""
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
        <input
          type="text"
          name="unit"
          placeholder="Unit (kg, piece, litre...)"
          value={form.unit}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default SellerProductForm;