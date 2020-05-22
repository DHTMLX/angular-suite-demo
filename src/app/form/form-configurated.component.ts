import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { Form as FormDHX } from 'dhx-suite';

@Component({
  selector: 'app-form-configurated',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class FormConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  form: FormDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.form = new FormDHX(this.container.nativeElement, {
      ...this.options
    });
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  }
}
