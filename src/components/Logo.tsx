
import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo = ({ size = 40 }: LogoProps) => {
  return (
    <div 
      style={{ width: size, height: size }} 
      className="rounded-full bg-gradient-to-br from-pet-primary via-pet-secondary to-pet-light flex items-center justify-center text-white font-bold"
    >
      <svg 
        width={size * 0.6} 
        height={size * 0.6} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" 
          fill="white"
        />
        <path 
          d="M16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z"
          fill="white"
        />
        <path 
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
          fill="white"
        />
        <path 
          d="M16.5 15C16.5 16.3807 14.4853 18 12 18C9.51472 18 7.5 16.3807 7.5 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
