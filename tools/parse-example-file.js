"use strict";
exports.__esModule = true;
exports.parseExampleFile = void 0;
var ts = require("typescript");
/** Parse the AST of the given source file and collect Angular component metadata. */
function parseExampleFile(fileName, content) {
    var sourceFile = ts.createSourceFile(fileName, content, ts.ScriptTarget.Latest, false);
    var metas = [];
    var visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.ClassDeclaration) {
            var meta = {
                componentName: node.name.text
            };
            if (node.jsDoc && node.jsDoc.length) {
                for (var _i = 0, _a = node.jsDoc; _i < _a.length; _i++) {
                    var doc = _a[_i];
                    if (doc.tags && doc.tags.length) {
                        for (var _b = 0, _c = doc.tags; _b < _c.length; _b++) {
                            var tag = _c[_b];
                            var tagValue = tag.comment;
                            var tagName = tag.tagName.text;
                            if (tagName === 'title') {
                                meta.title = tagValue;
                                meta.isPrimary = true;
                            }
                        }
                    }
                }
            }
            if (node.decorators && node.decorators.length) {
                for (var _d = 0, _e = node.decorators; _d < _e.length; _d++) {
                    var decorator = _e[_d];
                    if (decorator.expression.expression.text === 'Component') {
                        for (var _f = 0, _g = decorator.expression.arguments; _f < _g.length; _f++) {
                            var arg = _g[_f];
                            for (var _h = 0, _j = arg.properties; _h < _j.length; _h++) {
                                var prop = _j[_h];
                                var propName = prop.name.text;
                                // Since additional files can be also stylesheets, we need to properly parse
                                // the styleUrls metadata property.
                                if (propName === 'styleUrls' && ts.isArrayLiteralExpression(prop.initializer)) {
                                    meta[propName] = prop.initializer.elements.map(function (literal) { return literal.text; });
                                }
                                else {
                                    meta[propName] = prop.initializer.text;
                                }
                            }
                        }
                        metas.push(meta);
                    }
                }
            }
        }
        ts.forEachChild(node, visitNode);
    };
    visitNode(sourceFile);
    return {
        primaryComponent: metas.find(function (m) { return m.isPrimary; }),
        secondaryComponents: metas.filter(function (m) { return !m.isPrimary; })
    };
}
exports.parseExampleFile = parseExampleFile;
