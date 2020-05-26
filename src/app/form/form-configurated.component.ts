import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { Form as FormDHX } from 'dhx-suite';

@Component({
  selector: 'app-form-configurated',
  template: `<div #widget></div>`
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
