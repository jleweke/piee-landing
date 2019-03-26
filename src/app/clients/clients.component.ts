import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  // private links: Entry<any>[] = [];
  private banner: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    // this.contentfulService.getClients()
    // .then(links => this.links = links);
    this.contentfulService.getClients()
    .then(banner => this.banner = banner);
  }

}
