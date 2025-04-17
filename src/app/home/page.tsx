'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PainPointsSection from '@/components/home/PainPointsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Specialized Sales Recruitment Section - Card-based layout */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Specialized Sales Recruitment
            </h2>
            <p className="text-xl text-gray-600">
              At Career Pulse, we're more than just recruiters - we're your dedicated partners in sales talent acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Sales Professionals Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">For Sales Professionals</h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <span className="text-blue-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Exclusive Opportunities</span>
                    <p className="text-gray-600 mt-1">Access to top-tier sales positions</p>
                  </div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-blue-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Career Guidance</span>
                    <p className="text-gray-600 mt-1">Personalized career advice</p>
                  </div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-blue-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Market Insights</span>
                    <p className="text-gray-600 mt-1">Industry trends and benchmarks</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Employers Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">For Employers</h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <span className="text-green-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Pre-screened Talent</span>
                    <p className="text-gray-600 mt-1">Access to vetted professionals</p>
                  </div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-green-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Market Intelligence</span>
                    <p className="text-gray-600 mt-1">Comprehensive market insights</p>
                  </div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-green-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Efficient Hiring</span>
                    <p className="text-gray-600 mt-1">Streamlined recruitment process</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Expertise Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <span className="text-purple-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">B2B & B2C Sales</span>
                    <p className="text-gray-600 mt-1">All sales environments</p>
                  </div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Inside & Field Sales</span>
                    <p className="text-gray-600 mt-1">Remote and on-site roles</p>
                  </div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-600 mr-3 mt-1 group-hover/item:scale-110 transition-transform">✓</span>
                  <div>
                    <span className="font-medium text-gray-900">Sales Leadership</span>
                    <p className="text-gray-600 mt-1">Management positions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - Timeline-style layout */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Common Sales Recruitment Challenges
            </h2>
            <p className="text-xl text-gray-300">
              We understand the unique challenges in sales recruitment and have solutions for every pain point.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-400"></div>
              
              {/* Pain Point 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Finding Quality Candidates</h3>
                      <p className="text-gray-300">The challenge of identifying truly qualified sales professionals who can drive results.</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full z-10"></div>
                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Our Solution</h3>
                      <p className="text-gray-300">We maintain a curated database of pre-screened sales professionals with proven track records.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pain Point 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Our Solution</h3>
                      <p className="text-gray-300">We provide detailed market insights and salary benchmarks to help you make competitive offers.</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full z-10"></div>
                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Competitive Compensation</h3>
                      <p className="text-gray-300">Struggling to determine the right compensation package to attract top talent.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pain Point 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Time to Hire</h3>
                      <p className="text-gray-300">Extended recruitment cycles that delay filling critical sales positions.</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full z-10"></div>
                  <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-2xl font-semibold mb-2 text-blue-300">Our Solution</h3>
                      <p className="text-gray-300">Our streamlined process reduces time-to-hire by up to 40% through efficient candidate matching.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section - Feature grid with alternating layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose Career Pulse?
            </h2>
            <p className="text-xl text-gray-600">
              We combine industry expertise with personalized service to deliver exceptional results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Specialized Focus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our exclusive focus on sales recruitment means we understand the unique challenges and requirements of the industry.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-full opacity-50"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Sales-Specific Expertise</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Deep understanding of sales roles and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Industry-specific assessment techniques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Specialized networks in sales communities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Reversed layout */}
            <div className="flex flex-col md:flex-row items-center mb-20">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2 md:pl-12">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quality Matches</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create lasting partnerships through thorough understanding of sales roles and perfect matches between candidates and companies.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-1 md:pr-12">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-300 rounded-full opacity-50"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Matching Process</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Comprehensive candidate profiling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Detailed company culture assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Skill and experience alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industry Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay ahead with comprehensive market intelligence, including sales trends, salary benchmarks, and industry developments.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 rounded-full opacity-50"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Market Intelligence</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Regular salary and compensation reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Industry trend analysis and forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">Competitive landscape insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 