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

#puts existence([1,23,2015], 2011)

def convertStringtoArray(string)
    return string.split("")
end

#puts convertStringtoArray("Grant")

def convertArrayToString(array)
    return array.join(" ")
end

#puts convertArrayToString(["Grant","Ferowich", "went","to","Wake", "Forest"])


people = ["Candace", "Jon", "Jose"]

# iterate over elements of an array using each
people.each { |person| puts person } # prints
# Candace
# Jon
# Jose

# iterate over elements of an array with index using each_with_index
people.each_with_index do |person, i|
  puts person
  puts i
  puts "-----"
end # prints
# Candace

greeting = "hello"

# iterate over characters of a string using each_char
greeting.each_char { |char| puts char } # prints
# h
# e
# l
# l
# o

# iterate over characters of a string with index using each_char.with_index
greeting.each_char.with_index do |char, i|
  puts char
  puts i
  puts "---"
end # prints