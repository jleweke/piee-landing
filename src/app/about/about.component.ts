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
    "subTitle": "The Procurement Integrated Enterprise Environment (PIEE) is the primary enterprise procure-to-pay (P2P) application for the Department of Defense and it’s supporting agencies and is trusted by companies reporting on over $7.1 billion in spending.",
    "feature": [{
        "highlightIcon":"ui-icon-trending-up",
        "highlightTitle":"Increase productivity",
        "highlightText":"PIEE enables automation through every phase of the procurement process reducing manual data entry and administration tasks from pre-award through contract close.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "highlightIcon":"ui-icon-verified-user",
        "highlightTitle":"Reduce risk",
        "highlightText":"With built-in checks, controlled access, workflows, data pre-population and error tracking, PIEE helps ensure contracts, invoices and payment disbursements are as accurate as possible.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "highlightIcon":"ui-icon-group",
        "highlightTitle":"Promote collaboration",
        "highlightText":"PIEE’s Integrated document management and messaging capabilities provide a centralized way to securely communicate and share important information across organizations and roles.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "highlightIcon":"ui-icon-visibility",
        "highlightTitle":"Enhance visibility",
        "highlightText":"Global access to information such as reports, documents, and workflow statuses allow all users to have greater visibility into the procurement process at any time.",
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
