import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

featuresContent = [{
    "contentBlockId":"benefits",
    "title": "Platform benefits",
    "subTitle": "",
    "feature": [{
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/data-analytics.jpg"
         }],
        "imageRight":"",
        "highlightTitle":"Automation",
        "highlightText":"Automated tasks, notifications, and reports limit manual administrative tasks and provide valuable insight. Automated processes within PIEE include:",
        "highlightList": [
          {
          "listItem":"Contract closeout"},
          {
          "listItem":"Planning, programming and budgeting "},
          {
          "listItem":"Task completion notifications"},
          {
          "listItem":"Review/approval request notifications",
          },
          {
          "listItem":"Document and message receipt notifications",
          }
      ],
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/users.jpg"
         }],
        "imageRight":"y",
        "highlightTitle":"Compliance",
        "highlightText":"Rules-engines, data pre-population, resource libraries, workflows, and adherence to coding standards help ensure compliance with government regulations including:",
        "highlightList": [
          {
          "listItem":"Federal Acquisition Regulations (FAR) compliance"},
          {
          "listItem":"Defense Federal Acquisition Regulation Supplement (DFARS)"},
          {
          "listItem":"Section 508 and American with Disabilities Act (ADA) "},
          {
          "listItem":"Prompt Payment Act",
          }
      ],
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/money.jpg"
         }],
        "imageRight":"",
        "highlightTitle":"Security",
        "highlightText":"PIEE ensures only authorized users have access to data and functions within the platform and uses the following methods to maximize security:",
        "highlightList": [
          {
          "listItem":"Digital signature, smart card, and data encryption technology",
          },
          {
          "listItem":"Controlled access to the system based on user role and function"
          },
          {
          "listItem":"Hardware Security Module (HSM) to protect against hacking"
          },
          {
          "listItem":"Public Key Infrastructure (PKI), strong passwords and Common Access Cards (CAC) for authentication",
          }
      ],
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
    ],
    "callToActionText":"Get started",
    "callToActionLink":""
}]

  private features: Entry<any>[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.featuresContent);
  }

}
