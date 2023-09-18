#include <iostream>
#include <chrono>
#include <iomanip> 
using namespace std;
using namespace std::chrono;

int main(){
    auto startTime = chrono::high_resolution_clock::now();
   
    auto endTime = chrono::high_resolution_clock::now();
    auto duration = chrono::duration_cast<chrono::microseconds>(endTime - startTime);
    cout << "Execution time: " << duration.count() << " microseconds." << endl;
    
    struct rusage r_usage;
    getrusage(RUSAGE_SELF, &r_usage);
    cout << "Memory usage: " << r_usage.ru_maxrss << " KB" << endl;
    return 0;
}