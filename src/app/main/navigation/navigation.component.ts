import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navLinks = [
    { path: 'actnow', label: 'ACTnow' },
    { path: 'main-view', label: 'The Solution' },
    { path: 'actnow', label: 'The Game' },
    { path: 'actnow', label: 'Probability calculator' },
  ];



}
