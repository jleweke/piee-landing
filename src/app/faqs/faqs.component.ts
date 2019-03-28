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
"subTitle":"",
"callToActionText":"View all faqs",
"callToActionLink":"",
"feature" :[{
  "question":"How do I get started using the PIEE platform?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  "question":"Where can I find my GAM/CAM?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  "question":"How can I check the status of a payment?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
  "question":"How do I approve an invoice?",
  "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  }]
}]

  constructor() { }

  ngOnInit() {
    console.log(this.faqsContent);
  }

}
