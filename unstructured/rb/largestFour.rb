def largestFour(array)

    sorted = array.sort.reverse
    sortedFour = sorted[0..3]
    sum = 0 
    i = 0 
    while i < sortedFour.length
        sum += sortedFour[i]
        i += 1
    end
    return sum
end

# puts largestFour([1,1,1,-5,3,3,3]) # 3,3,3,
# puts 
# puts largestFour([2,9,2,-1,0,3,3,3]) #9,3,3,3

puts largestFour([1,1,1,-5]) # -2
puts largestFour([0,0,2,3,7,1]) #13