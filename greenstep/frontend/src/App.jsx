import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Calculate from "./pages/Calculate";
import About from "./pages/About";
import History from "./pages/History";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calculate" element={<Calculate />} />
      <Route path="/history" element={<History />} />
      <Route path ="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
