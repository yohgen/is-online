import type { Root } from 'hast';
import { visit } from 'unist-util-visit';

export const rehypeFixes = () => () => (root: Root) => visit(root, 'element', (node) => {
  switch (node.tagName) {
    case 'blockquote': {
      visit(node, { tagName: 'p' }, (paragraph) => {
        node.children = [];
        visit(paragraph, 'text', (text) => node.children.push(text));
      });
      break;
    }
  }
});
