// toolbar.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Toolbar, setTheme } from '@dhx/trial-suite';
import { ToolbarDataService } from './toolbar-data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [],
})
export class ToolbarComponent implements OnInit {
  @ViewChild('toolbarNode', { static: true }) toolbarNode!: ElementRef;
  toolbar: any;
  contrast = false;
  theme = 'light';

  constructor(private toolbarDataService: ToolbarDataService) {}

  ngOnInit() {
    this.toolbar = new Toolbar(this.toolbarNode.nativeElement, {});
    this.toolbar.events.on('click', (id: string) => {
      switch (id) {
        case 'theme': {
          const checked = !this.toolbar.data.getItem('theme').checked;
          this.toolbar.data.update('theme', {
            checked,
            icon: `mdi mdi-${
              !checked ? 'weather-night' : 'white-balance-sunny'
            }`,
          });
          this.theme = checked ? 'dark' : 'light';
          //@ts-ignore
          setTheme(`${this.contrast ? 'contrast-' : ''}${this.theme}`);
          break;
        }
        case 'contrast': {
          this.contrast = !this.contrast;
          //@ts-ignore
          setTheme(`${this.contrast ? 'contrast-' : ''}${this.theme}`);
        }
      }
    });
    this.toolbarDataService.getToolbarData().subscribe((data: any) => {
      this.toolbar?.data.parse(data);
    });
  }
}
