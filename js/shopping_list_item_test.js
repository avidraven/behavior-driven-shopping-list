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