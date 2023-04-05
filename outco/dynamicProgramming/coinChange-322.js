/* 
322. Coin Change 

Medium 

You are given an integer array coins representing
coins of different denominations and an integer 
amount representing a total amount of money.

Return the fewest number of coins that you need 
to make up that amount. If that amount of money 
cannot be made up by any combination of the coins, 
return -1.

You may assume that you have an infinite number 
of each kind of coin.


Always find the least number of coins
always check to put largest coin in first, or something

Example 1: 
coinsArr = [1,2,5]
amountInt = 11
output: 3
why? 11 = 5 + 5 + 1 

Example 2:
coinsArr = [1, 5, 10]
amountInt = 16
output = 3
why? 16 = 10 + 5 + 1

Example 3:
coinsArr = [1, 5, 10, 25]
amountInt = 30 
output: 2
why? 30 = 25 + 5 

*/