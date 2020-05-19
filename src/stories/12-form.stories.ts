import {FormComponent} from '../app/form/form.component';
import {FormEventComponent} from '../app/form/form-event.component';
import {FormCDNComponent} from '../app/form/form-cdn.component';
import {FormConfiguratedComponent} from '../app/form/form-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Form',
  component: FormComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormComponent, FormCDNComponent, FormConfiguratedComponent, FormEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: FormComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-form></app-form>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: FormConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered',
      gravity: false,
      padding: 20,
      title: 'DHX Form',
      width: 400,
      rows: [
        {
          type: 'input',
          label: 'Name',
          icon: 'dxi-magnify',
          placeholder: 'John Doe',
          required: true
        },
        {
          type: 'input',
          label: 'Email',
          placeholder: 'jd@mail.name',
          preMessage: 'Enter Email',
          errorMessage: 'Invalid email',
          successMessage: 'Valid Email',
          validation: 'email',
          required: true
        },
        {
          type: 'input',
          inputType: 'password',
          label: 'Password',
          placeholder: '********',
          required: true
        },
        {
          type: 'checkbox',
          label: 'I agree',
          name: 'agree',
          labelInline: true,
          value: 'checkboxvalue',
          required: true
        },
        {
          type: 'button',
          value: 'Send',
          size: 'medium',
          view: 'flat',
          submit: true,
          color: 'primary'
        }
      ]
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-form-configurated [options]="options"></app-form-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: FormCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-form-cdn></app-form-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: FormEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-form-event></app-form-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

