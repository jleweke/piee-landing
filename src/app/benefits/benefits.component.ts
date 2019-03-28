import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  benefitsContent =[{
    "contentBlockId":"benefits",
    "title": "Platform benefits",
    "subTitle": "",
    "feature": [{
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/benefits/AdobeStock_172303985_Preview_small.jpg"
         }],
        "highlightTitle":"Capability",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/benefits/AdobeStock_103984028_Preview_small.jpg"
         }],
        "highlightTitle":"Capability",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/benefits/AdobeStock_72468558_Preview_small.jpg"
         }],
        "highlightIcon":"ui-icon-assessment",
        "highlightTitle":"Capability",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. ",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/benefits/AdobeStock_242452844_Preview_small.jpg"
         }],
        "highlightIcon":"ui-icon-access-time",
        "highlightTitle":"Capability",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },     
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/benefits/AdobeStock_247221537_Preview.jpeg"
         }],
        "highlightIcon":"ui-icon-access-time",
        "highlightTitle":"Capability",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },      
      {
        "image": [{
          "alt":"",
          "title":"",
          "url":"assets/images/benefits/AdobeStock_172303985_Preview_small.jpg"
         }],
        "highlightIcon":"ui-icon-access-time",
        "highlightTitle":"Capability",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },       
    ],
    "callToActionText":"",
    "callToActionLink":""
  }]

  public benefits: any;

  constructor() { }

  ngOnInit() {
    console.log(this.benefitsContent)
  }

}
