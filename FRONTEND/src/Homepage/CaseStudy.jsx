
import React from 'react';
import { Star, Users, ChevronRight } from 'lucide-react';

const marketers = [
  {
    name: "John Doe",
    role: "Marketing Expert",
    description: "Specialized in digital marketing and social media strategies. Helping businesses grow their online presence.",
    image: "case.png",
    collaborators: 5,
    rating: 4.8
  },
  {
    name: "Jane Smith",
    role: "SEO Specialist",
    description: "Expert in search engine optimization and content marketing. Helping websites rank higher in search results.",
    image: "card2.jpg",
    collaborators: 3,
    rating: 4.9
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description: "Specialized in pay-per-click advertising and Google Ads. Helping businesses maximize their ad spend.",
    image: "card1.jpg",
    collaborators: 4,
    rating: 4.7
  },
  {
    name: "Muritala Zainab",
    role: "Marketing Expert",
    description: "Specialized in digital marketing and social media strategies. Helping businesses grow their online presence.",
    image: "card 3.jpg",
    collaborators: 5,
    rating: 4.6
  }
];

const MarketersShowcase = () => {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-txtBg mb-2">Top Marketers on Our Platform</h1>
        <p className="text-lg text-txtBg">Discover and connect with industry-leading marketing professionals</p>
      </header>

      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {marketers.map((marketer, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src={marketer.image} alt={marketer.name} className="w-20 h-20 rounded-full mr-4 border-4 border-indigo-200" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{marketer.name}</h2>
                  <p className="text-indigo-600 font-medium">{marketer.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{marketer.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <Users size={18} className="mr-1 text-indigo-500" />
                  <span>Collaborating with {marketer.collaborators} marketers</span>
                </div>
                <div className="flex items-center">
                  <Star size={18} className="mr-1 text-yellow-400" />
                  <span>{marketer.rating.toFixed(1)} Rating</span>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4">
              <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition duration-300">
                Learn More
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MarketersShowcase;