def append(array)
    return array.push("wake forest")
end

# puts append(["i","went","to"])

def appendX(array)
    return array << "wake forest"
end

# puts appendX(["i", "went", "to"])

def deconstruct(array)
    return array.pop
end

# puts deconstruct(["i","went","to","wake forest"]) 

#pop returns the last element from an array

def deconstructX(array)
    return array.shift
end

#puts deconstructX(["i","went","to","wake forest"]) 

# shift returns the first element from an array


def deconstructX(array)
    return array.unshift("i")
end

#unshift appends a new element to the front of an array

# puts deconstructX(["went", "to", "wake forest"])

def existence(arr, ele)
    return arr.include?(ele)
end

puts existence([1,23,2015], 2011)