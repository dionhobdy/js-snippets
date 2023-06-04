var arr = []; // create empty array for manipulation.

let ranInt = (max) => {
    return Math.floor(Math.random() * max);
} // random number generator that uses a custom input for the base.

for (var i = 0; i <= ranInt(11); i++) {
    y = ranInt(11);
    if (y == 0) { y = ranInt(11); }
    arr.push(y);
} // push a random integer into arr. if int variable equates to zero, reroll rng.

let arrMap = new Map(); // create a new map to place each arr element in.
for (x in arr) { arrMap.set(x, arr[x]); } // for every element in arr, create a new element in arrMap.