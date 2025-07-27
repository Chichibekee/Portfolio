import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-700 text-[#64ffda] py-4">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center font-bold text-lg sm:text-xl">
        {/* Left Side: Logo */}
        <div className="text-2xl">Chioma</div>

        {/* Right Side: Nav Links */}
        <div className="flex gap-6">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
          <NavLink to="/projects" className="hover:underline">Projects</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
