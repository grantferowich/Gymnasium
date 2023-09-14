#include <set>
#include <map>
#include <vector>
#include <iostream>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <typeinfo>
using namespace std;
class Graph {
  public:
    unordered_map<string, vector<string> > storageMap;
    //   Time Complexity:
    //   Auxiliary Space Complexity:
    
    vector<string> vertices(){
      vector<string> vertexVec;
      for (auto const pair : this->storageMap){
        vertexVec.push_back(pair.first);
      }
      return vertexVec;
    }

    bool addVertex(string idStr) {
      if (this->storageMap.find(idStr) != this->storageMap.end()){
        return false;
      }
      if (this->storageMap.find(idStr) == this->storageMap.end()){
        storageMap[idStr] = {};
      }
      return true;
    }

    bool removeVertex(string idStr) {
      if (this->storageMap.find(idStr) == this->storageMap.end()){
        return false;
      }
      if (this->storageMap.find(idStr) != this->storageMap.end()){
        this->storageMap.erase(idStr);
        for (auto pair : this->storageMap){
            vector<string> neighborVec = pair.second;
            neighborVec.erase(remove(neighborVec.begin(), neighborVec.end(), idStr), neighborVec.end());
        }
      }
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool addEdge(string idStr1, string idStr2) {
      if (this->storageMap.find(idStr1) == this->storageMap.end()){
        this->addVertex(idStr1);
      }
      if (this->storageMap.find(idStr2) == this->storageMap.end()){
        this->addVertex(idStr2);
      }
      this->storageMap[idStr1].push_back(idStr2);
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    bool removeEdge(string idStr1, string idStr2) {
      if (this->storageMap.find(idStr1) == this->storageMap.end() || this->storageMap.find(idStr2) == this->storageMap.end()){
        return false;
      } 
      this->storageMap[idStr1].erase(remove(this->storageMap[idStr1].begin(), this->storageMap[idStr1].end(), idStr2), this->storageMap[idStr1].end());
      return true;
    }


    //   Time Complexity:
    //   Auxiliary Space Complexity:
    bool isVertex(string idStr) {
      if (this->storageMap.find(idStr) == this->storageMap.end()){
        return false;
      }
      return true;
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    vector<string> neighbors(string idStr) {
      return this->storageMap[idStr];
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

    void printAdjacencyList() {
        for (const auto &vertexPair : storageMap) {
            string vertex = vertexPair.first;
            const vector<string> &neighborsVec = vertexPair.second;

            cout << "Vertex " << vertex << ": ";
            cout << "{ ";
            int xInt = 0;
            while (xInt < neighborsVec.size()){
                string neighborStr = neighborsVec[xInt];
                cout << neighborStr;
                if (xInt < neighborsVec.size() - 1){
                    cout << ", ";
                    
                }
                xInt++;
            }
            cout << " }"; 
            cout << endl;
        }
    }

    void printGraph() {
    cout << "Vertices:" << endl;
    int numVertices = this->storageMap.size();
    int vertexCount = 0;
    
    for (const auto& vertexPair : this->storageMap) {
        std::cout << vertexPair.first;
        
        if (vertexCount < numVertices - 1) {
            std::cout << ", ";
        } else {
            std::cout << " ";
        }
        
        vertexCount++;
    }
    cout << endl;

    cout << "Edges:" << endl;
    for (const auto& vertexPair : this->storageMap) {
        string fromVertex = vertexPair.first;
        const std::vector<string>& neighbors = vertexPair.second;
        for (string toVertex : neighbors) {
            if (fromVertex < toVertex) {
                std::cout << fromVertex << " - " << toVertex << std::endl;
            }
        }
    }
    }

};


void printVector(const std::vector<std::string>& vec) {
    for (size_t i = 0; i < vec.size(); ++i) {
        std::cout << vec[i];
        if (i < vec.size() - 1) {
            std::cout << ", ";
        } else {
            std::cout << ".";
        }
    }
    std::cout << std::endl;
}


Graph generateAdjacencyList(vector<vector<string> > edgeVec){
    Graph graphX;
    for (vector<string> pair : edgeVec){
        string uStr = pair[0];
        string vStr = pair[1];
        graphX.addEdge(uStr, vStr);
    }
    return graphX;
};

int main(){
    vector<vector<string> >inputVec = {{"Wake Forest", "North Carolina"}, {"Wake Forest", "The South"}, {"The South", "The United States"}, {"North Carolina", "The South"}};
    Graph graphX = generateAdjacencyList(inputVec);
    graphX.printAdjacencyList();
    return 0;
}