import { Layout, Slider } from '@dhx/trial-suite';

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-sliders-layout',
  template: `<div #layout_container class="container"></div>`
})

export class SlidersLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('layout_container', { static: true }) layout_container!: ElementRef;

  private _layout!: Layout;
  private _slider1!: Slider;
  private _slider2!: Slider;
  private _slider3!: Slider;
  private _slider4!: Slider;
  private _slider5!: Slider;

  ngOnInit() {
    this._layout = new Layout(this.layout_container.nativeElement, {
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
              id: 'slider1'
            },
            {
              padding: 10,
              height: 'content',
              id: 'slider2'
            },
            {
              padding: 10,
              height: 'content',
              id: 'slider3'
            },
            {
              padding: 10,
              height: 'content',
              id: 'slider4'
            }
          ]
        },
        {
          padding: '10px 20px',
          height: '260px',
          width: '20%',
          id: 'slider5'
        }
      ]
    });

    this._slider1 = new Slider('', {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      tick: 10,
      tickTemplate: (value) => `${value}`
    });

    this._slider2 = new Slider('', {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      tick: 10,
      tickTemplate: (value) => `${value}`
    });

    this._slider3 = new Slider('', {
      min: 0,
      max: 40,
      step: 1,
      range: true,
      value: [0, 20],
      tick: 1,
      majorTick: 5,
      tickTemplate: (value) => `${value}`
    });

    this._slider4 = new Slider('', {
      min: 0,
      max: 40,
      step: 10,
      range: true,
      value: [0, 20]
    });

    this._slider5 = new Slider('', {
      mode: 'vertical',
      range: true,
      min: 0,
      max: 40,
      step: 2,
      tick: 1,
      majorTick: 5,
      value: [0, 20],
      tickTemplate: (value) => `${value}`
    });

    this._layout.getCell('slider1').attach(this._slider1);
    this._layout.getCell('slider2').attach(this._slider2);
    this._layout.getCell('slider3').attach(this._slider3);
    this._layout.getCell('slider4').attach(this._slider4);
    this._layout.getCell('slider5').attach(this._slider5);
  }

  ngOnDestroy() {
    this._layout?.destructor();
    this._slider1?.destructor();
    this._slider2?.destructor();
    this._slider3?.destructor();
    this._slider4?.destructor();
    this._slider5?.destructor();
  }
}
