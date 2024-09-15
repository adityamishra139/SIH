import React, { useState } from 'react';

const CasePage = () => {
    const [caseDetails, setCaseDetails] = useState('');
    const [caseType, setCaseType] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', { caseDetails, caseType, additionalInfo });
        setCaseDetails('');
        setCaseType('');
        setAdditionalInfo('');
    };

    return (
        <div className="bg-gray-100 min-h-screen text-gray-800">
            {/* Header */}
            <header className="bg-blue-900 text-white shadow py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">LegalEdgeAI</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/features" className="hover:text-gray-300">Features</a></li>
                            <li><a href="/case" className="hover:text-gray-300">Case Details</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Input Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Input Your Case Details</h2>
                    <p className="text-lg mb-8">
                        Please provide the necessary information about your commercial case to get tailored results.
                    </p>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="caseDetails">
                                Case Details
                            </label>
                            <textarea
                                id="caseDetails"
                                value={caseDetails}
                                onChange={(e) => setCaseDetails(e.target.value)}
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                                placeholder="Enter details about your case..."
                                required
                            />
                        </div>

                        {/* <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="caseType">
                                Case Type
                            </label>
                            <select
                                id="caseType"
                                value={caseType}
                                onChange={(e) => setCaseType(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Select Case Type</option>
                                <option value="commercial">Commercial</option>
                                <option value="civil">Civil</option>
                                <option value="criminal">Criminal</option>
                                <option value="arbitration">Arbitration</option>
                            </select>
                        </div> */}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
                                Additional Information
                            </label>
                            <textarea
                                id="additionalInfo"
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
                                rows="2"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                                placeholder="Any additional information..."
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-500 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 LegalEdgeAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default CasePage;
