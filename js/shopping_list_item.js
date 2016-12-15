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
  let listItem = document.createElement("li");
  listItem.className = `completed_${this.is_done}`;
  listItem.id = `listItem_${Date.now()}`;

  let checkbox = document.createElement("input");
  checkbox.className = "check-box";
  checkbox.type = "checkbox";
  listItem.appendChild(checkbox);

  let nameSpan = document.createElement("span");
  nameSpan.innerHTML = this.name;
  listItem.appendChild(nameSpan);

  let descriptionSpan = document.createElement("span");
  descriptionSpan.innerHTML = this.description;
  listItem.appendChild(descriptionSpan);

  let removeButton = document.createElement("button");
  removeButton.className = "remove_item_button";
  removeButton.innerHTML = "X";
  removeButton.dataset.removeTarget = this.id;
  listItem.appendChild(removeButton);

  return listItem.outerHTML;

   // console.log("item render", myShoppingList.items.indexOf(this));

   // var contentDiv = document.getElementById("content");

   // var checkboxElement = document.createElement("input");
   // checkboxElement.setAttribute("type", "checkbox");
   // checkboxElement.className = "checkbox";
   // contentDiv.appendChild(checkboxElement);
   // checkboxElement.addEventListener("change", function(){
   //   changeCheckedStatus(myShoppingList.items.indexOf(this), checkboxElement);
   // });

   // var removeElement = document.createElement("button");
   // removeElement.className = "Xbutton";
   // removeElement.innerHTML = "X";
   // contentDiv.appendChild(removeElement);
   // removeElement.addEventListener("click", function(){
   //   removeItemButtonClicked(myShoppingList.items.indexOf(this));
   // });

   // return `<li class="completed_${this.is_done}"><span>${this.name}:</span> <span>${this.description}</span></li>`;
   }
}