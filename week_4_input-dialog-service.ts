import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

//Function to edit new grocery items on list
showPrompt(item?, index?) {// ? MAKES IT AN OPTIONAL ARGUMENT to NOT CONFLICT WITH HOME.TS FILE
const prompt = this.alertCtrl.create({
 title: item ? 'Edit Item': 'Add Item',
 message: item ? "Please edit item...":  "Please enter item...",
 inputs: [
   {
     name: 'name',
     placeholder: 'Name',
     value: item ?  item.name : null//If an item is passed, use it from there, otherwise pass in a null value
   },
   {
    name: 'quantity',
    placeholder: 'Quantity',
    value: item ?  item.quantity : null
  },
 ],
 buttons: [
   {
     text: 'Cancel',
     handler: data => {
       console.log('Cancel clicked');
     }
   },
 {
  text: 'Save',
  handler: item => {
    console.log('Save clicked',item);
    if (index !== undefined){
      this.dataService.editItem(item, index);
    }
    else{
      this.dataService.addItem(item);
    }
    //MOVED this.item statement to GROCERIES-SERVICES.TS FILE
  }
}
 
] 
});
prompt.present();
}

}
