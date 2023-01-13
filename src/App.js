import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './pages/Message';
import Index from './pages/Index';
import Project from './pages/Project';

const projects = [
  {
    path: '/projects/portfolio',
    title: 'Projects | Portfolio',
    heading: 'Portfolio',
    deployLink: 'https://www.joshhaywood-portfolio.com/',
    repoLink: 'https://github.com/JoshHaywood/portfolio-website',
    overview: 'This project was a website that I created to use as a marketing tool to showcase my relevant experience and various projects that I have undertaken. The goal was to demonstrate my range of abilities to potential employers or people of interest, and to serve as a hub for my various social profiles on Github, LinkedIn, and email.',
    projectImage: '../images/portfolio-thumbnail.webp',
    features: [
      'Index page with experience, featured projects and contact form',
      'Projects page for showcasing projects',
      'Individual article pages for greater detail',
    ],
    structure: ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js'],
    target: 'The target of this project was to improve my prospects post-graduation by using the site as a tool to showcase my skills and previous work to potential employers. The project was also an opportunity for me to expand my knowledge of CSS, TailwindCSS, React, animation libraries, industry conventions, and web design.',
    targetImage: '../images/projects-page-thumbnail.webp',
    issues: 'During the creation of the project, I encountered some issues with the limitations of Handlebars in comparison to React, as well as difficulties with the design of the page layouts and UI systems. As a result, the layout of the site changed significantly. I also found that CSS animations were time-consuming and had limited functionality, which led to confusion about how other developers create complex animations based on timelines and viewport entries.',
    issuesImage: '../images/portfolio-thumbnail.webp',
    resolutions: "To resolve these issues, I converted the project to React, which offered greater maintainability features such as functional or class-based structure, hooks, states, map, and a greater emphasis on objects while maintaining fast load times. To improve the design and layout of the site, I researched other developers' work and looked for inspiration on sites like Pinterest and Dribble.io. I also researched animation options beyond CSS and discovered GSAP and Framer Motion, ultimately choosing Framer Motion because it is built specifically for React and offers a range of features such as delay, timelines, and in-view triggers.",
  },
  {
    path: '/projects/arduino',
    title: 'Projects | Arduino',
    heading: 'Arduino Unity Project',
    deployLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/arduino-project',
    overview: 'This project involved creating an Arduino game controller and accompanying Unity game as part of my first year of university. It was designed to introduce me to Arduino and its Unity plugin, Udunio, and help me improve my knowledge of Unity. I created a technical poster detailing the project and its structure, which included Unity, Arduino/Uduino, and C#.',
    projectImage: '../images/unity-thumbnail.webp',
    features: [
      'Unity game with Arduino',
      'User interaction using arduino electronics',
      'technical poster',
    ],
    structure: ['Unity', 'Arduino / Uduino', 'C#'],
    target: 'The goal of the project was to create an interactive and engaging Unity game using components from an Arduino breadboard, and to establish communication between the electronics and in-game features. I had the idea of creating an Arduino version of the Hasbro game Bop-It, with four unique inputs in each corner of the controller and a game where the user had to match the input to the component shown.',
    targetImage: '../images/breadboard-thumbnail.webp',
    issues: 'During the project, I encountered some issues with Uduino and its syntax, as well as deciding which components to use for the game. I found Uduino particularly challenging to use with my selected components, which included an accelerometer, photosensor, switch, button, and LEDs. The accelerometer was especially difficult to implement into the game.',
    issuesImage: '../images/arduino-technical-poster.webp',
    resolutions: 'In hindsight, I would not choose to use Uduino or Arduino again, especially since I am now more focused on web technologies. However, the project was still beneficial in providing insight into Arduino, in case I ever need to use it again with a different programming language such as JavaScript. My technical poster skills have also improved significantly since this project, as demonstrated in my One Messaging project.',
  },
  {
    path: '/projects/student-survival-store',
    title: 'Projects | Student Survival Store',
    heading: 'Student Survival Store',
    deployLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/student-survival-store',
    overview: "This was a group project in my second year of university that centered around a business that provided a subscription-based box of student-related supplies. My role was front-end development and documentation handling. I maintained our team's agile approach by documenting each stand-up's notes, targets, target status, and any issues that occurred for that week. This project was my first time using React, so my development was not as substantial as normal, but I did create components such as the mobile header and implemented the user profile modal.",
    projectImage: '../images/student-survival-store-index.webp',
    features: ['Website', 'Login and registering system', 'User dashboard'],
    structure: [
      'HTML',
      'React',
      'Tailwinds CSS',
      'Javascript',
      'Express.js',
      'SQLite',
    ],
    target: 'The target was to create the business website with all the ideal functionality based on proposals that each individual member had pitched and decided on. My own original business plan and proposal presentation centered around a job seekers website for tech specifically. This was in light of the COVID-19 pandemic and the mass unemployment that led to a market need for an available and accessible employment platform.',
    targetImage: '../images/student-survival-store-large.webp',
    issues: 'One of my personal issues with the project was learning React and Tailwinds, as I had not used either of these technologies previously. This resulted in a steep learning curve to match the capabilities of my experienced team members, something I am still working on. Maintaining an Agile methodology with stand-up meetings and kanban boards was a regular part of the project, and ensuring the team collaborated effectively and met deadlines while maintaining agile practices was important.',
    issuesImage: '../images/student-survival-store-login.webp',
    resolutions: 'To resolve my issues with learning React, I have expanded my knowledge through other projects since then due to its popularity in the industry. Tailwinds, on the other hand, was straightforward and easy to pick up, and I was able to build a solid base of knowledge using their documentation. The group dynamic worked well, and all members made sure to stick to stand-up meetings and deadlines while maintaining agile practices.',
  },
  {
    path: '/projects/one-messaging',
    title: 'Projects | One Messaging',
    heading: 'One Messaging',
    deployLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/one-messaging',
    overview: 'This was an individual project in my second year of university that focused on creating a distributed system, which is an application that is distributed across multiple systems. In addition to creating the project, I was also required to provide a technical poster detailing the project and a structured report documenting the creation process. The project I chose to create was a real-time messaging app.',
    projectImage: '../images/one-messaging-login-thumbnail.webp',
    features: [
      'Login and registering system',
      'Chat input and output interface',
      'SQL storage',
    ],
    structure: [
      'HTML',
      'Handlebars',
      'CSS',
      'Javascript',
      'Express.js',
      'Socket.io',
      'SQLite',
    ],
    target: 'The target of the project was to follow the timeline I had detailed in the poster as closely as possible, and to document any deviations in the report. The artifacts I aimed to create included a login and registration system that stored user information in a SQL database, a chat interface where multiple users could communicate with each other, and a messaging system that displayed the message, username, and time of the message.',
    targetImage: '../images/one-messaging-validation-thumbnail.webp',
    issues: 'One of the main issues I encountered during this project was the amount of back-end development required. The front-end development was relatively easy for me and was completed quickly, but creating the login and registration system and the messaging component proved to be very challenging due to my limited knowledge of SQLite and the fact that this was the most advanced authentication system I had ever created.',
    issuesImage: '../images/one-messaging-poster.webp',
    resolutions: 'To resolve these issues, I sought help from my peers and lecturers, who were able to explain the various stages of the authentication process, such as login verification and checking a hashed password against a form request. I also used online tutorials and documentation for Socket.io to help me create the messaging component.',
  },
  {
    path: '/projects/esports-center',
    title: 'Projects | Esports Center',
    heading: 'The Esports Center',
    deployLink: '/error',
    repoLink: 'https://github.com/JoshHaywood/esports-center',
    overview: 'This was a group project in my second year with the same team as the Student Survival Store project. Similarly to that project, the Esports Center was first presented through a business plan in which each team member pitched their own ideas. My own pitch was for the Esports Center, a statistics tracking website focused on the sporting genre of esports, or the competitive play of video games. My role in the project was front-end development and design, as well as documentation.',
    projectImage: '../images/esports-center-hero-thumbnail.webp',
    features: [
      'Search and filtering',
      'SQL database storage',
      'Registering users and local esports teams',
    ],
    structure: [
      'HTML',
      'React',
      'CSS',
      'Material UI',
      'Javascript',
      'Express.js',
      'MySQL',
    ],
    target: `The target of the project was to create the business website with all the ideal functionality based on the previous proposals. As the idea for the Esports Center was my own, I also had to ensure that the team had direction and that tasks were properly distributed according to each member's strengths. Additionally, I managed the stand-up meetings.`,
    targetImage: '../images/esports-center-form-thumbnail.webp',
    issues: 'One of the issues we encountered during this project was the complexity of integrating all the different features we wanted to include on the website. We also faced some challenges with ensuring that the website was responsive and user-friendly for users accessing it on different devices.',
    issuesImage: '../images/esports-center-responsive-thumbnail.webp',
    resolutions: 'To resolve these issues, we broke down the project into smaller tasks and assigned them to different team members based on their strengths. We also made use of Material UI, a library that helped us design a responsive and user-friendly layout. Additionally, we held regular team meetings to discuss progress and troubleshoot any issues that arose.',
  },
  {
    path: '/projects/game-review',
    title: 'Projects | Game Review',
    heading: 'Game Review Project',
    deployLink: 'https://game-review-application.herokuapp.com/',
    repoLink: 'https://github.com/JoshHaywood/game-review-app',
    overview: 'This was a side project I worked on aimed at creating a reviewing website where I could review video games of my choice.',
    projectImage: '../images/reviews-thumbnail.webp',
    features: ['Search and filtering', 'JSON storage', 'Dynamic content'],
    structure: ['HTML', 'React', 'CSS', 'Tailwind', 'Javascript'],
    target: `The target of this project was to extend my knowledge of React, including features such as props, states, mapping, functional hooks, and JSON objects, which I had little experience with previously. I also wanted to create a site that was fully dynamic in React, building on my previous experience with dynamic content in Handlebars and Express, as well as my understanding of React's impact in the industry.`,
    targetImage: '../images/switch-thumbnail.webp',
    issues: 'One of the main issues I encountered during this project was the search and filtering feature, which was new to me compared to client-side JavaScript. Creating dynamic pages was also a feature I had not covered in React before, and utilizing mapping and props was challenging.',
    issuesImage: '../images/review-thumbnail.webp',
    resolutions: "To resolve these issues, I found that React's approach was surprisingly intuitive, and it completely changed my tendency to use the library. For the search feature, I had to validate many errors, such as clicking the button instead of selecting suggestions or not searching for anything and clicking search. I resolved these issues using ternary statements and mapping suggestions to a JSON array. I also used JSON arrays, props, and switch statements to achieve dynamic content, which was straightforward and simplistic in React compared to other technologies I have worked with.",
  },
];

