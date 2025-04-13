'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  symbol?: string;
}

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '', symbol = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="flex items-center justify-center">
      {symbol && <span className="mr-2 text-3xl text-primary">{symbol}</span>}
      <div className="font-bold text-4xl md:text-5xl text-gray-800">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Proven Results for Employers & Candidates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <AnimatedCounter end={5000} suffix="+" symbol="🏢" />
            <p className="mt-3 text-gray-600 font-medium">Employers Served</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <AnimatedCounter end={98} suffix="%" symbol="📊" />
            <p className="mt-3 text-gray-600 font-medium">Placement Success Rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <AnimatedCounter end={25000} suffix="+" symbol="👥" />
            <p className="mt-3 text-gray-600 font-medium">Candidates Placed</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <AnimatedCounter end={45} prefix="$" suffix="K" symbol="💰" />
            <p className="mt-3 text-gray-600 font-medium">Average Salary Increase</p>
          </div>
        </div>
      </div>
    </section>
  );
} 