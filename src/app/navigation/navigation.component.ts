import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navbarContent = [{
    "logo": {
      "image":"assets/images/piee-logo.svg",
      "url":"#top",
      "alt":"Procurement Integrated Enterprise Environment (PIEE)",
      "title":"PIEE logo",
      "icon":"assets/images/piee-icon-sm.png"
    },
    "links": [{
      "linkText":"About",
      "linkUrl":"about"
    },
    {
      "linkText":"Features",
      "linkUrl":"features",
    },
    {
      "linkText":"Capabilities",
      "linkUrl":"capabilities",
    },
    {
      "linkText":"Resources",
      "linkUrl":"answers",
    },
    {
      "linkText":"Contact",
      "linkUrl":"contact",
    }],
    "navButtons": [{
      "class":"ui-button secondary",
      "linkText":"Register",
      "linkUrl":"https://wawf.eb.mil/xhtml/unauth/registration/notice.xhtml",
    },
    {
      "class":"ui-button",
      "linkText":"Log In",
      "linkUrl":"https://wawf.eb.mil/",
    }],
  }]
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

    private navigation: Entry<any>[] = [];


  constructor(private contentfulService: ContentfulService) { }
  
  ngOnInit() {
    console.log (this.navbarContent);
    }
    goToRoute(id) {
      document.getElementById(id);
    }
    
}