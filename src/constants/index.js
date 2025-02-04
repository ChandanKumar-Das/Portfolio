import gintaa from "../assets/projects/gintaa.jpeg";
import admin from "../assets/projects/admin.png";
import burger from "../assets/projects/burger.png";
import Portfolio from "../assets/projects/portfolio.png";
import easyshop from "../assets/projects/easyshop.png";

export const HERO_CONTENT = `I am a passionate React / Node JS developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Vue.js, as well as back-end technologies like Node.js and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including Vue, React ,Nuxt.js, Next.js, Node.js and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Jr. Software Engineer",
    company: "Asconsoftech Indian Pvt. Ltd.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, Vue.js and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["Javascript", "Typescript", "React.js", "Vue.Js", "Node.js", "MySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Associate Software Trainee",
    company: "Asconsoftech Indian Pvt. Ltd.",
    description: `Designed and developed user interfaces for web applications using Nuxt.js and Vue.js. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "vue.Js", "nuxt.js" ],
  }
];

export const PROJECTS = [
  {
    title: "gintaa",
    image: gintaa,
    description:
      "Gintaa is a food delivery platform that offers the lowest prices online with zero commission for restaurants, ensuring affordability for customers and better profits for eateries. It allows users to conveniently order food for delivery or takeaway, enhancing the local dining experience.",
    technologies: ["HTML", "CSS", "Tailwind Css", "vue.js", "Nuxt.js","option API" , "strapi.js"],
    link:'https://gintaa.com/'
  },
  {
    title: "Admin-Panel",
    image: admin,
    description:
      "Admin panel for gintaa, streamlining the management of web activities, improving administrative efficiency and enhancing operational controls.  ",
    technologies: ["HTML", "CSS", "Tailwind Css", "React.js","Redux" , "strapi.js"],
    link:'https://admin.gintaa.com/'
  },
  {
    title: "Easy-Store",
    image: easyshop,
    description:
      "Developed a feature-rich EasyStore application using React, Redux, and Tailwind CSS, integrating a public API for real-time data. Implemented user authentication, advanced search filtering, and seamless 'Add to Cart' functionality, ensuring a secure, efficient, and personalized shopping experience.",
    technologies: ["HTML", "CSS", "Tailwind Css", "React.js","Context Api" ,"redux-toolkit" ],
    link:'https://easyshop-by-chandan.vercel.app/'
  },
  {
    title: "Burger-Shop",
    image: burger,
    description:
      "Developed a robust Burger Shop application featuring user authentication, advanced search filtering, and a seamless 'Add to Cart' functionality, providing a secure and personalized shopping experience.",
    technologies: ["HTML", "CSS", "Tailwind Css", "React.js","Context Api" , ],
    link:'https://burger-king-sigma.vercel.app/'
  },

  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "Developed a robust Burger Shop application featuring user authentication, advanced search filtering, and a seamless 'Add to Cart' functionality, providing a secure and personalized shopping experience.",
    technologies: ["HTML", "CSS", "Tailwind Css", "motion" ,  "React.js", 'Vite',"Constants" ],
    link:'https://portfolio-chandankumardas.vercel.app/'
  }

];

export const CONTACT = {
  address1: " Sector - v, New Town",
  address2: "Kestopur, Kolkata, West Bengal, 700156",
  phoneNo: "+91 799 105 2216 ",
  email: "chandankumardas265@gmail.com",
};
