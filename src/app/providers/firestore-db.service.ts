import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDbService {

  constructor(
    private db: AngularFirestore
  ) { }

  getProductList() {
    // return this.db.collection('product').valueChanges();
    return this.db.collection('product').snapshotChanges().pipe(
      map( docArray => {
        return docArray.map( doc => {
          console.log('===', doc.payload.doc.id);
          console.log('=$$=', doc.payload.doc.data());

          return {
            id: doc.payload.doc.data,
            ...doc.payload.doc.data()
          };
        });
      })
    );
  }
}
