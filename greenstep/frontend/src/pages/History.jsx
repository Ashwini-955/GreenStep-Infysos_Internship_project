import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function History() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8091/api/carbon/my-history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setLogs(res.data);
      } catch (err) {
        alert("Failed to load history. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <>
      <Navbar />

      {/* DESKTOP TABLE */}
<div className="hidden md:block overflow-x-auto pt-24">
  <table className="w-full bg-white rounded-xl shadow overflow-hidden">
    <thead className="bg-green-600 text-white">
      <tr>
        <th className="p-3 text-left">Date</th>
        <th className="p-3 text-left">Transport</th>
        <th className="p-3 text-left">Food</th>
        <th className="p-3 text-left">Energy</th>
        <th className="p-3 text-left">Total CO₂</th>
      </tr>
    </thead>

    <tbody>
      {logs.map((log) => (
        <tr key={log.id} className="border-b hover:bg-green-50">
          <td className="p-3">{log.date}</td>
          <td className="p-3">{log.transportEmission} kg</td>
          <td className="p-3">{log.foodEmission} kg</td>
          <td className="p-3">{log.energyEmission} kg</td>
          <td className="p-3 font-semibold text-green-700">
            {log.totalEmission} kg
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* MOBILE CARDS */}
<div className="md:hidden space-y-4 pt-24">
  {logs.map((log) => (
    <div
      key={log.id}
      className="bg-white rounded-2xl shadow-md p-5 border border-green-200"
    >
      <p className="text-sm text-gray-500 mb-2">
        📅 {log.date}
      </p>

      <div className="space-y-1 text-gray-700">
        <p>🚗 Transport: {log.transportEmission} kg</p>
        <p>🍽 Food: {log.foodEmission} kg</p>
        <p>⚡ Energy: {log.energyEmission} kg</p>
        <p className="font-semibold text-green-700">
          🌍 Total: {log.totalEmission} kg
        </p>
      </div>
    </div>
  ))}
</div>

    </>
  );
}
