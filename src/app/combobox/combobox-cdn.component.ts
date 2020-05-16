import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
  selector: 'app-combobox-cdn',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['./combobox.scss'],
})
export class ComboboxCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  combobox: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.combobox = new dhx.Combobox(this.container.nativeElement, {
        placeholder: 'Click to choose',
      });
      this.combobox.data.load('https://dhtmlx.github.io/react-widgets/static/combobox.json');
      this.ready.emit({combobox: this.combobox});
    });
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
