const expect = require("chai").expect;

const reverseString = require("../modules/reverseString");
const findLengthOfLongest = require("../modules/findLengthOfLongest");
const isPalindrome = require("../modules/isPalindrome");

describe("Testing Modules", () => {
  it("Should reverse a string", (done) => {
    expect(reverseString("hello")).to.equal("olleh");
    done();
  });

  it("Should return the length of the longest word", (done) => {
    expect(findLengthOfLongest("I had Japanese food for lunch")).to.equal(8);
    done();
  });

  it("Should be the same word forwards and backwards", (done) => {
    expect(isPalindrome("Racecar")).to.equal(true);
    expect(isPalindrome("Bar")).to.equal(false);
    done();
  });
});
