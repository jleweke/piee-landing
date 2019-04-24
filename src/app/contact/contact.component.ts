import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {

contactContent = [{
 "contentBlockId":"contact",
 "title": "Get in touch",
 "subTitle": "Not sure how to use a feature or need some help? Send  a secure message to the Ogden Help Desk or give us a call.",
 "callToActionText":"Send a secure message",
 "callToActionLink":"https://wawf.eb.mil/xhtml/unauth/web/homepage/governmentCustomerSupport.xhtml",
 "feature": [{
    "highlightTitle":"",
    "highlightSubtitle":"866.618.5988",
    "highlightText": [{
      "paragraph":"For questions or concerns with the information on your contract or the current status of an existing payment request, please contact your Contracting Officer."
      },
      {
      "paragraph":"The Procurement Integrated Enterprise Environment Helpdesk cannot take any action on your WAWF document."
      },
      {
      "paragraph":"For payment status, please validate the invoice in question is in a processed status in the WAWF application. If your document is in a processed status, please contact DFAS for payment information or go the myInvoice application, which is now a part of Procurement Integrated Enterprise Environment, or contact DFAS for payment information."
    }],
    "highlightLinkText":"",
    "highlightLink":"tel:866.618.5988",
    "highlightLinkAccessibilityLabel":""
    }]
}]


  public contact: any;

  constructor() { }

  ngOnInit() {
    console.log(this.contactContent)
  }

}
