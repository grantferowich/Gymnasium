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
*/

class Solution{
    
    public: 

    int yCoordinateInt(int slopeInt, int xInt, int yInterceptInt){
        return slopeInt*xInt + yInterceptInt;
    }

    int xCoordinateInt(int slopeInt, int yInt, int yInterceptInt){
        return ((yInt - yInterceptInt) / slopeInt);
    }

    vector<int>intersection(vector<int> vec0, vector<int> vec1, vector<int> vec2, vector<int> vec3){
        int slope1Int = ((abs(vec0[1]) + abs(vec1[1])) / (vec1[0] - vec0[0]));
        int slope2Int = ((abs(vec2[1]) + abs(vec3[1])) / (vec3[0] - vec2[0]));
        int yIntercerpt1Int = vec0[1] - slope1Int*vec0[0];
        int yIntercept2Int = vec2[1] - slope2Int*vec2[0];
        int slopeXInt;
        int yInterceptXInt;
        if (slope1Int > slope2Int){
            slopeXInt = slope1Int - slope2Int;
            yInterceptXInt = yIntercept2Int - yIntercerpt1Int;
        } else {
            slopeXInt = slope2Int - slope1Int;
            yInterceptXInt = yIntercerpt1Int - yIntercept2Int;
        }
        int outputXInt = yInterceptXInt / slopeXInt;
        int outputYInt = yCoordinateInt(slope1Int, outputXInt, yIntercerpt1Int);

        // intersection coordinates are oob
        if (outputXInt > vec1[0] || outputXInt < vec0[0] || outputXInt < vec2[0] || outputXInt > vec3[0]){
            return {-1};
        }
        if (outputXInt <= vec1[0] || outputXInt >= vec0[0] || outputXInt >= vec2[0] || outputXInt <= vec3[0]){
            return {outputXInt, outputYInt};
        }

        return {-1};
    }
};

/* 
Line segment 1 start point: X0, Y0: [ 0, -4 ]
Line segment 1 end point: X1, Y1: [ 3, 8 ]
Line segment 2 start point: X2, Y2: [ 0, 0 ]
Line segment 2 end point: X3, Y3: [ 3, 6 ]
*/

void printVector(const vector<int>& vec){
    cout << "{ ";
    int xInt = 0;
    while (xInt < vec.size()){
        int valueInt = vec[xInt];
        if (xInt < vec.size() - 1){
            cout << valueInt << ", ";
        } 
        if (xInt == vec.size() - 1){
            cout << valueInt;
        }
        xInt++;
    }
    cout << " }" << endl;
}

int main(){
    Solution solutionX;
    vector<int> vec1 = {0, -4};
    vector<int> vec2 = {3, 8};
    vector<int> vec3 = {0, 0};
    vector<int> vec4 = {3, 6};
    vector<int> outputVec = solutionX.intersection(vec1, vec2, vec3, vec4);
    cout << "Output vector 1..." << endl;
    printVector(outputVec);

    vector<int> vec5 = {5, 5};
    vector<int> vec6 = {10, 10};
    vector<int> vec7 = {0, 0};
    vector<int> vec8 = {4, 4};
    vector<int> outputVec1 = solutionX.intersection(vec5, vec6, vec7, vec8);
    cout << "Output vector 2..." << endl;
    printVector(outputVec1);
    return 0;
}