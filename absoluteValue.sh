#!/bin/bash
# read some nums as standard input
read nums
total = 0

for num in $nums
do 
    if [ "$num" -lt 0 ]
    then 
        num = `expr $num \* -1`
    fi
    total=`expr $num + $total`
done
echo $total