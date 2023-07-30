#include <iostream>
/* 

Successfully tested the function on July 30, 2023.

*/
int main(){
    int* ageInt = new int;
    *ageInt = 30;
    std::cout << "The ageInt variable is: " << *ageInt << std::endl;
    delete ageInt;
    return 0;
}