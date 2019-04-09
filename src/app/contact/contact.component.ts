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
 "subTitle": "Not sure how to use a feature or need some help? Send us a secure message or give us a call.",
 "callToActionText":"Send a secure message",
 "callToActionLink":"https://wawf.eb.mil/xhtml/unauth/web/homepage/governmentCustomerSupport.xhtml",
 "feature": [{
    "highlightTitle":"",
    "highlightSubtitle":"866.618.5988",
    "highlightText":"",
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
