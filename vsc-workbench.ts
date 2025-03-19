export type WorkbenchColors = {
	/**
	 * Overall foreground color. This color is only used if not overridden by a component.
	 */
	foreground?: string
	/**
	 * Overall foreground color for error messages. This color is only used if not overridden by a component.
	 */
	errorForeground?: string
	/**
	 * Foreground color for description text providing additional information, for example for a label.
	 */
	descriptionForeground?: string
	/**
	 * The default color for icons in the workbench.
	 */
	'icon.foreground'?: string
	/**
	 * Overall border color for focused elements. This color is only used if not overridden by a component.
	 */
	focusBorder?: string
	/**
	 * An extra border around elements to separate them from others for greater contrast.
	 */
	contrastBorder?: string
	/**
	 * An extra border around active elements to separate them from others for greater contrast.
	 */
	contrastActiveBorder?: string
	/**
	 * The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
	 */
	'selection.background'?: string
	/**
	 * Color for text separators.
	 */
	'textSeparator.foreground'?: string
	/**
	 * Foreground color for links in text.
	 */
	'textLink.foreground'?: string
	/**
	 * Foreground color for links in text when clicked on and on mouse hover.
	 */
	'textLink.activeForeground'?: string
	/**
	 * Foreground color for preformatted text segments.
	 */
	'textPreformat.foreground'?: string
	/**
	 * Background color for block quotes in text.
	 */
	'textBlockQuote.background'?: string
	/**
	 * Border color for block quotes in text.
	 */
	'textBlockQuote.border'?: string
	/**
	 * Background color for code blocks in text.
	 */
	'textCodeBlock.background'?: string
	/**
	 * Shadow color of widgets such as find/replace inside the editor.
	 */
	'widget.shadow'?: string
	/**
	 * Input box background.
	 */
	'input.background'?: string
	/**
	 * Input box foreground.
	 */
	'input.foreground'?: string
	/**
	 * Input box border.
	 */
	'input.border'?: string
	/**
	 * Border color of activated options in input fields.
	 */
	'inputOption.activeBorder'?: string
	/**
	 * Background color of activated options in input fields.
	 */
	'inputOption.activeBackground'?: string
	/**
	 * Foreground color of activated options in input fields.
	 */
	'inputOption.activeForeground'?: string
	/**
	 * Input box foreground color for placeholder text.
	 */
	'input.placeholderForeground'?: string
	/**
	 * Input validation background color for information severity.
	 */
	'inputValidation.infoBackground'?: string
	/**
	 * Input validation foreground color for information severity.
	 */
	'inputValidation.infoForeground'?: string
	/**
	 * Input validation border color for information severity.
	 */
	'inputValidation.infoBorder'?: string
	/**
	 * Input validation background color for warning severity.
	 */
	'inputValidation.warningBackground'?: string
	/**
	 * Input validation foreground color for warning severity.
	 */
	'inputValidation.warningForeground'?: string
	/**
	 * Input validation border color for warning severity.
	 */
	'inputValidation.warningBorder'?: string
	/**
	 * Input validation background color for error severity.
	 */
	'inputValidation.errorBackground'?: string
	/**
	 * Input validation foreground color for error severity.
	 */
	'inputValidation.errorForeground'?: string
	/**
	 * Input validation border color for error severity.
	 */
	'inputValidation.errorBorder'?: string
	/**
	 * Dropdown background.
	 */
	'dropdown.background'?: string
	/**
	 * Dropdown list background.
	 */
	'dropdown.listBackground'?: string
	/**
	 * Dropdown foreground.
	 */
	'dropdown.foreground'?: string
	/**
	 * Dropdown border.
	 */
	'dropdown.border'?: string
	/**
	 * Background color of checkbox widget.
	 */
	'checkbox.background'?: string
	/**
	 * Foreground color of checkbox widget.
	 */
	'checkbox.foreground'?: string
	/**
	 * Border color of checkbox widget.
	 */
	'checkbox.border'?: string
	/**
	 * Button foreground color.
	 */
	'button.foreground'?: string
	/**
	 * Button background color.
	 */
	'button.background'?: string
	/**
	 * Button background color when hovering.
	 */
	'button.hoverBackground'?: string
	/**
	 * Secondary button foreground color.
	 */
	'button.secondaryForeground'?: string
	/**
	 * Secondary button background color.
	 */
	'button.secondaryBackground'?: string
	/**
	 * Secondary button background color when hovering.
	 */
	'button.secondaryHoverBackground'?: string
	/**
	 * Badge background color. Badges are small information labels, e.g. for search results count.
	 */
	'badge.background'?: string
	/**
	 * Badge foreground color. Badges are small information labels, e.g. for search results count.
	 */
	'badge.foreground'?: string
	/**
	 * Scrollbar shadow to indicate that the view is scrolled.
	 */
	'scrollbar.shadow'?: string
	/**
	 * Scrollbar slider background color.
	 */
	'scrollbarSlider.background'?: string
	/**
	 * Scrollbar slider background color when hovering.
	 */
	'scrollbarSlider.hoverBackground'?: string
	/**
	 * Scrollbar slider background color when clicked on.
	 */
	'scrollbarSlider.activeBackground'?: string
	/**
	 * Background color of the progress bar that can show for long running operations.
	 */
	'progressBar.background'?: string
	/**
	 * Foreground color of error squigglies in the editor.
	 */
	'editorError.foreground'?: string
	/**
	 * Border color of error boxes in the editor.
	 */
	'editorError.border'?: string
	/**
	 * Foreground color of warning squigglies in the editor.
	 */
	'editorWarning.foreground'?: string
	/**
	 * Border color of warning boxes in the editor.
	 */
	'editorWarning.border'?: string
	/**
	 * Foreground color of info squigglies in the editor.
	 */
	'editorInfo.foreground'?: string
	/**
	 * Border color of info boxes in the editor.
	 */
	'editorInfo.border'?: string
	/**
	 * Foreground color of hint squigglies in the editor.
	 */
	'editorHint.foreground'?: string
	/**
	 * Border color of hint boxes in the editor.
	 */
	'editorHint.border'?: string
	/**
	 * Editor background color.
	 */
	'editor.background'?: string
	/**
	 * Editor default foreground color.
	 */
	'editor.foreground'?: string
	/**
	 * Background color of editor widgets, such as find/replace.
	 */
	'editorWidget.background'?: string
	/**
	 * Foreground color of editor widgets, such as find/replace.
	 */
	'editorWidget.foreground'?: string
	/**
	 * Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
	 */
	'editorWidget.border'?: string
	/**
	 * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
	 */
	'editorWidget.resizeBorder'?: string
	/**
	 * Quick picker background color. The quick picker widget is the container for pickers like the command palette.
	 */
	'quickInput.background'?: string
	/**
	 * Quick picker foreground color. The quick picker widget is the container for pickers like the command palette.
	 */
	'quickInput.foreground'?: string
	/**
	 * Quick picker title background color. The quick picker widget is the container for pickers like the command palette.
	 */
	'quickInputTitle.background'?: string
	/**
	 * Quick picker color for grouping labels.
	 */
	'pickerGroup.foreground'?: string
	/**
	 * Quick picker color for grouping borders.
	 */
	'pickerGroup.border'?: string
	/**
	 * Color of the editor selection.
	 */
	'editor.selectionBackground'?: string
	/**
	 * Color of the selected text for high contrast.
	 */
	'editor.selectionForeground'?: string
	/**
	 * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.inactiveSelectionBackground'?: string
	/**
	 * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.selectionHighlightBackground'?: string
	/**
	 * Border color for regions with the same content as the selection.
	 */
	'editor.selectionHighlightBorder'?: string
	/**
	 * Color of the current search match.
	 */
	'editor.findMatchBackground'?: string
	/**
	 * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.findMatchHighlightBackground'?: string
	/**
	 * Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.findRangeHighlightBackground'?: string
	/**
	 * Border color of the current search match.
	 */
	'editor.findMatchBorder'?: string
	/**
	 * Border color of the other search matches.
	 */
	'editor.findMatchHighlightBorder'?: string
	/**
	 * Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.findRangeHighlightBorder'?: string
	/**
	 * Color of the Search Editor query matches.
	 */
	'searchEditor.findMatchBackground'?: string
	/**
	 * Border color of the Search Editor query matches.
	 */
	'searchEditor.findMatchBorder'?: string
	/**
	 * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.hoverHighlightBackground'?: string
	/**
	 * Background color of the editor hover.
	 */
	'editorHoverWidget.background'?: string
	/**
	 * Foreground color of the editor hover.
	 */
	'editorHoverWidget.foreground'?: string
	/**
	 * Border color of the editor hover.
	 */
	'editorHoverWidget.border'?: string
	/**
	 * Background color of the editor hover status bar.
	 */
	'editorHoverWidget.statusBarBackground'?: string
	/**
	 * Color of active links.
	 */
	'editorLink.activeForeground'?: string
	/**
	 * The color used for the lightbulb actions icon.
	 */
	'editorLightBulb.foreground'?: string
	/**
	 * The color used for the lightbulb auto fix actions icon.
	 */
	'editorLightBulbAutoFix.foreground'?: string
	/**
	 * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
	 */
	'diffEditor.insertedTextBackground'?: string
	/**
	 * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
	 */
	'diffEditor.removedTextBackground'?: string
	/**
	 * Outline color for the text that got inserted.
	 */
	'diffEditor.insertedTextBorder'?: string
	/**
	 * Outline color for text that got removed.
	 */
	'diffEditor.removedTextBorder'?: string
	/**
	 * Border color between the two text editors.
	 */
	'diffEditor.border'?: string
	/**
	 * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
	 */
	'diffEditor.diagonalFill'?: string
	/**
	 * List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.focusBackground'?: string
	/**
	 * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.focusForeground'?: string
	/**
	 * List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.activeSelectionBackground'?: string
	/**
	 * List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.activeSelectionForeground'?: string
	/**
	 * List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.inactiveSelectionBackground'?: string
	/**
	 * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.inactiveSelectionForeground'?: string
	/**
	 * List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
	 */
	'list.inactiveFocusBackground'?: string
	/**
	 * List/Tree background when hovering over items using the mouse.
	 */
	'list.hoverBackground'?: string
	/**
	 * List/Tree foreground when hovering over items using the mouse.
	 */
	'list.hoverForeground'?: string
	/**
	 * List/Tree drag and drop background when moving items around using the mouse.
	 */
	'list.dropBackground'?: string
	/**
	 * List/Tree foreground color of the match highlights when searching inside the list/tree.
	 */
	'list.highlightForeground'?: string
	/**
	 * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
	 */
	'list.invalidItemForeground'?: string
	/**
	 * Foreground color of list items containing errors.
	 */
	'list.errorForeground'?: string
	/**
	 * Foreground color of list items containing warnings.
	 */
	'list.warningForeground'?: string
	/**
	 * Background color of the type filter widget in lists and trees.
	 */
	'listFilterWidget.background'?: string
	/**
	 * Outline color of the type filter widget in lists and trees.
	 */
	'listFilterWidget.outline'?: string
	/**
	 * Outline color of the type filter widget in lists and trees, when there are no matches.
	 */
	'listFilterWidget.noMatchesOutline'?: string
	/**
	 * Background color of the filtered match.
	 */
	'list.filterMatchBackground'?: string
	/**
	 * Border color of the filtered match.
	 */
	'list.filterMatchBorder'?: string
	/**
	 * Tree stroke color for the indentation guides.
	 */
	'tree.indentGuidesStroke'?: string
	/**
	 * List/Tree foreground color for items that are deemphasized.
	 */
	'list.deemphasizedForeground'?: string
	/**
	 * Border color of menus.
	 */
	'menu.border'?: string
	/**
	 * Foreground color of menu items.
	 */
	'menu.foreground'?: string
	/**
	 * Background color of menu items.
	 */
	'menu.background'?: string
	/**
	 * Foreground color of the selected menu item in menus.
	 */
	'menu.selectionForeground'?: string
	/**
	 * Background color of the selected menu item in menus.
	 */
	'menu.selectionBackground'?: string
	/**
	 * Border color of the selected menu item in menus.
	 */
	'menu.selectionBorder'?: string
	/**
	 * Color of a separator menu item in menus.
	 */
	'menu.separatorBackground'?: string
	/**
	 * Highlight background color of a snippet tabstop.
	 */
	'editor.snippetTabstopHighlightBackground'?: string
	/**
	 * Highlight border color of a snippet tabstop.
	 */
	'editor.snippetTabstopHighlightBorder'?: string
	/**
	 * Highlight background color of the final tabstop of a snippet.
	 */
	'editor.snippetFinalTabstopHighlightBackground'?: string
	/**
	 * Highlight border color of the final stabstop of a snippet.
	 */
	'editor.snippetFinalTabstopHighlightBorder'?: string
	/**
	 * Color of focused breadcrumb items.
	 */
	'breadcrumb.foreground'?: string
	/**
	 * Background color of breadcrumb items.
	 */
	'breadcrumb.background'?: string
	/**
	 * Color of focused breadcrumb items.
	 */
	'breadcrumb.focusForeground'?: string
	/**
	 * Color of selected breadcrumb items.
	 */
	'breadcrumb.activeSelectionForeground'?: string
	/**
	 * Background color of breadcrumb item picker.
	 */
	'breadcrumbPicker.background'?: string
	/**
	 * Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.currentHeaderBackground'?: string
	/**
	 * Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.currentContentBackground'?: string
	/**
	 * Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.incomingHeaderBackground'?: string
	/**
	 * Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.incomingContentBackground'?: string
	/**
	 * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.commonHeaderBackground'?: string
	/**
	 * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
	 */
	'merge.commonContentBackground'?: string
	/**
	 * Border color on headers and the splitter in inline merge-conflicts.
	 */
	'merge.border'?: string
	/**
	 * Current overview ruler foreground for inline merge-conflicts.
	 */
	'editorOverviewRuler.currentContentForeground'?: string
	/**
	 * Incoming overview ruler foreground for inline merge-conflicts.
	 */
	'editorOverviewRuler.incomingContentForeground'?: string
	/**
	 * Common ancestor overview ruler foreground for inline merge-conflicts.
	 */
	'editorOverviewRuler.commonContentForeground'?: string
	/**
	 * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.findMatchForeground'?: string
	/**
	 * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.selectionHighlightForeground'?: string
	/**
	 * Minimap marker color for find matches.
	 */
	'minimap.findMatchHighlight'?: string
	/**
	 * Minimap marker color for the editor selection.
	 */
	'minimap.selectionHighlight'?: string
	/**
	 * Minimap marker color for errors.
	 */
	'minimap.errorHighlight'?: string
	/**
	 * Minimap marker color for warnings.
	 */
	'minimap.warningHighlight'?: string
	/**
	 * Minimap background color.
	 */
	'minimap.background'?: string
	/**
	 * Minimap slider background color.
	 */
	'minimapSlider.background'?: string
	/**
	 * Minimap slider background color when hovering.
	 */
	'minimapSlider.hoverBackground'?: string
	/**
	 * Minimap slider background color when clicked on.
	 */
	'minimapSlider.activeBackground'?: string
	/**
	 * The color used for the problems error icon.
	 */
	'problemsErrorIcon.foreground'?: string
	/**
	 * The color used for the problems warning icon.
	 */
	'problemsWarningIcon.foreground'?: string
	/**
	 * The color used for the problems info icon.
	 */
	'problemsInfoIcon.foreground'?: string
	/**
	 * Background color for the highlight of line at the cursor position.
	 */
	'editor.lineHighlightBackground'?: string
	/**
	 * Background color for the border around the line at the cursor position.
	 */
	'editor.lineHighlightBorder'?: string
	/**
	 * Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.rangeHighlightBackground'?: string
	/**
	 * Background color of the border around highlighted ranges.
	 */
	'editor.rangeHighlightBorder'?: string
	/**
	 * Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.symbolHighlightBackground'?: string
	/**
	 * Background color of the border around highlighted symbols.
	 */
	'editor.symbolHighlightBorder'?: string
	/**
	 * Color of the editor cursor.
	 */
	'editorCursor.foreground'?: string
	/**
	 * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
	 */
	'editorCursor.background'?: string
	/**
	 * Color of whitespace characters in the editor.
	 */
	'editorWhitespace.foreground'?: string
	/**
	 * Color of the editor indentation guides.
	 */
	'editorIndentGuide.background'?: string
	/**
	 * Color of the active editor indentation guides.
	 */
	'editorIndentGuide.activeBackground'?: string
	/**
	 * Color of editor line numbers.
	 */
	'editorLineNumber.foreground'?: string
	/**
	 * Color of editor active line number
	 */
	'editorActiveLineNumber.foreground'?: string
	/**
	 * Color of editor active line number
	 */
	'editorLineNumber.activeForeground'?: string
	/**
	 * Color of the editor rulers.
	 */
	'editorRuler.foreground'?: string
	/**
	 * Foreground color of editor CodeLens
	 */
	'editorCodeLens.foreground'?: string
	/**
	 * Background color behind matching brackets
	 */
	'editorBracketMatch.background'?: string
	/**
	 * Color for matching brackets boxes
	 */
	'editorBracketMatch.border'?: string
	/**
	 * Color of the overview ruler border.
	 */
	'editorOverviewRuler.border'?: string
	/**
	 * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
	 */
	'editorOverviewRuler.background'?: string
	/**
	 * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
	 */
	'editorGutter.background'?: string
	/**
	 * Border color of unnecessary (unused) source code in the editor.
	 */
	'editorUnnecessaryCode.border'?: string
	/**
	 * Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the  'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of fading it out.
	 */
	'editorUnnecessaryCode.opacity'?: string
	/**
	 * Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.rangeHighlightForeground'?: string
	/**
	 * Overview ruler marker color for errors.
	 */
	'editorOverviewRuler.errorForeground'?: string
	/**
	 * Overview ruler marker color for warnings.
	 */
	'editorOverviewRuler.warningForeground'?: string
	/**
	 * Overview ruler marker color for infos.
	 */
	'editorOverviewRuler.infoForeground'?: string
	/**
	 * Overview ruler marker color for matching brackets.
	 */
	'editorOverviewRuler.bracketMatchForeground'?: string
	/**
	 * The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.arrayForeground'?: string
	/**
	 * The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.booleanForeground'?: string
	/**
	 * The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.classForeground'?: string
	/**
	 * The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.colorForeground'?: string
	/**
	 * The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.constantForeground'?: string
	/**
	 * The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.constructorForeground'?: string
	/**
	 * The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.enumeratorForeground'?: string
	/**
	 * The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.enumeratorMemberForeground'?: string
	/**
	 * The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.eventForeground'?: string
	/**
	 * The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.fieldForeground'?: string
	/**
	 * The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.fileForeground'?: string
	/**
	 * The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.folderForeground'?: string
	/**
	 * The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.functionForeground'?: string
	/**
	 * The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.interfaceForeground'?: string
	/**
	 * The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.keyForeground'?: string
	/**
	 * The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.keywordForeground'?: string
	/**
	 * The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.methodForeground'?: string
	/**
	 * The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.moduleForeground'?: string
	/**
	 * The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.namespaceForeground'?: string
	/**
	 * The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.nullForeground'?: string
	/**
	 * The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.numberForeground'?: string
	/**
	 * The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.objectForeground'?: string
	/**
	 * The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.operatorForeground'?: string
	/**
	 * The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.packageForeground'?: string
	/**
	 * The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.propertyForeground'?: string
	/**
	 * The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.referenceForeground'?: string
	/**
	 * The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.snippetForeground'?: string
	/**
	 * The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.stringForeground'?: string
	/**
	 * The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.structForeground'?: string
	/**
	 * The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.textForeground'?: string
	/**
	 * The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.typeParameterForeground'?: string
	/**
	 * The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.unitForeground'?: string
	/**
	 * The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
	 */
	'symbolIcon.variableForeground'?: string
	/**
	 * Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.foldBackground'?: string
	/**
	 * Color of the folding control in the editor gutter.
	 */
	'editorGutter.foldingControlForeground'?: string
	/**
	 * Background color of the peek view title area.
	 */
	'peekViewTitle.background'?: string
	/**
	 * Color of the peek view title.
	 */
	'peekViewTitleLabel.foreground'?: string
	/**
	 * Color of the peek view title info.
	 */
	'peekViewTitleDescription.foreground'?: string
	/**
	 * Color of the peek view borders and arrow.
	 */
	'peekView.border'?: string
	/**
	 * Background color of the peek view result list.
	 */
	'peekViewResult.background'?: string
	/**
	 * Foreground color for line nodes in the peek view result list.
	 */
	'peekViewResult.lineForeground'?: string
	/**
	 * Foreground color for file nodes in the peek view result list.
	 */
	'peekViewResult.fileForeground'?: string
	/**
	 * Background color of the selected entry in the peek view result list.
	 */
	'peekViewResult.selectionBackground'?: string
	/**
	 * Foreground color of the selected entry in the peek view result list.
	 */
	'peekViewResult.selectionForeground'?: string
	/**
	 * Background color of the peek view editor.
	 */
	'peekViewEditor.background'?: string
	/**
	 * Background color of the gutter in the peek view editor.
	 */
	'peekViewEditorGutter.background'?: string
	/**
	 * Match highlight color in the peek view result list.
	 */
	'peekViewResult.matchHighlightBackground'?: string
	/**
	 * Match highlight color in the peek view editor.
	 */
	'peekViewEditor.matchHighlightBackground'?: string
	/**
	 * Match highlight border in the peek view editor.
	 */
	'peekViewEditor.matchHighlightBorder'?: string
	/**
	 * Background color of the suggest widget.
	 */
	'editorSuggestWidget.background'?: string
	/**
	 * Border color of the suggest widget.
	 */
	'editorSuggestWidget.border'?: string
	/**
	 * Foreground color of the suggest widget.
	 */
	'editorSuggestWidget.foreground'?: string
	/**
	 * Background color of the selected entry in the suggest widget.
	 */
	'editorSuggestWidget.selectedBackground'?: string
	/**
	 * Color of the match highlights in the suggest widget.
	 */
	'editorSuggestWidget.highlightForeground'?: string
	/**
	 * Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.wordHighlightBackground'?: string
	/**
	 * Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editor.wordHighlightStrongBackground'?: string
	/**
	 * Border color of a symbol during read-access, like reading a variable.
	 */
	'editor.wordHighlightBorder'?: string
	/**
	 * Border color of a symbol during write-access, like writing to a variable.
	 */
	'editor.wordHighlightStrongBorder'?: string
	/**
	 * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.wordHighlightForeground'?: string
	/**
	 * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
	 */
	'editorOverviewRuler.wordHighlightStrongForeground'?: string
	/**
	 * Editor marker navigation widget error color.
	 */
	'editorMarkerNavigationError.background'?: string
	/**
	 * Editor marker navigation widget warning color.
	 */
	'editorMarkerNavigationWarning.background'?: string
	/**
	 * Editor marker navigation widget info color.
	 */
	'editorMarkerNavigationInfo.background'?: string
	/**
	 * Editor marker navigation widget background.
	 */
	'editorMarkerNavigation.background'?: string
	/**
	 * Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.activeBackground'?: string
	/**
	 * Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedActiveBackground'?: string
	/**
	 * Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.inactiveBackground'?: string
	/**
	 * Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedInactiveBackground'?: string
	/**
	 * Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.activeForeground'?: string
	/**
	 * Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.inactiveForeground'?: string
	/**
	 * Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedActiveForeground'?: string
	/**
	 * Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedInactiveForeground'?: string
	/**
	 * Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.hoverBackground'?: string
	/**
	 * Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedHoverBackground'?: string
	/**
	 * Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.hoverForeground'?: string
	/**
	 * Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedHoverForeground'?: string
	/**
	 * Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.activeBorder'?: string
	/**
	 * Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedActiveBorder'?: string
	/**
	 * Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.activeBorderTop'?: string
	/**
	 * Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedActiveBorderTop'?: string
	/**
	 * Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.hoverBorder'?: string
	/**
	 * Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedHoverBorder'?: string
	/**
	 * Border on the top of modified (dirty) active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.activeModifiedBorder'?: string
	/**
	 * Border on the top of modified (dirty) inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.inactiveModifiedBorder'?: string
	/**
	 * Border on the top of modified (dirty) active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedActiveModifiedBorder'?: string
	/**
	 * Border on the top of modified (dirty) inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.unfocusedInactiveModifiedBorder'?: string
	/**
	 * Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
	 */
	'tab.border'?: string
	/**
	 * Background color of the editor pane visible on the left and right side of the centered editor layout.
	 */
	'editorPane.background'?: string
	/**
	 * Deprecated background color of an editor group.
	 */
	'editorGroup.background'?: string
	/**
	 * Background color of an empty editor group. Editor groups are the containers of editors.
	 */
	'editorGroup.emptyBackground'?: string
	/**
	 * Border color of an empty editor group that is focused. Editor groups are the containers of editors.
	 */
	'editorGroup.focusedEmptyBorder'?: string
	/**
	 * Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
	 */
	'editorGroupHeader.tabsBackground'?: string
	/**
	 * Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
	 */
	'editorGroupHeader.tabsBorder'?: string
	/**
	 * Background color of the editor group title header when tabs are disabled (`"workbench.editor.showTabs": false`). Editor groups are the containers of editors.
	 */
	'editorGroupHeader.noTabsBackground'?: string
	/**
	 * Border color of the editor group title header. Editor groups are the containers of editors.
	 */
	'editorGroupHeader.border'?: string
	/**
	 * Color to separate multiple editor groups from each other. Editor groups are the containers of editors.
	 */
	'editorGroup.border'?: string
	/**
	 * Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.
	 */
	'editorGroup.dropBackground'?: string
	/**
	 * Border color for image in image preview.
	 */
	'imagePreview.border'?: string
	/**
	 * Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panel.background'?: string
	/**
	 * Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panel.border'?: string
	/**
	 * Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelTitle.activeForeground'?: string
	/**
	 * Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelTitle.inactiveForeground'?: string
	/**
	 * Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelTitle.activeBorder'?: string
	/**
	 * Input box border for inputs in the panel.
	 */
	'panelInput.border'?: string
	/**
	 * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panel.dropBorder'?: string
	/**
	 * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSection.dropBackground'?: string
	/**
	 * Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSectionHeader.background'?: string
	/**
	 * Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSectionHeader.foreground'?: string
	/**
	 * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSectionHeader.border'?: string
	/**
	 * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
	 */
	'panelSection.border'?: string
	/**
	 * Status bar foreground color when a workspace is opened. The status bar is shown in the bottom of the window.
	 */
	'statusBar.foreground'?: string
	/**
	 * Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window.
	 */
	'statusBar.noFolderForeground'?: string
	/**
	 * Status bar background color when a workspace is opened. The status bar is shown in the bottom of the window.
	 */
	'statusBar.background'?: string
	/**
	 * Status bar background color when no folder is opened. The status bar is shown in the bottom of the window.
	 */
	'statusBar.noFolderBackground'?: string
	/**
	 * Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.
	 */
	'statusBar.border'?: string
	/**
	 * Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window.
	 */
	'statusBar.noFolderBorder'?: string
	/**
	 * Status bar item background color when clicking. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.activeBackground'?: string
	/**
	 * Status bar item background color when hovering. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.hoverBackground'?: string
	/**
	 * Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.prominentForeground'?: string
	/**
	 * Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.prominentBackground'?: string
	/**
	 * Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window.
	 */
	'statusBarItem.prominentHoverBackground'?: string
	/**
	 * Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.background'?: string
	/**
	 * Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.foreground'?: string
	/**
	 * Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.inactiveForeground'?: string
	/**
	 * Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.border'?: string
	/**
	 * Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.activeBorder'?: string
	/**
	 * Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.activeFocusBorder'?: string
	/**
	 * Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.activeBackground'?: string
	/**
	 * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBar.dropBorder'?: string
	/**
	 * Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBarBadge.background'?: string
	/**
	 * Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
	 */
	'activityBarBadge.foreground'?: string
	/**
	 * Background color for the remote indicator on the status bar.
	 */
	'statusBarItem.remoteBackground'?: string
	/**
	 * Foreground color for the remote indicator on the status bar.
	 */
	'statusBarItem.remoteForeground'?: string
	/**
	 * Background color for the remote badge in the extensions view.
	 */
	'extensionBadge.remoteBackground'?: string
	/**
	 * Foreground color for the remote badge in the extensions view.
	 */
	'extensionBadge.remoteForeground'?: string
	/**
	 * Side bar background color. The side bar is the container for views like explorer and search.
	 */
	'sideBar.background'?: string
	/**
	 * Side bar foreground color. The side bar is the container for views like explorer and search.
	 */
	'sideBar.foreground'?: string
	/**
	 * Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search.
	 */
	'sideBar.border'?: string
	/**
	 * Side bar title foreground color. The side bar is the container for views like explorer and search.
	 */
	'sideBarTitle.foreground'?: string
	/**
	 * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.
	 */
	'sideBar.dropBackground'?: string
	/**
	 * Side bar section header background color. The side bar is the container for views like explorer and search.
	 */
	'sideBarSectionHeader.background'?: string
	/**
	 * Side bar section header foreground color. The side bar is the container for views like explorer and search.
	 */
	'sideBarSectionHeader.foreground'?: string
	/**
	 * Side bar section header border color. The side bar is the container for views like explorer and search.
	 */
	'sideBarSectionHeader.border'?: string
	/**
	 * Title bar foreground when the window is active.
	 */
	'titleBar.activeForeground'?: string
	/**
	 * Title bar foreground when the window is inactive.
	 */
	'titleBar.inactiveForeground'?: string
	/**
	 * Title bar background when the window is active.
	 */
	'titleBar.activeBackground'?: string
	/**
	 * Title bar background when the window is inactive.
	 */
	'titleBar.inactiveBackground'?: string
	/**
	 * Title bar border color.
	 */
	'titleBar.border'?: string
	/**
	 * Foreground color of the selected menu item in the menubar.
	 */
	'menubar.selectionForeground'?: string
	/**
	 * Background color of the selected menu item in the menubar.
	 */
	'menubar.selectionBackground'?: string
	/**
	 * Border color of the selected menu item in the menubar.
	 */
	'menubar.selectionBorder'?: string
	/**
	 * Notifications center border color. Notifications slide in from the bottom right of the window.
	 */
	'notificationCenter.border'?: string
	/**
	 * Notification toast border color. Notifications slide in from the bottom right of the window.
	 */
	'notificationToast.border'?: string
	/**
	 * Notifications foreground color. Notifications slide in from the bottom right of the window.
	 */
	'notifications.foreground'?: string
	/**
	 * Notifications background color. Notifications slide in from the bottom right of the window.
	 */
	'notifications.background'?: string
	/**
	 * Notification links foreground color. Notifications slide in from the bottom right of the window.
	 */
	'notificationLink.foreground'?: string
	/**
	 * Notifications center header foreground color. Notifications slide in from the bottom right of the window.
	 */
	'notificationCenterHeader.foreground'?: string
	/**
	 * Notifications center header background color. Notifications slide in from the bottom right of the window.
	 */
	'notificationCenterHeader.background'?: string
	/**
	 * Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window.
	 */
	'notifications.border'?: string
	/**
	 * The color used for the icon of error notifications. Notifications slide in from the bottom right of the window.
	 */
	'notificationsErrorIcon.foreground'?: string
	/**
	 * The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window.
	 */
	'notificationsWarningIcon.foreground'?: string
	/**
	 * The color used for the icon of info notifications. Notifications slide in from the bottom right of the window.
	 */
	'notificationsInfoIcon.foreground'?: string
	/**
	 * The color used for the border of the window when it is active. Only supported in the desktop client when using the custom title bar.
	 */
	'window.activeBorder'?: string
	/**
	 * The color used for the border of the window when it is inactive. Only supported in the desktop client when using the custom title bar.
	 */
	'window.inactiveBorder'?: string
	/**
	 * Editor gutter decoration color for commenting ranges.
	 */
	'editorGutter.commentRangeForeground'?: string
	/**
	 * Background color for the highlight of line at the top stack frame position.
	 */
	'editor.stackFrameHighlightBackground'?: string
	/**
	 * Background color for the highlight of line at focused stack frame position.
	 */
	'editor.focusedStackFrameHighlightBackground'?: string
	/**
	 * The background color of the terminal, this allows coloring the terminal differently to the panel.
	 */
	'terminal.background'?: string
	/**
	 * The foreground color of the terminal.
	 */
	'terminal.foreground'?: string
	/**
	 * The foreground color of the terminal cursor.
	 */
	'terminalCursor.foreground'?: string
	/**
	 * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
	 */
	'terminalCursor.background'?: string
	/**
	 * The selection background color of the terminal.
	 */
	'terminal.selectionBackground'?: string
	/**
	 * The color of the border that separates split panes within the terminal. This defaults to panel.border.
	 */
	'terminal.border'?: string
	/**
	 * Background color for the embedded editors on the Interactive Playground.
	 */
	'walkThrough.embeddedEditorBackground'?: string
	/**
	 * Editor gutter background color for lines that are modified.
	 */
	'editorGutter.modifiedBackground'?: string
	/**
	 * Editor gutter background color for lines that are added.
	 */
	'editorGutter.addedBackground'?: string
	/**
	 * Editor gutter background color for lines that are deleted.
	 */
	'editorGutter.deletedBackground'?: string
	/**
	 * Minimap gutter background color for lines that are modified.
	 */
	'minimapGutter.modifiedBackground'?: string
	/**
	 * Minimap gutter background color for lines that are added.
	 */
	'minimapGutter.addedBackground'?: string
	/**
	 * Minimap gutter background color for lines that are deleted.
	 */
	'minimapGutter.deletedBackground'?: string
	/**
	 * Overview ruler marker color for modified content.
	 */
	'editorOverviewRuler.modifiedForeground'?: string
	/**
	 * Overview ruler marker color for added content.
	 */
	'editorOverviewRuler.addedForeground'?: string
	/**
	 * Overview ruler marker color for deleted content.
	 */
	'editorOverviewRuler.deletedForeground'?: string
	/**
	 * Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window
	 */
	'statusBar.debuggingBackground'?: string
	/**
	 * Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window
	 */
	'statusBar.debuggingForeground'?: string
	/**
	 * Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window
	 */
	'statusBar.debuggingBorder'?: string
	/**
	 * Background color for the buttons on the Welcome page.
	 */
	'welcomePage.buttonBackground'?: string
	/**
	 * Hover background color for the buttons on the Welcome page.
	 */
	'welcomePage.buttonHoverBackground'?: string
	/**
	 * Background color for the Welcome page.
	 */
	'welcomePage.background'?: string
	/**
	 * The foreground color for a section header or active title.
	 */
	'settings.headerForeground'?: string
	/**
	 * The color of the modified setting indicator.
	 */
	'settings.modifiedItemIndicator'?: string
	/**
	 * Settings editor dropdown background.
	 */
	'settings.dropdownBackground'?: string
	/**
	 * Settings editor dropdown foreground.
	 */
	'settings.dropdownForeground'?: string
	/**
	 * Settings editor dropdown border.
	 */
	'settings.dropdownBorder'?: string
	/**
	 * Settings editor dropdown list border. This surrounds the options and separates the options from the description.
	 */
	'settings.dropdownListBorder'?: string
	/**
	 * Settings editor checkbox background.
	 */
	'settings.checkboxBackground'?: string
	/**
	 * Settings editor checkbox foreground.
	 */
	'settings.checkboxForeground'?: string
	/**
	 * Settings editor checkbox border.
	 */
	'settings.checkboxBorder'?: string
	/**
	 * Settings editor text input box background.
	 */
	'settings.textInputBackground'?: string
	/**
	 * Settings editor text input box foreground.
	 */
	'settings.textInputForeground'?: string
	/**
	 * Settings editor text input box border.
	 */
	'settings.textInputBorder'?: string
	/**
	 * Settings editor number input box background.
	 */
	'settings.numberInputBackground'?: string
	/**
	 * Settings editor number input box foreground.
	 */
	'settings.numberInputForeground'?: string
	/**
	 * Settings editor number input box border.
	 */
	'settings.numberInputBorder'?: string
	/**
	 * Exception widget border color.
	 */
	'debugExceptionWidget.border'?: string
	/**
	 * Exception widget background color.
	 */
	'debugExceptionWidget.background'?: string
	/**
	 * Search editor text input box border.
	 */
	'searchEditor.textInputBorder'?: string
	/**
	 * Icon color for breakpoints.
	 */
	'debugIcon.breakpointForeground'?: string
	/**
	 * Icon color for disabled breakpoints.
	 */
	'debugIcon.breakpointDisabledForeground'?: string
	/**
	 * Icon color for unverified breakpoints.
	 */
	'debugIcon.breakpointUnverifiedForeground'?: string
	/**
	 * Icon color for the current breakpoint stack frame.
	 */
	'debugIcon.breakpointCurrentStackframeForeground'?: string
	/**
	 * Icon color for all breakpoint stack frames.
	 */
	'debugIcon.breakpointStackframeForeground'?: string
	/**
	 * Debug toolbar background color.
	 */
	'debugToolBar.background'?: string
	/**
	 * Debug toolbar border color.
	 */
	'debugToolBar.border'?: string
	/**
	 * Debug toolbar icon for start debugging.
	 */
	'debugIcon.startForeground'?: string
	/**
	 * Debug toolbar icon for pause.
	 */
	'debugIcon.pauseForeground'?: string
	/**
	 * Debug toolbar icon for stop.
	 */
	'debugIcon.stopForeground'?: string
	/**
	 * Debug toolbar icon for disconnect.
	 */
	'debugIcon.disconnectForeground'?: string
	/**
	 * Debug toolbar icon for restart.
	 */
	'debugIcon.restartForeground'?: string
	/**
	 * Debug toolbar icon for step over.
	 */
	'debugIcon.stepOverForeground'?: string
	/**
	 * Debug toolbar icon for step into.
	 */
	'debugIcon.stepIntoForeground'?: string
	/**
	 * Debug toolbar icon for step over.
	 */
	'debugIcon.stepOutForeground'?: string
	/**
	 * Debug toolbar icon for continue.
	 */
	'debugIcon.continueForeground'?: string
	/**
	 * Debug toolbar icon for step back.
	 */
	'debugIcon.stepBackForeground'?: string
	/**
	 * Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).
	 */
	'debugTokenExpression.name'?: string
	/**
	 * Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).
	 */
	'debugTokenExpression.value'?: string
	/**
	 * Foreground color for strings in the debug views (ie. the Variables or Watch view).
	 */
	'debugTokenExpression.string'?: string
	/**
	 * Foreground color for booleans in the debug views (ie. the Variables or Watch view).
	 */
	'debugTokenExpression.boolean'?: string
	/**
	 * Foreground color for numbers in the debug views (ie. the Variables or Watch view).
	 */
	'debugTokenExpression.number'?: string
	/**
	 * Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console.
	 */
	'debugTokenExpression.error'?: string
	/**
	 * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
	 */
	'debugView.exceptionLabelForeground'?: string
	/**
	 * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
	 */
	'debugView.exceptionLabelBackground'?: string
	/**
	 * Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
	 */
	'debugView.stateLabelForeground'?: string
	/**
	 * Background color for a label in the CALL STACK view showing the current session's or thread's state.
	 */
	'debugView.stateLabelBackground'?: string
	/**
	 * Color used to highlight value changes in the debug views (ie. in the Variables view).
	 */
	'debugView.valueChangedHighlight'?: string
	/**
	 * Foreground color for info messages in debug REPL console.
	 */
	'debugConsole.infoForeground'?: string
	/**
	 * Foreground color for warning messages in debug REPL console.
	 */
	'debugConsole.warningForeground'?: string
	/**
	 * Foreground color for error messages in debug REPL console.
	 */
	'debugConsole.errorForeground'?: string
	/**
	 * Foreground color for source filenames in debug REPL console.
	 */
	'debugConsole.sourceForeground'?: string
	/**
	 * Foreground color for debug console input marker icon.
	 */
	'debugConsoleInputIcon.foreground'?: string
	/**
	 * Button background color for actions extension that stand out (e.g. install button).
	 */
	'extensionButton.prominentBackground'?: string
	/**
	 * Button foreground color for actions extension that stand out (e.g. install button).
	 */
	'extensionButton.prominentForeground'?: string
	/**
	 * Button background hover color for actions extension that stand out (e.g. install button).
	 */
	'extensionButton.prominentHoverBackground'?: string
	/**
	 * The border color for notebook cells.
	 */
	'notebook.cellBorderColor'?: string
	/**
	 * The color of the notebook cell editor border.
	 */
	'notebook.focusedEditorBorder'?: string
	/**
	 * The error icon color of notebook cells in the cell status bar.
	 */
	'notebookStatusSuccessIcon.foreground'?: string
	/**
	 * The error icon color of notebook cells in the cell status bar.
	 */
	'notebookStatusErrorIcon.foreground'?: string
	/**
	 * The running icon color of notebook cells in the cell status bar.
	 */
	'notebookStatusRunningIcon.foreground'?: string
	/**
	 * The Color of the notebook output container background.
	 */
	'notebook.outputContainerBackgroundColor'?: string
	/**
	 * The color of the seperator in the cell bottom toolbar
	 */
	'notebook.cellToolbarSeperator'?: string
	/**
	 * The background color of a cell when the cell is focused.
	 */
	'notebook.focusedCellBackground'?: string
	/**
	 * The background color of a cell when the cell is hovered.
	 */
	'notebook.cellHoverBackground'?: string
	/**
	 * The color of the cell's top and bottom border when the cell is focused.
	 */
	'notebook.focusedCellBorder'?: string
	/**
	 * The color of the cell shadow when cells are focused.
	 */
	'notebook.focusedCellShadow'?: string
	/**
	 * The background color of notebook cell status bar items.
	 */
	'notebook.cellStatusBarItemHoverBackground'?: string
	/**
	 * The color of the notebook cell insertion indicator.
	 */
	'notebook.cellInsertionIndicator'?: string
	/**
	 * Notebook scrollbar slider background color.
	 */
	'notebookScrollbarSlider.background'?: string
	/**
	 * Notebook scrollbar slider background color when hovering.
	 */
	'notebookScrollbarSlider.hoverBackground'?: string
	/**
	 * Notebook scrollbar slider background color when clicked on.
	 */
	'notebookScrollbarSlider.activeBackground'?: string
	/**
	 * SCM Provider separator border.
	 */
	'scm.providerBorder'?: string
	/**
	 * 'Black' ANSI color in the terminal.
	 */
	'terminal.ansiBlack'?: string
	/**
	 * 'Red' ANSI color in the terminal.
	 */
	'terminal.ansiRed'?: string
	/**
	 * 'Green' ANSI color in the terminal.
	 */
	'terminal.ansiGreen'?: string
	/**
	 * 'Yellow' ANSI color in the terminal.
	 */
	'terminal.ansiYellow'?: string
	/**
	 * 'Blue' ANSI color in the terminal.
	 */
	'terminal.ansiBlue'?: string
	/**
	 * 'Magenta' ANSI color in the terminal.
	 */
	'terminal.ansiMagenta'?: string
	/**
	 * 'Cyan' ANSI color in the terminal.
	 */
	'terminal.ansiCyan'?: string
	/**
	 * 'White' ANSI color in the terminal.
	 */
	'terminal.ansiWhite'?: string
	/**
	 * 'BrightBlack' ANSI color in the terminal.
	 */
	'terminal.ansiBrightBlack'?: string
	/**
	 * 'BrightRed' ANSI color in the terminal.
	 */
	'terminal.ansiBrightRed'?: string
	/**
	 * 'BrightGreen' ANSI color in the terminal.
	 */
	'terminal.ansiBrightGreen'?: string
	/**
	 * 'BrightYellow' ANSI color in the terminal.
	 */
	'terminal.ansiBrightYellow'?: string
	/**
	 * 'BrightBlue' ANSI color in the terminal.
	 */
	'terminal.ansiBrightBlue'?: string
	/**
	 * 'BrightMagenta' ANSI color in the terminal.
	 */
	'terminal.ansiBrightMagenta'?: string
	/**
	 * 'BrightCyan' ANSI color in the terminal.
	 */
	'terminal.ansiBrightCyan'?: string
	/**
	 * 'BrightWhite' ANSI color in the terminal.
	 */
	'terminal.ansiBrightWhite'?: string
	/**
	 * Color for added resources.
	 */
	'gitDecoration.addedResourceForeground'?: string
	/**
	 * Color for modified resources.
	 */
	'gitDecoration.modifiedResourceForeground'?: string
	/**
	 * Color for deleted resources.
	 */
	'gitDecoration.deletedResourceForeground'?: string
	/**
	 * Color for untracked resources.
	 */
	'gitDecoration.untrackedResourceForeground'?: string
	/**
	 * Color for ignored resources.
	 */
	'gitDecoration.ignoredResourceForeground'?: string
	/**
	 * Color for resources with conflicts.
	 */
	'gitDecoration.conflictingResourceForeground'?: string
	/**
	 * Color for submodule resources.
	 */
	'gitDecoration.submoduleResourceForeground'?: string
	[k: string]: unknown
}
