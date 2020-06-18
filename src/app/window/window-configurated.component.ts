import { Component, OnDestroy, Input } from "@angular/core";
import { Window } from "dhx-suite";

@Component({
  selector: "app-window-configurated",
  template: ` <div>
    <div #widget></div>
    <button className="button" (click)="this.window.show()" class="custom-button">
      Show Window
    </button>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class WindowConfiguratedComponent implements OnDestroy {
  window: Window;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.window = new Window({
      ...this.options,
    });
  }

  ngOnDestroy() {
    if (this.window) {
      this.window.destructor();
    }
  }
}
