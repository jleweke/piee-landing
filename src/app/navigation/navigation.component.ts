import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

    private navigation: Entry<any>[] = [];


  constructor(private contentfulService: ContentfulService) { }
  
  ngOnInit() {
    this.contentfulService.getNav()
    .then(navigation => this.navigation = navigation);
    }
    goToRoute(id) {
      document.getElementById(id);
    }
    
}