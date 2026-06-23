import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.removeItem("theme"); } catch {}
  }, [dark]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    try { localStorage.removeItem("theme"); } catch {}
  }, []);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: dark
          ? "rgba(140,80,255,0.15)"
          : "rgba(140,100,255,0.10)",
        border: dark
          ? "1px solid rgba(140,80,255,0.40)"
          : "1px solid rgba(140,100,255,0.25)",
        boxShadow: dark
          ? "0 0 12px rgba(140,80,255,0.40), 0 0 30px rgba(140,80,255,0.12)"
          : "0 2px 12px rgba(140,100,255,0.12)",
      }}
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="w-4 h-4" style={{ color: "#ffd580", filter: "drop-shadow(0 0 4px #ffd58080)" }} />
      ) : (
        <Moon className="w-4 h-4" style={{ color: "hsl(252,80%,58%)" }} />
      )}
    </button>
  );
};

export default ThemeToggle;
