import React from 'react';
import Navbar from '../../components/navbar';
import Agri from '../../assets/Images/agriculture.webp'

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-20 max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold text-center">About AgroLink</h1>
                <div className='grid grid-cols-2 gap-6 pt-10'>
                    <div className='flex justify-center'>
                        <p className=''>AgroLink Market is an online platform that empowers Bangladeshi farmers by allowing them to
                            sell their agricultural products directly to buyers (wholesalers, retailers, or consumers). It aims to
                            eliminate intermediaries and ensure fair pricing. The platform also includes a built-in technical
                            support system where farmers can raise basic product or platform-related issues and get expert
                            assistance.</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src={Agri} className='w-[70%]' alt="AgroLink" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;