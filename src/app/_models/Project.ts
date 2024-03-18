import {Tags} from "./Tags";

export interface Project{
  id : number;
  name : string;
  summary : string;
  description : string;
  projects : string;
  pictures: string[];
  tags: Tags[];
  link : string;
}
