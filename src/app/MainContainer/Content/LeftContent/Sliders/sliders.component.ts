// sliders-layout.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Layout, Slider } from '@dhx/trial-suite';

@Component({
  selector: 'app-sliders-layout',
  templateUrl: './sliders.component.html',
  styleUrls: [],
})
export class SlidersLayoutComponent implements OnInit {
  @ViewChild('layoutNode', { static: true }) layoutNode!: ElementRef;
  layout: any;
  slider1: any;
  slider2: any;
  slider3: any;
  slider4: any;
  slider5: any;

  ngOnInit() {
    this.layout = new Layout(this.layoutNode.nativeElement, {
      type: 'none',
      height: 'fit-content',
      cols: [
        {
          height: 'content',
          align: 'between',
          rows: [
            {
              padding: 10,
              height: 'content',
              id: 'slider1',
            },
            {
              padding: 10,
              height: 'content',
              id: 'slider2',
            },
            {
              padding: 10,
              height: 'content',
              id: 'slider3',
            },
            {
              padding: 10,
              height: 'content',
              id: 'slider4',
            },
          ],
        },
        {
          padding: '10px 20px',
          height: '260px',
          width: '20%',
          id: 'slider5',
        },
      ],
    });

    this.slider1 = new Slider("", {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      tick: 10,
      tickTemplate: (value) => `${value}`,
    });

    this.slider2 = new Slider("", {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      tick: 10,
      tickTemplate: (value) => `${value}`,
    });
    this.slider3 = new Slider("", {
      min: 0,
      max: 40,
      step: 1,
      range: true,
      value: [0, 20],
      tick: 1,
      majorTick: 5,
      tickTemplate: (value) => `${value}`
    });

    // Slider 4 initialization
    this.slider4 = new Slider("", {
      min: 0,
      max: 40,
      step: 10,
      range: true,
      value: [0, 20],
    });

    // Slider 5 initialization
    this.slider5 = new Slider("", {
      mode: "vertical",
      range: true,
      min: 0,
      max: 40,
      step: 2,
      tick: 1,
      majorTick: 5,
      value: [0, 20],
      tickTemplate: (value) => `${value}`
    });
    this.layout.getCell("slider1").attach(this.slider1);
    this.layout.getCell("slider2").attach(this.slider2);
    this.layout.getCell("slider3").attach(this.slider3);
    this.layout.getCell("slider4").attach(this.slider4);
    this.layout.getCell("slider5").attach(this.slider5);
  }

  ngOnDestroy() {
    this.layout?.destructor();
    this.slider1?.destructor();
    this.slider2?.destructor();
    this.slider3?.destructor();
    this.slider4?.destructor();
    this.slider5?.destructor();
  }
}
