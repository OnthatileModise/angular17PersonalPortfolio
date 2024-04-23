import { Injectable } from '@angular/core';
import {Skills} from "../_models/Skills";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills : Skills[] = [
    {
      id: 0,
      skillName : "HTML",
      progress : "90%"
    },
    {
      id: 1,
      skillName : "CSS",
      progress : "60%"
    },
    {
      id: 2,
      skillName : "React JS.",
      progress : "60%"
    },
    {
      id: 3,
      skillName : "Spring boot",
      progress : "60%"
    },
    {
      id: 4,
      skillName : "JavaScript",
      progress : "75%"
    },
    {
      id: 5,
      skillName : "Java",
      progress : "80%"
    },
    {
      id: 6,
      skillName : "SQL",
      progress : "60%"
    },
  ]
  constructor() { }

  getSkills(){
    return this.skills;
  }
}
