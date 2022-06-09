"use strict";
exports.__esModule = true;
exports.parseExampleModuleFile = void 0;
var fs = require("fs");
var ts = require("typescript");
/** Parses an example module file by returning all module names within the given file. */
function parseExampleModuleFile(filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf8');
    var sourceFile = ts.createSourceFile('', fileContent, ts.ScriptTarget.Latest, false);
    var moduleNames = [];
    var visitNode = function (node) {
        if (ts.isClassDeclaration(node) && node.name) {
            moduleNames.push(node.name.text);
        }
        ts.forEachChild(node, function (n) { return visitNode(n); });
    };
    visitNode(sourceFile);
    return moduleNames;
}
exports.parseExampleModuleFile = parseExampleModuleFile;
