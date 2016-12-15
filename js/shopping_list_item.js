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
   console.log("item render", myShoppingList.items.indexOf(this));

   var checkboxElement = document.createElement("input");
   checkboxElement.setAttribute("type", "checkbox");
   checkboxElement.className = "checkbox";
   item_buttons.appendChild(checkboxElement);
   checkboxElement.addEventListener("change", function(){
     changeCheckedStatus(myShoppingList.items.indexOf(this), checkboxElement);
   });

   var removeElement = document.createElement("button");
   removeElement.className = "Xbutton";
   removeElement.innerHTML = "X";
   item_buttons.appendChild(removeElement);
   removeElement.addEventListener("click", function(){
     removeItemButtonClicked(myShoppingList.items.indexOf(this));
   });

   return `<li class="completed_${this.is_done}"><span>${this.name}:</span> <span>${this.description}</span></li>`;
   }
}