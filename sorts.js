//Function to sort a list of numbers using the built-in javascript .sort() array method
//Takes one paramater: arr - the array to be sorted
//Returns the sorted list
function defaultSort(arr) {
  return arr.sort(function(a,b){return a-b});
}
//Function to sort a list of numbers using the quicksort technique
//Takes one parameter: arr - the array to be sorted
//Returns the sorted list
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
//Function to sort a list of numbers using the insertion sort technique
//Takes one parameter: arr - the array to be sorted
//Returns the sorted list
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
  
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];  
        j--;  
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
}
//Function to sort a list of numbers using the merge sort technique
//Takes one parameter: arr - the array to be sorted
//Returns the sorted list
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
//Function to merge two lists into one sorted list
//Takes two parameters: left - the left array, right - the right array
//Returns the sorted list
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
//Function to sort a list of numbers very slowly using the slowsort method
//Takes 3 parameters: a - the array, i - the index to start at, and j - the index to stop at
//Returns nothing - overwrites the original array
function _slowSort(a,i,j) {
  if (i>=j){
    return;
  }
  let m = parseInt((i+j)/2, 10);
  _slowSort(a,i,m);
  _slowSort(a,m+1,j);
  if (a[j]<a[m]) {
    let temp=a[j];
    a[j]=a[m];
    a[m]=temp;
  }
  _slowSort(a,i,j-1);
}
//Function to simplify input to the _slowSort function
//Takes 1 parameter: arr - the array to input to the _slowSort function
//Returns the overwritten array output from _slowSort
function slowSort(arr) {
  const array=arr;
  _slowSort(array,0,(array.length-1));
  return array;
}