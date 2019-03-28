import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutContent = [{
    "contentBlockId":"about",
    "title": "About the platform",
    "subTitle": "",
    "feature": [{
        "highlightIcon":"ui-icon-account-balance",
        "highlightTitle":"Who's it for",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "highlightIcon":"ui-icon-trending-up",
        "highlightTitle":"Why it's needed",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "highlightIcon":"ui-icon-assessment",
        "highlightTitle":"What it solves",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "highlightIcon":"ui-icon-access-time",
        "highlightTitle":"How it works",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },      
    ],
    "callToActionText":"",
    "callToActionLink":""
  }]

  public about: any;


  constructor() {

   }

  ngOnInit() {
    console.log(this.aboutContent);
  }

}
