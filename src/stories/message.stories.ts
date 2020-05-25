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
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/message/message.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-message></app-message>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: MessageCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/message/message-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-message-cdn></app-message-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
