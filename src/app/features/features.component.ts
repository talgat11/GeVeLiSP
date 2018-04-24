import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() data: any;
  title = 'Features';
  activeElement = 'Prediction';

  constructor() { }

  ngOnInit() {
  }
  changeFeature(title) {
    this.activeElement = title;
  }
}
