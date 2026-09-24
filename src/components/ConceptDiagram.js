import React from "react";

export default function ConceptDiagram({ ariaLabel }) {
  return (
    <div className="concept-diagram">
      <svg
        viewBox="0 0 1200 520"
        role="img"
        aria-label={ariaLabel}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="jlr-arrow-blue"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#008FBF" />
          </marker>
        </defs>

        <rect x="0" y="0" width="1200" height="520" fill="#FFFFFF" />

        <rect x="0" y="96" width="1200" height="330" fill="#E8F4F8" />

        <g stroke="#008FBF" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M 40 130 Q 70 118 100 130 T 160 130 T 220 130" />
          <path d="M 320 150 Q 350 138 380 150 T 440 150 T 500 150" />
          <path d="M 700 120 Q 730 108 760 120 T 820 120 T 880 120" />
          <path d="M 900 160 Q 930 148 960 160 T 1020 160 T 1080 160" />
        </g>

        <line x1="0" y1="96" x2="1200" y2="96" stroke="#202C3C" strokeWidth="2" />

        <text x="24" y="64" fontSize="12" fontFamily="sans-serif" fill="#202C3C" letterSpacing="0.06em" textTransform="uppercase">
          LAKE SURFACE
        </text>

        <g>
          <rect x="80" y="40" width="220" height="150" fill="#FFFFFF" stroke="#202C3C" strokeWidth="2" />
          <text x="190" y="80" textAnchor="middle" fontSize="12" fontFamily="sans-serif" fill="#202C3C" letterSpacing="0.06em">
            SHORE FACILITY
          </text>
          <text x="190" y="110" textAnchor="middle" fontSize="12" fontFamily="sans-serif" fill="#202C3C">
            POWER / NETWORK
          </text>
          <line x1="104" y1="136" x2="276" y2="136" stroke="#008FBF" strokeWidth="2" />
          <line x1="104" y1="152" x2="276" y2="152" stroke="#008FBF" strokeWidth="2" />
        </g>

        <path
          d="M 300 140 C 420 170 480 150 560 200"
          fill="none"
          stroke="#202C3C"
          strokeWidth="2"
        />
        <path
          d="M 300 160 C 420 190 480 170 560 220"
          fill="none"
          stroke="#202C3C"
          strokeWidth="2"
        />

        <g>
          <polygon
            points="560,180 740,180 820,240 820,360 740,420 560,420 480,360 480,240"
            fill="#E8F4F8"
            stroke="#202C3C"
            strokeWidth="2"
          />
          <line x1="480" y1="300" x2="820" y2="300" stroke="#202C3C" strokeWidth="2" />
          <line x1="650" y1="240" x2="650" y2="360" stroke="#202C3C" strokeWidth="2" />
          <line x1="650" y1="180" x2="650" y2="420" stroke="#EF4136" strokeWidth="2" />
          <line x1="480" y1="240" x2="560" y2="180" stroke="#EF4136" strokeWidth="1" />
          <line x1="820" y1="240" x2="740" y2="180" stroke="#EF4136" strokeWidth="1" />
          <text x="650" y="450" textAnchor="middle" fontSize="12" fontFamily="sans-serif" fill="#202C3C" letterSpacing="0.06em">
            SUBMERGED MODULE
          </text>
        </g>

        <path
          d="M 720 330 Q 780 300 850 320"
          fill="none"
          stroke="#008FBF"
          strokeWidth="2"
          markerEnd="url(#jlr-arrow-blue)"
        />
        <path
          d="M 580 350 Q 520 380 450 360"
          fill="none"
          stroke="#008FBF"
          strokeWidth="2"
          markerEnd="url(#jlr-arrow-blue)"
        />
        <text x="880" y="316" fontSize="12" fontFamily="sans-serif" fill="#008FBF">
          HEAT
        </text>
        <text x="392" y="352" fontSize="12" fontFamily="sans-serif" fill="#008FBF">
          HEAT
        </text>

        <line x1="0" y1="470" x2="1200" y2="470" stroke="#202C3C" strokeWidth="2" />
        <text x="24" y="500" fontSize="12" fontFamily="sans-serif" fill="#202C3C" letterSpacing="0.06em" textTransform="uppercase">
          LAKE BED
        </text>
      </svg>
    </div>
  );
}
