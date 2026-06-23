import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 700);
          return 100;
        }
        return p + 1.5;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 48;
  const strokeDashoffset = circumference - (Math.min(progress, 100) / 100) * circumference;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-bg"
      style={{
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, rgba(140,80,255,0.18), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, rgba(0,210,200,0.12), transparent 70%)", animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, rgba(200,50,180,0.10), transparent 70%)", animationDelay: "3s" }}
        />
      </div>

      <div className="relative mb-8 sm:mb-10">
        <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
          <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(140,80,255,0.08)" strokeWidth="3" />
          <circle
            cx="60" cy="60" r="48"
            fill="none"
            stroke="url(#pg)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.12s ease-out", filter: "drop-shadow(0 0 8px rgba(140,80,255,0.6))" }}
          />
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(0,210,200,0.06)" strokeWidth="1" strokeDasharray="4 8" />
          <defs>
            <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c8a8ff" />
              <stop offset="50%" stopColor="#ff3ac8" />
              <stop offset="100%" stopColor="#00dcd8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-base font-semibold tabular-nums" style={{ color: "hsl(var(--foreground))" }}>
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>
      </div>

      <p
        className="font-display italic text-3xl sm:text-4xl md:text-5xl text-gradient mb-3 tracking-tight text-center px-4"
        style={{ lineHeight: "1.15" }}
      >
        Anya's Space
      </p>
      <p className="text-muted-foreground text-xs font-mono font-medium tracking-widest uppercase">
        launching portfolio •••
      </p>
    </div>
  );
};

export default LoadingScreen;
