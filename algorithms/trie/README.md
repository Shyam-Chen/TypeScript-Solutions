# 字典樹 (Trie)

```ts
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
```

```ts
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // 插入字詞
  insert(word: string): void {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }

      current = current.children.get(char) as TrieNode;
    }

    current.isEndOfWord = true;
  }

  // 查找字
  search(word: string): boolean {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char) as TrieNode;
    }

    return current.isEndOfWord;
  }

  // 查找是否存在某個前綴
  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char) as TrieNode;
    }

    return true;
  }
}
```

```ts
const trie = new Trie();

trie.insert('apple');
trie.insert('banana');

console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.search('banana')); // true

console.log(trie.startsWith('app')); // true

trie.insert('app');
console.log(trie.search('app')); // true
```
