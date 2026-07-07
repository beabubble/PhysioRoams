import React from 'react';

// Neck Pain Icon: Head and neck with waves indicating pain
export function NeckPainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Head profile */}
      <path d="M40 25c2-6 7-10 13-10s11 4 12 10c1 4-1 8-3 10-3 3-5 5-5 8v12h-10V43c0-3-2-5-5-8-2-2-4-6-3-10z" />
      {/* Shoulders */}
      <path d="M30 75c5-10 12-15 22-15s17 5 22 15" />
      {/* Neck lines */}
      <path d="M47 55h10M49 49h6" />
      {/* Pain indicators around the neck */}
      <path d="M33 42c2 1 4 1 5-1M61 41c1 2 3 2 5 1" strokeWidth="2" strokeDasharray="1 1" />
      <path d="M30 48c3 2 6 2 8-1M66 47c1 3 4 3 6 0" strokeWidth="2" />
    </svg>
  );
}

// Shoulder Pain Icon: Upper torso with stress waves on the shoulder joint
export function ShoulderPainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Head outline */}
      <circle cx="50" cy="25" r="10" />
      {/* Torso & Shoulders */}
      <path d="M25 75c3-12 10-18 25-18s22 6 25 18" />
      {/* Neck */}
      <path d="M47 35v7m6-7v7" />
      {/* Pain waves on the left shoulder */}
      <path d="M18 50c1-3 4-5 7-4M15 44c2-4 6-6 10-5" strokeWidth="2" />
      {/* Sparkle/Pain focal point */}
      <circle cx="23" cy="55" r="3" fill="currentColor" stroke="none" />
      <path d="M23 48v4M23 58v4M17 55h4M27 55h4" strokeWidth="1.5" />
    </svg>
  );
}

// Back Pain Icon: Rear view of back with stress marks along the spine
export function BackPainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Head back */}
      <path d="M50 32c6 0 11-5 11-11S56 10 50 10s-11 5-11 11 5 11 11 11z" />
      {/* Neck */}
      <path d="M48 32v6h4v-6" />
      {/* Back and shoulders */}
      <path d="M25 75c3-18 10-25 25-25s22 7 25 25" />
      {/* Spine line */}
      <path d="M50 50v20" strokeDasharray="3 3" />
      {/* Pain indicators in the lower back (L1-L5) */}
      <path d="M43 62l-5-2M57 62l5-2" />
      <path d="M41 68l-6-1M59 68l6-1" />
      {/* Pain radiating waves */}
      <path d="M40 56c4 3 16 3 20 0" strokeWidth="2" />
      <path d="M37 64c5 5 21 5 26 0" strokeWidth="2" />
    </svg>
  );
}

// Posture Issues Icon: Side profile showing spine alignment
export function PostureIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Head profile side view */}
      <path d="M48 15c5 0 9 4 9 9s-3 8-7 9h-5v-18" />
      {/* Chin & Neck */}
      <path d="M45 33c3 3 5 4 5 7" />
      {/* Spinal column curve - showing curvature/misalignment issues */}
      <path d="M50 40c-2 6-4 10-2 15s4 10 2 15-5 10-5 10" strokeWidth="3" />
      {/* Chest/Abdomen profile */}
      <path d="M38 43c4 5 5 12 2 18s-4 10-4 19" />
      {/* Back posture warning lines */}
      <path d="M58 45l4-1M59 55l4 1M56 65l4 2" strokeWidth="2" />
    </svg>
  );
}
