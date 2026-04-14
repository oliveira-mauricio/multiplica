import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-marketing360',
  standalone: true,
  templateUrl: './marketing360.component.html'
})
export class Marketing360Component implements AfterViewInit {

  @ViewChild('wheel') wheelRef!: ElementRef;

  servicos = [
    "Marketing Estratégico",
    "Comunicação",
    "Branding",
    "Social Media",
    "Performance/Mídia Paga",
    "Trade Marketing",
    "Pesquisa de Mercado",
    "Relações Públicas"
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.criarRoda();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.criarRoda();
    }
  }

  criarRoda() {
    const wheel = this.wheelRef.nativeElement;

    wheel.querySelectorAll('.service-item-wheel').forEach((el: any) => el.remove());

    const radius = wheel.offsetWidth * 0.68;
    const centerX = wheel.offsetWidth / 2;
    const centerY = wheel.offsetHeight / 2;

    const angleStep = (Math.PI * 2) / this.servicos.length;

    this.servicos.forEach((serv, i) => {
      const angle = i * angleStep - Math.PI / 2;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const el = document.createElement('div');
      el.className = 'service-item-wheel';
      el.innerText = serv;

      el.style.left = `${x - 40}px`;
      el.style.top = `${y - 20}px`;

      wheel.appendChild(el);
    });
  }
}
