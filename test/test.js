const expect = require("chai").expect;
const musics = require("../data");

describe("musics module", () => {

 it("returns requested musics", () => {
   const result = musics.getItem("abc");
   expect(result).to.deep.equal({musicid:123, title:"abc", type:"hiphop", year:2020, publisher:"osa"});
 });

 it("fails w/ invalid musics", () => {
   const result = musics.getItem("fake");
   expect(result).to.be.undefined;
 });

 it("adds a new musics", function() {
  let result = musics.add({musicid:897, title: "xyz", type:"hiphop", year:2019, publisher:"xxxtech"});
  expect(result.added).to.be.true;
});
it("fails to add an existing musics", function() {
  let result = musics.add({title: "abc", type:"hiphop", year:2020, publisher:"osa"});
  expect(result.added).to.be.false;
});

it("deletes an existing musics", function() {
  let result = musics.delete("abc");
  expect(result.deleted).to.be.true;
});
it("fails to delete an invalid musics", function() {
  let result = musics.delete("not hiphop Jazz music");
  expect(result.deleted).to.be.false;
});

});