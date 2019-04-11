import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerContent = [{
    "footerLinks": [{
      "sectionTitle":"About",
      "link": [
        {
        "linkText":"PIEE Overview",
        "url":"https://wawftraining.eb.mil/wbt/xhtml/wbt/piee/index.xhtml"
        },
        {
        "linkText":"PIEE Latest Enhancements",
        "url":"https://wawftraining.eb.mil/wbt/portal/documents/PIEEEnhancementsByRelease.docx - docx"
        },
        {
        "linkText":"Procure to Pay Summary",
        "url":"https://www.acq.osd.mil/dpap/pdi/p2p/index.html"
        },
        {
        "linkText":"WAWF Overview",
        "url":"http://www.caci.com/business/comprizon/wawf.shtml"
        },
        {
        "linkText":"WAWF Special Feature",
        "url":"http://www.caci.com/special/WAWF.shtml"
        },         
      ]
      },
      {
      "sectionTitle":"Support",
      "link": [
            {
        "linkText":"Documentation",
        "url":"https://wawf.eb.mil/xhtml/unauth/help/help.xhtml"
        },
        {
        "linkText":"Glossary",
        "url":"https://wawftraining.eb.mil/wbt/xhtml/wbt/portal/overview/Glossary.xhtml"
        },
        {
        "linkText":"Lookup Tables",
        "url":"https://wawf.eb.mil/xhtml/unauth/help/helpWhosMyGAM.xhtml"
        }, 
        {
        "linkText":"Solicitation Search",
        "url":"https://wawf.eb.mil/sol/xhtml/unauth/index.xhtml"
        },   
        {
        "linkText":"Purpose Code Management",
        "url":"https://wawf.eb.mil/pcm/xhtml/unauth/index.xhtml"
        },   
        {
        "linkText":"WAWF Users Manual",
        "url":"https://wawftraining.eb.mil/wbt/xhtml/wbt/wawf/index.xhtml"
        },  
        {
        "linkText":"Government Support",
        "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/governmentCustomerSupport.xhtml"
        },    
        {
          "linkText":"Vendor Support",
          "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/vendorCustomerSupport.xhtml"
        }
      ]
      },
      {
      "sectionTitle":"Get Started",
      "link": [
        {
        "linkText":"Log In",
        "url":"https://wawf.eb.mil/"
        },
        {
        "linkText":"Register",
        "url":"https://wawf.eb.mil/xhtml/unauth/registration/notice.xhtml"
        },
        {
        "linkText":"Machine Setup Instructions",
        "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/machineSetup.xhtml"
        },
        {
        "linkText":"Get Started – Vendors",
        "url":"https://wawf.eb.mil/xhtml/unauth/help/helpvendors.xhtml"
        },     
        {
        "linkText":"Get Started – Government",
        "url":"https://wawf.eb.mil/xhtml/unauth/help/helpgovernment.xhtml"
        },
        {
        "linkText":"Get Started – Contractors",
        "url":"https://wawf.eb.mil/xhtml/unauth/help/helpcontractors.xhtml"
        },
        {
        "linkText":"Get Started – New Federal Customers",
        "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/helpFederalCustomers.xhtml"
        } 
      ]
      },
      {
      "sectionTitle":"Contact Us",
      "link": [
        {
        "linkText":"Open a Ticket – Vendors",
        "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/vendorCustomerSupport.xhtml"
        },
        {
        "linkText":"Open a Ticket - Government",
        "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/governmentCustomerSupport.xhtml"
        },
        {
        "linkText":"866.618.5988",
        "url":"tel:866.618.5988"
        } 
      ]
      }],   
    "images": [{
      "imageUrl":"assets/images/footer/app-store-badge.png",
      "url":"https://itunes.apple.com/us/app/wawf-mobile/id561965575?ls=1&mt=8",
      "title":"App Store",
      "alt":"App Store badge"
    },
    {
      "imageUrl":"assets/images/footer/google-play.png",
      "url":"https://play.google.com/store/apps/details?id=com.wawf.droid&hl=en",
      "title":"Google Play Store",
      "alt":"Google Play badge"
    }],
    "bottomLinks": [{
      "linkText":"Accessibility / 508 ",
      "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/Accessibility.xhtml"
      }, 
      {
      "linkText":"Privacy & Security",
      "url":"https://wawf.eb.mil/xhtml/unauth/web/homepage/SecurityAndPrivacy.xhtml"
    }]
}]

  public footer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.footerContent);
  }

}
