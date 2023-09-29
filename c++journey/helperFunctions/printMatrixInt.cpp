#include <iostream>
#include <vector>

void printMatrixWithFormatting(const std::vector<std::vector<int>>& matrix) {
    // Get the number of rows and columns in the matrix
    int numRows = matrix.size();
    if (numRows == 0) {
        std::cout << "Matrix is empty." << std::endl;
        return;
    }
    int numCols = matrix[0].size();

    // Print the matrix with appropriate formatting
    std::cout << "[";
    for (int i = 0; i < numRows; ++i) {
        for (int j = 0; j < numCols; ++j) {
            std::cout << matrix[i][j];
            if (j < numCols - 1) {
                std::cout << ", ";
            }
        }
        if (i < numRows - 1) {
            std::cout << "], [";
        }
    }
    std::cout << "]" << std::endl;
}

int main() {
    // Example usage:
    std::vector<std::vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    printMatrixWithFormatting(matrix);

    return 0;
}
