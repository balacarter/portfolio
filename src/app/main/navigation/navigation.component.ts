import { Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent{
  navLinks = [
    {
      path: 'me',
      label: 'About Me'
    },
    {
      path: 'actnow',
      label: 'ACT Now'
    },
    /*{
      path: 'thearqive',
      label: 'The Arqive'
    }*/
  ];



}
