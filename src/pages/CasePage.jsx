import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { PlaceholdersAndVanishInput } from "../components/UI/PlaceholdersAndVanishInput";
import logo from "../images/BGimg.jpeg"; // Assuming you're using a local image file

const CasePage = () => {
  const [caseDetails, setCaseDetails] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  // Handle form submission to add case details to the submitted data array
  const handleSubmit = (e) => {
    e.preventDefault();
    if (caseDetails.trim() === "") return; // Prevent empty submissions

    const data = { caseDetails };
    setSubmittedData([...submittedData, data]); // Append new data
    setCaseDetails(""); // Reset the input after submission
  };

  // Placeholder text for the input component
  const placeholders = ["Enter the case details"];

  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 flex flex-col relative">
      {/* Header */}
      <Navbar />

      {/* Output Section */}
      <section
  className="flex-grow container mx-auto px-4 py-8 overflow-auto max-h-screen relative"
  style={{
    backgroundImage: `url(${logo})`,
    backgroundSize: '35%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust RGBA values for desired transparency
      zIndex: -1, // Ensure the overlay is behind content
    }}
  />
  {/* Case details rendering */}
  <div className="max-w-3xl mx-auto space-y-4 mb-8 p-4 relative z-10">
          {submittedData.length === 0 ? (
            <p className="text-gray-400 text-center">No case details submitted.</p>
          ) : (
            submittedData.map((data, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg text-gray-300 mb-4 shadow-md"
              >
                <p>{data.caseDetails}</p>
              </div>
            ))
          )}
        </div>
  {/* Your section content goes here */}
</section>

      {/* Floating Input Section */}
      <div className="pb-5">
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
