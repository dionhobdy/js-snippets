let arr = [0,0,1,1,1,2,2,3,3,4]; // array pulled from leet code.

for (x in arr) {
    for (i in arr) {
        let y = i++;
        if (arr[i] === arr[y]) { arr.splice(i, 1); }
    }
} // examine each element in arr. if one is a duplicate of the other, delete the duplicate.