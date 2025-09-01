import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/Images/agri-bg.gif';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div
                className="relative mt-[65px] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center h-[500px]"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-3xl font-bold py-10">Welcome to AgroLink</h1>
                    <p className="text-xl font-semibold pb-10 max-w-2xl mx-auto">
                        An online marketplace that empowers farmers to sell directly to buyers,
                        ensuring fair pricing and access to technical support.
                    </p>
                    <div className='flex items-center justify-center'>
                        <Link to="/login">
                            <button className="btn bg-[#7aad37] text-white rounded-lg shadow-lg hover:bg-[#a0d167]">
                                Get started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
