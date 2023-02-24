import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollTo(props) {
  const element = document.getElementById(props.target); // Target element
  const isMobile = window.innerWidth < 768; // Check if mobile
  
  const offset = isMobile ? props.mobileOffset : props.offset;

  //Scroll to element with offset of -120px
  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: "smooth",
  });
};

export function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, [pathname]);

  return null;
};