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
      description: 'You can search and upload videogames',
      projectLink: '',
      tags: [ Tag.REACT, Tag.JAVASCRIPT, Tag.EXPRESS ],
      pictures: []
    },
    {
      id: 1,
      name: "Real State Web App",
      summary: 'This project was made by a team of 8 people',
      description: 'Have lots of funcionalities',
      projectLink: '',
      tags: [ Tag.NESTJS, Tag.TYPESCRIPT ],
      pictures: []
    },    
    {
      id: 2,
      name: "Trains Web App",
      summary: 'This was made for a person who sells trains',
      description: 'You can search products, view the details of them and upload from the form',
      projectLink: '',
      tags: [ Tag.REACT, Tag.JAVASCRIPT ],
      pictures: []
    },
    {
      id: 3,
      name: "Web Porfolio",
      summary: 'This was made for a person who sells trains',
      description: 'You can search products, view the details of them and upload from the form',
      projectLink: '',
      tags: [ Tag.ANGULAR, Tag.TYPESCRIPT ],
      pictures: []
    },
    {
      id: 4,
      name: "Hospital Scheduler API",
      summary: 'This was made for a person who sells trains',
      description: 'You can search products, view the details of them and upload from the form',
      projectLink: '',
      tags: [Tag.TYPESCRIPT ],
      pictures: []
    }

  ]

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

  constructor() { }
}