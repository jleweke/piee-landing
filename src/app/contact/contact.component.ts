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
 "contactBlockId":"contact",
 "title": "Get in touch",
 "subTitle": "",
 "callToActionText":"Send a secure message",
 "callToActionLink":"https://wawf.eb.mil/xhtml/unauth/web/homepage/governmentCustomerSupport.xhtml",
 "feature": [{
    "highlightTitle":"",
    "highlightSubtitle":"866.618.5988",
    "highlightText":"",
    "highlightLinkText":"",
    "highlightLink":"",
    "highlightLinkAccessibilityLabel":""
    }]
}]


  public contact: any;

  constructor() { }

  ngOnInit() {
    console.log(this.contactContent)
  }

}
