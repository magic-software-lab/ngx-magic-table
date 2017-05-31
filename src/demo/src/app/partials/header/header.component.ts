import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public container: ElementRef;

  public isCollapsed:boolean = true;

  public scrollTop: boolean = true;

  public homeActive: boolean = true;
  public routerEventSubscription: any;

  public activateMenu = '/';
  public menus:any = [
    { name: 'Home',
      route: '#',
      type: 'link',
      target: '_self'
    },
    {
      name: 'Getting started',
      route: '#getStarted',
      type: 'scrolling'
    },
    {
      name: 'Demos',
      route: 'demos',
      type: 'link',
      target: '_self'
    },
    {
      name: 'Docs',
      route: 'https://github.com/magic-software-lab/ngx-magic-table/blob/master/docs/getting-started/API.MD',
      type: 'link',
      target: '_blank'
    },
    {
      name: 'Github',
      route: 'https://github.com/magic-software-lab/ngx-magic-table',
      type: 'link',
      target: '_blank'
    }
  ];

  constructor(private pageScrollService: PageScrollService, private router: Router) { }

  ngOnInit() {
    this.routerEventSubscription = this.router.events.subscribe((event:any) => {
      this.homeActive = this.router.isActive('', true);
      console.log(this.homeActive);
      
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    this.scrollTop = pos <= (max + 80);
  }

  public collapsed(event:any):void {
    
  }
 
  public expanded(event:any):void {
    
  }

  public scrollingTo(id): void {
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: document, scrollTarget: id});
      this.pageScrollService.start(pageScrollInstance);
  };

}
