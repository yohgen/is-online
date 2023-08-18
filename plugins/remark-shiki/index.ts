import type { Root, Html } from 'mdast';
import { Lang, getHighlighter } from 'shiki';
import { visit } from 'unist-util-visit';

import { theme } from './theme';
import { renderToHtml } from './renderer';

class RemarkShikiError extends TypeError {
  constructor(message: string) {
    super(message);
    this.name = 'RemarkShikiError';
  }
}

export const remarkShiki = async () => {
  const highlighter = await getHighlighter({ theme });

  return () => (root: Root) => {
    visit(root, 'code', (node) => {
      if (
        typeof node.lang !== 'string' ||
        !highlighter.getLoadedLanguages().includes(node.lang as any)
      ) throw new RemarkShikiError(`Invalid language: ${node.lang}`);
      
      const lang = node.lang as Lang;

      const code = renderToHtml(highlighter.codeToThemedTokens(node.value, lang), lang);
      const pre = `<pre${!node.meta ? '' : ` ${node.meta}`}>${code}</pre>`;

      (node as any as Html).type = 'html';
      (node as any as Html).value = pre;
    });
  };
};
