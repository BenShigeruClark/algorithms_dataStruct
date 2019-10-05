
// Bubblesort algorithm

function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length -  i - 1); i++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}