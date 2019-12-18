import { Injectable } from '@angular/core';
import { ToastController, Platform, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WidgetUtilService {

  loading: any = {};

  constructor(
    private toastController: ToastController,
    private platform: Platform,
    public loadingController: LoadingController
    ) { }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      showCloseButton: true,
      position: this.platform.is('desktop') ? 'top' : 'bottom'
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    return await this.loading.present();
  }

  async dismissLoader() {
    await this.loading.dismiss();
  }
}
