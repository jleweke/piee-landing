import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
 
 dataContent = [{
 "feature" :[{
   "highlightTitle":"$383B+",
   "highlightText":"Worth of Invoices Processed Yearly"
  },
  {
  "highlightTitle":"$810,000",
  "highlightText":"Worth of Invoices Processed Every Minute"
  },
  {
  "highlightTitle":"50%+",
  "highlightText":"Reduction in Invoice Cycle Time"
  },
  {
  "highlightTitle":"1MM",
  "highlightText":"Users"
  }],
 }]
  public data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.dataContent);
  }

}
