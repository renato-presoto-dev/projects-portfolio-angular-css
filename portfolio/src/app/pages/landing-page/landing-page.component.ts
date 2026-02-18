import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  
  public scrollToTarget(targetElement: HTMLElement): void {
    if(targetElement){
      targetElement.scrollIntoView({
        behavior:'smooth'
      })
    }
  }

  itemAtivo: number | null = null;

  // Seus dados (Imagens e Descrições correspondentes)
  habilidades = [
    { 
      img: './icons/angularlogo.png', 
      alt: 'Angular', 
      descricao: 'Desenvolvimento de SPAs robustas com Angular.' 
    },
    { 
      img: 'assets/img2.png', 
      alt: 'CSS', 
      descricao: 'Estilização avançada e responsiva com CSS3.' 
    },
    { 
      img: 'assets/img3.png', 
      alt: 'TypeScript', 
      descricao: 'Tipagem forte e recursos modernos de JS.' 
    },
    // Adicione quantos itens precisar...
  ];

}
