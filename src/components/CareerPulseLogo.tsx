import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export default function CareerPulseLogo({ variant = 'default', size = 'medium' }: LogoProps) {
  const iconSize = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12'
  };
  
  const textSize = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };
  
  const textColor = {
    default: 'text-deep-navy',
    light: 'text-white',
    dark: 'text-deep-navy'
  };
  
  const secondaryTextColor = {
    default: 'text-light-grey',
    light: 'text-white/70',
    dark: 'text-charcoal-grey/70'
  };
  
  const iconColor = {
    default: 'text-pulse-orange',
    light: 'text-pulse-orange',
    dark: 'text-pulse-orange'
  };
  
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Pulse Icon */}
      <div className={`${iconSize[size]} bg-white rounded-full flex items-center justify-center relative`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-3/4 h-3/4 ${iconColor[variant]}`}
        >
          <path 
            d="M3 12h4l3-9 4 18 3-9h4" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold ${textSize[size]} ${textColor[variant]}`}>
          CareerPulse
        </span>
        <span className={`text-xs ${secondaryTextColor[variant]}`}>
          Limited
        </span>
      </div>
    </Link>
  );
} 