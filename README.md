# Code Assignment Challenge

Imagine that you're the captain of a pirate ship. Your mission is to visit nearby islands and plunder them before you run out of supplies. You've been provided with a map of the nearby islands to plan what route you will take to collect the largest loot possible in the time provided.

An example treasure map looks like the following:

```
=3,3,4  
s.1  
.w.  
..6  
```

The first line in a map will always begin with an `=`. It marks the beginning of a map. After the beginning mark comes the number of rows, the number of columns, and the number of moves you are allowed to make.

The following lines represent a grid consisting of various characters with the following meanings:

| character | meaning
|:-:|:--|
| s | Your start position |
| . | Empty water |
| w | A whirlpool. You cannot pass through a whirlpool. |
| 1-9 | Gold, in varying amounts. You'll score points when you plunder (visit) these up. |

Your solution for a map should be a string containing the steps you should take to score the maximum number of points (the most gold). It should be in the form of a string using the characters `l` (left), `r` (right), `u` (up) , and `d` (down). You can only move in these directions (you can't move diagonally) and you can only plunder a tile (i.e. collect gold) once. You can step over the same tile multiple times.

An example solution to the map above could be:

```
rrdd
```

This would score you 7 points.

## Your Task

Write a program that takes a file as input that contains many maps (one after another) and outputs the solution for each map. Note that if you provide a solution that sails you off of the map, into a whirlpool, or uses more than the allowed number of moves, you will receive a zero for that map (and too many of these will automatically disqualify you - it's best never to give "illegal" solutions). Note, however, that you may use fewer than the allowed number of moves with no penalty.

To test your program, you can run it against the example test file we've provided:

```
=3,3,4
s.1
.w.
..6
=3,3,2
ws.
2.3
.6.
```

With the correct output being:
```
rrdd
dd
```

To help you get started we've provided the file (`index.ts`) that reads the input, calls the function to find the solution for an individual map, and prints it out to the console.

You simply have to implement the function in `src/solution.ts` that determines the right steps to take.

## Getting started

1. Run `npm install` 
1. Run `npm run start`