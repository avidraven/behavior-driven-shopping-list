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
  let listItem = new ShoppingListItem("bread", "made from flower");
  it("should be a class", () =>{
    listItem.should.be.a.function;
  });

  it("expect item to have a name", () =>{
    expect(listItem).to.have.property("name");
    expect(listItem.name).to.equal("bread");
  });

  it("expect item to have a description", () =>{
    expect(listItem).to.have.property("description");
    expect(listItem.description).to.equal("made from flower");
  });

  it("expect item to have an is_done property", () =>{
    expect(listItem).to.have.property("is_done");
    expect(listItem.is_done).to.equal(false);
  });

  it("expect item constructor to take 2 arguments", () =>{
    expect(listItem.constructor).to.have.length(2);
  });

  it("item should have a method that can check it off the list", () =>{
    listItem.check.should.be.a.function;
    listItem.check();
    listItem.is_done.should.equal(true);
  });

  it("item should have a method can uncheck it", () =>{
    listItem.uncheck.should.be.a.function;
    listItem.uncheck();
    listItem.is_done.should.equal(false);
  });

  it("item should have a method that renders it an html list element", () =>{
    listItem.uncheck.should.be.a.function;
    expect(listItem.render()).to.contain("<li");
    expect(listItem.render()).to.contain("/li>");
    expect(listItem.render()).to.contain("false");
    expect(listItem.render()).to.contain("bread");
    expect(listItem.render()).to.contain("made from flower");
  });
});