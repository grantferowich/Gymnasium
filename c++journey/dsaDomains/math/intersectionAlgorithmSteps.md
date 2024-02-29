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

* Compute the intersection when there is a vertical line
* eqn1: x = 3
* eqn2: y = 2x
* outputXInt = 3
* outputYInt = slope2Int * outputXInt = 2 * 3 = 6
* return [ 3, 6 ]


* Compute the intersection when there is a horizontal line 
* eqn1: y = 2
* eqn2: y = 2x
* outputXInt = slope2Int / outputYInt = 2 / 2 = 1
* outputYInt = 2
* return [ 1, 2 ]


* Compute the intersection when there is a horizontal line and a y intercept
* eqn1: y = 2
* eqn2: y = 2x + 1
* outputXInt = (outputYInt - yIntercept2Int) / slope2Int
* outputYInt = 2  
* return [ 0.5, 2 ]


* Compute the intersection when there is a vertical line and a y intercept
* eqn1: x = 2
* eqn2: y = 2x + 1
* outputXInt = 2
* outputYInt = yCoordinateInt()
* return [ 2, 5 ]