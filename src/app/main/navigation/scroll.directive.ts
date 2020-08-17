import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('window:wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    if(evento.deltaY > 5) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
    }
    else if (evento.deltaY < -10)  {
      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'sticky');
    }

  }
}
