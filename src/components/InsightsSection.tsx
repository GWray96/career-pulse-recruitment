'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Load when within 100px of viewport
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const insights = [
    {
      title: "The Future of Remote Work",
      description: "Explore how remote work is reshaping recruitment and what it means for your career.",
      category: "Recruitment",
      color: "primary",
      image: "/images/backgrounds/annie-spratt-QckxruozjRg-unsplash.jpg"
    },
    {
      title: "Skills for the Digital Age",
      description: "Discover the essential skills needed to thrive in today's digital workplace.",
      category: "Career Growth",
      color: "accent",
      image: "/images/backgrounds/cherrydeck-05gac-Qn0k4-unsplash.jpg"
    },
    {
      title: "AI in Recruitment",
      description: "How artificial intelligence is transforming the recruitment process.",
      category: "Industry Trends",
      color: "primary",
      image: "/images/backgrounds/the-jopwell-collection-YBMt6ETGTWA-unsplash.jpg"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements - static instead of animated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-charcoal mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg text-deep-charcoal/70 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in recruitment and career development
          </p>
        </div>

        {isVisible ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-soft hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-200 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className={`inline-block px-3 py-1 bg-${insight.color}/90 text-white text-sm rounded-full`}>
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold text-deep-charcoal mb-3 group-hover:text-${insight.color} transition-colors duration-200`}>
                    {insight.title}
                  </h3>
                  <p className="text-deep-charcoal/70 mb-4">
                    {insight.description}
                  </p>
                  <Link 
                    href="/insights" 
                    className={`inline-flex items-center text-${insight.color} font-medium`}
                  >
                    <span>Read more</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Placeholder during loading
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 