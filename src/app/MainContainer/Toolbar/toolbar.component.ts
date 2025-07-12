import { Toolbar, setTheme } from "@dhx/trial-suite";
import { getData } from "../../app.data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-toolbar",
  template: `<div #toolbar_container></div>`
})

export class ToolbarComponent implements OnInit, OnDestroy {
  @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
  
  private _toolbar!: Toolbar;

  contrast = false;
  theme = "light";

  ngOnInit() {
    const { toolbarData } = getData();
    this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
      data: toolbarData
    });

    this._toolbar.events.on("click", (id: any) => {
      switch (id) {
        case "theme": {
          const checked = !this._toolbar.data.getItem("theme")["checked"];
          this._toolbar.data.update("theme", {
            checked,
            icon: `mdi mdi-${
              !checked ? "weather-night" : "white-balance-sunny"
            }`
          });
          this.theme = checked ? "dark" : "light";
          //@ts-ignore
          setTheme(`${this.contrast ? "contrast-" : ""}${this.theme}`);
          break;
        }
        case "contrast": {
          this.contrast = !this.contrast;
          //@ts-ignore
          setTheme(`${this.contrast ? "contrast-" : ""}${this.theme}`);
        }
      }
    });
  }

  ngOnDestroy() {
    this._toolbar?.destructor();
  }
}
