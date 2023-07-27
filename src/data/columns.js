const columns = [
  {
    heading: "Sections",
    links: [
      { label: "About", target: "about" },
      { label: "Projects", target: "projects" },
      { label: "Contact", target: "contact" },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "Portfolio", target: "portfolio" },
      { label: "Tech Terminus", target: "tech-terminus" },
      { label: "Realtime Messaging App", target: "realtime-messaging-app" },
    ],
  },
  {
    containerStyle:
      "max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-end",
    links: [
      { label: "Freelancing Website", target: "freelancing-website" },
      { label: "Student Survival Store", target: "student-survival-store" },
      { label: "Esports Center", target: "esports-center" },
    ],
  },
];

export default columns;
