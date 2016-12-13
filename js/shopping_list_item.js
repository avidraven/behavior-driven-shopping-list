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
    var checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.id = "checkbox";
    content.appendChild(checkboxElement);
    checkboxElement.addEventListener("change", changedCheckedStatus);

    var removeElement = document.createElement("button");
    removeElement.id = "Xbutton";
    removeElement.innerHTML = "X";
    content.appendChild(removeElement);
    removeElement.addEventListener("click", removeItemButtonClicked(idx));

    return '<li class="completed_'+ this.is_done + '"><span>' + this.name + '</span><span>' + this.description + '</span></li>';
    }
}