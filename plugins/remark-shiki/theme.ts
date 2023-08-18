import type { IShikiTheme } from 'shiki';
import {
  white,
  black,
  slate,
  yellow,
  rose,
  indigo,
  sky,
  orange,
  red,
  green,
} from 'tailwindcss/colors';

const PALE = 300;
const LITE = 400;
const DARK = 600;

export const theme: IShikiTheme = {
  name: 'juggalo',
  type: 'dark',
  colors: {
    foreground: white,
    background: black,
  },
  fg: white,
  bg: black,
  settings: [
    {
      settings: {
        foreground: white,
        background: black,
      },
    },
    {
      scope: ['emphasis'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: ['strong'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: ['header'],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      scope: ['meta.diff', 'meta.diff.header'],
      settings: {
        foreground: slate[LITE],
      },
    },
    {
      scope: ['markup.inserted'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      scope: ['markup.deleted'],
      settings: {
        foreground: red[DARK],
      },
    },
    {
      scope: ['markup.changed'],
      settings: {
        foreground: orange[LITE],
      },
    },
    {
      scope: ['invalid'],
      settings: {
        foreground: red[DARK],
        fontStyle: 'underline italic',
      },
    },
    {
      scope: ['invalid.deprecated'],
      settings: {
        foreground: red[DARK],
        fontStyle: 'underline italic',
      },
    },
    {
      scope: ['entity.name.filename'],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      scope: ['markup.error'],
      settings: {
        foreground: red[DARK],
      },
    },
    {
      name: 'Underlined markup',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Bold markup',
      scope: ['markup.bold'],
      settings: {
        fontStyle: 'bold',
        foreground: orange[LITE],
      },
    },
    {
      name: 'Markup headings',
      scope: ['markup.heading'],
      settings: {
        fontStyle: 'bold',
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Markup italic',
      scope: ['markup.italic'],
      settings: {
        foreground: yellow[PALE],
        fontStyle: 'italic',
      },
    },
    {
      name: 'Bullets, lists (prose)',
      scope: [
        'beginning.punctuation.definition.list.markdown',
        'beginning.punctuation.definition.quote.markdown',
        'punctuation.definition.link.restructuredtext',
      ],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Inline code (prose)',
      scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Links (prose)',
      scope: ['markup.underline.link', 'markup.underline.link.image'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Link text, image alt text (prose)',
      scope: [
        'meta.link.reference.def.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'string.other.link.description',
        'string.other.link.title',
      ],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: 'Blockquotes (prose)',
      scope: ['entity.name.directive.restructuredtext', 'markup.quote'],
      settings: {
        foreground: yellow[PALE],
        fontStyle: 'italic',
      },
    },
    {
      name: 'Horizontal rule (prose)',
      scope: ['meta.separator.markdown'],
      settings: {
        foreground: slate[LITE],
      },
    },
    {
      name: 'Code blocks',
      scope: [
        'fenced_code.block.language',
        'markup.raw.inner.restructuredtext',
        'markup.fenced_code.block.markdown punctuation.definition.markdown',
      ],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Prose constants',
      scope: ['punctuation.definition.constant.restructuredtext'],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Braces in markdown headings',
      scope: [
        'markup.heading.markdown punctuation.definition.string.begin',
        'markup.heading.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Braces in markdown paragraphs',
      scope: [
        'meta.paragraph.markdown punctuation.definition.string.begin',
        'meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: 'Braces in markdown blockquotes',
      scope: [
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
      ],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'User-defined class names',
      scope: ['entity.name.type.class', 'entity.name.class'],
      settings: {
        foreground: green[LITE],
        // foreground: orange[LITE],
        // foreground: white,
        fontStyle: 'normal',
      },
    },
    {
      name: 'this, super, self, etc.',
      scope: [
        'keyword.expressions-and-types.swift',
        'keyword.other.this',
        'variable.language',
        'variable.language punctuation.definition.variable.php',
        'variable.other.readwrite.instance.ruby',
        'variable.parameter.function.language.special',
      ],
      settings: {
        foreground: orange[LITE],
        // foreground: indigo[LITE],
        fontStyle: 'italic',
      },
    },
    {
      name: 'Inherited classes',
      scope: ['entity.other.inherited-class'],
      settings: {
        fontStyle: 'bold',
        // foreground: white,
        // foreground: orange[LITE],
        foreground: green[LITE],
      },
    },
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment', 'unused.comment', 'wildcard.comment'],
      settings: {
        foreground: slate[LITE],
      },
    },
    {
      name: 'JSDoc-style keywords',
      scope: [
        'comment keyword.codetag.notation',
        'comment.block.documentation keyword',
        'comment.block.documentation storage.type.class',
      ],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: 'JSDoc-style types',
      scope: ['comment.block.documentation entity.name.type'],
      settings: {
        foreground: green[LITE],
        // foreground: orange[LITE],
        // foreground: white,
        fontStyle: 'italic',
      },
    },
    {
      name: 'JSDoc-style type brackets',
      scope: ['comment.block.documentation entity.name.type punctuation.definition.bracket'],
      settings: {
        foreground: green[LITE],
        // foreground: orange[LITE],
        // foreground: white,
      },
    },
    {
      name: 'JSDoc-style comment parameters',
      scope: ['comment.block.documentation variable'],
      settings: {
        foreground: orange[LITE],
        fontStyle: 'italic',
      },
    },
    {
      name: 'Constants',
      scope: ['constant', 'variable.other.constant'],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Constant escape sequences',
      scope: ['constant.character.escape', 'constant.character.string.escape', 'constant.regexp'],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      name: 'HTML tags',
      scope: ['entity.name.tag'],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: "CSS attribute parent selectors ('&')",
      scope: ['entity.other.attribute-name.parent-selector'],
      settings: {
        fontStyle: 'bold',
        foreground: rose[DARK],
      },
    },
    {
      name: 'HTML/CSS attribute names',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: green[LITE],
        fontStyle: 'italic',
      },
    },
    {
      name: 'Function names',
      scope: [
        'entity.name.function',
        'meta.function-call.object',
        'meta.function-call.php',
        'meta.function-call.static',
        'meta.method-call.java meta.method',
        'meta.method.groovy',
        'support.function.any-method.lua',
        'keyword.operator.function.infix',
      ],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Function parameters',
      scope: [
        'entity.name.variable.parameter',
        'meta.at-rule.function variable',
        'meta.at-rule.mixin variable',
        'meta.function.arguments variable.other.php',
        'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
        'variable.parameter',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: orange[LITE],
        // foreground: white,
      },
    },
    {
      name: 'Decorators',
      scope: ['meta.decorator variable.other.readwrite', 'meta.decorator variable.other.property'],
      settings: {
        foreground: green[LITE],
        fontStyle: 'italic',
      },
    },
    {
      name: 'Decorator Objects',
      scope: ['meta.decorator variable.other.object'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'punctuation.definition.keyword'],
      settings: {
        fontStyle: 'bold',
        foreground: rose[DARK],
      },
    },
    {
      name: 'Keyword "new"',
      scope: ['keyword.control.new', 'keyword.operator.new'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Generic selectors (CSS/SCSS/Less/Stylus)',
      scope: ['meta.selector'],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: 'Language Built-ins',
      scope: ['support'],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Built-in magic functions and constants',
      scope: ['support.function.magic', 'support.variable', 'variable.other.predefined'],
      settings: {
        fontStyle: 'regular',
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Built-in functions / properties',
      scope: ['support.function', 'support.type.property-name'],
      settings: {
        fontStyle: 'regular',
      },
    },
    {
      name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
      scope: [
        'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
        'entity.other.attribute-name.placeholder punctuation',
        'entity.other.attribute-name.pseudo-class punctuation',
        'entity.other.attribute-name.pseudo-element punctuation',
        'meta.group.double.toml',
        'meta.group.toml',
        'meta.object-binding-pattern-variable punctuation.destructuring',
        'punctuation.colon.graphql',
        'punctuation.definition.block.scalar.folded.yaml',
        'punctuation.definition.block.scalar.literal.yaml',
        'punctuation.definition.block.sequence.item.yaml',
        'punctuation.definition.entity.other.inherited-class',
        'punctuation.function.swift',
        'punctuation.separator.dictionary.key-value',
        'punctuation.separator.hash',
        'punctuation.separator.inheritance',
        'punctuation.separator.key-value',
        'punctuation.separator.key-value.mapping.yaml',
        'punctuation.separator.namespace',
        'punctuation.separator.pointer-access',
        'punctuation.separator.slice',
        'string.unquoted.heredoc punctuation.definition.string',
        'support.other.chomping-indicator.yaml',
        'punctuation.separator.annotation',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: rose[DARK],
      },
    },
    {
      name: 'Brackets, braces, parens, etc.',
      scope: [
        'keyword.operator.other.powershell',
        'keyword.other.statement-separator.powershell',
        'meta.brace.round',
        'meta.function-call punctuation',
        'punctuation.definition.arguments.begin',
        'punctuation.definition.arguments.end',
        'punctuation.definition.entity.begin',
        'punctuation.definition.entity.end',
        'punctuation.definition.tag.cs',
        'punctuation.definition.type.begin',
        'punctuation.definition.type.end',
        'punctuation.section.scope.begin',
        'punctuation.section.scope.end',
        'punctuation.terminator.expression.php',
        'storage.type.generic.java',
        'string.template meta.brace',
        'string.template punctuation.accessor',
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: 'Variable interpolation operators',
      scope: [
        'meta.string-contents.quoted.double punctuation.definition.variable',
        'punctuation.definition.interpolation.begin',
        'punctuation.definition.interpolation.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded.begin',
        'punctuation.section.embedded.coffee',
        'punctuation.section.embedded.end',
        'punctuation.section.embedded.end source.php',
        'punctuation.section.embedded.end source.ruby',
        'punctuation.definition.variable.makefile',
      ],
      settings: {
        foreground: indigo[LITE],
        // foreground: rose[DARK],
      },
    },
    {
      name: 'Keys (serializable languages)',
      scope: [
        'entity.name.function.target.makefile',
        'entity.name.section.toml',
        'entity.name.tag.yaml',
        'variable.other.key.toml',
      ],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Dates / timestamps (serializable languages)',
      scope: ['constant.other.date', 'constant.other.timestamp'],
      settings: {
        foreground: orange[LITE],
      },
    },
    {
      name: 'YAML aliases',
      scope: ['variable.other.alias.yaml'],
      settings: {
        fontStyle: 'italic underline',
        foreground: green[LITE],
      },
    },
    {
      name: 'Storage',
      scope: [
        'storage',
        'meta.implementation storage.type.objc',
        'meta.interface-or-protocol storage.type.objc',
        'source.groovy storage.type.def',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: sky[LITE],
      },
    },
    {
      name: 'Types',
      scope: [
        'entity.name.type',
        'keyword.primitive-datatypes.swift',
        'keyword.type.cs',
        'meta.protocol-list.objc',
        'meta.return-type.objc',
        'source.go storage.type',
        'source.groovy storage.type',
        'source.java storage.type',
        'source.powershell entity.other.attribute-name',
        'storage.class.std.rust',
        'storage.type.attribute.swift',
        'storage.type.c',
        'storage.type.core.rust',
        'storage.type.cs',
        'storage.type.groovy',
        'storage.type.objc',
        'storage.type.php',
        'storage.type.haskell',
        'storage.type.ocaml',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: green[LITE],
        // foreground: orange[LITE],
        // foreground: white,
      },
    },
    {
      name: 'Generics, templates, and mapped type declarations',
      scope: [
        'entity.name.type.type-parameter',
        'meta.indexer.mappedtype.declaration entity.name.type',
        'meta.type.parameters entity.name.type',
      ],
      settings: {
        foreground: green[LITE],
        // foreground: orange[LITE],
        // foreground: white,
      },
    },
    {
      name: 'Modifiers',
      scope: ['storage.modifier'],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: 'RegExp string',
      scope: [
        'string.regexp',
        'constant.other.character-class.set.regexp',
        'constant.character.escape.backslash.regexp',
      ],
      settings: {
        foreground: indigo[LITE],
        // foreground: yellow[PALE],
      },
    },
    {
      name: 'Non-capture operators',
      scope: ['punctuation.definition.group.capture.regexp'],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: 'RegExp start and end characters',
      scope: [
        'string.regexp punctuation.definition.string.begin',
        'string.regexp punctuation.definition.string.end',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: rose[DARK],
      },
    },
    {
      name: 'Character group',
      scope: ['punctuation.definition.character-class.regexp'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Capture groups',
      scope: ['punctuation.definition.group.regexp'],
      settings: {
        foreground: orange[LITE],
      },
    },
    {
      name: 'Assertion operators',
      scope: ['punctuation.definition.group.assertion.regexp', 'keyword.operator.negation.regexp'],
      settings: {
        foreground: rose[DARK],
      },
    },
    {
      name: 'Positive lookaheads',
      scope: ['meta.assertion.look-ahead.regexp'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Strings',
      scope: ['string'],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'String quotes (temporary vscode fix)',
      scope: ['punctuation.definition.string.begin', 'punctuation.definition.string.end'],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'Property quotes (temporary vscode fix)',
      scope: [
        'punctuation.support.type.property-name.begin',
        'punctuation.support.type.property-name.end',
      ],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'Docstrings',
      scope: [
        'string.quoted.docstring.multi',
        'string.quoted.docstring.multi.python punctuation.definition.string.begin',
        'string.quoted.docstring.multi.python punctuation.definition.string.end',
        'string.quoted.docstring.multi.python constant.character.escape',
      ],
      settings: {
        foreground: slate[LITE],
      },
    },
    {
      name: 'Variables and object properties',
      scope: [
        'variable',
        'constant.other.key.perl',
        'support.variable.property',
        'variable.other.constant.js',
        'variable.other.constant.ts',
        'variable.other.constant.tsx',
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: 'Destructuring / aliasing reference name (LHS)',
      scope: [
        'meta.import variable.other.readwrite',
        'meta.variable.assignment.destructured.object.coffee variable',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: orange[LITE],
      },
    },
    {
      name: 'Destructuring / aliasing variable name (RHS)',
      scope: [
        'meta.import variable.other.readwrite.alias',
        'meta.export variable.other.readwrite.alias',
        'meta.variable.assignment.destructured.object.coffee variable variable',
      ],
      settings: {
        fontStyle: 'normal',
        foreground: white,
      },
    },
    {
      name: 'GraphQL keys',
      scope: ['meta.selectionset.graphql variable'],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'GraphQL function arguments',
      scope: ['meta.selectionset.graphql meta.arguments variable'],
      settings: {
        foreground: red[DARK],
      },
    },
    {
      name: 'GraphQL fragment name (definition)',
      scope: ['entity.name.fragment.graphql', 'variable.fragment.graphql'],
      settings: {
        foreground: green[LITE],
      },
    },
    {
      name: 'Edge cases (foreground color resets)',
      scope: [
        'constant.other.symbol.hashkey.ruby',
        'keyword.operator.dereference.java',
        'keyword.operator.navigation.groovy',
        'meta.scope.for-loop.shell punctuation.definition.string.begin',
        'meta.scope.for-loop.shell punctuation.definition.string.end',
        'meta.scope.for-loop.shell string',
        'storage.modifier.import',
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx',
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
        'punctuation.separator.list.comma.css',
        'constant.language.empty-list.haskell',
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: 'Shell variables prefixed with "$" (edge case)',
      scope: ['source.shell variable.other'],
      settings: {
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)',
      scope: ['support.constant'],
      settings: {
        fontStyle: 'normal',
        foreground: indigo[LITE],
      },
    },
    {
      name: 'Makefile prerequisite names',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'SCSS attibute selector strings',
      scope: ['meta.attribute-selector.scss'],
      settings: {
        foreground: yellow[PALE],
      },
    },
    {
      name: 'SCSS attribute selector brackets',
      scope: [
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
      ],
      settings: {
        foreground: white,
      },
    },
    {
      name: 'Haskell Pragmas',
      scope: ['meta.preprocessor.haskell'],
      settings: {
        foreground: slate[LITE],
      },
    },
    {
      name: 'Log file error',
      scope: ['log.error'],
      settings: {
        foreground: red[DARK],
        fontStyle: 'bold',
      },
    },
    {
      name: 'Log file warning',
      scope: ['log.warning'],
      settings: {
        foreground: yellow[PALE],
        fontStyle: 'bold',
      },
    },
  ],
};
