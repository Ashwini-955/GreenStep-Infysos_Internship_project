import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Calculate() {
  const [form, setForm] = useState({
    transportMode: "",
    dietType: "",
    energyUsage: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://greenstep-106r.onrender.com/api/survey",
        {
          transportMode: form.transportMode,
          dietType: form.dietType,
          energyUsage: Number(form.energyUsage),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(res.data);
    } catch (err) {
      alert("Calculation failed. Please login again.");
    } finally {
      setLoading(false);
    }
  };
  const getSuggestion = (total) => {
    if (total < 3) {
      return {
        text: "🌱 Excellent! Your carbon footprint is very low. Keep up the eco-friendly habits!",
        color: "text-green-700",
      };
    } else if (total < 6) {
      return {
        text: "🙂 Good job! You’re doing well, but small changes can reduce emissions further.",
        color: "text-yellow-600",
      };
    } else {
      return {
        text: "⚠️ Your footprint is high. Consider public transport, saving electricity, and reducing meat intake.",
        color: "text-red-600",
      };
    }
  };

  return (
    <>
      <Navbar />

      {/* CENTERED PAGE */}
      <div className="min-h-[calc(100vh-64px)] flex justify-center px-4 bg-green-50 py-10 pt-24">
        <div className="w-full max-w-xl">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
            Calculate Your Carbon Footprint 🌱
          </h1>

          {/* FORM */}
          <form
            onSubmit={handleCalculate}
            className="bg-white p-6 rounded-xl shadow mb-6"
          >
            {/* Transport */}
            <label className="block mb-2 font-medium">Transport Mode</label>
            <select
              name="transportMode"
              required
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="car">Personal 4-wheeler (car,tempo,truck)</option>
              <option value="bike">Personal 2-wheeler (Bike,Scooter)</option>
              <option value="public">
                Public Transport (Bus,Train,Aeroplane)
              </option>
              <option value="none">No Transport Used</option>
            </select>

            {/* Diet */}
            <label className="block mb-2 font-medium">Diet Type</label>
            <select
              name="dietType"
              required
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
            </select>

            {/* Energy */}
            <label className="block mb-2 font-medium">
              Today's Energy Usage (units)
            </label>
            <input
              type="number"
              name="energyUsage"
              required
              onChange={handleChange}
              className="w-full mb-6 p-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {loading ? "Calculating..." : "Calculate"}
            </button>
          </form>

          {/* RESULT */}
          {/* RESULT */}
          {result && (
            <div className="bg-white p-6 rounded-xl shadow mt-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
                Your Carbon Footprint Result
              </h2>

              <ul className="space-y-2 text-gray-700 text-center">
                <li>🚗 Transport: {result.transportEmission} kg CO₂</li>
                <li>🍽 Food: {result.foodEmission} kg CO₂</li>
                <li>⚡ Energy: {result.energyEmission} kg CO₂</li>
                <li className="font-semibold text-lg">
                  🌍 Total: {result.totalEmission} kg CO₂
                </li>
              </ul>

              {/* SUGGESTION */}
              <p
                className={`mt-5 text-center font-medium ${
                  getSuggestion(result.totalEmission).color
                }`}
              >
                {getSuggestion(result.totalEmission).text}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
