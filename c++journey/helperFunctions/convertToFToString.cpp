#include <iostream>
#include <string>
using namespace std;

string converToFToString(bool ToF){
    if (ToF == 0){
        return "false";
    }
    if (ToF == 1){
        return "true";
    }
    return "";
}