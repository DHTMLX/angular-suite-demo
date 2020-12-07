import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Tabbar as TabbarDHX } from "dhx-suite";

@Component({
  selector: "app-tabbar-event",
  template: ` <div class="component-wrapper">
    <div #widget class="dhx-container--tabbar"></div>
    <div class="event-list events-list-wrapper">
      <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
      <div class="events-list--element" *ngFor="let event of eventsList">
        <p>{{ event.name }}</p>
        <p>{{ event.payload }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class TabbarEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  tabbar: TabbarDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.tabbar = new TabbarDHX(this.container.nativeElement, {
      mode: "top",
      css: "dhx_widget--bordered dhx_widget--bg_white",
      closeButtons: true,
      tabAlign: "center",
      views: [
        {
          id: "Vilnius",
          tab: "Vilnius",
          html:
            "<div><p style='font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px'><strong>Vilnius(Lithuanian pronunciation: [ˈvʲɪlʲnʲʊs]</strong> , see also other names) is the capital of Lithuania and its largest city, with a population of 574,147 as of 2018. Vilnius is in the southeast part of Lithuania and is the second largest city in the Baltic states. Vilnius is the seat of the main government institutions of Lithuania and the Vilnius District Municipality.</p></div>",
        },
        {
          id: "Paris",
          tab: "Paris",
          html:
            "<div><p style='font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px'><strong>Paris (French pronunciation: ​[paʁi]</strong> is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and an official estimated population of 2,140,526 residents as of 1 January 2019. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science, as well as the arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2019 population of 12,213,364, or about 18 percent of the population of France.</p></div>",
        },
        {
          id: "London",
          tab: "London",
          html:
            "<div><p style='font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px'><strong>London</strong> is the capital and largest city of both England and the United Kingdom, as well as the largest city within the European Union. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans</p></div>",
        },
        {
          id: "Rome",
          tab: "Rome",
          html:
            "<div><p style='font-size: 18px; line-height: 1.6; padding-left: 20px; padding-right: 20px'><storng>Rome (Latin and Italian: Roma [ˈroːma]</storng> is the capital city and a special comune of Italy (named Comune di Roma Capitale). Rome also serves as the capital of the Lazio region. With 2,872,800 residents in 1,285 km2 (496.1 sq mi), it is also the country's most populated comune. It is the fourth most populous city in the European Union by population within city limits. It is the centre of the Metropolitan City of Rome, which has a population of 4,355,725 residents, thus making it the most populous metropolitan city in Italy.</p></div>",
        },
      ],
    });

    this.tabbar.events.on("change", (activeId, prevId) => {
      const info = { activeId, prevId };
      this.logEvent(JSON.stringify(info), "change");
    });
    this.tabbar.events.on("afterClose", id => this.logEvent(id, "afterClose"));
    this.tabbar.events.on("beforeClose", id => this.logEvent(id, "beforeClose"));
  }

  ngOnDestroy() {
    if (this.tabbar) {
      this.tabbar.destructor();
    }
  }
}
