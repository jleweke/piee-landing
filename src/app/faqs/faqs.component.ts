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
  "answer":"To get started with PIEE, please follow the steps in our Machine Setup guide",
  "linkText":"Go to Machine Setup",
  "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/machineSetup.xhtml"
  },
  {
  "question":"Where can I find my GAM/CAM?",
  "answer":"To find your GAM or CAM, please use use our GAM/CAM lookup tool.",
  "linkText":"Find GAM / CAM",
  "url":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
  },
  {
  "question":"How can I check the status of a payment or invoice?",
  "answer":"To request payment history or invoice status, please send a request to the applicable payment office. You can find contact information on the Defense Finance and Accounting Service (DFAS) webesite.",
  "linkText":"Go to DFAS ",
  "url":"https://www.dfas.mil/dfas/contractorsvendors/poemail.html"
  },
  {
  "question":"Where can I find information on how to use applications within PIEE?",
  "answer":"Please refer to the Web Based Training for the specific application.",
  "linkText":"Go to Web Based Training",
  "url":"https://wawftraining.eb.mil/wbt/"
  },  
  {
  "question":"Who can I contact for help with PIEE?",
  "answer":"You can find help desk contact information below.",
  "linkText":"",
  "url":"",
  "tableContent":"t"
 }]
}]

  constructor() { }

  ngOnInit() {
    console.log(this.faqsContent);
  }

}
