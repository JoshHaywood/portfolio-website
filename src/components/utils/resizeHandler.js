import { useState, useEffect } from "react";

export default function ResizeHandler(width) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < width);

  useEffect(() => {
    // If window is resized, trigger isMobile
    function handleResize() {
      setIsMobile(window.innerWidth < width);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMobile;
};