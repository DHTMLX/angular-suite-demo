import { Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import { Combobox as ComboboxDHX } from 'dhx-suite';

@Component({
  selector: 'app-combobox-configurated',
  template: `<div #widget style="width: 400px"></div>`
})
export class ComboboxConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      ...this.options
    });

    this.combobox.data.load('https://dhtmlx.github.io/react-widgets/static/combobox.json');
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
