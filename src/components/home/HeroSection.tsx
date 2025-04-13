'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('jobs');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in category:', searchCategory);
    // In a real app, you would navigate to search results page
    // router.push(`/search?q=${searchQuery}&category=${searchCategory}`);
  };
  
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/backgrounds/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Find Your Dream Career. <span className="text-accent-400">Thrive</span> With Us.
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Connect with top employers and discover opportunities that match your skills, experience, and career aspirations.
            </p>
            
            <form onSubmit={handleSearch} className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row mb-8">
              <div className="flex-1 flex items-center px-3 py-2">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
                <input 
                  type="text" 
                  placeholder="Job title, skills, or company"
                  className="w-full outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="md:border-l border-gray-200 px-3 py-2 md:w-48 flex items-center justify-between">
                <select
                  className="w-full outline-none bg-transparent text-gray-700"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option value="jobs">All Jobs</option>
                  <option value="remote">Remote Jobs</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              
              <button 
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md mt-3 md:mt-0 ml-0 md:ml-2 transition-colors duration-300"
              >
                Search
              </button>
            </form>
            
            <div className="flex flex-wrap gap-2 text-sm text-white/80">
              <span>Popular:</span>
              {['Software Engineer', 'Marketing', 'Product Manager', 'UX Designer'].map((term, index) => (
                <button 
                  key={index}
                  className="border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 transition-colors duration-300"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-400 rounded-full opacity-70 blur-xl"></div>
              
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-primary-50 p-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-primary-600">Featured Job</h3>
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">New</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary-600">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Senior Product Designer</h4>
                      <p className="text-gray-600">AcmeTech Inc.</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm text-gray-600">San Francisco (Remote Available)</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm text-gray-600">Full-time</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600">Salary</span>
                      <span className="font-bold text-primary-600">$120,000 - $150,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Posted</span>
                      <span className="text-sm text-gray-600">2 days ago</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['UI/UX', 'Product Design', 'Figma', 'User Research'].map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href="/jobs/senior-product-designer"
                    className="block w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white text-center font-medium rounded-lg transition-colors duration-300"
                  >
                    View Job Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 