"use strict";

let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let format = /[!@$#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let arr1 = [];
let str = "";

for (let i = 0; i < str.length; i++) {
    arr1.push(str.replace(/\s/g, '').toUpperCase()[i]);
    for (let x = 0; x < alph.length; x++) {
        let y = x + 1;
        if (arr1[i] == alph[x]) {
            arr1.splice(i, x);
            arr1.push(y);
        }
    }
}

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == undefined) { arr1.splice(i, i); }
    if (format.test(arr1[i])) { arr1.splice(i, i); }
}

console.log(arr1);