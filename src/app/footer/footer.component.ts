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
        "linkText":"PIEE Overview",
        "url":""
        },
        {
        "linkText":"PIEE Latest Enhancements",
        "url":""
        },
        {
        "linkText":"Procure to Pay Summary",
        "url":""
        },
        {
        "linkText":"WAWF Overview",
        "url":""
        },
        {
        "linkText":"WAWF Special Feature",
        "url":""
        },         
      ]
      },
      {
      "sectionTitle":"Support",
      "link": [
        {
        "linkText":"Help Desk",
        "url":""
        },
        {
        "linkText":"Documentation",
        "url":""
        },
        {
        "linkText":"Glossary",
        "url":""
        },
        {
        "linkText":"Lookup Tables",
        "url":""
        }, 
        {
        "linkText":"Solicitation Search",
        "url":""
        },   
        {
        "linkText":"Purpose Code Management",
        "url":""
        },   
        {
        "linkText":"WAWF Users Manual",
        "url":""
        },  
        {
        "linkText":"Government Support",
        "url":""
        },    
        {
          "linkText":"Vendor Support",
          "url":""
        }
      ]
      },
      {
      "sectionTitle":"Get Started",
      "link": [
        {
        "linkText":"Log In",
        "url":""
        },
        {
        "linkText":"Register",
        "url":""
        },
        {
        "linkText":"Machine Setup Instructions",
        "url":""
        },
        {
        "linkText":"Get Started – Vendors",
        "url":""
        },     
        {
        "linkText":"Get Started – Government",
        "url":""
        },
        {
        "linkText":"Get Started – Contractors",
        "url":""
        },
        {
        "linkText":"Get Started – New Federal Customers",
        "url":""
        } 
      ]
      },
      {
      "sectionTitle":"Contact Us",
      "link": [
        {
        "linkText":"Email the Help Desk",
        "url":""
        },
        {
        "linkText":"Open a Ticket – Vendors",
        "url":""
        },
        {
        "linkText":"Open a Ticket - Government",
        "url":""
        },
        {
        "linkText":"866.618.5988",
        "url":"tel:866.618.5988"
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
      "linkText":"Accessibility / 508 ",
      "url":""
      }, 
      {
      "linkText":"Privacy & Security",
      "url":""
    }]
}]

  public footer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.footerContent);
  }

}
