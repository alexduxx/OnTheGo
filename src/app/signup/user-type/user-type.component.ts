import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss'],
})
export class UserTypeComponent implements OnInit {

  @Output() userTypeChange = new EventEmitter();

  

  constructor() { }

  ngOnInit() {}

  onSwitchRegisterType(event: CustomEvent) {
    this.userTypeChange.next(event.detail.value);
    console.log('register-type-radio', event.detail);
  }

}
