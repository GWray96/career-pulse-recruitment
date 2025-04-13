'use client';

import { useState } from 'react';

export default function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const today = new Date();
  const isToday = (date: number) => {
    return date === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  // All days in our calendar are available for booking
  const isAvailable = Array(35).fill(0).map((_, i) => i + 1);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    
    const days = [];
    
    // Empty boxes for days before first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-9 md:h-10 text-center"></div>
      );
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isAvailableDay = isAvailable.includes(day);
      days.push(
        <div 
          key={day} 
          onClick={() => isAvailableDay && handleDateClick(day)}
          className={`
            relative flex items-center justify-center h-9 md:h-10 rounded-md text-sm
            ${isAvailableDay ? 'cursor-pointer hover:bg-primary-light/20 transition-colors duration-150' : 'cursor-not-allowed opacity-40'}
            ${selectedDate === day ? 'bg-primary text-white hover:bg-primary-dark' : ''}
            ${isToday(day) && selectedDate !== day ? 'font-bold border border-primary text-primary' : ''}
          `}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={handlePrevMonth}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-gray-800 font-medium">
          {months[currentMonth]} {currentYear}
        </div>
        <button 
          onClick={handleNextMonth}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
      
      {selectedDate && (
        <div className="mt-4 p-2 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            Selected: <span className="font-semibold">{selectedDate} {months[currentMonth]} {currentYear}</span>
          </p>
          <button className="w-full bg-primary hover:bg-primary-dark text-white text-sm py-2 rounded transition-colors duration-150">
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
} 