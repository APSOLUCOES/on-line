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
      height={size} 
      viewBox="0 0 160 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="AP Soluções Logo Símbolo"
    >
      <defs>
        {/* Glow filter for tech accents */}
        <filter id="apGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2DB6B9" floodOpacity="0.25" />
        </filter>
        <linearGradient id="apPetrolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#103A60" />
          <stop offset="100%" stopColor="#154B78" />
        </linearGradient>
        <linearGradient id="apTurquoiseGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#24A1A4" />
          <stop offset="50%" stopColor="#2DB6B9" />
          <stop offset="100%" stopColor="#3CD6DC" />
        </linearGradient>
      </defs>

      {/* Letter 'A' in Petrol Blue (#103A60) */}
      <g id="letter-A">
        {/* Main body of letter A with dynamic angled cuts */}
        <path
          d="M 52 16 L 36 16 C 33 16 31 18 30 21 L 4 94 C 3 97 5 100 8 100 L 22 100 C 25 100 27 98 28 95 L 36 71 L 58 71 L 64 88 C 65 91 68 93 71 93 L 83 83 L 52 16 Z"
          fill="url(#apPetrolGrad)"
        />
        {/* Inner triangle cutout of letter A */}
        <path
          d="M 46 36 L 39 58 L 54 58 Z"
          fill="#080D14"
        />
      </g>

      {/* Letter 'P' with Ascending Growth Arrow in Vibrant Turquoise (#2DB6B9) */}
      <g id="letter-P" filter="url(#apGlow)">
        {/* Vertical Stem of P */}
        <path
          d="M 78 40 L 78 98 C 78 100 80 102 83 102 L 94 102 C 96 102 98 100 98 98 L 98 40 Z"
          fill="url(#apTurquoiseGrad)"
        />
        {/* Small angled notch / accent at base of P stem */}
        <path
          d="M 103 84 L 103 100 C 103 102 105 103 107 102 L 120 102 Z"
          fill="url(#apTurquoiseGrad)"
        />
        {/* The dynamic P loop flowing seamlessly into the top-right ascending arrow */}
        <path
          d="M 78 38 C 78 38 98 36 112 48 C 122 56 125 70 120 82 C 114 94 100 96 85 94 L 85 82 C 94 83 103 81 106 74 C 109 68 107 60 100 55 C 93 49 84 49 78 49 Z"
          fill="url(#apTurquoiseGrad)"
        />
        {/* The Arrow Head pointing diagonally upward to the top right (growth & scale) */}
        <path
          d="M 116 38 L 132 10 L 104 22 L 114 27 L 98 43 L 107 52 L 123 36 L 128 46 Z"
          fill="url(#apTurquoiseGrad)"
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
