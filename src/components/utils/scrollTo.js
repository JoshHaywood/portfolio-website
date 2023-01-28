export default function ScrollTo(props) {
  const element = document.getElementById(props.target); // Target element
  const isMobile = window.innerWidth < 768;
  const offset = isMobile ? props.mobileOffset : props.offset;

  //Scroll to element with offset of -120px
  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: "smooth",
  });
};