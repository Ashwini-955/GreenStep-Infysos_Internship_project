import { Link } from "react-router-dom";
import bgImage from "../assets/bg.webp";

export default function Landing() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      {/* App Name – Top Left */}
      <div className="absolute top-6 left-6">
        <span className="text-2xl font-extrabold text-green-900 ">
          GreenStep
        </span>
      </div>
      <div className="absolute inset-0 bg-green-900/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6">
        <h1 className="text-6xl font-extrabold mb-6">
          Welcome to  <span className="text-green-900">GreenStep</span>
        </h1>

        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-white-800 max-w-2xl mb-10">
          Free Personal CO₂ Footprint Tracker
          <br />
          Measure your impact. Reduce your emissions. Walk greener.
        </p>

        <div className="flex gap-4">
          <Link to="/login" className="px-8 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700">
            Login
          </Link>
          <Link to="/register" className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-green-800">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
