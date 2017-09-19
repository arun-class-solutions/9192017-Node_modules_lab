module.exports = (array, size) => {
  let subArray = [];
  let masterArray = [];

  for (let i = 0; i < array.length; i++) {
    subArray.push(array[i]);

    if (subArray.length === size) {
      masterArray.push(subArray);
      subArray = [];
    }
  }

  return masterArray;
}
