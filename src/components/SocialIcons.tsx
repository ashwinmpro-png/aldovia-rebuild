import type { SVGProps } from "react";

// Simple monochrome social glyphs. Brand icons were removed from lucide-react in recent versions.

export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 21v-8h2.5l.5-3H14V8.2c0-.9.3-1.5 1.5-1.5H17V4.1C16.6 4 15.7 4 14.9 4 13 4 12 5.2 12 7.5V10H9.5v3H12v8" />
    </svg>
  );
}

export function LinkedinGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="10" x2="8" y2="17" />
      <circle cx="8" cy="7" r="0.75" fill="currentColor" stroke="none" />
      <path d="M12 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
      <line x1="12" y1="10" x2="12" y2="17" />
    </svg>
  );
}
