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

  activeHome : string = "active"
  activeAbout : string = ""
  activeServices : string = ""
  activeWork : string = ""
  activePortfolio: string = ""
  activeContact : string = ""

  setActiveHome(){
    this.activeHome = "active"
    this.activeAbout = ""
    this.activeServices = ""
    this.activeWork = ""
    this.activePortfolio = ""
    this.activeContact = ""
  }
  setActiveAbout(){
    this.activeHome = ""
    this.activeAbout = "active"
    this.activeServices = ""
    this.activeWork = ""
    this.activePortfolio = ""
    this.activeContact = ""
  }
  setActiveServices(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = "active"
    this.activeWork = ""
    this.activePortfolio = ""
    this.activeContact = ""
  }
  setActiveWork(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = ""
    this.activeWork = "active"
    this.activePortfolio = ""
    this.activeContact = ""
  }
  setActivePortfolio(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = ""
    this.activeWork = ""
    this.activePortfolio = "active"
    this.activeContact = ""
  }
  setActiveContact(){
    this.activeHome = ""
    this.activeAbout = ""
    this.activeServices = ""
    this.activeWork = ""
    this.activePortfolio = ""
    this.activeContact = "active"
  }
}
