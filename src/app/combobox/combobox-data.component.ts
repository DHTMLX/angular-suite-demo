import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import {Combobox as ComboboxDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-combobox-data',
  template: `
    <div>
      <div class="btn-container">
        <button (click)="handleClick()" class="custom-button">Select first item</button>
      </div>
      <div #widget class='container widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss', './combobox.scss'],
})
export class ComboboxDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  data = new DataCollection();

  handleClick() {
    this.data.map(() => this.data.update(this.data.getId(0), {$selected: true}));
  }

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      placeholder: 'Click to choose',
      data: this.data
    });

    this.data.load('https://dhtmlx.github.io/react-widgets/static/combobox.json');
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
