'use client';

import React from 'react';

const PainPointsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/10 opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 relative inline-block">
              Navigating the Sales Recruitment Landscape
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 text-center mt-6 max-w-3xl mx-auto">
              Understanding the challenges faced by both sales professionals and employers in today's competitive market
            </p>
          </div>

          {/* Sales Professionals Pain Points */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Challenges for Sales Professionals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Time-Consuming Job Search</h4>
                    <p className="text-gray-600 mt-2">Spending countless hours on job boards and applications without finding the right fit.</p>
                  </div>
                </div>
                <div className="text-blue-500 font-medium">How we help: Personalized job matching and direct access to quality opportunities.</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Uncertain Career Progression</h4>
                    <p className="text-gray-600 mt-2">Difficulty finding roles that offer clear growth paths and competitive compensation.</p>
                  </div>
                </div>
                <div className="text-blue-500 font-medium">How we help: Access to roles with transparent career progression and market-leading packages.</div>
              </div>
            </div>
          </div>

          {/* Employers Pain Points */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Challenges for Employers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Finding Quality Candidates</h4>
                    <p className="text-gray-600 mt-2">Struggling to identify and attract top-performing sales professionals in a competitive market.</p>
                  </div>
                </div>
                <div className="text-blue-500 font-medium">How we help: Pre-vetted candidates with proven track records and industry expertise.</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Lengthy Hiring Process</h4>
                    <p className="text-gray-600 mt-2">Time-consuming recruitment processes leading to missed opportunities and increased costs.</p>
                  </div>
                </div>
                <div className="text-blue-500 font-medium">How we help: Streamlined hiring process with quick turnaround times and dedicated support.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection; 