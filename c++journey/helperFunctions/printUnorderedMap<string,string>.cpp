#include <iostream>
#include <unordered_map>

void printMap(const std::unordered_map<std::string, std::string>& myMap) {
    for (const auto& pair : myMap) {
        std::cout << "Key: " << pair.first << ", Value: " << pair.second << std::endl;
    }
}