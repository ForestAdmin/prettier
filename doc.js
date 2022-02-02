(function (factory) {
  if (typeof exports === "object" && typeof module === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(factory);
  } else {
    var root =
      typeof globalThis !== "undefined"
        ? globalThis
        : typeof global !== "undefined"
        ? global
        : typeof self !== "undefined"
        ? self
        : this || {};
    root.doc = factory();
  }
})(function() {
"use strict";
var doc = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // dist/doc.js
  var require_doc = __commonJS({
    "dist/doc.js"(exports, module) {
      var __defProp = Object.defineProperty;
      var __defProps = Object.defineProperties;
      var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
      }) : obj[key] = value;
      var __spreadValues = (a, b) => {
        for (var prop in b || (b = {}))
          if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
              __defNormalProp(a, prop, b[prop]);
          }
        return a;
      };
      var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
      var __esm = (fn, res) => function __init() {
        return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
      };
      var __commonJS2 = (cb, mod) => function __require() {
        return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = {
          exports: {}
        }).exports, mod), mod.exports;
      };
      var init_define_process = __esm({
        "<define:process>"() {
        }
      });
      var require_doc_builders = __commonJS2({
        "src/document/doc-builders.js"(exports2, module2) {
          "use strict";
          init_define_process();
          function concat(parts) {
            if (false) {
              for (const part of parts) {
                assertDoc(part);
              }
            }
            return {
              type: "concat",
              parts
            };
          }
          function indent(contents) {
            if (false) {
              assertDoc(contents);
            }
            return {
              type: "indent",
              contents
            };
          }
          function align(widthOrString, contents) {
            if (false) {
              assertDoc(contents);
            }
            return {
              type: "align",
              contents,
              n: widthOrString
            };
          }
          function group(contents) {
            let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (false) {
              assertDoc(contents);
            }
            return {
              type: "group",
              id: opts.id,
              contents,
              break: Boolean(opts.shouldBreak),
              expandedStates: opts.expandedStates
            };
          }
          function dedentToRoot(contents) {
            return align(Number.NEGATIVE_INFINITY, contents);
          }
          function markAsRoot(contents) {
            return align({
              type: "root"
            }, contents);
          }
          function dedent(contents) {
            return align(-1, contents);
          }
          function conditionalGroup(states, opts) {
            return group(states[0], __spreadProps(__spreadValues({}, opts), {
              expandedStates: states
            }));
          }
          function fill(parts) {
            if (false) {
              for (const part of parts) {
                assertDoc(part);
              }
            }
            return {
              type: "fill",
              parts
            };
          }
          function ifBreak(breakContents, flatContents) {
            let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (false) {
              if (breakContents) {
                assertDoc(breakContents);
              }
              if (flatContents) {
                assertDoc(flatContents);
              }
            }
            return {
              type: "if-break",
              breakContents,
              flatContents,
              groupId: opts.groupId
            };
          }
          function indentIfBreak(contents, opts) {
            return {
              type: "indent-if-break",
              contents,
              groupId: opts.groupId,
              negate: opts.negate
            };
          }
          function lineSuffix(contents) {
            if (false) {
              assertDoc(contents);
            }
            return {
              type: "line-suffix",
              contents
            };
          }
          var lineSuffixBoundary = {
            type: "line-suffix-boundary"
          };
          var breakParent = {
            type: "break-parent"
          };
          var trim = {
            type: "trim"
          };
          var hardlineWithoutBreakParent = {
            type: "line",
            hard: true
          };
          var literallineWithoutBreakParent = {
            type: "line",
            hard: true,
            literal: true
          };
          var line = {
            type: "line"
          };
          var softline = {
            type: "line",
            soft: true
          };
          var hardline = concat([hardlineWithoutBreakParent, breakParent]);
          var literalline = concat([literallineWithoutBreakParent, breakParent]);
          var cursor = {
            type: "cursor",
            placeholder: Symbol("cursor")
          };
          function join(sep, arr) {
            const res = [];
            for (let i = 0; i < arr.length; i++) {
              if (i !== 0) {
                res.push(sep);
              }
              res.push(arr[i]);
            }
            return concat(res);
          }
          function addAlignmentToDoc(doc, size, tabWidth) {
            let aligned = doc;
            if (size > 0) {
              for (let i = 0; i < Math.floor(size / tabWidth); ++i) {
                aligned = indent(aligned);
              }
              aligned = align(size % tabWidth, aligned);
              aligned = align(Number.NEGATIVE_INFINITY, aligned);
            }
            return aligned;
          }
          function label(label2, contents) {
            return {
              type: "label",
              label: label2,
              contents
            };
          }
          module2.exports = {
            concat,
            join,
            line,
            softline,
            hardline,
            literalline,
            group,
            conditionalGroup,
            fill,
            lineSuffix,
            lineSuffixBoundary,
            cursor,
            breakParent,
            ifBreak,
            trim,
            indent,
            indentIfBreak,
            align,
            addAlignmentToDoc,
            markAsRoot,
            dedentToRoot,
            dedent,
            hardlineWithoutBreakParent,
            literallineWithoutBreakParent,
            label
          };
        }
      });
      var require_end_of_line = __commonJS2({
        "src/common/end-of-line.js"(exports2, module2) {
          "use strict";
          init_define_process();
          function guessEndOfLine(text) {
            const index = text.indexOf("\r");
            if (index >= 0) {
              return text.charAt(index + 1) === "\n" ? "crlf" : "cr";
            }
            return "lf";
          }
          function convertEndOfLineToChars(value) {
            switch (value) {
              case "cr":
                return "\r";
              case "crlf":
                return "\r\n";
              default:
                return "\n";
            }
          }
          function countEndOfLineChars(text, eol) {
            let regex;
            switch (eol) {
              case "\n":
                regex = /\n/g;
                break;
              case "\r":
                regex = /\r/g;
                break;
              case "\r\n":
                regex = /\r\n/g;
                break;
              default:
                throw new Error('Unexpected "eol" '.concat(JSON.stringify(eol), "."));
            }
            const endOfLines = text.match(regex);
            return endOfLines ? endOfLines.length : 0;
          }
          function normalizeEndOfLine(text) {
            return text.replace(/\r\n?/g, "\n");
          }
          module2.exports = {
            guessEndOfLine,
            convertEndOfLineToChars,
            countEndOfLineChars,
            normalizeEndOfLine
          };
        }
      });
      var require_get_last = __commonJS2({
        "src/utils/get-last.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var getLast = (arr) => arr[arr.length - 1];
          module2.exports = getLast;
        }
      });
      var require_ansi_regex = __commonJS2({
        "node_modules/ansi-regex/index.js"(exports2, module2) {
          "use strict";
          init_define_process();
          module2.exports = function() {
            let {
              onlyFirst = false
            } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
            return new RegExp(pattern, onlyFirst ? void 0 : "g");
          };
        }
      });
      var require_strip_ansi = __commonJS2({
        "node_modules/string-width/node_modules/strip-ansi/index.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var ansiRegex = require_ansi_regex();
          module2.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
        }
      });
      var require_is_fullwidth_code_point = __commonJS2({
        "node_modules/is-fullwidth-code-point/index.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var isFullwidthCodePoint = (codePoint) => {
            if (Number.isNaN(codePoint)) {
              return false;
            }
            if (codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141)) {
              return true;
            }
            return false;
          };
          module2.exports = isFullwidthCodePoint;
          module2.exports.default = isFullwidthCodePoint;
        }
      });
      var require_emoji_regex = __commonJS2({
        "node_modules/emoji-regex/index.js"(exports2, module2) {
          "use strict";
          init_define_process();
          module2.exports = function() {
            return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
          };
        }
      });
      var require_string_width = __commonJS2({
        "node_modules/string-width/index.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var stripAnsi = require_strip_ansi();
          var isFullwidthCodePoint = require_is_fullwidth_code_point();
          var emojiRegex = require_emoji_regex();
          var stringWidth = (string) => {
            if (typeof string !== "string" || string.length === 0) {
              return 0;
            }
            string = stripAnsi(string);
            if (string.length === 0) {
              return 0;
            }
            string = string.replace(emojiRegex(), "  ");
            let width = 0;
            for (let i = 0; i < string.length; i++) {
              const code = string.codePointAt(i);
              if (code <= 31 || code >= 127 && code <= 159) {
                continue;
              }
              if (code >= 768 && code <= 879) {
                continue;
              }
              if (code > 65535) {
                i++;
              }
              width += isFullwidthCodePoint(code) ? 2 : 1;
            }
            return width;
          };
          module2.exports = stringWidth;
          module2.exports.default = stringWidth;
        }
      });
      var require_get_string_width = __commonJS2({
        "src/utils/get-string-width.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var stringWidth = require_string_width();
          var notAsciiRegex = /[^\x20-\x7F]/;
          function getStringWidth(text) {
            if (!text) {
              return 0;
            }
            if (!notAsciiRegex.test(text)) {
              return text.length;
            }
            return stringWidth(text);
          }
          module2.exports = getStringWidth;
        }
      });
      var require_doc_utils = __commonJS2({
        "src/document/doc-utils.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var getLast = require_get_last();
          var {
            literalline,
            join
          } = require_doc_builders();
          var isConcat = (doc) => Array.isArray(doc) || doc && doc.type === "concat";
          var getDocParts = (doc) => {
            if (Array.isArray(doc)) {
              return doc;
            }
            if (doc.type !== "concat" && doc.type !== "fill") {
              throw new Error("Expect doc type to be `concat` or `fill`.");
            }
            return doc.parts;
          };
          var traverseDocOnExitStackMarker = {};
          function traverseDoc(doc, onEnter, onExit, shouldTraverseConditionalGroups) {
            const docsStack = [doc];
            while (docsStack.length > 0) {
              const doc2 = docsStack.pop();
              if (doc2 === traverseDocOnExitStackMarker) {
                onExit(docsStack.pop());
                continue;
              }
              if (onExit) {
                docsStack.push(doc2, traverseDocOnExitStackMarker);
              }
              if (!onEnter || onEnter(doc2) !== false) {
                if (isConcat(doc2) || doc2.type === "fill") {
                  const parts = getDocParts(doc2);
                  for (let ic = parts.length, i = ic - 1; i >= 0; --i) {
                    docsStack.push(parts[i]);
                  }
                } else if (doc2.type === "if-break") {
                  if (doc2.flatContents) {
                    docsStack.push(doc2.flatContents);
                  }
                  if (doc2.breakContents) {
                    docsStack.push(doc2.breakContents);
                  }
                } else if (doc2.type === "group" && doc2.expandedStates) {
                  if (shouldTraverseConditionalGroups) {
                    for (let ic = doc2.expandedStates.length, i = ic - 1; i >= 0; --i) {
                      docsStack.push(doc2.expandedStates[i]);
                    }
                  } else {
                    docsStack.push(doc2.contents);
                  }
                } else if (doc2.contents) {
                  docsStack.push(doc2.contents);
                }
              }
            }
          }
          function mapDoc(doc, cb) {
            const mapped = /* @__PURE__ */ new Map();
            return rec(doc);
            function rec(doc2) {
              if (mapped.has(doc2)) {
                return mapped.get(doc2);
              }
              const result = process2(doc2);
              mapped.set(doc2, result);
              return result;
            }
            function process2(doc2) {
              if (Array.isArray(doc2)) {
                return cb(doc2.map(rec));
              }
              if (doc2.type === "concat" || doc2.type === "fill") {
                const parts = doc2.parts.map(rec);
                return cb(__spreadProps(__spreadValues({}, doc2), {
                  parts
                }));
              }
              if (doc2.type === "if-break") {
                const breakContents = doc2.breakContents && rec(doc2.breakContents);
                const flatContents = doc2.flatContents && rec(doc2.flatContents);
                return cb(__spreadProps(__spreadValues({}, doc2), {
                  breakContents,
                  flatContents
                }));
              }
              if (doc2.type === "group" && doc2.expandedStates) {
                const expandedStates = doc2.expandedStates.map(rec);
                const contents = expandedStates[0];
                return cb(__spreadProps(__spreadValues({}, doc2), {
                  contents,
                  expandedStates
                }));
              }
              if (doc2.contents) {
                const contents = rec(doc2.contents);
                return cb(__spreadProps(__spreadValues({}, doc2), {
                  contents
                }));
              }
              return cb(doc2);
            }
          }
          function findInDoc(doc, fn, defaultValue) {
            let result = defaultValue;
            let hasStopped = false;
            function findInDocOnEnterFn(doc2) {
              const maybeResult = fn(doc2);
              if (maybeResult !== void 0) {
                hasStopped = true;
                result = maybeResult;
              }
              if (hasStopped) {
                return false;
              }
            }
            traverseDoc(doc, findInDocOnEnterFn);
            return result;
          }
          function willBreakFn(doc) {
            if (doc.type === "group" && doc.break) {
              return true;
            }
            if (doc.type === "line" && doc.hard) {
              return true;
            }
            if (doc.type === "break-parent") {
              return true;
            }
          }
          function willBreak(doc) {
            return findInDoc(doc, willBreakFn, false);
          }
          function breakParentGroup(groupStack) {
            if (groupStack.length > 0) {
              const parentGroup = getLast(groupStack);
              if (!parentGroup.expandedStates && !parentGroup.break) {
                parentGroup.break = "propagated";
              }
            }
            return null;
          }
          function propagateBreaks(doc) {
            const alreadyVisitedSet = /* @__PURE__ */ new Set();
            const groupStack = [];
            function propagateBreaksOnEnterFn(doc2) {
              if (doc2.type === "break-parent") {
                breakParentGroup(groupStack);
              }
              if (doc2.type === "group") {
                groupStack.push(doc2);
                if (alreadyVisitedSet.has(doc2)) {
                  return false;
                }
                alreadyVisitedSet.add(doc2);
              }
            }
            function propagateBreaksOnExitFn(doc2) {
              if (doc2.type === "group") {
                const group = groupStack.pop();
                if (group.break) {
                  breakParentGroup(groupStack);
                }
              }
            }
            traverseDoc(doc, propagateBreaksOnEnterFn, propagateBreaksOnExitFn, true);
          }
          function removeLinesFn(doc) {
            if (doc.type === "line" && !doc.hard) {
              return doc.soft ? "" : " ";
            }
            if (doc.type === "if-break") {
              return doc.flatContents || "";
            }
            return doc;
          }
          function removeLines(doc) {
            return mapDoc(doc, removeLinesFn);
          }
          var isHardline = (doc, nextDoc) => doc && doc.type === "line" && doc.hard && nextDoc && nextDoc.type === "break-parent";
          function stripDocTrailingHardlineFromDoc(doc) {
            if (!doc) {
              return doc;
            }
            if (isConcat(doc) || doc.type === "fill") {
              const parts = getDocParts(doc);
              while (parts.length > 1 && isHardline(...parts.slice(-2))) {
                parts.length -= 2;
              }
              if (parts.length > 0) {
                const lastPart = stripDocTrailingHardlineFromDoc(getLast(parts));
                parts[parts.length - 1] = lastPart;
              }
              return Array.isArray(doc) ? parts : __spreadProps(__spreadValues({}, doc), {
                parts
              });
            }
            switch (doc.type) {
              case "align":
              case "indent":
              case "indent-if-break":
              case "group":
              case "line-suffix":
              case "label": {
                const contents = stripDocTrailingHardlineFromDoc(doc.contents);
                return __spreadProps(__spreadValues({}, doc), {
                  contents
                });
              }
              case "if-break": {
                const breakContents = stripDocTrailingHardlineFromDoc(doc.breakContents);
                const flatContents = stripDocTrailingHardlineFromDoc(doc.flatContents);
                return __spreadProps(__spreadValues({}, doc), {
                  breakContents,
                  flatContents
                });
              }
            }
            return doc;
          }
          function stripTrailingHardline(doc) {
            return stripDocTrailingHardlineFromDoc(cleanDoc(doc));
          }
          function cleanDocFn(doc) {
            switch (doc.type) {
              case "fill":
                if (doc.parts.every((part) => part === "")) {
                  return "";
                }
                break;
              case "group":
                if (!doc.contents && !doc.id && !doc.break && !doc.expandedStates) {
                  return "";
                }
                if (doc.contents.type === "group" && doc.contents.id === doc.id && doc.contents.break === doc.break && doc.contents.expandedStates === doc.expandedStates) {
                  return doc.contents;
                }
                break;
              case "align":
              case "indent":
              case "indent-if-break":
              case "line-suffix":
                if (!doc.contents) {
                  return "";
                }
                break;
              case "if-break":
                if (!doc.flatContents && !doc.breakContents) {
                  return "";
                }
                break;
            }
            if (!isConcat(doc)) {
              return doc;
            }
            const parts = [];
            for (const part of getDocParts(doc)) {
              if (!part) {
                continue;
              }
              const [currentPart, ...restParts] = isConcat(part) ? getDocParts(part) : [part];
              if (typeof currentPart === "string" && typeof getLast(parts) === "string") {
                parts[parts.length - 1] += currentPart;
              } else {
                parts.push(currentPart);
              }
              parts.push(...restParts);
            }
            if (parts.length === 0) {
              return "";
            }
            if (parts.length === 1) {
              return parts[0];
            }
            return Array.isArray(doc) ? parts : __spreadProps(__spreadValues({}, doc), {
              parts
            });
          }
          function cleanDoc(doc) {
            return mapDoc(doc, (currentDoc) => cleanDocFn(currentDoc));
          }
          function normalizeParts(parts) {
            const newParts = [];
            const restParts = parts.filter(Boolean);
            while (restParts.length > 0) {
              const part = restParts.shift();
              if (!part) {
                continue;
              }
              if (isConcat(part)) {
                restParts.unshift(...getDocParts(part));
                continue;
              }
              if (newParts.length > 0 && typeof getLast(newParts) === "string" && typeof part === "string") {
                newParts[newParts.length - 1] += part;
                continue;
              }
              newParts.push(part);
            }
            return newParts;
          }
          function normalizeDoc(doc) {
            return mapDoc(doc, (currentDoc) => {
              if (Array.isArray(currentDoc)) {
                return normalizeParts(currentDoc);
              }
              if (!currentDoc.parts) {
                return currentDoc;
              }
              return __spreadProps(__spreadValues({}, currentDoc), {
                parts: normalizeParts(currentDoc.parts)
              });
            });
          }
          function replaceEndOfLine(doc) {
            return mapDoc(doc, (currentDoc) => typeof currentDoc === "string" && currentDoc.includes("\n") ? replaceTextEndOfLine(currentDoc) : currentDoc);
          }
          function replaceTextEndOfLine(text) {
            let replacement = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : literalline;
            return join(replacement, text.split("\n")).parts;
          }
          function canBreakFn(doc) {
            if (doc.type === "line") {
              return true;
            }
          }
          function canBreak(doc) {
            return findInDoc(doc, canBreakFn, false);
          }
          module2.exports = {
            isConcat,
            getDocParts,
            willBreak,
            traverseDoc,
            findInDoc,
            mapDoc,
            propagateBreaks,
            removeLines,
            stripTrailingHardline,
            normalizeParts,
            normalizeDoc,
            cleanDoc,
            replaceTextEndOfLine,
            replaceEndOfLine,
            canBreak
          };
        }
      });
      var require_doc_printer = __commonJS2({
        "src/document/doc-printer.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var {
            convertEndOfLineToChars
          } = require_end_of_line();
          var getLast = require_get_last();
          var getStringWidth = require_get_string_width();
          var {
            fill,
            cursor,
            indent
          } = require_doc_builders();
          var {
            isConcat,
            getDocParts
          } = require_doc_utils();
          var groupModeMap;
          var MODE_BREAK = 1;
          var MODE_FLAT = 2;
          function rootIndent() {
            return {
              value: "",
              length: 0,
              queue: []
            };
          }
          function makeIndent(ind, options) {
            return generateInd(ind, {
              type: "indent"
            }, options);
          }
          function makeAlign(indent2, widthOrDoc, options) {
            if (widthOrDoc === Number.NEGATIVE_INFINITY) {
              return indent2.root || rootIndent();
            }
            if (widthOrDoc < 0) {
              return generateInd(indent2, {
                type: "dedent"
              }, options);
            }
            if (!widthOrDoc) {
              return indent2;
            }
            if (widthOrDoc.type === "root") {
              return __spreadProps(__spreadValues({}, indent2), {
                root: indent2
              });
            }
            const alignType = typeof widthOrDoc === "string" ? "stringAlign" : "numberAlign";
            return generateInd(indent2, {
              type: alignType,
              n: widthOrDoc
            }, options);
          }
          function generateInd(ind, newPart, options) {
            const queue = newPart.type === "dedent" ? ind.queue.slice(0, -1) : [...ind.queue, newPart];
            let value = "";
            let length = 0;
            let lastTabs = 0;
            let lastSpaces = 0;
            for (const part of queue) {
              switch (part.type) {
                case "indent":
                  flush();
                  if (options.useTabs) {
                    addTabs(1);
                  } else {
                    addSpaces(options.tabWidth);
                  }
                  break;
                case "stringAlign":
                  flush();
                  value += part.n;
                  length += part.n.length;
                  break;
                case "numberAlign":
                  lastTabs += 1;
                  lastSpaces += part.n;
                  break;
                default:
                  throw new Error("Unexpected type '".concat(part.type, "'"));
              }
            }
            flushSpaces();
            return __spreadProps(__spreadValues({}, ind), {
              value,
              length,
              queue
            });
            function addTabs(count) {
              value += "	".repeat(count);
              length += options.tabWidth * count;
            }
            function addSpaces(count) {
              value += " ".repeat(count);
              length += count;
            }
            function flush() {
              if (options.useTabs) {
                flushTabs();
              } else {
                flushSpaces();
              }
            }
            function flushTabs() {
              if (lastTabs > 0) {
                addTabs(lastTabs);
              }
              resetLast();
            }
            function flushSpaces() {
              if (lastSpaces > 0) {
                addSpaces(lastSpaces);
              }
              resetLast();
            }
            function resetLast() {
              lastTabs = 0;
              lastSpaces = 0;
            }
          }
          function trim(out) {
            if (out.length === 0) {
              return 0;
            }
            let trimCount = 0;
            while (out.length > 0 && typeof getLast(out) === "string" && /^[\t ]*$/.test(getLast(out))) {
              trimCount += out.pop().length;
            }
            if (out.length > 0 && typeof getLast(out) === "string") {
              const trimmed = getLast(out).replace(/[\t ]*$/, "");
              trimCount += getLast(out).length - trimmed.length;
              out[out.length - 1] = trimmed;
            }
            return trimCount;
          }
          function fits(next, restCommands, width, options, hasLineSuffix, mustBeFlat) {
            let restIdx = restCommands.length;
            const cmds = [next];
            const out = [];
            while (width >= 0) {
              if (cmds.length === 0) {
                if (restIdx === 0) {
                  return true;
                }
                cmds.push(restCommands[restIdx - 1]);
                restIdx--;
                continue;
              }
              const [ind, mode, doc] = cmds.pop();
              if (typeof doc === "string") {
                out.push(doc);
                width -= getStringWidth(doc);
              } else if (isConcat(doc)) {
                const parts = getDocParts(doc);
                for (let i = parts.length - 1; i >= 0; i--) {
                  cmds.push([ind, mode, parts[i]]);
                }
              } else {
                switch (doc.type) {
                  case "indent":
                    cmds.push([makeIndent(ind, options), mode, doc.contents]);
                    break;
                  case "align":
                    cmds.push([makeAlign(ind, doc.n, options), mode, doc.contents]);
                    break;
                  case "trim":
                    width += trim(out);
                    break;
                  case "group": {
                    if (mustBeFlat && doc.break) {
                      return false;
                    }
                    const groupMode = doc.break ? MODE_BREAK : mode;
                    cmds.push([ind, groupMode, doc.expandedStates && groupMode === MODE_BREAK ? getLast(doc.expandedStates) : doc.contents]);
                    if (doc.id) {
                      groupModeMap[doc.id] = groupMode;
                    }
                    break;
                  }
                  case "fill":
                    for (let i = doc.parts.length - 1; i >= 0; i--) {
                      cmds.push([ind, mode, doc.parts[i]]);
                    }
                    break;
                  case "if-break":
                  case "indent-if-break": {
                    const groupMode = doc.groupId ? groupModeMap[doc.groupId] : mode;
                    if (groupMode === MODE_BREAK) {
                      const breakContents = doc.type === "if-break" ? doc.breakContents : doc.negate ? doc.contents : indent(doc.contents);
                      if (breakContents) {
                        cmds.push([ind, mode, breakContents]);
                      }
                    }
                    if (groupMode === MODE_FLAT) {
                      const flatContents = doc.type === "if-break" ? doc.flatContents : doc.negate ? indent(doc.contents) : doc.contents;
                      if (flatContents) {
                        cmds.push([ind, mode, flatContents]);
                      }
                    }
                    break;
                  }
                  case "line":
                    switch (mode) {
                      case MODE_FLAT:
                        if (!doc.hard) {
                          if (!doc.soft) {
                            out.push(" ");
                            width -= 1;
                          }
                          break;
                        }
                        return true;
                      case MODE_BREAK:
                        return true;
                    }
                    break;
                  case "line-suffix":
                    hasLineSuffix = true;
                    break;
                  case "line-suffix-boundary":
                    if (hasLineSuffix) {
                      return false;
                    }
                    break;
                  case "label":
                    cmds.push([ind, mode, doc.contents]);
                    break;
                }
              }
            }
            return false;
          }
          function printDocToString(doc, options) {
            groupModeMap = {};
            const width = options.printWidth;
            const newLine = convertEndOfLineToChars(options.endOfLine);
            let pos = 0;
            const cmds = [[rootIndent(), MODE_BREAK, doc]];
            const out = [];
            let shouldRemeasure = false;
            let lineSuffix = [];
            while (cmds.length > 0) {
              const [ind, mode, doc2] = cmds.pop();
              if (typeof doc2 === "string") {
                const formatted = newLine !== "\n" ? doc2.replace(/\n/g, newLine) : doc2;
                out.push(formatted);
                pos += getStringWidth(formatted);
              } else if (isConcat(doc2)) {
                const parts = getDocParts(doc2);
                for (let i = parts.length - 1; i >= 0; i--) {
                  cmds.push([ind, mode, parts[i]]);
                }
              } else {
                switch (doc2.type) {
                  case "cursor":
                    out.push(cursor.placeholder);
                    break;
                  case "indent":
                    cmds.push([makeIndent(ind, options), mode, doc2.contents]);
                    break;
                  case "align":
                    cmds.push([makeAlign(ind, doc2.n, options), mode, doc2.contents]);
                    break;
                  case "trim":
                    pos -= trim(out);
                    break;
                  case "group":
                    switch (mode) {
                      case MODE_FLAT:
                        if (!shouldRemeasure) {
                          cmds.push([ind, doc2.break ? MODE_BREAK : MODE_FLAT, doc2.contents]);
                          break;
                        }
                      case MODE_BREAK: {
                        shouldRemeasure = false;
                        const next = [ind, MODE_FLAT, doc2.contents];
                        const rem = width - pos;
                        const hasLineSuffix = lineSuffix.length > 0;
                        if (!doc2.break && fits(next, cmds, rem, options, hasLineSuffix)) {
                          cmds.push(next);
                        } else {
                          if (doc2.expandedStates) {
                            const mostExpanded = getLast(doc2.expandedStates);
                            if (doc2.break) {
                              cmds.push([ind, MODE_BREAK, mostExpanded]);
                              break;
                            } else {
                              for (let i = 1; i < doc2.expandedStates.length + 1; i++) {
                                if (i >= doc2.expandedStates.length) {
                                  cmds.push([ind, MODE_BREAK, mostExpanded]);
                                  break;
                                } else {
                                  const state = doc2.expandedStates[i];
                                  const cmd = [ind, MODE_FLAT, state];
                                  if (fits(cmd, cmds, rem, options, hasLineSuffix)) {
                                    cmds.push(cmd);
                                    break;
                                  }
                                }
                              }
                            }
                          } else {
                            cmds.push([ind, MODE_BREAK, doc2.contents]);
                          }
                        }
                        break;
                      }
                    }
                    if (doc2.id) {
                      groupModeMap[doc2.id] = getLast(cmds)[1];
                    }
                    break;
                  case "fill": {
                    const rem = width - pos;
                    const {
                      parts
                    } = doc2;
                    if (parts.length === 0) {
                      break;
                    }
                    const [content, whitespace] = parts;
                    const contentFlatCmd = [ind, MODE_FLAT, content];
                    const contentBreakCmd = [ind, MODE_BREAK, content];
                    const contentFits = fits(contentFlatCmd, [], rem, options, lineSuffix.length > 0, true);
                    if (parts.length === 1) {
                      if (contentFits) {
                        cmds.push(contentFlatCmd);
                      } else {
                        cmds.push(contentBreakCmd);
                      }
                      break;
                    }
                    const whitespaceFlatCmd = [ind, MODE_FLAT, whitespace];
                    const whitespaceBreakCmd = [ind, MODE_BREAK, whitespace];
                    if (parts.length === 2) {
                      if (contentFits) {
                        cmds.push(whitespaceFlatCmd, contentFlatCmd);
                      } else {
                        cmds.push(whitespaceBreakCmd, contentBreakCmd);
                      }
                      break;
                    }
                    parts.splice(0, 2);
                    const remainingCmd = [ind, mode, fill(parts)];
                    const secondContent = parts[0];
                    const firstAndSecondContentFlatCmd = [ind, MODE_FLAT, [content, whitespace, secondContent]];
                    const firstAndSecondContentFits = fits(firstAndSecondContentFlatCmd, [], rem, options, lineSuffix.length > 0, true);
                    if (firstAndSecondContentFits) {
                      cmds.push(remainingCmd, whitespaceFlatCmd, contentFlatCmd);
                    } else if (contentFits) {
                      cmds.push(remainingCmd, whitespaceBreakCmd, contentFlatCmd);
                    } else {
                      cmds.push(remainingCmd, whitespaceBreakCmd, contentBreakCmd);
                    }
                    break;
                  }
                  case "if-break":
                  case "indent-if-break": {
                    const groupMode = doc2.groupId ? groupModeMap[doc2.groupId] : mode;
                    if (groupMode === MODE_BREAK) {
                      const breakContents = doc2.type === "if-break" ? doc2.breakContents : doc2.negate ? doc2.contents : indent(doc2.contents);
                      if (breakContents) {
                        cmds.push([ind, mode, breakContents]);
                      }
                    }
                    if (groupMode === MODE_FLAT) {
                      const flatContents = doc2.type === "if-break" ? doc2.flatContents : doc2.negate ? indent(doc2.contents) : doc2.contents;
                      if (flatContents) {
                        cmds.push([ind, mode, flatContents]);
                      }
                    }
                    break;
                  }
                  case "line-suffix":
                    lineSuffix.push([ind, mode, doc2.contents]);
                    break;
                  case "line-suffix-boundary":
                    if (lineSuffix.length > 0) {
                      cmds.push([ind, mode, {
                        type: "line",
                        hard: true
                      }]);
                    }
                    break;
                  case "line":
                    switch (mode) {
                      case MODE_FLAT:
                        if (!doc2.hard) {
                          if (!doc2.soft) {
                            out.push(" ");
                            pos += 1;
                          }
                          break;
                        } else {
                          shouldRemeasure = true;
                        }
                      case MODE_BREAK:
                        if (lineSuffix.length > 0) {
                          cmds.push([ind, mode, doc2], ...lineSuffix.reverse());
                          lineSuffix = [];
                          break;
                        }
                        if (doc2.literal) {
                          if (ind.root) {
                            out.push(newLine, ind.root.value);
                            pos = ind.root.length;
                          } else {
                            out.push(newLine);
                            pos = 0;
                          }
                        } else {
                          pos -= trim(out);
                          out.push(newLine + ind.value);
                          pos = ind.length;
                        }
                        break;
                    }
                    break;
                  case "label":
                    cmds.push([ind, mode, doc2.contents]);
                    break;
                  default:
                }
              }
              if (cmds.length === 0 && lineSuffix.length > 0) {
                cmds.push(...lineSuffix.reverse());
                lineSuffix = [];
              }
            }
            const cursorPlaceholderIndex = out.indexOf(cursor.placeholder);
            if (cursorPlaceholderIndex !== -1) {
              const otherCursorPlaceholderIndex = out.indexOf(cursor.placeholder, cursorPlaceholderIndex + 1);
              const beforeCursor = out.slice(0, cursorPlaceholderIndex).join("");
              const aroundCursor = out.slice(cursorPlaceholderIndex + 1, otherCursorPlaceholderIndex).join("");
              const afterCursor = out.slice(otherCursorPlaceholderIndex + 1).join("");
              return {
                formatted: beforeCursor + aroundCursor + afterCursor,
                cursorNodeStart: beforeCursor.length,
                cursorNodeText: aroundCursor
              };
            }
            return {
              formatted: out.join("")
            };
          }
          module2.exports = {
            printDocToString
          };
        }
      });
      var require_doc_debug = __commonJS2({
        "src/document/doc-debug.js"(exports2, module2) {
          "use strict";
          init_define_process();
          var {
            isConcat,
            getDocParts
          } = require_doc_utils();
          function flattenDoc(doc) {
            if (!doc) {
              return "";
            }
            if (isConcat(doc)) {
              const res = [];
              for (const part of getDocParts(doc)) {
                if (isConcat(part)) {
                  res.push(...flattenDoc(part).parts);
                } else {
                  const flattened = flattenDoc(part);
                  if (flattened !== "") {
                    res.push(flattened);
                  }
                }
              }
              return {
                type: "concat",
                parts: res
              };
            }
            if (doc.type === "if-break") {
              return __spreadProps(__spreadValues({}, doc), {
                breakContents: flattenDoc(doc.breakContents),
                flatContents: flattenDoc(doc.flatContents)
              });
            }
            if (doc.type === "group") {
              return __spreadProps(__spreadValues({}, doc), {
                contents: flattenDoc(doc.contents),
                expandedStates: doc.expandedStates && doc.expandedStates.map(flattenDoc)
              });
            }
            if (doc.type === "fill") {
              return {
                type: "fill",
                parts: doc.parts.map(flattenDoc)
              };
            }
            if (doc.contents) {
              return __spreadProps(__spreadValues({}, doc), {
                contents: flattenDoc(doc.contents)
              });
            }
            return doc;
          }
          function printDocToDebug(doc) {
            const printedSymbols = /* @__PURE__ */ Object.create(null);
            const usedKeysForSymbols = /* @__PURE__ */ new Set();
            return printDoc(flattenDoc(doc));
            function printDoc(doc2, index, parentParts) {
              if (typeof doc2 === "string") {
                return JSON.stringify(doc2);
              }
              if (isConcat(doc2)) {
                const printed = getDocParts(doc2).map(printDoc).filter(Boolean);
                return printed.length === 1 ? printed[0] : "[".concat(printed.join(", "), "]");
              }
              if (doc2.type === "line") {
                const withBreakParent = Array.isArray(parentParts) && parentParts[index + 1] && parentParts[index + 1].type === "break-parent";
                if (doc2.literal) {
                  return withBreakParent ? "literalline" : "literallineWithoutBreakParent";
                }
                if (doc2.hard) {
                  return withBreakParent ? "hardline" : "hardlineWithoutBreakParent";
                }
                if (doc2.soft) {
                  return "softline";
                }
                return "line";
              }
              if (doc2.type === "break-parent") {
                const afterHardline = Array.isArray(parentParts) && parentParts[index - 1] && parentParts[index - 1].type === "line" && parentParts[index - 1].hard;
                return afterHardline ? void 0 : "breakParent";
              }
              if (doc2.type === "trim") {
                return "trim";
              }
              if (doc2.type === "indent") {
                return "indent(" + printDoc(doc2.contents) + ")";
              }
              if (doc2.type === "align") {
                return doc2.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + printDoc(doc2.contents) + ")" : doc2.n < 0 ? "dedent(" + printDoc(doc2.contents) + ")" : doc2.n.type === "root" ? "markAsRoot(" + printDoc(doc2.contents) + ")" : "align(" + JSON.stringify(doc2.n) + ", " + printDoc(doc2.contents) + ")";
              }
              if (doc2.type === "if-break") {
                return "ifBreak(" + printDoc(doc2.breakContents) + (doc2.flatContents ? ", " + printDoc(doc2.flatContents) : "") + (doc2.groupId ? (!doc2.flatContents ? ', ""' : "") + ", { groupId: ".concat(printGroupId(doc2.groupId), " }") : "") + ")";
              }
              if (doc2.type === "indent-if-break") {
                const optionsParts = [];
                if (doc2.negate) {
                  optionsParts.push("negate: true");
                }
                if (doc2.groupId) {
                  optionsParts.push("groupId: ".concat(printGroupId(doc2.groupId)));
                }
                const options = optionsParts.length > 0 ? ", { ".concat(optionsParts.join(", "), " }") : "";
                return "indentIfBreak(".concat(printDoc(doc2.contents)).concat(options, ")");
              }
              if (doc2.type === "group") {
                const optionsParts = [];
                if (doc2.break && doc2.break !== "propagated") {
                  optionsParts.push("shouldBreak: true");
                }
                if (doc2.id) {
                  optionsParts.push("id: ".concat(printGroupId(doc2.id)));
                }
                const options = optionsParts.length > 0 ? ", { ".concat(optionsParts.join(", "), " }") : "";
                if (doc2.expandedStates) {
                  return "conditionalGroup([".concat(doc2.expandedStates.map((part) => printDoc(part)).join(","), "]").concat(options, ")");
                }
                return "group(".concat(printDoc(doc2.contents)).concat(options, ")");
              }
              if (doc2.type === "fill") {
                return "fill([".concat(doc2.parts.map((part) => printDoc(part)).join(", "), "])");
              }
              if (doc2.type === "line-suffix") {
                return "lineSuffix(" + printDoc(doc2.contents) + ")";
              }
              if (doc2.type === "line-suffix-boundary") {
                return "lineSuffixBoundary";
              }
              if (doc2.type === "label") {
                return "label(".concat(JSON.stringify(doc2.label), ", ").concat(printDoc(doc2.contents), ")");
              }
              throw new Error("Unknown doc type " + doc2.type);
            }
            function printGroupId(id) {
              if (typeof id !== "symbol") {
                return JSON.stringify(String(id));
              }
              if (id in printedSymbols) {
                return printedSymbols[id];
              }
              const prefix = String(id).slice(7, -1) || "symbol";
              for (let counter = 0; ; counter++) {
                const key = prefix + (counter > 0 ? " #".concat(counter) : "");
                if (!usedKeysForSymbols.has(key)) {
                  usedKeysForSymbols.add(key);
                  return printedSymbols[id] = "Symbol.for(".concat(JSON.stringify(key), ")");
                }
              }
            }
          }
          module2.exports = {
            printDocToDebug
          };
        }
      });
      init_define_process();
      module.exports = {
        builders: require_doc_builders(),
        printer: require_doc_printer(),
        utils: require_doc_utils(),
        debug: require_doc_debug()
      };
    }
  });
  "use strict";
  return require_doc();
})();
return doc;
});