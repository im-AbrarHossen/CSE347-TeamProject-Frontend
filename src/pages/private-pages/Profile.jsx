import { useState, useEffect, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import ProfileUpdate from "../../components/ProfileUpdate";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SellerProductForm from "../../components/SellerProductForm";

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState("user");

    const navigate = useNavigate();

    // Ensure context has fresh user data on mount
    useEffect(() => {
        const fetchUser = async () => {
            const auth = getAuth();
            if (auth.currentUser) {
                await auth.currentUser.reload();
                setUser(auth.currentUser);
            }
        };
        fetchUser();
    }, [setUser]);


    useEffect(() => {
        if (user?.email) {
            axios.get(`https://team-project-bakend.vercel.app/users/role/${user.email}`)
                .then(res => setRole(res.data.role));
        }
    }, [user]);

    const becomeSeller = () => {
        axios.patch(`https://team-project-bakend.vercel.app/users/seller/${user.email}`)
            .then(() => setRole("seller"));
    };





    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            setUser(null); // clear context
            navigate("/"); // redirect to home page
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 sm:p-10">
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 mt-[100px]">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-28 h-28 rounded-full border-4 border-green-500 object-cover"
                        />
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-bold">{user?.displayName || "User"}</h2>
                            <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center flex justify-center gap-4">
                        <button
                            onClick={() => setOpen(true)}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Update Profile
                        </button>

                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {open && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-lg relative shadow-lg">
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                            >
                                ✖
                            </button>
                            <ProfileUpdate closeModal={() => setOpen(false)} />
                        </div>
                    </div>
                )}


                <div className="text-center flex flex-col items-center justify-center mt-10">
                    {role === "user" && (
                        <button onClick={becomeSeller} className="btn btn-primary">
                            Become a Seller
                        </button>
                    )}

                    {role === "seller" && <p>✅ You are a Seller now!</p>}
                    {role === "seller" && (
                        <div className="mt-10">
                            <SellerProductForm />
                        </div>
                    )}
                    {role === "admin" && <p>👑 Admin Dashboard Access</p>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;