const messages = [
  {
    path: '/message-sent',
    heading: 'Thank you',
    message: 'Your message has been sent successfully. You will receive a reply to the email you provided as soon as possible.',
    redirect: '/',
  },
  {
    path: '*',
    heading: 'This page does not exist',
    message: 'The page you were looking for does not exist or has been removed.',
    redirect: -1,
  },
];

function App() {
  const backgroundDelay = 0.3;
  const headingDelay = 0.6;
  const articleDelay = 0.9;
  const sideMenuDelay = 1.2;

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Index />} />

        {projects.map((project) => (
          <Route
            path={project.path}
            element={
              <>
                <Helmet>
                  <title>{project.title}</title>
                </Helmet>

                <Project
                  heading={project.heading}
                  deployLink={project.deployLink}
                  repoLink={project.repoLink}
                  overview={project.overview}
                  projectImage={project.projectImage}
                  features={project.features}
                  structure={project.structure}
                  target={project.target}
                  targetImage={project.targetImage}
                  issues={project.issues}
                  issuesImage={project.issuesImage}
                  resolutions={project.resolutions}
                  backgroundDelay={backgroundDelay}
                  headingDelay={headingDelay}
                  articleDelay={articleDelay}
                  sideMenuDelay={sideMenuDelay}
                />
              </>
            }
          />
        ))}

        {messages.map((message) => (
          <Route
            path={message.path}
            element={
              <Message
                heading={message.heading}
                message={message.message}
                redirect={message.redirect}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;