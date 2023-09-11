class Graph {
  public:
    unordered_map<int, vector<int>> storageMap;
    //   Time Complexity:
    //   Auxiliary Space Complexity:
    
    vector<int> vertices(){
      vector<int> vertexVec;
      for (auto const pair : this->storageMap){
        vertexVec.push_back(pair.first);
      }
      return vertexVec;
    }
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

    void printAdjacencyList() {
        for (const auto &vertexPair : storageMap) {
            int vertex = vertexPair.first;
            const vector<int> &neighborsVec = vertexPair.second;

            cout << "Vertex " << vertex << ": ";
            cout << "{ ";
            int xInt = 0;
            while (xInt < neighborsVec.size()){
                int neighborInt = neighborsVec[xInt];
                cout << neighborInt;
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
            int fromVertex = vertexPair.first;
            const std::vector<int>& neighbors = vertexPair.second;
            for (int toVertex : neighbors) {
                if (fromVertex < toVertex) {
                    std::cout << fromVertex << " - " << toVertex << std::endl;
                }
            }
        }
    }
};


void printVector(const vector<int>& vec){
    cout << "{ ";
    int xInt = 0;
    while (xInt < vec.size()){
        int valueInt = vec[xInt];
        if (xInt < vec.size() - 1){
            cout << valueInt << ", ";
        } 
        if (xInt == vec.size() - 1){
            cout << valueInt;
        }
        xInt++;
    }
    cout << " }" << endl;
}