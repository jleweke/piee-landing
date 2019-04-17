import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

helpContent = [{
"contentBlockId":"resources",
"title":"Resources",
"subTitle":"",
"feature": [{
  "image":[{
    "alt":"Learning image",
    "title":"Learning",
    "url":"assets/images/resources/learn-min.png"    
  }],
  "highlightTitle":"Documentation",
  "highlightSubtitle":"Videos and Guides",
  "highlightText":"View videos and documentation for common workflows, roles, and functionality.",
  "highlightLinkText":"Go to Resources",
  "highlightLink":"https://wawftraining.eb.mil/wbt/",
  "highlightLinkAccessibilityLabel":"Go to PIEE training site"
},
{
  "image":[{
    "alt":"User registration image",
    "title":"User registration",
    "url":"assets/images/resources/user-min.png"    
  }],
  "highlightTitle":"Registration ",
  "highlightSubtitle":"Steps to Get Started",
  "highlightText":"Get help registering as a vendor or government user. ",
  "highlightLinkText":"Register",
  "highlightLink":"https://wawf.eb.mil/xhtml/unauth/registration/notice.xhtml",
  "highlightLinkAccessibilityLabel":""
},
{
  "image":[{
    "alt":"Settings image",
    "title":"Settings",
    "url":"assets/images/resources/settings-white-min.png"    
  }],
  "highlightTitle":"Setup",
  "highlightSubtitle":"Setup Instructions",
  "highlightText":"Follow instructions to get up and running with PIEE. ",
  "highlightLinkText":"View Setup Instructions",
  "highlightLink":"https://wawf.eb.mil/xhtml/unauth/web/homepage/machineSetup.xhtml",
  "highlightLinkAccessibilityLabel":"Go to PIEE setup instructions"
},
{
  "image":[{
    "alt":"Search image",
    "title":"Search",
    "url":"assets/images/resources/search-min.png"    
  }],
  "highlightTitle":"Information Lookup",
  "highlightSubtitle":"Search Tools",
  "downloads": [{
    "downloadText":"Find GAM/CAM",
    "downloadUrl":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
    },
    {
    "downloadText":"Find Active DoDAAC/Roles",
    "downloadUrl":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
    },
    {
    "downloadText":"Find CAGEs/Contractor DoDAACs",
    "downloadUrl":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
    },
    {
    "downloadText":"Find Units of Measure",
    "downloadUrl":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
    },
    {
    "downloadText":"Find Vendor Point of Contact",
    "downloadUrl":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
    },
    {
    "downloadText":"Search Solicitations",
    "downloadUrl":""
    }],
  "highlightText":"",
  "highlightLinkText":"",
  "highlightLink":"",
  "highlightLinkAccessibilityLabel":""
}
],
"callToActionText":"",
"callToActionLink":""
}]

public help: any;
  
  constructor() { }

  ngOnInit() {
    console.log(this.helpContent);
  }

}
