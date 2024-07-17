import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-500 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img
            src="https://soluqube.vercel.app/logo/logo1.svg"
            alt="Housing logo"
            className="h-10"
          />
          <span className="text-2xl font-bold">ACME</span>
        </div>
        <p className="mb-4">
          © 2024 ACME. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
