#include <string>
#include <typeinfo>
#include <type_traits>
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <typeinfo>
using namespace std;

class Graph {
  public:
    unordered_map<int, vector<int>> storageMap;
    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addVertex(int idInt) {
      if (this->storageMap.find(idInt) == this->storageMap.end()){
        storageMap[idInt] = {};
      }
      return true;
    }

    bool removeVertex(int idInt) {
      if (this->storageMap.find(idInt) == this->storageMap.end()){
        return false;
      }
      if (this->storageMap.find(idInt) != this->storageMap.end()){
        this->storageMap.erase(idInt);
        for (auto pair : this->storageMap){
            vector<int> neighborVec = pair.second;
            neighborVec.erase(remove(neighborVec.begin(), neighborVec.end(), idInt), neighborVec.end());
        }
      }
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addEdge(int idInt1, int idInt2) {
      if (this->storageMap.find(idInt1) == this->storageMap.end()){
        this->addVertex(idInt1);
      }
      if (this->storageMap.find(idInt2) == this->storageMap.end()){
        this->addVertex(idInt2);
      }
      this->storageMap[idInt1].push_back(idInt2);
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool removeEdge(int idInt1, int idInt2) {
      this->storageMap[idInt1].erase(remove(this->storageMap[idInt1].begin(), this->storageMap[idInt1].end(), idInt2), this->storageMap[idInt1].end());
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool isVertex(int idInt) {
      if (this->storageMap.find(idInt) == this->storageMap.end()){
        return false;
      }
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    vector<int> neighbors(int idInt) {
      return this->storageMap[idInt];
    }

    string printToFToString(bool inputToF){
        if (inputToF == 1){
            return "true";
        }
        if (inputToF == 0){
            return "false";
        }
        return "false";
    }

    void printGraph() {
        cout << "Vertices:" << endl;
        for (const auto& vertexPair : this->storageMap) {
            cout << vertexPair.first << " ";
        }
        cout << endl;

        cout << "Edges:" << endl;
        for (const auto& vertexPair : this->storageMap) {
            int fromVertex = vertexPair.first;
            const vector<int>& neighbors = vertexPair.second;
            for (int toVertex : neighbors) {
                    if (fromVertex < toVertex) {
                        cout << fromVertex << " - " << toVertex << endl;
                }
            }
        }
    }

};   
// Input: an array of arrays
// Output: a graph
vector<vector<int > >generateAdjacencyList(vector<vector<int> > edgeVec){
    Graph graphX;
    for (vector<int> pair : edgeVec){
        int uInt = pair[0];
        int vInt = pair[1];
        graphX.addEdge(uInt, vInt);
    }
    return graphX
}

int main(){
    vector<vector<int > > inputVec1 = {{1,2},{2,1},{1,3},{3,1},{2,4},{4,2},{3,4},{4,3},{4,8},{8,4},{4,5},{5,4},{5,6},{6,5},{5,7},{7,5},{6,7},{7,6},{8,7},{7,8},{8,9},{9,8}};
    Graph graphX = generateAdjacencyList(inputVec1);
    graphX.printG
    return 0;
}
