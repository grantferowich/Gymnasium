#include <array>
#include <cctype>
#include <cmath>
#include <iterator>
#include <ostream>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
#include <sstream>
using namespace std;

void printVector(const std::vector<string>& vec){
    for (string valueStr : vec){
        cout << valueStr << " ";
    }
    cout << endl;
}