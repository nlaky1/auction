import React, { useState } from 'react';

export default function Hero2() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-100 text-white py-8">
    <div className="container mx-auto px-4">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex justify-start w-full md:w-auto mb-4 md:mb-0">
          <div className="flex items-center space-x-4">
            <img
              src="https://soluqube.vercel.app/logo/logo1.svg"
              alt="Housing logo"
              className="h-10"
            />
            <span className="text-2xl font-bold">ACME</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto space-x-2 md:space-x-4">
          <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">
            Home
          </button>
          <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">
            About Us
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg mb-2 md:mb-0">
            Check Latest Properties
          </button>
        </div>
      </header>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Looking for a new Property?</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="flex flex-wrap md:flex-row items-center space-y-4 md:space-y-0">
          <select
            className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg w-full md:w-auto"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
          </select>
          <select
            className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg w-full md:w-auto md:ml-4"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Indore">Indore</option>
            <option value="Delhi">Delhi</option>
            <option value="Bhopal">Bhopal</option>
          </select>
          <input
            type="text"
            placeholder="Search for locality, landmark, project"
            className="flex-grow bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg w-full md:w-auto md:ml-4"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto md:ml-4">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
