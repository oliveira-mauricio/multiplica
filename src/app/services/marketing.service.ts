import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  getServicos() {
    return [
      { nome: "Marketing Estratégico", icon: "chart-pie" },
      { nome: "Comunicação", icon: "comments" },
      { nome: "Branding", icon: "trademark" },
      { nome: "Social Media", icon: "share-alt" },
      { nome: "Performance", icon: "chart-line" },
      { nome: "Criação de Sites", icon: "laptop-code" }
    ];
  }
}