const expect = require("chai").expect;

const reverseString = require("../modules/reverseString");
const findLengthOfLongest = require("../modules/findLengthOfLongest");

describe("Testing Modules", () => {
  it("Should reverse a string", (done) => {
    expect(reverseString("hello")).to.equal("olleh");
    done();
  });

  it("Should return the length of the longest word", (done) => {
    expect(findLengthOfLongest("I had Japanese food for lunch")).to.equal(8);
    done();
  });
});
