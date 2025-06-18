// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import ipec from './assets/company_logo/ipec_solution.jpg';
import coltAssist from './assets/company_logo/colt_assist1.jpg';

// Education Section Logo's
import cityEng from './assets/education_logo/city_eng.jpg';
import ruralPU from './assets/education_logo/rural_pu.jpg';
import jetSchool from './assets/education_logo/jet_school.png';

// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import weatherApp from './assets/work_logo/weather_app.png'
import emailReply from './assets/work_logo/email_reply.png'
import githubps from './assets/work_logo/githubps.png'
import quickblog from './assets/work_logo/quickblog.png'
import prescripto from './assets/work_logo/prescripto.png'




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Microservice', logo: springbootLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: coltAssist,
      role: "Java Fullstack Developer Intern",
      company: "Colt Assist Pvt. Ltd.",
      date: "Oct 2023 - Nov 2023",
      desc: "Developed dynamic and scalable web applications using the Java Fullstack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "Java",
        "Springboot",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS", 
        "Tailwind CSS",
      ],
    },
    // {
    //   id: 1,
    //   img: ipec,
    //   role: "Python Trainee",
    //   company: "Ipec Solutions",
    //   date: "Oct 2022 - Nov 2022",
    //   desc:"Completed a comprehensive course on sentiment analysis, focusing on extracting insights from unstructured social media data using Python, TextBlob, and data visualization tools like Matplotlib and Seaborn.",
    //   skills: [
    //     "Python",
    //     "Django",
    //     "JavaScript",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 1,
      img: cityEng,
      school: "City Engineering College, Bangalore",
      date: "Dec 2021 - Jun 2025",
      grade: "8.6 CGPA",
      desc: "I completed my BE in Computer Science from City Engineering College, Bangalore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Engineering",
    },
    {
      id: 2,
      img: ruralPU,
      school: "Rural PU College, Kanakapura",
      date: "Apr 2019 - March 2021",
      grade: "81%",
      desc: "I completed my class 12 education from Rural PU College, Kanakapura, under the State board, where I studied Physics, Chemistry, Mathematics and Biology (PCMB) .",
      degree: "2nd PUC - PCMB",
    },
    {
      id: 3,
      img: jetSchool,
      school: "JET Public School, Kanakapura",
      date: "Apr 2018 - March 2019",
      grade: "83.4%",
      desc: "I completed my class 10 education from JET Public School, Kanakapura, under the State board, where I studied Science with Computer.",
      degree: "Class X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Prescripto: AI Powered Disease Prediction And Healthcare Assistant",
      description:
        "Developed a full-stack healthcare solution using AI to provide initial disease predictions and personalized wellness advice, improving patient guidance. Built with a secure Spring Boot backend and a responsive React UI, it streamlines administrative tasks with a complete doctor consultation and booking module.",
      image: prescripto,
      tags: ["Java","Springboot","React JS", "Gemini API", "HTML", "CSS", "Javascript","MySQL","Netlify"],
      github: "https://github.com/Shashank-TS/Prescripto-AI-Healthcare-Assistant",
      webapp: "https://prescripto-ai-healthcare-assistant.netlify.app/",
    },
    {
      id: 1,
      title: "QuickBlog: AI-Enhanced Full-Stack Blogging Platform ",
      description:
        "Developed a comprehensive blogging solution with a secure admin panel and a public blog, leveraging the Google Gemini API for AI-powered post generation and summarization. The full-stack application uses Spring Boot for the backend and a responsive React UI for a seamless user experience.",
      image: quickblog,
      tags: ["Java","Springboot","React JS", "Gemini API", "HTML", "CSS", "Javascript","MongoDB","Netlify"],
      github: "https://github.com/Shashank-TS/QuickBlog-AI-Enhanced-Full-Stack-Blogging-Platform",
      webapp: "https://quickblog-ai-enhanced.netlify.app/",
    },
    {
      id: 2,
      title: "Smart Email Assistant",
      description:
        "The Smart Email Assistant is an AI-powered tool that helps users generate professional email responses effortlessly. It is built using Spring Boot with Gemini API integration and provides both a React web interface and a Chrome Extension that integrates directly into Gmail.",
      image: emailReply,
      tags: ["Java","Spring Boot", "React JS", "API", "Gemini AI", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Shashank-TS/Smart-Email-Assistant",
      webapp: "https://smart-email-assistant-sb.netlify.app/",
    },
    {
      id: 3,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubps,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Shashank-TS/gitHub-Profile-search",
      webapp: "https://github-profile-search-ts.netlify.app/",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "A sleek and simple ReactJS Weather App that fetches real-time weather data using the OpenWeather API. Users can enter a city name and get instant details like temperature, weather conditions, wind speed, and humidity.",
      image: weatherApp,
      tags: ["React JS", "OpenWeather API", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Shashank-TS/weather-app",
      webapp: "https://weather-app-using-reactjs-by-shashank.netlify.app/",
    },
        
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com//Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com//Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com//Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
    
  ];  