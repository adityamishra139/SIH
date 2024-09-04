import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI-Driven Research Engine</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">How It Works</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Simplify Legal Research with AI</h2>
          <p className="text-lg mb-8">
            An advanced AI-driven research tool designed to assist judges and judicial officers
            in streamlining legal processes and expediting commercial dispute resolution.
          </p>
          <a href="#" className="bg-white text-blue-900 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-4">Data Aggregation</h4>
              <p className="text-gray-700">
                Collect and process data from various legal sources, including case laws and statutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-4">Predictive Analytics</h4>
              <p className="text-gray-700">
                Forecast potential case outcomes based on historical data and trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-4">Customization</h4>
              <p className="text-gray-700">
                Tailor results based on the specific needs of each commercial suit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Step 1: Input Your Query</h4>
              <p className="text-gray-700">
                Enter the details of your commercial case or legal query into the research engine.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Step 2: Review Customized Results</h4>
              <p className="text-gray-700">
                The engine processes your query and provides tailored results, including relevant case laws and statutes.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Step 3: Analyze Predictive Insights</h4>
              <p className="text-gray-700">
                Review the predictive analytics to assess potential outcomes based on historical data.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Step 4: Make Informed Decisions</h4>
              <p className="text-gray-700">
                Use the insights provided by the engine to make well-informed legal decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AI-Driven Research Engine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
