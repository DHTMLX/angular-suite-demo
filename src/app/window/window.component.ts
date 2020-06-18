import { Component, OnDestroy } from "@angular/core";
import { Window } from "dhx-suite";

@Component({
  selector: "app-window",
  template: ` <div>
    <div #widget></div>
    <button className="button" (click)="this.window.show()" class="custom-button">
      Show Window
    </button>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class WindowComponent implements OnDestroy {
  window: Window;
  wait: Promise<void>;

  ngOnInit() {
    const windowHtml = `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`;
    this.window = new Window({
      width: 440,
      height: 520,
      title: "Window",
      html: windowHtml,
      closable: true,
    });
  }

  ngOnDestroy() {
    if (this.window) {
      this.window.destructor();
    }
  }
}
