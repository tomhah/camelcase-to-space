'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'camelcase-to-space:convert': () => this.convert()
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  convert() {
    let editor;
    if ((editor = atom.workspace.getActiveTextEditor())) {
      const selection = editor.getSelectedText();
      const lowercaseSpacedText = selection.replace(/([A-Z])/g, ($0, $1) => {
        const firstCharInWordsLowered =
          $1.charAt(0).toLowerCase() + $1.slice(1);

        return ` ${firstCharInWordsLowered}`;
      });

      const finalText =
        lowercaseSpacedText.charAt(0).toUpperCase() +
        lowercaseSpacedText.slice(1);

      editor.insertText(finalText);
    }
  }
};
