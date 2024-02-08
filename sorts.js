//sorts.defaultSort(arr)
//defaultSort sorts a list of numbers using the built-in .sort() array method
//arr {list} -- the list of numbers to be sorted
//return {list} -- the sorted list of numbers
function defaultSort(arr) {
  return arr.sort(function(a,b){return a-b});
}
//sorts.quickSort(arr)
//quickSort sorts a list of numbers using the quicksort technique
//arr {list} -- the list of numbers to be sorted
//return {list} -- the sorted list of numbers
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
//sorts.insertionSort(arr)
//insertionSort sorts a list of numbers using the insertion sort technique
//arr {list} -- the list of numbers to be sorted
//return {list} -- the sorted list of numbers
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
//sorts.mergeSort(arr)
//mergeSort sorts a list of numbers using the merge sort technique
//arr {list} -- the list of numbers to be sorted
//return {list} -- the sorted list of numbers
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
//sorts.merge(left, right)
//merge merges two lists into one sorted list
//left {list} -- the left array 
//right {list} -- the right array
//return {list} -- the combined list
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
//sorts._slowSort(a,i,j)
//_slowSort sorts a list of numbers very slowly using the slowsort method
//a {list} -- the list of numbers 
//i {number} -- the index to start at 
//j {number} -- the index to stop at
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
//sorts.slowSort(arr)
//slowSort simplifies input to the _slowSort function
//arr {list} -- the array to input to the _slowSort function
//return {list} -- the output of the _slowSort function
function slowSort(arr) {
  const array=arr;
  _slowSort(array,0,(array.length-1));
  return array;
}