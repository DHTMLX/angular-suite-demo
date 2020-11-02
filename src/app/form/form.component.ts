import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Form as FormDHX } from "dhx-suite";

@Component({
  selector: "app-form",
  template: `<div #widget></div>`,
})
export class FormComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  form: FormDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.form = new FormDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      width: 400,
      rows: [
        {
          type: "input",
          label: "Name",
          icon: "dxi-magnify",
          placeholder: "John Doe",
        },
        {
          type: "input",
          label: "Email",
          placeholder: "jd@mail.name",
        },
        {
          type: "input",
          inputType: "password",
          label: "Password",
          placeholder: "********",
        },
        {
          type: "checkbox",
          text: "I agree",
          name: "agree",
          value: "checkboxvalue",
        },
        {
          type: "button",
          text: "Send",
          size: "medium",
          view: "flat",
          submit: true,
          color: "primary",
        },
      ],
    });
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  }
}
