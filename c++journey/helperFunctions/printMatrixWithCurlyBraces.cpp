#include <array>
#include <cmath>
#include <iterator>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <iostream>
#include <array>
using namespace std;

void printMatrixWithCurlyBraces(const vector< vector<int> >& matrix) {
    cout << "{";
    for (size_t i = 0; i < matrix.size(); ++i) {
        cout << "{";
        for (size_t j = 0; j < matrix[i].size(); ++j) {
            cout << matrix[i][j];
            if (j != matrix[i].size() - 1) {
                cout << ", ";
            }
        }
        cout << "}";
        if (i != matrix.size() - 1) {
            cout << ", ";
        }
    }
    cout << "}" << endl;
}
