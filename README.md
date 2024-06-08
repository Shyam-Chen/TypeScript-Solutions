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

| Array / String                           |                  |      |
| ---------------------------------------- | ---------------- | ---- |
| 1768. Merge Strings Alternately          | [Solution][1768] | Easy |
| 1071. Greatest Common Divisor of Strings | [Solution][1071] | Easy |

<!-- Array / String -->

[1768]: ./src/page-17/1768.%20Merge%20Strings%20Alternately/merge-alternately.ts
[1071]: ./src/page-11/1071.%20Greatest%20Common%20Divisor%20of%20Strings/gcdOfStrings.ts

</details>

## Top Interview 150 (Advanced)

Must-do List for Interview Prep

- 150 Original & Classic Questions
- Covers comprehensive interview topics
- Best for 3+ months of prep time
- Problems support high-quality editorials

<details>
  <summary>Problems</summary>

| Array / String         |                |      |
| ---------------------- | -------------- | ---- |
| 88. Merge Sorted Array | [Solution][88] | Easy |

<!-- Array / String -->

[88]: ./src/page-1//88.%20Merge%20Sorted%20Array/merge.ts

</details>
