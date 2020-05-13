const color = require('color');
const jsonfile = require('jsonfile');

const name = 'stibo-dx';
const type = 'dark';

// https://color.hailpixel.com/#111750,141A5B,4DE8D1,CFEAF7,FF6242,005D60,FD983D
const black = color('#1E2127');
const darkGrey = color('#282C34');
const grey = color('#5C6370');
const lightGrey = color('#ABB2BF');

const blue = color('#141A5B');
const darkBlue = color('#111750');
const lightBlue = color('#CFEAF7');
const turquoise = color('#4DE8D1');
const red = color('#FF6242');
const green = color('#005D60');
const orange = color('#FD983D');
const white = color('#FFFFFF');

const css = {
  attentionSeekers: ['meta.function.variable.css', 'variable.css'],
  functions: ['support.function.misc.css'],
  defaults: [
    'punctuation.section.function.begin.bracket.round.css',
    'punctuation.section.function.end.bracket.round.css',
    'support.type.vendored.property-name.css',
  ],
  nonEssentials: ['punctuation.definition.entity.css'],
};

const html = {
  doctype: ['meta.tag.metadata.doctype.html'],
};

const scss = {
  import: ['keyword.control.at-rule.import'],
};

const yaml = {
  nonEssentials: [
    'punctuation.definition.block.sequence.item.yaml',
    'punctuation.definition.sequence.begin.yaml',
    'punctuation.definition.sequence.end.yaml',
    'punctuation.definition.mapping.begin.yaml',
    'punctuation.definition.mapping.end.yaml',
    'keyword.control.flow.block-scalar.folded.yaml',
    'keyword.control.flow.block-scalar.literal.yaml',
    'entity.other.document.begin.yaml',
  ],
  literals: [
    'constant.other.timestamp.yaml',
    'string.unquoted.block.yaml',
    'string.unquoted.plain.in.yaml',
    'string.unquoted.plain.out.yaml',
  ],
  attentionSeekers: [
    'punctuation.definition.anchor.yaml',
    'entity.name.type.anchor.yaml',
    'punctuation.definition.alias.yaml',
    'variable.other.alias.yaml',
  ],
  defaults: ['entity.name.tag.yaml'],
};

const jsts = {
  annotations: [
    'cast.expr',
    'entity.name.type.ts',
    'keyword.operator.type',
    'meta.return.type',
    'meta.type.annotation',
    'meta.type.parameters',
    'support.type',
  ],
  importexport: [
    'constant.language.import-export-all.ts',
    'keyword.control.as',
    'keyword.control.export',
    'meta.import',
  ],
};

const punctuation = [
  'punctuation.section.property-list.begin.bracket.curly',
  'punctuation.section.property-list.end.bracket.curly',
  'punctuation.terminator.rule',
  'punctuation.accessor',
  'punctuation.section.embedded',
  'punctuation.separator',
  'punctuation.terminator.statement',
  'punctuation.definition.binding-pattern',
  'punctuation.support.type.property-name.begin',
  'punctuation.support.type.property-name.end',
];

const nonEssentials = [
  ...css.nonEssentials,
  ...html.doctype,
  ...jsts.annotations,
  ...jsts.importexport,
  ...scss.import,
  ...yaml.nonEssentials,
];

const literals = [
  'constant.language',
  'constant.numeric',
  'string.quoted',
  'string.regexp',
  'string.template',

  ...yaml.literals,
];

const operators = [
  'keyword.operator.arithmetic',
  'keyword.operator.assignment',
  'keyword.operator.comparison',
  'keyword.operator.decrement',
  'keyword.operator.expression',
  'keyword.operator.increment',
  'keyword.operator.list',
  'keyword.operator.logical',
  'keyword.operator.pipe',
  'keyword.operator.relational',
  'keyword.operator.spread',
  'keyword.operator.ternary',
];

const functions = [
  'meta.function-call',
  'new.expr',
  'punctuation.decorator',
  'support.function',

  ...css.functions,
];

const attentionSeekers = [
  'comment',
  'keyword.other.debugger',
  'keyword.other.important',
  'variable.language.super',
  'variable.language.this',
  'variable.other.jsdoc',
  'storage.type.class.jsdoc',

  ...css.attentionSeekers,
  ...yaml.attentionSeekers,
];

