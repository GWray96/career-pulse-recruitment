'use client';

import React, { useState } from 'react';

const PainPointsSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const salesProfessionalPainPoints = [
    {
      id: 1,
      title: "Time-Consuming Job Search",
      description: "Spending countless hours on job boards and applications without finding the right fit.",
      solution: "Personalized job matching and direct access to quality opportunities.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: "Our AI-powered matching system analyzes your skills, experience, and preferences to connect you with the most relevant opportunities, saving you hours of searching."
    },
    {
      id: 2,
      title: "Uncertain Career Progression",
      description: "Difficulty finding roles that offer clear growth paths and competitive compensation.",
      solution: "Access to roles with transparent career progression and market-leading packages.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      details: "We partner with companies that value talent development and offer structured career paths with regular promotions and skill-building opportunities."
    }
  ];

  const employerPainPoints = [
    {
      id: 3,
      title: "Finding Quality Candidates",
      description: "Struggling to identify and attract top-performing sales professionals in a competitive market.",
      solution: "Pre-vetted candidates with proven track records and industry expertise.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: "Our rigorous screening process includes skills assessments, reference checks, and performance history verification to ensure you only meet candidates who can excel in your role."
    },
    {
      id: 4,
      title: "Lengthy Hiring Process",
      description: "Time-consuming recruitment processes leading to missed opportunities and increased costs.",
      solution: "Streamlined hiring process with quick turnaround times and dedicated support.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      details: "We've optimized our recruitment workflow to reduce time-to-hire by 40% on average, with dedicated account managers handling all aspects of the process."
    }
  ];

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/10 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 relative inline-block">
              Navigating the Sales Recruitment Landscape
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mt-6 max-w-3xl mx-auto">
              Understanding the challenges faced by both sales professionals and employers in today's competitive market
            </p>
          </div>

          {/* Sales Professionals Pain Points */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">Challenges for Sales Professionals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {salesProfessionalPainPoints.map((point) => (
                <div 
                  key={point.id}
                  className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
                    activeCard === point.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => handleCardClick(point.id)}
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                      {point.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{point.title}</h4>
                      <p className="text-gray-600 mt-2">{point.description}</p>
                    </div>
                  </div>
                  <div className="text-blue-500 font-medium mb-2">How we help: {point.solution}</div>
                  
                  {/* Expandable content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeCard === point.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">{point.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employers Pain Points */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">Challenges for Employers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {employerPainPoints.map((point) => (
                <div 
                  key={point.id}
                  className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
                    activeCard === point.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => handleCardClick(point.id)}
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                      {point.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{point.title}</h4>
                      <p className="text-gray-600 mt-2">{point.description}</p>
                    </div>
                  </div>
                  <div className="text-blue-500 font-medium mb-2">How we help: {point.solution}</div>
                  
                  {/* Expandable content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeCard === point.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">{point.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection; 