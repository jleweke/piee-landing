import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

public faqs: any;

faqsContent =[{
"contentBlockId":"answers",
"title":"Frequently asked questions",
"subTitle":"Can’t find the answer you’re looking for? Send your question to the Ogden Help Desk through our secure messaging system. ",
"callToActionText":"Send Us Your Question",
"callToActionLink":"https://wawf.eb.mil/xhtml/unauth/web/homepage/governmentCustomerSupport.xhtml",
"feature" :[{
  "question":"How do I get started using PIEE?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  "question":"Where can I find my GAM/CAM?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  "question":"How can I check the status of a payment or invoice?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  "question":"Who can I contact for help with PIEE?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  }]
}]

  constructor() { }

  ngOnInit() {
    console.log(this.faqsContent);
  }

}
