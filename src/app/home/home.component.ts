import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProjectsService} from "../_services/projects.service";
import {Project} from "../_models/Project";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;

  constructor(private titleService : Title , private projectService : ProjectsService) {
    this.titleService.setTitle("Onthas - Home");
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(5);
  }
}
