#include <iostream>
#include <sstream>
#include <vector>
#include <string>
using namespace std;
class StringBuilder{
    public: 
        StringBuilder() {};

        void append(int xInt){
            stream_ << xInt;
        }

        void append(const string& xStr){
            stream_ << xStr;
        }

        string toString(){
            return stream_.str();
        }
    private: 
        ostringstream stream_;
};

int main(){
    StringBuilder newString;
    newString.append("Hello ");
    newString.append("From Chicago!");
    string builtStr = newString.toString();
    cout << "Built string: " << builtStr << endl;
    return 0;
}
