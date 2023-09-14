#include <iostream>
#include <chrono>

using namespace std;
using namespace std::chrono;

int main(){
    auto startTime = chrono::high_resolution_clock::now();
   
    auto endTime = chrono::high_resolution_clock::now();
    auto duration = chrono::duration_cast<chrono::microseconds>(endTime - startTime);
    cout << "Execution time: " << duration.count() << " microseconds." << endl;

    return 0;
}