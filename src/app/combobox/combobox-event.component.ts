import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Combobox as ComboboxDHX } from 'dhx-suite';

@Component({
  selector: 'app-combobox-event',
  template: `
    <div class="component-wrapper">
      <div><div #widget class='widget-box-wide'></div></div>
      <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss', './combobox.scss'],
})
export class ComboboxEventComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      placeholder: 'Click to choose',
      width: 200
    });

    this.combobox.data.load('https://dhtmlx.github.io/react-widgets/static/combobox.json');

    this.combobox.events.on('change', (id) => this.logEvent(id, 'change'));
    this.combobox.events.on('open', () => this.logEvent(null, 'open'));
    this.combobox.events.on('beforeClose', () => this.logEvent(null, 'beforeClose'));
    this.combobox.events.on('afterClose', () => this.logEvent(null, 'afterClose'));
    this.combobox.events.on('input', (value) => this.logEvent(value, 'input'));
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
