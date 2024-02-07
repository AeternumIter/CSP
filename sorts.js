const list=[];
let x=100;
for (let i=0;i<x;i++) {
  list.push(Math.floor(Math.random()*x))
}
function defaultSort(list) {
  return list.sort(function(a,b){return a-b});
}

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

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

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
function slowSort(arr) {
  const array=arr;
  _slowSort(array,0,(array.length-1));
  return array;
}
//console.log(quickSort(list));
//console.log(defaultSort(list));
//console.log(insertionSort(list));
//console.log(mergeSort(list));
console.log(slowSort(list));