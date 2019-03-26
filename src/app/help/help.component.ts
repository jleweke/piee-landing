import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  private help: Entry<any>[] = [];
  
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getHelp()
    .then(help => this.help = help);
    console.log(this.help)
  }

}
