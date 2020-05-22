import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Form as FormDHX} from 'dhx-suite';

@Component({
  selector: 'app-form-event',
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
export class FormEventComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  form: FormDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  }

  ngOnInit() {
    this.form = new FormDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
      gravity: false,
      width: 400,
      rows: [
        {
          type: 'input',
          label: 'Name',
          required: true,
          placeholder: 'John Doe'
        },
        {
          type: 'input',
          label: 'Email',
          validation: 'email',
          required: true,
          placeholder: 'jd@mail.name'
        },
        {
          type: 'checkbox',
          label: 'I agree',
          name: 'agree',
          labelPosition: 'right',
          id: 'agree',
          required: true,
          value: 'checkboxvalue',
        },
        {
          type: 'button',
          value: 'Send',
          size: 'medium',
          view: 'flat',
          color: 'primary',
          submit: true
        }
      ]
    });

    this.form.events.on('change', (name, newValue) => {
      const info = {name, newValue};
      this.logEvent(JSON.stringify(info), 'change');
    });
    this.form.events.on('buttonClick', (id) => this.logEvent(id, 'buttonClick'));
    this.form.events.on('validationFail', (id) => this.logEvent(id, 'validationFail'));
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  }
}
