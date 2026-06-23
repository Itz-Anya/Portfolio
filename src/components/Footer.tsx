const Footer = () => (
  <footer className="py-10 px-4 sm:px-6 text-center">
    <div
      className="h-px w-28 mx-auto mb-6 rounded-full"
      style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)" }}
    />
    <p className="text-muted-foreground text-xs font-mono tracking-wider">
      crafted with{" "}
      <span style={{ color: "hsl(var(--accent))", filter: "drop-shadow(0 0 4px hsl(var(--accent)/0.5))" }}>♥</span>
      {" "}by{" "}
      <span className="font-display italic" style={{ color: "hsl(var(--foreground)/0.7)" }}>Anya</span>
      {" "}· {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
