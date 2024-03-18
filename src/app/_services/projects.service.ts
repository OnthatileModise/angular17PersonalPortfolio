import {Injectable} from '@angular/core';
import {Project} from "../_models/Project";
import {Tags} from "../_models/Tags";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects : Project[] = [
    {
      id : 0,
      name : 'Sample Angular Project',
      summary : 'Test Summary.',
      description : 'Test Description.',
      projects: '',
      tags : [Tags.ANGULAR , Tags.TYPESCRIPT],
      pictures : ['./assets/spring-image1.png' , './assets/spring-image2.png' , './assets/spring-image3.png'],
      link : 'http://localhost:4200/portfolio'
    },
    {
      id : 1,
      name : 'Sample Java Project',
      summary : 'Test Summary.',
      description : 'Test Description.',
      projects: '',
      tags : [Tags.JAVA],
      pictures : ['./assets/spring-image1.png' , './assets/spring-image2.png' , './assets/spring-image3.png'],
      link : 'http://localhost:4200/portfolio'
    },
    {
      id : 3,
      name : 'Sample JavaFX Project',
      summary : 'Test Summary.',
      description : 'Test Description.',
      projects: '',
      tags : [Tags.JAVA , Tags.JAVAFX],
      pictures : ['./assets/spring-image1.png' , './assets/spring-image2.png' , './assets/spring-image3.png'],
      link : 'http://localhost:4200/portfolio'
    },
    {
      id : 4,
      name : 'Sample HTML Project',
      summary : 'Test Summary.',
      description : 'Test Description.',
      projects: '',
      tags : [Tags.JAVASCRIPT , Tags.HTML5 , Tags.CSS3],
      pictures : ['./assets/spring-image1.png' , './assets/spring-image2.png' , './assets/spring-image3.png'],
      link : 'http://localhost:4200/portfolio'
    },
    {
      id : 5,
      name : 'Sample Spring-boot Project',
      summary : 'Test Summary.',
      description : 'Test Description.',
      projects: '',
      tags : [Tags.SPRINGBOOT , Tags.JAVA],
      pictures : ['./assets/spring-image1.png' , './assets/spring-image2.png' , './assets/spring-image3.png'],
      link : 'http://localhost:4200/portfolio'
    },
    {
      id : 5,
      name : 'Sample Spring-boot Project',
      summary : 'Test Summary.',
      description : 'Test Description.',
      projects: '',
      tags : [Tags.SPRINGBOOT , Tags.JAVA],
      pictures : ['./assets/spring-image1.png' , './assets/spring-image2.png' , './assets/spring-image3.png'],
      link : 'http://localhost:4200/portfolio'
    }
  ]

  constructor() {}

  getProjectById(id : number) : Project {
    const project = this.projects.find(project => project.id === id);
    if (project === undefined){
      throw new TypeError("There is no project of type id" + id);
    }
      return project;
  }

  getProjects(){
    return this.projects;
  }
}
