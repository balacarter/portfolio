import { Directive, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit{

  elementPosition: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.el.nativeElement.offsetTop;
    console.log(this.elementPosition);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll > this.elementPosition){
      this.renderer.addClass(this.el.nativeElement, 'sticky');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'sticky');
    }
  }

}
