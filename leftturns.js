function fn(a, d) {
    var reversed = [];
    for (let i = d; i < a.length; i++) {
        reversed.push(a[i]);
        if (i == a.length - 1) {
            for (let z = 0; z < d; z++) {
                reversed.push(a[z]);
            }
        }
    }
    return reversed;
}

console.log(fn([58, 1, 86, 58, 26, 10, 86, 51], 5));
