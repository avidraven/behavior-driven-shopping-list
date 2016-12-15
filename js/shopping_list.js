/*jshint esversion: 6 */
class ShoppingList {
  constructor(){
    this.items = [];
  }

  addItem(item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    } else {
      throw Error("item should not be in list");
    }
  }

  removeItem(item){
    if(arguments.length === 0){
      this.items.pop();
    } else if(item instanceof ShoppingListItem) {
      if(this.items.indexOf(item) > -1){
        this.items.splice(this.items.indexOf(item), 1);
      }
    } else {
      throw Error("item should not be in list");
    }
  }

  render(){
    let myList = "";
    for (var i = 0; i < this.items.length; i++) {
      myList += this.items[i].render();
    }
    return `<ul>${myList}</ul>`;
  }
}