import React, { useContext, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../providers/ThemeProvider';
import Logo from '../assets/Images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={Logo} className="h-8" alt="Logo" />
                    <span className="text-2xl font-bold text-[#7aad37]">AgroLink</span>
                </Link>

                <div className="flex items-center gap-2 md:order-2">
                    <button onClick={toggleTheme} className="rounded-full bg-transparent p-[6px]">
                        {theme === "dark" ? (
                            <FaSun className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <FaMoon className="h-5 w-5 text-[#7aad37]" />
                        )}
                    </button>

                    <button className="text-white bg-[#7aad37] hover:bg-[#a0d167] btn rounded-lg">
                        Get started
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                            <path stroke="#7aad37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`${isOpen ? "block" : "hidden"} md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 dark:bg-gray-800 rounded-lg md:bg-white md:dark:bg-gray-900 border md:border-0 border-gray-100 dark:border-gray-700">
                        {["/", "/about", "/marketplace", "/help-and-support"].map((path, i) => {
                            const name = ["Home", "About", "Marketplace", "Help & Support"][i];
                            return (
                                <li key={i}>
                                    <NavLink to={path} className={({ isActive }) =>
                                        `block py-2 px-3 rounded-sm ${isActive ? "text-[#7aad37] md:p-0" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7aad37] md:p-0 dark:text-white"}`
                                    }>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;