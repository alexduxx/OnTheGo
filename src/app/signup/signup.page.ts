import { FirebaseAuthService } from '../providers/firebase-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SIGNUP } from '../constants/formValidationMessage';
import { HelperService } from '../providers/helper.service';
import { Router } from '@angular/router';
import { WidgetUtilService } from '../providers/widget-util.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userType = '';
  currentStep = 0;
  val = 0.25;
  showSignupSpinner: boolean;
  
  formData: any;
  
  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private widgetUtilService: WidgetUtilService,
    private router: Router
  ) {

  }

 ngOnInit() {}

  formChange(event) {
    console.log(event);
    this.formData = event;
  }

  userTypeChange(event) {
    this.userType = event;
  }

  isBusiness() {
    return this.userType === 'shop';
  }

  stepToRegister(event) {

  }


  toggleNext() {
    if (this.userType === 'user') {
      this.currentStep += 1;
      this.val += 0.25;
    }
    this.currentStep += 1;
    this.val += 0.25;
  }

  togglePrevious() {
    if (this.userType === 'user') {
      this.currentStep -= 1;
      this.val -= 0.25;
    }
    this.currentStep -= 1;
    this.val -= 0.25;
  }

  async signup() {
    try {
      this.showSignupSpinner = true;
      const result = await this.firebaseAuthService.registerWithEmailPassword(this.formData.email, this.formData.password);
      console.log('result', result);
      this.showSignupSpinner = false;
      this.widgetUtilService.presentToast('Successfully signed up. Verification email sent!');
      this.resetForm();
      this.router.navigate(['/home']);
    } catch (error) {
      console.log('Error', error);
      this.showSignupSpinner = false;
      this.widgetUtilService.presentToast(error);
    }
  }


  resetForm() {
    throw new Error("Method not implemented.");
  }

}
