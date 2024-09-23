'use strict';

let str = "Hello"

function solution(str){
    let split = [];
    for (let i = 0; i < str.length; i++) {
      let y = i + 1;
      split.push(`${str[i]}${str[y]}`);
      if (y == undefined) { y = '_'; }
    }
    return split;
}

console.log(solution(str));
