#include <iostream>
class JustAClass {
    public: 
        void print(){
   
            std::cout << "Hi from just a class" << std::endl;
        }
};

int main(){
    JustAClass obj;
    obj.print();
    // operator overloading
    int int1 = 9;
    int int2 = 8;
    int multipliedInt = int1 * int2;
    std::cout << "Multiplied integer: " << multipliedInt << std::endl;
    return 0;
}
