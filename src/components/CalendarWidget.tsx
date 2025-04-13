'use client';

import Link from 'next/link';

export default function CalendarWidget() {
  // Get current date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  // Generate calendar grid (simplified)
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-deep-charcoal">
          {currentMonth} {currentYear}
        </h3>
        <p className="text-sm text-gray-500">Book a consultation call</p>
      </div>
      
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar days - just showing a few sample days */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          const isToday = day === currentDay;
          
          // Simplified display
          if (day > 31) return <div key={day} className="h-8"></div>;
          
          return (
            <div 
              key={day}
              className={`
                h-8 flex items-center justify-center text-sm rounded-full cursor-pointer
                ${isToday 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-gray-100 text-gray-700'}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
      
      <Link 
        href="/booking"
        className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
      >
        Book a Call
      </Link>
    </div>
  );
} 