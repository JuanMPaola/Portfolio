import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { Tag } from '../_models/Tag';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ ProjectCardComponent, CommonModule , FormsModule, CollapseModule],
  providers: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
 
  projects = {} as Project[];

  isCollapsed: boolean = true;

  typescript: boolean = false;
  angular: boolean = false;
  csharp: boolean = false;
  nodejs: boolean = false;
  javascript: boolean = false;
  react: boolean = false;
  nestjs: boolean = false;
  express: boolean = false;
  docker: boolean = false;
  jest: boolean = false;
  postgresql: boolean = false;
  sequelize: boolean = false;

  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Juan Manuel Paola - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] =[];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.nestjs) {
      filterTags.push(Tag.NESTJS);
    }
    if (this.express) {
      filterTags.push(Tag.EXPRESS);
    }
    if (this.docker) {
      filterTags.push(Tag.DOCKER);
    }
    if (this.jest) {
      filterTags.push(Tag.JEST);
    }
    if (this.postgresql) {
      filterTags.push(Tag.POSTGRESQL);
    }
    if (this.sequelize) {
      filterTags.push(Tag.SEQUELIZE);
    }

    if (this.sequelize || this.postgresql || this.jest || this.docker || this.express || this.nestjs || this.react || this.javascript || this.nodejs || this.csharp || this.angular ||  this.typescript){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.csharp = false;
    this.nodejs = false;
    this.javascript = false;
    this.react = false;
    this.nestjs = false;
    this.express = false;
    this.docker = false;
    this.jest = false;
    this.postgresql = false;
    this.sequelize = false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
