import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Combobox as ComboboxDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-combobox',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './combobox.scss'],
})
export class ComboboxComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      placeholder: 'Click to choose',
    });

    this.combobox.data.load('https://dhtmlx.github.io/react-widgets/static/combobox.json');
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
