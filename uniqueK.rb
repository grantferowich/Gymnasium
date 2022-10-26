# find the longest substr that contains k unique chars.
def KUniqueCharacters(str)
    # find the k.
    # evaluation each substr uniqness.
    # return the longest.
    k = str[0].to_i
      arr = str.split("")
      arr.shift
      result = []
      # define the starting point each time the code runs
  
      (0..arr.length - 1).each do |start|
      # loop through the array
        (start..arr.length - 1).each do |idx|
  
          sub_str = arr.slice(start..idx)
          # if put sub array with k uniq length in the result.
          if sub_str.uniq.length == k
             result << sub_str
          end
        end
      end
      
      # find the longest substring in the array.Then return the 
       result.max_by(&:length).join
  end
  
     
  # keep this function call here    
 puts KUniqueCharacters("3aabacbebebe")  