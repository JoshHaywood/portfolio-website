import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Message from './components/message';
import Index from './components/index/index-page';
import Projects from './components/projects/projects-page';
import ContactPage from './components/contact-page';
import Project from './components/projects/project';

const errorPaths = [
  {path: "*",},
  {path: "/error"}
];

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/projects" element={<Projects />}/>

        {
          //#region Projects
        }

        <Route path="/projects/portfolio" element={          
          <>
            <Helmet>
                    <title>Projects | Portfolio</title>
            </Helmet>
            
            {/*Returns components with assigned props */}
            <Project
                heading={'Portfolio'}

                projectLink={'https://www.joshhaywood-portfolio.com/'}
                repoLink={'https://github.com/El-Goblino/portfolio-website'}

                overview={'This project was a website I can use as a marketing tool to showcase my relevant experience and various projects ive undertaken. In order demonstrate my range of abilities to potential employers or to people of interest and to serve as a hub for my various social profiles whether on Github, Linkedin or Email. Please note that this article covers the initial creation of the Handlebars Express version of this project. The current version now uses React, therefore this article covers the reasoning for the project itself and various changes ive made.'}
                projectImage={'../Images/portfolio-thumbnail.jpg'}

                features={['Index page with experience, featured projects and contact form', 'Projects page for showcasing projects', 'Individual article pages for greater detail']}
                structure={['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js']}

                target={'The target of this project was aimed at my future prospects post graduation. Using this site as a tool to showcase my skills and previous works to potential employers. Originally in terms of programming this was also an opportunity to expand my knowledge of CSS, TailwindCSS, React, Animation Libraries, industry conventions and web design.'}
                targetImage={'../Images/projects-page-thumbnail.JPG'}

                issues={'Issues found in this project was the limitations of Handlebars in comparison to React. Design of page layouts as well as UI systems were another area of focus and as a result this sites layout has changed drastically. In addition I found CSS animations time consuming for limited functionality, resulting in confusion as to how other developers create complex animations based timelines and viewport entries for example.'}
                issuesImage={'../Images/portfolio-thumbnail.jpg'}

                resolutions={'Converting the project to React resolved my Handlebars limitations as React contains greater maintainability features such as functional or class based structure, hooks, states, map and a greater emphasis on objects whilst maintaining fast load times. To improve the sites design and layout I researched other developers work as well as getting inspiration from sites like Pinterest and Dribble.io. After additionally researching animations beyond CSS I discovered GSAP and Framer Motion, opting for Framer Motion as its built specifcally around React. With these plugins including far greater features than CSS such as: delay, timelines and in view triggers.'}
            />
          </>
        } />

        <Route path="/projects/arduino" element={
          <>
            <Helmet>
                <title>Projects | Arduino</title>
            </Helmet>

            <Project
                heading={'Arduino Unity Project'}

                projectLink={'/error'}
                repoLink={'/error'}

                overview={'This project was a to create an Arduino game controller, using electronic components of our choice and accompanying Unity game. It was part of my first year of university. Currently this project no longer viewable as the repository this project was stored on has been closed. It helped me further my knowledge with Unity as well as an introduction to Arduino and its Unity plugin called Udunio. Additionally this projects other assignment gave me my first attempt at a technical poster, based around the Arduino project.'}
                projectImage={'../Images/unity-thumbnail.JPG'}
            
                features={['Unity game with Arduino', 'User interaction using arduino electronics', 'technical poster']}
                structure={['Unity', 'Arduino / Uduino', 'C#']}
            
                target={'The target was too make an interactive and engaging Unity game using components applicable to an Arduino breadboard to make a game controller and to create a corresponding technical poster detailing the project. Both the Arduino controller and the Unity game had to have some form of communication between the electronics and the in game features whilst following the design set out by the technical poster. My own idea was a Arduino version of the Hasbro game bop-it with four unique inputs in each corner of the controller and a game where the user would have to match the input to the component shown.'}
                targetImage={'../Images/breadboard-thumbnail.jpg'}
            
                issues={'Issue I found in this project were mainly to do with Uduino and its syntax as well as what components to use for the game. I personally found Uduino very difficult to use in correspondence with my components. As controlling anything that wasn`t a simple state such as a button was very tedious and documentation I found was limited at the time. Using interesting and engaging components that were easy to apply to a Unity project was also a challenge. The components I selected were a accelerometer, photosensor, switch, button and leds, with the accelerometer being especially difficult to implement into the game.'}
                issuesImage={'../Images/arduino-technical-poster.JPG'}
            
                resolutions={'Uduino and Arduino are both systems that I struggled with and am unlikely to use again. Especially seeing as I am now more web technologies focused. My technical poster skills have improved drastically as you can see in my One Messaging project. However the project still remained insightful to Arduino if I am ever likely to use it again in Javascript instead of C# for example.'}
            />
          </>
        } />

        <Route path="/projects/student-survival-store" element={
          <>
            <Helmet>
                <title>Projects | Student Survival Store</title>
            </Helmet>

            <Project
                heading={'Student Survival Store'}

                projectLink={'https://github.falmouth.ac.uk/LW254830/Student-Survival-Store'}
                repoLink={'https://github.falmouth.ac.uk/LW254830/Student-Survival-Store'}

                overview={'This was a group project in my second year of university and was centered around a business that provided a subscription based box of student related supplies. My role was front-end development as well as documentation handling. I maintained our teams agile approach by documenting each stand-ups notes, targets, target status and any issues that occurred for that week. This project was my first time using React and therefore my development less substantial than normal but I did components like the mobile header and implemented the user profile modal.'}
                projectImage={'../Images/student-survival-store-index.JPG'}

                features={['Website', 'Login and registering system', 'User dashboard']}
                structure={['HTML', 'React', 'Tailwinds CSS', 'Javascript', 'Express.js', 'SQLite']}

                target={'The target was to create the business website with all the ideal functionality based on proposals each individual member had pitched and decided on. With my own original business plan and proposal presentation being centered around a job seekers website, for tech specifically. This was in-light of the Covid 19 pandemic and therefore the mass unemployment lead to a market need to find an available and accessible employment platform.'}
                targetImage={'../Images/student-survival-store-large.JPG'}

                issues={'My personal issues in the project were learning React and Tailwinds as I had not used either of these previously, as mentioned. Therefore I had a steep learning curve to match my experienced team members capabilities, something I am still working to achieve currently. Maintaining an Agile methodology with standup meetings and kanban boards were a regular part of the project and ensuring the team collaborated effectively and timeline along with documenting the process.'}
                issuesImage={'../Images/student-survival-store-login.JPG'}

                resolutions={'Tailwinds I found straight forward and easy to pick up and built up a solid base of knowledge using thier documentation. The same could not be said for React and that is something I have expanded my knowledge since from other projects. Something I was keen to do due to its current popularity in industry. The group dynamic worked well and all members made sure to stick to standup meetings and deadlines whilst maintaining agile practices.'}
            />
          </>
        } />

        <Route path="/projects/one-messaging" element={
          <>
            <Helmet>
                <title>Projects | One Messaging</title>
            </Helmet>

            <Project
                heading={'One Messaging'}

                projectLink={'https://github.falmouth.ac.uk/JH248828/2005220_Comp260-A1-A2'}
                repoLink={'https://github.falmouth.ac.uk/JH248828/2005220_Comp260-A1-A2'}

                overview={'This was an individual project in my second year of university. This project was centered around creating a distributed system, with a distributed system being an application distributed across multiple systems, as the name suggests. A technical poster detailing the project we wished to create also had to be provided along with a structured report, documenting the creation of the project. The project I decided to create was a realtime messaging app.'}
                projectImage={'../Images/one-messaging-login-thumbnail.JPG'}

                features={['Login and registering system', 'Chat input and output interface', 'SQL storage']}
                structure={['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js', 'Socket.io', 'SQLite']}

                target={'The target was to follow the timeline I had detailed in the poster and follow it as closely as possible. Having to list the reasoning for any deviations in the report. The artifacts targets were to creating a login and registering systems where user information was stored to a SQL database. A chat interface where multiple users could communicate with each other and a messaging system detailing the message, username and time of message.'}
                targetImage={'../Images/one-messaging-validation-thumbnail.JPG'}

                issues={'The issue I found where the shear amount of back-end development required in this project. The front-end development was relatively easy to me and completed quickly. However creating the login and registering system and the message component proved very challenging. Due to my knowledge of Sqlite being limited and this being the most advanced authentication system I had created.'}
                issuesImage={'../Images/one-messaging-poster.JPG'}

                resolutions={'I resolved the authentication system mainly through help from both my peers and lecturers who were able to explain the method of each key stage such as login verification or checking a hashed password against a form request for examples. Online tutorials and documentation for socket.io helped me to create the messaging component.'}
            />
          </>
        } />

        <Route path="/projects/esports-center" element={
          <>
            <Helmet>
                <title>Projects | The Esports Center</title>
            </Helmet>

            <Project
                heading={'The Esports Center'}

                projectLink={'https://github.falmouth.ac.uk/JH248828/Web220_A2-eSports-Center'}
                repoLink={'https://github.falmouth.ac.uk/JH248828/Web220_A2-eSports-Center'}

                overview={'This was a group project in my second year with the same team as the Student Survival Store project. Similarly to that project the Esports Center was first presented through a business plan with my team pitches their own ideas, with my own pitch being the Esports Center. A statistics tracking website centered around the sporting genre Esports, the competitive play of video games. My own role being front-end development and design and documentation'}
                projectImage={'../Images/esports-center-hero-thumbnail.JPG'}

                features={['Search and filtering', 'SQL database storage', 'Registering users and local esports teams']}
                structure={['HTML', 'React', 'CSS', 'Material UI', 'Javascript', 'Express.js', 'MySQL']}

                target={'The target was to create the business website with all the ideal functionality based on the previous proposals. With is idea being my own I also had to ensure the team had direction and correct distribution on tasks according to their own strengths.l Additionally I managed the stand up meetings.'}
                targetImage={'../Images/esports-center-form-thumbnail.JPG'}

                issues={'Being the project manager I found this new and challenging as it wasn`t an area I had much experience with previously. I found Material UI to be very complex with areas such as `sx` shorthand style and the vast amount of components. I personally prefer to use no UI libraries to create truly unique web page styling, however even if it is required I prefer bootstrap because of its simplicity and how amount of support.'}
                issuesImage={'../Images/esports-center-kanban-thumbnail.JPG'}

                resolutions={'Towards the end of the project my issues with being the project manager where resolved naturally as it became regular to conduct standup meetings and have a constant mental overview of the project. I tried to manage my team as effectively as I could and overall this role was an engaging learning curve that I would be open to trying again. I was able to understand Material UI and use it effectively in the project however the amount of time to understand the library impacted my own abilities compared to standard styling. However I am grateful to understand a UI library specifically for React.'}
            />
          </>
        } />

        <Route path="/projects/game-review" element={
          <>
            <Helmet>
                <title>Projects | Game Review</title>
            </Helmet>

            <Project
                heading={'Game Review Project'}
                
                projectLink={'https://game-review-application.herokuapp.com/'}
                repoLink={'https://github.com/El-Goblino/game-review-app'}

                overview={'This was a side project I worked on aimed at creating a reviewing website where I could review video games of my choice.'}
                projectImage={'../Images/reviews-thumbnail.JPG'}

                features={['Search and filtering', 'JSON storage', 'Dynamic content']}
                structure={['HTML', 'React', 'CSS', 'Tailwind', 'Javascript']}

                target={'The target of this project was to extended my own React knowledge. Covering features such as props, states, mapping, functional hooks and JSON objects which I had previously had little experience in. Because of previously making dynamic content in Handlebars and Express and my understanding of Reacts impact in industry I attempted to achieve a site that was fully dynamic in React.'}
                targetImage={'../Images/switch-thumbnail.JPG'}

                issues={'The main issue I came across was the search and filtering aspect. It was a feature I hadn`t covered in other projects and Reacts approach was new to me compared to client-side Javascript. Creating dynamic pages was also a feature a hadn`t covered in React and utilizing mapping and props was challenging.'}
                issuesImage={'../Images/review-thumbnail.JPG'}

                resolutions={'React approaches to both these issue was surprisingly intuitive and has completely changed my tendency to use the library. For searching there were many errors to validate such as clicking the button instead of suggestions or not searching anything and clicking search. Resolved by using ternary statements and suggestions mapped to a JSON array. JSON arrays, props and switch statements contributed to achieving dynamic content and to reiterate this was straight forward and simplistic in React compared to other technologies I have worked with.'}
            />
          </>
        } />

        {
          // #endregion 
        }

        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/message-sent" element={<Message
          heading={"Thank you"}
          message={"Your message has been sent successfully. You will receive a reply to the email you provided as soon as possible."}
        />} />

        <Route path="*" element={<Message
          heading={"This page does not exist"}
          message={"The page you were looking for does not exist or has been removed."}
        />} />

        <Route path="/error" element={<Message
          heading={"This project has been removed"}
          message={"Unfortunately the source code or build for this project is no longer available"}
        />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
