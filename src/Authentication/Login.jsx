import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import Footer from "../components/Footer";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const location = useLocation();

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

    const loginGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUserToDB(user);
                navigate(location?.state ? location.state : "/");
                toast.success("Logged in with Google!", { position: "top-center" });
            })
            .catch(() => {
                toast.error("Google Sign-In failed. Please try again.", {
                    position: "top-center",
                });
            });
    };

    const navigate = useNavigate();
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUserToDB(user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Logged in',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                    .then(() => {
                        navigate(location?.state ? location.state : "/");
                    });
            })
            .catch((error) => {
                toast.error(
                    error.code === "auth/user-not-found"
                        ? "User not found. Please check your credentials."
                        : "Something went wrong. Please try again.",
                    { position: "top-center" }
                );
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <main className="py-10 grid place-items-center pt-[100px] dark:bg-gray-800 bg-white">
                <ToastContainer></ToastContainer>
                <div className="shrink-0 shadow-2xl rounded-xl border">
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-5">
                            <h1 className="text-center text-[35px] font-[600] text-[#403F3F] dark:text-white">Login your account</h1>
                        </div>
                        <hr />
                        <div className="form-control mt-5">
                            <button
                                type="button"
                                className="btn bg-[#7aad37] hover:bg-[#a0d167] text-white flex items-center justify-center w-full"
                                onClick={loginGoogle}
                            >
                                <div className="bg-white p-1">
                                    <FcGoogle></FcGoogle>
                                </div>
                                Login with Google
                            </button>
                        </div>

                        <div className="text-center dark:text-white text-black mt-5">
                            <p>OR</p>
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text text-[20px] font-[600] dark:text-white text-[#403F3F]">Email address</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered dark:bg-gray-700 bg-gray-200 text-black dark:text-white" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                                    value={password} onChange={(e) => setPassword(e.target.value)}
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#7aad37] hover:bg-[#a0d167] text-white w-full">Login</button>
                        </div>
                        <div className="mt-5">
                            <p className="text-center text-[16px] font-[600] text-[#706F6F]">Dont't Have An Account ? <Link to="/register" className="text-[#7aad37]">Register</Link> </p>
                        </div>
                    </form>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Login;