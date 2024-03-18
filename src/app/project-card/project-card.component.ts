import {Component, Input} from '@angular/core';
import {Project} from "../_models/Project";
import {CommonModule, NgFor, NgForOf} from "@angular/common";
import {BsModalRef, BsModalService, ModalModule, ModalOptions} from "ngx-bootstrap/modal";
import {ProjectModalComponent} from "../project-modal/project-modal.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, ModalModule , CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [BsModalService]
})

export class ProjectCardComponent{
  @Input() project = {} as Project;

  bsModalRef?: BsModalRef; //? Makes it Optional

  constructor(private modalService: BsModalService) {

  }

  OpenProjectModal(){
    const modalOptions: ModalOptions = {
      class : 'modal-lg',
      initialState : {
        project : this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent , modalOptions);
  }
}
