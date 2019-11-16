import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {
//Starting with blank list of items
  items = []
    

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems(){
    return this.items;
}

//Linked to removeItem function on HOME.TS
  removeItem(index){
    this.items.splice(index, 1);//remove statement
  }
  //Linked to addItem function on HOME.TS
  addItem(item){
    this.items.push(item);//used to save new entered grocery items to current list of items
  }
  //Linked to showEditItem function on HOME.TS
  editItem(item, index){
    this.items[index] = item;//used to save newly edited grocery items to current list of items
  }
}
