
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
