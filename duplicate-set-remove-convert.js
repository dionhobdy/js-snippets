let arr = [0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 8];

function remove() {
    let set = new Set();
    let y;
    for (x in arr) {
         if (arr[x] != arr[y]) { set.add(arr[x]); }
    }
    arr = [...set];
}

remove();
