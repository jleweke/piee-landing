import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  private hero: Entry<any>[] = [];


  constructor(private contentfulService: ContentfulService) { }


  
  ngOnInit() {
    this.contentfulService.getHero()
    .then(hero => this.hero = hero);
    }
}
