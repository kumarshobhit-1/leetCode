class Solution {
    public int maxProfit(int[] prices) {
        int buyPrice = Integer.MAX_VALUE;
        int maxProfits = 0;

        for(int i=0; i<prices.length; i++){
            if(buyPrice < prices[i]){
                int profit = prices[i] - buyPrice;
                maxProfits = Math.max(maxProfits, profit);
            } else {
                buyPrice = prices[i];
            }
        }
        return maxProfits;
    }
}