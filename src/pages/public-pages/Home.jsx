import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/Images/agri-bg.gif';
import { AuthContext } from '../../providers/AuthProvider';
import AgriImg1 from '../../assets/Images/agri1.webp';
import AgriImg2 from '../../assets/Images/agri2.webp';
import AgriImg3 from '../../assets/Images/agri3.webp';
import Footer from '../../components/Footer';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      navigate("/marketplace");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      {/* Section 1: Hero Banner */}
      <section
        className="relative mt-[65px] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center min-h-[400px] md:h-[500px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-6">Welcome to AgroLink</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium pb-8 max-w-2xl mx-auto">
            An online marketplace that empowers farmers to sell directly to buyers,
            ensuring fair pricing and access to technical support.
          </p>
          <button
            onClick={handleClick}
            className="btn bg-[#7aad37] text-white rounded-lg shadow-lg hover:bg-[#a0d167] px-6 py-2 text-base sm:text-lg"
          >
            Get started
          </button>
        </div>
      </section>

      {/* Section 2: How it Works */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Register", desc: "Sign up and create your profile to start selling or buying products." },
            { title: "List Products", desc: "Farmers can list their products with photos, descriptions, and prices." },
            { title: "Sell & Support", desc: "Buyers purchase directly while farmers get technical assistance anytime." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="font-semibold mb-3 sm:mb-4 text-lg">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Featured Products */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Featured Products</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {[AgriImg1, AgriImg2, AgriImg3].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Product ${idx + 1}`}
              className="w-4/5 sm:w-3/4 md:w-1/3 mx-auto rounded-lg shadow-md"
            />
          ))}
        </div>
      </section>

      {/* Section 4: Marketplace Benefits */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Marketplace Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "Fair Pricing", desc: "Farmers get the best prices without intermediaries." },
            { title: "Technical Support", desc: "Get expert guidance on product and platform issues." },
            { title: "Community Growth", desc: "Support local communities and promote sustainable agriculture." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 text-center border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3 sm:mb-4 text-lg">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Farmers’ Stories */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Farmers' Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { text: "AgroLink helped me sell my crops directly and earn more than before!", name: "- Rahim, Farmer" },
            { text: "I now receive support whenever I need guidance for my products.", name: "- Fatima, Farmer" },
            { text: "The marketplace connects me with buyers easily and efficiently.", name: "- Karim, Farmer" }
          ].map((story, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-sm sm:text-base">"{story.text}"</p>
              <p className="font-semibold mt-2 text-sm sm:text-base">{story.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Tech Support */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">Technical Support</h2>
        <p className="text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          Farmers can raise product or platform-related issues and receive expert guidance for smooth operations.
        </p>
      </section>

      {/* Section 7: How to Join */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">How to Join</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
          <Link to="/register" className="btn bg-[#7aad37] text-white rounded-lg shadow-lg hover:bg-[#a0d167] px-6 py-2 text-base sm:text-lg">
            Sign Up
          </Link>
          <Link to="/login" className="btn bg-white dark:bg-gray-800 text-[#7aad37] rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-2 text-base sm:text-lg">
            Login
          </Link>
        </div>
      </section>

      {/* Section 8: Community & Sustainability */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">Community & Sustainability</h2>
        <p className="text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          AgroLink promotes eco-friendly farming, supports local communities, and encourages sustainable agricultural practices.
        </p>
      </section>

      {/* Section 9: Call to Action */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-green-50 dark:bg-green-900 rounded-xl mt-10 sm:mt-16 mb-10 sm:mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Selling or Buying?</h2>
        <button
          onClick={handleClick}
          className="btn bg-[#7aad37] text-white rounded-lg shadow-lg hover:bg-[#a0d167] px-6 py-2 text-base sm:text-lg"
        >
          Get Started Now
        </button>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;