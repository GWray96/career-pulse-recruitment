'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PainPointsSection from '@/components/home/PainPointsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Specialized Sales Recruitment Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Specialized Sales Recruitment
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            At Career Pulse, we're more than just recruiters - we're your dedicated partners in sales talent acquisition. Our deep expertise in sales recruitment ensures perfect matches that drive business growth and career advancement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">For Sales Professionals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Exclusive Opportunities</span>
                    <p className="text-gray-600 mt-1">Access to top-tier sales positions not advertised elsewhere</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Career Guidance</span>
                    <p className="text-gray-600 mt-1">Personalized advice on career progression and skill development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Market Insights</span>
                    <p className="text-gray-600 mt-1">Stay informed about industry trends and salary benchmarks</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">For Employers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Pre-screened Talent</span>
                    <p className="text-gray-600 mt-1">Access to vetted sales professionals ready to drive results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Market Intelligence</span>
                    <p className="text-gray-600 mt-1">Comprehensive insights into sales talent market dynamics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Efficient Hiring</span>
                    <p className="text-gray-600 mt-1">Streamlined process from job posting to successful placement</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">B2B & B2C Sales</span>
                    <p className="text-gray-600 mt-1">Specialized recruitment for all sales environments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Inside & Field Sales</span>
                    <p className="text-gray-600 mt-1">Expert placement for both remote and on-site roles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Sales Leadership</span>
                    <p className="text-gray-600 mt-1">Recruitment for management and executive positions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PainPointsSection />
      
      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Why Choose Career Pulse?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We combine industry expertise with personalized service to deliver exceptional results for both sales professionals and employers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Specialized Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Our exclusive focus on sales recruitment means we understand the unique challenges and requirements of the industry. We've built deep expertise in identifying and matching top sales talent with the right opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quality Matches</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just fill positions - we create lasting partnerships. Our thorough understanding of sales roles ensures perfect matches between candidates and companies, leading to long-term success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industry Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead of the curve with our comprehensive market intelligence. We provide valuable insights into sales trends, salary benchmarks, and industry developments to inform your decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Personalized Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience a truly tailored recruitment journey. Whether you're hiring or seeking a new role, our dedicated team provides personalized guidance and support every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 