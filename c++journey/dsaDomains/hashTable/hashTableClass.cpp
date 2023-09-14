#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
#include <typeinfo>
using namespace std;
/**
 *  Homework - Hash Table
 *  Developed on August 16, 2023. 
 *
 *  Problem: Hash Table
 *
 *  Prompt: Create a hash table class using separate chaining.
 *
 *  The HashTable will have the following properties:
 *
 *         storage:  {ArrayList[]} - an array of array lists containing key-value pairs
 *                                   key-value pairs are string[]{key, value}
 *         buckets:  {Integer} - the maximum number of buckets that your
 *                   storage can contain. Initially set to 8.
 *           size:   {Integer} count of key-value pairs in the storage
 *
 *  The HashTable will also have the following methods:
 *
 *           hash:   Method that takes a key and bucket number and provides a
 *                   hashed value. The dbjb2 hashing function has been
 *                   provided.
 *
 *                   Input:      key {string}
 *                   Input:      buckets {Integer}
 *                   Output:     index {Integer}
 *
 *         insert:   Method that adds a key-value pair into the storage. If the
 *                   key already exists, the value should be updated. Use
 *                   separate chaining to handle collisions.
 *
 *                   Input:      key {string}
 *                   Input:      value {string}
 *                   Output:     {Void}
 *
 *            get:   Method that given a key, return its corresponding value.
 *                   If the key does not exist, return NULL.
 *
 *                   Input:      key {string}
 *                   Output:     value {string}
 *
 *         remove:   Method that takes a key as its input, and looks for the
 *                   and removes the key-value pair from the bucket.
 *
 *                   Input:      key {string}
 *                   Output:     {Void}
 *
 *         resize:   If the load factor reaches a critical 0.75 or higher,
 *                   double the number of buckets. If the load factor is 0.25
 *                   or less, half the number of buckets. Make sure the number
 *                   of buckets do not fall below 8 and re-index all key-value
 *                   pairs if bucket size is changed.
 *
 *                   Input:      key {string}
 *                   Output:     {Void}
 *
 *  Input: N/A
 *  Output: A HashTable instance
 */

class HashTable {
  public:
    int bucketsInt = 8;
    int sizeInt = 0;
    vector<vector<vector<string> > > storageMatrix;

    HashTable() {
      _initializeStorage();
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    int hash(string key, int buckets) {
      int hash = 5381;
      for (int i = 0; i < key.size(); i++) {
        hash = ((hash << 5) + hash) + key[i];
      }
      return hash % buckets;
    }

    // Amortized Time Complexity (amortized):
    // Auxiliary Space Complexity (amortized):
    void insert(string keyStr, string valueStr) {
      int indexInt = hash(keyStr, this->bucketsInt);
      if (indexInt > this->storageMatrix.size()){return;}

      vector<vector<string> > &bucketVec = this->storageMatrix[indexInt];
      int gInt = 0;
      while (gInt < bucketVec.size()){
        if (bucketVec[gInt][0] == keyStr){
          bucketVec[gInt][1] = valueStr;
          return;
        }
        gInt++;
      }
      bucketVec.push_back(vector<string>{keyStr, valueStr});
      this->sizeInt++;
      resize();
    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    string get(string keyStr) {
      int indexInt = hash(keyStr, bucketsInt);
      if (indexInt > this->storageMatrix.size()) { return ""};
      vector<vector<string> > &bucketVec = this->storageMatrix[indexInt];
      int gInt = 0;
      while (gInt < bucketVec.size()){
        if (bucketVec[gInt][0] == keyStr){
          return bucketVec[gInt][1];
        }
        gInt++;
      }
      return "";
    }


    // Amortized Time Complexity (amortized):
    // Auxiliary Space Complexity (amortized):
    void remove(string keyStr) {
        int indexInt = hash(keyStr, this->bucketsInt);
        if (indexInt > this->storageMatrix.size()){ return;}
        vector<vector <string> > &bucketVec = this->storageMatrix[indexInt];
        int gInt = 0;
        while (gInt < bucketVec.size()){
          if (bucketVec[gInt][0] == keyStr){
            bucketVec.erase(bucketVec.begin() + 1);
            this->sizeInt--;
            resize();
            return;
          }
          gInt++;
        }

    }


    // Time Complexity:
    // Auxiliary Space Complexity:
    void resize() {
      float loadFactorFlt = this->sizeInt / (float)this->bucketsInt;
      // don't resize if the loadFactorFlt is within a certain range;
      if (loadFactorFlt > 0.25 && loadFactorFlt < 0.75){return;}
      // don't resize smaller than 8;
      if (loadFactorFlt <= 0.25 && this->bucketsInt == 8){return;}
      vector<vector<vector<string> > > tempMatrix = this->storageMatrix;
      this->bucketsInt = loadFactorFlt >= 0.75 ? this->bucketsInt * 2 : this->bucketsInt / 2;
      _initializeStorage();

      int gInt = 0;
      int fInt = 0;
      while (gInt < tempMatrix.size()){
        vector<vector<string> > bucketVec = tempMatrix[gInt];
        fInt = 0;
        while (fInt < bucketVec.size()){
          this->sizeInt--;
          this->insert(bucketVec[fInt][0], bucketVec[fInt][1]);
          fInt++;
        }
        gInt++;
      }
    }
  private:
    void _initializeStorage(){
      this->storageMatrix = vector<vector<vector<string> > >(this->bucketsInt);
      int gInt = 0;
      while (gInt < bucketsInt){
        this->storageMatrix.push_back(vector<vector<string> >{});
        gInt++;
      }
    }
};

