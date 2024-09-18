import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: "Videogames Catalog Web App",
      summary: 'This web application, developed as my first project, features a video game catalog with advanced search, filtering, and sorting functionalities. It highlights my skills in modern web development and API integration.',
      description: `🚀 <strong>Individual Project at SoyHenry: Video Game Explorer</strong><br>

      During three intensive weeks at the SoyHenry bootcamp, I led an individual project that resulted in the creation of a web application dedicated to the world of video games.<br><br>

      🛠️ <strong>Technologies Used:</strong><br>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
      </ul>

      💡 <strong>Key Features:</strong><br>
      • Intuitive navigation through detailed video game pages.<br>
      • Filtering by origin, sorting by name or score.<br>
      • Search functionality by name and the ability to add new games.<br><br>

      🌐 <strong>API Integration:</strong><br>
      The application integrates with an API to provide updated and detailed information about each video game.<br><br>

      🌟 <strong>Notable Achievements:</strong><br>
      This project not only demonstrates my proficiency in web development but also my ability to independently tackle challenges and meet tight deadlines.`,

      projectLinks: ['https://github.com/JuanMPaola/Proyecto-Individual-Videogames'],
      tags: [ Tag.JAVASCRIPT, Tag.REACT, Tag.REDUX, Tag.EXPRESS, Tag.POSTGRESQL ],
      pictures: [ "../../assets/Videogames/Home.jpeg", "../../assets/Videogames/Form.jpeg" ]
    },
    {
      id: 1,
      name: "Real State Web App",
      summary: 'A real estate platform with user registration, admin management, and integrated payments. This team project features advanced property listings and dynamic interactions, demonstrating a broad range of technologies and effective collaboration. ',
      description: `🚀 <strong>Final Project at SoyHenry: Real Estate Marketplace</strong><br>

      A notable achievement during the SoyHenry bootcamp, our team of 8 members successfully completed this project within a span of 3 weeks. We present a web application dedicated to buying and renting properties, with distinctive features that enhance the user experience.<br><br>

      🏡 <strong>Key Features:</strong><br>
      • Robust user registration and login system.<br>
      • Integrated payment gateway with Stripe and cryptocurrencies.<br>
      • Posting creation with local images.<br>
      • Rating and comments system for dynamic interaction.<br>
      • Administrative dashboard for efficient content management.<br>
      • Advanced sorting and filtering functionalities for listings.<br><br>

      🛠️ <strong>Technologies Used:</strong><br>
      <ul>
        <li>Typescript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
        <li>Other tools like Stripe, Cloudinary, Vercel.</li>
      </ul>

      This project stands out not only for the breadth of technologies used but also for our team’s synergy in overcoming challenges and delivering an exceptional final product.`,
      projectLinks: [],
      tags: [ Tag.TYPESCRIPT, Tag.NESTJS, Tag.POSTGRESQL, Tag.SEQUELIZE, Tag.NEXTJS ],
      pictures: [ "../../assets/Real_State/Landing.png", "../../assets/Real_State/Home.png" ]
    },
    {
      id: 2,
      name: "Trains Web App",
      summary: `This e-commerce site for model railway trains features a product catalog, an admin form for managing product information, and an 'About' page. Built with React, Redux, and Firebase, it offers an intuitive and efficient user experience.`,
      description: `🚂 <strong>Model Railway Trains E-Commerce</strong><br>
      This e-commerce website is designed for showcasing model railway trains, with a focus on a simple yet effective catalog and management system. It includes a product catalog, an admin form for adding or removing products, the posibility of seing the products on detail and an 'About' page.<br><br>

      🛒 <strong>Key Features:</strong><br>
      • Product catalog for browsing and filtering available model trains.<br>
      • Admin form to upload, update, or delete product information.<br>
      • Informative 'About' page detailing the purpose and vision.<br><br>

      🛠️ <strong>Technologies Used:</strong><br>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Firebase</li>
      </ul>`,
      projectLinks: ['https://github.com/JuanMPaola/ModelRailway', 'https://trenesdeadrian.vercel.app/'],
      tags: [ Tag.JAVASCRIPT, Tag.REACT, Tag.REDUX, Tag.FIREBASE ],
      pictures: []
    },
    {
      id: 3,
      name: "Web Porfolio",
      summary: 'A web portfolio built with Angular, TypeScript, and Bootstrap, showcasing skills and projects with a responsive and visually appealing design. It highlights personal achievements and provides an engaging user experience.',
      description: `🚀 <strong>Personal Web Portfolio</strong><br>This web portfolio showcases my skills, projects, and professional achievements in a visually engaging and responsive format. Designed with a focus on clarity and aesthetics, it effectively highlights my capabilities and work.<br><br>

      🌟 <strong>Key Features:</strong><br>
      • Interactive project gallery with detailed views and filters.<br>
      • Responsive design for seamless viewing on any device.<br>
      • User-friendly navigation and elegant layout.<br><br>

      🛠️ <strong>Technologies Used:</strong><br>
      <ul>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>Bootstrap</li>
      </ul>

      The portfolio emphasizes a modern, professional design and utilizes cutting-edge web technologies to provide a dynamic and user-friendly experience.`,
      projectLinks: ['https://github.com/JuanMPaola/Portfolio'],
      tags: [ Tag.TYPESCRIPT, Tag.ANGULAR ],
      pictures: []
    },
    {
      id: 4,
      name: "Hospital Scheduler API",
      summary: 'This API facilitates medical appointment scheduling by managing patient and doctor profiles, booking slots, and handling updates and cancellations. It offers a reliable and efficient solution for hospital appointment management.',
      description: `  This project is a comprehensive solution developed to streamline the process of scheduling medical appointments. It was crafted with a focus on efficiency and usability, allowing patients and healthcare providers to manage their interactions seamlessly.<br><br>

      🏥 <strong>Key Features:</strong><br>
      • Creation and management of patient profiles.<br>
      • Development and oversight of doctor profiles, including specialties.<br>
      • Viewing and searching for registered patients and available doctors.<br>
      • Appointment scheduling with options for immediate or future slots.<br>
      • Flexibility to update or cancel appointments as needed.<br>
      • Capability to delete profiles and appointments.<br><br>

      🛠️ <strong>Technologies Used:</strong><br>
       <ul>
          <li>TypeScript</li>
          <li>Nest.js</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Pure SQL</li>
          <li>Jest</li>
          <li>Swagger</li>
          <li>Docker</li>
        </ul><br>

      This project demonstrates a strong application of SOLID principles, effective use of modern technologies, and comprehensive API documentation. It highlights the integration of various tools to build a reliable and scalable hospital appointment management system.`,
      projectLinks: ['https://github.com/JuanMPaola/Hospital-Appointment-Scheduler-API'],
      tags: [ Tag.TYPESCRIPT,Tag.NESTJS ,Tag.DOCKER , Tag.POSTGRESQL, Tag.JEST ],
      pictures: []
    }

  ]

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      })

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }

}
