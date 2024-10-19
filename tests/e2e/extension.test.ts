import * as assert from "assert";
import * as vscode from "vscode";
import { suite, suiteTeardown, test } from "mocha";

suite("Extension Test Suite", () => {
  suiteTeardown(() => {
    vscode.window.showInformationMessage("All tests done!");
  });

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
