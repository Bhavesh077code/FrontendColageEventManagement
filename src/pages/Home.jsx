
import HomeNavbar from "../components/HomeNavbar";
import kit from "../assets/kit.jpg";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* NAVBAR */}
      <HomeNavbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:`
            url({kit.jpg}),
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) `
          
        }}
      >
        <div className="relative text-center max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 text-black">
            Welcome to <span className="text-blue-600">KIT Collage</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-6">
            Stay updated with upcoming campus events, register easily, and grow with the community
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                document
                  .getElementById("easy-register")
                  .scrollIntoView({
                    behavior: "smooth"
                  });
              }}
              className="px-6 md:px-8 py-2 md:py-3 rounded-2xl bg-black text-white text-base md:text-lg font-semibold shadow-lg hover:bg-gray-800"
            >
              Get Start
            </button>

            <a
              href="/register"
              className="px-6 md:px-8 py-2 md:py-3 rounded-2xl bg-green-500 text-white text-base md:text-lg font-semibold shadow-lg hover:bg-green-600"
            >
              Signup
            </a>
          </div>
        </div>
      </section>

      {/* Center Feature Section */}
      <section id="easy-register" className="py-16 px-4 md:px-8 bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why KIT Events?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-xl font-semibold mb-2">📢 Stay Updated</h4>
            <p className="text-gray-600">
              Never miss any college program, fest, or workshop.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-xl font-semibold mb-2">⚡ Easy Registration</h4>
            <p className="text-gray-600">
              One-click event registration with simple steps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h4 className="text-xl font-semibold mb-2">🤝 Community</h4>
            <p className="text-gray-600">
              Connect with students, organizers, and clubs.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-black text-white text-center px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Join Our Community
        </h3>

        <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Be part of KIT Events community to share ideas, get updates, and grow together.
        </p>

        <button className="px-6 md:px-8 py-2 md:py-3 rounded-2xl bg-white text-blue-600 font-semibold hover:bg-gray-100">
          Join Community
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-gray-100 text-sm md:text-base">
        © 2026 KIT Events • Stay Connected, Stay Updated
      </footer>

    </div>
  );
}
