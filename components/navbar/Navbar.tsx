export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Swaroop Singh R Logo"
            className="w-9 h-9"
          />
          <span className="text-lg font-bold">
            Swaroop Singh R
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
