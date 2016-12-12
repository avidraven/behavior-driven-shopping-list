class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done = true;
  }

  uncheck(){
    this.is_done = false;
  }

  render(){

  }
}

class ShoppingList {
  constructor(){
    this.items = [];
  }

  addItem(item){
    if(item instanceof ShoppingListItem){
      this.item.push(iten);
    } else {
      throw Error("item should not be in list");
    }
  }

  removeItem(item){
    if(arguments === 0){
      this.items.pop();
    } else if(item instanceof ShoppingListItem) {
      if(this.items.indexof(item) < -1){
        this.items.splice(this.items.indexof(items), 1);
      }
    } else {
      throw Error("item should not be in list");
    }
  }

  render(){

  }
}