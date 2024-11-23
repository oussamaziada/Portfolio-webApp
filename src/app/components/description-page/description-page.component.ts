import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css']
})
export class DescriptionPageComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    for (let i = 0; i < reveals.length; i++) {
      const elementTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        this.renderer.addClass(reveals[i], 'active');
      } else {
        this.renderer.removeClass(reveals[i], 'active');
      }
    }
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    for (let i = 0; i < reveals.length; i++) {
      const elementTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        this.renderer.addClass(reveals[i], 'active');
      } else {
        this.renderer.removeClass(reveals[i], 'active');
      }
    }
  
  }


}
