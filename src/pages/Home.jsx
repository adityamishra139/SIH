import React from 'react';
import Navbar from '../components/Navbar';
import image1 from '../images/scales-wallpaper-preview.jpg'
const Home = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Gradient Overlay */}
        <div className="container mx-auto px-6 text-center z-10">
          <h2 className="text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            Simplify Legal Research with AI
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            An advanced AI-driven research tool to streamline legal processes and expedite commercial dispute resolution for judges and legal professionals.
          </p>
          <a
            href="#features"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Full-Width SVG Wave Transition (Below Hero Section) */}
      <div className="relative">
        <svg
          className="w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0F172A"
            fillOpacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,192C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-950 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-extrabold text-center mb-16 text-indigo-400 tracking-tight leading-tight">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="bg-gray-900 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Data Aggregation</h4>
              <p className="text-gray-400 leading-relaxed">
                Aggregate and process data from various legal sources, including case laws and statutes, for comprehensive insights.
              </p>
            </div>
            <div className="bg-gray-900 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Predictive Analytics</h4>
              <p className="text-gray-400 leading-relaxed">
                Use AI-powered predictive analytics to forecast case outcomes based on historical trends and legal precedents.
              </p>
            </div>
            <div className="bg-gray-900 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Customization</h4>
              <p className="text-gray-400 leading-relaxed">
                Tailor results based on the specific legal requirements of each case to deliver more relevant outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width SVG Wave Transition (Above How It Works Section) */}
      <div className="relative w-full overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-screen h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0F172A"
            fillOpacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,192C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <h3 className="text-5xl font-extrabold text-center mb-16 text-indigo-400 leading-tight">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Step 1: Input Your Query</h4>
              <p className="text-gray-400 leading-relaxed">
                Enter details of your commercial case or legal query into the AI-driven research engine for processing.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Step 2: Review Customized Results</h4>
              <p className="text-gray-400 leading-relaxed">
                The engine provides tailored results including relevant case laws, statutes, and legal references.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Step 3: Analyze Predictive Insights</h4>
              <p className="text-gray-400 leading-relaxed">
                Utilize AI-powered insights to assess potential outcomes based on historical data and trends.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">Step 4: Make Informed Decisions</h4>
              <p className="text-gray-400 leading-relaxed">
                Leverage data-driven insights to make more informed decisions in your legal strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 LegalEdgeAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;