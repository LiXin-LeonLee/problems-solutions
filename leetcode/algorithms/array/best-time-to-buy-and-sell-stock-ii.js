var maxProfit = function(prices) {
    let profit = 0;
    let buy = false;
    let buyPrice;
    let last = prices.length - 1;
    prices.map((price, i) => {
        if (buy && (price > prices[i+1] || i === last)) {
            profit += price - buyPrice;
            buy = !buy;
            console.log(profit);
        } else if (!buy && price < prices[i+1]) {
            buyPrice = price;
            buy = !buy;
        }
    });
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4, 8, 9, 8, 8])); // 12