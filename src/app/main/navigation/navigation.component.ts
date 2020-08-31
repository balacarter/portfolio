import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  navLinks = [
    { path: 'me', label: 'About Me' },
    { path: 'actnow', label: 'ACTnow' }
  ];

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
    console.log(this.elementPosition.offsetTop);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll > this.elementPosition){
      console.log(this.elementPosition.offsetTop);
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
