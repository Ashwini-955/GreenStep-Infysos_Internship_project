import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-green-50 px-5 sm:px-10 py-12 pt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          Welcome to GreenStep 🌱
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Track your personal carbon footprint and take meaningful steps
          toward a sustainable future.
        </p>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Link to="/calculate" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-600">
              Calculate Footprint
            </h2>
            <p className="text-gray-600 mt-2">
              Input your daily activities to measure your CO₂ emissions.
            </p>
          </Link>

          <Link to="/history" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-600">
              View History
            </h2>
            <p className="text-gray-600 mt-2">
              Review your past calculations and track your progress over time.
            </p>
          </Link>
          
          <Link to="/about" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-green-600">
              Learn More
            </h2>
            <p className="text-gray-600 mt-2">
              Understand the importance of carbon footprint and how to reduce it.
            </p>
          </Link>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="px-5 sm:px-10 py-14 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          GreenStep is a personal sustainability platform designed to help
          individuals understand, track, and reduce their carbon footprint.
          We believe awareness is the first step toward climate action.
        </p>
      </section>

      {/* ================= WHY CARBON FOOTPRINT ================= */}
      <section className="px-5 sm:px-10 py-14 bg-green-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
          Why Carbon Footprint Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-gray-700 leading-relaxed">
            Carbon footprint represents the total greenhouse gases emitted
            by our daily activities like transportation, food consumption,
            and energy usage.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By tracking emissions, individuals can make smarter choices,
            reduce environmental impact, and contribute to a healthier planet.
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-5 sm:px-10 py-14 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-4xl">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Is GreenStep free?
            </h3>
            <p className="text-gray-600 mt-1">
              Yes, GreenStep is completely free for personal use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              How accurate are the calculations?
            </h3>
            <p className="text-gray-600 mt-1">
              Calculations are based on standard emission factors and provide
              a close estimate of your footprint.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Can I track my progress over time?
            </h3>
            <p className="text-gray-600 mt-1">
              Yes, your history is saved securely and can be viewed anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-green-700 text-white px-5 sm:px-10 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} GreenStep. Built for a greener future 🌍
        </p>
      </footer>
    </>
  );
}
