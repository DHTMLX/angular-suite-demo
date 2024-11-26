// tabbar.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tabbar } from '@dhx/trial-suite';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: [],
})
export class TabbarComponent implements OnInit {
  @ViewChild('tabbarNode', { static: true }) tabbarNode!: ElementRef;
  tabbar: any;

  ngOnInit() {
    this.tabbar = new Tabbar(this.tabbarNode.nativeElement, {
      tabAlign: 'center',
      disabled: ['reports', 'tickets', 'users', 'applications'],
      views: [
        { id: 'dashboard', tab: 'Dashboard' },
        { id: 'reports', tab: 'Reports' },
        { id: 'tickets', tab: 'Tickets' },
        { id: 'users', tab: 'Users' },
        { id: 'applications', tab: 'Applications' },
      ],
    });
  }

  ngOnDestroy() {
    this.tabbar && this.tabbar.destructor();
  }
}
