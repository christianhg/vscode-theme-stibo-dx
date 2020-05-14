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
const yellow = color('#D7D75B');

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
     * Reference: https://code.visualstudio.com/api/references/theme-color
     */

    /**
     * Base colors
     */
    // Overall border color for focused elements. This color is only used if not overridden by a component.
    focusBorder: darkBlue.hex(),
    // Overall foreground color. This color is only used if not overridden by a component.
    foreground: lightBlue.hex(),
    // Shadow color of widgets such as Find/Replace inside the editor.
    'widget.shadow': darkBlue.darken(0.2).hex(),
    // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
    'selection.background': darkBlue.darken(0.2).hex(),
    // Foreground color for description text providing additional information, for example for a label.
    descriptionForeground: turquoise.hex(),
    // Overall foreground color for error messages (this color is only used if not overridden by a component).
    errorForeground: red.hex(),
    // The default color for icons in the workbench
    'icon.foreground': turquoise.hex(),

    /**
     * Window border
     * The theme colors for VS Code window border.
     */
    // Border color for the active (focused) window.
    'window.activeBorder': turquoise.hex(),
    // Border color for the inactive (unfocused) windows.
    'window.inactiveBorder': lightBlue.hex(),

    /**
     * Text colors
     * Colors inside a text document, such as the welcome page.
     */
    // Background color for block quotes in text.
    'textBlockQuote.background': darkBlue.hex(),
    // Border color for block quotes in text.
    'textBlockQuote.border': darkBlue.hex(),
    // Background color for code blocks in text.
    'textCodeBlock.background': darkBlue.hex(),
    // Foreground color for links in text when clicked on and on mouse hover.
    'textLink.activeForeground': turquoise.hex(),
    // Foreground color for links in text.
    'textLink.foreground': turquoise.hex(),
    // Foreground color for preformatted text segments.
    'textPreformat.foreground': turquoise.hex(),
    // Color for text separators
    'textSeparator.foreground': turquoise.hex(),

    /**
     * Buttons
     */
    // Button background color.
    'button.background': darkBlue.hex(),
    // Button foreground color.
    'button.foreground': turquoise.hex(),
    // Button background color when hovering.
    'button.hoverBackground': darkBlue.darken(0.2).hex(),
    // Background color of checkbox widget.
    'checkbox.background': darkBlue.hex(),
    // Foreground color of checkbox widget.
    'checkbox.foreground': turquoise.hex(),
    // Border color of checkbox widget.
    'checkbox.border': lightBlue.hex(),

    /**
     * Dropdown control
     * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
     */
    // Dropdown background.
    'dropdown.background': darkBlue.hex(),
    // Dropdown list background.
    'dropdown.listBackground': darkBlue.hex(),
    // Dropdown border.
    'dropdown.border': darkBlue.darken(0.2).hex(),
    // Dropdown foreground
    'dropdown.foreground': lightBlue.hex(),

    /**
     * Input control
     * Colors for input controls such as in the Search view or the Find/Replace dialog.
     */
    // Input box background.
    'input.background': darkBlue.hex(),
    // Input box border.
    'input.border': darkBlue.hex(),
    // Input box foreground.
    'input.foreground': lightBlue.hex(),
    // Input box foreground color for placeholder text.
    'input.placeholderForeground': lightBlue.hex(),
    // Background color of activated options in input fields.
    'inputOption.activeBackground': darkBlue.hex(),
    // Border color of activated options in input fields.
    'inputOption.activeBorder': lightBlue.hex(),
    // Input validation background color for error severity.
    'inputValidation.errorBackground': darkBlue.hex(),
    // Input validation foreground color for error severity.
    'inputValidation.errorForeground': red.hex(),
    // Input validation border color for error severity.
    'inputValidation.errorBorder': red.hex(),
    // Input validation background color for information severity.
    'inputValidation.infoBackground': darkBlue.hex(),
    // Input validation foreground color for information severity.
    'inputValidation.infoForeground': turquoise.hex(),
    // Input validation border color for information severity.
    'inputValidation.infoBorder': turquoise.hex(),
    // Input validation background color for information warning.
    'inputValidation.warningBackground': darkBlue.hex(),
    // Input validation foreground color for warning severity.
    'inputValidation.warningForeground': orange.hex(),
    // Input validation border color for warning severity
    'inputValidation.warningBorder': orange.hex(),

    /**
     * Breadcrumbs
     */
    'breadcrumb.foreground': lightBlue.hex(),
    'breadcrumb.background': darkBlue.hex(),
    'breadcrumb.focusForeground': lightBlue.hex(),
    'breadcrumb.activeSelectionForeground': lightBlue.hex(),
    'breadcrumbPicker.background': darkBlue.hex(),

    /**
     * Scrollbar control
     */
    // Scrollbar slider shadow to indicate that the view is scrolled.
    'scrollbar.shadow': darkBlue.darken(0.2).hex(),
    // Scrollbar slider background color when clicked on.
    'scrollbarSlider.activeBackground': darkBlue.darken(0.4).hex(),
    // Scrollbar slider background color.
    'scrollbarSlider.background': darkBlue.darken(0.2).hex(),
    // Scrollbar slider background color when hovering.
    'scrollbarSlider.hoverBackground': darkBlue.darken(0.4).hex(),

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
    // Color of the current search match.
    'editor.findMatchBackground': '#4DE8D17F',
    // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
    'editor.findMatchHighlightBackground': '#4DE8D17F',
    'editor.lineHighlightBackground': darkBlue.hex(),
    'editor.selectionBackground': darkBlue.darken(0.2).hex(),
    'editor.selectionHighlightBackground': darkBlue.darken(0.2).hex(),

    /**
     * Input fields:
     */
    'input.background': blue.darken(0.4).hex(),
    'input.border': blue.darken(0.4).hex(),
    focusBorder: blue.darken(0.4).hex(),

    /**
     * Activity bar:
     */
    'activityBar.background': darkBlue.darken(0.2).hex(),
    'activityBar.dropBackground': darkBlue.darken(0.4).hex(),
    'activityBar.foreground': turquoise.hex(),
    'activityBar.inactiveForeground': lightBlue.hex(),
    'activityBar.border': darkBlue.hex(),
    'activityBarBadge.background': turquoise.hex(),
    'activityBarBadge.foreground': darkBlue.hex(),
    'activityBar.activeBorder': darkBlue.darken(0.2).hex(),
    'activityBar.activeBackground': darkBlue.darken(0.2).hex(),
    'activityBar.activeFocusBorder': lightBlue.hex(),

    /**
     * Side bar:
     */
    'sideBar.background': darkBlue.hex(),
    'sideBar.foreground': lightBlue.hex(),
    'sideBar.border': darkBlue.hex(),
    'sideBar.dropBackground': darkBlue.darken(0.2).hex(),
    'sideBarTitle.foreground': lightBlue.hex(),
    'sideBarSectionHeader.background': darkBlue.darken(0.2).hex(),
    'sideBarSectionHeader.foreground': lightBlue.hex(),
    'sideBarSectionHeader.border': darkBlue.hex(),

    /**
     * Lists and trees:
     */
    // List/Tree background color for the selected item when the list/tree is active.
    'list.activeSelectionBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground color for the selected item when the list/tree is active.
    'list.activeSelectionForeground': turquoise.hex(),
    // List/Tree drag and drop background when moving items around using the mouse.
    'list.dropBackground': darkBlue.hex(),
    // List/Tree background color for the focused item when the list/tree is active.
    'list.focusBackground': darkBlue.hex(),
    // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
    'list.focusForeground': turquoise.hex(),
    // List/Tree foreground color of the match highlights when searching inside the list/tree.
    'list.highlightForeground': turquoise.hex(),
    // List/Tree background when hovering over items using the mouse.
    'list.hoverBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground when hovering over items using the mouse.
    'list.hoverForeground': turquoise.hex(),
    // List/Tree background color for the selected item when the list/tree is inactive.
    'list.inactiveSelectionBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
    'list.inactiveSelectionForeground': turquoise.hex(),
    // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
    'list.inactiveFocusBackground': darkBlue.hex(),
    // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
    'list.invalidItemForeground': red.hex(),
    // Foreground color of list items containing errors.
    'list.errorForeground': red.hex(),
    // Foreground color of list items containing warnings.
    'list.warningForeground': orange.hex(),
    // List/Tree Filter background color of typed text when searching inside the list/tree.
    'listFilterWidget.background': darkBlue.hex(),
    // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
    'listFilterWidget.outline': darkBlue.hex(),
    // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
    'listFilterWidget.noMatchesOutline': red.hex(),
    // Background color of the filtered matches in lists and trees.
    'list.filterMatchBackground': darkBlue.darken(0.2).hex(),
    // Border color of the filtered matches in lists and trees.
    'list.filterMatchBorder': lightBlue.hex(),
    // Tree Widget's stroke color for indent guides.
    'tree.indentGuidesStroke': darkBlue.hex(),
    // List/Tree foreground color for items that are deemphasized.
    'list.deemphasizedForeground': darkBlue.hex(),

    /**
     * Bottom bar:
     */
    'statusBar.background': darkBlue.darken(0.2).hex(),
    'statusBar.foreground': lightBlue.hex(),
    'statusBarItem.hoverBackground': darkBlue.hex(),

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

    /**
     * Badge
     * Badges are small information labels, for example, search results count.
     */
    // Badge foreground color.
    'badge.foreground': turquoise.hex(),
    // Badge background color.
    'badge.background': darkBlue.hex(),
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
