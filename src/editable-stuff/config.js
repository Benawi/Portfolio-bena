// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Habtamu",
  middleName: "ቤናዊ",
  lastName: "Alemayehu",
message: "Software Engineer | Java enthusiastic | Spring Boot | JavaScript | React | Redux | Ruby | Rails | Tailwind | I love creating new things \n⚡Turning imagination into reality 🚀",

  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Benawi",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@habtamualemayehu16",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/recursion_function/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/habtamu-alemayehu-b90367101/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/MandeAlemayehu",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/serializedObject",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/benawi.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//        

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/HabtamuAlemayehu.jpg"),
  imageSize: 375,
  message:
    "Hi there! My name is Habtamu Alemayehu. I am a full-stack software engineer with a Master's Degree in Computer Science and Engineering from Adama Science and Technology University. I have over 7 years of experience building web applications using JavaScript, React, Redux, Rails on Ruby, Java, Spring Boot, and other related technologies"
    + " I recently completed an intensive Full-Stack Web Development program from Microverse, gaining expertise in modern developer tools and collaboration best practices like pair programming, code reviews, and Agile methodologies",
  resume: "https://docs.google.com/document/d/168AVY3rsJ0BPQgjaBzisB8N962wpLmx66pQLSf6UwO0/edit",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = { 
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "benawi", 
  reposLength: 4,
  specificRepos: [],
};
//Project Section
const projectImg = {
  show: true,
  images: [
    { 
      img: require("../../src/assets/img/digital wallet.jpg"), 
    },
    { 
      img: require("../../src/assets/img/portifolio.png"), 
    },
    { 
      img: require("../../src/assets/img/doctors2.png"), 
    },
    { 
      img: require("../../src/assets/img/digital wallet1.png"),  
    },
    { 
      img: require("../../src/assets/img/doctors.png"), 
    },
    { 
      img: require("../../src/assets/img/portifolio2.png"),    
    },  
    { 
      img: require("../../src/assets/img/merric.png"),   
    },
    { 
      img: require("../../src/assets/img/doctors1.png"), 
    },
  ],
  imageSize: {
    width:"630",
    height:"449"
  },
  ProjectimageSize: {
    width:"460",
    height:"370"
  }
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
  "In 2022, I was appointed as the Transport Management System project lead for WKU. In this role, I Led a team of four software developers to build a custom web application for managing student and staff transportation needs. This involved coordinating work allocation, setting realistic timelines, and providing guidance to the developers. The successful launch of the new WKUTMS under my leadership demonstrated my abilities in technical project management, collaborating with cross-functional teams, and driving the adoption of transformative technology. Additionally, as a Lead Software Developer at Lois Smart Solutions from 2023 - to now, I led various software projects leveraging my technical expertise alongside people management abilities. ",
  images: [
    { 
      img: require("../editable-stuff/HabtamuAlemayehu1.JPG"), 
      label: "Project Manager", 
      paragraph: "Lead a team of four software developers at WKU" 
    },
    { 
      img: require("../editable-stuff/HabtamuAlemayehu2.jpg"), 
      label: "Project Manager", 
      paragraph: "Lead a team of two software developers at Lois smart solution " 
    },
  ],
  imageSize: {
    width:"630",
    height:"450"
  },
  ProjectimageSize: {
    width:"630",
    height:"250"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
hardSkills: [
  { name: "Core Spring (DI, MVC, REST)", value: 99 },
  { name: "Spring Boot Ecosystem (Actuator, DevTools)", value: 90 },
  { name: "Spring Data (JPA, MongoDB, Redis)", value: 95 },
  { name: "Spring Cloud & Microservices", value: 92 },
  { name: "Spring Security & OAuth2", value: 90 },
  { name: "SQL & Relational Databases", value: 95 },
  { name: "NoSQL (MongoDB, Redis)", value: 88 },
  { name: "Java (Core + OOP + Concurrency)", value: 97 },
  { name: "Data Structures & Algorithms", value: 96 },
  { name: "Testing (JUnit, Mockito, Postman)", value: 93 },
  { name: "Frontend (HTML, CSS, JavaScript)", value: 95 },
  { name: "React Ecosystem (React, Hooks, JSX)", value: 97 },
  { name: "Styling Frameworks (Tailwind CSS, Bootstrap)", value: 87 },
  { name: "Ruby on Rails", value: 97 },
  { name: "Python & Flask", value: 90 },
  { name: "Node.js & Express.js", value: 90 },
  { name: "DevOps (Docker, Kubernetes, CI/CD)", value: 90 },
  { name: "Version Control (Git, GitHub)", value: 95 },
  { name: "Cloud Platforms (AWS, GCP basics)", value: 87 },
  { name: "Messaging Systems (Apache Kafka)", value: 82 },
  { name: "GraphQL & API Design", value: 85 },
  { name: "Linux & Shell Scripting", value: 86 }
]
,
  softSkills: [
    { name: "Goal-Oriented", value: 88 },
    { name: "Collaboration", value: 97 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m a Full-Stack Software Engineer actively seeking new full-time opportunities where I can continue growing and making meaningful contributions. If you are aware of any open software engineering roles that match my background, have any advice, or would simply like to connect, please feel free to email me at",
  email: "habtamualemayehu16@gmail.com ",
  inboxme:"Or Inbox me here",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2023 – Present',
    },
    {
      role: 'Remote Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/Microverse.png'),
      date: 'April 2023 – Present',
    },
    {
      role: 'Full-Stack Developer & Lecturer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'August 2015 – May 2023',
    },
  ]
}


 const services = {
  show: true,
  heading: "Services I Provide",
  servicesList: [
    {
      title: "Mobile App Development",
      description: "Android and iOS apps with clean architecture and intuitive UI/UX.",
      icon: "📱",
    },
    {
      title: "Web App Development",
      description: "Full-stack web applications with React, Spring Boot, Node.js, and modern stacks.",
      icon: "🌐",
    },
    {
      title: "Desktop App Development",
      description: "Cross-platform desktop apps using Electron, JavaFX, or .NET MAUI.",
      icon: "🖥️",
    },
    {
      title: "API & Backend Services",
      description: "RESTful API design, GraphQL, and scalable microservices.",
      icon: "🛠️",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

 const projectsDone = {
  show: true,
  heading: "Projects I Have Completed 🚀",
  projectsList: [
    {
      title: "Guraginga Android Keyboard",
      description: "Custom Android keyboard for Guraginga language with predictive text and easy typing.",
      category: "Mobile App",
      icon: "⌨️",
    },
    {
      title: "Guarantee Management System",
      description: "End-to-end web platform for managing bank guarantees with audit trails and role-based access.",
      category: "Web App",
      icon: "🌐",
    },
    {
      title: "Raffle System",
      description: "Automated raffle system with dynamic filtering, random winner selection, and PDF generation.",
      category: "Web App",
      icon: "🎟️",
    },
  ],
};

 const projectStats = {
  show: true,
  totalProjects: 67,
  mobileApps: 5,
  webApps: 59,
  desktopApps: 3,
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projectImg,projectStats,projectsDone,services };
