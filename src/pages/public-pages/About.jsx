import React from 'react';
import Navbar from '../../components/Navbar';
import Agri from '../../assets/Images/agriculture.webp';
import MissionImg from '../../assets/Images/mission.webp';
import VisionImg from '../../assets/Images/vision.webp';
import TechSupportImg from '../../assets/Images/tech-support.webp';
import CommunityImg from '../../assets/Images/community.webp';
import SustainabilityImg from '../../assets/Images/sustainability.webp';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">About AgroLink</h1>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <p className="md:w-1/2 text-lg leading-relaxed">
            AgroLink Market is an online platform that empowers Bangladeshi farmers by allowing them to
            sell their agricultural products directly to buyers (wholesalers, retailers, or consumers). It aims
            to eliminate intermediaries and ensure fair pricing. The platform also includes a built-in technical
            support system where farmers can raise basic product or platform-related issues and get expert
            assistance.
          </p>
          <img src={Agri} className="md:w-1/2 w-3/4 mx-auto rounded-lg shadow-lg" alt="AgroLink" />
        </div>
      </section>

      {/* Section 1: Mission */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={MissionImg} className="md:w-1/2 w-3/4 mx-auto rounded-lg shadow-md" alt="Mission" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to empower farmers by providing them with a transparent, reliable, and efficient
              marketplace that ensures fair prices and reduces exploitation by middlemen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Vision */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 mt-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={VisionImg} className="md:w-1/2 w-3/4 mx-auto rounded-lg shadow-md" alt="Vision" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To become the leading platform in Bangladesh connecting farmers directly with buyers, promoting
              sustainable agriculture, and improving the overall livelihood of the agricultural community.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Support */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={TechSupportImg} className="md:w-1/2 w-3/4 mx-auto rounded-lg shadow-md" alt="Tech Support" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Technical Support</h2>
            <p className="text-lg leading-relaxed">
              Farmers can easily raise issues regarding their products or the platform. Our experts provide
              quick guidance and solutions to ensure smooth operations and better user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Community Impact */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 mt-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={CommunityImg} className="md:w-1/2 w-3/4 mx-auto rounded-lg shadow-md" alt="Community" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Community Impact</h2>
            <p className="text-lg leading-relaxed">
              AgroLink strengthens rural communities by supporting local farmers, creating employment opportunities,
              and promoting social and economic development in Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Sustainability */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-16 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={SustainabilityImg} className="md:w-1/2 w-3/4 mx-auto rounded-lg shadow-md" alt="Sustainability" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Sustainability</h2>
            <p className="text-lg leading-relaxed">
              We promote sustainable farming practices by educating farmers about eco-friendly methods,
              proper resource management, and reducing environmental impact while maximizing productivity.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
