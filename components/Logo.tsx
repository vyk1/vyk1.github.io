type LogoProps = {
  size?: number;
  color?: string;
  className?: string;
};

/**
 * Monograma VBM — geometria vinda do mockup de referência (hero-mockup.html).
 * `style` inline (não CSS Module/sx) garante que width/height/flex-shrink
 * sempre se apliquem, independente de onde o componente for usado.
 */
export default function Logo({ size = 40, color = "currentColor", className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="VBM"
      className={className}
      style={{ width: size, height: size, flexShrink: 0, display: "block" }}
    >
      <polyline points="15,80 30,20 50,80" fill="none" stroke={color} strokeWidth={2.2} />
      <path d="M30,20 L38,50 L30,80" fill="none" stroke={color} strokeWidth={2.2} />
      <path
        d="M50,80 Q60,55 72,60 Q84,65 78,45 Q74,32 85,30"
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <circle cx="85" cy="30" r="1.2" fill={color} />
    </svg>
  );
}
