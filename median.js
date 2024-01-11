function median(x) {
  let temp = x;
  temp.sort(function(a,b){return a-b});
  if (temp.length%2===1) {
    return temp[(temp.length-1)/2];
  } else {
    return (temp[temp.length/2]+temp[temp.length/2-1])/2
  }
}
