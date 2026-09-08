import React from 'react';

interface LogoProps {
  variant?: 'full' | 'symbol' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const APLogoSymbol: React.FC<{ size?: number; className?: string }> = ({ 
  size = 48, 
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={(size * 142) / 196} 
      viewBox="0 0 196 142" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="AP Soluções Logo Símbolo"
    >
      <defs>
        {/* Glow filter for high-tech digital accent */}
        <filter id="apCyanGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2DB6B9" floodOpacity="0.3" />
        </filter>
        {/* Exact brand gradients */}
        <linearGradient id="apNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C5588" />
          <stop offset="100%" stopColor="#113C64" />
        </linearGradient>
        <linearGradient id="apCyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#229FA2" />
          <stop offset="50%" stopColor="#2DB6B9" />
          <stop offset="100%" stopColor="#3CD6DC" />
        </linearGradient>
      </defs>

      {/* Letter 'A' in Corporate Navy (#113C64 - #1C5588) with Transparent Inner Counter */}
      <g id="logo-letter-A">
        <path
          d="M 24 126 L 66 32 L 78 32 L 97 74 L 88 89 L 49 98 L 41 126 Z M 69 50 L 83 74 L 56 82 Z"
          fill="url(#apNavyGrad)"
          fillRule="evenodd"
        />
      </g>

      {/* Letter 'P' in Vibrant Turquoise (#2DB6B9) with Ascending Growth Arrow */}
      <g id="logo-letter-P" filter="url(#apCyanGlow)">
        {/* Vertical Stem + Top Horizontal Bar */}
        <path
          d="M 103 32 L 140 32 L 140 47 L 118 47 L 118 126 L 103 126 Z"
          fill="url(#apCyanGrad)"
        />

        {/* Bottom Right Precision Triangular Fin */}
        <polygon
          points="122,103 122,126 137,126"
          fill="url(#apCyanGrad)"
        />

        {/* Dynamic Curved Loop & Ascending Scale Arrow Head */}
        <path
          d="M 118 75 C 137 75 147 63 147 45 L 138 27 L 169 11 L 167 45 L 159 37 C 162 55 151 78 132 88 C 125 91 118 90 118 90 Z"
          fill="url(#apCyanGrad)"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  size = 'md',
  className = '',
  showSubtitle = true
}) => {
  const sizeMap = {
    sm: { symbol: 32, title: 'text-lg', sub: 'text-[10px]' },
    md: { symbol: 42, title: 'text-xl', sub: 'text-[11px]' },
    lg: { symbol: 52, title: 'text-2xl', sub: 'text-xs' },
    xl: { symbol: 64, title: 'text-3xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  if (variant === 'symbol') {
    return <APLogoSymbol size={currentSize.symbol} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="brand-logo">
      <APLogoSymbol size={currentSize.symbol} />
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-wider font-extrabold font-display leading-tight">
          <span className="text-white">AP</span>
          <span className="ml-1.5 text-[#2DB6B9]">SOLUÇÕES</span>
        </div>
        {showSubtitle && (
          <span className={`${currentSize.sub} font-medium tracking-[0.2em] text-slate-400 uppercase`}>
            Agência Integrada
          </span>
        )}
      </div>
    </div>
  );
};
