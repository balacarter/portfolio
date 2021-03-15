import { Component, HostBinding, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-thearqive',
  templateUrl: './thearqive.component.html',
  styleUrls: ['./thearqive.component.scss']
})
export class ThearqiveComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class') className = '';
  ngOnInit(): void {
    const darkMode = 'darkMode';
    this.className = 'darkMode';
  }

}
