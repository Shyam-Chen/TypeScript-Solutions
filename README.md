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
$ pnpm test twoSum.test.ts
```

## Beginning - Algorithms

解題前應該學會的思路與技巧

1. [陣列 (Array)](./algorithms/1.array/README.md)
2. [鏈結串列 (Linked List)](./algorithms/2.linked-list/README.md)
3. [堆疊 (Stack)](./algorithms/3.stack/README.md)
4. [佇列 (Queue)](./algorithms/4.queue/README.md)
5. [雜湊表 (Hash Table)](./algorithms/5.hash-table/README.md)
6. [樹 (Tree)](./algorithms/6.tree/README.md)
7. [堆積 (Heap)](./algorithms/7.heap/README.md)
8. [圖 (Graph)](./algorithms/8.graph/README.md)
9. [字典樹 (Trie)](./algorithms/9.trie/README.md)
10. [排序 (Sorting)](./algorithms/10.sorting/README.md)
11. [搜尋 (Searching)](./algorithms/11.searching/README.md)
12. [分治 (Divide and Conquer)](./algorithms/12.divide-and-conquer/README.md)
13. [回溯 (Backtracking)](./algorithms/13.backtracking/README.md)
14. [動態規劃 (Dynamic Programming)](./algorithms/14.dynamic-programming/README.md)
15. [貪婪 (Greedy)](./algorithms/15.greedy/README.md)
16. [位元操作 (Bit Manipulation)](./algorithms/16.bit-manipulation/README.md)

## Basic - LeetCode 75

Ace Coding Interview with 75 Qs

- 75 Essential & Trending Problems
- Must-do problem list for interview prep
- Best for 1~3 month of prep time

Problems:

| Array / String                                 |                  |        |                          |
| ---------------------------------------------- | ---------------- | ------ | ------------------------ |
| 1768. Merge Strings Alternately                | [Solution][1768] | Easy   | [詳解][1768-explanation] |
| 1071. Greatest Common Divisor of Strings       | [Solution][1071] | Easy   | 詳解                     |
| 1431. Kids With the Greatest Number of Candies | [Solution][1431] | Easy   | 詳解                     |
| 605. Can Place Flowers                         | [Solution][605]  | Easy   | 詳解                     |
| 345. Reverse Vowels of a String                | [Solution][345]  | Easy   | 詳解                     |
| 151. Reverse Words in a String                 | [Solution][151]  | Medium | 詳解                     |
| 238. Product of Array Except Self              | [Solution][238]  | Medium | 詳解                     |
| 334. Increasing Triplet Subsequence            | [Solution][334]  | Medium | 詳解                     |
| 443. String Compression                        | [Solution][443]  | Medium | 詳解                     |

[1768]: ./src/page-17/1768.%20Merge%20Strings%20Alternately/mergeAlternately.ts
[1768-explanation]: ./src/page-17/1768.%20Merge%20Strings%20Alternately/README.md
[1071]: ./src/page-11/1071.%20Greatest%20Common%20Divisor%20of%20Strings/gcdOfStrings.ts
[1431]: ./src/page-14/1431.%20Kids%20With%20the%20Greatest%20Number%20of%20Candies/kidsWithCandies.ts
[605]: ./src/page-6/605.%20Can%20Place%20Flowers/canPlaceFlowers.ts
[345]: ./src/page-4/345.%20Reverse%20Vowels%20of%20a%20String/reverseVowels.ts
[151]: ./src/page-2/151.%20Reverse%20Words%20in%20a%20String/reverseWords.ts
[238]: ./src/page-3/238.%20Product%20of%20Array%20Except%20Self/productExceptSelf.ts
[334]: ./src/page-4/334.%20Increasing%20Triplet%20Subsequence/increasingTriplet.ts
[443]: ./src/page-5/443.%20String%20Compression/compress.ts

| Two Pointers                    |                  |        |      |
| ------------------------------- | ---------------- | ------ | ---- |
| 283. Move Zeroes                | [Solution][283]  | Easy   | 詳解 |
| 392. Is Subsequence             | [Solution][392]  | Easy   | 詳解 |
| 11. Container With Most Water   | [Solution][11]   | Medium | 詳解 |
| 1679. Max Number of K-Sum Pairs | [Solution][1679] | Medium | 詳解 |

[283]: ./src/page-3/283.%20Move%20Zeroes/moveZeroes.ts
[392]: ./src/page-4/392.%20Is%20Subsequence/isSubsequence.ts
[11]: ./src/page-1/11.%20Container%20With%20Most%20Water/maxArea.ts
[1679]: ./src/page-16/1679.%20Max%20Number%20of%20K-Sum%20Pairs/maxOperations.ts

| Sliding Window                                                |                  |        |      |
| ------------------------------------------------------------- | ---------------- | ------ | ---- |
| 643. Maximum Average Subarray I                               | [Solution][643]  | Easy   | 詳解 |
| 1456. Maximum Number of Vowels in a Substring of Given Length | [Solution][1456] | Medium | 詳解 |
| 1004. Max Consecutive Ones III                                | [Solution][1004] | Medium | 詳解 |
| 1493. Longest Subarray of 1's After Deleting One Element      | [Solution][1493] | Medium | 詳解 |

[643]: ./src/page-6/643.%20Maximum%20Average%20Subarray%20I/findMaxAverage.ts
[1456]: ./src/page-14/1456.%20Maximum%20Number%20of%20Vowels%20in%20a%20Substring%20of%20Given%20Length/maxVowels.ts
[1004]: ./src/page-10/1004.%20Max%20Consecutive%20Ones%20III/longestOnes.ts
[1493]: ./src/page-14/1493.%20Longest%20Subarray%20of%201's%20After%20Deleting%20One%20Element/longestSubarray.ts

| Prefix Sum                      |                  |      |      |
| ------------------------------- | ---------------- | ---- | ---- |
| 1732. Find the Highest Altitude | [Solution][1732] | Easy | 詳解 |
| 724. Find Pivot Index           | [Solution][724]  | Easy | 詳解 |

[1732]: ./src/page-16/1732.%20Find%20the%20Highest%20Altitude/largestAltitude.ts
[724]: ./src/page-7/724.%20Find%20Pivot%20Index/pivotIndex.ts

| Hash Map / Set                           |                  |        |      |
| ---------------------------------------- | ---------------- | ------ | ---- |
| 2215. Find the Difference of Two Arrays  | [Solution][2215] | Easy   | 詳解 |
| 1207. Unique Number of Occurrences       | [Solution][1207] | Easy   | 詳解 |
| 1657. Determine if Two Strings Are Close | [Solution][1657] | Medium | 詳解 |
| 2352. Equal Row and Column Pairs         | [Solution][2352] | Medium | 詳解 |

[2215]: ./src/page-21/2215.%20Find%20the%20Difference%20of%20Two%20Arrays/findDifference.ts
[1207]: ./src/page-12/1207.%20Unique%20Number%20of%20Occurrences/uniqueOccurrences.ts
[1657]: ./src/page-16/1657.%20Determine%20if%20Two%20Strings%20Are%20Close/closeStrings.ts
[2352]: ./src/page-22/2352.%20Equal%20Row%20and%20Column%20Pairs/equalPairs.ts

| Stack                              |                  |        |      |
| ---------------------------------- | ---------------- | ------ | ---- |
| 2390. Removing Stars From a String | [Solution][2390] | Medium | 詳解 |
| 735. Asteroid Collision            | [Solution][735]  | Medium | 詳解 |
| 394. Decode String                 | [Solution][394]  | Medium | 詳解 |

[2390]: ./src/page-22/2390.%20Removing%20Stars%20From%20a%20String/removeStars.ts
[735]: ./src/page-7/735.%20Asteroid%20Collision/asteroidCollision.ts
[394]: ./src/page-4/394.%20Decode%20String/decodeString.ts

| Queue                       |                 |        |      |
| --------------------------- | --------------- | ------ | ---- |
| 933. Number of Recent Calls | [Solution][933] | Easy   | 詳解 |
| 649. Dota2 Senate           | [Solution][649] | Medium | 詳解 |

[933]: ./src/page-9/933.%20Number%20of%20Recent%20Calls/RecentCounter.ts
[649]: ./src/page-6/649.%20Dota2%20Senate/predictPartyVictory.ts

| Linked List                                   |                  |        |      |
| --------------------------------------------- | ---------------- | ------ | ---- |
| 2095. Delete the Middle Node of a Linked List | [Solution][2095] | Medium | 詳解 |
| 328. Odd Even Linked List                     | [Solution][328]  | Medium | 詳解 |
| 206. Reverse Linked List                      | [Solution][206]  | Easy   | 詳解 |
| 2130. Maximum Twin Sum of a Linked List       | [Solution][2130] | Medium | 詳解 |

[2095]: ./src/page-19/2095.%20Delete%20the%20Middle%20Node%20of%20a%20Linked%20List/deleteMiddle.ts
[328]: ./src/page-4/328.%20Odd%20Even%20Linked%20List/oddEvenList.ts
[206]: ./src/page-2/206.%20Reverse%20Linked%20List/reverseList.ts
[2130]: ./src/page-20/2130.%20Maximum%20Twin%20Sum%20of%20a%20Linked%20List/pairSum.ts

| Binary Tree - DFS                            |                  |        |      |
| -------------------------------------------- | ---------------- | ------ | ---- |
| 104. Maximum Depth of Binary Tree            | [Solution][104]  | Easy   | 詳解 |
| 872. Leaf-Similar Trees                      | [Solution][872]  | Easy   | 詳解 |
| 1448. Count Good Nodes in Binary Tree        | [Solution][1448] | Medium | 詳解 |
| 437. Path Sum III                            | [Solution][437]  | Medium | 詳解 |
| 1372. Longest ZigZag Path in a Binary Tree   | [Solution][1372] | Medium | 詳解 |
| 236. Lowest Common Ancestor of a Binary Tree | [Solution][236]  | Medium | 詳解 |

[104]: ./src/page-2/104.%20Maximum%20Depth%20of%20Binary%20Tree/maxDepth.ts
[872]: ./src/page-9/872.%20Leaf-Similar%20Trees/leafSimilar.ts
[1448]: ./src/page-14/1448.%20Count%20Good%20Nodes%20in%20Binary%20Tree/goodNodes.ts
[437]: ./src/page-5/437.%20Path%20Sum%20III/pathSum.ts
[1372]: ./src/page-13/1372.%20Longest%20ZigZag%20Path%20in%20a%20Binary%20Tree/longestZigZag.ts
[236]: ./src/page-3/236.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/lowestCommonAncestor.ts

| Binary Tree - BFS                        |                  |        |      |
| ---------------------------------------- | ---------------- | ------ | ---- |
| 199. Binary Tree Right Side View         | [Solution][199]  | Medium | 詳解 |
| 1161. Maximum Level Sum of a Binary Tree | [Solution][1161] | Medium | 詳解 |

[199]: ./src/page-2/199.%20Binary%20Tree%20Right%20Side%20View/rightSideView.ts
[1161]: ./src/page-11/1161.%20Maximum%20Level%20Sum%20of%20a%20Binary%20Tree/maxLevelSum.ts

| Binary Search Tree                  |                 |        |      |
| ----------------------------------- | --------------- | ------ | ---- |
| 700. Search in a Binary Search Tree | [Solution][700] | Easy   | 詳解 |
| 450. Delete Node in a BST           | [Solution][450] | Medium | 詳解 |

[700]: ./src/page-7/700.%20Search%20in%20a%20Binary%20Search%20Tree/searchBST.ts
[450]: ./src/page-5/450.%20Delete%20Node%20in%20a%20BST/deleteNode.ts

| Graphs - DFS                                                 |                  |        |      |
| ------------------------------------------------------------ | ---------------- | ------ | ---- |
| 841. Keys and Rooms                                          | [Solution][841]  | Medium | 詳解 |
| 547. Number of Provinces                                     | [Solution][547]  | Medium | 詳解 |
| 1466. Reorder Routes to Make All Paths Lead to the City Zero | [Solution][1466] | Medium | 詳解 |
| 399. Evaluate Division                                       | [Solution][399]  | Medium | 詳解 |

[841]: ./src/page-8/841.%20Keys%20and%20Rooms/canVisitAllRooms.ts
[547]: ./src/page-6/547.%20Number%20of%20Provinces/findCircleNum.ts
[1466]: ./src/page-14/1466.%20Reorder%20Routes%20to%20Make%20All%20Paths%20Lead%20to%20the%20City%20Zero/minReorder.ts
[399]: ./src/page-4/399.%20Evaluate%20Division/calcEquation.ts

| Graphs - BFS                             |                  |        |      |
| ---------------------------------------- | ---------------- | ------ | ---- |
| 1926. Nearest Exit from Entrance in Maze | [Solution][1926] | Medium | 詳解 |
| 994. Rotting Oranges                     | [Solution][994]  | Medium | 詳解 |

[1926]: ./src/page-18/1926.%20Nearest%20Exit%20from%20Entrance%20in%20Maze/nearestExit.ts
[994]: ./src/page-10/994.%20Rotting%20Oranges/orangesRotting.ts

| Heap / Priority Queue                 |                  |        |      |
| ------------------------------------- | ---------------- | ------ | ---- |
| 215. Kth Largest Element in an Array  | [Solution][215]  | Medium | 詳解 |
| 2336. Smallest Number in Infinite Set | [Solution][2336] | Medium | 詳解 |
| 2542. Maximum Subsequence Score       | [Solution][2542] | Medium | 詳解 |
| 2462. Total Cost to Hire K Workers    | [Solution][2462] | Medium | 詳解 |

[215]: ./src/page-2/215.%20Kth%20Largest%20Element%20in%20an%20Array/findKthLargest.ts
[2336]: ./src/page-22/2336.%20Smallest%20Number%20in%20Infinite%20Set/SmallestInfiniteSet.ts
[2542]: ./src/page-24/2542.%20Maximum%20Subsequence%20Score/maxScore.ts
[2462]: ./src/page-23/2462.%20Total%20Cost%20to%20Hire%20K%20Workers/totalCost.ts

| Binary Search                                |                  |        |      |
| -------------------------------------------- | ---------------- | ------ | ---- |
| 374. Guess Number Higher or Lower            | [Solution][374]  | Easy   | 詳解 |
| 2300. Successful Pairs of Spells and Potions | [Solution][2300] | Medium | 詳解 |
| 162. Find Peak Element                       | [Solution][162]  | Medium | 詳解 |
| 875. Koko Eating Bananas                     | [Solution][875]  | Medium | 詳解 |

[374]: ./src/page-4/374.%20Guess%20Number%20Higher%20or%20Lower/guessNumber.ts
[2300]: ./src/page-21/2300.%20Successful%20Pairs%20of%20Spells%20and%20Potions/successfulPairs.ts
[162]: ./src/page-2/162.%20Find%20Peak%20Element/findPeakElement.ts
[875]: ./src/page-9/875.%20Koko%20Eating%20Bananas/minEatingSpeed.ts

| Backtracking                              |                 |        |      |
| ----------------------------------------- | --------------- | ------ | ---- |
| 17. Letter Combinations of a Phone Number | [Solution][17]  | Medium | 詳解 |
| 216. Combination Sum III                  | [Solution][216] | Medium | 詳解 |

[17]: ./src/page-1/17.%20Letter%20Combinations%20of%20a%20Phone%20Number/letterCombinations.ts
[216]: ./src/page-2/216.%20Combination%20Sum%20III/combinationSum3.ts

| DP - 1D                        |                  |        |      |
| ------------------------------ | ---------------- | ------ | ---- |
| 1137. N-th Tribonacci Number   | [Solution][1137] | Easy   | 詳解 |
| 746. Min Cost Climbing Stairs  | [Solution][746]  | Easy   | 詳解 |
| 198. House Robber              | [Solution][198]  | Medium | 詳解 |
| 790. Domino and Tromino Tiling | [Solution][790]  | Medium | 詳解 |

[1137]: ./src/page-11/1137.%20N-th%20Tribonacci%20Number/tribonacci.ts
[746]: ./src/page-7/746.%20Min%20Cost%20Climbing%20Stairs/minCostClimbingStairs.ts
[198]: ./src/page-2/198.%20House%20Robber/rob.ts
[790]: ./src/page-8/790.%20Domino%20and%20Tromino%20Tiling/numTilings.ts

| DP - Multidimensional                                     |                  |        |                         |
| --------------------------------------------------------- | ---------------- | ------ | ----------------------- |
| 62. Unique Paths                                          | [Solution][62]   | Medium | 詳解                    |
| 1143. Longest Common Subsequence                          | [Solution][1143] | Medium | 詳解                    |
| 714. Best Time to Buy and Sell Stock with Transaction Fee | [Solution][714]  | Medium | [詳解][714-explanation] |
| 72. Edit Distance                                         | [Solution][72]   | Medium | [詳解][72-explanation]  |

[62]: ./src/page-1/62.%20Unique%20Paths/uniquePaths.ts
[1143]: ./src/page-11/1143.%20Longest%20Common%20Subsequence/longestCommonSubsequence.ts
[714]: ./src/page-7/714.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20with%20Transaction%20Fee/maxProfit.ts
[714-explanation]: ./src/page-7/714.%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20with%20Transaction%20Fee/README.md
[72]: ./src/page-1/72.%20Edit%20Distance/minDistance.ts
[72-explanation]: ./src/page-1/72.%20Edit%20Distance/README.md

| Bit Manipulation                              |                  |        |      |
| --------------------------------------------- | ---------------- | ------ | ---- |
| 338. Counting Bits                            | [Solution][338]  | Easy   | 詳解 |
| 136. Single Number                            | [Solution][136]  | Easy   | 詳解 |
| 1318. Minimum Flips to Make a OR b Equal to c | [Solution][1318] | Medium | 詳解 |

[338]: ./src/page-4/338.%20Counting%20Bits/countBits.ts
[136]: ./src/page-2/136.%20Single%20Number/singleNumber.ts
[1318]: ./src/page-13/1318.%20Minimum%20Flips%20to%20Make%20a%20OR%20b%20Equal%20to%20c/minFlips.ts

| Trie                              |                  |        |      |
| --------------------------------- | ---------------- | ------ | ---- |
| 208. Implement Trie (Prefix Tree) | [Solution][208]  | Medium | 詳解 |
| 1268. Search Suggestions System   | [Solution][1268] | Medium | 詳解 |

[208]: ./src/page-2/208.%20Implement%20Trie%20(Prefix%20Tree)/Trie.ts
[1268]: ./src/page-12/1268.%20Search%20Suggestions%20System/suggestedProducts.ts

| Intervals                                       |                 |        |      |
| ----------------------------------------------- | --------------- | ------ | ---- |
| 435. Non-overlapping Intervals                  | [Solution][435] | Medium | 詳解 |
| 452. Minimum Number of Arrows to Burst Balloons | [Solution][452] | Medium | 詳解 |

[435]: ./src/page-5/435.%20Non-overlapping%20Intervals/eraseOverlapIntervals.ts
[452]: ./src/page-5/452.%20Minimum%20Number%20of%20Arrows%20to%20Burst%20Balloons/findMinArrowShots.ts

| Monotonic Stack         |                 |        |      |
| ----------------------- | --------------- | ------ | ---- |
| 739. Daily Temperatures | [Solution][739] | Medium | 詳解 |
| 901. Online Stock Span  | [Solution][901] | Medium | 詳解 |

[739]: ./src/page-7/739.%20Daily%20Temperatures/dailyTemperatures.ts
[901]: ./src/page-9/901.%20Online%20Stock%20Span/StockSpanner.ts

## Advanced - Top Interview 150

Must-do List for Interview Prep

- 150 Original & Classic Questions
- Covers comprehensive interview topics
- Best for 3+ months of prep time
- Problems support high-quality editorials

Problems:

| Array / String                                         |                 |        |      |
| ------------------------------------------------------ | --------------- | ------ | ---- |
| 88. Merge Sorted Array                                 | [Solution][88]  | Easy   | 詳解 |
| 27. Remove Element                                     | [Solution][27]  | Easy   | 詳解 |
| 26. Remove Duplicates from Sorted Array                | [Solution][26]  | Easy   | 詳解 |
| 80. Remove Duplicates from Sorted Array II             | Solution        | Medium | 詳解 |
| 169. Majority Element                                  | Solution        | Easy   | 詳解 |
| 189. Rotate Array                                      | [Solution][189] | Medium | 詳解 |
| 121. Best Time to Buy and Sell Stock                   | Solution        | Easy   | 詳解 |
| 122. Best Time to Buy and Sell Stock II                | Solution        | Medium | 詳解 |
| 55. Jump Game                                          | Solution        | Medium | 詳解 |
| 45. Jump Game II                                       | Solution        | Medium | 詳解 |
| 274. H-Index                                           | Solution        | Medium | 詳解 |
| 380. Insert Delete GetRandom O(1)                      | Solution        | Medium | 詳解 |
| 238. Product of Array Except Self                      | [Solution][238] | Medium | 詳解 |
| 134. Gas Station                                       | Solution        | Medium | 詳解 |
| 135. Candy                                             | Solution        | Hard   | 詳解 |
| 42. Trapping Rain Water                                | Solution        | Hard   | 詳解 |
| 13. Roman to Integer                                   | [Solution][13]  | Easy   | 詳解 |
| 12. Integer to Roman                                   | Solution        | Medium | 詳解 |
| 58. Length of Last Word                                | [Solution][58]  | Easy   | 詳解 |
| 14. Longest Common Prefix                              | [Solution][14]  | Easy   | 詳解 |
| 151. Reverse Words in a String                         | [Solution][151] | Medium | 詳解 |
| 6. Zigzag Conversion                                   | [Solution][6]   | Medium | 詳解 |
| 28. Find the Index of the First Occurrence in a String | [Solution][28]  | Easy   | 詳解 |
| 68. Text Justification                                 | [Solution][68]  | Hard   | 詳解 |

[88]: ./src/page-1//88.%20Merge%20Sorted%20Array/merge.ts
[27]: ./src/page-1/27.%20Remove%20Element/removeElement.ts
[26]: ./src/page-1/26.%20Remove%20Duplicates%20from%20Sorted%20Array/removeDuplicates.ts
[189]: ./src/page-2/189.%20Rotate%20Array/rotate.ts
[238]: ./src/page-3/238.%20Product%20of%20Array%20Except%20Self/productExceptSelf.ts
[13]: ./src/page-1/13.%20Roman%20to%20Integer/romanToInt.ts
[58]: ./src/page-1/58.%20Length%20of%20Last%20Word/lengthOfLastWord.ts
[14]: ./src/page-1/14.%20Longest%20Common%20Prefix/longestCommonPrefix.ts
[151]: ./src/page-2/151.%20Reverse%20Words%20in%20a%20String/reverseWords.ts
[6]: ./src/page-1/6.%20Zigzag%20Conversion/convert.ts
[28]: ./src/page-1/28.%20Find%20the%20Index%20of%20the%20First%20Occurrence%20in%20a%20String/strStr.ts
[68]: ./src/page-1/68.%20Text%20Justification/fullJustify.ts

| Two Pointers                            |          |        |      |
| --------------------------------------- | -------- | ------ | ---- |
| 125. Valid Palindrome                   | Solution | Easy   | 詳解 |
| 392. Is Subsequence                     | Solution | Easy   | 詳解 |
| 167. Two Sum II - Input Array Is Sorted | Solution | Medium | 詳解 |
| 11. Container With Most Water           | Solution | Medium | 詳解 |
| 15. 3Sum                                | Solution | Medium | 詳解 |

| Sliding Window                                    |               |        |      |
| ------------------------------------------------- | ------------- | ------ | ---- |
| 209. Minimum Size Subarray Sum                    | Solution      | Medium | 詳解 |
| 3. Longest Substring Without Repeating Characters | [Solution][3] | Medium | 詳解 |
| 30. Substring with Concatenation of All Words     | Solution      | Hard   | 詳解 |
| 76. Minimum Window Substring                      | Solution      | Hard   | 詳解 |

[3]: ./src/page-1/3.%20Longest%20Substring%20Without%20Repeating%20Characters/lengthOfLongestSubstring.ts

| Matrix                |          |        |      |
| --------------------- | -------- | ------ | ---- |
| 36. Valid Sudoku      | Solution | Medium | 詳解 |
| 54. Spiral Matrix     | Solution | Medium | 詳解 |
| 48. Rotate Image      | Solution | Medium | 詳解 |
| 73. Set Matrix Zeroes | Solution | Medium | 詳解 |
| 289. Game of Life     | Solution | Medium | 詳解 |

| Hashmap                           |               |        |      |
| --------------------------------- | ------------- | ------ | ---- |
| 383. Ransom Note                  | Solution      | Easy   | 詳解 |
| 205. Isomorphic Strings           | Solution      | Easy   | 詳解 |
| 290. Word Pattern                 | Solution      | Easy   | 詳解 |
| 242. Valid Anagram                | Solution      | Easy   | 詳解 |
| 49. Group Anagrams                | Solution      | Medium | 詳解 |
| 1. Two Sum                        | [Solution][1] | Easy   | 詳解 |
| 202. Happy Number                 | Solution      | Easy   | 詳解 |
| 219. Contains Duplicate II        | Solution      | Easy   | 詳解 |
| 128. Longest Consecutive Sequence | Solution      | Medium | 詳解 |

[1]: ./src/page-1/1.%20Two%20Sum/twoSum.ts

| Intervals                                       |                 |        |      |
| ----------------------------------------------- | --------------- | ------ | ---- |
| 228. Summary Ranges                             | Solution        | Easy   | 詳解 |
| 56. Merge Intervals                             | Solution        | Medium | 詳解 |
| 57. Insert Interval                             | Solution        | Medium | 詳解 |
| 452. Minimum Number of Arrows to Burst Balloons | [Solution][452] | Medium | 詳解 |

[452]: ./src/page-5/452.%20Minimum%20Number%20of%20Arrows%20to%20Burst%20Balloons/findMinArrowShots.ts

| Stack                                 |                 |        |      |
| ------------------------------------- | --------------- | ------ | ---- |
| 20. Valid Parentheses                 | [Solution][20]  | Easy   | 詳解 |
| 71. Simplify Path                     | Solution        | Medium | 詳解 |
| 155. Min Stack                        | [Solution][155] | Medium | 詳解 |
| 150. Evaluate Reverse Polish Notation | Solution        | Medium | 詳解 |
| 224. Basic Calculator                 | Solution        | Hard   | 詳解 |

[20]: ./src/page-1/20.%20Valid%20Parentheses/isValid.ts
[155]: ./src/page-2/155.%20Min%20Stack/MinStack.ts

| Linked List                               |                 |        |      |
| ----------------------------------------- | --------------- | ------ | ---- |
| 141. Linked List Cycle                    | [Solution][141] | Easy   | 詳解 |
| 2. Add Two Numbers                        | [Solution][2]   | Medium | 詳解 |
| 21. Merge Two Sorted Lists                | [Solution][21]  | Easy   | 詳解 |
| 138. Copy List with Random Pointer        | Solution        | Medium | 詳解 |
| 92. Reverse Linked List II                | Solution        | Medium | 詳解 |
| 25. Reverse Nodes in k-Group              | Solution        | Hard   | 詳解 |
| 19. Remove Nth Node From End of List      | Solution        | Medium | 詳解 |
| 82. Remove Duplicates from Sorted List II | Solution        | Medium | 詳解 |
| 61. Rotate List                           | Solution        | Medium | 詳解 |
| 86. Partition List                        | Solution        | Medium | 詳解 |
| 146. LRU Cache                            | Solution        | Medium | 詳解 |

[141]: ./src/page-2/141.%20Linked%20List%20Cycle/hasCycle.ts
[2]: ./src/page-1/2.%20Add%20Two%20Numbers/addTwoNumbers.ts
[21]: ./src/page-1/21.%20Merge%20Two%20Sorted%20Lists/mergeTwoLists.ts

| Binary Tree General                                             |                 |        |      |
| --------------------------------------------------------------- | --------------- | ------ | ---- |
| 104. Maximum Depth of Binary Tree                               | [Solution][104] | Easy   | 詳解 |
| 100. Same Tree                                                  | [Solution][100] | Easy   | 詳解 |
| 226. Invert Binary Tree                                         | Solution        | Easy   | 詳解 |
| 101. Symmetric Tree                                             | [Solution][101] | Easy   | 詳解 |
| 105. Construct Binary Tree from Preorder and Inorder Traversal  | Solution        | Medium | 詳解 |
| 106. Construct Binary Tree from Inorder and Postorder Traversal | Solution        | Medium | 詳解 |
| 117. Populating Next Right Pointers in Each Node II             | Solution        | Medium | 詳解 |
| 114. Flatten Binary Tree to Linked List                         | Solution        | Medium | 詳解 |
| 112. Path Sum                                                   | [Solution][112] | Easy   | 詳解 |
| 129. Sum Root to Leaf Numbers                                   | Solution        | Medium | 詳解 |
| 124. Binary Tree Maximum Path Sum                               | Solution        | Hard   | 詳解 |
| 173. Binary Search Tree Iterator                                | Solution        | Medium | 詳解 |
| 222. Count Complete Tree Nodes                                  | Solution        | Easy   | 詳解 |
| 236. Lowest Common Ancestor of a Binary Tree                    | Solution        | Medium | 詳解 |

[104]: ./src/page-2/104.%20Maximum%20Depth%20of%20Binary%20Tree/maxDepth.ts
[100]: ./src/page-1/100.%20Same%20Tree/isSameTree.ts
[101]: ./src/page-2/101.%20Symmetric%20Tree/isSymmetric.ts
[112]: ./src/page-2/112.%20Path%20Sum/hasPathSum.ts

| Binary Tree BFS                               |          |        |      |
| --------------------------------------------- | -------- | ------ | ---- |
| 199. Binary Tree Right Side View              | Solution | Medium | 詳解 |
| 637. Average of Levels in Binary Tree         | Solution | Easy   | 詳解 |
| 102. Binary Tree Level Order Traversal        | Solution | Medium | 詳解 |
| 103. Binary Tree Zigzag Level Order Traversal | Solution | Medium | 詳解 |

| Binary Search Tree                      |          |        |      |
| --------------------------------------- | -------- | ------ | ---- |
| 530. Minimum Absolute Difference in BST | Solution | Easy   | 詳解 |
| 230. Kth Smallest Element in a BST      | Solution | Medium | 詳解 |
| 98. Validate Binary Search Tree         | Solution | Medium | 詳解 |

| Graph General           |          |        |      |
| ----------------------- | -------- | ------ | ---- |
| 200. Number of Islands  | Solution | Medium | 詳解 |
| 130. Surrounded Regions | Solution | Medium | 詳解 |
| 133. Clone Graph        | Solution | Medium | 詳解 |
| 399. Evaluate Division  | Solution | Medium | 詳解 |
| 207. Course Schedule    | Solution | Medium | 詳解 |
| 210. Course Schedule II | Solution | Medium | 詳解 |

| Graph BFS                     |          |        |      |
| ----------------------------- | -------- | ------ | ---- |
| 909. Snakes and Ladders       | Solution | Medium | 詳解 |
| 433. Minimum Genetic Mutation | Solution | Medium | 詳解 |
| 127. Word Ladder              | Solution | Hard   | 詳解 |

| Trie                                            |                 |        |      |
| ----------------------------------------------- | --------------- | ------ | ---- |
| 208. Implement Trie (Prefix Tree)               | [Solution][208] | Medium | 詳解 |
| 211. Design Add and Search Words Data Structure | Solution        | Medium | 詳解 |
| 212. Word Search II                             | Solution        | Hard   | 詳解 |

[208]: ./src/page-2/208.%20Implement%20Trie%20(Prefix%20Tree)/Trie.ts

| Backtracking                              |                |        |      |
| ----------------------------------------- | -------------- | ------ | ---- |
| 17. Letter Combinations of a Phone Number | [Solution][17] | Medium | 詳解 |
| 77. Combinations                          | Solution       | Medium | 詳解 |
| 46. Permutations                          | [Solution][46] | Medium | 詳解 |
| 39. Combination Sum                       | [Solution][39] | Medium | 詳解 |
| 52. N-Queens II                           | Solution       | Hard   | 詳解 |
| 22. Generate Parentheses                  | Solution       | Medium | 詳解 |
| 79. Word Search                           | Solution       | Medium | 詳解 |

[17]: ./src/page-1/17.%20Letter%20Combinations%20of%20a%20Phone%20Number/letterCombinations.ts
[46]: ./src/page-1/46.%20Permutations/permute.ts
[39]: ./src/page-1/39.%20Combination%20Sum/combinationSum.ts

| Divide & Conquer                                |                 |        |      |
| ----------------------------------------------- | --------------- | ------ | ---- |
| 108. Convert Sorted Array to Binary Search Tree | [Solution][108] | Easy   | 詳解 |
| 148. Sort List                                  | Solution        | Medium | 詳解 |
| 427. Construct Quad Tree                        | Solution        | Medium | 詳解 |
| 23. Merge k Sorted Lists                        | Solution        | Hard   | 詳解 |

[108]: ./src/page-2/108.%20Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/sortedArrayToBST.ts

| Kadane's Algorithm                 |                |        |      |
| ---------------------------------- | -------------- | ------ | ---- |
| 53. Maximum Subarray               | [Solution][53] | Medium | 詳解 |
| 918. Maximum Sum Circular Subarray | Solution       | Medium | 詳解 |

[53]: ./src/page-1/53.%20Maximum%20Subarray/maxSubArray.ts

| Binary Search                                               |                |        |      |
| ----------------------------------------------------------- | -------------- | ------ | ---- |
| 35. Search Insert Position                                  | [Solution][35] | Easy   | 詳解 |
| 74. Search a 2D Matrix                                      | Solution       | Medium | 詳解 |
| 162. Find Peak Element                                      | Solution       | Medium | 詳解 |
| 33. Search in Rotated Sorted Array                          | Solution       | Medium | 詳解 |
| 34. Find First and Last Position of Element in Sorted Array | [Solution][34] | Medium | 詳解 |
| 153. Find Minimum in Rotated Sorted Array                   | Solution       | Medium | 詳解 |
| 4. Median of Two Sorted Arrays                              | [Solution][4]  | Hard   | 詳解 |

[35]: ./src/page-1/35.%20Search%20Insert%20Position/searchInsert.ts
[34]: ./src/page-1/34.%20Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array/searchRange.ts
[4]: ./src/page-1/4.%20Median%20of%20Two%20Sorted%20Arrays/findMedianSortedArrays.ts

| Heap                                 |          |        |      |
| ------------------------------------ | -------- | ------ | ---- |
| 215. Kth Largest Element in an Array | Solution | Medium | 詳解 |
| 502. IPO                             | Solution | Hard   | 詳解 |
| 373. Find K Pairs with Smallest Sums | Solution | Medium | 詳解 |
| 295. Find Median from Data Stream    | Solution | Hard   | 詳解 |

| Bit Manipulation                  |                 |        |      |
| --------------------------------- | --------------- | ------ | ---- |
| 67. Add Binary                    | [Solution][67]  | Easy   | 詳解 |
| 190. Reverse Bits                 | [Solution][190] | Easy   | 詳解 |
| 191. Number of 1 Bits             | [Solution][191] | Easy   | 詳解 |
| 136. Single Number                | [Solution][136] | Easy   | 詳解 |
| 137. Single Number II             | Solution        | Medium | 詳解 |
| 201. Bitwise AND of Numbers Range | Solution        | Medium | 詳解 |

[67]: ./src/page-1/67.%20Add%20Binary/addBinary.ts
[190]: ./src/page-2/190.%20Reverse%20Bits/reverseBits.ts
[191]: ./src/page-2/191.%20Number%20of%201%20Bits/hammingWeight.ts
[136]: ./src/page-2/136.%20Single%20Number/singleNumber.ts

| Math                           |                |        |      |
| ------------------------------ | -------------- | ------ | ---- |
| 9. Palindrome Number           | [Solution][9]  | Easy   | 詳解 |
| 66. Plus One                   | [Solution][66] | Easy   | 詳解 |
| 172. Factorial Trailing Zeroes | Solution       | Medium | 詳解 |
| 69. Sqrt(x)                    | [Solution][69] | Easy   | 詳解 |
| 50. Pow(x, n)                  | [Solution][50] | Medium | 詳解 |
| 149. Max Points on a Line      | Solution       | Hard   | 詳解 |

[9]: ./src/page-1/9.%20Palindrome%20Number/isPalindrome.ts
[66]: ./src/page-1/66.%20Plus%20One/plusOne.ts
[69]: ./src/page-1/69.%20Sqrt(x)/mySqrt.ts
[50]: ./src/page-1/50.%20Pow(x,%20n)/myPow.ts

| 1D DP                               |                 |        |      |
| ----------------------------------- | --------------- | ------ | ---- |
| 70. Climbing Stairs                 | [Solution][70]  | Easy   | 詳解 |
| 198. House Robber                   | [Solution][198] | Medium | 詳解 |
| 139. Word Break                     | Solution        | Medium | 詳解 |
| 322. Coin Change                    | Solution        | Medium | 詳解 |
| 300. Longest Increasing Subsequence | Solution        | Medium | 詳解 |

[70]: ./src/page-1/70.%20Climbing%20Stairs/climbStairs.ts
[198]: ./src/page-2/198.%20House%20Robber/rob.ts

| Multidimensional DP                      |                |        |                        |
| ---------------------------------------- | -------------- | ------ | ---------------------- |
| 120. Triangle                            | Solution       | Medium | 詳解                   |
| 64. Minimum Path Sum                     | Solution       | Medium | 詳解                   |
| 63. Unique Paths II                      | Solution       | Medium | 詳解                   |
| 5. Longest Palindromic Substring         | [Solution][5]  | Medium | 詳解                   |
| 97. Interleaving String                  | Solution       | Medium | 詳解                   |
| 72. Edit Distance                        | [Solution][72] | Medium | [詳解][72-explanation] |
| 123. Best Time to Buy and Sell Stock III | Solution       | Hard   | 詳解                   |
| 188. Best Time to Buy and Sell Stock IV  | Solution       | Hard   | 詳解                   |
| 221. Maximal Square                      | Solution       | Medium | 詳解                   |

[5]: ./src/page-1/5.%20Longest%20Palindromic%20Substring/longestPalindrome.ts
[72]: ./src/page-1/72.%20Edit%20Distance/minDistance.ts
[72-explanation]: ./src/page-1/72.%20Edit%20Distance/README.md

## Impactful - Top 100 Liked

100 Best Rated Problems

- 100 most liked problems by LeetCoders
- Organized based on hot topics that help improve coding skills in interviews

Problems:

| Backtracking                              |                |        |      |
| ----------------------------------------- | -------------- | ------ | ---- |
| 17. Letter Combinations of a Phone Number | [Solution][17] | Medium | 詳解 |
| 22. Generate Parentheses                  | Solution       | Medium | 詳解 |
| 39. Combination Sum                       | [Solution][39] | Medium | 詳解 |
| 46. Permutations                          | [Solution][46] | Medium | 詳解 |
| 51. N-Queens                              | Solution       | Hard   | 詳解 |
| 78. Subsets                               | Solution       | Medium | 詳解 |
| 79. Word Search                           | Solution       | Medium | 詳解 |
| 131. Palindrome Partitioning              | Solution       | Medium | 詳解 |

[17]: ./src/page-1/17.%20Letter%20Combinations%20of%20a%20Phone%20Number/letterCombinations.ts
[39]: ./src/page-1/39.%20Combination%20Sum/combinationSum.ts
[46]: ./src/page-1/46.%20Permutations/permute.ts

| Binary Search                                               |                |        |      |
| ----------------------------------------------------------- | -------------- | ------ | ---- |
| 4. Median of Two Sorted Arrays                              | [Solution][4]  | Hard   | 詳解 |
| 33. Search in Rotated Sorted Array                          | Solution       | Medium | 詳解 |
| 34. Find First and Last Position of Element in Sorted Array | [Solution][34] | Medium | 詳解 |
| 35. Search Insert Position                                  | [Solution][35] | Easy   | 詳解 |
| 74. Search a 2D Matrix                                      | Solution       | Medium | 詳解 |
| 124. Binary Tree Maximum Path Sum                           | Solution       | Hard   | 詳解 |
| 153. Find Minimum in Rotated Sorted Array                   | Solution       | Medium | 詳解 |

[4]: ./src/page-1/4.%20Median%20of%20Two%20Sorted%20Arrays/findMedianSortedArrays.ts
[34]: ./src/page-1/34.%20Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array/searchRange.ts
[35]: ./src/page-1/35.%20Search%20Insert%20Position/searchInsert.ts

| Binary Tree                                                    |                 |        |      |
| -------------------------------------------------------------- | --------------- | ------ | ---- |
| 94. Binary Tree Inorder Traversal                              | [Solution][94]  | Easy   | 詳解 |
| 98. Validate Binary Search Tree                                | Solution        | Medium | 詳解 |
| 101. Symmetric Tree                                            | [Solution][101] | Easy   | 詳解 |
| 102. Binary Tree Level Order Traversal                         | Solution        | Medium | 詳解 |
| 104. Maximum Depth of Binary Tree                              | [Solution][104] | Easy   | 詳解 |
| 105. Construct Binary Tree from Preorder and Inorder Traversal | Solution        | Medium | 詳解 |
| 108. Convert Sorted Array to Binary Search Tree                | [Solution][108] | Easy   | 詳解 |
| 114. Flatten Binary Tree to Linked List                        | Solution        | Medium | 詳解 |
| 199. Binary Tree Right Side View                               | [Solution][199] | Medium | 詳解 |
| 226. Invert Binary Tree                                        | Solution        | Easy   | 詳解 |
| 230. Kth Smallest Element in a BST                             | Solution        | Medium | 詳解 |
| 236. Lowest Common Ancestor of a Binary Tree                   | [Solution][236] | Medium | 詳解 |
| 437. Path Sum III                                              | [Solution][437] | Medium | 詳解 |
| 543. Diameter of Binary Tree                                   | Solution        | Easy   | 詳解 |

[94]: ./src/page-1/94.%20Binary%20Tree%20Inorder%20Traversal/inorderTraversal.ts
[101]: ./src/page-2/101.%20Symmetric%20Tree/isSymmetric.ts
[104]: ./src/page-2/104.%20Maximum%20Depth%20of%20Binary%20Tree/maxDepth.ts
[108]: ./src/page-2/108.%20Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree/sortedArrayToBST.ts
[199]: ./src/page-2/199.%20Binary%20Tree%20Right%20Side%20View/rightSideView.ts
[236]: ./src/page-3/236.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/lowestCommonAncestor.ts
[437]: ./src/page-5/437.%20Path%20Sum%20III/pathSum.ts

| Dynamic Programming                 |                  |        |                        |
| ----------------------------------- | ---------------- | ------ | ---------------------- |
| 5. Longest Palindromic Substring    | [Solution][5]    | Medium | 詳解                   |
| 32. Longest Valid Parentheses       | Solution         | Hard   | 詳解                   |
| 62. Unique Paths                    | [Solution][62]   | Medium | 詳解                   |
| 64. Minimum Path Sum                | Solution         | Medium | 詳解                   |
| 70. Climbing Stairs                 | [Solution][70]   | Easy   | 詳解                   |
| 72. Edit Distance                   | [Solution][72]   | Medium | [詳解][72-explanation] |
| 118. Pascal's Triangle              | [Solution][118]  | Easy   | 詳解                   |
| 139. Word Break                     | Solution         | Medium | 詳解                   |
| 152. Maximum Product Subarray       | Solution         | Medium | 詳解                   |
| 198. House Robber                   | [Solution][198]  | Medium | 詳解                   |
| 279. Perfect Squares                | Solution         | Medium | 詳解                   |
| 300. Longest Increasing Subsequence | Solution         | Medium | 詳解                   |
| 322. Coin Change                    | Solution         | Medium | 詳解                   |
| 416. Partition Equal Subset Sum     | Solution         | Medium | 詳解                   |
| 1143. Longest Common Subsequence    | [Solution][1143] | Medium | 詳解                   |

[5]: ./src/page-1/5.%20Longest%20Palindromic%20Substring/longestPalindrome.ts
[62]: ./src/page-1/62.%20Unique%20Paths/uniquePaths.ts
[70]: ./src/page-1/70.%20Climbing%20Stairs/climbStairs.ts
[72]: ./src/page-1/72.%20Edit%20Distance/minDistance.ts
[72-explanation]: ./src/page-1/72.%20Edit%20Distance/README.md
[118]: ./src/page-2/118.%20Pascal's%20Triangle/generate.ts
[198]: ./src/page-2/198.%20House%20Robber/rob.ts
[1143]: ./src/page-11/1143.%20Longest%20Common%20Subsequence/longestCommonSubsequence.ts

| Graph                  |                 |        |      |
| ---------------------- | --------------- | ------ | ---- |
| 200. Number of Islands | Solution        | Medium | 詳解 |
| 207. Course Schedule   | Solution        | Medium | 詳解 |
| 994. Rotting Oranges   | [Solution][994] | Medium | 詳解 |

[994]: ./src/page-10/994.%20Rotting%20Oranges/orangesRotting.ts

| Greedy                               |          |        |      |
| ------------------------------------ | -------- | ------ | ---- |
| 45. Jump Game II                     | Solution | Medium | 詳解 |
| 55. Jump Game                        | Solution | Medium | 詳解 |
| 121. Best Time to Buy and Sell Stock | Solution | Easy   | 詳解 |
| 763. Partition Labels                | Solution | Medium | 詳解 |

| Hashing                           |               |        |      |
| --------------------------------- | ------------- | ------ | ---- |
| 1. Two Sum                        | [Solution][1] | Easy   | 詳解 |
| 49. Group Anagrams                | Solution      | Medium | 詳解 |
| 128. Longest Consecutive Sequence | Solution      | Medium | 詳解 |
| 560. Subarray Sum Equals K        | Solution      | Medium | 詳解 |

[1]: ./src/page-1/1.%20Two%20Sum/twoSum.ts

| Heap                                 |                 |        |      |
| ------------------------------------ | --------------- | ------ | ---- |
| 215. Kth Largest Element in an Array | [Solution][215] | Medium | 詳解 |
| 295. Find Median from Data Stream    | Solution        | Hard   | 詳解 |
| 347. Top K Frequent Elements         | Solution        | Medium | 詳解 |

[215]: ./src/page-2/215.%20Kth%20Largest%20Element%20in%20an%20Array/findKthLargest.ts

| Linked Lists                          |                 |        |      |
| ------------------------------------- | --------------- | ------ | ---- |
| 2. Add Two Numbers                    | [Solution][2]   | Medium | 詳解 |
| 19. Remove Nth Node From End of List  | Solution        | Medium | 詳解 |
| 21. Merge Two Sorted Lists            | [Solution][21]  | Easy   | 詳解 |
| 23. Merge k Sorted Lists              | Solution        | Hard   | 詳解 |
| 24. Swap Nodes in Pairs               | Solution        | Medium | 詳解 |
| 25. Reverse Nodes in k-Group          | Solution        | Hard   | 詳解 |
| 138. Copy List with Random Pointer    | Solution        | Medium | 詳解 |
| 141. Linked List Cycle                | [Solution][141] | Easy   | 詳解 |
| 142. Linked List Cycle II             | Solution        | Medium | 詳解 |
| 146. LRU Cache                        | Solution        | Medium | 詳解 |
| 148. Sort List                        | Solution        | Medium | 詳解 |
| 160. Intersection of Two Linked Lists | Solution        | Easy   | 詳解 |
| 206. Reverse Linked List              | [Solution][206] | Easy   | 詳解 |
| 234. Palindrome Linked List           | Solution        | Easy   | 詳解 |

[2]: ./src/page-1/2.%20Add%20Two%20Numbers/addTwoNumbers.ts
[21]: ./src/page-1/21.%20Merge%20Two%20Sorted%20Lists/mergeTwoLists.ts
[141]: ./src/page-2/141.%20Linked%20List%20Cycle/hasCycle.ts
[206]: ./src/page-2/206.%20Reverse%20Linked%20List/reverseList.ts

| Matrix                     |                |        |      |
| -------------------------- | -------------- | ------ | ---- |
| 48. Rotate Image           | Solution       | Medium | 詳解 |
| 54. Spiral Matrix          | [Solution][54] | Medium | 詳解 |
| 73. Set Matrix Zeroes      | Solution       | Medium | 詳解 |
| 240. Search a 2D Matrix II | Solution       | Medium | 詳解 |

[54]: ./src/page-1/54.%20Spiral%20Matrix/spiralOrder.ts

| Sliding Window                                    |          |        |      |
| ------------------------------------------------- | -------- | ------ | ---- |
| 3. Longest Substring Without Repeating Characters | Solution | Medium | 詳解 |
| 76. Minimum Window Substring                      | Solution | Hard   | 詳解 |
| 239. Sliding Window Maximum                       | Solution | Hard   | 詳解 |
| 438. Find All Anagrams in a String                | Solution | Medium | 詳解 |

[3]: ./src/page-1/3.%20Longest%20Substring%20Without%20Repeating%20Characters/lengthOfLongestSubstring.ts

| Stack                              |                 |        |      |
| ---------------------------------- | --------------- | ------ | ---- |
| 20. Valid Parentheses              | [Solution][20]  | Easy   | 詳解 |
| 84. Largest Rectangle in Histogram | Solution        | Hard   | 詳解 |
| 155. Min Stack                     | [Solution][155] | Medium | 詳解 |
| 394. Decode String                 | [Solution][394] | Medium | 詳解 |
| 739. Daily Temperatures            | Solution        | Medium | 詳解 |

[20]: ./src/page-1/20.%20Valid%20Parentheses/isValid.ts
[155]: ./src/page-2/155.%20Min%20Stack/MinStack.ts
[394]: ./src/page-4/394.%20Decode%20String/decodeString.ts

| Two Pointers                  |                 |        |      |
| ----------------------------- | --------------- | ------ | ---- |
| 11. Container With Most Water | [Solution][11]  | Medium | 詳解 |
| 15. 3Sum                      | Solution        | Medium | 詳解 |
| 42. Trapping Rain Water       | Solution        | Hard   | 詳解 |
| 283. Move Zeroes              | [Solution][283] | Easy   | 詳解 |

[11]: ./src/page-1/11.%20Container%20With%20Most%20Water/maxArea.ts
[283]: ./src/page-3/283.%20Move%20Zeroes/moveZeroes.ts

| Trie                              |                 |        |      |
| --------------------------------- | --------------- | ------ | ---- |
| 208. Implement Trie (Prefix Tree) | [Solution][208] | Medium | 詳解 |

[208]: ./src/page-2/208.%20Implement%20Trie%20(Prefix%20Tree)/Trie.ts

| Misc                              |                 |        |      |
| --------------------------------- | --------------- | ------ | ---- |
| 31. Next Permutation              | Solution        | Medium | 詳解 |
| 41. First Missing Positive        | Solution        | Hard   | 詳解 |
| 53. Maximum Subarray              | [Solution][53]  | Medium | 詳解 |
| 56. Merge Intervals               | Solution        | Medium | 詳解 |
| 75. Sort Colors                   | Solution        | Medium | 詳解 |
| 136. Single Number                | [Solution][136] | Easy   | 詳解 |
| 169. Majority Element             | Solution        | Easy   | 詳解 |
| 189. Rotate Array                 | [Solution][189] | Medium | 詳解 |
| 238. Product of Array Except Self | [Solution][238] | Medium | 詳解 |
| 287. Find the Duplicate Number    | Solution        | Medium | 詳解 |

[53]: ./src/page-1/53.%20Maximum%20Subarray/maxSubArray.ts
[136]: ./src/page-2/136.%20Single%20Number/singleNumber.ts
[189]: ./src/page-2/189.%20Rotate%20Array/rotate.ts
[238]: ./src/page-3/238.%20Product%20of%20Array%20Except%20Self/productExceptSelf.ts
