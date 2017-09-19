const expect = require("chai").expect;

const reverseString = require("../modules/reverseString");

describe("Testing Modules", () => {
  it("Should reverse a string", (done) => {
    expect(reverseString("hello")).to.equal("olleh");
    done();
  });
});
