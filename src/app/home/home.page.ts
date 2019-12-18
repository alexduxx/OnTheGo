import { Component } from '@angular/core';
import { FirebaseAuthService } from '../providers/firebase-auth.service';
import { FirestoreDbService } from '../providers/firestore-db.service';

import { WidgetUtilService } from '../providers/widget-util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private widgetUtilService: WidgetUtilService,
    private router: Router,
    private firestoreDbService: FirestoreDbService
  ) {
    this.getProductList();
  }

  async logout() {
    try {
      await this.firebaseAuthService.logout();
      this.widgetUtilService.presentToast('Logged out!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error', error);
      this.widgetUtilService.presentToast(error.message);

    }
  }

  getProductList() {
    this.firestoreDbService.getProductList().subscribe( result => {
      console.log('reults', result);
    });
  }
}
