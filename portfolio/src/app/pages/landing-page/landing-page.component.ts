import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
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

}
