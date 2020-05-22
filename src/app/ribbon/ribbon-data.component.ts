import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Ribbon as RibbonDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-ribbon-data',
  template: `
      <div>
          <div class="btn-container">
              <button (click)="handleAddClick(click)" class="custom-button">disable/enable print button</button>
          </div>
          <div #widget class='container widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './ribbon.scss'],
})
export class RibbonDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: RibbonDHX;
  wait: Promise<void>;

  data = new TreeCollection();
  disabled = false;

  handleAddClick = () => {
    this.data.update('print', {disabled: !this.data.getItem('print').disabled});
  };

  ngOnInit() {
    this.toolbar = new RibbonDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      data: this.data,
    });

    this.data.load('https://dhtmlx.github.io/react-widgets/static/ribbon.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
