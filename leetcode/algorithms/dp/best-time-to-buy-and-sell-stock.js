var maxProfit = function(prices) {
    let _maxProfit = 0;
    let minPrice = prices[0];
    const len = prices.length;
    for (let i=1; i<len; i++) {
        if(minPrice > prices[i]) {
            minPrice = prices[i];
        } else {
            _maxProfit = Math.max(_maxProfit, prices[i] - minPrice);
        }
    }
    return _maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5