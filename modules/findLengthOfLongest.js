module.exports = (sentence) => {
  const sentenceArray = sentence.split(" ");

  let maxLength = 0;

  for (var i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length > maxLength) {
      maxLength = sentenceArray[i].length;
    }
  }

  return maxLength;
}
