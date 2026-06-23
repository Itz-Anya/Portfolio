import { useMemo } from "react";

const BackgroundParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        size: Math.random() * 1.8 + 0.4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        driftDur: 20 + Math.random() * 30,
        driftDelay: -(Math.random() * 40),
        dx: (Math.random() - 0.5) * 60,
        dy: (Math.random() - 0.5) * 60,
        twinkleDur: 2 + Math.random() * 5,
        twinkleDelay: Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.65,
      })),
    []
  );

  return (
    <>
      <style>{`
        @keyframes star-drift {
          0%   { transform: translate(0px, 0px); opacity: var(--op); }
          50%  { transform: translate(var(--dx), var(--dy)); opacity: calc(var(--op) * 0.4); }
          100% { transform: translate(0px, 0px); opacity: var(--op); }
        }
        @keyframes twinkle-star {
          0%, 100% { opacity: var(--op); }
          50%       { opacity: calc(var(--op) * 0.12); }
        }
        .bg-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation:
            star-drift   var(--drift-dur)   ease-in-out var(--drift-delay)   infinite,
            twinkle-star var(--twinkle-dur) ease-in-out var(--twinkle-delay) infinite;
        }
        :root:not(.dark) .bg-particle {
          background: rgba(120,100,200,0.22) !important;
          box-shadow: none !important;
        }
        .dark .bg-particle {
          background: rgba(255,255,255,var(--op)) !important;
          box-shadow: 0 0 calc(var(--size) * 2px) calc(var(--size) * 0.5px)
                      rgba(220,230,255,calc(var(--op) * 0.45));
        }
      `}</style>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        {particles.map((p) => (
          <div
            key={p.id}
            className="bg-particle"
            style={
              {
                left:   `${p.left}%`,
                top:    `${p.top}%`,
                width:  `${p.size}px`,
                height: `${p.size}px`,
                "--op":            p.opacity,
                "--size":          p.size,
                "--dx":            `${p.dx}px`,
                "--dy":            `${p.dy}px`,
                "--drift-dur":     `${p.driftDur}s`,
                "--drift-delay":   `${p.driftDelay}s`,
                "--twinkle-dur":   `${p.twinkleDur}s`,
                "--twinkle-delay": `${p.twinkleDelay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundParticles;
