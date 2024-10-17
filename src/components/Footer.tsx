import React from 'react';
import { Lightbulb, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Lightbulb className="text-blue-400 w-8 h-8 mr-2" />
            <span className="text-xl font-bold">ARSS</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 Academic Research Software Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;