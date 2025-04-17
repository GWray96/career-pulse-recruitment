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
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Why Choose{' '}
              <span className="relative inline-block">
                Career Pulse
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transform skew-x-12"></div>
              </span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="relative mb-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-r from-blue-500/5 to-blue-600/5 transform -skew-y-3"></div>
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/10 p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Junior Roles</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">£999</div>
                  <p className="text-gray-600">Fixed fee for entry-level and junior sales positions</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col items-center text-center text-white">
                  <div className="bg-white/20 p-4 rounded-full mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Senior Roles</h3>
                  <div className="text-4xl font-bold mb-4">10%</div>
                  <p className="text-white/90">For experienced sales professionals and leadership positions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-16 relative">
            {/* Sales Professionals Column */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 relative">
                For Sales Professionals
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></div>
              </h3>
              <div className="space-y-6">
                {salesProfessionalBenefits.map((benefit) => (
                  <div 
                    key={benefit.id}
                    className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employers Column */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 relative">
                For Employers
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></div>
              </h3>
              <div className="space-y-6">
                {employerBenefits.map((benefit) => (
                  <div 
                    key={benefit.id}
                    className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 