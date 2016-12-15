var myShoppingList = new ShoppingList();

var renderedList = myShoppingList.render();
content.innerHTML = renderedList;

function add_to_shopping_list() {
 item_buttons.innerHTML = null;  //added so extra buttons and checkboxes don't show up
 var title = document.getElementById('title').value;
 var description = '' + document.getElementById('description').value;
 var new_shopping_list_item = new ShoppingListItem(title, description);

 myShoppingList.addItem(new_shopping_list_item);
 console.log(myShoppingList);

 renderedList = myShoppingList.render();
 content.innerHTML = renderedList;
}

function changeCheckedStatus(idx, checkbox) {
 let item = myShoppingList.items[idx];
 //if the checkbox is checked, invoke shopping_list_items check()
 if(checkbox.checked() === true){
   item.check();
 } else {
 //if the checkbox is not checked, invoke the shopping_list_items check()
   item.uncheck();
 }
}

function removeItemButtonClicked(idx) {
 let item = myShoppingList.items[idx];
 console.log("remove item", item);
 myShoppingList.removeItem(item);

 renderedList = myShoppingList.render();
 content.innerHTML = renderedList;
}