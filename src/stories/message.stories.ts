import { MessageComponent } from '../app/message/message.component';
import { MessageCDNComponent } from '../app/message/message-cdn.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Message',
  component: MessageComponent,
  decorators: [
    moduleMetadata({
      declarations: [MessageComponent, MessageCDNComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: MessageComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/message/message.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-message></app-message>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: MessageCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/message/message-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-message-cdn></app-message-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
