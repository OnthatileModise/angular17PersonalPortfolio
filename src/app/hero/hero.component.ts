import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxTypedJsComponent, NgxTypedJsModule} from "ngx-typed-js";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgxTypedJsModule,
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  @ViewChild(NgxTypedJsComponent) typed: NgxTypedJsComponent = new NgxTypedJsComponent();
  ngOnInit(): void {

  }
}
