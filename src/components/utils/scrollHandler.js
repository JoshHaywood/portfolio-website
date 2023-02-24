import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

export function ScrollTo(props) {
  const element = document.getElementById(props.target); // Target element
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
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