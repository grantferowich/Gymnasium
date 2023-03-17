/*  Edit Distance

                w1      w2
                horse, ros
    (insert)         | (delete)
       /          hors,ros
horse,ro            |
                  hor,ros
                    |
                  ho, ros
                    |
                  h, ros
                    |
                  "", ros

const editDistance = (word1, word2) => {

#Base case: 
if the first word is empty:
    return the length of second word
if the second word is empty: 

Recursive case: 
if ending chars match
    editDistance(word1 minus last char, word 2 minus last char)

return 1 + min(
    editDistance(word1, word2 minus last char) # insert
    editDistance(word1 minus last char, word2) # delete
    editDistance(word1 minus last char, word2 minus last char) # replace
)

}   
                  

*/