import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { HeroComponent } from '../components/hero/hero.component';
import { DiferenciaisComponent } from '../components/diferenciais/diferenciais.component';
import { Marketing360Component } from '../components/marketing360/marketing360.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    DiferenciaisComponent,
    Marketing360Component
  ],
  template: `
    <app-header />
    <app-hero />
    <app-diferenciais />
    <app-marketing360 />
    <app-footer />
  `
})
export class HomePage {}