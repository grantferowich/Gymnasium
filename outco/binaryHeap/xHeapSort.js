// Helper function to swap elements in the array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Build a max heap from the array
function buildMaxHeap(arr) {
  const len = arr.length;
  const startIdx = Math.floor(len / 2) - 1;

  for (let i = startIdx; i >= 0; i--) {
    heapify(arr, len, i);
  }
}

// Heapify a subtree rooted at index i
function heapify(arr, len, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, len, largest);
  }
}

// Perform heap sort
function heapSort(arr) {
  const len = arr.length;

  buildMaxHeap(arr);

  for (let i = len - 1; i >= 1; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const array = [5, 2, 8, 12, 1, 6, 3, 9];
console.log("Original array:", array);
const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);
