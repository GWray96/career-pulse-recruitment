'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PainPointsSection from '@/components/home/PainPointsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Specialized Sales Recruitment
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            At Career Pulse, we focus exclusively on connecting exceptional sales professionals with innovative companies. Our deep expertise in sales recruitment ensures perfect matches that drive business growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Sales Professionals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Access to exclusive sales opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Personalized career guidance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Industry-specific insights
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Employers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Pre-screened sales talent
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Market intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Streamlined hiring process
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  B2B & B2C sales roles
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Inside & field sales
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Sales management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <PainPointsSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Career Pulse?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Specialized Focus</h3>
              <p className="text-gray-600">
                We focus exclusively on sales recruitment, allowing us to develop deep expertise and understanding of the industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quality Matches</h3>
              <p className="text-gray-600">
                Our thorough understanding of sales roles ensures we make perfect matches between candidates and companies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
              <p className="text-gray-600">
                Stay informed about market trends, salary benchmarks, and industry developments in the sales sector.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Receive tailored guidance and support throughout your recruitment journey, whether you're hiring or seeking a new role.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 