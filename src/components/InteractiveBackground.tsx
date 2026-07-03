import { useEffect, useRef } from "react";

export const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--x", `${e.clientX}px`);
      containerRef.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-screen pointer-events-none z-0 bg-white"
      style={{ "--x": "-1000px", "--y": "-1000px" } as React.CSSProperties}
    >
      {/* GRID INTERATIVO COM HOLOFOTE PASTEL */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-300"
        style={{
          // 1. O Fundo: Um "holofote" com tons pastéis que segue o mouse
          // Usamos cores vibrantes mas suaves (Roxo pastel -> Azul pastel -> Rosa pastel)
          backgroundImage: "radial-gradient(circle 250px at var(--x) var(--y), #9dd5f3 45%, #bca0e0 45%, #e9b8e1 45%, transparent 100%)",
          
          // 2. A Máscara: Esconde todo o holofote, deixando a cor vazar APENAS em bolinhas de 2px
          WebkitMaskImage: "radial-gradient(black 2px, transparent 2px)",
          WebkitMaskSize: "24px 24px",
          maskImage: "radial-gradient(black 2px, transparent 2px)",
          maskSize: "24px 24px",
        }}
      />
    </div>
  );
};