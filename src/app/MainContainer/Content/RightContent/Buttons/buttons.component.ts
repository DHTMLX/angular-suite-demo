// buttons-form.component.ts
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Form } from '@dhx/trial-suite';

@Component({
  selector: 'app-buttons-form',
  templateUrl: './buttons.component.html',
  styleUrls: [],
})
export class ButtonsFormComponent implements OnInit, OnDestroy {
  @ViewChild('buttonsContainer', { static: true }) formContainer!: ElementRef;
  form: any;

  ngOnInit() {
    this.form = new Form(this.formContainer.nativeElement, {
      height: 'content',
      padding: 40,
      align: 'between',
      rows: [
        {
          align: 'between',
          cols: [
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Primary',
              color: 'primary',
              icon: 'dxi dxi-plus',
              full: true,
              size: 'small',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Primary',
              color: 'primary',
              full: true,
              view: 'link',
              size: 'small',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Primary',
              color: 'primary',
              full: true,
              disabled: true,
              size: 'small',
            },
          ],
        },
        {
          align: 'between',
          cols: [
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Secondary',
              color: 'secondary',
              icon: 'dxi dxi-plus',
              full: true,
              size: 'small',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Secondary',
              color: 'secondary',
              full: true,
              size: 'small',
              view: 'link',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Secondary',
              color: 'secondary',
              full: true,
              size: 'small',
              disabled: true,
            },
          ],
        },
        {
          align: 'between',
          cols: [
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Danger',
              color: 'danger',
              icon: 'dxi dxi-plus',
              full: true,
              size: 'small',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Danger',
              color: 'danger',
              full: true,
              size: 'small',
              view: 'link',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Danger',
              color: 'danger',
              full: true,
              size: 'small',
              disabled: true,
            },
          ],
        },
        {
          align: 'between',
          cols: [
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Success',
              color: 'success',
              icon: 'dxi dxi-plus',
              full: true,
              size: 'small',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Success',
              color: 'success',
              full: true,
              size: 'small',
              view: 'link',
            },
            {
              padding: 5,
              width: 140,
              type: 'button',
              text: 'Success',
              color: 'success',
              full: true,
              size: 'small',
              disabled: true,
            },
          ],
        },
      ],
    });
  }

  ngOnDestroy() {
    this.form?.destructor();
  }
}
