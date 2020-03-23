# chmode +x FILENAME to make file executable
# print the tenth line of file.txt

## METHOD 1 - HEAD AND TAIL
# tail -n +10 file.txt | head -1

### tail reads the last ten lines of a file by default
### head reads the first -n __ number of lines from the file
#  the +10 here (with plus sign) means the tail command starts with the 10th line of file file.txt and the output is piped redirected to head which extracts the first line, which is exactly the 10-th line of the file.

# head -n 10 file.txt | tail -n +10

# METHOD 2 - AWK

# awk "NR==10{print;exit}" file.txt

# Closely related to Method 2

# LINE=10
# awk "NR==$LINE{print;exit}" file.txt

# awk "NR==10" file.txt

# METHOD 3 - SED
# SED (Stream EDitor) does text replacement really well
# the -n flag with the p command prints only the material at line 10
cat file.txt | sed -n '10p' 