import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';
import Message from './components/message';
import Index from './components/index/index-page';
import Projects from './components/projects/projects-page';
import ContactPage from './components/contact-page';
import Project from './components/projects/project';


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

                overview={'This project was a website I can use as a marketing tool to showcase my skills and various projects ive completed. To demonstrate my range of abilities to potential employers or people of interest and to serve as a hub for my various profiles whether on Github or Linkedin. Please also note this project is subject to change as its on the current process of being converted to a React, JSON stack. Please refer to my Github commit log for the project for a clearer overview of progress. All of the following content will only cover the Handlebars, Express version rather than the React conversion.'}
                projectImage={'../images/portfolio-thumbnail.jpg'}

                features={['Index page with skills, about and interest summary', 'Projects page for showcasing', 'Individual pages for further detail', 'Email contact system with page']}
                structure={['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js']}

                target={'The target of this project was aimed at my future prospects post graduation. Being able to use this site as a tool to showcase my skills and previous works to potential employers. Towards the coding aspect this was also an opportunity to expand my knowledge of CSS, industry conventions and web design.'}
                targetImage={'../images/projects-page-thumbnail.JPG'}

                issues={'Issues I found in this project include my overuse of classes and commenting, animating with CSS and JavaScript whilst making my styling engaging and satisfactory and incorrect use of media queries. More recently I found that Handlebars is limited in its capabilities when compared to the React libary. Therefore the this project is subject to be converted to JSX.'}
                issuesImage={'../images/commit-thumbnail.JPG'}

                resolutions={'My resolutions for this problems was to rely more of containers and element tags rather than creating separate classes too often and focusing on commenting from more of a `Why has this been used?` as oppose to `this is what it is`. Animating was a lengthy process having to consult several forums and documentation pages however I have begun to grasp transitions and keyframing with this project. The page styling and CSS had to be refactored several times (as evident in the commit logs) although my grasp of UI (user interface) ,themes and media query usage has improved.'}
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
                projectLink={<Message 
                    heading={"This project is no longer available"}
                    message={"Unfortunately the repository for this project has been closed"} 
                />}
                repoLink={<Message 
                    heading={"This project is no longer available"}
                    message={"Unfortunately the repository for this project has been closed"} 
                />}

                overview={'This project was a to create an Arduino game controller using electronic components of our choice and Unity game. It was part of my first year of university and is unfortunately no longer viewable as the repository has been closed. It helped me further my knowledge with Unity as well as an introduction to Arduino and its Unity plugin called Udunio. Additionally this projects other assignment gave me my first attempt at a technical poster.'}
                projectImage={'../images/unity-thumbnail.JPG'}
            
                features={['Unity game with Arduino', 'User interaction using arduino components', 'technical poster']}
                structure={['Unity', 'Arduino / Uduino', 'C#']}
            
                target={'The target was too make an interactive and engaging Unity game using components applicable to an Arduino breadboard to make a game controller and to create a corresponding technical poster detailing the project. Both the Arduino controller and the Unity game had to have some form of communication in some way and the final product had to follow the design detailed in the poster. My own idea was a Arduino version of the Hasbro game bop-it with four unique inputs in each corner of the controller and a game where the user would have to match the input to the component shown.'}
                targetImage={'../images/breadboard-thumbnail.jpg'}
            
                issues={'Issue I found in this project were mainly to do with Uduino and its syntax as well as what components to use for the game. I personally found Uduino very difficult to use in correspondence with my components. As controller anything that wasn`t a simple state such as a button was very tedious and documentation I found was limited at the time. Using interesting and engaging components that were easy to apply to a Unity project was also a challenge. The components I selected were a accelerometer, photosensor, switch, button and leds. The accelerometer epically was very difficult to implement into the game.'}
                issuesImage={'../images/arduino-technical-poster.JPG'}
            
                resolutions={'Uduino and Arduino are both systems that I struggled with and am unlikely to use again. Especially seeing as I am now more web technologies focused. My technical poster skills have improved drastically as you can see in my One Messaging project. However the project stilled remained insightful to Arduino if I am ever likely to use it again in Javascript instead of C# for example.'}
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

                overview={'This was a group project in my second year of university and was centered around a business that provided a subscription based box of student related supplies. My role was front-end development as well as documentation handling. I maintained our teams agile approach by documenting each stand-ups notes, targets, target status and any issues that occurred for that week. This project was my first time using React and therefore my development was minimal but I did create the mobile header and implemented the user profile modal.'}
                projectImage={'../images/student-survival-store-index.JPG'}

                features={['Website', 'Login and registering system', 'User dashboard']}
                structure={['HTML', 'React', 'Tailwinds CSS', 'Javascript', 'Express.js', 'SQLite']}

                target={'The target was to create the business website with all the ideal functionality based on proposals each individual member had pitched and decided on. With my own original business plan and proposal presentation being centered around a job seekers website, for tech specifically. This was in-light of the Covid 19 pandemic and therefore the mass employment lead to a gap to find an available and accessable employment platform.'}
                targetImage={'../images/student-survival-store-large.JPG'}

                issues={'My personal issues in the project were learning React and Tailwinds as I had not used either of these previously (as somewhat mentioned). Therefore I had a steep learning curve to match my experience team members capabilities, something I am still working to achieve currently. Maintaining an Agile methodology with standup meetings and a kanban board as well as the group setting were also changes I had to adapt too. I had around 18 months experience with agile methodology at the time and I had to help the team collaberate under this scheme as well as document the process, as mentioned.'}
                issuesImage={'../images/student-survival-store-login.JPG'}

                resolutions={'Tailwinds I found straight forward and easy to pick up and resolved my lack of knowledge fairly quickly as a result. The same could not be said for React and that is something I am hopping to expand my knowledge on in upcoming personal projects, due to its current popularity in industry. The group dynamic worked well and all members made sure to stick to standup meetings and deadlines, based in an agile approach.'}
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

                overview={'This was an individual project in my second year of university. This project was centered around creating a distributed system, with a distributed system being an application distributed across multiple systems. A technical poster detailing the project we wished to create also had to be provided along with a structured report, documenting the creation of the project. The project I decided to create was a realtime messaging app.'}
                projectImage={'../images/one-messaging-login-thumbnail.JPG'}

                features={['Login and registering system', 'Chat input and output interface', 'SQL storage']}
                structure={['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js', 'Socket.io', 'SQLite']}

                target={'The target was to follow the timeline I had provided in the poster and follow it as closely as possible. Having to list the reasoning for any deviations in the report. The artifacts targets were to creating a login and registering systems where user information was stored to a database. A chat interface where multiple users could communicate with each other and a messaging system detailing the message, username and time of message.'}
                targetImage={'../images/one-messaging-validation-thumbnail.JPG'}

                issues={'The issue I found where the shear amount of back-end development required in this project. The front-end development was relatively easy to me and completed quickly. However creating the login and registering system and the message component proved very challenging. Due to my knowledge of Sqlite being limited and this being the most advanced authentication system I had created.'}
                issuesImage={'../images/one-messaging-poster.JPG'}

                resolutions={'I resolved the authentication system mainly through help from both my peers and lecturers who were able to explain the method of each key stage such as login verification or checking a hashed password against a form request. Online tutorials and documentation for socket.io helped me to creat the messaging component.'}
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

                overview={'This was a group project in my second year with the same team as the Student Survival Store project. Similarly to that project the esports center was first presented through a business plan with my team pitches their own ideas, with my own pitch being the esports center. A statistics tracking website centered around the sporting genre esports, the competitive play of video games. My own role being front-end development and design and documentation'}
                projectImage={'../images/esports-center-hero-thumbnail.JPG'}

                features={['Search and filtering', 'SQL database storage', 'Registering users and local esports teams']}
                structure={['HTML', 'React', 'CSS', 'Material UI', 'Javascript', 'Express.js', 'MySQL']}

                target={'The target was to create the business website with all the ideal functionality based on the previous proposals. With is idea being my own I also had to ensure the team had direction and correct distribution on tasks according to their own strengths.l Additionally I managed the stand up meetings.'}
                targetImage={'../images/esports-center-form-thumbnail.JPG'}

                issues={'Being the project manager I found this new and challenging as it wasn`t an area I had much experience with previously. I found Material UI to be very complex with areas such as `sx` shorthand style and the vast amount of components. I personally prefer to use no UI libraries to create truly unique web page styling, however even if it is required I prefer bootstrap because of its simplicity and how amount of support.'}
                issuesImage={'../images/esports-center-kanban-thumbnail.JPG'}

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

                overview={'This was a side project I worked on aimed at reviewing video games of my choice.'}
                projectImage={'../images/reviews-thumbnail.JPG'}

                features={['Search and filtering', 'JSON storage', 'Dynamic content']}
                structure={['HTML', 'React', 'CSS', 'Tailwind', 'Javascript']}

                target={'The target of this project was to extended my own React knowledge. Covering features such as props, states, mapping and JSON objects which I had previously had little expierence in. Because of previously making dynamic content in Handlebars and Express and my understanding of Reacts impact in industry I attempted to achieve a site that was fully dynamic in React.'}
                targetImage={'../images/switch-thumbnail.JPG'}

                issues={'The main issue I came across was the search and filtering aspect. It was a feature I hadn`t covered in other projects and Reacts approach was new to me compared to client-side Javascript. Creating dynamic pages was also a feature a hadn`t covered in React and utilizing mapping and props was challenging.'}
                issuesImage={'../images/review-thumbnail.JPG'}

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
