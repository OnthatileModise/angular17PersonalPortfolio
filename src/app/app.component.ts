import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {AboutComponent} from "./about/about.component";
import {ServiceComponent} from "./service/service.component";
import {CounterComponent} from "./counter/counter.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ContactComponent} from "./contact/contact.component";
import {FooterComponent} from "./footer/footer.component";
import {HeroComponent} from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ServiceComponent, CounterComponent, PortfolioComponent, ContactComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPortfolioWebsite';
}
