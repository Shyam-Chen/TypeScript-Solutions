class TrieNode {
  children: Map<string, TrieNode>;
  suggestions: string[];

  constructor() {
    this.children = new Map();
    this.suggestions = [];
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char) as TrieNode;

      // Keep only top 3 lexicographically minimum products
      if (node.suggestions.length < 3) {
        node.suggestions.push(word);
      } else {
        node.suggestions.sort();
        if (word < node.suggestions[2]) {
          node.suggestions.pop();
          node.suggestions.push(word);
          node.suggestions.sort();
        }
      }
    }
  }

  search(prefix: string): string[][] {
    let node = this.root;

    const result: string[][] = [];

    for (const char of prefix) {
      if (node) {
        node = node.children.get(char) as TrieNode;
      }

      result.push(node ? node.suggestions : []);
    }

    return result;
  }
}

type SuggestedProducts = (products: string[], searchWord: string) => string[][];

/**
 * Accepted
 */
export const suggestedProducts: SuggestedProducts = (products, searchWord) => {
  // Sort products lexicographically
  products.sort();

  const trie = new Trie();

  // Insert products into Trie
  for (const product of products) {
    trie.insert(product);
  }

  // Get suggestions for each prefix of searchWord
  return trie.search(searchWord);
};
