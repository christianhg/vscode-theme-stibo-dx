const color = require('color');
const jsonfile = require('jsonfile');

const name = 'stibo-dx';
const type = 'dark';

/**
 * Colour pallette:
 * https://color.hailpixel.com/#111750,141A5B,4DE8D1,CFEAF7,FF6242,005D60,FD983D
 */
const darkBlue = color('#111750');
const blue = color('#141A5B');
const turquoise = color('#4DE8D1');
const lightBlue = color('#CFEAF7');
const red = color('#FF6242');
const green = color('#005D60');
const orange = color('#FD983D');
const white = color('#FFFFFF');

const foreground = lightBlue;
const darkForeground = blue.lighten(2);
const background = blue;
const darkBackground = darkBlue;
const contrast = turquoise;

const css = {
  attentionSeekers: ['meta.function.variable.css', 'variable.css'],
  defaults: [
    'punctuation.section.function.begin.bracket.round.css',
    'punctuation.section.function.end.bracket.round.css',
    'support.type.vendored.property-name.css',
  ],
  functions: ['support.function.misc.css'],
  literals: [],
  nonEssentials: ['keyword.control.at-rule.import'],
  punctuation: ['punctuation.definition.entity.css'],
};

const html = {
  attentionSeekers: [],
  default: [],
  functions: [],
  literals: [],
  nonEssentials: ['meta.tag.metadata.doctype.html'],
  punctuation: ['punctuation.definition.tag'],
};

const yaml = {
  attentionSeekers: [
    'punctuation.definition.anchor.yaml',
    'entity.name.type.anchor.yaml',
    'punctuation.definition.alias.yaml',
    'variable.other.alias.yaml',
  ],
  defaults: ['entity.name.tag.yaml'],
  functions: [],
  literals: [
    'constant.other.timestamp.yaml',
    'string.unquoted.block.yaml',
    'string.unquoted.plain.in.yaml',
    'string.unquoted.plain.out.yaml',
  ],
  nonEssentials: [
    'keyword.control.flow.block-scalar.folded.yaml',
    'keyword.control.flow.block-scalar.literal.yaml',
    'entity.other.document.begin.yaml',
  ],
  punctuation: [
    'punctuation.definition.block.sequence.item.yaml',
    'punctuation.definition.sequence.begin.yaml',
    'punctuation.definition.sequence.end.yaml',
    'punctuation.definition.mapping.begin.yaml',
    'punctuation.definition.mapping.end.yaml',
  ],
};

const jsts = {
  attentionSeekers: ['variable.other.jsdoc', 'storage.type.class.jsdoc'],
  defaults: ['storage.type.function'],
  operators: ['keyword.operator.expression.typeof'],
  nonEssentials: [
    // Annotations:
    'cast.expr',
    'entity.name.type.ts',
    'keyword.operator.type',
    'meta.return.type',
    'meta.type.annotation',
    'meta.type.parameters',
    'support.type',

    // import/export:
    'constant.language.import-export-all.ts',
    'keyword.control.as',
    'keyword.control.export',
    'meta.import',

    // Misc:
    'storage.type',
  ],
};

const python = {
  defaults: ['support.type.exception.python'],
};

const shell = {
  defaults: ['storage.type.function.shell'],
};

const punctuation = [
  ...css.punctuation,
  ...html.punctuation,
  ...yaml.punctuation,

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
  ...html.nonEssentials,
  ...jsts.nonEssentials,
  ...yaml.nonEssentials,

  'keyword.control.import',
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
  ...jsts.operators,

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

  ...css.attentionSeekers,
  ...yaml.attentionSeekers,
];

/**
 * Tokens that somehow have been overridden by other settings and therefore
 * need to reset.
 */
