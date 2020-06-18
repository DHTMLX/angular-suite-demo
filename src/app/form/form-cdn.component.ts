import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-form-cdn",
  template: `<div #widget></div>`,
})
export class FormCDNComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  form: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.form = new dhx.Form(this.container.nativeElement, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        gravity: false,
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
            label: "I agree",
            name: "agree",
            labelPosition: "right",
            value: "checkboxvalue",
          },
          {
            type: "button",
            value: "Send",
            size: "medium",
            view: "flat",
            submit: true,
            color: "primary",
          },
        ],
      });
      this.ready.emit({ form: this.form });
    });
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  }
}
