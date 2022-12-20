






/*
 *  Dungeon Escape (Tabulation)
 *
 *  Given a matrix of integers that represents rooms in a dungeon,
 *  determine the minimum amount of health a adventurer must start with
 *  in order to escape the dungeon
 *
 *  The adventurer starts at the upper left corner of the matrix, and
 *  the exit is located at the bottom right corner.
 *
 *  The adventurer must leave the dungeon before sundown, so in the
 *  interest of time, this brave adventurer decides to only travel
 *  downwards and to the right
 *
 *  Negative integers represent rooms with monsters, so the adventurer
 *  would lose health when going though these rooms. 0s represent empty
 *  rooms, and positive integers represent rooms that contain health
 *  pots that will increase the adventurer's health
 *
 *
 *  Input:  dungeon {Integer[][]}
 *  Output: {Integer}
 *
 *
 * Example:
 *  Input:  [[ -2, -5, 10],
 *           [ -3,-10, 30],
 *           [  3,  1, -5]]
 *
 *  Output: 7 (The steps to do this would be down, down, right, right)
 *
 *
 *    Note: The initial health should be represented by a positve integers
 *          If the health ever drops to zero or a negative integer, the
 *          adventurer dies.
 *          Every room will contain an integer. It will either be empty (0),
 *          contain a monster (negative), or contain a health pot (positive).
 *          You could create every single possible path, but there is of course
 *          a dynamic programming approach to not go with this route.
 *
 */


// Time Complexity:
// Auxiliary Space Complexity:

const escape = (dungeon) => {

  };
  
  