#include <iostream>
using namespace std;

class School {
    public: 
        void WakeForest(){
            cout << "Go Deacs" << endl;
        }
        void STCE(){
            cout << "It's a great day to be a saint" << endl;
        }
};

int main(){
    School school;
    school.WakeForest();
    school.STCE();
    return 0;
}