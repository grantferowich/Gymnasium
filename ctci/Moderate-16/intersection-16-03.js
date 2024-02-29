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

Line segment 1 start point: X0: [ 0, -4 ]
Line segment 1 end point: Y0: [ 3, 8 ]
Line segment 2 start point: X1: [ 0, 0 ]
Line segment 2 end point: Y1: [ 3, 6 ]

Find formula of line 1: 
Find slope - abs(x0[1]) 


find formula of line 2 using endpoint of line segment 2:
6 = 3() + b
yInterceptInt = endpoint[1] - endpoint[0]*endpoint[0]
6 = 3(3) + b
b = -3

Point of intersection: [ 2, 4 ]

*/