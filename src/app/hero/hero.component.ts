import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

 heroContent = [{
  "accessibility": {
    "role":"banner",
    "label":"Secure end-to-end procurement platform",
  },
    "image":"assets/images/hero/man-in-city.jpg",
    "header":"Secure end-to-end procurement platform",
    "subHeader":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
    "heroCallToActionLink":"#",
    "heroCallToAction":"Get Started",
    "linkAccessibilityLabel":"",
    "heroSecondaryCallToActionLink":"#",
    "heroSecondaryCallToAction":"View Documentation",
    "secondaryLinkAccessibilityLabel":""
}]


public hero: any;

  constructor() { }

  
  ngOnInit() {
    console.log(this.heroContent);
    }
}
