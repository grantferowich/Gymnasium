/**
 *  Homework - Graph
 *  Developed on September 11, 2023. 
 *  Problem: Graph
 *
 *  Prompt: Create a directed graph class using adjacency list edge
 *          representation.
 *
 *  The Graph will have the following properties:
 *
 *             storage: {HashMap} - the keys represent unique vertex ids {Integer}
 *                      and the values are Lists/Vectors representing the
 *                      vertex ids of its neighors.
 *
 *  The Graph will also have the following methods:
 *
 *           addVertex: Method that accepts a vertex id {Integer} and adds the
 *                      vertex to the graph.  Return true if success and false
 *                      if failed.
 *
 *                      Input:    id {int}
 *                     Output:    {bool}
 *
 *        removeVertex: Method that accepts a vertex id and removes the vertex
 *                      with the matching id. Return true if success and false
 *                      if failed.
 *
 *                      Input:    id {int}
 *                     Output:    {bool}
 *
 *             addEdge: Method that accepts two vertex ids and creates a
 *                      directed edge from the first vertex to the second.
 *                      Returns true if success and false if failed.
 *
 *                      Input:    id1 {int}
 *                      Input:    id2 {int}
 *                     Output:    {bool}
 *
 *          removeEdge: Method that accepts two vertex id's and removes the
 *                      directed edge from the first vertex to the second.
 *                      Returns true if success and false if failed.
 *
 *                       Input:    id1 {int}
 *                       Input:    id2 {int}
 *                      Output:    {bool}
 *
 *           isVertex:  Method that accepts an id, and returns whether the vertex
 *                      exists in the graph.
 *
 *                       Input:    id {int}
 *                      Output:   {bool}
 *
 *           neighbors: Method that accepts a vertex id, and returns all of the
 *                      edges of that vertex.
 *
 *                       Input:    id {int}
 *                      Output:   {vector<int>}
 *
 *
 *  Input:  {Void}
 *  Output: {Graph}
 *
 *  Notes:   The notation for Time/Auxiliary Space Complexity for graphs
 *           is slightly different since certain functions depend on
 *           either the number of vertices, edges or even both
 *
 *           O(V) = Linear w/ respect to the number of vertices
 *           O(E) = Linear w/ respect to the number of edges
 *           O(V+E) = Linear w/ respect to the number of vertices * number of edges
 */

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
        for (const auto& vertexPair : this->storageMap) {
            std::cout << vertexPair.first << " ";
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

int main(){
    Graph graphS;
    graphS.addVertex("wake");
    graphS.addVertex("forest");
    graphS.addVertex("winston-salem");
    graphS.addEdge("saint charles", "winston-salem");
    graphS.printGraph();
    vector<string> verticesVec = graphS.vertices();
    cout << "Vertices vec: ";
    printVector(verticesVec);
    return 0;
}