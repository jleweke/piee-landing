import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerContent = [{
    "footerLinks": [{
      "sectionTitle":"About",
      "link": [
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },      
      ]
      },
      {
      "sectionTitle":"Support",
      "link": [
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },      
      ]
      },
      {
      "sectionTitle":"Get Started",
      "link": [
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },      
      ]
      },
      {
      "sectionTitle":"Contact Us",
      "link": [
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        },
        {
        "linkText":"Lorem ipsum",
        "url":""
        }      
      ]
      }],   
    "images": [{
      "imageUrl":"assets/images/footer/app-store-badge.png",
      "url":"",
      "title":"App Store",
      "alt":"App Store badge"
    },
    {
      "imageUrl":"assets/images/footer/google-play.png",
      "url":"",
      "title":"Google Play Store",
      "alt":"Google Play badge"
    }],
    "bottomLinks": [{
      "linkText":"Lorem ipsum",
      "url":""
      }, 
      {
      "linkText":"Lorem ipsum",
      "url":""
    }]
}]

  public footer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.footerContent);
  }

}
