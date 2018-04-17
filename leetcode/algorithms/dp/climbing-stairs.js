var climbStairs = function(n) {
    let s = [1, 1];
    for (let i=2; i<=n; i++) {
        s[i] = s[i-1] + s[i-2];
    }
    return s[n];
};

climbStairs(5);
