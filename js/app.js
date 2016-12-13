var myShoppingList = new ShoppingList();

function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var description = '' + document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);

  myShoppingList.addItem(new_shopping_list_item);
  console.log(myShoppingList);
}

function changeCheckedStatus(idx, checkbox) {
  var item = ShoppingListItem.item[idx];
  //if the checkbox is checked, invoke shopping_list_items check()
  if(checkbox.checked() === true){
    item.check();
  } else {
  //if the checkbox is not checked, invoke the shopping_list_items check()
    item.uncheck();
  }
}

function removeItemButton(idx) {
  // body...
}