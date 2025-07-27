import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import footer

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-4 sm:px-8 md:px-16 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
