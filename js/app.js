var myShoppingList = new ShoppingList();

function add_to_shopping_list() {
  var title = document.getElementById('title').value;
  var description = '' + document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);

  myShoppingList.addItem(new_shopping_list_item);
  console.log(myShoppingList);
}