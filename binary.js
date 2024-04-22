let numbers=[];
let notDone=true;
for (let i=1;i<1001;i++) {
    numbers.push(i);
}
console.log("Choose a number 1-1000");
while (notDone) {
    //console.log("Is it higher(h), lower(l), or equal(e) to "+numbers[Math.floor(numbers.length/2)]);
    let answer=("Is it higher(h), lower(l), or equal(e) to "+numbers[Math.floor(numbers.length/2)]);
    if (answer=="e") {
        console.log("I guessed it!");
        notDone=false;
    } else if (answer=="h") {
        numbers=numbers.slice(Math.floor(numbers.length/2));
    } else if (answer=="l") {
        numbers=numbers.slice(0,Math.floor(numbers.length/2));
    } else {
        console.log("invalid response");
    }
}