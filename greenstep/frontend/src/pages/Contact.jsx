import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 px-6 py-16 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
            Contact
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            If you have any questions, feedback, or suggestions related to
            GreenStep, feel free to reach out to us.
          </p>

          <p className="text-xl text-gray-800">
            📧 <span className="font-medium">Email:</span>{" "}
            <span className="text-green-700 font-semibold">
              shwnproject@gmail.com
            </span>
          </p>

          <p className="text-sm text-gray-500 mt-10">
            © {new Date().getFullYear()} GreenStep. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
