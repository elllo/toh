import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-slider',
  templateUrl: './eco-slider.component.html',
  styleUrls: ['./eco-slider.component.css']
})
export class EcoSliderComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5000;
  min = 0;
  showTicks = true;
  step = 10;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 100;

/*  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;*/

  workingPrice = 29; // Cent / kWh

  constructor() { }

  ngOnInit() {
  }

}
