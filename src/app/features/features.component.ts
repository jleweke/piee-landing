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
    "title": "PIEE Features",
    "subTitle": "",
    "feature": [
      {
        "highlightTitle":"Tools for each step of the procurement process",
      /* feature */
        "image": [{
          "alt":"Data and automation image",
          "title":"Data and automation",
          "url":"assets/images/features/data-tools.png"
         }],
        "imageRight":"",
        "highlightContent": [
              {
              "highlightSubtitle":"Requirements",
              "highlightText":"At the start of any procurement is a requirement. The Requirements section of PIEE allows users to write requirements in tools that are Purchase Request Data Standard (PRDS) compliant.",
              "highlightList": [

             ],
             "highlightLinkText":"Learn About More Capabilities",
             "highlightLink":"#capabilities",
             "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            },
            {
              "highlightSubtitle":"Award",
              "highlightText":"While contract award is a contract writing system function, PIEE offers both access to these systems and many tools to assist with the award process. These tools include:",
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
              "highlightLinkText":"Learn About More Capabilities",
              "highlightLink":"#capabilities",
              "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            },
            {
              "highlightSubtitle":"Post Award Administration",
              "highlightText":"The administration of an awarded contract takes a team. With modules to support the appointment of Contracting Officer Representative (COR) and their duties, management of contract deficiency reports, and contract closeout, the post award administration area of PIEE gives users the tools to effectively manage awards throughout their lifecycle. ",
              "highlightList": [
              ],
              "highlightLinkText":"Learn About More Capabilities",
              "highlightLink":"#capabilities",
              "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            }            
          ]
     },
     {
      /* feature */
        "highlightTitle":"Financial and property management",
        "image": [{
          "alt":"Financial tools image",
          "title":"Financial tools",
          "url":"assets/images/features/financial-tools.png"
         }],
        "imageRight":"t",
        "highlightContent": [
              {
              "highlightSubtitle":"Payment",
              "highlightText":"Supporting the receipt, acceptance, and payment process has been one of PIEE's longest missions. Wide Area Workflow (WAWF) is the backbone of the payment capabilities set with other modules providing additional visibility into this business process.",
              "highlightList": [
             ],
             "highlightLinkText":"Learn About More Capabilities",
             "highlightLink":"#capabilities",
             "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            },
            {
              "highlightSubtitle":"Property Management",
              "highlightText":"PIEE plays a central role in the management of government property moving in and out of contractor possession. This includes the Government Furnished Property Attachment, property transfers, and property loss processes. It also includes the IUID Registry where DoD stores information about the high value assets that have been procured.",
              "highlightList": [
              ],
              "highlightLinkText":"Learn About More Capabilities",
              "highlightLink":"#capabilities",
              "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            },
            {
              "highlightSubtitle":"Purchase Card",
              "highlightText":"DoD's Purchase Card Program leverages PIEE to facilitate the formal appointment of all roles. PIEE also serves as a single sign on point for access to the Bank System (AxOL) and the Data Mining Solution (IOD)",
              "highlightList": [
              ],
              "highlightLinkText":"Learn About More Capabilities",
              "highlightLink":"#capabilities",
              "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            }            
          ]
     },
     {
      /* feature */
        "highlightTitle":"Secure business process administration",      
        "image": [{
          "alt":"Business administration tools image",
          "title":"Business administration tools",
          "url":"assets/images/features/business-strategy.png"
         }],
        "imageRight":"",
        "highlightContent": [
              {
              "highlightSubtitle":"Security",
              "highlightText":"PIEE houses the National Industrial Security Program (NISP) Contract Classification System (NCCS) which is the enterprise Federal information system application supporting DoD, the other Federal Agencies and cleared industry in the NISP by facilitating the processing and distribution of contract security classification specifications for contracts requiring access to classified information.",
              "highlightList": [
             ],
              "highlightLinkText":"Learn more about security",
              "highlightLink":"https://www.dss.mil/is/nccs/",
              "highlightLinkAccessibilityLabel":"Learn more about security"
            },
            {
              "highlightSubtitle":"Reporting and Document Retrieval",
              "highlightText":"PIEE has a robust set of document retrieval and reporting tools within the environment starting with the ability to lookup a contract in EDA moving to more advanced analytics and reports in one of the reporting features.",
              "highlightList": [
              ],
              "highlightLinkText":"Learn About More Capabilities",
              "highlightLink":"#capabilities",
              "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            },
            {
              "highlightSubtitle":"Operations Support",
              "highlightText":"PIEE's Operations Support layer offers tools to DoD and Service leads who help oversee the P2P process such as a process model library and DoDAAC Purpose Code Management.",
              "highlightList": [
              ],
              "highlightLinkText":"Learn About More Capabilities",
              "highlightLink":"#capabilities",
              "highlightLinkAccessibilityLabel":"Learn more about capabilities"
            }            
          ]
     },   
    ],
    "callToActionText":"Browse Resources",
    "callToActionLink":"#answers"
}]

  private features: Entry<any>[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.featuresContent);
  }

}
