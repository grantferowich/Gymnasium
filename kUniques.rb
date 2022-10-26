def kUniques(kstring)
    k = kstring[0].to_i
    arr = kstring.split("")
    arr.shift
    accumulator = []

    (0..arr.length - 1).each do |start|
        (start..arr.length - 1).each do |idx|
            substring = arr.slice(start..idx)
            if substring.uniq.length == k 
                accumulator << substring
            end
        end
    end
    accumulator.max_by(&:length).join
end

puts kUniques("2aabbcbbbadef") #aabc
puts kUniques("3aabacbebebe") #bebebe
