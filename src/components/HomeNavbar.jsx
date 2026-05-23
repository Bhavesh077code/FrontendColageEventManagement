const HomeNavbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-3 md:mx-8 mt-3 px-4 md:px-8 py-3 rounded-2xl 
      backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              EventSphere
            </span>
          </a>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">

            <a
              href="#features"
              className="hover:text-blue-400 transition duration-300"
            >
              Features
            </a>

            <a
              href="#events"
              className="hover:text-blue-400 transition duration-300"
            >
              Events
            </a>

            <a
              href="#community"
              className="hover:text-blue-400 transition duration-300"
            >
              Community
            </a>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <a
              href="/login"
              className="px-4 md:px-5 py-2 rounded-xl border border-white/20 
              text-white font-medium backdrop-blur-md bg-white/10 
              hover:bg-white/20 transition duration-300"
            >
              Login
            </a>

            <a
              href="/register"
              className="px-4 md:px-5 py-2 rounded-xl bg-gradient-to-r 
              from-blue-600 to-purple-600 text-white font-semibold 
              shadow-lg hover:scale-105 transition duration-300"
            >
              Sign Up
            </a>

          </div>

        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;