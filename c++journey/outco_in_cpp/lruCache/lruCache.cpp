/*
 * Homework - LRU Cache

Started developing on August 15, 2023.

 */

/*
 *
 *  Instructions: LRU Cache is a popular and challenging algorithm question
 *                commonly asked during whiteboarding and tech screen sessions.
 *
 *                While difficult, this exercise is a good problem to test your
 *                ability to build and manipulate data structures.
 *
 *
 *  LRU Cache
 *
 *                Design and implement a data structure for a Least Recently
 *                Used (LRU) Cache.
 *
 *                This implementation involves a doubly linked list and a hash map.
 *
 *          NOTE: A LRU caching scheme is designed to remove the least recently
 *                used item when a new item is added to the cache which is
 *                currently at or has just reached capacity.
 *
 *                An item is considered to be recently used if it has just been
 *                accessed or added.
 *
 *          I.  Node Class
 *              Create a Node class
 *
 *              The Node class should contain the following properties:
 *              key: {String}
 *              value: {String}
 *              previous: {Node} (initially None)
 *              next: {Node} (initially None)
 *
 *         II.  LRUCache Class
 *              Create an LRUCache class
 *
 *              The LRUCache class should contain the following properties:
 *              capacity: {Integer}
 *              count: {Integer} (initially 0)
 *              cache: {Hash Table} The keys represent unique ids of each node,
 *                                  and the values represent the node objects
 *                                  that possess those keys.
 *              head: {Node}
 *              tail: {Node}
 *
 *     Your LRU cache should have the following methods:
 *
 *      get(key): Retreives a value from the cache (will always be positive) at
 *                the key if the key exists in the cache, otherwise returns -1.
 *
 * set(key,value): Inserts the value at the key or creates a new key:value entry
 *                if key is not present. When the cache reaches its capacity, it
 *                should invalidate the least recently used item before
 *                inserting a new item.
 *
 *          HINT: Consider what data structure(s) might be neccessary to
 *                implement the LRU Cache
 *
 *     Example:
 *     lruCache = new LRUCache(3);
 *     lruCache.set('doc', 'david');
 *     lruCache.set('cpo', 'joshua');
 *     lruCache.set('ceo', 'andy');
 *
 *     lruCache.get('doc'); => 'david'
 *     lruCache.set('swe', 'ron');
 *     lruCache.get('cpo'); => -1
 *
 *
 */
