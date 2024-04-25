import {Component, OnInit, Renderer2} from '@angular/core';
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

  constructor(private skillsService : SkillsService , private rederer : Renderer2) {}

  ngOnInit(): void {
    this.skillsArray = this.skillsService.getSkills()
  }

  downloadResume(){
    const link = this.rederer.createElement('a');
    link.setAttribute('target' , "_blank");
    link.setAttribute('href' , '../../assets/Onthatile Modise CV (4).pdf');
    link.setAttribute('download' , 'Resume.pdf');
    link.click();
    link.remove();
  }
}
