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
    "contentBlockId":"features",
    "title": "PIEE features",
    "subTitle": "",
    "feature": [
      {
        "highlightTitle":"test",
      /* feature */
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/data-analytics.jpg"
         }],
        "imageRight":"",
        "highlightContent": [
              {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [

             ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            },
            {
              "highlightSubtitle":"Award",
              "highlightText":"While contract award is a contract writing system function, PIEE offers both access to these systems and many tools to assist with the award process.  These tools include:",
              "highlightList": [
                {
                "listItem": "Solicitation Portal"
                },
                {
                "listItem":"Clause Logic Service"
                },
                {
                "listItem":"Supplier Performance Risk System "        
                }                
              ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            },
            {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
              ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            }            
          ]
     },
     {
      /* feature */
        "highlightTitle":"test",
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/data-analytics.jpg"
         }],
        "imageRight":"t",
        "highlightContent": [
              {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
             ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            },
            {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
              ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            },
            {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
              ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            }            
          ]
     },
     {
      /* feature */
        "highlightTitle":"test",      
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/data-analytics.jpg"
         }],
        "imageRight":"",
        "highlightContent": [
              {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
             ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            },
            {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
              ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            },
            {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [
              ],
              "highlightLinkText":"",
              "highlightLink":"",
              "highlightLinkAccessibilityLabel":""
            }            
          ]
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
