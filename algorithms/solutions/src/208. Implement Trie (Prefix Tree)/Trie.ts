class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

/**
 * Accepted
 */
export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

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

  search(word: string): boolean {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char) as TrieNode;
    }

    return current.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children.has(char)) return false;
      current = current.children.get(char) as TrieNode;
    }

    return true;
  }
}
