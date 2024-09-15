import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { PlaceholdersAndVanishInput } from '../components/UI/PlaceholdersAndVanishInput';

const CasePage = () => {
  const [caseDetails, setCaseDetails] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caseDetails.trim() === '') return;

    const data = { caseDetails };
    setSubmittedData([...submittedData, data]);
    setCaseDetails(''); // Reset input after submission
  };
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 flex flex-col relative">
      {/* Header */}
      <Navbar />

      {/* Output Section */}
      <section className="flex-grow container mx-auto px-4 py-8 overflow-auto max-h-screen">
        <div className="max-w-3xl mx-auto space-y-4 mb-8 p-4">
          {submittedData.length === 0 ? (
            <p className="text-gray-400 text-center">No case details submitted yet. Please enter your case details below.</p>
          ) : (
            submittedData.map((data, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg text-gray-300 mb-4 shadow-md">
                <p>{data.caseDetails}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Floating Input Section */}
      <div className='pb-5'>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={setCaseDetails}
        onSubmit={handleSubmit}
      />
      </div>
    </div>
  );
};

export default CasePage;
