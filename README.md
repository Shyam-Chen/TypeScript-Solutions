# TypeScript Solutions

🐳 [LeetCode of algorithms](https://leetcode.com/problemset/algorithms/) with JavaScript solutions written in TypeScript.

## Usage

1. Clone this project

```sh
$ git clone https://github.com/Shyam-Chen/TypeScript-Solutions
$ cd TypeScript-Solutions
```

2. Install dependencies

```sh
$ pnpm install
```

3. Run tests

```sh
$ pnpm test

# run a specific test file
$ pnpm test <FILE_NAME>
# e.g.
$ pnpm test twoSum.spec.ts
```

## Directory Structure

```ts
.
├── src
│   ├── page-<NUM> -> set the table to display 100 rows per page
│   │   └── <TITLE>
│   │       ├── <NAME>.spec.ts
│   │       └── <NAME>.ts
│   └── utils
├── .editorconfig
├── .gitignore
├── biome.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## LeetCode 75 (Basic)

Ace Coding Interview with 75 Qs

- 75 Essential & Trending Problems
- Must-do problem list for interview prep
- Best for 1~3 month of prep time

<details>
  <summary>Problems</summary>

| Array / String                                 |                  |        |
| ---------------------------------------------- | ---------------- | ------ |
| 1768. Merge Strings Alternately                | [Solution][1768] | Easy   |
| 1071. Greatest Common Divisor of Strings       | [Solution][1071] | Easy   |
| 1431. Kids With the Greatest Number of Candies | Solution         | Easy   |
| 605. Can Place Flowers                         | Solution         | Easy   |
| 345. Reverse Vowels of a String                | Solution         | Easy   |
| 151. Reverse Words in a String                 | Solution         | Medium |
| 238. Product of Array Except Self              | Solution         | Medium |
| 334. Increasing Triplet Subsequence            | Solution         | Medium |
| 443. String Compression                        | Solution         | Medium |

[1768]: ./src/page-17/1768.%20Merge%20Strings%20Alternately/merge-alternately.ts
[1071]: ./src/page-11/1071.%20Greatest%20Common%20Divisor%20of%20Strings/gcdOfStrings.ts

| Two Pointers                    |                 |        |
| ------------------------------- | --------------- | ------ |
| 283. Move Zeroes                | [Solution][283] | Easy   |
| 392. Is Subsequence             | Solution        | Easy   |
| 11. Container With Most Water   | Solution        | Medium |
| 1679. Max Number of K-Sum Pairs | Solution        | Medium |

[283]: ./src/page-3/283.%20Move%20Zeroes/move-zeroes.ts

| Sliding Window                                                |          |        |
| ------------------------------------------------------------- | -------- | ------ |
| 643. Maximum Average Subarray I                               | Solution | Easy   |
| 1456. Maximum Number of Vowels in a Substring of Given Length | Solution | Medium |
| 1004. Max Consecutive Ones III                                | Solution | Medium |
| 1493. Longest Subarray of 1's After Deleting One Element      | Solution | Medium |

| Prefix Sum                      |          |      |
| ------------------------------- | -------- | ---- |
| 1732. Find the Highest Altitude | Solution | Easy |
| 724. Find Pivot Index           | Solution | Easy |

| Hash Map / Set                           |          |        |
| ---------------------------------------- | -------- | ------ |
| 2215. Find the Difference of Two Arrays  | Solution | Easy   |
| 1207. Unique Number of Occurrences       | Solution | Easy   |
| 1657. Determine if Two Strings Are Close | Solution | Medium |
| 2352. Equal Row and Column Pairs         | Solution | Medium |

| Stack                              |          |        |
| ---------------------------------- | -------- | ------ |
| 2390. Removing Stars From a String | Solution | Medium |
| 735. Asteroid Collision            | Solution | Medium |
| 394. Decode String                 | Solution | Medium |

| Queue                       |          |        |
| --------------------------- | -------- | ------ |
| 933. Number of Recent Calls | Solution | Easy   |
| 649. Dota2 Senate           | Solution | Medium |

| Linked List                                   |                 |        |
| --------------------------------------------- | --------------- | ------ |
| 2095. Delete the Middle Node of a Linked List | Solution        | Medium |
| 328. Odd Even Linked List                     | Solution        | Medium |
| 206. Reverse Linked List                      | [Solution][206] | Easy   |
| 2130. Maximum Twin Sum of a Linked List       | Solution        | Medium |

[206]: ./src//page-2/206.%20Reverse%20Linked%20List/reverse-list.ts

| Binary Tree - DFS                            |                 |        |
| -------------------------------------------- | --------------- | ------ |
| 104. Maximum Depth of Binary Tree            | [Solution][104] | Easy   |
| 872. Leaf-Similar Trees                      | Solution        | Easy   |
| 1448. Count Good Nodes in Binary Tree        | Solution        | Medium |
| 437. Path Sum III                            | Solution        | Medium |
| 1372. Longest ZigZag Path in a Binary Tree   | Solution        | Medium |
| 236. Lowest Common Ancestor of a Binary Tree | Solution        | Medium |

[104]: ./src//page-2/104.%20Maximum%20Depth%20of%20Binary%20Tree/max-depth.ts

| Binary Tree - BFS                        |          |        |
| ---------------------------------------- | -------- | ------ |
| 199. Binary Tree Right Side View         | Solution | Medium |
| 1161. Maximum Level Sum of a Binary Tree | Solution | Medium |

| Binary Search Tree                  |          |        |
| ----------------------------------- | -------- | ------ |
| 700. Search in a Binary Search Tree | Solution | Easy   |
| 450. Delete Node in a BST           | Solution | Medium |

| Graphs - DFS                                                 |          |        |
| ------------------------------------------------------------ | -------- | ------ |
| 841. Keys and Rooms                                          | Solution | Medium |
| 547. Number of Provinces                                     | Solution | Medium |
| 1466. Reorder Routes to Make All Paths Lead to the City Zero | Solution | Medium |
| 399. Evaluate Division                                       | Solution | Medium |

| Graphs - BFS                             |          |        |
| ---------------------------------------- | -------- | ------ |
| 1926. Nearest Exit from Entrance in Maze | Solution | Medium |
| 994. Rotting Oranges                     | Solution | Medium |

| Heap / Priority Queue                 |          |        |
| ------------------------------------- | -------- | ------ |
| 215. Kth Largest Element in an Array  | Solution | Medium |
| 2336. Smallest Number in Infinite Set | Solution | Medium |
| 2542. Maximum Subsequence Score       | Solution | Medium |
| 2462. Total Cost to Hire K Workers    | Solution | Medium |

| Binary Search                                |          |        |
| -------------------------------------------- | -------- | ------ |
| 374. Guess Number Higher or Lower            | Solution | Easy   |
| 2300. Successful Pairs of Spells and Potions | Solution | Medium |
| 162. Find Peak Element                       | Solution | Medium |
| 875. Koko Eating Bananas                     | Solution | Medium |

| Backtracking                              |          |        |
| ----------------------------------------- | -------- | ------ |
| 17. Letter Combinations of a Phone Number | Solution | Medium |
| 216. Combination Sum III                  | Solution | Medium |

| DP - 1D                        |          |        |
| ------------------------------ | -------- | ------ |
| 1137. N-th Tribonacci Number   | Solution | Easy   |
| 746. Min Cost Climbing Stairs  | Solution | Easy   |
| 198. House Robber              | Solution | Medium |
| 790. Domino and Tromino Tiling | Solution | Medium |

| DP - Multidimensional                                     |          |        |
| --------------------------------------------------------- | -------- | ------ |
| 62. Unique Paths                                          | Solution | Medium |
| 1143. Longest Common Subsequence                          | Solution | Medium |
| 714. Best Time to Buy and Sell Stock with Transaction Fee | Solution | Medium |
| 72. Edit Distance                                         | Solution | Medium |

| Bit Manipulation                              |                 |        |
| --------------------------------------------- | --------------- | ------ |
| 338. Counting Bits                            | [Solution][338] | Easy   |
| 136. Single Number                            | [Solution][136] | Easy   |
| 1318. Minimum Flips to Make a OR b Equal to c | Solution        | Medium |

[338]: ./src/page-4/338.%20Counting%20Bits/count-bits.ts
[136]: ./src/page-2/136.%20Single%20Number/single-number.ts

| Trie                              |          |        |
| --------------------------------- | -------- | ------ |
| 208. Implement Trie (Prefix Tree) | Solution | Medium |
| 1268. Search Suggestions System   | Solution | Medium |

| Intervals                                       |          |        |
| ----------------------------------------------- | -------- | ------ |
| 435. Non-overlapping Intervals                  | Solution | Medium |
| 452. Minimum Number of Arrows to Burst Balloons | Solution | Medium |

| Monotonic Stack         |          |        |
| ----------------------- | -------- | ------ |
| 739. Daily Temperatures | Solution | Medium |
| 901. Online Stock Span  | Solution | Medium |

</details>

## Top Interview 150 (Advanced)

Must-do List for Interview Prep

- 150 Original & Classic Questions
- Covers comprehensive interview topics
- Best for 3+ months of prep time
- Problems support high-quality editorials

<details>
  <summary>Problems</summary>

| Array / String                                         |                 |        |
| ------------------------------------------------------ | --------------- | ------ |
| 88. Merge Sorted Array                                 | [Solution][88]  | Easy   |
| 27. Remove Element                                     | [Solution][27]  | Easy   |
| 26. Remove Duplicates from Sorted Array                | [Solution][26]  | Easy   |
| 80. Remove Duplicates from Sorted Array II             | Solution        | Medium |
| 169. Majority Element                                  | Solution        | Easy   |
| 189. Rotate Array                                      | [Solution][189] | Medium |
| 121. Best Time to Buy and Sell Stock                   | Solution        | Easy   |
| 122. Best Time to Buy and Sell Stock II                | Solution        | Medium |
| 55. Jump Game                                          | Solution        | Medium |
| 45. Jump Game II                                       | Solution        | Medium |
| 274. H-Index                                           | Solution        | Medium |
| 380. Insert Delete GetRandom O(1)                      | Solution        | Medium |
| 238. Product of Array Except Self                      | Solution        | Medium |
| 134. Gas Station                                       | Solution        | Medium |
| 135. Candy                                             | Solution        | Hard   |
| 42. Trapping Rain Water                                | Solution        | Hard   |
| 13. Roman to Integer                                   | [Solution][13]  | Easy   |
| 12. Integer to Roman                                   | Solution        | Medium |
| 58. Length of Last Word                                | [Solution][58]  | Easy   |
| 14. Longest Common Prefix                              | [Solution][14]  | Easy   |
| 151. Reverse Words in a String                         | Solution        | Medium |
| 6. Zigzag Conversion                                   | Solution        | Medium |
| 28. Find the Index of the First Occurrence in a String | [Solution][28]  | Easy   |
| 68. Text Justification                                 | [Solution][68]  | Hard   |

[88]: ./src/page-1//88.%20Merge%20Sorted%20Array/merge.ts
[27]: ./src/page-1/27.%20Remove%20Element/remove-element.ts
[26]: ./src/page-1/26.%20Remove%20Duplicates%20from%20Sorted%20Array/remove-duplicates.ts
[189]: ./src/page-2/189.%20Rotate%20Array/rotate.ts
[13]: ./src/page-1/13.%20Roman%20to%20Integer/roman-to-int.ts
[58]: ./src/page-1/58.%20Length%20of%20Last%20Word/length-of-last-word.ts
[14]: ./src/page-1/14.%20Longest%20Common%20Prefix/longest-common-prefix.ts
[28]: ./src/page-1/28.%20Implement%20strStr()/str-str.ts
[68]: ./src/page-1/68.%20Text%20Justification/fullJustify.ts

</details>
