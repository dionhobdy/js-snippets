let arr0 = [1, 2, 3, 4, 5, 6, 7, 8]; // create array for manipulation

let arrMap = new Map(); // create a new map
for (x in arr0) {
    arr0[x] = arr0[x] * 2; // multiply the current arr0 element
    arrMap.set(x, arr0[x]); 
    if (arrMap.get(x) >= 10) { arrMap.delete(x) } // if an arrMap element is greater than 10 delete the element
} // for each element in arr add to arrMap
