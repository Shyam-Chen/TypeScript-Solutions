import { TrieNode } from './TrieNode.ts';

export class Trie {
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

  // 查找字詞
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
