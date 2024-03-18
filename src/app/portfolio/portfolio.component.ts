import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProjectCardComponent} from "../project-card/project-card.component";
import {NgFor, NgForOf} from "@angular/common";
import {ProjectsService} from "../_services/projects.service";
import {Project} from "../_models/Project";
import { FormsModule, NgModel } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Tags } from '../_models/Tags';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectCardComponent,
    NgFor,
    FormsModule,
    NgbCollapseModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent implements OnInit{

  isCollapse : boolean = true;
  //Add additional filter options :-)
  typeScript : boolean = false;
  angular : boolean = false;

  filtering : boolean = false;

  projects = {} as Project[]

  constructor(private titleService : Title , private projectsService : ProjectsService) {
    this.titleService.setTitle("Onthas - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  filter(){
    let filterTags : Tags[] = [];

    //Add additional if statements :-)

    if(this.typeScript){
    filterTags.push(Tags.TYPESCRIPT)
    }

    if(this.angular){
      filterTags.push(Tags.ANGULAR)
    }

    if(this.angular || this.typeScript){
      this.filtering = true;
    }else{
      this.filtering = false;
    }

    this.projects = this.projectsService.getProjectsByFilter(filterTags);

  }

  resetFilters(){
    //Add more remove filters
    this.angular = false;
    this.typeScript = false;

    this.filtering = false;

    this.projects = this.projectsService.getProjects();
  }
}
