import { IThemedToken, FontStyle, Lang } from 'shiki';

const ESCAPE_RGX = /[&<>"']/g;
const ESCAPE_DICT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
const replacer = (char: string) => ESCAPE_DICT[char as keyof typeof ESCAPE_DICT];
const escapeHtml = (value: string) => value.replace(ESCAPE_RGX, replacer);

const getContentDiff = (content: string, tokenIdx: number) => {
  content = escapeHtml(content);

  const char = content[0]!;
  const isDiff = tokenIdx === 0 && (char === '+' || char === '-');
  if (!isDiff) return content;

  return `<span class="select-none">${char}</span>${content.slice(1)}`;
};

const WHITESPACE_RGX = /^\s+$/;
export const renderToHtml = (lines: IThemedToken[][], lang: Lang) => {
  const getContent = lang === 'diff' ? getContentDiff : escapeHtml;

  const spans: string[] = [];
  for (const tokens of lines) {
    for (let idx = 0; idx < tokens.length; idx++) {
      const { content, color, fontStyle } = tokens[idx]!;

      const isWhitespace = WHITESPACE_RGX.test(content);
      const isNoColorNoStyle = !color && !fontStyle;
      const isJustWhite = !isNoColorNoStyle && color?.toLowerCase() === '#fff';
      if (isWhitespace || isNoColorNoStyle || isJustWhite) {
        spans.push(content);
        continue;
      }

      const tag = fontStyle === FontStyle.Bold ? 'b' : fontStyle === FontStyle.Italic ? 'i' : 'span';
      const className = fontStyle === FontStyle.Underline ? ' class="underline"' : '';
      const style = color ? ` style="color:${color.toLowerCase()}"` : '';

      spans.push(`<${tag}${style}${className}>${getContent(content, idx)}</${tag}>`);
    }

    spans.push('\n');
  }

  return `<code>${spans.join('')}</code>`;
};
