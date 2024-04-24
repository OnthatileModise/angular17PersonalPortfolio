import {Component, OnInit} from '@angular/core';
import {Skills} from "../_models/Skills";
import {SkillsService} from "../_services/skills.service";
import {NgFor} from "@angular/common";
import {state, style, trigger} from "@angular/animations";
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor , NgxTypedJsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations : [trigger('scroll' , [
    state(
      'scroll' , style({
        backgroundColor: 'blue'
      })
    )
  ])]
})

export class AboutComponent implements OnInit{
  skillsArray : Skills[] = []

  constructor(private skillsService : SkillsService) {}

  ngOnInit(): void {
    this.skillsArray = this.skillsService.getSkills()
  }
}
