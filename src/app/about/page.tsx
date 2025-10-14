'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamMembers = [
    {
      name: "Liyu Lin",
      role: "CEO",
      emoji: "👩‍💼",
      description: "Leading Sip&Grow with expertise in mathematics, physics, and chemistry.",
      subjects: {
        HL: "Math AA, Physics, Chemistry",
        SL: "ESS, English A, Spanish AB"
      }
    },
    {
      name: "Julian",
      role: "Secretary",
      emoji: "👨‍💻",
      description: "Managing operations with strong background in computer science and business.",
      subjects: {
        HL: "Computer Science, Business Management, Dutch B",
        SL: "ESS, English A, Math AA"
      }
    },
    {
      name: "Bella",
      role: "CFO",
      emoji: "👩‍💰",
      description: "Managing finances with strong analytical skills in mathematics and sciences.",
      subjects: {
        HL: "Math AA, Physics, Chemistry",
        SL: "ESS, English A, Spanish AB"
      }
    },
    {
      name: "Gillian",
      role: "Marketing & Sales",
      emoji: "👩‍🎵",
      description: "Driving growth through creative marketing strategies and scientific understanding.",
      subjects: {
        HL: "Biology, Music, Chemistry",
        SL: "English A, Spanish AB, Math AA"
      }
    },
    {
      name: "Jonathan",
      role: "COO",
      emoji: "👨‍🔧",
      description: "Overseeing daily operations with expertise in business management and economics.",
      subjects: {
        HL: "Swedish B, Math AA, Business Management",
        SL: "Physics, English A, Economics"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  const canGoLeft = currentSlide > 0;
  const canGoRight = currentSlide < Math.ceil(teamMembers.length / 3) - 1;

  const getVisibleMembers = () => {
    const startIndex = currentSlide * 3;
    return teamMembers.slice(startIndex, startIndex + 3);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Sip&Grow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pioneering the future of sustainable packaging through innovative design and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Sip&Grow, we believe that every product should contribute positively to the environment. 
                Our mission is to revolutionize the single-use packaging industry by creating products that 
                don't just minimize harm, but actively regenerate our planet.
              </p>
              <p className="text-gray-700 mb-8">
                We're not just making cups – we're creating a movement towards a circular economy where 
                every purchase plants the seeds for a greener future.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-[28rem] relative">
                <Image
                  src="/Sipandgrowforest.png"
                  alt="Growing cups planted in forest showing the impact of our sustainable cups"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Circular Design</h3>
              <p className="text-gray-600">
                Every product is designed with its entire lifecycle in mind, from creation to decomposition and regeneration.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scientific Innovation</h3>
              <p className="text-gray-600">
                We combine cutting-edge materials science with traditional knowledge to create breakthrough solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600">
                Our products create positive environmental and social impact in communities worldwide.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regeneration</h3>
              <p className="text-gray-600">
                We don't just reduce waste – we create new life, supporting biodiversity and ecosystem health.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We're open about our processes, materials, and impact, building trust through complete transparency.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously push boundaries, exploring new materials and technologies for a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of scientists, designers, and environmentalists united by a common vision
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={!canGoLeft}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 rounded-full p-3 shadow-lg transition-all duration-300 z-10 group ${
                canGoLeft 
                  ? 'bg-white hover:shadow-xl hover:border-2 hover:border-green-500 hover:scale-110 hover:bg-green-50 cursor-pointer' 
                  : 'bg-gray-200 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className={`w-6 h-6 transition-colors duration-300 ${
                canGoLeft 
                  ? 'text-gray-600 group-hover:text-green-600' 
                  : 'text-gray-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              disabled={!canGoRight}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rounded-full p-3 shadow-lg transition-all duration-300 z-10 group ${
                canGoRight 
                  ? 'bg-white hover:shadow-xl hover:border-2 hover:border-green-500 hover:scale-110 hover:bg-green-50 cursor-pointer' 
                  : 'bg-gray-200 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className={`w-6 h-6 transition-colors duration-300 ${
                canGoRight 
                  ? 'text-gray-600 group-hover:text-green-600' 
                  : 'text-gray-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
              {getVisibleMembers().map((member, index) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">{member.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    <p><strong>HL:</strong> {member.subjects.HL}</p>
                    <p><strong>SL:</strong> {member.subjects.SL}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-green-100 text-xl max-w-3xl mx-auto">
              Building towards a sustainable future, one cup at a time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-green-100">Compostable Materials</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">0</div>
              <p className="text-green-100">Waste to Landfill</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <p className="text-green-100">Growth Potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Sip&Grow was born from a simple observation: every day, millions of coffee cups end up in landfills, 
                taking decades to decompose while contributing to environmental degradation. Our founders saw an opportunity 
                to turn this problem into a solution.
              </p>
              <p className="mb-6">
                What started as a research project has grown into a mission-driven startup that's reimagining the 
                entire lifecycle of single-use products. We've spent time perfecting our seed capsule technology, 
                ensuring that every cup not only decomposes safely but actively contributes to reforestation.
              </p>
              <p className="mb-6">
                Today, we're building partnerships with local cafes and organizations who share our vision of a 
                circular economy. Every Growing Cup represents a step toward a more sustainable future, where 
                consumption and conservation work hand in hand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
