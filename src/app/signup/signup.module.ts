import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupPage, BasicInfoComponent, SignupCompleteComponent, UserTypeComponent, ShopInfoComponent]
})
export class SignupPageModule {}
