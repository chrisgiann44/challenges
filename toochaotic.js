function fn(q) {
    var arr = 0;
    for (let i = 0; i < q.length; i++) {
        if (q[i] > i + 1) {
            if (q[i] - i - 1 > 2) {
                return "Too chaotic";
            }
            arr += q[i] - i - 1;
        }
    }
    return arr;
}

console.log(fn([2, 3, 1, 3, 5]));
