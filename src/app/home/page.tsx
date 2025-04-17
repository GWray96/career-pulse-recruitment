'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PainPointsSection from '@/components/home/PainPointsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <WhyChooseSection />
    </main>
  );
} 