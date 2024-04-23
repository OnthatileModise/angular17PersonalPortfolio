import {Component, OnInit} from '@angular/core';
import {Services} from "../_models/Services";
import {ServicesService} from "../_services/services.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{
  servicesArray : Services[] = []

  constructor(private services : ServicesService) {}

  ngOnInit(): void {
    this.servicesArray = this.services.getServices();
  }
}
