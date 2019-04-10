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
    "label":"Procurement Integrated Enterprise Environment",
  },
    "image":"assets/images/hero/man-in-city.jpg",
    "header":"Procurement Integrated Enterprise Environment",
    "subHeader":"Enterprise services, capabilities, and systems supporting the end-to-end Procure-to-Pay (P2P) business process",
    "heroCallToActionLink":"#features",
    "heroCallToAction":"View Features",
    "linkAccessibilityLabel":"View features of the Procurement Integrated Enterprise Environment",
    "heroSecondaryCallToActionLink":"#resources",
    "heroSecondaryCallToAction":"View Resources",
    "secondaryLinkAccessibilityLabel":"View resources for the Procurement Integrated Enterprise Environment"
}]


public hero: any;

  constructor() { }

  
  ngOnInit() {
    console.log(this.heroContent);
    }
}
