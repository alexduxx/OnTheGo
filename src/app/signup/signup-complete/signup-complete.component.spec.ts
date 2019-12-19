import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupCompleteComponent } from './signup-complete.component';

describe('SignupCompleteComponent', () => {
  let component: SignupCompleteComponent;
  let fixture: ComponentFixture<SignupCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCompleteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
