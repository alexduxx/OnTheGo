import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss'],
})
export class ShopInfoComponent implements OnInit {

  @Output() NextChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
