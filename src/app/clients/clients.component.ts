import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

 clientsContent = [{
   "bannerHeader": "Trusted by our government",
   "accessibleImages": [{
      "alt":"Department of Defense logo",
      "title":"Department of Defense",
      "url":"assets/images/clients/department-of-defense-logo-gray.png"
    },
    {
      "alt":"Defense Logistics Agency logo",
      "title":"Defense Logistics Agency",
      "url":"assets/images/clients/dla-logo-gray.png"
     },
     {
      "alt":"U.S. Army logo",
      "title":"U.S. Army",
      "url":"assets/images/clients/air-force-logo-gray.png"
     },
     {
      "alt":"U.S. Air Force logo",
      "title":"U.S. Air Force",
      "url":"assets/images/clients/army-logo-gray.png"
     },
     {
      "alt":"America's Navy logo",
      "title":"America's Navy",
      "url":"assets/images/clients/navy-logo-gray.png"
     }],
    "buttonLink":"",
    "buttonAccessibilityLabel":"",
    "buttonText":""
 }]

  public banner: any;

  constructor() { }

  ngOnInit() {
    console.log(this.clientsContent)
  }

}
