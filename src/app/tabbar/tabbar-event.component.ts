import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Tabbar as TabbarDHX} from 'dhx-suite';

@Component({
  selector: 'app-tabbar-cdn',
  template: `
    <div class="component-wrapper">
      <div #widget class='widget-box-wide'></div>
      <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss'],

})
export class TabbarEventComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  tabbar: TabbarDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.tabbar = new TabbarDHX(this.container.nativeElement, {
      mode: 'top',
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      closeButtons: true,
      views: [
        {
          tab: 'Vilnius',
          width: 400,
          html:
            "<div><p style='font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px'><strong>Vilnius(Lithuanian pronunciation: [ˈvʲɪlʲnʲʊs]</strong> , see also other names) is the capital of Lithuania and its largest city, with a population of 574,147 as of 2018. Vilnius is in the southeast part of Lithuania and is the second largest city in the Baltic states. Vilnius is the seat of the main government institutions of Lithuania and the Vilnius District Municipality.</p></div>",
        },
        {
          tab: 'Paris',
          width: 400,
          html:
            "<div><p style='font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px'><strong>Paris (French pronunciation: ​[paʁi]</strong> is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and an official estimated population of 2,140,526 residents as of 1 January 2019. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science, as well as the arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2019 population of 12,213,364, or about 18 percent of the population of France.</p></div>",
        }
      ]
    });

    this.tabbar.events.on('change', (id) => this.logEvent(id, 'change'));
    this.tabbar.events.on('afterClose', (id) => this.logEvent(id, 'afterClose'));
    this.tabbar.events.on('beforeClose', (id) => this.logEvent(id, 'beforeClose'));
  }

  ngOnDestroy() {
    if (this.tabbar) {
      this.tabbar.destructor();
    }
  }
}
