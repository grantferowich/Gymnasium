def reverse(word)
    reversed = ""
  
    i = 0
    while i < word.length
      char = word[i]
      reversed = char + reversed
  
      i += 1
    end
  
    return reversed
end

# def reverse(word)

#     i = word.length - 1 
    
#     new = ""
#     while i <= 0
#       char = word[i]
#         new = new + char 
     
#       i -= 1
#     end
    
#     return new 
    
# end
  
puts reverse("cat")          # => "tac"
puts reverse("programming")  # => "gnimmargorp"
puts reverse("bootcamp")     # => "pmactoob"