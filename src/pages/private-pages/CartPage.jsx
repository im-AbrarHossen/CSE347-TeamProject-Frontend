import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CartPage = () => {
    const { user } = useContext(AuthContext);
    const { cart, setCart, setCartCount } = useCart();
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    // Redirect if not logged in
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const placeOrder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert(`Order placed successfully!\n\nItems Ordered:\n${cart
            .map((item) => `${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`)
            .join("\n")}\n\nTotal: $${total.toFixed(2)}`);

        setCart([]);
        setCartCount(0);
    };

    if (!user) return null;

    return (
        <div>
            <Navbar></Navbar>
            <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
                <h1 className="text-3xl font-bold mb-6 mt-[100px] text-center">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">No items in your cart.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item._id}
                                className={`flex justify-between items-center p-4 rounded-lg shadow ${theme === "dark" ? "bg-gray-800" : "bg-white"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                    <div>
                                        <h2 className="font-semibold text-lg">{item.name}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">
                                            Unit: {item.unit || "kg"}
                                        </p>
                                        <p className="text-sm text-green-600 font-bold">
                                            ${parseFloat(item.price).toFixed(2)} x {item.quantity} = ${(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className={`flex justify-between font-bold text-xl mt-4 p-4 rounded-lg shadow ${theme === "dark" ? "bg-gray-800" : "bg-white"
                            }`}>
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={placeOrder}
                            className="w-full mt-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Place Order
                        </button>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CartPage;
