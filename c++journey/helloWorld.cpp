#include <iostream>
/* 
Successfully tested the function on July 30, 2023.
 */
int sumDigits(int firstInt, int secondInt) {
        return firstInt + secondInt;
}

int main() {
    std::cout << "Hello, world" << std::endl;
    // data types
    int ageInt = 30;
    double piDouble = 3.141;
    char letterChar = 'G';
    // conditional
    if (ageInt >= 21){
        std::cout << "You can purchase different things." << std::endl;
    } else {
        std::cout << "You are a minor." << std::endl;
    }
    int totalSumInt = sumDigits(11, 12);
    std::cout << "Total sum: " << totalSumInt << std::endl;
    return 0;
}