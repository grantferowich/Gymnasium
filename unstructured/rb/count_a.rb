def count_a(word)
    count = 0

    i = 0
    while i < word.length
        char = word[i]
        if char == "A" || char =="a"
            count += 1
        end
    
        i += 1
    end 
    return count
end

puts count_a("application")  # => 2
puts count_a("bike")         # => 0
puts count_a("Arthur")       # => 1
puts count_a("Aardvark")     # => 3