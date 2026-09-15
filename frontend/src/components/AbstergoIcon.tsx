import React from 'react';

interface AbstergoIconProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  size?: number;
}

export default function AbstergoIcon({
  className = 'w-9 h-9',
  variant = 'dark',
  size = 36,
}: AbstergoIconProps) {
  // Gradients for luxury gold finishes
  const idPrefix = React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Abstergo Clinical Web Architecture Emblem"
    >
      <defs>
        {/* Luxury Champagne Gold Linear Gradient */}
        <linearGradient
          id={`${idPrefix}-gold-left`}
          x1="20"
          y1="90"
          x2="50"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8C6D46" />
          <stop offset="35%" stopColor="#C5A880" />
          <stop offset="70%" stopColor="#E5D1B8" />
          <stop offset="100%" stopColor="#C5A880" />
        </linearGradient>

        <linearGradient
          id={`${idPrefix}-gold-right`}
          x1="50"
          y1="10"
          x2="85"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E5D1B8" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#C5A880" />
          <stop offset="100%" stopColor="#7E6038" />
        </linearGradient>

        <linearGradient
          id={`${idPrefix}-cross-dark`}
          x1="40"
          y1="40"
          x2="60"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1E2024" />
          <stop offset="100%" stopColor="#121316" />
        </linearGradient>
      </defs>

      {/* Rounded Luxury Container Box */}
      {variant === 'dark' && (
        <rect
          width="100"
          height="100"
          rx="22"
          fill="#121316"
          className="transition-colors duration-300"
        />
      )}

      {variant === 'light' && (
        <rect
          width="100"
          height="100"
          rx="22"
          fill="#FAF9F6"
          stroke="rgba(197, 168, 128, 0.35)"
          strokeWidth="1.5"
          className="transition-colors duration-300"
        />
      )}

      {/* Group centered inside the 100x100 box */}
      <g transform="translate(8, 6) scale(0.84)">
        {/* Left Arch / Ribbon of the 'A' */}
        <path
          d="M 50 14 
             C 45 14, 38 22, 33 34 
             C 26 49, 18 70, 16 86 
             C 21 86, 28 84, 36 78 
             C 41 68, 45 56, 47 48
             C 44 48, 41 48, 41 40
             C 47 40, 48 30, 50 14 Z"
          fill={`url(#${idPrefix}-gold-left)`}
        />

        {/* Right Arch / Ribbon of the 'A' */}
        <path
          d="M 50 14 
             C 55 14, 62 22, 67 34 
             C 74 49, 82 70, 84 86 
             C 79 86, 72 83, 64 76 
             C 58 65, 54 53, 53 48
             C 56 48, 59 48, 59 40
             C 53 40, 52 30, 50 14 Z"
          fill={`url(#${idPrefix}-gold-right)`}
        />

        {/* Central Clinical Medical Cross */}
        <path
          d="M 45 36
             H 55
             V 44
             H 63
             V 52
             H 55
             V 64
             H 45
             V 52
             H 37
             V 44
             H 45
             Z"
          fill={variant === 'dark' ? '#FDFCFB' : '#121316'}
          className="drop-shadow-xs"
        />
      </g>
    </svg>
  );
}
