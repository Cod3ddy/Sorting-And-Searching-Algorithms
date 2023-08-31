let unsortedArray = [100, 2, 43, 3, 223, 45, 95, 9, 45, 34];
let i, j, swap;

sortArry(unsortedArray);
//sorting items in an array using the bubble sort method
function sortArry(array) {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      //sort the array in ascending order
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }

  //use a loop to iterate over all the elements in the array
  console.log("The smallest integer: " + array[0]);
  console.log("The largest integer: " + array[array.length - 1]);
}
