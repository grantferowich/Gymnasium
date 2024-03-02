#include <iostream>
#include <unordered_map>
using namespace std;

void printMap(const unordered_map<string, int>& myMap) {
    for (const auto& pair: myMap) {
        cout << "Key: " << pair.first << ", Value: " << pair.second << endl;
    }
}

int main(){
    
    unordered_map<string, int> mapX;
    
    printMap(mapX);
    return 0;

}