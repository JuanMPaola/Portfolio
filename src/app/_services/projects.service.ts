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
      summary: 'My first web application',
      description: `🚀 <strong>Individual Project at SoyHenry: Video Game Explorer</strong><br><br>

      During three intensive weeks at the SoyHenry bootcamp, I led an individual project that resulted in the creation of a web application dedicated to the world of video games.<br><br>

      💡 <strong>Key Features:</strong><br>
      • Intuitive navigation through detailed video game pages.<br>
      • Filtering by origin, sorting by name or score.<br>
      • Search functionality by name and the ability to add new games.<br><br>

      🌐 <strong>API Integration:</strong><br>
      The application integrates with an API to provide updated and detailed information about each video game.<br><br>

      🌟 <strong>Notable Achievements:</strong><br>
      This project not only demonstrates my proficiency in web development but also my ability to independently tackle challenges and meet tight deadlines.`,

      projectLink: 'https://github.com/JuanMPaola/Proyecto-Individual-Videogames',
      tags: [ Tag.JAVASCRIPT, Tag.REACT , Tag.REDUX , Tag.EXPRESS ],
      pictures: ["../../assets/Videogames/Home.jpeg", "../../assets/Videogames/Form.jpeg"]
    },
    {
      id: 1,
      name: "Real State Web App",
      summary: 'A real estate platform with user, admin, and payment features.',
      description: `🚀 <strong>Final Project at SoyHenry: Real Estate Marketplace</strong><br><br>

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
      </ul><br>

      This project stands out not only for the breadth of technologies used but also for our team’s synergy in overcoming challenges and delivering an exceptional final product.`,
      projectLink: '',
      tags: [ Tag.TYPESCRIPT, Tag.NESTJS, Tag.POSTGRESQL, Tag.SEQUELIZE, Tag.NEXTJS ],
      pictures: ["../../assets/Real_State/Landing.png", "../../assets/Real_State/Home.png"]
    },    
    {
      id: 2,
      name: "Trains Web App",
      summary: 'This was made for a person who sells trains',
      description: 'You can search products, view the details of them and upload from the form',
      projectLink: 'https://github.com/JuanMPaola/ModelRailway',
      tags: [ Tag.JAVASCRIPT, Tag.REACT, Tag.REDUX , Tag.FIREBASE ],
      pictures: []
    },
    {
      id: 3,
      name: "Web Porfolio",
      summary: 'This was made for a person who sells trains',
      description: 'You can search products, view the details of them and upload from the form',
      projectLink: 'https://github.com/JuanMPaola/Portfolio',
      tags: [ Tag.TYPESCRIPT ,Tag.ANGULAR ],
      pictures: []
    },
    {
      id: 4,
      name: "Hospital Scheduler API",
      summary: 'This was made for a person who sells trains',
      description: 'You can search products, view the details of them and upload from the form',
      projectLink: 'https://github.com/JuanMPaola/Hospital-Appointment-Scheduler-API',
      tags: [Tag.TYPESCRIPT, Tag.DOCKER, Tag.NESTJS , Tag.POSTGRESQL, Tag.JEST ],
      pictures: []
    }

  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll = false;
        }
      })

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }

}
