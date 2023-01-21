/* 11. Container With Most Water
Medium
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
 */

const maxArea = (height) => {
    // fast and slow pointers, i and j
    // for a given set of indices
    // calculate height as Math.min(i,j)
    // calulate width as i - j
    // if the area is greater than present max area
    // update max area
    // loop while i and j are less than array length
};