import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../components/Footer";


const Register = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Save user to MongoDB
    const saveUserToDB = (user) => {
        const userInfo = {
            name: user.displayName || "No Name",
            email: user.email,
        };

        fetch("https://team-project-bakend.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("User saved/exists:", data);
            })
            .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }
        setPasswordError("");

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        const updatedUser = {
                            ...user,
                            displayName: name,
                        };
                        saveUserToDB(updatedUser);
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully Registered',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                            .then(() => {
                                navigate(location?.state ? location.state : "/");
                            });
                    })
                    .catch((err) => {
                        toast.error(err);
                    });
            })
            .catch((error) => {
                toast.error(error.code);
                toast.error(error.message);
            })
    };


    return (
        <div>
            <Navbar></Navbar>
            <main className="py-10 grid place-items-center pt-[100px] dark:bg-gray-800 bg-white">
                <div className="shrink-0 shadow-2xl rounded-xl border">
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-5">
                            <h1 className="text-center text-[35px] font-[600] text-[#403F3F] dark:text-white">Register your account</h1>
                        </div>
                        <hr />
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] dark:text-white text-[#403F3F]">Your Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full dark:bg-gray-700 bg-gray-200 text-black dark:text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] dark:text-white text-[#403F3F]">Email address</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered dark:bg-gray-700 bg-gray-200 text-black dark:text-white w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] dark:text-white text-[#403F3F]">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full dark:bg-gray-700 bg-gray-200 text-black dark:text-white"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <FaEyeSlash></FaEyeSlash>
                                    ) : (
                                        <FaEye></FaEye>
                                    )}
                                </button>
                            </div>
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <label className="label justify-end gap-3 flex-row-reverse cursor-pointer">
                                <span className="label-text dark:text-white text-[#403F3F]">Accept Term & Conditions</span>
                                <input name="check" type="checkbox" className="checkbox dark:bg-gray-700 bg-gray-300 text-[#7aad37]" required />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#7aad37] hover:bg-[#a0d167] text-white w-full">Register</button>
                        </div>
                        <div className="mt-5">
                            <p className="text-center text-[16px] font-[600] text-[#706F6F]">Already Have An Account ? <Link to="/login" className="text-[#7aad37]">Login</Link> </p>
                        </div>
                    </form>
                </div>
            </main>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;