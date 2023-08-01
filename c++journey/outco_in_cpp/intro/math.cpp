#include <iostream>
int multiply (int int1, int int2) {
    return int1 * int2;
}
int main (){
    int resultInt = multiply(3, 4);
    std::cout << "Result: " << resultInt << std::endl;
}