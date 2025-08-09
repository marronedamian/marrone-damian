'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Improved mobile detection with debounce
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Handle touch interactions for mobile
  const handleTouchStart = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto py-4 md:py-12 px-3 sm:px-4"
    >
      {/* Línea central con efecto de energía - Solo en desktop */}
      {!isMobile && (
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/30 blur-sm animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-energy-pulse"></div>
        </div>
      )}

      {/* Línea lateral para mobile - Improved positioning */}
      {isMobile && (
        <div className="absolute left-5 top-0 bottom-0 w-0.5 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/30 blur-sm animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-energy-pulse"></div>
        </div>
      )}

      <div className="relative space-y-6 md:space-y-24">
        <AnimatePresence>
          {items.map((it, i) => (
            <motion.div
              key={i}
              className="timeline-item relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              whileHover={{
                scale: isMobile ? 1 : 1.02,
                transition: { duration: 0.3 }
              }}
              exit={{ opacity: 0 }}
              onViewportEnter={() => setActiveIndex(i)}
              onViewportLeave={() => setActiveIndex(null)}
              viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            >
              {/* Layout responsive */}
              <div className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}>
                {/* Contenido - Mobile optimized */}
                <motion.div
                  className={`w-full md:w-[45%] ${isMobile ? 'ml-12 pl-4' : i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: 0.2 }
                  }}
                  initial={{
                    opacity: 0,
                    x: !isMobile ? (i % 2 === 0 ? -30 : 30) : 0
                  }}
                >
                  <div
                    className={`w-full p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-lg border border-white/10 
                              bg-gradient-to-br from-white/5 to-white/2 shadow md:shadow-xl
                              ${activeIndex === i ? 'shadow-primary/20 ring-1 ring-primary/30' : ''}
                              transition-all duration-300`}
                    onTouchStart={() => handleTouchStart(i)}
                  >
                    <div className="text-xs font-mono uppercase tracking-[0.15em] text-primary mb-2">
                      {it.period}
                    </div>

                    <h3 className="text-base md:text-xl font-bold text-white mb-1">{it.role}</h3>
                    <p className="text-sm md:text-base font-medium text-primary/90 mb-3">{it.company}</p>

                    <ul className="space-y-2 mt-3 md:mt-4">
                      {it.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          className="relative pl-4 text-white/90 text-xs md:text-base"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: 0.4 + j * 0.1,
                              duration: 0.3
                            }
                          }}
                        >
                          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Punto central - Mobile optimized positioning */}
                <div className={`absolute ${isMobile ? 'left-5 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'} top-0 h-full flex items-start md:justify-center z-10`}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                    animate={{
                      scale: activeIndex === i ? [1, 1.1, 1] : 1,
                      transition: {
                        duration: 0.8,
                        repeat: activeIndex === i ? Infinity : 0,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full bg-background flex items-center justify-center 
                                   ${activeIndex === i ? 'ring-2 md:ring-4 ring-primary/30' : 'ring-1 md:ring-2 ring-white/10'}
                                   transition-all duration-300`}>
                      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${activeIndex === i ? 'bg-primary' : 'bg-white/40'} 
                                    transition-colors duration-300`}></div>
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-primary blur-md 
                                   ${activeIndex === i ? 'opacity-40' : 'opacity-0'} 
                                   transition-opacity duration-300`}></div>
                  </motion.div>
                </div>

                {/* Espacio vacío para desktop alternado */}
                {!isMobile && <div className="w-[45%]"></div>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}