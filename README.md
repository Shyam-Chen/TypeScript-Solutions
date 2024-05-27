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
├── docker-compose.yml
├── Dockerfile
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
└── vite.config.ts
```
