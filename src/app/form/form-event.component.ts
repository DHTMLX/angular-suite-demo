import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Form as FormDHX } from "dhx-suite";

@Component({
  selector: "app-form-event",
  template: ` <section class="component-wrapper">
    <div #widget></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
      <div class="events-list--element" *ngFor="let event of eventsList">
        <p>{{ event.name }}</p>
        <p>{{ event.payload }}</p>
      </div>
    </div>
  </section>`,
  styleUrls: ["../app.component.scss"],
})
export class FormEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  form: FormDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (name: string, payload?: any) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

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
          required: true,
          name: "name",
        },
        {
          type: "datepicker",
          label: "Date",
          required: true,
          name: "date",
        },
        {
          type: "timepicker",
          controls: "true",
          label: "Time",
          required: true,
          name: "time",
        },
        {
          type: "simpleVault",
          required: true,
          label: "Files",
          name: "simplevault",
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

    this.form.events.on("change", (name, newValue) => {
      const info = { name, newValue };
      this.logEvent(JSON.stringify(info), "change");
    });
    this.form.events.on("change", id => this.logEvent(id, "change"));
    this.form.events.on("buttonClick", id => this.logEvent(id, "buttonClick"));
    this.form.events.on("validationFail", id => this.logEvent(id, "validationFail"));

    this.form.events.on("change", name => this.logEvent("change", name));
    this.form.events.on("click", name => this.logEvent("click", name));
    this.form.events.on("beforeHide", name => this.logEvent("beforeHide", name));
    this.form.events.on("afterHide", name => this.logEvent("afterHide", name));
    this.form.events.on("beforeShow", name => this.logEvent("beforeShow", name));
    this.form.events.on("afterShow", name => this.logEvent("afterShow", name));
    this.form.events.on("beforeValidate", name => this.logEvent("beforeValidate", name));
    this.form.events.on("afterValidate", name => this.logEvent("afterValidate", name));
    this.form.events.on("beforeChangeProperties", name => this.logEvent("beforeChangeProperties", name));
    this.form.events.on("afterChangeProperties", name => this.logEvent("afterChangeProperties", name));
    this.form.events.on("afterSend", () => this.logEvent("afterSend"));
    this.form.events.on("beforeSend", () => this.logEvent("beforeSend"));
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  }
}
