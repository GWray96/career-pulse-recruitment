'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import InsightsSection from '@/components/InsightsSection';
import CalendarWidget from '@/components/CalendarWidget';

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

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-8"></div>
      </div>

      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-deep-charcoal relative inline-block">
                Common Challenges in Today's Job Market
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </h2>
              <p className="text-xl text-deep-charcoal/70 text-center mt-6 max-w-3xl mx-auto">Discover how we address the key pain points faced by both employers and candidates in the modern recruitment landscape</p>
            </div>

            {/* Pain Points Cards */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* ... existing pain points content ... */}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-8"></div>
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
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-8"></div>
      </div>

      {/* Featured Jobs Section - simplified scanning */}
      <section id="featured-jobs" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-charcoal mb-4">
              Featured Opportunities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting career opportunities with leading companies
            </p>
          </div>

          {/* Job cards in grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {/* Job cards */}
          </div>
          
          <div className="text-center">
            <Link 
              href="/jobs"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-md"
            >
              View All Jobs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-8"></div>
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
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-8"></div>
      </div>

      {/* Insights Section - using our component with lazy loading */}
      <InsightsSection />

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-8"></div>
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

          {/* FAQ Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All FAQs', 'General FAQs', 'Candidate FAQs', 'Employer FAQs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white text-deep-charcoal/70 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ items would go here */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Transform Your <span className="text-accent">Recruitment</span>?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join the growing number of companies and professionals who trust Career Pulse for their recruitment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/candidate-pulse" 
              className="btn-secondary bg-white text-primary hover:bg-white/90 text-center py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Candidate Pulse
            </Link>
            <Link 
              href="/employer-pulse" 
              className="btn-primary bg-accent text-white hover:bg-accent/90 text-center py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Employer Pulse
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}