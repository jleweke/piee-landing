import { Component, OnInit, Injector } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-features-alt',
  templateUrl: './features-alt.component.html',
  styleUrls: ['./features-alt.component.css']
})
export class FeaturesAltComponent implements OnInit {

  private features: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getFeatures()
    .then(features => this.features = features);
    console.log(this.features)
  }

}
