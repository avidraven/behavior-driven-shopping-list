/*jshint esversion: 6 */

console.log("shopping item test");

// const chai = require("chai"); //node only

const expect = chai.should();
const should = chai.should();

describe("ShoppingListItem", () =>{
  // var item;
  // beforeEach(function(){
  //   item = new ShoppingListItem(name, description);
  // });
  // let item = new Zombies.item("ted"); //use new instance for testing
  let listItem = new ShoppingListItem();
  it("should be a class", () =>{
    listItem.should.be.a.function;
  });

  // it("expect ShoppingListItem to have a name", () =>{
  //   expect(ShoppingListItem).to.have.property("name");
  // });

  // it("expect ShoppingListItem to have a description", () =>{
  //   expect(ShoppingListItem).to.have.property("description");
  // });
});