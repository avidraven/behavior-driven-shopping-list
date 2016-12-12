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

  }
}