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
    "subHeader":"Digitally and securely manage invoicing, contracts and property throughout every phase of the procurement lifecycle",
    "heroCallToActionLink":"#benefits",
    "heroCallToAction":"View Benefits",
    "linkAccessibilityLabel":"View benefits of the Procurement Integrated Enterprise Environment",
    "heroSecondaryCallToActionLink":"#features",
    "heroSecondaryCallToAction":"View Features",
    "secondaryLinkAccessibilityLabel":"View features of the Procurement Integrated Enterprise Environment"
}]


public hero: any;

  constructor() { }

  
  ngOnInit() {
    console.log(this.heroContent);
    }
}