const defaults = [
  // // 'entity.name.function',
  // // 'entity.name.type.alias',
  // // 'entity.name.type.module',
  // // 'keyword.control.flow',
  // // 'keyword.operator.new',
  // // 'meta.brace.round',
  // // 'meta.definition.function',
  // // 'punctuation.definition.template-expression',
  // // 'support.class',
  // // 'support.variable.property',
  // // 'constant.language.import-export-all',
  // // 'meta.array.literal',
  // // 'meta.arrow',
  // // 'meta.definition.property',
  // // 'meta.objectliteral',
  // // 'support.constant',
  // // 'support.type.property-name',
  // // 'variable.object.property',
  // // 'variable.other',
  // // 'variable.parameter',
  // 'entity.name.type',
  // // 'entity.name.type.class',
  // 'meta.definition.function',
  // 'meta.definition.method',
  // 'meta.objectliteral',
  // 'support.type.property-name',
  // 'support.variable',
  // 'variable',

  'entity.name.type.module',
  'keyword.control.flow',
  'keyword.operator.new',
  'meta.brace.round',
  'punctuation.definition.template-expression',
  'support.class',
  'constant.language.import-export-all',
  'meta.array.literal',
  'meta.arrow',
  'meta.definition.property',
  'meta.function-call.arguments',
  'meta.objectliteral',
  'punctuation.definition.arguments.begin',
  'punctuation.definition.arguments.end',
  'support.constant',
  'support.type.property-name',
  'variable.object.property',
  'variable.other',

  ...css.defaults,
  ...jsts.defaults,
  ...python.defaults,
  ...shell.defaults,
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
    focusBorder: darkBackground.hex(),
    // Overall foreground color. This color is only used if not overridden by a component.
    foreground: foreground.hex(),
    // Shadow color of widgets such as Find/Replace inside the editor.
    'widget.shadow': darkBlue.darken(0.2).hex(),
    // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
    'selection.background': darkBlue.darken(0.2).hex(),
    // Foreground color for description text providing additional information, for example for a label.
    descriptionForeground: contrast.hex(),
    // Overall foreground color for error messages (this color is only used if not overridden by a component).
    errorForeground: red.hex(),
    // The default color for icons in the workbench
    'icon.foreground': contrast.hex(),

    /**
     * Window border
     * The theme colors for VS Code window border.
     */
    // Border color for the active (focused) window.
    'window.activeBorder': contrast.hex(),
    // Border color for the inactive (unfocused) windows.
    'window.inactiveBorder': foreground.hex(),

    /**
     * Text colors
     * Colors inside a text document, such as the welcome page.
     */
    // Background color for block quotes in text.
    'textBlockQuote.background': darkBackground.hex(),
    // Border color for block quotes in text.
    'textBlockQuote.border': darkBackground.hex(),
    // Background color for code blocks in text.
    'textCodeBlock.background': darkBackground.hex(),
    // Foreground color for links in text when clicked on and on mouse hover.
    'textLink.activeForeground': contrast.hex(),
    // Foreground color for links in text.
    'textLink.foreground': contrast.hex(),
    // Foreground color for preformatted text segments.
    'textPreformat.foreground': contrast.hex(),
    // Color for text separators
    'textSeparator.foreground': contrast.hex(),

    /**
     * Editor widget colors
     * The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
     */
    // Foreground color of editor widgets, such as find/replace.
    'editorWidget.foreground': foreground.hex(),
    // Background color of editor widgets, such as Find/Replace.
    'editorWidget.background': darkBlue.darken(0.2).hex(),
    // Border color of the editor widget unless the widget does not contain a border or defines its own border color.
    'editorWidget.border': contrast.hex(),
    // Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
    'editorWidget.resizeBorder': darkBackground.hex(),
    // Background color of the suggestion widget.
    'editorSuggestWidget.background': darkBackground.hex(),
    // Border color of the suggestion widget.
    'editorSuggestWidget.border': darkBackground.hex(),
    // Foreground color of the suggestion widget.
    'editorSuggestWidget.foreground': foreground.hex(),
    // Color of the match highlights in the suggestion widget.
    'editorSuggestWidget.highlightForeground': contrast.hex(),
    // Background color of the selected entry in the suggestion widget.
    'editorSuggestWidget.selectedBackground': darkBlue.darken(0.2).hex(),
    // Foreground color of the editor hover.
    'editorHoverWidget.foreground': contrast.hex(),
    // Background color of the editor hover.
    'editorHoverWidget.background': darkBlue.darken(0.2).hex(),
    // Border color of the editor hover.
    'editorHoverWidget.border': darkBackground.hex(),
    // Background color of the editor hover status bar.
    'editorHoverWidget.statusBarBackground': darkBackground.hex(),

    /**
     * The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.
     */
    // Exception widget background color.
    // 'debugExceptionWidget.background':
    // Exception widget border color.
    // 'debugExceptionWidget.border':

    /**
     * The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).
     */
    // Editor marker navigation widget background.
    // 'editorMarkerNavigation.background':
    // Editor marker navigation widget error color.
    // 'editorMarkerNavigationError.background':
    // Editor marker navigation widget warning color.
    // 'editorMarkerNavigationWarning.background':
    // Editor marker navigation widget info color
    // 'editorMarkerNavigationInfo.background':

    /**
     * Buttons
     */
    // Button background color.
    'button.background': darkBackground.hex(),
    // Button foreground color.
    'button.foreground': contrast.hex(),
    // Button background color when hovering.
    'button.hoverBackground': darkBlue.darken(0.2).hex(),
    // Background color of checkbox widget.
    'checkbox.background': darkBackground.hex(),
    // Foreground color of checkbox widget.
    'checkbox.foreground': contrast.hex(),
    // Border color of checkbox widget.
    'checkbox.border': foreground.hex(),

    /**
     * Dropdown control
     * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
     */
    // Dropdown background.
    'dropdown.background': darkBackground.hex(),
    // Dropdown list background.
    'dropdown.listBackground': darkBackground.hex(),
    // Dropdown border.
    'dropdown.border': darkBlue.darken(0.2).hex(),
    // Dropdown foreground
    'dropdown.foreground': foreground.hex(),

    /**
     * Input control
     * Colors for input controls such as in the Search view or the Find/Replace dialog.
     */
    // Input box background.
    'input.background': darkBackground.hex(),
    // Input box border.
    'input.border': darkBackground.hex(),
    // Input box foreground.
    'input.foreground': foreground.hex(),
    // Input box foreground color for placeholder text.
    'input.placeholderForeground': foreground.hex(),
    // Background color of activated options in input fields.
    'inputOption.activeBackground': darkBackground.hex(),
    // Border color of activated options in input fields.
    'inputOption.activeBorder': foreground.hex(),
    // Input validation background color for error severity.
    'inputValidation.errorBackground': darkBackground.hex(),
    // Input validation foreground color for error severity.
    'inputValidation.errorForeground': red.hex(),
    // Input validation border color for error severity.
    'inputValidation.errorBorder': red.hex(),
    // Input validation background color for information severity.
    'inputValidation.infoBackground': darkBackground.hex(),
    // Input validation foreground color for information severity.
    'inputValidation.infoForeground': contrast.hex(),
    // Input validation border color for information severity.
    'inputValidation.infoBorder': contrast.hex(),
    // Input validation background color for information warning.
    'inputValidation.warningBackground': darkBackground.hex(),
    // Input validation foreground color for warning severity.
    'inputValidation.warningForeground': orange.hex(),
    // Input validation border color for warning severity
    'inputValidation.warningBorder': orange.hex(),

    /**
     * Breadcrumbs
     */
    'breadcrumb.foreground': foreground.hex(),
    'breadcrumb.background': darkBackground.hex(),
    'breadcrumb.focusForeground': foreground.hex(),
    'breadcrumb.activeSelectionForeground': foreground.hex(),
    'breadcrumbPicker.background': darkBackground.hex(),

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
     * Progress bar
     */
    // Background color of the progress bar shown for long running operations.
    'progressBar.background': contrast.hex(),

    /**
     * Minimap
     * The Minimap shows a minified version of the current file.
     */
    // // Highlight color for matches from search within files.
    // 'minimap.findMatchHighlight': darkBackground.hex(),
    // // Highlight color for the editor selection.
    // 'minimap.selectionHighlight': darkBackground.hex(),
    // // Highlight color for errors within the editor.
    // 'minimap.errorHighlight': darkBackground.hex(),
    // // Highlight color for warnings within the editor.
    // 'minimap.warningHighlight': darkBackground.hex(),
    // // Minimap background color.
    // 'minimap.background': darkBackground.hex(),
    // // Minimap slider background color.
    // 'minimapSlider.background': darkBackground.hex(),
    // // Minimap slider background color when hovering.
    // 'minimapSlider.hoverBackground': darkBackground.hex(),
    // // Minimap slider background color when clicked on.
    // 'minimapSlider.activeBackground': darkBackground.hex(),
    // // Minimap gutter color for added content.
    // 'minimapGutter.addedBackground': darkBackground.hex(),
    // // Minimap gutter color for modified content.
    // 'minimapGutter.modifiedBackground': darkBackground.hex(),
    // // Minimap gutter color for deleted content
    // 'minimapGutter.deletedBackground': darkBackground.hex(),

    /**
     * Editor Groups & Tabs
     * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
     */
    // Color to separate multiple editor groups from each other.
    'editorGroup.border': darkBackground.hex(),
    // Background color when dragging editors around.
    'editorGroup.dropBackground': background.lighten(0.2).hex(),
    // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
    'editorGroupHeader.noTabsBackground': darkBackground.hex(),
    // Background color of the Tabs container.
    'editorGroupHeader.tabsBackground': darkBackground.hex(),
    // Border color below the editor tabs control when tabs are enabled.
    'editorGroupHeader.tabsBorder': blue.hex(),
    // Border color between editor group header and editor (below breadcrumbs if enabled).
    'editorGroupHeader.border': blue.hex(),
    // Background color of an empty editor group.
    'editorGroup.emptyBackground': darkBackground.hex(),
    // Border color of an empty editor group that is focused.
    'editorGroup.focusedEmptyBorder': darkBackground.hex(),
    // Active Tab background color in an active group.
    'tab.activeBackground': blue.hex(),
    // Active Tab background color in an inactive editor group.
    'tab.unfocusedActiveBackground': blue.hex(),
    // Active Tab foreground color in an active group.
    'tab.activeForeground': contrast.hex(),
    // Border to separate Tabs from each other.
    'tab.border': blue.hex(),
    // Bottom border for the active tab.
    'tab.activeBorder': blue.hex(),
    // Bottom border for the active tab in an inactive editor group.
    'tab.unfocusedActiveBorder': background.hex(),
    // Top border for the active tab.
    'tab.activeBorderTop': contrast.hex(),
    // Top border for the active tab in an inactive editor group
    'tab.unfocusedActiveBorderTop': darkBackground.hex(),
    // Inactive Tab background color.
    'tab.inactiveBackground': darkBackground.hex(),
    // Inactive Tab background color in an unfocused group
    'tab.unfocusedInactiveBackground': darkBackground.hex(),
    // Inactive Tab foreground color in an active group.
    'tab.inactiveForeground': foreground.hex(),
    // Active tab foreground color in an inactive editor group.
    'tab.unfocusedActiveForeground': foreground.hex(),
    // Inactive tab foreground color in an inactive editor group.
    'tab.unfocusedInactiveForeground': foreground.hex(),
    // Tab background color when hovering
    'tab.hoverBackground': blue.hex(),
    // Tab background color in an unfocused group when hovering
    'tab.unfocusedHoverBackground': darkBackground.hex(),
    // Tab foreground color when hovering
    'tab.hoverForeground': contrast.hex(),
    // Tab foreground color in an unfocused group when hovering
    'tab.unfocusedHoverForeground': contrast.hex(),
    // Border to highlight tabs when hovering
    'tab.hoverBorder': blue.hex(),
    // Border to highlight tabs in an unfocused group when hovering
    'tab.unfocusedHoverBorder': darkBackground.hex(),
    // Border on the top of modified (dirty) active tabs in an active group.
    'tab.activeModifiedBorder': darkBackground.hex(),
    // Border on the top of modified (dirty) inactive tabs in an active group.
    'tab.inactiveModifiedBorder': darkBackground.hex(),
    // Border on the top of modified (dirty) active tabs in an unfocused group.
    'tab.unfocusedActiveModifiedBorder': darkBackground.hex(),
    // Border on the top of modified (dirty) inactive tabs in an unfocused group.
    'tab.unfocusedInactiveModifiedBorder': darkBackground.hex(),
    // Background color of the editor pane visible on the left and right side of the 'centered editor layout.
    'editorPane.background': darkBackground.hex(),

    /**
     * Editor colors:
     */
    'editor.background': background.hex(),
    'editor.foreground': foreground.hex(),
    'editorLineNumber.foreground': darkForeground.hex(),
    // Color of the active editor line number.
    'editorLineNumber.activeForeground': contrast.hex(),
    // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
    'editorCursor.background': darkBackground.hex(),
    // Color of the editor cursor.
    'editorCursor.foreground': contrast.hex(),
    'editor.selectionBackground': darkBlue.darken(0.2).hex(),
    // Color of the selected text for high contrast.
    // 'editor.selectionForeground':
    'editor.selectionHighlightBackground': darkBlue.darken(0.2).hex(),
    // Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
    // 'editor.inactiveSelectionBackground':
    // Border color for regions with the same content as the selection.
    // 'editor.selectionHighlightBorder':

    // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
    // 'editor.wordHighlightBackground':
    // Border color of a symbol during read-access, for example when reading a variable.
    // 'editor.wordHighlightBorder':
    // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
    // 'editor.wordHighlightStrongBackground':
    // Border color of a symbol during write-access, for example when writing to a variable.
    // 'editor.wordHighlightStrongBorder':

    // Color of the current search match.
    'editor.findMatchBackground': '#4DE8D17F',
    // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
    'editor.findMatchHighlightBackground': '#4DE8D17F',
    // Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
    // 'editor.findRangeHighlightBackground':
    // Border color of the current search match.
    // 'editor.findMatchBorder':
    // Border color of the other search matches.
    // 'editor.findMatchHighlightBorder':
    // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
    // 'editor.findRangeHighlightBorder':

    /**
     * Lightbulb
     */
    // The color used for the lightbulb actions icon.
    'editorLightBulb.foreground': contrast.hex(),
    // The color used for the lightbulb auto fix actions icon.
    'editorLightBulbAutoFix.foreground': contrast.hex(),
    /**
     * Bracket matchers
     */
    // Background color behind matching brackets.
    // 'editorBracketMatch.background': darkBackground.hex(),
    // Color for matching brackets boxes.
    'editorBracketMatch.border': darkForeground.hex(),

    'editor.lineHighlightBackground': darkBackground.hex(),

    /**
     * Errors and warnings
     */
    // Foreground color of error squiggles in the editor.
    'editorError.foreground': red.hex(),
    // Border color of error boxes in the editor.
    // 'editorError.border': red.hex(),
    // Foreground color of warning squiggles in the editor.
    'editorWarning.foreground': orange.hex(),
    // Border color of warning boxes in the editor.
    // 'editorWarning.border': orange.hex(),
    // Foreground color of info squiggles in the editor.
    'editorInfo.foreground': foreground.hex(),
    // Border color of info boxes in the editor.
    // 'editorInfo.border': foreground.hex(),
    // Foreground color of hints in the editor.
    'editorHint.foreground': contrast.hex(),
    // Border color of hint boxes in the editor.
    'editorHint.border': contrast.hex(),
    // The color used for the problems error icon.
    'problemsErrorIcon.foreground': red.hex(),
    // The color used for the problems warning icon.
    'problemsWarningIcon.foreground': orange.hex(),
    // The color used for the problems info icon.
    'problemsInfoIcon.foreground': foreground.hex(),

    /**
     * The gutter contains the glyph margins and the line numbers:
     */
    // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
    'editorGutter.background': blue.hex(),
    // Editor gutter background color for lines that are modified.
    'editorGutter.modifiedBackground': orange.hex(),
    // Editor gutter background color for lines that are added.
    'editorGutter.addedBackground': contrast.hex(),
    // Editor gutter background color for lines that are deleted.
    'editorGutter.deletedBackground': red.hex(),
    // Editor gutter decoration color for commenting ranges.
    // 'editorGutter.commentRangeForeground': darkBackground.hex(),
    // Color of the folding control in the editor gutter.
    'editorGutter.foldingControlForeground': contrast.hex(),

    /**
     * Diff editor colors
     * For coloring inserted and removed text, use either a background or a border color but not both.
     */
    // Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
    // 'diffEditor.insertedTextBackground': darkBackground.hex(),
    // Outline color for the text that got inserted.
    // 'diffEditor.insertedTextBorder': darkBackground.hex(),
    // Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
    // 'diffEditor.removedTextBackground': red.hex(),
    // Outline color for text that got removed.
    // 'diffEditor.removedTextBorder': darkBackground.hex(),
    // Border color between the two text editors.
    // 'diffEditor.border': darkBackground.hex(),
    // Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views
    // 'diffEditor.diagonalFill': darkBackground.hex(),

    /**
     * Input fields:
     */
    'input.background': blue.darken(0.4).hex(),
    'input.border': blue.darken(0.4).hex(),
    focusBorder: blue.darken(0.4).hex(),

    /**
     * Activity bar:
     */
    'activityBar.background': darkBackground.hex(),
    'activityBar.dropBackground': background.hex(),
    'activityBar.foreground': contrast.hex(),
    'activityBar.inactiveForeground': foreground.hex(),
    'activityBar.border': background.hex(),
    'activityBarBadge.background': contrast.hex(),
    'activityBarBadge.foreground': blue.hex(),
    'activityBar.activeBorder': darkBackground.hex(),
    'activityBar.activeBackground': darkBackground.hex(),
    'activityBar.activeFocusBorder': contrast.hex(),

    /**
     * Side bar:
     */
    'sideBar.background': darkBackground.hex(),
    'sideBar.foreground': foreground.hex(),
    'sideBar.border': darkBackground.hex(),
    'sideBar.dropBackground': darkBlue.darken(0.2).hex(),
    'sideBarTitle.foreground': foreground.hex(),
    'sideBarSectionHeader.background': darkBlue.darken(0.2).hex(),
    'sideBarSectionHeader.foreground': foreground.hex(),
    'sideBarSectionHeader.border': darkBackground.hex(),

    /**
     * Lists and trees:
     */
    // List/Tree background color for the selected item when the list/tree is active.
    'list.activeSelectionBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground color for the selected item when the list/tree is active.
    'list.activeSelectionForeground': contrast.hex(),
    // List/Tree drag and drop background when moving items around using the mouse.
    'list.dropBackground': darkBackground.hex(),
    // List/Tree background color for the focused item when the list/tree is active.
    'list.focusBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
    'list.focusForeground': contrast.hex(),
    // List/Tree foreground color of the match highlights when searching inside the list/tree.
    'list.highlightForeground': contrast.hex(),
    // List/Tree background when hovering over items using the mouse.
    'list.hoverBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground when hovering over items using the mouse.
    'list.hoverForeground': contrast.hex(),
    // List/Tree background color for the selected item when the list/tree is inactive.
    'list.inactiveSelectionBackground': darkBlue.darken(0.2).hex(),
    // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
    'list.inactiveSelectionForeground': contrast.hex(),
    // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
    'list.inactiveFocusBackground': darkBackground.hex(),
    // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
    'list.invalidItemForeground': red.hex(),
    // Foreground color of list items containing errors.
    'list.errorForeground': red.hex(),
    // Foreground color of list items containing warnings.
    'list.warningForeground': orange.hex(),
    // List/Tree Filter background color of typed text when searching inside the list/tree.
    'listFilterWidget.background': darkBackground.hex(),
    // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
    'listFilterWidget.outline': darkBackground.hex(),
    // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
    'listFilterWidget.noMatchesOutline': red.hex(),
    // Background color of the filtered matches in lists and trees.
    'list.filterMatchBackground': darkBlue.darken(0.2).hex(),
    // Border color of the filtered matches in lists and trees.
    'list.filterMatchBorder': foreground.hex(),
    // Tree Widget's stroke color for indent guides.
    'tree.indentGuidesStroke': darkBackground.hex(),
    // List/Tree foreground color for items that are deemphasized.
    'list.deemphasizedForeground': darkBackground.hex(),

    /**
     * Status Bar colors
     * The Status Bar is shown in the bottom of the workbench.
     */
    // 'Standard Status Bar background color.
    'statusBar.background': darkBackground.hex(),
    // 'Status Bar foreground color.
    'statusBar.foreground': foreground.hex(),
    // 'Status Bar border color separating the Status Bar and editor.
    'statusBar.border': background.hex(),
    // 'Status Bar background color when a program is being debugged.
    'statusBar.debuggingBackground': darkBackground.hex(),
    // 'Status Bar foreground color when a program is being debugged.
    'statusBar.debuggingForeground': foreground.hex(),
    // 'Status Bar border color separating the Status Bar and editor when a program is being debugged.
    'statusBar.debuggingBorder': red.hex(),
    // 'Status Bar foreground color when no folder is opened.
    'statusBar.noFolderForeground': darkBackground.hex(),
    // 'Status Bar background color when no folder is opened.
    'statusBar.noFolderBackground': foreground.hex(),
    // 'Status Bar border color separating the Status Bar and editor when no folder is opened.
    'statusBar.noFolderBorder': blue.hex(),
    // 'Status Bar item background color when clicking.
    'statusBarItem.activeBackground': background.hex(),
    // 'Status Bar item background color when hovering.
    'statusBarItem.hoverBackground': background.hex(),
    // 'Status Bar prominent items foreground color.
    'statusBarItem.prominentForeground': contrast.hex(),
    // 'Status Bar prominent items background color.
    'statusBarItem.prominentBackground': background.hex(),
    // 'Status Bar prominent items background color when hovering.
    'statusBarItem.prominentHoverBackground': background.hex(),
    // 'Background color for the remote indicator on the status bar.
    'statusBarItem.remoteBackground': darkBackground.hex(),
    // 'Foreground color for the remote indicator on the status bar.
    'statusBarItem.remoteForeground': foreground.hex(),

    /**
     * Title bar:
     */
    'titleBar.activeBackground': darkBlue.darken(0.2).hex(),
    'titleBar.activeForeground': contrast.hex(),
    'titleBar.inactiveBackground': darkBlue.darken(0.2).hex(),
    'titleBar.inactiveForeground': foreground.hex(),
    'titleBar.border': darkBackground.hex(),

    /**
     * Badge
     * Badges are small information labels, for example, search results count.
     */
    // Badge foreground color.
    'badge.foreground': contrast.hex(),
    // Badge background color.
    'badge.background': darkBackground.hex(),

    /**
     * Extensions
     */
    // Extension view button foreground color (for example Install button).
    'extensionButton.prominentForeground': blue.hex(),
    // Extension view button background color.
    'extensionButton.prominentBackground': contrast.hex(),
    // Extension view button background hover color.
    'extensionButton.prominentHoverBackground': turquoise.darken(0.2).hex(),
    // Background color for the remote badge in the extensions view.
    'extensionBadge.remoteBackground': contrast.hex(),
    // Foreground color for the remote badge in the extensions view.
    'extensionBadge.remoteForeground': blue.hex(),

    /**
     * Quick picker
     */
    // Quick picker (Quick Open) color for grouping borders.
    'pickerGroup.border': darkBackground.hex(),
    // Quick picker (Quick Open) color for grouping labels.
    'pickerGroup.foreground': foreground.hex(),
    // Quick input background color. The quick input widget is the container for views like the color theme picker.
    'quickInput.background': darkBackground.hex(),
    // Quick input foreground color. The quick input widget is the container for views like the color theme picker.
    'quickInput.foreground': foreground.hex(),
    // Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette
    'quickInputTitle.background': darkBackground.hex(),

    /**
     * Peek view colors
     * Peek views are used to show references and declarations as a view inside the editor.
     */
    // Color of the peek view borders and arrow.
    'peekView.border': contrast.hex(),
    // Background color of the peek view editor.
    'peekViewEditor.background': darkBackground.hex(),
    // Background color of the gutter in the peek view editor.
    'peekViewEditorGutter.background': darkBackground.hex(),
    // Match highlight color in the peek view editor.
    'peekViewEditor.matchHighlightBackground': darkBlue.darken(0.2).hex(),
    // Match highlight border color in the peek view editor.
    'peekViewEditor.matchHighlightBorder': darkBlue.darken(0.2).hex(),
    // Background color of the peek view result list.
    'peekViewResult.background': darkBlue.darken(0.2).hex(),
    // Foreground color for file nodes in the peek view result list.
    'peekViewResult.fileForeground': foreground.hex(),
    // Foreground color for line nodes in the peek view result list.
    'peekViewResult.lineForeground': foreground.hex(),
    // Match highlight color in the peek view result list.
    'peekViewResult.matchHighlightBackground': darkBackground.hex(),
    // Background color of the selected entry in the peek view result list.
    'peekViewResult.selectionBackground': darkBlue.darken(0.4).hex(),
    // Foreground color of the selected entry in the peek view result list.
    'peekViewResult.selectionForeground': contrast.hex(),
    // Background color of the peek view title area.
    'peekViewTitle.background': darkBackground.hex(),
    // Color of the peek view title info.
    'peekViewTitleDescription.foreground': foreground.hex(),
    // Color of the peek view title
    'peekViewTitleLabel.foreground': foreground.hex(),

    /**
     * Panel colors
     * Panels are shown below the editor area and contain views like Output and Integrated Terminal.
     */
    // Panel background color.
    'panel.background': darkBackground.darken(0.2).hex(),
    // Panel border color to separate the panel from the editor.
    'panel.border': contrast.hex(),
    // Drag and drop feedback color for the panel title items. The color should have transparency so that the panel entries can still shine through.
    'panel.dropBackground': darkBackground.darken(0.2).hex(),
    // Border color for the active panel title.
    'panelTitle.activeBorder': background.hex(),
    // Title color for the active panel.
    'panelTitle.activeForeground': contrast.hex(),
    // Title color for the inactive panel.
    'panelTitle.inactiveForeground': foreground.hex(),
    // Input box border for inputs in the panel.
    'panelInput.border': background.hex(),
  },
  tokenColors: [
    tokenColor('Punctuation', punctuation, darkForeground),
    tokenColor('Non-essentials', nonEssentials, darkForeground),
    tokenColor('Literals', literals, contrast),
    tokenColor('Attention seekers', attentionSeekers, red),
    tokenColor('Operators', operators, darkForeground),
    tokenColor('Function calls', functions, orange),
    tokenColor('Defaults', defaults, foreground),
  ],
};

const file = `./themes/${name}.json`;

jsonfile.writeFile(file, theme, { spaces: 2 }, err => {
  console.error(err);
});
