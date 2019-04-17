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
    "contentBlockId":"capabilities",
    "title": "PIEE Capabilities ",
    "subTitle": "",
    "feature": [{
        "image": [{
          "alt":"Single Sign On",
          "title":"Single Sign On",
          "url":"assets/images/benefits/single-sign-on-min.png"
         }],
        "highlightTitle":"Single Sign On image",
        "highlightText":"Log in once and seamlessly access any connected system without having to re-enter credentials.",
        "highlightLinkText":"View SSO FAQs",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/piee/index.xhtml#PIEEAccessControlsandSingleSignOnFAQs",
        "highlightLinkAccessibilityLabel":"View single sign on frequently asked questions"
      },
      {
        "image": [{
          "alt":"Invoicing and payments image",
          "title":"invoicing and payments",
          "url":"assets/images/benefits/invoicing-and-payments-min.png"
         }],
        "highlightTitle":"Invoicing and Payments",
        "highlightText":"Submit, request, receive, and approve invoices, payments and all required contract documentation, check the status of existing invoices and pending payments, and access tax statements.",
        "highlightLinkText":"See how to check Invoice Status",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/minv/index.xhtml",
        "highlightLinkAccessibilityLabel":"View instructions for checking and invoice or payment status"
      },
      {
        "image": [{
          "alt":"Contract writing image",
          "title":"Contract writing",
          "url":"assets/images/benefits/contract-writing-min.png"
         }],
        "highlightTitle":"Contract Writing",
        "highlightText":"Ensure compliance with Federal Acquisition Regulations (FAR) and Defense Federal Acquisition Regulation Supplement (DFARS) with a rules-driven web service that determines  appropriate clauses for contracts and solicitations.",
        "highlightLinkText":"Download User Guide",
        "highlightLink":"https://dodprocurementtoolbox.com/cms/sites/default/files/resources/2019-01/CLS User Manual January 2019.pdf",
        "highlightLinkAccessibilityLabel":"Download the user guide"
      },
      {
        "image": [{
          "alt":"Contract writing image",
          "title":"Contract writing",
          "url":"assets/images/benefits/contract-writing-min.png"
         }],
        "highlightTitle":"Contract Deficiency Reporting",
        "highlightText":"Improve contract quality by identifying, tracking, and eliminating common contract problems that complicate payment and contract administration processes.",
        "highlightLinkText":"View Documentation",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/cdr/index.xhtml",
        "highlightLinkAccessibilityLabel":"View documentation for contract deficiency reporting"
      },     
      {
        "image": [{
          "alt":"Property management image",
          "title":"Property management",
          "url":"assets/images/benefits/worfklow-tracking-min.png"
         }],
        "highlightTitle":"Property Management",
        "highlightText":"Manage and view up-to-date information about Government Furnished Property (GFP) including transfer status and current property location.",
        "highlightLinkText":"View documentation",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/gfp/index.xhtml",
        "highlightLinkAccessibilityLabel":"View documentation for managing government furnished property"
      },      
      {
        "image": [{
          "alt":"Document management image",
          "title":"Document management",
          "url":"assets/images/benefits/document-management-min.png"
         }],
        "highlightTitle":"Document Management ",
        "highlightText":"Upload, view, manage, and search documents needed for each phase of the procurement lifecycle.",
        "highlightLinkText":"View User Guide",
        "highlightLink":"https://eda2.ogden.disa.mil/users_guide/index.html",
        "highlightLinkAccessibilityLabel":"View user guide for document management"
      },      
      {
        "image": [{
          "alt":"Officer management image",
          "title":"Officer management",
          "url":"assets/images/benefits/team-officers-min.png"
         }],
        "highlightTitle":"Contract Officer Management",
        "highlightText":"Appoint and manage officers and purchase card holders and track required training progress of appointees. ",
        "highlightLinkText":"View Documentation",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/pcm/index.xhtml",
        "highlightLinkAccessibilityLabel":"View documentation for contract officer and purpose code management"
      },
      {
        "image": [{
          "alt":"Online Messaging image",
          "title":"Online Messaging",
          "url":"assets/images/benefits/secure-messaging-min.png"
         }],
        "highlightTitle":"Secure Messaging ",
        "highlightText":"Send and receive messages and share documents using a secure messaging system.",
        "highlightLinkText":"View Documentation",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/ccm/index.xhtml",
        "highlightLinkAccessibilityLabel":"View documentation for secure contracting communication"
      },            
      {
        "image": [{
          "alt":"Automation image",
          "title":"Automation",
          "url":"assets/images/benefits/auomated-data-min.png"
         }],
        "highlightTitle":"Automated Contract Closeout ",
        "highlightText":"Once a contract meets the necessary criteria to be considered complete, the system automatically initiates and completes the closeout process greatly reducing manual administrative tasks. ",
        "highlightLinkText":"View Documentation",
        "highlightLink":"https://wawftraining.eb.mil/wbt/xhtml/wbt/closeout/index.xhtml",
        "highlightLinkAccessibilityLabel":"View documentation for automated contract closeout"
      }
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
