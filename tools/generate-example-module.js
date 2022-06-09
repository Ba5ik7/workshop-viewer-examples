"use strict";
exports.__esModule = true;
exports.generateExampleModule = void 0;
var fs = require("fs");
var path = require("path");
var parse_example_file_1 = require("./parse-example-file");
var parse_example_module_file_1 = require("./parse-example-module-file");
/** Inlines the example module template with the specified parsed data. */
function inlineExampleModuleTemplate(parsedData) {
    var exampleMetadata = parsedData.exampleMetadata;
    var exampleComponents = exampleMetadata.reduce(function (result, data) {
        var _a, _b;
        if (result[data.id] !== undefined) {
            throw Error("Multiple examples with the same id have been discovered: ".concat(data.id));
        }
        result[data.id] = {
            packagePath: data.packagePath,
            title: data.title,
            componentName: data.componentName,
            files: data.files,
            selector: data.selector,
            additionalComponents: data.additionalComponents,
            primaryFile: path.basename(data.sourcePath),
            module: {
                name: (_a = data.module) === null || _a === void 0 ? void 0 : _a.name,
                importSpecifier: (_b = data.module) === null || _b === void 0 ? void 0 : _b.packagePath
            }
        };
        return result;
    }, {});
    return fs
        .readFileSync(require.resolve('./example-module.template'), 'utf8')
        .replace(/\${exampleComponents}/g, JSON.stringify(exampleComponents, null, 2));
}
/** Converts a given camel-cased string to a dash-cased string. */
function convertToDashCase(name) {
    name = name.replace(/[A-Z]/g, ' $&');
    name = name.toLowerCase().trim();
    return name.split(' ').join('-');
}
/**
 * Analyzes the examples by parsing the given TypeScript files in order to find
 * individual example modules and example metadata.
 */
function analyzeExamples(sourceFiles, baseDir) {
    var exampleMetadata = [];
    var exampleModules = [];
    var _loop_1 = function (sourceFile) {
        var _a, _b;
        var relativePath = path.relative(baseDir, sourceFile).replace(/\\/g, '/');
        var importPath = relativePath.replace(/\.ts$/, '');
        var packagePath = path.dirname(relativePath);
        // Collect all individual example modules.
        if (path.basename(sourceFile) === 'index.ts') {
            console.log('sourceFile', sourceFile);
            exampleModules.push.apply(exampleModules, (0, parse_example_module_file_1.parseExampleModuleFile)(sourceFile).map(function (name) { return ({
                name: name,
                importPath: importPath,
                packagePath: packagePath
            }); }));
        }
        // Avoid parsing non-example files.
        if (!path.basename(sourceFile, path.extname(sourceFile)).endsWith('-example')) {
            return "continue";
        }
        var sourceContent = fs.readFileSync(sourceFile, 'utf-8');
        var _c = (0, parse_example_file_1.parseExampleFile)(sourceFile, sourceContent), primaryComponent = _c.primaryComponent, secondaryComponents = _c.secondaryComponents;
        if (primaryComponent) {
            // Generate a unique id for the component by converting the class name to dash-case.
            var exampleId = convertToDashCase(primaryComponent.componentName.replace('Example', ''));
            var example = {
                sourcePath: relativePath,
                packagePath: packagePath,
                id: exampleId,
                selector: primaryComponent.selector,
                componentName: primaryComponent.componentName,
                title: primaryComponent.title.trim(),
                additionalComponents: [],
                files: [],
                module: null
            };
            // For consistency, we expect the example component selector to match
            // the id of the example.
            var expectedSelector = "lib-".concat(exampleId);
            if (primaryComponent.selector !== expectedSelector) {
                throw Error("Example ".concat(exampleId, " uses selector: ").concat(primaryComponent.selector, ", ") +
                    "but expected: ".concat(expectedSelector));
            }
            example.files.push(path.basename(relativePath));
            if (primaryComponent.templateUrl) {
                example.files.push(primaryComponent.templateUrl);
            }
            if (primaryComponent.styleUrls) {
                (_a = example.files).push.apply(_a, primaryComponent.styleUrls);
            }
            if (primaryComponent.componentName.includes('Harness')) {
                example.files.push(primaryComponent.selector + '.spec.ts');
            }
            if (secondaryComponents.length) {
                for (var _d = 0, secondaryComponents_1 = secondaryComponents; _d < secondaryComponents_1.length; _d++) {
                    var meta = secondaryComponents_1[_d];
                    example.additionalComponents.push(meta.componentName);
                    if (meta.templateUrl) {
                        example.files.push(meta.templateUrl);
                    }
                    if (meta.styleUrls) {
                        (_b = example.files).push.apply(_b, meta.styleUrls);
                    }
                }
            }
            // Ensure referenced files actually exist in the example.
            example.files.forEach(function (f) { return assertReferencedExampleFileExists(baseDir, packagePath, f); });
            exampleMetadata.push(example);
        }
        else {
            throw Error("Could not find a primary example component in ".concat(sourceFile, ". ") +
                "Ensure that there's a component with an @title annotation.");
        }
    };
    for (var _i = 0, sourceFiles_1 = sourceFiles; _i < sourceFiles_1.length; _i++) {
        var sourceFile = sourceFiles_1[_i];
        _loop_1(sourceFile);
    }
    // Walk through all collected examples and find their parent example module. In View Engine,
    // components cannot be lazy-loaded without the associated module being loaded.
    exampleMetadata.forEach(function (example) {
        var parentModule = exampleModules.find(function (module) {
            return example.sourcePath.startsWith(module.packagePath);
        });
        if (!parentModule) {
            throw Error("Could not determine example module for: ".concat(example.id));
        }
        var actualPath = path.dirname(example.sourcePath);
        var expectedPath = path.posix.join(parentModule.packagePath, example.id);
        // Ensures that example ids match with the directory they are stored in. This is not
        // necessary for the docs site, but it helps with consistency and makes it easy to
        // determine an id for an example. We also ensures for consistency that example
        // folders are direct siblings of the module file.
        if (actualPath !== expectedPath) {
            throw Error("Example is stored in: ".concat(actualPath, ", but expected: ").concat(expectedPath));
        }
        example.module = parentModule;
    });
    return { exampleMetadata: exampleMetadata };
}
/** Asserts that the given file exists for the specified example. */
function assertReferencedExampleFileExists(baseDir, examplePackagePath, relativePath) {
    if (!fs.existsSync(path.join(baseDir, examplePackagePath, relativePath))) {
        throw Error("Example \"".concat(examplePackagePath, "\" references \"").concat(relativePath, "\", but file does not exist."));
    }
}
/**
 * Generates the example module from the given source files and writes it to a specified output
 * file.
 */
function generateExampleModule(sourceFiles, outputFile) {
    var analysisData = analyzeExamples(sourceFiles, path.dirname(outputFile));
    var generatedModuleFile = inlineExampleModuleTemplate(analysisData);
    fs.writeFileSync(outputFile, generatedModuleFile);
}
exports.generateExampleModule = generateExampleModule;
var sourceFiles = [];
function fromDir(startPath, filter) {
    if (!fs.existsSync(startPath))
        return;
    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        }
        else if (filename.endsWith(filter)) {
            sourceFiles.push(filename);
        }
        ;
    }
    ;
}
;
fromDir('./projects/workshop-examples/src/lib', '.ts');
generateExampleModule(sourceFiles, './projects/workshop-live-examples/src/example-module.ts');
