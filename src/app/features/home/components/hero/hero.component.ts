import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="p-10 bg-blue-600 text-white text-center">
      <h2 class="text-3xl font-bold">Bem-vindo ao Multiplica 🚀</h2>
      <p class="mt-4">Seu sistema moderno com Angular</p>
    </section>
  `
})
export class HeroComponent {}