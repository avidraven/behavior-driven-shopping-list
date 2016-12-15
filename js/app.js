var myShoppingList = new ShoppingList();
const contentContainer = document.getElementById("content");

var renderedList = myShoppingList.render();
contentContainer.innerHTML = renderedList;

var addButton = document.getElementById("add_shopping_list_item_button");
addButton.addEventListener("click", add_to_shopping_list);

function add_to_shopping_list() {
  // document.getElementById("content").innerHTML = null;  //added so extra buttons and checkboxes don't show up
 var title = document.getElementById('title').value;
 var description = '' + document.getElementById('description').value;
 var new_shopping_list_item = new ShoppingListItem(title, description);

 myShoppingList.addItem(new_shopping_list_item);
 console.log(myShoppingList);

 renderedList = myShoppingList.render();
 contentContainer.innerHTML = renderedList;
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

function removeItemButtonClicked(listItemId) {
  let foundListItem = null;
  for (let i = 0; i < myShoppingList.items.length; i++) {
    if (myShoppingList.items[i].id === listItemId){
      foundListItem = myShoppingList.items[i];
    }
  }

  myShoppingList.removeItem(foundListItem);

  renderedList = myShoppingList.render();
  contentContainer.innerHTML = renderedList;

  let removeItems = document.querySelectorAll(".remove_item_button");
  let checkItems = document.querySelectorAll(".check-box");

  for (let i = 0; i < removeItems.length; i++) {
    removeItems[i].addEventListener("click", ()=>{
      removeItemButtonClicked(removeItems[i].dataset.removeTarget);
    });

  checkItems[i].addEventListener("change", ()=>{
    changeCheckedStatus(i, checkItems[i]);
  });
  }
 // let item = myShoppingList.items[idx];
 // console.log("remove item", item);
 // myShoppingList.removeItem(item);

 // renderedList = myShoppingList.render();
 // document.getElementById("content").innerHTML = renderedList;
}