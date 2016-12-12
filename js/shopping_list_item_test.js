/*jshint esversion: 6 */

console.log("shopping item test");

// const chai = require("chai"); //node only

const expect = chai.expect;
const should = chai.should();

describe("ShoppingListItem", () =>{
  // var item;
  // beforeEach(function(){
  //   item = new ShoppingListItem(name, description);
  // });
  // let item = new Zombies.item("ted"); //use new instance for testing
  let listItem = new ShoppingListItem("bread", "baked and soft");
  it("should be a class", () =>{
    listItem.should.be.a.function;
  });

  it("expect ShoppingListItem to have a name", () =>{
    expect(listItem).to.have.property("name");
  });

  it("expect ShoppingListItem to have a description", () =>{
    expect(listItem).to.have.property("description");
  });

  it("expect ShoppingListItem to have an is_done property", () =>{
    expect(listItem).to.have.property("is_done");
  });

  it("expect ShoppingListItem to have 2 arguments", () =>{
    expect(listItem.constructor).to.have.length(2);
  });
});

describe('ShoppingList', () => {

  let list = new ShoppingList();
  let myList = new ShoppingListItem("pizza", "cold");
  let myOtherList = new ShoppingListItem("Krispy Kreme", "warm");

  it("should be a class", () => {
    list.should.be.a.function;
  });

  it("expect ShoppingList to have a items", () => {
    expect(list).to.have.property("items");
  });

  it("expect items to be in array", () => {
    expect(list.items).to.be.an("array");
  });

  it("should have addItem method", () => {
    expect(list.addItem).should.be.a.function;
  });

  it("should have argument of ShoppingListItem and adds it to list", () => {
    list.addItem(myList);
    // console.log(list.items[0]);
    list.items.should.contain(myList);
  });

  it("should have removeItem method", () => {
    expect(list.removeItem).should.be.a.function;
  });

  it("should have argument of ShoppingListItem and removes it from list", () => {
    list.addItem(myList);
    list.addItem(myOtherList);
    // console.log('should have two added ',list);
    list.removeItem(myList);
    console.log('should have one left ',list);
    list.items.should.not.contain(myList);
  });

  it("should remove last item if no paramaters", () => {
    list.addItem(myList);
    list.addItem(myOtherList);
    list.removeItem();
    list.items.should.not.contain(myOtherList);
  });

  it("should have a method render", () => {
    list.render.should.be.a.function;
  });
});