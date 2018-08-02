'use babel';

import CamelcaseToSpace from '../lib/camelcase-to-space';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('CamelcaseToSpace', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('camelcase-to-space');
  });

  describe('when the camelcase-to-space:convert event is triggered', () => {});
});
