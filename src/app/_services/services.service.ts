import { Injectable } from '@angular/core';
import {Services} from "../_models/Services";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services : Services[] = [
    {
      id : 0,
      title : "Web Development",
      description : "•\tHTML5 and CSS.\n" +
        "                                •\tStyling HTML5 and JavaScript.\n" +
        "                                •\tAdvanced HTML5 and JavaScript.\n" +
        "                                •\tMore Advanced HTML5 and CSS3.\n" +
        "                                •\tAdaptive AI, Graphics, and Animation.\n" +
        "                                •\tReact.js\n" +
        "                                •\tPrime faces and JSX",
      icon : "bi bi-briefcase"
    },
    {
      id : 1,
      title : "Systems Support",
      description : "Diagnosis of desktop, application, networking and infrastructure issues. Experience of supporting a wide and varied client base. Troubleshooting PC’s, laptops and mobile devices. Providing 1st/2nd line support to users.",
      icon : "bi bi-card-checklist"
    },
    {
      id : 2,
      title : "Back-end Development",
      description : "•\tDeveloping Secure APIs.\n" +
        "                                •\tObject-oriented Programming Fundamentals.\n" +
        "                                •\tMicrosoft SQL Knowledge.\n" +
        "                                •\tDesign Principles and Data Manipulation.\n" +
        "                                •\tCreating, Optimizing, and Securing Databases.\n" +
        "                                •\tSpring boot.\n" +
        "                                •\tDocker.",
      icon : "bi bi-bar-chart"
    },
    {
      id : 3,
      title : "Java Developer",
      description : "Development in Java EE, Java 8  and Java 17",
      icon : "bi bi-binoculars"
    },
    {
      id : 4,
      title : "Java FX Development",
      description : "Development of Desktop Applications using Java FX",
      icon : "bi bi-brightness-high"
    },
  ]

  getServices(){
    return this.services;
  }

  constructor() {}

}