/**
 * Tokens that somehow have been overridden by other settings and therefore
 * need to reset.
 */
const defaults = [
  // 'entity.name.function',
  // 'entity.name.type.alias',
  // 'entity.name.type.module',
  // 'keyword.control.flow',
  // 'keyword.operator.new',
  // 'meta.brace.round',
  // 'meta.definition.function',
  // 'punctuation.definition.template-expression',
  // 'support.class',
  // 'support.variable.property',
  // 'constant.language.import-export-all',
  // 'meta.array.literal',
  // 'meta.arrow',
  // 'meta.definition.property',
  // 'meta.objectliteral',
  // 'support.constant',
  // 'support.type.property-name',
  // 'variable.object.property',
  // 'variable.other',
  // 'variable.parameter',
  'entity.name.type',
  // 'entity.name.type.class',
  'meta.definition.function',
  'meta.definition.method',
  'meta.objectliteral',
  'support.variable',
  'variable',

  ...css.defaults,
  ...yaml.defaults,
];

const tokenColor = (name, tokens, color) => ({
  name,
  scope: tokens,
  settings: {
    foreground: color.hex(),
  },
});

const theme = {
  name,
  type,
  colors: {
    /**
     * Scrollbar:
     */
    'scrollbarSlider.background': blue.darken(0.4).hex(),
    'scrollbarSlider.activeBackground': blue.darken(0.4).hex(),
    'scrollbarSlider.hoverBackground': blue.darken(0.4).hex(),

    /**
     * Editor:
     */
    'editor.background': blue.hex(),
    'editor.foreground': blue.lighten(2).hex(),
    'editorLineNumber.foreground': blue.lighten(2).hex(),

    /**
     * Selections:
     */
    'editorCursor.foreground': white.hex(),
    'editor.findMatchBackground': lightBlue.hex(),
    'editor.findMatchHighlightBackground': lightBlue.hex(),
    'editor.lineHighlightBackground': blue.lighten(0.2).hex(),
    'editor.selectionBackground': blue.lighten(0.2).hex(),
    'editor.selectionHighlightBackground': blue.lighten(0.2).hex(),

    /**
     * Input fields:
     */
    'input.background': blue.darken(0.4).hex(),
    'input.border': blue.darken(0.4).hex(),
    focusBorder: blue.darken(0.4).hex(),

    /**
     * Left-side menu:
     */
    'activityBar.background': blue.darken(0.4).hex(),
    'activityBar.foreground': white.hex(),

    /**
     * Left-side bar:
     */
    'sideBar.background': blue.darken(0.2).hex(),
    'sideBarSectionHeader.background': blue.darken(0.4).hex(),

    /**
     * Bottom bar:
     */
    'statusBar.background': blue.darken(0.4).hex(),
    'statusBar.foreground': lightBlue.hex(),
    'statusBarItem.hoverBackground': blue.darken(0.2).hex(),

    /**
     * Top bar:
     */
    'titleBar.activeBackground': blue.darken(0.4).hex(),
    'titleBar.activeForeground': blue.lighten(0.2).hex(),
    'titleBar.inactiveBackground': blue.darken(0.4).hex(),
    'titleBar.inactiveForeground': lightGrey.hex(),

    /**
     * Tab bar:
     */
    'editorGroupHeader.tabsBorder': darkBlue.hex(),
    'editorGroupHeader.tabsBackground': darkBlue.hex(),
    'tab.border': darkBlue.hex(),
    'tab.activeBackground': blue.hex(),
    'tab.inactiveBackground': darkBlue.hex(),
  },
  tokenColors: [
    tokenColor('Punctuation', punctuation, blue.lighten(2)),
    tokenColor('Non-essentials', nonEssentials, blue.lighten(2)),
    // tokenColor('Annotations', jsts.annotations, blue.lighten(2)),
    tokenColor('Literals', literals, turquoise),
    tokenColor('Attention seekers', attentionSeekers, red),
    tokenColor('Operators', operators, orange),
    tokenColor('Function calls', functions, lightBlue),
    tokenColor('Defaults', defaults, lightBlue),
  ],
};

const file = `./themes/${name}.json`;

jsonfile.writeFile(file, theme, { spaces: 2 }, err => {
  console.error(err);
});
