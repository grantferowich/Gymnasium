#include <array>
#include <cmath>
#include <iterator>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
using namespace std;
/* 
Intersection 
CTCI 16.03

Given two straight line segments (represented as a start point
and an end point), compute the point of intersection, if any.

Set both equations equal to each other. 
Solve for x.
Input x into the initial equation. 
Suppose line 1: y = 2x
    [0, 0]
    [1, 2]
    [2, 4]
    [3, 6]

    0 = m0 + b
    6 = m3 + b
Suppose line 2: y = 4x - 4
    [0, -4]
    [1, 0]
    [2, 4]
    [3, 8]

    8 = 3x + b
    8 - 3x = b
    8 - 3(0) 

    [3, 8]
    8 = 3x + b
    8 = 3(3) + b
    8 = 9 + b
    b = -1
* Inputs: 
Line segment 1 start point: X0, Y0: [ 0, -4 ]
Line segment 1 end point: X1, Y1: [ 3, 8 ]
Line segment 2 start point: X2, Y2: [ 0, 0 ]
Line segment 2 end point: X3, Y3: [ 3, 6 ]

* Find formula of line 1: 
Find slope1Int: ( (abs(y0) + abs(y1)) / (x1 - x0) ) 

* Find formula of line 2: 
Find slope2Int: ( (abs(y2) + abs(y3)) / (x3 - x2) ) 

* Find yIntercept1Int:
y0 = slope1Int*X0 + yInterceptInt
yIntercept1Int = y0 - slope1Int*x0;

* Find yIntercept2Int:
y2 = slope2Int*X2 + yInterceptInt
yIntercept2Int = y2 - slope2Int*x2;

* Find the formula of line 1:
arbitraryY1Int = slope1Int*xStarInt + yIntercept1Int

* Find the formula of line 2:
arbitraryY2Int = slope2Int*xStarInt + yIntercept2Int

* Solve for outputXInt via system of equations 
* subtract the smaller slope from whichever equation has the greater slope: 
* case 1: slope1Int is larger:
* if slope1Int > slope2Int,
* then 
* let slopeXInt = slope1Int - slope2Int  
*        yInterceptXInt = yIntercept2Int - yIntercept1Int      
* else 
* case 2: slope2Int is larger
* slopeXInt = slope2Int - slope1Int       
*        yInterceptXInt = yIntercept1Int - yIntercept2Int

* Solve for outputYInt via plug and chug
* arbitraryY2Int = slope2Int*outputXInt + yIntercept2Int
* outputYInt = arbitraryY2Int

* return the tuple [outputXInt, outputYInt]
find formula of line 2 using endpoint of line segment 2:
6 = 3() + b
yInterceptInt = endpoint[1] - endpoint[0]*endpoint[0]
6 = 3(3) + b
b = -3

form1: y = 2x + 0
slope1Int: 2
form2: y = 4x - 4
slope2Int: 4
2x + 0 = 4x - 4
0 = 2x - 4
slopeXInt = slope2Int - slope1Int = 4 - 2 = 2
4 = 2x
yInterceptXInt = yIntercept1Int - yIntercept2Int  = 0 - -4 = 4
x = 2

outputXInt = yInterceptXInt / slopeXInt = 4 / 2 = 2
outputXInt = 2

outputYInt is given by plugging outputXInt into form1
outputYInt = 
form1 

outputYInt = 2(2) = 4

return [2, 4]



Point of intersection: [ 2, 4 ]

*/

class Solution{
    public: 

}

int main(){

    return 0;
} 