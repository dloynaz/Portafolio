
import {
    video1Dashboard, video2Dashboard,
    video1Jammming, video2Jammming,
    video1codeChallenges, video2codeChallenges,
    video1ravenous, video2ravenous,
    video1GoldMetrics, video2GoldMetrics,
    video1portafolio,video2portafolio,
    video1Number,video2Number, video1PPT, video2PPT, 
    videoACountries, videoBCountries, videoAFCC, videoBFCC

} from '../assets/PortafolioAsset/Video/index'


export default [
    
    {
        id: 2,
        name: 'Ravenous',
        description: 'This website is a React app that allows the user to search by restaurants using the Yelp Api. There are three search parameters: "Best Match", "Highest Rated" and "Most Reviewed". These parameters allow the user to sort the search as best suits him. In addition he can search by name and by location.',
        background: "This project allowed me to explore my skills with the web API, the way the documentation is read and how to use the documentation in my favor for the needs of the website. It also gave me the opportunity to develop my skills with React. The style is simple but responds quite well to the different screen sizes. This thanks to the flex layout. The search parameters are refined using different array methods.In summary: the website allowed me to delve into the use of APIs, how they interact with data, and hone my skills in a responsive design.",
        tech1: 'Interaction Design/Front End Development',
        tech2: 'HTML, CSS, JS, React, RESTful APIs',
        video1: video1ravenous,
        video2: video2ravenous,
        link: 'http://dlravenous.surge.sh/',
        visit: "Visit Website!"
    },
    {
        id: 3,
        name: 'Code Challenges',
        description: 'This list of projects was a set of challenges by Wes Bos. I also developed one titled "Array Cardio Day" where we used to execute various functions using different methods on information arrangements. In this four we have a clock with a natural needle movement, a battery linked to the computer keyboard, a template that allows the user to participate in the design and a flex panel with images and text.',
        background: 'I really enjoyed these projects because they allowed me to hone my skills in pure javascript. I did not use any library and I focus on how to perform each of the challenges incorporating to the maximum the possibilities of the script and css. On the needles, I use the css "transition-timing-function: cubic-bezier", to execute a natural move, in the flex panels I generate a dialogue between script and style using queries, the battery is simple event handlers with html and the customizable template uses css variables.',
        tech1: 'Interactive websites with Javascript',
        tech2: 'CSS, JS',
        video1: video1codeChallenges,
        video2: video2codeChallenges,
        link: 'https://github.com/dloynaz/code-challenges',
        visit: "View Code!"

    },
    {
        id: 5,
        name: 'Jammming',
        description: "The application allows the user to search by artist, album or song and returns a product listing of these parameters. The user can create a new playlist and select the tracks they want to incorporate. From there the list is saved in your own personal account. In addition, a feature was added that allows the songs to be played.",
        background: "This project allowed me to refine my knowledge working with `Spotify API`. Understand the way a documentation is read and be able to use logic for the needs of my own project (in this case generate a search engine and a playlist creator that makes a POST request in the user's personal account). Also, I wanted to incorporate a feature (a player) that allows the user to listen to the songs. Before I develop this addition, I made a document titled `Feature Request: Include preview samples for each track` in which I specify the following reasons: OBJECTIVE, BACKGROUND, TECHNICAL DESIGN and CAVEATS.",
        tech1: 'Interaction Design/Front End Development',
        tech2: 'React, JS, RESTful APIs',
        video1: video1Jammming,
        video2: video2Jammming,
        link: 'http://wohooojammmingdlocr.surge.sh/',
        visit: "Visit Website!"

    },
    {
        id: 7,
        name: 'Social Media Dashboard',
        description: 'This project was a front-end challenge from Frontend Mentor. It is an interface that displays social media information. It was developed with React and CSS (using grid layout and variables). The interface allows the user to toggle between day-mode and night-mode. You also have the possibility to move the mouse over to expand the data.',
        background: "This project  allowed me to hone my skills in space layout, basic animations, and the interaction between React components through props and states. In addition to building a site that responds directly to the size of the screen. Creating these project has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and make my code more flexible.",
        tech1: 'Interaction Design/Front End Development',
        tech2: 'HTML, CSS, JS, React',
        video1: video1Dashboard,
        video2: video2Dashboard,
        link: 'http://social-media-dashboard-wohooo.surge.sh/',
        visit: "Visit Website!"

    },
    {
        id: 8,
        name: 'Gold Medal Metrics',
        description: 'I create the SQL queries to power an Olympics analytics web app. It is part of the final modules of the career path in Web Development offered by codeacademy. The website allows the user to search for data about the countries in relation to the gold medals. The user can sort the information at his convenience.',
        background: "I took care of the commands that give functionality to the application working with a database incorporated in db browser. The communication with it was written using SQL Queries. The project allowed me to hone my skills when working with databases. In addition to being able to interact with it, always looking for a clean and easy to read code. Including the ability to unify SQL with javascript using Express.",
        tech1: 'Databases/Back End Development',
        tech2: 'SQL queries',
        video1: video1GoldMetrics,
        video2: video2GoldMetrics,
        link: 'https://github.com/dloynaz/Gold-Medal-Metrics',
        visit: "View Code!"

    },
    {
        id: 1,
        name: 'Web Portfolio',
        description: "My portfolio included in my own portfolio! This is because this project brings together a series of knowledge on the use of React and how to automate processes when developing a web page. The design is inspired by a front-end mentor proposal and the code is built on programming principles that I learned from web developer Kevyn Quiros through a set of private tutorials to sharpen my knowledge. ",
        background: "This project allowed me to deepen my knowledge of the React Router and the work of the wonderful React Hooks. I practiced modulation, isolation and automation. Always looking for a clean, easy to read (expressive) code that adapts well to the features. In this project I wanted to apply automation when loading my portfolio with each of the web applications. I wrote a general template that rendered the information fetching it from the address id and comparing it to my constant object. Therefore to load each of the pages I only had to use a Hook in charge of the rendering process. In its entirety, the project encouraged me to seek efficiency and simplicity, both within its code and in its minimalist style.",
        tech1: 'Interaction Design/Front End Development',
        tech2: 'CSS, React, HTML, JS',
        video1: video1portafolio,
        video2:video2portafolio,
        link: 'https://github.com/dloynaz/Portafolio',
        visit: "View Code!"
    },
    {
        id: 10,
        name: 'Number Guesser!',
        description: "The number guesser allows the user to compete with the computer for who guesses a secret number. This number changes per round. In case that no one matches the number, the one who has selected the closest value will be chosen. ",
        background: "This project was one of my first javascript exercises. It allowed me to work with the mathematical object. In this case take advantage of Math.random (The random() function is used to generate a random number between 0 (inclusive) and 1 (exclusive). This generated number is then multiplied with 10 and added 1 to generate numbers from 1 – 10). In addition to distilling my knowledge when working with arrays and their different methods. This project, like the code challenges, was done with pure javascript.",
        tech1: 'Interaction Design/Front End Development',
        tech2: 'JS',
        video1: video1Number,
        video2:video2Number,
        link: 'http://three-soup.surge.sh/',
        visit: "Visit Website!"
    },
    {
        id: 6,
        name: 'Rock, paper or scissor!',
        description: "This is a simple web application that allows the user to play the classic rock-paper-scissors game against the computer. The page has a colorful design. Whenever you want, you can access the instructions by clicking on the button in the lower left corner. When viewing the instructions window, the background loses opacity, adding a nice effect to the layout.",
        background: "This web application allowed me to familiarize myself with the React Styled Components and understand the power of this library. Thanks to it I can integrate in javascript not only the HTML but also the CSS. This wonderful way of working allows me more flexibility. In this project I was able to work on basic animations, passing props to my styled components, and generate a layout that is attractive to the user. In addition to practicing the render cycles of React.",
        tech1: 'Interaction Design/Front End Development',
        tech2: 'HTML, CSS, REACT, JS',
        video1: video1PPT,
        video2:video2PPT,
        link: 'http://rock-paper-scissor-davidloynaz.surge.sh/',
        visit: "Visit Website!"
    },
    {
        id: 4,
        name: 'Countries',
        description: `In this web application the user can search for the country of their choice by name or filter the list of countries by region. When he wants he can click on any country and he will be redirected to a page with more information. In this window you can also travel between countries by selecting the neighboring countries. Also, you can switch between dark mode and light mode.`,
        background: `The user interface was inspired by a front-end mentor proposal. Flex was used to make the site responsive to the different screen sizes. Although grid would have been a good option, it was also avoided because I understand that it does not work correctly in versions of old and still valid web browsers. The website allowed me to continue practicing my ability to work with APIs. In this case use countries API to "get" the information. In addition to dynamic queries for the filter by region and the search engine. Use React-Styled-Components for the general design of the page and also to facilitate the communication of the component in charge of making the change between dark mode and light mode. One of the biggest challenges was allowing the user to navigate between countries through neighboring countries. Due to the way the JSON object was conceived.`,
        tech1: 'Interaction Design/Front End Development',
        tech2: 'HTML, CSS, REACT, JS, RESTful APIs',
        video1: videoACountries,
        video2:videoBCountries,
        link: 'http://dlcountries.surge.sh/',
        visit: "Visit Website!"
    },
    {
        id: 9,
        name: 'FCC - Final Projects',
        description: "In this section I share my final projects from the Front-end libraries course and comment on the process of the JavaScript Algorithms and Data Structures course. The final projects of the course in front-end libraries are five: a calculator, a page of inspirational phrases (works with an API), a Pomodoro Clock, a drums machine and a Markdown previewer. The latter is a web application that allows the user to type in a text box and see a preview with html markdown.",
        background: "The course in Front End libraries explores the following libraries and frameworks through coding challenges: React, Redux, React & Redux, SASS, Bootstrap and JQuery. The final projects do not have a very complex design, however they allowed me to really hone my skills when working with states and life cycles and the way the user interacts with the platform. Although the projects are simple, they do not lack complexity in the needs of each application. Mainly the calculator and the HTML Markdown Previewer (for the second, I used a github library when generating the markdown). While the course in JavaScript Algorithms and Data Structures allowed me to really specify my knowledge in JavaScript through the different modules: ES6, REGEX, Data Structures, Algorithm Scripting, Object Oriented Programming and Functional Programming. However, what I enjoyed the most about the course were the more than 20 algorithms that I had to solve to get the certificate. I loved!",
        tech1: 'JavaScript / Front End Development',
        tech2: 'JS, CSS, REACT, HTML, SASS, BOOTSTRAP, API',
        video1: videoAFCC,
        video2:videoBFCC,
        link: `https://codepen.io/DavidLoynaz`,
        visit: "Visit Projects!"
    }

]


