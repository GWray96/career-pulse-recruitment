'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import InsightsSection from '@/components/home/InsightsSection';
import CalendarWidget from '@/components/home/CalendarWidget';
import StatsSection from '@/components/home/StatsSection';
import FeaturedJobsSection from '@/components/home/FeaturedJobsSection';
import PainPointsSection from '@/components/home/PainPointsSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All FAQs');
  const [activeProcess, setActiveProcess] = useState('employer');

  const employerProcess = [
    { title: 'Initial Consultation', description: 'We meet to understand your hiring needs and company culture.' },
    { title: 'Talent Search', description: 'Our recruiters search for the best candidates matching your criteria.' },
    { title: 'Candidate Screening', description: 'Thorough interviews and assessments to ensure perfect matches.' },
    { title: 'Interview Coordination', description: 'We handle all interview scheduling and provide detailed feedback.' },
    { title: 'Offer & Onboarding', description: 'We assist with offer negotiations and ensure a smooth transition.' }
  ];

  const candidateProcess = [
    { title: 'Profile Creation', description: 'Create your professional profile and specify your career goals.' },
    { title: 'Career Consultation', description: 'Meet with our career advisors to discuss your goals.' },
    { title: 'Job Matching', description: 'We match you with suitable opportunities based on your profile.' },
    { title: 'Interview Preparation', description: 'Receive guidance and coaching to excel in your interviews.' },
    { title: 'Offer Support', description: 'We help you evaluate offers and negotiate the best terms.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <HeroSection />
      <PainPointsSection />

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="section-divider"></div>
      </div>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-deep-charcoal">
              Our Recruitment <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-deep-charcoal/70">
              We follow a structured approach to ensure successful matches between top talent and premier organizations
            </p>
          </div>
          
          {/* Process Tabs */}
          <div className="mb-12 sm:mb-16 flex justify-center space-x-4">
            <button
              onClick={() => setActiveProcess('employer')}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                activeProcess === 'employer'
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white text-deep-charcoal/70 hover:bg-slate-50'
              }`}
            >
              For Employers
            </button>
            <button
              onClick={() => setActiveProcess('candidate')}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                activeProcess === 'candidate'
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-white text-deep-charcoal/70 hover:bg-slate-50'
              }`}
            >
              For Candidates
            </button>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Employer Process Steps */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 transition-all duration-300 ${
                activeProcess === 'employer'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
              }`}
            >
              {employerProcess.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-full">
                    <div className="bg-white rounded-lg p-6 h-[200px] flex flex-col shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-primary/30">
                      <div className="flex flex-col h-full justify-between">
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-2 mt-4 text-gray-900 group-hover:text-primary">{step.title}</h3>
                          <p className="text-gray-800">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Candidate Process Steps */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 transition-all duration-300 ${
                activeProcess === 'candidate'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
              }`}
            >
              {candidateProcess.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-full">
                    <div className="bg-white rounded-lg p-6 h-[200px] flex flex-col shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-accent/30">
                      <div className="flex flex-col h-full justify-between">
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-2 mt-4 text-gray-900 group-hover:text-accent">{step.title}</h3>
                          <p className="text-gray-800">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="section-divider"></div>
      </div>

      <StatsSection />

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="section-divider"></div>
      </div>

      {/* Featured Jobs Section */}
      <FeaturedJobsSection />

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="section-divider"></div>
      </div>

      {/* Employer CTA Section - with simplified calendar */}
      <section id="employer-cta" className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary-dark/90">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white md:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Book a free consultation with our recruitment experts and discover how Career Pulse can help you find the perfect candidates for your team.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Personalized Approach</h3>
                    <p className="text-white/80">Recruiting solutions tailored to your specific industry and needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Expert Guidance</h3>
                    <p className="text-white/80">Industry specialists with deep knowledge of your market</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
              <CalendarWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="section-divider"></div>
      </div>

      {/* Insights Section - using our component with lazy loading */}
      <InsightsSection />

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="section-divider"></div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-charcoal mb-4 relative inline-block">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Find answers to common questions about our recruitment services and processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 