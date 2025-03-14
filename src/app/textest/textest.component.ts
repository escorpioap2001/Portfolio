import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-textest',
  templateUrl: './textest.component.html',
  styleUrls: ['./textest.component.css']
})
export class TextestComponent {
  
  constructor(private renderer: Renderer2) {}

  onToggleClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (target && target.getAttribute('name') === 'toggle') {
      this.renderer.removeAttribute(target, 'class');
    }
  }
}
