import React, { useEffect, useState } from 'react';

interface TechBackgroundProps {
  opacity?: number; // 0.20 to 0.30
  blur?: number; // 2px to 4px
  enableParallax?: boolean;
}

export const TechBackground: React.FC<TechBackgroundProps> = ({
  opacity = 0.25,
  blur = 2.5,
  enableParallax = true,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!enableParallax) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);

  // Smooth parallax offset
  const parallaxOffset = scrollY * 0.12;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep tech base gradient */}
      <div className="absolute inset-0 bg-[#080D14]" />

      {/* Parallax Container */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(0, ${-parallaxOffset}px, 0)`,
          opacity: opacity,
          filter: `blur(${blur}px)`,
        }}
      >
        {/* Exact Architectural Tech Ecosystem Vector matching the user's uploaded visual */}
        <svg
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover max-w-[2200px]"
        >
          <defs>
            {/* Turquoise Glow */}
            <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#2DB6B9" floodOpacity="0.8" />
            </filter>
            <filter id="panelGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2DB6B9" floodOpacity="0.4" />
            </filter>

            {/* Gradients */}
            <linearGradient id="panelBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#103A60" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0A1E33" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DB6B9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#35BAC3" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2DB6B9" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#35BAC3" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* ================= BACKGROUND CIRCUIT CONNECTING BUSSES ================= */}
          <g filter="url(#circuitGlow)" stroke="#2DB6B9" strokeWidth="2.5" strokeOpacity="0.65" strokeLinecap="round">
            {/* Center (YouTube) to Top-Left (Video Editor) */}
            <path d="M 800 480 H 600 V 270 H 530" fill="none" />
            {/* Center to Top-Center (Social/Metrics) */}
            <path d="M 960 420 V 350" fill="none" />
            {/* Center to Top-Right (Podcast/Mic) */}
            <path d="M 1120 480 H 1220 V 260 H 1260" fill="none" />
            {/* Center to Mid-Left (AI Workflow) */}
            <path d="M 800 540 H 620" fill="none" />
            {/* Center to Mid-Right (Flowchart/Funnel) */}
            <path d="M 1120 540 H 1300" fill="none" />
            {/* Center to Bottom-Left (Accounting/Finances) */}
            <path d="M 800 600 H 680 V 710 H 600" fill="none" />
            {/* Center to Bottom-Center (Academic/Career) */}
            <path d="M 960 660 V 730" fill="none" />
            {/* Center to Bottom-Right (Sales Funnel) */}
            <path d="M 1120 600 H 1240 V 720 H 1250" fill="none" />

            {/* Glowing Connection Nodes */}
            <circle cx="800" cy="480" r="4.5" fill="#35BAC3" />
            <circle cx="960" cy="420" r="4.5" fill="#35BAC3" />
            <circle cx="1120" cy="480" r="4.5" fill="#35BAC3" />
            <circle cx="800" cy="540" r="4.5" fill="#35BAC3" />
            <circle cx="1120" cy="540" r="4.5" fill="#35BAC3" />
            <circle cx="800" cy="600" r="4.5" fill="#35BAC3" />
            <circle cx="960" cy="660" r="4.5" fill="#35BAC3" />
            <circle cx="1120" cy="600" r="4.5" fill="#35BAC3" />
          </g>

          {/* ================= 1. CENTRAL PANEL: YOUTUBE & SEARCH HUB ================= */}
          <g id="panel-youtube" filter="url(#panelGlow)">
            <rect x="800" y="420" width="320" height="240" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            {/* Window header */}
            <rect x="800" y="420" width="320" height="34" rx="12" fill="#103A60" fillOpacity="0.8" />
            <circle cx="818" cy="437" r="3.5" fill="#2DB6B9" />
            <circle cx="830" cy="437" r="3.5" fill="#2DB6B9" />
            <circle cx="842" cy="437" r="3.5" fill="#2DB6B9" />
            {/* YouTube logo & search bar */}
            <path d="M 870 432 L 878 437 L 870 442 Z" fill="#2DB6B9" />
            <text x="886" y="440" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk" fontWeight="600">YouTube SEO</text>
            <rect x="975" y="428" width="120" height="18" rx="9" fill="#080D14" stroke="#2DB6B9" strokeWidth="0.8" />
            <text x="990" y="441" fill="#94A3B8" fontSize="9">Search keywords...</text>
            
            {/* Video Cards Grid */}
            <rect x="820" y="470" width="130" height="80" rx="6" fill="#080D14" stroke="#2DB6B9" strokeWidth="1" />
            <polygon points="880,500 895,510 880,520" fill="#2DB6B9" />
            <rect x="820" y="560" width="110" height="8" rx="4" fill="#35BAC3" fillOpacity="0.7" />
            <rect x="820" y="575" width="80" height="6" rx="3" fill="#64748B" />

            <rect x="965" y="470" width="135" height="80" rx="6" fill="#080D14" stroke="#2DB6B9" strokeWidth="1" />
            <rect x="975" y="485" width="115" height="8" rx="4" fill="#35BAC3" fillOpacity="0.7" />
            <rect x="975" y="505" width="95" height="6" rx="3" fill="#64748B" />
            <rect x="975" y="525" width="70" height="6" rx="3" fill="#64748B" />
            <rect x="965" y="560" width="135" height="24" rx="4" fill="#103A60" fillOpacity="0.4" />
            <text x="980" y="576" fill="#2DB6B9" fontSize="10" fontWeight="600">High CTR & SEO</text>
          </g>

          {/* ================= 2. TOP-LEFT: VIDEO EDITOR TIMELINE ================= */}
          <g id="panel-video-editor" filter="url(#panelGlow)">
            <rect x="230" y="160" width="300" height="200" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="230" y="160" width="300" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <circle cx="248" cy="175" r="3.5" fill="#2DB6B9" />
            <circle cx="260" cy="175" r="3.5" fill="#2DB6B9" />
            <circle cx="272" cy="175" r="3.5" fill="#2DB6B9" />
            <text x="288" y="179" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Video Cut & Motion</text>
            
            {/* Dual Video Viewports */}
            <rect x="245" y="200" width="125" height="75" rx="6" fill="#080D14" stroke="#1E3A5F" />
            <polygon points="300,230 315,237 300,245" fill="#2DB6B9" />
            <rect x="385" y="200" width="125" height="75" rx="6" fill="#080D14" stroke="#1E3A5F" />
            <polygon points="440,230 455,237 440,245" fill="#2DB6B9" />
            
            {/* Timeline Tracks */}
            <rect x="245" y="285" width="265" height="12" rx="3" fill="#103A60" />
            <rect x="280" y="285" width="110" height="12" rx="3" fill="#2DB6B9" fillOpacity="0.9" />
            <rect x="245" y="305" width="265" height="10" rx="2" fill="#080D14" />
            {/* Audio wave in track */}
            <path d="M 250 310 Q 260 306 270 310 T 290 310 T 310 310 T 330 310 T 350 310 T 370 310 T 390 310 T 410 310 T 430 310 T 450 310 T 470 310 T 490 310" stroke="#35BAC3" strokeWidth="2" fill="none" />
            <line x1="340" y1="280" x2="340" y2="345" stroke="#FFFFFF" strokeWidth="2" />
          </g>

          {/* ================= 3. TOP-CENTER: SOCIAL METRICS ================= */}
          <g id="panel-social" filter="url(#panelGlow)">
            <rect x="810" y="110" width="300" height="230" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="810" y="110" width="300" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="830" y="129" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Analytics & Audiência</text>
            
            {/* KPI Cards */}
            <rect x="830" y="150" width="120" height="50" rx="6" fill="#080D14" stroke="#1D3557" />
            <text x="840" y="168" fill="#94A3B8" fontSize="9">Followers Growth</text>
            <text x="840" y="190" fill="#2DB6B9" fontSize="16" fontWeight="bold">330K +</text>

            <rect x="965" y="150" width="125" height="50" rx="6" fill="#080D14" stroke="#1D3557" />
            <text x="975" y="168" fill="#94A3B8" fontSize="9">Taxa de Conversão</text>
            <text x="975" y="190" fill="#35BAC3" fontSize="16" fontWeight="bold">14.8%</text>

            {/* Growth Wave Curve */}
            <path d="M 830 290 Q 880 280 930 250 T 1030 220 T 1080 210" stroke="#2DB6B9" strokeWidth="3" fill="none" />
            <path d="M 830 290 Q 880 280 930 250 T 1030 220 T 1080 210 V 310 H 830 Z" fill="url(#chartGrad)" />
          </g>

          {/* ================= 4. TOP-RIGHT: PODCAST & AUDIO WAVEFORM ================= */}
          <g id="panel-podcast" filter="url(#panelGlow)">
            <rect x="1260" y="160" width="300" height="190" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="1260" y="160" width="300" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="1280" y="179" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Podcast & Masterização</text>

            {/* Microphone Icon */}
            <rect x="1395" y="210" width="30" height="50" rx="15" fill="#080D14" stroke="#2DB6B9" strokeWidth="2.5" />
            <path d="M 1385 235 C 1385 265 1435 265 1435 235" stroke="#2DB6B9" strokeWidth="2.5" fill="none" />
            <line x1="1410" y1="265" x2="1410" y2="285" stroke="#2DB6B9" strokeWidth="2.5" />
            <line x1="1395" y1="285" x2="1425" y2="285" stroke="#2DB6B9" strokeWidth="2.5" />

            {/* Waveform Left & Right */}
            <g stroke="#2DB6B9" strokeWidth="3" strokeLinecap="round">
              <line x1="1300" y1="235" x2="1300" y2="245" />
              <line x1="1315" y1="225" x2="1315" y2="255" />
              <line x1="1330" y1="210" x2="1330" y2="270" />
              <line x1="1345" y1="220" x2="1345" y2="260" />
              <line x1="1360" y1="230" x2="1360" y2="250" />
              <line x1="1375" y1="235" x2="1375" y2="245" />

              <line x1="1445" y1="235" x2="1445" y2="245" />
              <line x1="1460" y1="230" x2="1460" y2="250" />
              <line x1="1475" y1="215" x2="1475" y2="265" />
              <line x1="1490" y1="210" x2="1490" y2="270" />
              <line x1="1505" y1="225" x2="1505" y2="255" />
              <line x1="1520" y1="235" x2="1520" y2="245" />
            </g>
            <text x="1360" y="325" fill="#94A3B8" fontSize="10">Masterização Broadcast LUFS</text>
          </g>

          {/* ================= 5. MID-LEFT: AI AGENTS & WORKFLOWS ================= */}
          <g id="panel-ai" filter="url(#panelGlow)">
            <rect x="150" y="440" width="310" height="190" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="150" y="440" width="310" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="170" y="459" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Inteligência Artificial & Automação</text>

            {/* Input nodes */}
            <rect x="170" y="490" width="55" height="22" rx="4" fill="#080D14" stroke="#2DB6B9" />
            <rect x="170" y="522" width="55" height="22" rx="4" fill="#080D14" stroke="#2DB6B9" />
            <rect x="170" y="554" width="55" height="22" rx="4" fill="#080D14" stroke="#2DB6B9" />

            {/* Central AI Brain */}
            <rect x="270" y="505" width="70" height="50" rx="8" fill="#103A60" stroke="#35BAC3" strokeWidth="2" />
            <text x="292" y="535" fill="#FFFFFF" fontSize="15" fontWeight="bold">AI</text>

            {/* Output nodes */}
            <rect x="385" y="515" width="55" height="30" rx="4" fill="#080D14" stroke="#2DB6B9" />

            {/* Connecting flow lines with arrows */}
            <path d="M 225 501 H 270" stroke="#2DB6B9" strokeWidth="1.5" />
            <path d="M 225 533 H 270" stroke="#2DB6B9" strokeWidth="1.5" />
            <path d="M 225 565 H 270" stroke="#2DB6B9" strokeWidth="1.5" />
            <path d="M 340 530 H 385" stroke="#2DB6B9" strokeWidth="1.5" />
          </g>

          {/* ================= 6. MID-RIGHT: FLOWCHART & LOGIC ================= */}
          <g id="panel-flowchart" filter="url(#panelGlow)">
            <rect x="1330" y="400" width="310" height="200" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="1330" y="400" width="310" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="1350" y="419" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Arquitetura de Processos</text>

            {/* Nodes */}
            <rect x="1360" y="460" width="60" height="30" rx="6" fill="#080D14" stroke="#2DB6B9" />
            <polygon points="1470,455 1500,475 1470,495 1440,475" fill="#103A60" stroke="#35BAC3" strokeWidth="2" />
            
            {/* Neural cluster */}
            <circle cx="1570" cy="460" r="5" fill="#2DB6B9" />
            <circle cx="1590" cy="480" r="5" fill="#2DB6B9" />
            <circle cx="1560" cy="500" r="5" fill="#2DB6B9" />
            <circle cx="1605" cy="510" r="5" fill="#2DB6B9" />
            <line x1="1570" y1="460" x2="1590" y2="480" stroke="#2DB6B9" strokeWidth="1" />
            <line x1="1590" y1="480" x2="1560" y2="500" stroke="#2DB6B9" strokeWidth="1" />
            <line x1="1560" y1="500" x2="1605" y2="510" stroke="#2DB6B9" strokeWidth="1" />

            <line x1="1420" y1="475" x2="1440" y2="475" stroke="#2DB6B9" strokeWidth="1.5" />
            <line x1="1500" y1="475" x2="1560" y2="475" stroke="#2DB6B9" strokeWidth="1.5" />
            <rect x="1440" y="535" width="60" height="26" rx="6" fill="#080D14" stroke="#2DB6B9" />
            <path d="M 1470 495 V 535" stroke="#2DB6B9" strokeWidth="1.5" />
          </g>

          {/* ================= 7. BOTTOM-LEFT: CONTABILIDADE & FINANCEIRO ================= */}
          <g id="panel-accounting" filter="url(#panelGlow)">
            <rect x="280" y="670" width="330" height="240" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="280" y="670" width="330" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="300" y="689" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Contabilidade Digital & Métricas</text>

            <rect x="300" y="715" width="135" height="75" rx="6" fill="#080D14" stroke="#1D3557" />
            <text x="310" y="730" fill="#94A3B8" fontSize="9">Profit / Lucro Operacional</text>
            <path d="M 310 770 Q 340 750 370 760 T 425 735" stroke="#2DB6B9" strokeWidth="2" fill="none" />

            <rect x="450" y="715" width="145" height="75" rx="6" fill="#080D14" stroke="#1D3557" />
            <text x="460" y="730" fill="#94A3B8" fontSize="9">Eficiência Tributária</text>
            <g fill="#2DB6B9" fillOpacity="0.8">
              <rect x="465" y="760" width="12" height="20" rx="2" />
              <rect x="485" y="745" width="12" height="35" rx="2" />
              <rect x="505" y="750" width="12" height="30" rx="2" />
              <rect x="525" y="735" width="12" height="45" rx="2" />
            </g>

            {/* Donut Chart */}
            <circle cx="360" cy="845" r="30" stroke="#103A60" strokeWidth="14" fill="none" />
            <circle cx="360" cy="845" r="30" stroke="#2DB6B9" strokeWidth="14" strokeDasharray="140 50" fill="none" />
            <text x="410" y="845" fill="#E2E8F0" fontSize="11" fontWeight="600">Blindagem Fiscal</text>
            <text x="410" y="860" fill="#94A3B8" fontSize="9">Zero passivos e multas</text>
          </g>

          {/* ================= 8. BOTTOM-CENTER: ACADEMIC DIPLOMA & CURRÍCULO ================= */}
          <g id="panel-academic" filter="url(#panelGlow)">
            <rect x="830" y="710" width="260" height="210" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="830" y="710" width="260" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="850" y="729" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Acadêmico & Carreira Executiva</text>

            {/* Document icon */}
            <rect x="860" y="760" width="60" height="85" rx="4" fill="#080D14" stroke="#2DB6B9" strokeWidth="1.5" />
            <circle cx="890" cy="780" r="8" stroke="#2DB6B9" strokeWidth="1" fill="none" />
            <line x1="870" y1="805" x2="910" y2="805" stroke="#64748B" strokeWidth="2" />
            <line x1="870" y1="815" x2="910" y2="815" stroke="#64748B" strokeWidth="2" />
            <line x1="870" y1="825" x2="900" y2="825" stroke="#64748B" strokeWidth="2" />

            {/* Book & Diploma */}
            <rect x="940" y="770" width="65" height="75" rx="4" fill="#103A60" stroke="#35BAC3" strokeWidth="1.5" />
            <circle cx="915" cy="875" r="14" fill="#2DB6B9" />
            <polygon points="915,868 919,876 928,877 921,883 923,892 915,887 907,892 909,883 902,877 911,876" fill="#080D14" />
            {/* Pencil */}
            <line x1="1025" y1="765" x2="1005" y2="820" stroke="#2DB6B9" strokeWidth="3" strokeLinecap="round" />
            <text x="860" y="905" fill="#94A3B8" fontSize="10">ABNT / APA & Formatação ATS</text>
          </g>

          {/* ================= 9. BOTTOM-RIGHT: SALES FUNNEL ================= */}
          <g id="panel-funnel" filter="url(#panelGlow)">
            <rect x="1270" y="660" width="310" height="230" rx="12" fill="url(#panelBg)" stroke="#2DB6B9" strokeWidth="1.8" />
            <rect x="1270" y="660" width="310" height="30" rx="12" fill="#103A60" fillOpacity="0.8" />
            <text x="1290" y="679" fill="#E2E8F0" fontSize="11" fontFamily="Space Grotesk">Funis de Vendas & Conversão</text>

            {/* Funnel geometry */}
            <polygon points="1300,720 1380,720 1350,770 1330,770" fill="#103A60" stroke="#35BAC3" strokeWidth="2" />
            <rect x="1332" y="770" width="16" height="30" rx="2" fill="#2DB6B9" />

            {/* Conversion bars */}
            <rect x="1420" y="720" width="130" height="14" rx="4" fill="#103A60" />
            <rect x="1420" y="720" width="120" height="14" rx="4" fill="#2DB6B9" />
            <text x="1430" y="731" fill="#080D14" fontSize="9" fontWeight="bold">Tráfego Qualificado</text>

            <rect x="1420" y="745" width="130" height="14" rx="4" fill="#103A60" />
            <rect x="1420" y="745" width="85" height="14" rx="4" fill="#35BAC3" />
            <text x="1430" y="756" fill="#080D14" fontSize="9" fontWeight="bold">Leads Engajados</text>

            <rect x="1420" y="770" width="130" height="14" rx="4" fill="#103A60" />
            <rect x="1420" y="770" width="45" height="14" rx="4" fill="#24A1A4" />
            <text x="1430" y="781" fill="#FFFFFF" fontSize="8" fontWeight="bold">Vendas Fechadas</text>

            <text x="1310" y="840" fill="#94A3B8" fontSize="10">Conversão Direta para WhatsApp & Checkout</text>
          </g>
        </svg>
      </div>

      {/* Radial vignette and gradient mask to guarantee WCAG AAA text contrast across the whole page */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#080D14]/90 via-[#080D14]/75 to-[#080D14]/95" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#080D14_85%)]" 
      />
    </div>
  );
};
