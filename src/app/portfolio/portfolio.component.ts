import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgFor} from "@angular/common";
import {ProjectsService} from "../_services/projects.service";
import {Project} from "../_models/Project";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent implements OnInit{

  projects = {} as Project[]

  constructor(private titleService : Title , private projectsService : ProjectsService) {
    this.titleService.setTitle("Onthas - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
