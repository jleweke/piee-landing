import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'xqeb6gbhna1m',
  accessToken: 'bde19a271edd68d364d279ae789d8076e0a29a67b8c7857914deaa052c73d1e4',

  contentTypeIds: {
    hero: 'hero',
    highlight: 'highlight',
    highlightGroup: 'highlightGroup',
    navigation: 'navigation',
    banner: 'banner',
    links: 'links',
    contentBlock: 'contentBlock',
    faq: 'faq',
    footer: 'footer',
    image: 'image'
  }
}

@Injectable()
export class ContentfulService {
  public cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }
 //get all links
 getLinks(query?: object): Promise<Entry<any>[]> {
  return this.cdaClient.getEntries(Object.assign({
    content_type: CONFIG.contentTypeIds.links,
    include: 10
  }, query))
  .then(res => res.items);
}
 //get array of all hero items
   getHero(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.hero
    }, query))
    .then(res => res.items);
  }
  //get nav items
  getNav(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.navigation
    }, query))
    .then(res => res.items);
  }
  //get clients list
    getClients(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
        content_type: CONFIG.contentTypeIds.banner,
        'sys.id':'5IxUtlFYze6WSC8wIecmKU',
        include: 10
      }, query))
     .then(res => res.items);
    } 
  //get data points
  getData(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.contentBlock,
      'sys.id':'2pTzLX7PxWQcSCk2Guw2C0',
      include:10
    }, query))
    .then(res => res.items);
  } 
  //get about content
  getAbout(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.contentBlock,
      'sys.id': '4o0WsXBnR6WIm4euUoeOmG',
      include: 10
    }, query))
    .then(res => res.items);
  }  
  //get features content
  getFeatures(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.contentBlock,
      'sys.id': '3Pj6m067YQeEWYcWCA6USO',
      include: 10
    }, query))
    .then(res => res.items);
  }  
  //get benefits content
  getBenefits(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.contentBlock,
      'sys.id': '738F204zQsMa6G4QowScgU',
      include: 10
     }, query))
    .then(res => res.items);
  }  
    //get help content
    getHelp(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
        content_type: CONFIG.contentTypeIds.contentBlock,
        'sys.id': '2alAqVjeOk2844OOko4yYC',
        include: 10
       }, query))
      .then(res => res.items);
    }  
    //get faqs content
    getFaqs(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
        content_type: CONFIG.contentTypeIds.contentBlock,
        'sys.id': '4tJAaqL568Kmg8w2a4USG2',
        include: 10
       }, query))
      .then(res => res.items);
    }  
    //get contact content
    getContact(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
        content_type: CONFIG.contentTypeIds.contentBlock,
        'sys.id': 'cjPXPGXL8oo0ZWyPmU3D1',
        include: 10
        }, query))
      .then(res => res.items);
    }          
    //get footer content
    getFooter(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
        content_type: CONFIG.contentTypeIds.footer,
        'sys.id': 'cR8bysQcZGGEQigAqcmUi',
        include: 10
       }, query))
      .then(res => res.items);
    }      
    //get array of all highlight items
  getHighlight(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.highlight
    }, query))
   .then(res => res.items);
  }  
    //get single highlight
    getOneHighlight(query?: object): Promise<Entry<any>[]> {
      return this.cdaClient.getEntries(Object.assign({
        content_type: CONFIG.contentTypeIds.highlight,
        'sys.id':'5lGZATXU40i0gwSWQcewA4'
      }, query))
     .then(res => res.items);
    } 
}

