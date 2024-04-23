import { Component } from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations : [
    trigger('scroll' , [
     transition('* <=> *' , [
       query(':enter' , style({opacity : 0}) , {optional : true}),
         query(':enter' , stagger('300ms' , [
           animate('1s ease-in' , keyframes([
             style({opacity : 0 , transform : 'translateY(-75px)' , offset : 0}),
             style({opacity : .5 , transform : 'translateY(35px)' , offset : 0.3}),
             style({opacity : 1 , transform : 'translateY(0)' , offset : 1})
           ]))
         ]))
     ])
    ])
  ]
})

export class HeaderComponent {

  activeHome : string = "-active"
  activeAbout : string = ""
  activeServices : string = ""
  activeSkils : string = ""
  activeProjects: string = ""
  activeContact : string = ""

  setActiveHome(){
    this.activeHome = "-active"
    this.activeAbout = ""
    this.activeServices = ""
    this.activeSkils = ""
    this.activeProjects = ""
    this.activeContact = ""
  }
  setActiveAbout(){
    this.activeHome = ""
    this.activeAbout = "-active"
    this.activeServices = ""
    this.activeSkils = ""
    this.activeProjects = ""
    this.activeContact = ""
  }
  setActiveServices(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = "-active"
    this.activeSkils = ""
    this.activeProjects = ""
    this.activeContact = ""
  }
  setActiveSkills(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = ""
    this.activeSkils = "-active"
    this.activeProjects = ""
    this.activeContact = ""
  }
  setActiveProjects(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = ""
    this.activeSkils = ""
    this.activeProjects = "-active"
    this.activeContact = ""
  }
  setActiveContact(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = ""
    this.activeSkils = ""
    this.activeProjects = ""
    this.activeContact = "-active"
  }
}
