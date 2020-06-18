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

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.form = new FormDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      gravity: false,
      width: 400,
      rows: [
        {
          type: "input",
          label: "Name",
          icon: "dxi-magnify",
          placeholder: "John Doe",
          required: true,
          id: "name",
          name: "name",
        },
        {
          type: "datepicker",
          label: "Date",
          required: true,
          id: "date",
          name: "date",
        },
        {
          type: "timepicker",
          controls: "true",
          label: "Time",
          required: true,
          id: "time",
          name: "time",
        },
        {
          type: "simpleVault",
          required: true,
          label: "Files",
          id: "simplevault",
          name: "simplevault",
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

    this.form.events.on("change", (name, newValue) => {
      const info = { name, newValue };
      this.logEvent(JSON.stringify(info), "change");
    });
    this.form.events.on("change", id => this.logEvent(id, "change"));
    this.form.events.on("buttonClick", id => this.logEvent(id, "buttonClick"));
    this.form.events.on("validationFail", id => this.logEvent(id, "validationFail"));
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.destructor();
    }
  }
}
