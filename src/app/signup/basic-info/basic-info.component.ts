import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SIGNUP } from 'src/app/constants/formValidationMessage';
import { FirebaseAuthService } from 'src/app/providers/firebase-auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from 'src/app/providers/helper.service';
import { Router } from '@angular/router';
import { WidgetUtilService } from 'src/app/providers/widget-util.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {

  @Input() form: any; 
  @Output() formChange = new EventEmitter();

 

  // set counter(val) {
  //   this.counterValue = val;
  //   this.counterChange.emit(this.counterValue);
  // }

  signupForm: FormGroup;
  email: FormControl;
  password: FormControl;

  formError: any = {
    email: '',
    password: ''
  };

  validationMessage: any = SIGNUP;
  showSignupSpinner = false;


  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private helperService: HelperService,
    private router: Router,
    private widgetUtilService: WidgetUtilService
  ) {
    this.createFormControl();
    this.createForm();
  }

  ngOnInit() {
    this.signupForm.valueChanges.subscribe(data => { 
      this.onFormValueChanged(data);
      this.formChange.next(data);
    });
   }

  resetForm() {
    this.signupForm.reset();
    this.formError = {
      email: '',
      password: ''
    };
  }



  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  createFormControl() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  createForm() {
    this.signupForm = new FormGroup({
      email: this.email,
      password: this.password
    });
    
  }

  onFormValueChanged(data) {
    this.formError = this.helperService.prepareValidationMessage(this.signupForm, this.validationMessage, this.formError);
  }

}
