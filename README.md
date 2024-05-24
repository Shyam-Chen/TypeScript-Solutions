# ECMAScript LeetCode &middot; [![Build Status](https://img.shields.io/circleci/project/github/Shyam-Chen/ECMAScript-LeetCode/master.svg)](https://circleci.com/gh/Shyam-Chen/ECMAScript-LeetCode) [![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/ECMAScript-LeetCode/master.svg)](https://codecov.io/gh/Shyam-Chen/ECMAScript-LeetCode)

🐳 [LeetCode of algorithms](https://leetcode.com/problemset/algorithms/) with JavaScript solutions written in TypeScript.

## Usage

1. Clone this project

```sh
$ git clone https://github.com/Shyam-Chen/ECMAScript-LeetCode
$ cd ECMAScript-LeetCode
```

2. Install dependencies

```sh
$ pnpm install
```

3. Run unit tests

```sh
$ pnpm test

# run a specific test file
$ pnpm test -- <FILE_NAME>
# e.g.
$ pnpm test -- two-sum.spec.ts
```

## Directory Structure

```ts
.
├── src
│   ├── page<NUM> -> set 100 rows per page for the table of the algorithms
│   │   └── <TITLE>
│   │       ├── <NAME>.spec.ts
│   │       └── <NAME>.ts
│   └── utils
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── circle.yml
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```
