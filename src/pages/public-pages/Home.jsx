import React from 'react';
import Navbar from '../../components/navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-20 text-center">
                <h1 className="text-3xl font-bold">Welcome to AgroLink</h1>
                <p>This is some content under the navbar.</p>
            </div>
        </div>
    );
};

export default Home;