'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      questions: [
        {
          id: 1,
          question: 'What is Career Pulse?',
          answer: 'Career Pulse is a modern recruitment platform that connects talented professionals with innovative companies. We use AI-powered matching technology to help job seekers find the right opportunities and employers find the right candidates.',
        },
        {
          id: 2,
          question: 'How do I create an account?',
          answer: 'Creating an account is easy! Simply click on the "Sign Up" button in the top right corner of the homepage, fill in your details, and follow the prompts to complete your profile. You can sign up as either a job seeker or an employer.',
        },
        {
          id: 3,
          question: 'Is Career Pulse free to use?',
          answer: 'Career Pulse offers both free and premium features. Job seekers can create profiles, search for jobs, and apply to positions for free. Employers can post a limited number of job listings on the free tier, with additional features available on our paid plans.',
        },
      ],
    },
    {
      id: 'job-seekers',
      title: 'For Job Seekers',
      questions: [
        {
          id: 4,
          question: 'How does the job matching algorithm work?',
          answer: 'Our job matching algorithm analyzes your profile, skills, experience, and preferences to find the most relevant job opportunities. It considers factors such as job requirements, company culture, location, and salary expectations to provide personalized recommendations.',
        },
        {
          id: 5,
          question: 'Can I upload my resume?',
          answer: 'Yes, you can upload your resume when creating your profile. Our system will automatically extract information from your resume to help build your profile. You can also manually edit and update your profile information at any time.',
        },
        {
          id: 6,
          question: 'How do I apply for jobs?',
          answer: 'To apply for a job, simply click on the job listing you\'re interested in, review the details, and click the "Apply" button. You can apply directly through our platform, and the employer will be notified of your application. You can track your applications in your dashboard.',
        },
      ],
    },
    {
      id: 'employers',
      title: 'For Employers',
      questions: [
        {
          id: 7,
          question: 'How do I post a job?',
          answer: 'To post a job, you need to create an employer account and select a subscription plan. Once your account is set up, you can click on "Post a Job" in your dashboard, fill in the job details, and publish your listing. Our team reviews all job postings to ensure they meet our quality standards.',
        },
        {
          id: 8,
          question: 'What are the different pricing plans?',
          answer: 'We offer three pricing plans: Basic, Pro, and Enterprise. The Basic plan allows you to post up to 5 jobs per month. The Pro plan includes up to 20 job postings, featured listings, and advanced candidate filtering. The Enterprise plan offers unlimited job postings, priority support, and custom branding options. Visit our Pricing page for more details.',
        },
        {
          id: 9,
          question: 'How do I manage applications?',
          answer: 'All applications for your job postings are collected in your employer dashboard. You can review candidate profiles, resumes, and cover letters, and communicate with applicants directly through the platform. You can also track the status of each application and manage your hiring pipeline.',
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical Support',
      questions: [
        {
          id: 10,
          question: 'What browsers are supported?',
          answer: 'Career Pulse works on all modern browsers, including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of these browsers.',
        },
        {
          id: 11,
          question: 'Is there a mobile app?',
          answer: 'Currently, we don\'t have a dedicated mobile app, but our website is fully responsive and optimized for mobile devices. You can access all features through your mobile browser.',
        },
        {
          id: 12,
          question: 'How do I reset my password?',
          answer: 'If you\'ve forgotten your password, click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password. Make sure to check your spam folder if you don\'t receive the email.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to common questions about Career Pulse, job searching, and recruitment.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-montserrat font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq) => (
                    <div key={faq.id} className="p-6">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={openIndex === faq.id}
                      >
                        <h3 className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </h3>
                        <span className="ml-6 flex-shrink-0">
                          <svg
                            className={`w-6 h-6 transform transition-transform duration-200 ${
                              openIndex === faq.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
                          openIndex === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-soft p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-200"
                >
                  Contact Support
                </Link>
                <Link
                  href="/book-call"
                  className="px-6 py-3 bg-white text-primary border border-primary font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 