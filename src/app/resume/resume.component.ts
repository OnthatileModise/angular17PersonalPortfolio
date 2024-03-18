import { Component, Renderer2 } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule , AccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  isWorkExperienceOpen : boolean = false;

  constructor(private titleService : Title , private rederer : Renderer2) {
    this.titleService.setTitle("Onthas - Resume");
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
