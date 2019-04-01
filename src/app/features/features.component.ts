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
    "title": "Platform features",
    "subTitle": "",
    "feature": [{
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/data-analytics.jpg"
         }],
        "imageRight":"",
        "highlightTitle":"Feature one title",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"Show me more",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/users.jpg"
         }],
        "imageRight":"y",
        "highlightTitle":"Feature two title",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
        "highlightLinkText":"Show me more",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
      },
      {
        "image": [{
          "alt":"Image alt tag",
          "title":"image title",
          "url":"assets/images/features/money.jpg"
         }],
        "imageRight":"",
        "highlightTitle":"Feature three title",
        "highlightText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. ",
        "highlightLinkText":"Show me more",
        "highlightLink":"",
        "highlightLinkAccessibilityLabel":""
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
