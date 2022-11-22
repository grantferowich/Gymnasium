def count_x(word)

    count = 0 
    i = 0
    while i < word.length
        char = word[i]
      
      if char == "x"
        count += 1
      end
      
      i+=1
    end 
    
    return count
      
      
  end
  
  puts count_x("sex") # => 1
  puts count_x("excellent") # => 1
  puts count_x("hello") # => 0
  