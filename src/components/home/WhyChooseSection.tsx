'use client';

import React from 'react';

const WhyChooseSection = () => {
  const salesProfessionalBenefits = [
    {
      id: 1,
      title: "Transparent Fee Structure",
      description: "No hidden costs or surprise fees. Our pricing is clear and upfront.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Personalized Job Matching",
      description: "We take time to understand your skills, experience, and career goals to find the perfect role.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Career Development Support",
      description: "Access to resources, training, and guidance to help you advance your sales career.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Direct Access to Decision Makers",
      description: "Skip the gatekeepers and connect directly with hiring managers and company leaders.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    }
  ];

  const employerBenefits = [
    {
      id: 5,
      title: "Competitive Pricing",
      description: "Fixed fee of £999 for junior roles or 10% for senior positions - no hidden costs.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Quality Over Quantity",
      description: "We focus on finding the perfect match rather than flooding you with unsuitable candidates.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Industry Expertise",
      description: "Specialized knowledge of the sales landscape across various industries and sectors.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Streamlined Process",
      description: "Efficient recruitment workflow that saves you time and reduces time-to-hire.",
      icon: (
        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-blue-500/5 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/5 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 relative inline-block">
              Why Choose Career Pulse
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mt-6 max-w-3xl mx-auto">
              We offer a unique approach to sales recruitment with transparent pricing and exceptional service
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees or complicated structures - just simple, fair pricing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">£999</div>
                  <div className="text-sm text-gray-600">Fixed fee for junior sales roles</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">10%</div>
                  <div className="text-sm text-gray-600">For senior sales professionals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Professionals Benefits */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">For Sales Professionals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {salesProfessionalBenefits.map((benefit) => (
                <div 
                  key={benefit.id}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 mt-2">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employers Benefits */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">For Employers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {employerBenefits.map((benefit) => (
                <div 
                  key={benefit.id}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 mt-2">{benefit.description}</p>
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

export default WhyChooseSection; 