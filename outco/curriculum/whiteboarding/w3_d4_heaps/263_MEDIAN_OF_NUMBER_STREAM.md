# 263 - Find the Median of a Number Stream

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

```
Example: arr = [2, 3, 4], the median is 3. 
Example: arr = [1, -2, 3], the median is 1. 
```
# Implement the MedianFinder class:

- MedianFinder() initializes the MedianFinder object.
- addNum(int num) adds the integer num from the data stream to the data structure.
- findMedian() returns the median of all elements so far.

# Example

```
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
medianFinder = MedianFinder()
medianFinder.addNum(1)   # arr = [1]
medianFinder.addNum(2)    # arr = [1, 2]
medianFinder.findMedian() # return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3)    # arr[1, 2, 3]
medianFinder.findMedian() # return 2.0
```

# Constraints
```
- Time: addNum: O(logn)
- Time: findMedian O(1)
- Space: O(n)

```

# Hints for Interviewer

1. If you were to use two heaps, how would those heaps be utilized?
2. The two heaps will be a min and max heap. 
3. Getting the correct median of the stream may involve resizing and transfering values to either heap.
4. Will manipulatung the numbers by turning them into negative or positive values be helpful when thinking of peak elements in either heap? 



```
stream = [1,8,7,4,3,10]

     min_heap      max_heap
     
        -3            4
       /  \          / \
     -1    0        8   7


```

# Solution

AddNum()
- Place num in max_heap
- Pop from max_heap and set num to negative num and place in min_heap
- If length of min_heap is greater than max_heap, pop from min_heap and place in max_heap

findMedian()
- If length of min_heap and max_heap is equal, get average of head nums on both min_heap and max_heap
- If length of max_heap is greater, then get head of max_heap


# Resources
[Median in a stream of integers (running integers)](https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/)

# Code

```python


import heapq

class MedianFinder:

    def __init__(self):
        self.min_heap = [] #O(1)
        self.max_heap = [] #O(1)
        heapq.heapify(self.min_heap)
        heapq.heapify(self.max_heap)
        

    def addNum(self, num: int) -> None:
        heapq.heappush(self.max_heap, num) #O(logn)
        val = heapq.heappop(self.max_heap) #O(logn)
        heapq.heappush(self.min_heap, -val) #O(logn)
        if len(self.min_heap) > len(self.max_heap): #O(1)
            val = heapq.heappop(self.min_heap) #O(logn)
            heapq.heappush(self.max_heap, -val) #O(logn)
        

    def findMedian(self) -> float:
        if len(self.min_heap) == len(self.max_heap): #O(1)
            return (-self.min_heap[0] + self.max_heap[0]) / 2 #O(1)
        return self.max_heap[0] #O(1)
```

