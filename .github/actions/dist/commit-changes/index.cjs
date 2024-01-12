"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/chevrotain/lib_esm/src/version.js
var VERSION;
var init_version = __esm({
  "node_modules/chevrotain/lib_esm/src/version.js"() {
    "use strict";
    VERSION = "7.1.1";
  }
});

// node_modules/chevrotain/lib_esm/src/utils/utils.js
function isEmpty(arr) {
  return arr && arr.length === 0;
}
function keys(obj) {
  if (obj === void 0 || obj === null) {
    return [];
  }
  return Object.keys(obj);
}
function values(obj) {
  var vals = [];
  var keys2 = Object.keys(obj);
  for (var i = 0; i < keys2.length; i++) {
    vals.push(obj[keys2[i]]);
  }
  return vals;
}
function mapValues(obj, callback) {
  var result = [];
  var objKeys = keys(obj);
  for (var idx = 0; idx < objKeys.length; idx++) {
    var currKey = objKeys[idx];
    result.push(callback.call(null, obj[currKey], currKey));
  }
  return result;
}
function map(arr, callback) {
  var result = [];
  for (var idx = 0; idx < arr.length; idx++) {
    result.push(callback.call(null, arr[idx], idx));
  }
  return result;
}
function flatten(arr) {
  var result = [];
  for (var idx = 0; idx < arr.length; idx++) {
    var currItem = arr[idx];
    if (Array.isArray(currItem)) {
      result = result.concat(flatten(currItem));
    } else {
      result.push(currItem);
    }
  }
  return result;
}
function first(arr) {
  return isEmpty(arr) ? void 0 : arr[0];
}
function last(arr) {
  var len = arr && arr.length;
  return len ? arr[len - 1] : void 0;
}
function forEach(collection, iteratorCallback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iteratorCallback.call(null, collection[i], i);
    }
  } else if (isObject(collection)) {
    var colKeys = keys(collection);
    for (var i = 0; i < colKeys.length; i++) {
      var key = colKeys[i];
      var value = collection[key];
      iteratorCallback.call(null, value, key);
    }
  } else {
    throw Error("non exhaustive match");
  }
}
function isString(item) {
  return typeof item === "string";
}
function isUndefined(item) {
  return item === void 0;
}
function isFunction(item) {
  return item instanceof Function;
}
function drop(arr, howMuch) {
  if (howMuch === void 0) {
    howMuch = 1;
  }
  return arr.slice(howMuch, arr.length);
}
function dropRight(arr, howMuch) {
  if (howMuch === void 0) {
    howMuch = 1;
  }
  return arr.slice(0, arr.length - howMuch);
}
function filter(arr, predicate) {
  var result = [];
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (predicate.call(null, item)) {
        result.push(item);
      }
    }
  }
  return result;
}
function reject(arr, predicate) {
  return filter(arr, function(item) {
    return !predicate(item);
  });
}
function pick(obj, predicate) {
  var keys2 = Object.keys(obj);
  var result = {};
  for (var i = 0; i < keys2.length; i++) {
    var currKey = keys2[i];
    var currItem = obj[currKey];
    if (predicate(currItem)) {
      result[currKey] = currItem;
    }
  }
  return result;
}
function has(obj, prop) {
  if (isObject(obj)) {
    return obj.hasOwnProperty(prop);
  }
  return false;
}
function contains(arr, item) {
  return find(arr, function(currItem) {
    return currItem === item;
  }) !== void 0 ? true : false;
}
function cloneArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
function cloneObj(obj) {
  var clonedObj = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}
function find(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (predicate.call(null, item)) {
      return item;
    }
  }
  return void 0;
}
function findAll(arr, predicate) {
  var found = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (predicate.call(null, item)) {
      found.push(item);
    }
  }
  return found;
}
function reduce(arrOrObj, iterator, initial) {
  var isArr = Array.isArray(arrOrObj);
  var vals = isArr ? arrOrObj : values(arrOrObj);
  var objKeys = isArr ? [] : keys(arrOrObj);
  var accumulator = initial;
  for (var i = 0; i < vals.length; i++) {
    accumulator = iterator.call(null, accumulator, vals[i], isArr ? i : objKeys[i]);
  }
  return accumulator;
}
function compact(arr) {
  return reject(arr, function(item) {
    return item === null || item === void 0;
  });
}
function uniq(arr, identity) {
  if (identity === void 0) {
    identity = function(item) {
      return item;
    };
  }
  var identities = [];
  return reduce(arr, function(result, currItem) {
    var currIdentity = identity(currItem);
    if (contains(identities, currIdentity)) {
      return result;
    } else {
      identities.push(currIdentity);
      return result.concat(currItem);
    }
  }, []);
}
function partial(func) {
  var restArgs = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    restArgs[_i - 1] = arguments[_i];
  }
  var firstArg = [null];
  var allArgs = firstArg.concat(restArgs);
  return Function.bind.apply(func, allArgs);
}
function isArray(obj) {
  return Array.isArray(obj);
}
function isRegExp(obj) {
  return obj instanceof RegExp;
}
function isObject(obj) {
  return obj instanceof Object;
}
function every(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i)) {
      return false;
    }
  }
  return true;
}
function difference(arr, values2) {
  return reject(arr, function(item) {
    return contains(values2, item);
  });
}
function some(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return true;
    }
  }
  return false;
}
function indexOf(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
function sortBy(arr, orderFunc) {
  var result = cloneArr(arr);
  result.sort(function(a, b) {
    return orderFunc(a) - orderFunc(b);
  });
  return result;
}
function zipObject(keys2, values2) {
  if (keys2.length !== values2.length) {
    throw Error("can't zipObject with different number of keys and values!");
  }
  var result = {};
  for (var i = 0; i < keys2.length; i++) {
    result[keys2[i]] = values2[i];
  }
  return result;
}
function assign(target) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  for (var i = 0; i < sources.length; i++) {
    var curSource = sources[i];
    var currSourceKeys = keys(curSource);
    for (var j = 0; j < currSourceKeys.length; j++) {
      var currKey = currSourceKeys[j];
      target[currKey] = curSource[currKey];
    }
  }
  return target;
}
function assignNoOverwrite(target) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  for (var i = 0; i < sources.length; i++) {
    var curSource = sources[i];
    var currSourceKeys = keys(curSource);
    for (var j = 0; j < currSourceKeys.length; j++) {
      var currKey = currSourceKeys[j];
      if (!has(target, currKey)) {
        target[currKey] = curSource[currKey];
      }
    }
  }
  return target;
}
function defaults() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return assignNoOverwrite.apply(null, [{}].concat(sources));
}
function groupBy(arr, groupKeyFunc) {
  var result = {};
  forEach(arr, function(item) {
    var currGroupKey = groupKeyFunc(item);
    var currGroupArr = result[currGroupKey];
    if (currGroupArr) {
      currGroupArr.push(item);
    } else {
      result[currGroupKey] = [item];
    }
  });
  return result;
}
function merge(obj1, obj2) {
  var result = cloneObj(obj1);
  var keys2 = keys(obj2);
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[i];
    var value = obj2[key];
    result[key] = value;
  }
  return result;
}
function NOOP() {
}
function IDENTITY(item) {
  return item;
}
function packArray(holeyArr) {
  var result = [];
  for (var i = 0; i < holeyArr.length; i++) {
    var orgValue = holeyArr[i];
    result.push(orgValue !== void 0 ? orgValue : void 0);
  }
  return result;
}
function PRINT_ERROR(msg) {
  if (console && console.error) {
    console.error("Error: " + msg);
  }
}
function PRINT_WARNING(msg) {
  if (console && console.warn) {
    console.warn("Warning: " + msg);
  }
}
function isES2015MapSupported() {
  return typeof Map === "function";
}
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach(function(baseCtor) {
    var baseProto = baseCtor.prototype;
    Object.getOwnPropertyNames(baseProto).forEach(function(propName) {
      if (propName === "constructor") {
        return;
      }
      var basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
      if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
        Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
      } else {
        derivedCtor.prototype[propName] = baseCtor.prototype[propName];
      }
    });
  });
}
function toFastProperties(toBecomeFast) {
  function FakeConstructor() {
  }
  FakeConstructor.prototype = toBecomeFast;
  var fakeInstance = new FakeConstructor();
  function fakeAccess() {
    return typeof fakeInstance.bar;
  }
  fakeAccess();
  fakeAccess();
  return toBecomeFast;
  eval(toBecomeFast);
}
function peek(arr) {
  return arr[arr.length - 1];
}
function timer(func) {
  var start = (/* @__PURE__ */ new Date()).getTime();
  var val = func();
  var end = (/* @__PURE__ */ new Date()).getTime();
  var total = end - start;
  return { time: total, value: val };
}
var init_utils = __esm({
  "node_modules/chevrotain/lib_esm/src/utils/utils.js"() {
    "use strict";
  }
});

// node_modules/regexp-to-ast/lib/regexp-to-ast.js
var require_regexp_to_ast = __commonJS({
  "node_modules/regexp-to-ast/lib/regexp-to-ast.js"(exports2, module2) {
    "use strict";
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module2 === "object" && module2.exports) {
        module2.exports = factory();
      } else {
        root.regexpToAst = factory();
      }
    })(
      typeof self !== "undefined" ? (
        // istanbul ignore next
        self
      ) : exports2,
      function() {
        function RegExpParser2() {
        }
        RegExpParser2.prototype.saveState = function() {
          return {
            idx: this.idx,
            input: this.input,
            groupIdx: this.groupIdx
          };
        };
        RegExpParser2.prototype.restoreState = function(newState) {
          this.idx = newState.idx;
          this.input = newState.input;
          this.groupIdx = newState.groupIdx;
        };
        RegExpParser2.prototype.pattern = function(input) {
          this.idx = 0;
          this.input = input;
          this.groupIdx = 0;
          this.consumeChar("/");
          var value = this.disjunction();
          this.consumeChar("/");
          var flags = {
            type: "Flags",
            loc: { begin: this.idx, end: input.length },
            global: false,
            ignoreCase: false,
            multiLine: false,
            unicode: false,
            sticky: false
          };
          while (this.isRegExpFlag()) {
            switch (this.popChar()) {
              case "g":
                addFlag(flags, "global");
                break;
              case "i":
                addFlag(flags, "ignoreCase");
                break;
              case "m":
                addFlag(flags, "multiLine");
                break;
              case "u":
                addFlag(flags, "unicode");
                break;
              case "y":
                addFlag(flags, "sticky");
                break;
            }
          }
          if (this.idx !== this.input.length) {
            throw Error(
              "Redundant input: " + this.input.substring(this.idx)
            );
          }
          return {
            type: "Pattern",
            flags,
            value,
            loc: this.loc(0)
          };
        };
        RegExpParser2.prototype.disjunction = function() {
          var alts = [];
          var begin = this.idx;
          alts.push(this.alternative());
          while (this.peekChar() === "|") {
            this.consumeChar("|");
            alts.push(this.alternative());
          }
          return { type: "Disjunction", value: alts, loc: this.loc(begin) };
        };
        RegExpParser2.prototype.alternative = function() {
          var terms = [];
          var begin = this.idx;
          while (this.isTerm()) {
            terms.push(this.term());
          }
          return { type: "Alternative", value: terms, loc: this.loc(begin) };
        };
        RegExpParser2.prototype.term = function() {
          if (this.isAssertion()) {
            return this.assertion();
          } else {
            return this.atom();
          }
        };
        RegExpParser2.prototype.assertion = function() {
          var begin = this.idx;
          switch (this.popChar()) {
            case "^":
              return {
                type: "StartAnchor",
                loc: this.loc(begin)
              };
            case "$":
              return { type: "EndAnchor", loc: this.loc(begin) };
            case "\\":
              switch (this.popChar()) {
                case "b":
                  return {
                    type: "WordBoundary",
                    loc: this.loc(begin)
                  };
                case "B":
                  return {
                    type: "NonWordBoundary",
                    loc: this.loc(begin)
                  };
              }
              throw Error("Invalid Assertion Escape");
            case "(":
              this.consumeChar("?");
              var type;
              switch (this.popChar()) {
                case "=":
                  type = "Lookahead";
                  break;
                case "!":
                  type = "NegativeLookahead";
                  break;
              }
              ASSERT_EXISTS(type);
              var disjunction = this.disjunction();
              this.consumeChar(")");
              return {
                type,
                value: disjunction,
                loc: this.loc(begin)
              };
          }
          ASSERT_NEVER_REACH_HERE();
        };
        RegExpParser2.prototype.quantifier = function(isBacktracking) {
          var range;
          var begin = this.idx;
          switch (this.popChar()) {
            case "*":
              range = {
                atLeast: 0,
                atMost: Infinity
              };
              break;
            case "+":
              range = {
                atLeast: 1,
                atMost: Infinity
              };
              break;
            case "?":
              range = {
                atLeast: 0,
                atMost: 1
              };
              break;
            case "{":
              var atLeast = this.integerIncludingZero();
              switch (this.popChar()) {
                case "}":
                  range = {
                    atLeast,
                    atMost: atLeast
                  };
                  break;
                case ",":
                  var atMost;
                  if (this.isDigit()) {
                    atMost = this.integerIncludingZero();
                    range = {
                      atLeast,
                      atMost
                    };
                  } else {
                    range = {
                      atLeast,
                      atMost: Infinity
                    };
                  }
                  this.consumeChar("}");
                  break;
              }
              if (isBacktracking === true && range === void 0) {
                return void 0;
              }
              ASSERT_EXISTS(range);
              break;
          }
          if (isBacktracking === true && range === void 0) {
            return void 0;
          }
          ASSERT_EXISTS(range);
          if (this.peekChar(0) === "?") {
            this.consumeChar("?");
            range.greedy = false;
          } else {
            range.greedy = true;
          }
          range.type = "Quantifier";
          range.loc = this.loc(begin);
          return range;
        };
        RegExpParser2.prototype.atom = function() {
          var atom;
          var begin = this.idx;
          switch (this.peekChar()) {
            case ".":
              atom = this.dotAll();
              break;
            case "\\":
              atom = this.atomEscape();
              break;
            case "[":
              atom = this.characterClass();
              break;
            case "(":
              atom = this.group();
              break;
          }
          if (atom === void 0 && this.isPatternCharacter()) {
            atom = this.patternCharacter();
          }
          ASSERT_EXISTS(atom);
          atom.loc = this.loc(begin);
          if (this.isQuantifier()) {
            atom.quantifier = this.quantifier();
          }
          return atom;
        };
        RegExpParser2.prototype.dotAll = function() {
          this.consumeChar(".");
          return {
            type: "Set",
            complement: true,
            value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
          };
        };
        RegExpParser2.prototype.atomEscape = function() {
          this.consumeChar("\\");
          switch (this.peekChar()) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              return this.decimalEscapeAtom();
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
              return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
              return this.controlEscapeAtom();
            case "c":
              return this.controlLetterEscapeAtom();
            case "0":
              return this.nulCharacterAtom();
            case "x":
              return this.hexEscapeSequenceAtom();
            case "u":
              return this.regExpUnicodeEscapeSequenceAtom();
            default:
              return this.identityEscapeAtom();
          }
        };
        RegExpParser2.prototype.decimalEscapeAtom = function() {
          var value = this.positiveInteger();
          return { type: "GroupBackReference", value };
        };
        RegExpParser2.prototype.characterClassEscape = function() {
          var set;
          var complement = false;
          switch (this.popChar()) {
            case "d":
              set = digitsCharCodes;
              break;
            case "D":
              set = digitsCharCodes;
              complement = true;
              break;
            case "s":
              set = whitespaceCodes;
              break;
            case "S":
              set = whitespaceCodes;
              complement = true;
              break;
            case "w":
              set = wordCharCodes;
              break;
            case "W":
              set = wordCharCodes;
              complement = true;
              break;
          }
          ASSERT_EXISTS(set);
          return { type: "Set", value: set, complement };
        };
        RegExpParser2.prototype.controlEscapeAtom = function() {
          var escapeCode;
          switch (this.popChar()) {
            case "f":
              escapeCode = cc("\f");
              break;
            case "n":
              escapeCode = cc("\n");
              break;
            case "r":
              escapeCode = cc("\r");
              break;
            case "t":
              escapeCode = cc("	");
              break;
            case "v":
              escapeCode = cc("\v");
              break;
          }
          ASSERT_EXISTS(escapeCode);
          return { type: "Character", value: escapeCode };
        };
        RegExpParser2.prototype.controlLetterEscapeAtom = function() {
          this.consumeChar("c");
          var letter = this.popChar();
          if (/[a-zA-Z]/.test(letter) === false) {
            throw Error("Invalid ");
          }
          var letterCode = letter.toUpperCase().charCodeAt(0) - 64;
          return { type: "Character", value: letterCode };
        };
        RegExpParser2.prototype.nulCharacterAtom = function() {
          this.consumeChar("0");
          return { type: "Character", value: cc("\0") };
        };
        RegExpParser2.prototype.hexEscapeSequenceAtom = function() {
          this.consumeChar("x");
          return this.parseHexDigits(2);
        };
        RegExpParser2.prototype.regExpUnicodeEscapeSequenceAtom = function() {
          this.consumeChar("u");
          return this.parseHexDigits(4);
        };
        RegExpParser2.prototype.identityEscapeAtom = function() {
          var escapedChar = this.popChar();
          return { type: "Character", value: cc(escapedChar) };
        };
        RegExpParser2.prototype.classPatternCharacterAtom = function() {
          switch (this.peekChar()) {
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
            case "\\":
            case "]":
              throw Error("TBD");
            default:
              var nextChar = this.popChar();
              return { type: "Character", value: cc(nextChar) };
          }
        };
        RegExpParser2.prototype.characterClass = function() {
          var set = [];
          var complement = false;
          this.consumeChar("[");
          if (this.peekChar(0) === "^") {
            this.consumeChar("^");
            complement = true;
          }
          while (this.isClassAtom()) {
            var from = this.classAtom();
            var isFromSingleChar = from.type === "Character";
            if (isFromSingleChar && this.isRangeDash()) {
              this.consumeChar("-");
              var to = this.classAtom();
              var isToSingleChar = to.type === "Character";
              if (isToSingleChar) {
                if (to.value < from.value) {
                  throw Error("Range out of order in character class");
                }
                set.push({ from: from.value, to: to.value });
              } else {
                insertToSet(from.value, set);
                set.push(cc("-"));
                insertToSet(to.value, set);
              }
            } else {
              insertToSet(from.value, set);
            }
          }
          this.consumeChar("]");
          return { type: "Set", complement, value: set };
        };
        RegExpParser2.prototype.classAtom = function() {
          switch (this.peekChar()) {
            case "]":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              throw Error("TBD");
            case "\\":
              return this.classEscape();
            default:
              return this.classPatternCharacterAtom();
          }
        };
        RegExpParser2.prototype.classEscape = function() {
          this.consumeChar("\\");
          switch (this.peekChar()) {
            case "b":
              this.consumeChar("b");
              return { type: "Character", value: cc("\b") };
            case "d":
            case "D":
            case "s":
            case "S":
            case "w":
            case "W":
              return this.characterClassEscape();
            case "f":
            case "n":
            case "r":
            case "t":
            case "v":
              return this.controlEscapeAtom();
            case "c":
              return this.controlLetterEscapeAtom();
            case "0":
              return this.nulCharacterAtom();
            case "x":
              return this.hexEscapeSequenceAtom();
            case "u":
              return this.regExpUnicodeEscapeSequenceAtom();
            default:
              return this.identityEscapeAtom();
          }
        };
        RegExpParser2.prototype.group = function() {
          var capturing = true;
          this.consumeChar("(");
          switch (this.peekChar(0)) {
            case "?":
              this.consumeChar("?");
              this.consumeChar(":");
              capturing = false;
              break;
            default:
              this.groupIdx++;
              break;
          }
          var value = this.disjunction();
          this.consumeChar(")");
          var groupAst = {
            type: "Group",
            capturing,
            value
          };
          if (capturing) {
            groupAst.idx = this.groupIdx;
          }
          return groupAst;
        };
        RegExpParser2.prototype.positiveInteger = function() {
          var number = this.popChar();
          if (decimalPatternNoZero.test(number) === false) {
            throw Error("Expecting a positive integer");
          }
          while (decimalPattern.test(this.peekChar(0))) {
            number += this.popChar();
          }
          return parseInt(number, 10);
        };
        RegExpParser2.prototype.integerIncludingZero = function() {
          var number = this.popChar();
          if (decimalPattern.test(number) === false) {
            throw Error("Expecting an integer");
          }
          while (decimalPattern.test(this.peekChar(0))) {
            number += this.popChar();
          }
          return parseInt(number, 10);
        };
        RegExpParser2.prototype.patternCharacter = function() {
          var nextChar = this.popChar();
          switch (nextChar) {
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "|":
              throw Error("TBD");
            default:
              return { type: "Character", value: cc(nextChar) };
          }
        };
        RegExpParser2.prototype.isRegExpFlag = function() {
          switch (this.peekChar(0)) {
            case "g":
            case "i":
            case "m":
            case "u":
            case "y":
              return true;
            default:
              return false;
          }
        };
        RegExpParser2.prototype.isRangeDash = function() {
          return this.peekChar() === "-" && this.isClassAtom(1);
        };
        RegExpParser2.prototype.isDigit = function() {
          return decimalPattern.test(this.peekChar(0));
        };
        RegExpParser2.prototype.isClassAtom = function(howMuch) {
          if (howMuch === void 0) {
            howMuch = 0;
          }
          switch (this.peekChar(howMuch)) {
            case "]":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              return false;
            default:
              return true;
          }
        };
        RegExpParser2.prototype.isTerm = function() {
          return this.isAtom() || this.isAssertion();
        };
        RegExpParser2.prototype.isAtom = function() {
          if (this.isPatternCharacter()) {
            return true;
          }
          switch (this.peekChar(0)) {
            case ".":
            case "\\":
            case "[":
            case "(":
              return true;
            default:
              return false;
          }
        };
        RegExpParser2.prototype.isAssertion = function() {
          switch (this.peekChar(0)) {
            case "^":
            case "$":
              return true;
            case "\\":
              switch (this.peekChar(1)) {
                case "b":
                case "B":
                  return true;
                default:
                  return false;
              }
            case "(":
              return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
            default:
              return false;
          }
        };
        RegExpParser2.prototype.isQuantifier = function() {
          var prevState = this.saveState();
          try {
            return this.quantifier(true) !== void 0;
          } catch (e) {
            return false;
          } finally {
            this.restoreState(prevState);
          }
        };
        RegExpParser2.prototype.isPatternCharacter = function() {
          switch (this.peekChar()) {
            case "^":
            case "$":
            case "\\":
            case ".":
            case "*":
            case "+":
            case "?":
            case "(":
            case ")":
            case "[":
            case "|":
            case "/":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              return false;
            default:
              return true;
          }
        };
        RegExpParser2.prototype.parseHexDigits = function(howMany) {
          var hexString = "";
          for (var i2 = 0; i2 < howMany; i2++) {
            var hexChar = this.popChar();
            if (hexDigitPattern.test(hexChar) === false) {
              throw Error("Expecting a HexDecimal digits");
            }
            hexString += hexChar;
          }
          var charCode = parseInt(hexString, 16);
          return { type: "Character", value: charCode };
        };
        RegExpParser2.prototype.peekChar = function(howMuch) {
          if (howMuch === void 0) {
            howMuch = 0;
          }
          return this.input[this.idx + howMuch];
        };
        RegExpParser2.prototype.popChar = function() {
          var nextChar = this.peekChar(0);
          this.consumeChar();
          return nextChar;
        };
        RegExpParser2.prototype.consumeChar = function(char) {
          if (char !== void 0 && this.input[this.idx] !== char) {
            throw Error(
              "Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx
            );
          }
          if (this.idx >= this.input.length) {
            throw Error("Unexpected end of input");
          }
          this.idx++;
        };
        RegExpParser2.prototype.loc = function(begin) {
          return { begin, end: this.idx };
        };
        var hexDigitPattern = /[0-9a-fA-F]/;
        var decimalPattern = /[0-9]/;
        var decimalPatternNoZero = /[1-9]/;
        function cc(char) {
          return char.charCodeAt(0);
        }
        function insertToSet(item, set) {
          if (item.length !== void 0) {
            item.forEach(function(subItem) {
              set.push(subItem);
            });
          } else {
            set.push(item);
          }
        }
        function addFlag(flagObj, flagKey) {
          if (flagObj[flagKey] === true) {
            throw "duplicate flag " + flagKey;
          }
          flagObj[flagKey] = true;
        }
        function ASSERT_EXISTS(obj) {
          if (obj === void 0) {
            throw Error("Internal Error - Should never get here!");
          }
        }
        function ASSERT_NEVER_REACH_HERE() {
          throw Error("Internal Error - Should never get here!");
        }
        var i;
        var digitsCharCodes = [];
        for (i = cc("0"); i <= cc("9"); i++) {
          digitsCharCodes.push(i);
        }
        var wordCharCodes = [cc("_")].concat(digitsCharCodes);
        for (i = cc("a"); i <= cc("z"); i++) {
          wordCharCodes.push(i);
        }
        for (i = cc("A"); i <= cc("Z"); i++) {
          wordCharCodes.push(i);
        }
        var whitespaceCodes = [
          cc(" "),
          cc("\f"),
          cc("\n"),
          cc("\r"),
          cc("	"),
          cc("\v"),
          cc("	"),
          cc("\xA0"),
          cc("\u1680"),
          cc("\u2000"),
          cc("\u2001"),
          cc("\u2002"),
          cc("\u2003"),
          cc("\u2004"),
          cc("\u2005"),
          cc("\u2006"),
          cc("\u2007"),
          cc("\u2008"),
          cc("\u2009"),
          cc("\u200A"),
          cc("\u2028"),
          cc("\u2029"),
          cc("\u202F"),
          cc("\u205F"),
          cc("\u3000"),
          cc("\uFEFF")
        ];
        function BaseRegExpVisitor3() {
        }
        BaseRegExpVisitor3.prototype.visitChildren = function(node) {
          for (var key in node) {
            var child = node[key];
            if (node.hasOwnProperty(key)) {
              if (child.type !== void 0) {
                this.visit(child);
              } else if (Array.isArray(child)) {
                child.forEach(function(subChild) {
                  this.visit(subChild);
                }, this);
              }
            }
          }
        };
        BaseRegExpVisitor3.prototype.visit = function(node) {
          switch (node.type) {
            case "Pattern":
              this.visitPattern(node);
              break;
            case "Flags":
              this.visitFlags(node);
              break;
            case "Disjunction":
              this.visitDisjunction(node);
              break;
            case "Alternative":
              this.visitAlternative(node);
              break;
            case "StartAnchor":
              this.visitStartAnchor(node);
              break;
            case "EndAnchor":
              this.visitEndAnchor(node);
              break;
            case "WordBoundary":
              this.visitWordBoundary(node);
              break;
            case "NonWordBoundary":
              this.visitNonWordBoundary(node);
              break;
            case "Lookahead":
              this.visitLookahead(node);
              break;
            case "NegativeLookahead":
              this.visitNegativeLookahead(node);
              break;
            case "Character":
              this.visitCharacter(node);
              break;
            case "Set":
              this.visitSet(node);
              break;
            case "Group":
              this.visitGroup(node);
              break;
            case "GroupBackReference":
              this.visitGroupBackReference(node);
              break;
            case "Quantifier":
              this.visitQuantifier(node);
              break;
          }
          this.visitChildren(node);
        };
        BaseRegExpVisitor3.prototype.visitPattern = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitFlags = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitDisjunction = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitAlternative = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitStartAnchor = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitEndAnchor = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitWordBoundary = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitNonWordBoundary = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitLookahead = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitNegativeLookahead = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitCharacter = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitSet = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitGroup = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitGroupBackReference = function(node) {
        };
        BaseRegExpVisitor3.prototype.visitQuantifier = function(node) {
        };
        return {
          RegExpParser: RegExpParser2,
          BaseRegExpVisitor: BaseRegExpVisitor3,
          VERSION: "0.5.0"
        };
      }
    );
  }
});

// node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js
function getRegExpAst(regExp) {
  var regExpStr = regExp.toString();
  if (regExpAstCache.hasOwnProperty(regExpStr)) {
    return regExpAstCache[regExpStr];
  } else {
    var regExpAst = regExpParser.pattern(regExpStr);
    regExpAstCache[regExpStr] = regExpAst;
    return regExpAst;
  }
}
function clearRegExpParserCache() {
  regExpAstCache = {};
}
var import_regexp_to_ast, regExpAstCache, regExpParser;
var init_reg_exp_parser = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js"() {
    "use strict";
    import_regexp_to_ast = __toESM(require_regexp_to_ast());
    regExpAstCache = {};
    regExpParser = new import_regexp_to_ast.RegExpParser();
  }
});

// node_modules/chevrotain/lib_esm/src/scan/reg_exp.js
function getOptimizedStartCodesIndices(regExp, ensureOptimizations) {
  if (ensureOptimizations === void 0) {
    ensureOptimizations = false;
  }
  try {
    var ast = getRegExpAst(regExp);
    var firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
    return firstChars;
  } catch (e) {
    if (e.message === complementErrorMessage) {
      if (ensureOptimizations) {
        PRINT_WARNING("" + failedOptimizationPrefixMsg + ("	Unable to optimize: < " + regExp.toString() + " >\n") + "	Complement Sets cannot be automatically optimized.\n	This will disable the lexer's first char optimizations.\n	See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
      }
    } else {
      var msgSuffix = "";
      if (ensureOptimizations) {
        msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
      }
      PRINT_ERROR(failedOptimizationPrefixMsg + "\n" + ("	Failed parsing: < " + regExp.toString() + " >\n") + ("	Using the regexp-to-ast library version: " + import_regexp_to_ast2.VERSION + "\n") + "	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues" + msgSuffix);
    }
  }
  return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
  switch (ast.type) {
    case "Disjunction":
      for (var i = 0; i < ast.value.length; i++) {
        firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
      }
      break;
    case "Alternative":
      var terms = ast.value;
      for (var i = 0; i < terms.length; i++) {
        var term = terms[i];
        switch (term.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        var atom = term;
        switch (atom.type) {
          case "Character":
            addOptimizedIdxToResult(atom.value, result, ignoreCase);
            break;
          case "Set":
            if (atom.complement === true) {
              throw Error(complementErrorMessage);
            }
            forEach(atom.value, function(code) {
              if (typeof code === "number") {
                addOptimizedIdxToResult(code, result, ignoreCase);
              } else {
                var range = code;
                if (ignoreCase === true) {
                  for (var rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                } else {
                  for (var rangeCode = range.from; rangeCode <= range.to && rangeCode < minOptimizationVal; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                  if (range.to >= minOptimizationVal) {
                    var minUnOptVal = range.from >= minOptimizationVal ? range.from : minOptimizationVal;
                    var maxUnOptVal = range.to;
                    var minOptIdx = charCodeToOptimizedIndex(minUnOptVal);
                    var maxOptIdx = charCodeToOptimizedIndex(maxUnOptVal);
                    for (var currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                      result[currOptIdx] = currOptIdx;
                    }
                  }
                }
              }
            });
            break;
          case "Group":
            firstCharOptimizedIndices(atom.value, result, ignoreCase);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        var isOptionalQuantifier = atom.quantifier !== void 0 && atom.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          atom.type === "Group" && isWholeOptional(atom) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          atom.type !== "Group" && isOptionalQuantifier === false
        ) {
          break;
        }
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return values(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
  var optimizedCharIdx = charCodeToOptimizedIndex(code);
  result[optimizedCharIdx] = optimizedCharIdx;
  if (ignoreCase === true) {
    handleIgnoreCase(code, result);
  }
}
function handleIgnoreCase(code, result) {
  var char = String.fromCharCode(code);
  var upperChar = char.toUpperCase();
  if (upperChar !== char) {
    var optimizedCharIdx = charCodeToOptimizedIndex(upperChar.charCodeAt(0));
    result[optimizedCharIdx] = optimizedCharIdx;
  } else {
    var lowerChar = char.toLowerCase();
    if (lowerChar !== char) {
      var optimizedCharIdx = charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
      result[optimizedCharIdx] = optimizedCharIdx;
    }
  }
}
function findCode(setNode, targetCharCodes) {
  return find(setNode.value, function(codeOrRange) {
    if (typeof codeOrRange === "number") {
      return contains(targetCharCodes, codeOrRange);
    } else {
      var range_1 = codeOrRange;
      return find(targetCharCodes, function(targetCode) {
        return range_1.from <= targetCode && targetCode <= range_1.to;
      }) !== void 0;
    }
  });
}
function isWholeOptional(ast) {
  if (ast.quantifier && ast.quantifier.atLeast === 0) {
    return true;
  }
  if (!ast.value) {
    return false;
  }
  return isArray(ast.value) ? every(ast.value, isWholeOptional) : isWholeOptional(ast.value);
}
function canMatchCharCode(charCodes, pattern) {
  if (pattern instanceof RegExp) {
    var ast = getRegExpAst(pattern);
    var charCodeFinder = new CharCodeFinder(charCodes);
    charCodeFinder.visit(ast);
    return charCodeFinder.found;
  } else {
    return find(pattern, function(char) {
      return contains(charCodes, char.charCodeAt(0));
    }) !== void 0;
  }
}
var import_regexp_to_ast2, __extends, complementErrorMessage, failedOptimizationPrefixMsg, CharCodeFinder;
var init_reg_exp = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/reg_exp.js"() {
    "use strict";
    import_regexp_to_ast2 = __toESM(require_regexp_to_ast());
    init_utils();
    init_reg_exp_parser();
    init_lexer();
    __extends = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    complementErrorMessage = "Complement Sets are not supported for first char optimization";
    failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
    CharCodeFinder = /** @class */
    function(_super) {
      __extends(CharCodeFinder2, _super);
      function CharCodeFinder2(targetCharCodes) {
        var _this = _super.call(this) || this;
        _this.targetCharCodes = targetCharCodes;
        _this.found = false;
        return _this;
      }
      CharCodeFinder2.prototype.visitChildren = function(node) {
        if (this.found === true) {
          return;
        }
        switch (node.type) {
          case "Lookahead":
            this.visitLookahead(node);
            return;
          case "NegativeLookahead":
            this.visitNegativeLookahead(node);
            return;
        }
        _super.prototype.visitChildren.call(this, node);
      };
      CharCodeFinder2.prototype.visitCharacter = function(node) {
        if (contains(this.targetCharCodes, node.value)) {
          this.found = true;
        }
      };
      CharCodeFinder2.prototype.visitSet = function(node) {
        if (node.complement) {
          if (findCode(node, this.targetCharCodes) === void 0) {
            this.found = true;
          }
        } else {
          if (findCode(node, this.targetCharCodes) !== void 0) {
            this.found = true;
          }
        }
      };
      return CharCodeFinder2;
    }(import_regexp_to_ast2.BaseRegExpVisitor);
  }
});

// node_modules/chevrotain/lib_esm/src/scan/lexer.js
function analyzeTokenTypes(tokenTypes, options) {
  options = defaults(options, {
    useSticky: SUPPORT_STICKY,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", "\n"],
    tracer: function(msg, action) {
      return action();
    }
  });
  var tracer = options.tracer;
  tracer("initCharCodeToOptimizedIndexMap", function() {
    initCharCodeToOptimizedIndexMap();
  });
  var onlyRelevantTypes;
  tracer("Reject Lexer.NA", function() {
    onlyRelevantTypes = reject(tokenTypes, function(currType) {
      return currType[PATTERN] === Lexer.NA;
    });
  });
  var hasCustom = false;
  var allTransformedPatterns;
  tracer("Transform Patterns", function() {
    hasCustom = false;
    allTransformedPatterns = map(onlyRelevantTypes, function(currType) {
      var currPattern = currType[PATTERN];
      if (isRegExp(currPattern)) {
        var regExpSource = currPattern.source;
        if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
          return regExpSource;
        } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
        !contains([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], regExpSource[1])) {
          return regExpSource[1];
        } else {
          return options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
        }
      } else if (isFunction(currPattern)) {
        hasCustom = true;
        return { exec: currPattern };
      } else if (has(currPattern, "exec")) {
        hasCustom = true;
        return currPattern;
      } else if (typeof currPattern === "string") {
        if (currPattern.length === 1) {
          return currPattern;
        } else {
          var escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
          var wrappedRegExp = new RegExp(escapedRegExpString);
          return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
        }
      } else {
        throw Error("non exhaustive match");
      }
    });
  });
  var patternIdxToType;
  var patternIdxToGroup;
  var patternIdxToLongerAltIdx;
  var patternIdxToPushMode;
  var patternIdxToPopMode;
  tracer("misc mapping", function() {
    patternIdxToType = map(onlyRelevantTypes, function(currType) {
      return currType.tokenTypeIdx;
    });
    patternIdxToGroup = map(onlyRelevantTypes, function(clazz) {
      var groupName = clazz.GROUP;
      if (groupName === Lexer.SKIPPED) {
        return void 0;
      } else if (isString(groupName)) {
        return groupName;
      } else if (isUndefined(groupName)) {
        return false;
      } else {
        throw Error("non exhaustive match");
      }
    });
    patternIdxToLongerAltIdx = map(onlyRelevantTypes, function(clazz) {
      var longerAltType = clazz.LONGER_ALT;
      if (longerAltType) {
        var longerAltIdx = indexOf(onlyRelevantTypes, longerAltType);
        return longerAltIdx;
      }
    });
    patternIdxToPushMode = map(onlyRelevantTypes, function(clazz) {
      return clazz.PUSH_MODE;
    });
    patternIdxToPopMode = map(onlyRelevantTypes, function(clazz) {
      return has(clazz, "POP_MODE");
    });
  });
  var patternIdxToCanLineTerminator;
  tracer("Line Terminator Handling", function() {
    var lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
    patternIdxToCanLineTerminator = map(onlyRelevantTypes, function(tokType) {
      return false;
    });
    if (options.positionTracking !== "onlyOffset") {
      patternIdxToCanLineTerminator = map(onlyRelevantTypes, function(tokType) {
        if (has(tokType, "LINE_BREAKS")) {
          return tokType.LINE_BREAKS;
        } else {
          if (checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false) {
            return canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
          }
        }
      });
    }
  });
  var patternIdxToIsCustom;
  var patternIdxToShort;
  var emptyGroups;
  var patternIdxToConfig;
  tracer("Misc Mapping #2", function() {
    patternIdxToIsCustom = map(onlyRelevantTypes, isCustomPattern);
    patternIdxToShort = map(allTransformedPatterns, isShortPattern);
    emptyGroups = reduce(onlyRelevantTypes, function(acc, clazz) {
      var groupName = clazz.GROUP;
      if (isString(groupName) && !(groupName === Lexer.SKIPPED)) {
        acc[groupName] = [];
      }
      return acc;
    }, {});
    patternIdxToConfig = map(allTransformedPatterns, function(x, idx) {
      return {
        pattern: allTransformedPatterns[idx],
        longerAlt: patternIdxToLongerAltIdx[idx],
        canLineTerminator: patternIdxToCanLineTerminator[idx],
        isCustom: patternIdxToIsCustom[idx],
        short: patternIdxToShort[idx],
        group: patternIdxToGroup[idx],
        push: patternIdxToPushMode[idx],
        pop: patternIdxToPopMode[idx],
        tokenTypeIdx: patternIdxToType[idx],
        tokenType: onlyRelevantTypes[idx]
      };
    });
  });
  var canBeOptimized = true;
  var charCodeToPatternIdxToConfig = [];
  if (!options.safeMode) {
    tracer("First Char Optimization", function() {
      charCodeToPatternIdxToConfig = reduce(onlyRelevantTypes, function(result, currTokType, idx) {
        if (typeof currTokType.PATTERN === "string") {
          var charCode = currTokType.PATTERN.charCodeAt(0);
          var optimizedIdx = charCodeToOptimizedIndex(charCode);
          addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
        } else if (isArray(currTokType.START_CHARS_HINT)) {
          var lastOptimizedIdx_1;
          forEach(currTokType.START_CHARS_HINT, function(charOrInt) {
            var charCode2 = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
            var currOptimizedIdx = charCodeToOptimizedIndex(charCode2);
            if (lastOptimizedIdx_1 !== currOptimizedIdx) {
              lastOptimizedIdx_1 = currOptimizedIdx;
              addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
            }
          });
        } else if (isRegExp(currTokType.PATTERN)) {
          if (currTokType.PATTERN.unicode) {
            canBeOptimized = false;
            if (options.ensureOptimizations) {
              PRINT_ERROR("" + failedOptimizationPrefixMsg + ("	Unable to analyze < " + currTokType.PATTERN.toString() + " > pattern.\n") + "	The regexp unicode flag is not currently supported by the regexp-to-ast library.\n	This will disable the lexer's first char optimizations.\n	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
            }
          } else {
            var optimizedCodes = getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
            if (isEmpty(optimizedCodes)) {
              canBeOptimized = false;
            }
            forEach(optimizedCodes, function(code) {
              addToMapOfArrays(result, code, patternIdxToConfig[idx]);
            });
          }
        } else {
          if (options.ensureOptimizations) {
            PRINT_ERROR("" + failedOptimizationPrefixMsg + ("	TokenType: <" + currTokType.name + "> is using a custom token pattern without providing <start_chars_hint> parameter.\n") + "	This will disable the lexer's first char optimizations.\n	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
          }
          canBeOptimized = false;
        }
        return result;
      }, []);
    });
  }
  tracer("ArrayPacking", function() {
    charCodeToPatternIdxToConfig = packArray(charCodeToPatternIdxToConfig);
  });
  return {
    emptyGroups,
    patternIdxToConfig,
    charCodeToPatternIdxToConfig,
    hasCustom,
    canBeOptimized
  };
}
function validatePatterns(tokenTypes, validModesNames) {
  var errors = [];
  var missingResult = findMissingPatterns(tokenTypes);
  errors = errors.concat(missingResult.errors);
  var invalidResult = findInvalidPatterns(missingResult.valid);
  var validTokenTypes = invalidResult.valid;
  errors = errors.concat(invalidResult.errors);
  errors = errors.concat(validateRegExpPattern(validTokenTypes));
  errors = errors.concat(findInvalidGroupType(validTokenTypes));
  errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
  errors = errors.concat(findUnreachablePatterns(validTokenTypes));
  return errors;
}
function validateRegExpPattern(tokenTypes) {
  var errors = [];
  var withRegExpPatterns = filter(tokenTypes, function(currTokType) {
    return isRegExp(currTokType[PATTERN]);
  });
  errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
  errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
  errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
  return errors;
}
function findMissingPatterns(tokenTypes) {
  var tokenTypesWithMissingPattern = filter(tokenTypes, function(currType) {
    return !has(currType, PATTERN);
  });
  var errors = map(tokenTypesWithMissingPattern, function(currType) {
    return {
      message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
      type: LexerDefinitionErrorType.MISSING_PATTERN,
      tokenTypes: [currType]
    };
  });
  var valid = difference(tokenTypes, tokenTypesWithMissingPattern);
  return { errors, valid };
}
function findInvalidPatterns(tokenTypes) {
  var tokenTypesWithInvalidPattern = filter(tokenTypes, function(currType) {
    var pattern = currType[PATTERN];
    return !isRegExp(pattern) && !isFunction(pattern) && !has(pattern, "exec") && !isString(pattern);
  });
  var errors = map(tokenTypesWithInvalidPattern, function(currType) {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
      type: LexerDefinitionErrorType.INVALID_PATTERN,
      tokenTypes: [currType]
    };
  });
  var valid = difference(tokenTypes, tokenTypesWithInvalidPattern);
  return { errors, valid };
}
function findEndOfInputAnchor(tokenTypes) {
  var EndAnchorFinder = (
    /** @class */
    function(_super) {
      __extends2(EndAnchorFinder2, _super);
      function EndAnchorFinder2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.found = false;
        return _this;
      }
      EndAnchorFinder2.prototype.visitEndAnchor = function(node) {
        this.found = true;
      };
      return EndAnchorFinder2;
    }(import_regexp_to_ast3.BaseRegExpVisitor)
  );
  var invalidRegex = filter(tokenTypes, function(currType) {
    var pattern = currType[PATTERN];
    try {
      var regexpAst = getRegExpAst(pattern);
      var endAnchorVisitor = new EndAnchorFinder();
      endAnchorVisitor.visit(regexpAst);
      return endAnchorVisitor.found;
    } catch (e) {
      return end_of_input.test(pattern.source);
    }
  });
  var errors = map(invalidRegex, function(currType) {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
  var matchesEmptyString = filter(tokenTypes, function(currType) {
    var pattern = currType[PATTERN];
    return pattern.test("");
  });
  var errors = map(matchesEmptyString, function(currType) {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
      type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findStartOfInputAnchor(tokenTypes) {
  var StartAnchorFinder = (
    /** @class */
    function(_super) {
      __extends2(StartAnchorFinder2, _super);
      function StartAnchorFinder2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.found = false;
        return _this;
      }
      StartAnchorFinder2.prototype.visitStartAnchor = function(node) {
        this.found = true;
      };
      return StartAnchorFinder2;
    }(import_regexp_to_ast3.BaseRegExpVisitor)
  );
  var invalidRegex = filter(tokenTypes, function(currType) {
    var pattern = currType[PATTERN];
    try {
      var regexpAst = getRegExpAst(pattern);
      var startAnchorVisitor = new StartAnchorFinder();
      startAnchorVisitor.visit(regexpAst);
      return startAnchorVisitor.found;
    } catch (e) {
      return start_of_input.test(pattern.source);
    }
  });
  var errors = map(invalidRegex, function(currType) {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findUnsupportedFlags(tokenTypes) {
  var invalidFlags = filter(tokenTypes, function(currType) {
    var pattern = currType[PATTERN];
    return pattern instanceof RegExp && (pattern.multiline || pattern.global);
  });
  var errors = map(invalidFlags, function(currType) {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
      type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findDuplicatePatterns(tokenTypes) {
  var found = [];
  var identicalPatterns = map(tokenTypes, function(outerType) {
    return reduce(tokenTypes, function(result, innerType) {
      if (outerType.PATTERN.source === innerType.PATTERN.source && !contains(found, innerType) && innerType.PATTERN !== Lexer.NA) {
        found.push(innerType);
        result.push(innerType);
        return result;
      }
      return result;
    }, []);
  });
  identicalPatterns = compact(identicalPatterns);
  var duplicatePatterns = filter(identicalPatterns, function(currIdenticalSet) {
    return currIdenticalSet.length > 1;
  });
  var errors = map(duplicatePatterns, function(setOfIdentical) {
    var tokenTypeNames = map(setOfIdentical, function(currType) {
      return currType.name;
    });
    var dupPatternSrc = first(setOfIdentical).PATTERN;
    return {
      message: "The same RegExp pattern ->" + dupPatternSrc + "<-" + ("has been used in all of the following Token Types: " + tokenTypeNames.join(", ") + " <-"),
      type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: setOfIdentical
    };
  });
  return errors;
}
function findInvalidGroupType(tokenTypes) {
  var invalidTypes = filter(tokenTypes, function(clazz) {
    if (!has(clazz, "GROUP")) {
      return false;
    }
    var group3 = clazz.GROUP;
    return group3 !== Lexer.SKIPPED && group3 !== Lexer.NA && !isString(group3);
  });
  var errors = map(invalidTypes, function(currType) {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
      type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
  var invalidModes = filter(tokenTypes, function(clazz) {
    return clazz.PUSH_MODE !== void 0 && !contains(validModes, clazz.PUSH_MODE);
  });
  var errors = map(invalidModes, function(tokType) {
    var msg = "Token Type: ->" + tokType.name + "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->" + tokType.PUSH_MODE + "<-which does not exist";
    return {
      message: msg,
      type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
      tokenTypes: [tokType]
    };
  });
  return errors;
}
function findUnreachablePatterns(tokenTypes) {
  var errors = [];
  var canBeTested = reduce(tokenTypes, function(result, tokType, idx) {
    var pattern = tokType.PATTERN;
    if (pattern === Lexer.NA) {
      return result;
    }
    if (isString(pattern)) {
      result.push({ str: pattern, idx, tokenType: tokType });
    } else if (isRegExp(pattern) && noMetaChar(pattern)) {
      result.push({ str: pattern.source, idx, tokenType: tokType });
    }
    return result;
  }, []);
  forEach(tokenTypes, function(tokType, testIdx) {
    forEach(canBeTested, function(_a) {
      var str = _a.str, idx = _a.idx, tokenType = _a.tokenType;
      if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
        var msg = "Token: ->" + tokenType.name + "<- can never be matched.\n" + ("Because it appears AFTER the Token Type ->" + tokType.name + "<-") + "in the lexer's definition.\nSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE";
        errors.push({
          message: msg,
          type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
          tokenTypes: [tokType, tokenType]
        });
      }
    });
  });
  return errors;
}
function testTokenType(str, pattern) {
  if (isRegExp(pattern)) {
    var regExpArray = pattern.exec(str);
    return regExpArray !== null && regExpArray.index === 0;
  } else if (isFunction(pattern)) {
    return pattern(str, 0, [], {});
  } else if (has(pattern, "exec")) {
    return pattern.exec(str, 0, [], {});
  } else if (typeof pattern === "string") {
    return pattern === str;
  } else {
    throw Error("non exhaustive match");
  }
}
function noMetaChar(regExp) {
  var metaChars = [
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ];
  return find(metaChars, function(char) {
    return regExp.source.indexOf(char) !== -1;
  }) === void 0;
}
function addStartOfInput(pattern) {
  var flags = pattern.ignoreCase ? "i" : "";
  return new RegExp("^(?:" + pattern.source + ")", flags);
}
function addStickyFlag(pattern) {
  var flags = pattern.ignoreCase ? "iy" : "y";
  return new RegExp("" + pattern.source, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  var errors = [];
  if (!has(lexerDefinition, DEFAULT_MODE)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    });
  }
  if (!has(lexerDefinition, MODES)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
    });
  }
  if (has(lexerDefinition, MODES) && has(lexerDefinition, DEFAULT_MODE) && !has(lexerDefinition.modes, lexerDefinition.defaultMode)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized with a " + DEFAULT_MODE + ": <" + lexerDefinition.defaultMode + ">which does not exist\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
    });
  }
  if (has(lexerDefinition, MODES)) {
    forEach(lexerDefinition.modes, function(currModeValue, currModeName) {
      forEach(currModeValue, function(currTokType, currIdx) {
        if (isUndefined(currTokType)) {
          errors.push({
            message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" + ("<" + currModeName + "> at index: <" + currIdx + ">\n"),
            type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
          });
        }
      });
    });
  }
  return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  var warnings = [];
  var hasAnyLineBreak = false;
  var allTokenTypes = compact(flatten(mapValues(lexerDefinition.modes, function(tokTypes) {
    return tokTypes;
  })));
  var concreteTokenTypes = reject(allTokenTypes, function(currType) {
    return currType[PATTERN] === Lexer.NA;
  });
  var terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
  if (trackLines) {
    forEach(concreteTokenTypes, function(tokType) {
      var currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
      if (currIssue !== false) {
        var message = buildLineBreakIssueMessage(tokType, currIssue);
        var warningDescriptor = {
          message,
          type: currIssue.issue,
          tokenType: tokType
        };
        warnings.push(warningDescriptor);
      } else {
        if (has(tokType, "LINE_BREAKS")) {
          if (tokType.LINE_BREAKS === true) {
            hasAnyLineBreak = true;
          }
        } else {
          if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
            hasAnyLineBreak = true;
          }
        }
      }
    });
  }
  if (trackLines && !hasAnyLineBreak) {
    warnings.push({
      message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
      type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
    });
  }
  return warnings;
}
function cloneEmptyGroups(emptyGroups) {
  var clonedResult = {};
  var groupKeys = keys(emptyGroups);
  forEach(groupKeys, function(currKey) {
    var currGroupValue = emptyGroups[currKey];
    if (isArray(currGroupValue)) {
      clonedResult[currKey] = [];
    } else {
      throw Error("non exhaustive match");
    }
  });
  return clonedResult;
}
function isCustomPattern(tokenType) {
  var pattern = tokenType.PATTERN;
  if (isRegExp(pattern)) {
    return false;
  } else if (isFunction(pattern)) {
    return true;
  } else if (has(pattern, "exec")) {
    return true;
  } else if (isString(pattern)) {
    return false;
  } else {
    throw Error("non exhaustive match");
  }
}
function isShortPattern(pattern) {
  if (isString(pattern) && pattern.length === 1) {
    return pattern.charCodeAt(0);
  } else {
    return false;
  }
}
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
  if (has(tokType, "LINE_BREAKS")) {
    return false;
  } else {
    if (isRegExp(tokType.PATTERN)) {
      try {
        canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
      } catch (e) {
        return {
          issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
          errMsg: e.message
        };
      }
      return false;
    } else if (isString(tokType.PATTERN)) {
      return false;
    } else if (isCustomPattern(tokType)) {
      return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
    } else {
      throw Error("non exhaustive match");
    }
  }
}
function buildLineBreakIssueMessage(tokType, details) {
  if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
    return "Warning: unable to identify line terminator usage in pattern.\n" + ("	The problem is in the <" + tokType.name + "> Token Type\n") + ("	 Root cause: " + details.errMsg + ".\n") + "	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
  } else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
    return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" + ("	The problem is in the <" + tokType.name + "> Token Type\n") + "	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
  } else {
    throw Error("non exhaustive match");
  }
}
function getCharCodes(charsOrCodes) {
  var charCodes = map(charsOrCodes, function(numOrString) {
    if (isString(numOrString) && numOrString.length > 0) {
      return numOrString.charCodeAt(0);
    } else {
      return numOrString;
    }
  });
  return charCodes;
}
function addToMapOfArrays(map2, key, value) {
  if (map2[key] === void 0) {
    map2[key] = [value];
  } else {
    map2[key].push(value);
  }
}
function charCodeToOptimizedIndex(charCode) {
  return charCode < minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
}
function initCharCodeToOptimizedIndexMap() {
  if (isEmpty(charCodeToOptimizedIdxMap)) {
    charCodeToOptimizedIdxMap = new Array(65536);
    for (var i = 0; i < 65536; i++) {
      charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
    }
  }
}
var import_regexp_to_ast3, __extends2, PATTERN, DEFAULT_MODE, MODES, SUPPORT_STICKY, end_of_input, start_of_input, LineTerminatorOptimizedTester, minOptimizationVal, charCodeToOptimizedIdxMap;
var init_lexer = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/lexer.js"() {
    "use strict";
    import_regexp_to_ast3 = __toESM(require_regexp_to_ast());
    init_lexer_public();
    init_utils();
    init_reg_exp();
    init_reg_exp_parser();
    __extends2 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    PATTERN = "PATTERN";
    DEFAULT_MODE = "defaultMode";
    MODES = "modes";
    SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
    end_of_input = /[^\\][\$]/;
    start_of_input = /[^\\[][\^]|^\^/;
    LineTerminatorOptimizedTester = {
      // implements /\n|\r\n?/g.test
      test: function(text) {
        var len = text.length;
        for (var i = this.lastIndex; i < len; i++) {
          var c = text.charCodeAt(i);
          if (c === 10) {
            this.lastIndex = i + 1;
            return true;
          } else if (c === 13) {
            if (text.charCodeAt(i + 1) === 10) {
              this.lastIndex = i + 2;
            } else {
              this.lastIndex = i + 1;
            }
            return true;
          }
        }
        return false;
      },
      lastIndex: 0
    };
    minOptimizationVal = 256;
    charCodeToOptimizedIdxMap = [];
  }
});

// node_modules/chevrotain/lib_esm/src/scan/tokens.js
function tokenStructuredMatcher(tokInstance, tokConstructor) {
  var instanceType = tokInstance.tokenTypeIdx;
  if (instanceType === tokConstructor.tokenTypeIdx) {
    return true;
  } else {
    return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
  }
}
function tokenStructuredMatcherNoCategories(token, tokType) {
  return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
function augmentTokenTypes(tokenTypes) {
  var tokenTypesAndParents = expandCategories(tokenTypes);
  assignTokenDefaultProps(tokenTypesAndParents);
  assignCategoriesMapProp(tokenTypesAndParents);
  assignCategoriesTokensProp(tokenTypesAndParents);
  forEach(tokenTypesAndParents, function(tokType) {
    tokType.isParent = tokType.categoryMatches.length > 0;
  });
}
function expandCategories(tokenTypes) {
  var result = cloneArr(tokenTypes);
  var categories = tokenTypes;
  var searching = true;
  while (searching) {
    categories = compact(flatten(map(categories, function(currTokType) {
      return currTokType.CATEGORIES;
    })));
    var newCategories = difference(categories, result);
    result = result.concat(newCategories);
    if (isEmpty(newCategories)) {
      searching = false;
    } else {
      categories = newCategories;
    }
  }
  return result;
}
function assignTokenDefaultProps(tokenTypes) {
  forEach(tokenTypes, function(currTokType) {
    if (!hasShortKeyProperty(currTokType)) {
      tokenIdxToClass[tokenShortNameIdx] = currTokType;
      currTokType.tokenTypeIdx = tokenShortNameIdx++;
    }
    if (hasCategoriesProperty(currTokType) && !isArray(currTokType.CATEGORIES)) {
      currTokType.CATEGORIES = [currTokType.CATEGORIES];
    }
    if (!hasCategoriesProperty(currTokType)) {
      currTokType.CATEGORIES = [];
    }
    if (!hasExtendingTokensTypesProperty(currTokType)) {
      currTokType.categoryMatches = [];
    }
    if (!hasExtendingTokensTypesMapProperty(currTokType)) {
      currTokType.categoryMatchesMap = {};
    }
  });
}
function assignCategoriesTokensProp(tokenTypes) {
  forEach(tokenTypes, function(currTokType) {
    currTokType.categoryMatches = [];
    forEach(currTokType.categoryMatchesMap, function(val, key) {
      currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
    });
  });
}
function assignCategoriesMapProp(tokenTypes) {
  forEach(tokenTypes, function(currTokType) {
    singleAssignCategoriesToksMap([], currTokType);
  });
}
function singleAssignCategoriesToksMap(path, nextNode) {
  forEach(path, function(pathNode) {
    nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
  });
  forEach(nextNode.CATEGORIES, function(nextCategory) {
    var newPath = path.concat(nextNode);
    if (!contains(newPath, nextCategory)) {
      singleAssignCategoriesToksMap(newPath, nextCategory);
    }
  });
}
function hasShortKeyProperty(tokType) {
  return has(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
  return has(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
  return has(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
  return has(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
  return has(tokType, "tokenTypeIdx");
}
var tokenShortNameIdx, tokenIdxToClass;
var init_tokens = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/tokens.js"() {
    "use strict";
    init_utils();
    tokenShortNameIdx = 1;
    tokenIdxToClass = {};
  }
});

// node_modules/chevrotain/lib_esm/src/scan/lexer_errors_public.js
var defaultLexerErrorProvider;
var init_lexer_errors_public = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/lexer_errors_public.js"() {
    "use strict";
    defaultLexerErrorProvider = {
      buildUnableToPopLexerModeMessage: function(token) {
        return "Unable to pop Lexer Mode after encountering Token ->" + token.image + "<- The Mode Stack is empty";
      },
      buildUnexpectedCharactersMessage: function(fullText, startOffset, length, line3, column) {
        return "unexpected character: ->" + fullText.charAt(startOffset) + "<- at offset: " + startOffset + "," + (" skipped " + length + " characters.");
      }
    };
  }
});

// node_modules/chevrotain/lib_esm/src/scan/lexer_public.js
var LexerDefinitionErrorType, DEFAULT_LEXER_CONFIG, Lexer;
var init_lexer_public = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/lexer_public.js"() {
    "use strict";
    init_lexer();
    init_utils();
    init_tokens();
    init_lexer_errors_public();
    init_reg_exp_parser();
    (function(LexerDefinitionErrorType2) {
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
      LexerDefinitionErrorType2[LexerDefinitionErrorType2["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
    })(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
    DEFAULT_LEXER_CONFIG = {
      deferDefinitionErrorsHandling: false,
      positionTracking: "full",
      lineTerminatorsPattern: /\n|\r\n?/g,
      lineTerminatorCharacters: ["\n", "\r"],
      ensureOptimizations: false,
      safeMode: false,
      errorMessageProvider: defaultLexerErrorProvider,
      traceInitPerf: false,
      skipValidations: false
    };
    Object.freeze(DEFAULT_LEXER_CONFIG);
    Lexer = /** @class */
    function() {
      function Lexer2(lexerDefinition, config) {
        var _this = this;
        if (config === void 0) {
          config = DEFAULT_LEXER_CONFIG;
        }
        this.lexerDefinition = lexerDefinition;
        this.lexerDefinitionErrors = [];
        this.lexerDefinitionWarning = [];
        this.patternIdxToConfig = {};
        this.charCodeToPatternIdxToConfig = {};
        this.modes = [];
        this.emptyGroups = {};
        this.config = void 0;
        this.trackStartLines = true;
        this.trackEndLines = true;
        this.hasCustom = false;
        this.canModeBeOptimized = {};
        if (typeof config === "boolean") {
          throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
        }
        this.config = merge(DEFAULT_LEXER_CONFIG, config);
        var traceInitVal = this.config.traceInitPerf;
        if (traceInitVal === true) {
          this.traceInitMaxIdent = Infinity;
          this.traceInitPerf = true;
        } else if (typeof traceInitVal === "number") {
          this.traceInitMaxIdent = traceInitVal;
          this.traceInitPerf = true;
        }
        this.traceInitIndent = -1;
        this.TRACE_INIT("Lexer Constructor", function() {
          var actualDefinition;
          var hasOnlySingleMode = true;
          _this.TRACE_INIT("Lexer Config handling", function() {
            if (_this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
              _this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
            } else {
              if (_this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
                throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
              }
            }
            if (config.safeMode && config.ensureOptimizations) {
              throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
            }
            _this.trackStartLines = /full|onlyStart/i.test(_this.config.positionTracking);
            _this.trackEndLines = /full/i.test(_this.config.positionTracking);
            if (isArray(lexerDefinition)) {
              actualDefinition = { modes: {} };
              actualDefinition.modes[DEFAULT_MODE] = cloneArr(lexerDefinition);
              actualDefinition[DEFAULT_MODE] = DEFAULT_MODE;
            } else {
              hasOnlySingleMode = false;
              actualDefinition = cloneObj(lexerDefinition);
            }
          });
          if (_this.config.skipValidations === false) {
            _this.TRACE_INIT("performRuntimeChecks", function() {
              _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
            });
            _this.TRACE_INIT("performWarningRuntimeChecks", function() {
              _this.lexerDefinitionWarning = _this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
            });
          }
          actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
          forEach(actualDefinition.modes, function(currModeValue, currModeName) {
            actualDefinition.modes[currModeName] = reject(currModeValue, function(currTokType) {
              return isUndefined(currTokType);
            });
          });
          var allModeNames = keys(actualDefinition.modes);
          forEach(actualDefinition.modes, function(currModDef, currModName) {
            _this.TRACE_INIT("Mode: <" + currModName + "> processing", function() {
              _this.modes.push(currModName);
              if (_this.config.skipValidations === false) {
                _this.TRACE_INIT("validatePatterns", function() {
                  _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
                });
              }
              if (isEmpty(_this.lexerDefinitionErrors)) {
                augmentTokenTypes(currModDef);
                var currAnalyzeResult_1;
                _this.TRACE_INIT("analyzeTokenTypes", function() {
                  currAnalyzeResult_1 = analyzeTokenTypes(currModDef, {
                    lineTerminatorCharacters: _this.config.lineTerminatorCharacters,
                    positionTracking: config.positionTracking,
                    ensureOptimizations: config.ensureOptimizations,
                    safeMode: config.safeMode,
                    tracer: _this.TRACE_INIT.bind(_this)
                  });
                });
                _this.patternIdxToConfig[currModName] = currAnalyzeResult_1.patternIdxToConfig;
                _this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult_1.charCodeToPatternIdxToConfig;
                _this.emptyGroups = merge(_this.emptyGroups, currAnalyzeResult_1.emptyGroups);
                _this.hasCustom = currAnalyzeResult_1.hasCustom || _this.hasCustom;
                _this.canModeBeOptimized[currModName] = currAnalyzeResult_1.canBeOptimized;
              }
            });
          });
          _this.defaultMode = actualDefinition.defaultMode;
          if (!isEmpty(_this.lexerDefinitionErrors) && !_this.config.deferDefinitionErrorsHandling) {
            var allErrMessages = map(_this.lexerDefinitionErrors, function(error) {
              return error.message;
            });
            var allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
          }
          forEach(_this.lexerDefinitionWarning, function(warningDescriptor) {
            PRINT_WARNING(warningDescriptor.message);
          });
          _this.TRACE_INIT("Choosing sub-methods implementations", function() {
            if (SUPPORT_STICKY) {
              _this.chopInput = IDENTITY;
              _this.match = _this.matchWithTest;
            } else {
              _this.updateLastIndex = NOOP;
              _this.match = _this.matchWithExec;
            }
            if (hasOnlySingleMode) {
              _this.handleModes = NOOP;
            }
            if (_this.trackStartLines === false) {
              _this.computeNewColumn = IDENTITY;
            }
            if (_this.trackEndLines === false) {
              _this.updateTokenEndLineColumnLocation = NOOP;
            }
            if (/full/i.test(_this.config.positionTracking)) {
              _this.createTokenInstance = _this.createFullToken;
            } else if (/onlyStart/i.test(_this.config.positionTracking)) {
              _this.createTokenInstance = _this.createStartOnlyToken;
            } else if (/onlyOffset/i.test(_this.config.positionTracking)) {
              _this.createTokenInstance = _this.createOffsetOnlyToken;
            } else {
              throw Error('Invalid <positionTracking> config option: "' + _this.config.positionTracking + '"');
            }
            if (_this.hasCustom) {
              _this.addToken = _this.addTokenUsingPush;
              _this.handlePayload = _this.handlePayloadWithCustom;
            } else {
              _this.addToken = _this.addTokenUsingMemberAccess;
              _this.handlePayload = _this.handlePayloadNoCustom;
            }
          });
          _this.TRACE_INIT("Failed Optimization Warnings", function() {
            var unOptimizedModes = reduce(_this.canModeBeOptimized, function(cannotBeOptimized, canBeOptimized, modeName) {
              if (canBeOptimized === false) {
                cannotBeOptimized.push(modeName);
              }
              return cannotBeOptimized;
            }, []);
            if (config.ensureOptimizations && !isEmpty(unOptimizedModes)) {
              throw Error("Lexer Modes: < " + unOptimizedModes.join(", ") + ' > cannot be optimized.\n	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n	 Or inspect the console log for details on how to resolve these issues.');
            }
          });
          _this.TRACE_INIT("clearRegExpParserCache", function() {
            clearRegExpParserCache();
          });
          _this.TRACE_INIT("toFastProperties", function() {
            toFastProperties(_this);
          });
        });
      }
      Lexer2.prototype.tokenize = function(text, initialMode) {
        if (initialMode === void 0) {
          initialMode = this.defaultMode;
        }
        if (!isEmpty(this.lexerDefinitionErrors)) {
          var allErrMessages = map(this.lexerDefinitionErrors, function(error) {
            return error.message;
          });
          var allErrMessagesString = allErrMessages.join("-----------------------\n");
          throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
        }
        var lexResult = this.tokenizeInternal(text, initialMode);
        return lexResult;
      };
      Lexer2.prototype.tokenizeInternal = function(text, initialMode) {
        var _this = this;
        var i, j, matchAltImage, longerAltIdx, matchedImage, payload, altPayload, imageLength, group3, tokType, newToken, errLength, droppedChar, msg, match;
        var orgText = text;
        var orgLength = orgText.length;
        var offset = 0;
        var matchedTokensIndex = 0;
        var guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text.length / 10);
        var matchedTokens = new Array(guessedNumberOfTokens);
        var errors = [];
        var line3 = this.trackStartLines ? 1 : void 0;
        var column = this.trackStartLines ? 1 : void 0;
        var groups = cloneEmptyGroups(this.emptyGroups);
        var trackLines = this.trackStartLines;
        var lineTerminatorPattern = this.config.lineTerminatorsPattern;
        var currModePatternsLength = 0;
        var patternIdxToConfig = [];
        var currCharCodeToPatternIdxToConfig = [];
        var modeStack = [];
        var emptyArray = [];
        Object.freeze(emptyArray);
        var getPossiblePatterns = void 0;
        function getPossiblePatternsSlow() {
          return patternIdxToConfig;
        }
        function getPossiblePatternsOptimized(charCode) {
          var optimizedCharIdx = charCodeToOptimizedIndex(charCode);
          var possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
          if (possiblePatterns === void 0) {
            return emptyArray;
          } else {
            return possiblePatterns;
          }
        }
        var pop_mode = function(popToken) {
          if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
          // So no error should occur.
          popToken.tokenType.PUSH_MODE === void 0) {
            var msg_1 = _this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
            errors.push({
              offset: popToken.startOffset,
              line: popToken.startLine !== void 0 ? popToken.startLine : void 0,
              column: popToken.startColumn !== void 0 ? popToken.startColumn : void 0,
              length: popToken.image.length,
              message: msg_1
            });
          } else {
            modeStack.pop();
            var newMode = last(modeStack);
            patternIdxToConfig = _this.patternIdxToConfig[newMode];
            currCharCodeToPatternIdxToConfig = _this.charCodeToPatternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            var modeCanBeOptimized = _this.canModeBeOptimized[newMode] && _this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
              getPossiblePatterns = getPossiblePatternsOptimized;
            } else {
              getPossiblePatterns = getPossiblePatternsSlow;
            }
          }
        };
        function push_mode(newMode) {
          modeStack.push(newMode);
          currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
          patternIdxToConfig = this.patternIdxToConfig[newMode];
          currModePatternsLength = patternIdxToConfig.length;
          currModePatternsLength = patternIdxToConfig.length;
          var modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
          if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
            getPossiblePatterns = getPossiblePatternsOptimized;
          } else {
            getPossiblePatterns = getPossiblePatternsSlow;
          }
        }
        push_mode.call(this, initialMode);
        var currConfig;
        while (offset < orgLength) {
          matchedImage = null;
          var nextCharCode = orgText.charCodeAt(offset);
          var chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
          var chosenPatternsLength = chosenPatternIdxToConfig.length;
          for (i = 0; i < chosenPatternsLength; i++) {
            currConfig = chosenPatternIdxToConfig[i];
            var currPattern = currConfig.pattern;
            payload = null;
            var singleCharCode = currConfig.short;
            if (singleCharCode !== false) {
              if (nextCharCode === singleCharCode) {
                matchedImage = currPattern;
              }
            } else if (currConfig.isCustom === true) {
              match = currPattern.exec(orgText, offset, matchedTokens, groups);
              if (match !== null) {
                matchedImage = match[0];
                if (match.payload !== void 0) {
                  payload = match.payload;
                }
              } else {
                matchedImage = null;
              }
            } else {
              this.updateLastIndex(currPattern, offset);
              matchedImage = this.match(currPattern, text, offset);
            }
            if (matchedImage !== null) {
              longerAltIdx = currConfig.longerAlt;
              if (longerAltIdx !== void 0) {
                var longerAltConfig = patternIdxToConfig[longerAltIdx];
                var longerAltPattern = longerAltConfig.pattern;
                altPayload = null;
                if (longerAltConfig.isCustom === true) {
                  match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                  if (match !== null) {
                    matchAltImage = match[0];
                    if (match.payload !== void 0) {
                      altPayload = match.payload;
                    }
                  } else {
                    matchAltImage = null;
                  }
                } else {
                  this.updateLastIndex(longerAltPattern, offset);
                  matchAltImage = this.match(longerAltPattern, text, offset);
                }
                if (matchAltImage && matchAltImage.length > matchedImage.length) {
                  matchedImage = matchAltImage;
                  payload = altPayload;
                  currConfig = longerAltConfig;
                }
              }
              break;
            }
          }
          if (matchedImage !== null) {
            imageLength = matchedImage.length;
            group3 = currConfig.group;
            if (group3 !== void 0) {
              tokType = currConfig.tokenTypeIdx;
              newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line3, column, imageLength);
              this.handlePayload(newToken, payload);
              if (group3 === false) {
                matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
              } else {
                groups[group3].push(newToken);
              }
            }
            text = this.chopInput(text, imageLength);
            offset = offset + imageLength;
            column = this.computeNewColumn(column, imageLength);
            if (trackLines === true && currConfig.canLineTerminator === true) {
              var numOfLTsInMatch = 0;
              var foundTerminator = void 0;
              var lastLTEndOffset = void 0;
              lineTerminatorPattern.lastIndex = 0;
              do {
                foundTerminator = lineTerminatorPattern.test(matchedImage);
                if (foundTerminator === true) {
                  lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
                  numOfLTsInMatch++;
                }
              } while (foundTerminator === true);
              if (numOfLTsInMatch !== 0) {
                line3 = line3 + numOfLTsInMatch;
                column = imageLength - lastLTEndOffset;
                this.updateTokenEndLineColumnLocation(newToken, group3, lastLTEndOffset, numOfLTsInMatch, line3, column, imageLength);
              }
            }
            this.handleModes(currConfig, pop_mode, push_mode, newToken);
          } else {
            var errorStartOffset = offset;
            var errorLine = line3;
            var errorColumn = column;
            var foundResyncPoint = false;
            while (!foundResyncPoint && offset < orgLength) {
              droppedChar = orgText.charCodeAt(offset);
              text = this.chopInput(text, 1);
              offset++;
              for (j = 0; j < currModePatternsLength; j++) {
                var currConfig_1 = patternIdxToConfig[j];
                var currPattern = currConfig_1.pattern;
                var singleCharCode = currConfig_1.short;
                if (singleCharCode !== false) {
                  if (orgText.charCodeAt(offset) === singleCharCode) {
                    foundResyncPoint = true;
                  }
                } else if (currConfig_1.isCustom === true) {
                  foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                } else {
                  this.updateLastIndex(currPattern, offset);
                  foundResyncPoint = currPattern.exec(text) !== null;
                }
                if (foundResyncPoint === true) {
                  break;
                }
              }
            }
            errLength = offset - errorStartOffset;
            msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
            errors.push({
              offset: errorStartOffset,
              line: errorLine,
              column: errorColumn,
              length: errLength,
              message: msg
            });
          }
        }
        if (!this.hasCustom) {
          matchedTokens.length = matchedTokensIndex;
        }
        return {
          tokens: matchedTokens,
          groups,
          errors
        };
      };
      Lexer2.prototype.handleModes = function(config, pop_mode, push_mode, newToken) {
        if (config.pop === true) {
          var pushMode = config.push;
          pop_mode(newToken);
          if (pushMode !== void 0) {
            push_mode.call(this, pushMode);
          }
        } else if (config.push !== void 0) {
          push_mode.call(this, config.push);
        }
      };
      Lexer2.prototype.chopInput = function(text, length) {
        return text.substring(length);
      };
      Lexer2.prototype.updateLastIndex = function(regExp, newLastIndex) {
        regExp.lastIndex = newLastIndex;
      };
      Lexer2.prototype.updateTokenEndLineColumnLocation = function(newToken, group3, lastLTIdx, numOfLTsInMatch, line3, column, imageLength) {
        var lastCharIsLT, fixForEndingInLT;
        if (group3 !== void 0) {
          lastCharIsLT = lastLTIdx === imageLength - 1;
          fixForEndingInLT = lastCharIsLT ? -1 : 0;
          if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
            newToken.endLine = line3 + fixForEndingInLT;
            newToken.endColumn = column - 1 + -fixForEndingInLT;
          }
        }
      };
      Lexer2.prototype.computeNewColumn = function(oldColumn, imageLength) {
        return oldColumn + imageLength;
      };
      Lexer2.prototype.createTokenInstance = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return null;
      };
      Lexer2.prototype.createOffsetOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType) {
        return {
          image,
          startOffset,
          tokenTypeIdx,
          tokenType
        };
      };
      Lexer2.prototype.createStartOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
        return {
          image,
          startOffset,
          startLine,
          startColumn,
          tokenTypeIdx,
          tokenType
        };
      };
      Lexer2.prototype.createFullToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
        return {
          image,
          startOffset,
          endOffset: startOffset + imageLength - 1,
          startLine,
          endLine: startLine,
          startColumn,
          endColumn: startColumn + imageLength - 1,
          tokenTypeIdx,
          tokenType
        };
      };
      Lexer2.prototype.addToken = function(tokenVector, index, tokenToAdd) {
        return 666;
      };
      Lexer2.prototype.addTokenUsingPush = function(tokenVector, index, tokenToAdd) {
        tokenVector.push(tokenToAdd);
        return index;
      };
      Lexer2.prototype.addTokenUsingMemberAccess = function(tokenVector, index, tokenToAdd) {
        tokenVector[index] = tokenToAdd;
        index++;
        return index;
      };
      Lexer2.prototype.handlePayload = function(token, payload) {
      };
      Lexer2.prototype.handlePayloadNoCustom = function(token, payload) {
      };
      Lexer2.prototype.handlePayloadWithCustom = function(token, payload) {
        if (payload !== null) {
          token.payload = payload;
        }
      };
      Lexer2.prototype.match = function(pattern, text, offset) {
        return null;
      };
      Lexer2.prototype.matchWithTest = function(pattern, text, offset) {
        var found = pattern.test(text);
        if (found === true) {
          return text.substring(offset, pattern.lastIndex);
        }
        return null;
      };
      Lexer2.prototype.matchWithExec = function(pattern, text) {
        var regExpArray = pattern.exec(text);
        return regExpArray !== null ? regExpArray[0] : regExpArray;
      };
      Lexer2.prototype.TRACE_INIT = function(phaseDesc, phaseImpl) {
        if (this.traceInitPerf === true) {
          this.traceInitIndent++;
          var indent4 = new Array(this.traceInitIndent + 1).join("	");
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            console.log(indent4 + "--> <" + phaseDesc + ">");
          }
          var _a = timer(phaseImpl), time = _a.time, value = _a.value;
          var traceMethod = time > 10 ? console.warn : console.log;
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            traceMethod(indent4 + "<-- <" + phaseDesc + "> time: " + time + "ms");
          }
          this.traceInitIndent--;
          return value;
        } else {
          return phaseImpl();
        }
      };
      Lexer2.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
      Lexer2.NA = /NOT_APPLICABLE/;
      return Lexer2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/scan/tokens_public.js
function tokenLabel(tokType) {
  if (hasTokenLabel(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function tokenName(tokType) {
  return tokType.name;
}
function hasTokenLabel(obj) {
  return isString(obj.LABEL) && obj.LABEL !== "";
}
function createToken(config) {
  return createTokenInternal(config);
}
function createTokenInternal(config) {
  var pattern = config.pattern;
  var tokenType = {};
  tokenType.name = config.name;
  if (!isUndefined(pattern)) {
    tokenType.PATTERN = pattern;
  }
  if (has(config, PARENT)) {
    throw "The parent property is no longer supported.\nSee: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.";
  }
  if (has(config, CATEGORIES)) {
    tokenType.CATEGORIES = config[CATEGORIES];
  }
  augmentTokenTypes([tokenType]);
  if (has(config, LABEL)) {
    tokenType.LABEL = config[LABEL];
  }
  if (has(config, GROUP)) {
    tokenType.GROUP = config[GROUP];
  }
  if (has(config, POP_MODE)) {
    tokenType.POP_MODE = config[POP_MODE];
  }
  if (has(config, PUSH_MODE)) {
    tokenType.PUSH_MODE = config[PUSH_MODE];
  }
  if (has(config, LONGER_ALT)) {
    tokenType.LONGER_ALT = config[LONGER_ALT];
  }
  if (has(config, LINE_BREAKS)) {
    tokenType.LINE_BREAKS = config[LINE_BREAKS];
  }
  if (has(config, START_CHARS_HINT)) {
    tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
  }
  return tokenType;
}
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
  return {
    image,
    startOffset,
    endOffset,
    startLine,
    endLine,
    startColumn,
    endColumn,
    tokenTypeIdx: tokType.tokenTypeIdx,
    tokenType: tokType
  };
}
function tokenMatcher(token, tokType) {
  return tokenStructuredMatcher(token, tokType);
}
var PARENT, CATEGORIES, LABEL, GROUP, PUSH_MODE, POP_MODE, LONGER_ALT, LINE_BREAKS, START_CHARS_HINT, EOF;
var init_tokens_public = __esm({
  "node_modules/chevrotain/lib_esm/src/scan/tokens_public.js"() {
    "use strict";
    init_utils();
    init_lexer_public();
    init_tokens();
    PARENT = "parent";
    CATEGORIES = "categories";
    LABEL = "label";
    GROUP = "group";
    PUSH_MODE = "push_mode";
    POP_MODE = "pop_mode";
    LONGER_ALT = "longer_alt";
    LINE_BREAKS = "line_breaks";
    START_CHARS_HINT = "start_chars_hint";
    EOF = createToken({ name: "EOF", pattern: Lexer.NA });
    augmentTokenTypes([EOF]);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js
function serializeGrammar(topRules) {
  return map(topRules, serializeProduction);
}
function serializeProduction(node) {
  function convertDefinition(definition) {
    return map(definition, serializeProduction);
  }
  if (node instanceof NonTerminal) {
    return {
      type: "NonTerminal",
      name: node.nonTerminalName,
      idx: node.idx
    };
  } else if (node instanceof Alternative) {
    return {
      type: "Alternative",
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Option) {
    return {
      type: "Option",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatory) {
    return {
      type: "RepetitionMandatory",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatoryWithSeparator) {
    return {
      type: "RepetitionMandatoryWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionWithSeparator) {
    return {
      type: "RepetitionWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Repetition) {
    return {
      type: "Repetition",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Alternation) {
    return {
      type: "Alternation",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Terminal) {
    var serializedTerminal = {
      type: "Terminal",
      name: node.terminalType.name,
      label: tokenLabel(node.terminalType),
      idx: node.idx
    };
    var pattern = node.terminalType.PATTERN;
    if (node.terminalType.PATTERN) {
      serializedTerminal.pattern = isRegExp(pattern) ? pattern.source : pattern;
    }
    return serializedTerminal;
  } else if (node instanceof Rule) {
    return {
      type: "Rule",
      name: node.name,
      orgText: node.orgText,
      definition: convertDefinition(node.definition)
    };
  } else {
    throw Error("non exhaustive match");
  }
}
var __extends3, AbstractProduction, NonTerminal, Rule, Alternative, Option, RepetitionMandatory, RepetitionMandatoryWithSeparator, Repetition, RepetitionWithSeparator, Alternation, Terminal;
var init_gast_public = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js"() {
    "use strict";
    init_utils();
    init_tokens_public();
    __extends3 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    AbstractProduction = /** @class */
    function() {
      function AbstractProduction2(_definition) {
        this._definition = _definition;
      }
      Object.defineProperty(AbstractProduction2.prototype, "definition", {
        get: function() {
          return this._definition;
        },
        set: function(value) {
          this._definition = value;
        },
        enumerable: false,
        configurable: true
      });
      AbstractProduction2.prototype.accept = function(visitor) {
        visitor.visit(this);
        forEach(this.definition, function(prod) {
          prod.accept(visitor);
        });
      };
      return AbstractProduction2;
    }();
    NonTerminal = /** @class */
    function(_super) {
      __extends3(NonTerminal2, _super);
      function NonTerminal2(options) {
        var _this = _super.call(this, []) || this;
        _this.idx = 1;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      Object.defineProperty(NonTerminal2.prototype, "definition", {
        get: function() {
          if (this.referencedRule !== void 0) {
            return this.referencedRule.definition;
          }
          return [];
        },
        set: function(definition) {
        },
        enumerable: false,
        configurable: true
      });
      NonTerminal2.prototype.accept = function(visitor) {
        visitor.visit(this);
      };
      return NonTerminal2;
    }(AbstractProduction);
    Rule = /** @class */
    function(_super) {
      __extends3(Rule2, _super);
      function Rule2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.orgText = "";
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return Rule2;
    }(AbstractProduction);
    Alternative = /** @class */
    function(_super) {
      __extends3(Alternative2, _super);
      function Alternative2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.ignoreAmbiguities = false;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return Alternative2;
    }(AbstractProduction);
    Option = /** @class */
    function(_super) {
      __extends3(Option2, _super);
      function Option2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return Option2;
    }(AbstractProduction);
    RepetitionMandatory = /** @class */
    function(_super) {
      __extends3(RepetitionMandatory2, _super);
      function RepetitionMandatory2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return RepetitionMandatory2;
    }(AbstractProduction);
    RepetitionMandatoryWithSeparator = /** @class */
    function(_super) {
      __extends3(RepetitionMandatoryWithSeparator2, _super);
      function RepetitionMandatoryWithSeparator2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return RepetitionMandatoryWithSeparator2;
    }(AbstractProduction);
    Repetition = /** @class */
    function(_super) {
      __extends3(Repetition2, _super);
      function Repetition2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return Repetition2;
    }(AbstractProduction);
    RepetitionWithSeparator = /** @class */
    function(_super) {
      __extends3(RepetitionWithSeparator2, _super);
      function RepetitionWithSeparator2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      return RepetitionWithSeparator2;
    }(AbstractProduction);
    Alternation = /** @class */
    function(_super) {
      __extends3(Alternation2, _super);
      function Alternation2(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        _this.ignoreAmbiguities = false;
        _this.hasPredicates = false;
        assign(_this, pick(options, function(v) {
          return v !== void 0;
        }));
        return _this;
      }
      Object.defineProperty(Alternation2.prototype, "definition", {
        get: function() {
          return this._definition;
        },
        set: function(value) {
          this._definition = value;
        },
        enumerable: false,
        configurable: true
      });
      return Alternation2;
    }(AbstractProduction);
    Terminal = /** @class */
    function() {
      function Terminal2(options) {
        this.idx = 1;
        assign(this, pick(options, function(v) {
          return v !== void 0;
        }));
      }
      Terminal2.prototype.accept = function(visitor) {
        visitor.visit(this);
      };
      return Terminal2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
  var repSepRest = [
    new Option({
      definition: [new Terminal({ terminalType: repSepProd.separator })].concat(repSepProd.definition)
    })
  ];
  var fullRepSepRest = repSepRest.concat(currRest, prevRest);
  return fullRepSepRest;
}
var RestWalker;
var init_rest = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js"() {
    "use strict";
    init_utils();
    init_gast_public();
    RestWalker = /** @class */
    function() {
      function RestWalker2() {
      }
      RestWalker2.prototype.walk = function(prod, prevRest) {
        var _this = this;
        if (prevRest === void 0) {
          prevRest = [];
        }
        forEach(prod.definition, function(subProd, index) {
          var currRest = drop(prod.definition, index + 1);
          if (subProd instanceof NonTerminal) {
            _this.walkProdRef(subProd, currRest, prevRest);
          } else if (subProd instanceof Terminal) {
            _this.walkTerminal(subProd, currRest, prevRest);
          } else if (subProd instanceof Alternative) {
            _this.walkFlat(subProd, currRest, prevRest);
          } else if (subProd instanceof Option) {
            _this.walkOption(subProd, currRest, prevRest);
          } else if (subProd instanceof RepetitionMandatory) {
            _this.walkAtLeastOne(subProd, currRest, prevRest);
          } else if (subProd instanceof RepetitionMandatoryWithSeparator) {
            _this.walkAtLeastOneSep(subProd, currRest, prevRest);
          } else if (subProd instanceof RepetitionWithSeparator) {
            _this.walkManySep(subProd, currRest, prevRest);
          } else if (subProd instanceof Repetition) {
            _this.walkMany(subProd, currRest, prevRest);
          } else if (subProd instanceof Alternation) {
            _this.walkOr(subProd, currRest, prevRest);
          } else {
            throw Error("non exhaustive match");
          }
        });
      };
      RestWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
      };
      RestWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
      };
      RestWalker2.prototype.walkFlat = function(flatProd, currRest, prevRest) {
        var fullOrRest = currRest.concat(prevRest);
        this.walk(flatProd, fullOrRest);
      };
      RestWalker2.prototype.walkOption = function(optionProd, currRest, prevRest) {
        var fullOrRest = currRest.concat(prevRest);
        this.walk(optionProd, fullOrRest);
      };
      RestWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
        var fullAtLeastOneRest = [
          new Option({ definition: atLeastOneProd.definition })
        ].concat(currRest, prevRest);
        this.walk(atLeastOneProd, fullAtLeastOneRest);
      };
      RestWalker2.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
        var fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
      };
      RestWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
        var fullManyRest = [
          new Option({ definition: manyProd.definition })
        ].concat(currRest, prevRest);
        this.walk(manyProd, fullManyRest);
      };
      RestWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
        var fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
        this.walk(manySepProd, fullManySepRest);
      };
      RestWalker2.prototype.walkOr = function(orProd, currRest, prevRest) {
        var _this = this;
        var fullOrRest = currRest.concat(prevRest);
        forEach(orProd.definition, function(alt) {
          var prodWrapper = new Alternative({ definition: [alt] });
          _this.walk(prodWrapper, fullOrRest);
        });
      };
      return RestWalker2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js
var GAstVisitor;
var init_gast_visitor_public = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js"() {
    "use strict";
    init_gast_public();
    GAstVisitor = /** @class */
    function() {
      function GAstVisitor2() {
      }
      GAstVisitor2.prototype.visit = function(node) {
        var nodeAny = node;
        switch (nodeAny.constructor) {
          case NonTerminal:
            return this.visitNonTerminal(nodeAny);
          case Alternative:
            return this.visitAlternative(nodeAny);
          case Option:
            return this.visitOption(nodeAny);
          case RepetitionMandatory:
            return this.visitRepetitionMandatory(nodeAny);
          case RepetitionMandatoryWithSeparator:
            return this.visitRepetitionMandatoryWithSeparator(nodeAny);
          case RepetitionWithSeparator:
            return this.visitRepetitionWithSeparator(nodeAny);
          case Repetition:
            return this.visitRepetition(nodeAny);
          case Alternation:
            return this.visitAlternation(nodeAny);
          case Terminal:
            return this.visitTerminal(nodeAny);
          case Rule:
            return this.visitRule(nodeAny);
          default:
            throw Error("non exhaustive match");
        }
      };
      GAstVisitor2.prototype.visitNonTerminal = function(node) {
      };
      GAstVisitor2.prototype.visitAlternative = function(node) {
      };
      GAstVisitor2.prototype.visitOption = function(node) {
      };
      GAstVisitor2.prototype.visitRepetition = function(node) {
      };
      GAstVisitor2.prototype.visitRepetitionMandatory = function(node) {
      };
      GAstVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
      };
      GAstVisitor2.prototype.visitRepetitionWithSeparator = function(node) {
      };
      GAstVisitor2.prototype.visitAlternation = function(node) {
      };
      GAstVisitor2.prototype.visitTerminal = function(node) {
      };
      GAstVisitor2.prototype.visitRule = function(node) {
      };
      return GAstVisitor2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js
function isSequenceProd(prod) {
  return prod instanceof Alternative || prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionMandatory || prod instanceof RepetitionMandatoryWithSeparator || prod instanceof RepetitionWithSeparator || prod instanceof Terminal || prod instanceof Rule;
}
function isOptionalProd(prod, alreadyVisited) {
  if (alreadyVisited === void 0) {
    alreadyVisited = [];
  }
  var isDirectlyOptional = prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionWithSeparator;
  if (isDirectlyOptional) {
    return true;
  }
  if (prod instanceof Alternation) {
    return some(prod.definition, function(subProd) {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else if (prod instanceof NonTerminal && contains(alreadyVisited, prod)) {
    return false;
  } else if (prod instanceof AbstractProduction) {
    if (prod instanceof NonTerminal) {
      alreadyVisited.push(prod);
    }
    return every(prod.definition, function(subProd) {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else {
    return false;
  }
}
function isBranchingProd(prod) {
  return prod instanceof Alternation;
}
function getProductionDslName(prod) {
  if (prod instanceof NonTerminal) {
    return "SUBRULE";
  } else if (prod instanceof Option) {
    return "OPTION";
  } else if (prod instanceof Alternation) {
    return "OR";
  } else if (prod instanceof RepetitionMandatory) {
    return "AT_LEAST_ONE";
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return "AT_LEAST_ONE_SEP";
  } else if (prod instanceof RepetitionWithSeparator) {
    return "MANY_SEP";
  } else if (prod instanceof Repetition) {
    return "MANY";
  } else if (prod instanceof Terminal) {
    return "CONSUME";
  } else {
    throw Error("non exhaustive match");
  }
}
function collectMethods(rule) {
  collectorVisitor.reset();
  rule.accept(collectorVisitor);
  var dslMethods = collectorVisitor.dslMethods;
  collectorVisitor.reset();
  return dslMethods;
}
var __extends4, DslMethodsCollectorVisitor, collectorVisitor;
var init_gast = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js"() {
    "use strict";
    init_utils();
    init_gast_public();
    init_gast_visitor_public();
    __extends4 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    DslMethodsCollectorVisitor = /** @class */
    function(_super) {
      __extends4(DslMethodsCollectorVisitor2, _super);
      function DslMethodsCollectorVisitor2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.separator = "-";
        _this.dslMethods = {
          option: [],
          alternation: [],
          repetition: [],
          repetitionWithSeparator: [],
          repetitionMandatory: [],
          repetitionMandatoryWithSeparator: []
        };
        return _this;
      }
      DslMethodsCollectorVisitor2.prototype.reset = function() {
        this.dslMethods = {
          option: [],
          alternation: [],
          repetition: [],
          repetitionWithSeparator: [],
          repetitionMandatory: [],
          repetitionMandatoryWithSeparator: []
        };
      };
      DslMethodsCollectorVisitor2.prototype.visitTerminal = function(terminal) {
        var key = terminal.terminalType.name + this.separator + "Terminal";
        if (!has(this.dslMethods, key)) {
          this.dslMethods[key] = [];
        }
        this.dslMethods[key].push(terminal);
      };
      DslMethodsCollectorVisitor2.prototype.visitNonTerminal = function(subrule) {
        var key = subrule.nonTerminalName + this.separator + "Terminal";
        if (!has(this.dslMethods, key)) {
          this.dslMethods[key] = [];
        }
        this.dslMethods[key].push(subrule);
      };
      DslMethodsCollectorVisitor2.prototype.visitOption = function(option) {
        this.dslMethods.option.push(option);
      };
      DslMethodsCollectorVisitor2.prototype.visitRepetitionWithSeparator = function(manySep) {
        this.dslMethods.repetitionWithSeparator.push(manySep);
      };
      DslMethodsCollectorVisitor2.prototype.visitRepetitionMandatory = function(atLeastOne) {
        this.dslMethods.repetitionMandatory.push(atLeastOne);
      };
      DslMethodsCollectorVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
      };
      DslMethodsCollectorVisitor2.prototype.visitRepetition = function(many) {
        this.dslMethods.repetition.push(many);
      };
      DslMethodsCollectorVisitor2.prototype.visitAlternation = function(or) {
        this.dslMethods.alternation.push(or);
      };
      return DslMethodsCollectorVisitor2;
    }(GAstVisitor);
    collectorVisitor = new DslMethodsCollectorVisitor();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/first.js
function first2(prod) {
  if (prod instanceof NonTerminal) {
    return first2(prod.referencedRule);
  } else if (prod instanceof Terminal) {
    return firstForTerminal(prod);
  } else if (isSequenceProd(prod)) {
    return firstForSequence(prod);
  } else if (isBranchingProd(prod)) {
    return firstForBranching(prod);
  } else {
    throw Error("non exhaustive match");
  }
}
function firstForSequence(prod) {
  var firstSet = [];
  var seq = prod.definition;
  var nextSubProdIdx = 0;
  var hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  var currSubProd;
  var isLastInnerProdOptional = true;
  while (hasInnerProdsRemaining && isLastInnerProdOptional) {
    currSubProd = seq[nextSubProdIdx];
    isLastInnerProdOptional = isOptionalProd(currSubProd);
    firstSet = firstSet.concat(first2(currSubProd));
    nextSubProdIdx = nextSubProdIdx + 1;
    hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  }
  return uniq(firstSet);
}
function firstForBranching(prod) {
  var allAlternativesFirsts = map(prod.definition, function(innerProd) {
    return first2(innerProd);
  });
  return uniq(flatten(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
  return [terminal.terminalType];
}
var init_first = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/first.js"() {
    "use strict";
    init_utils();
    init_gast_public();
    init_gast();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/constants.js
var IN;
var init_constants = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/constants.js"() {
    "use strict";
    IN = "_~IN~_";
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/follow.js
function computeAllProdsFollows(topProductions) {
  var reSyncFollows = {};
  forEach(topProductions, function(topProd) {
    var currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
    assign(reSyncFollows, currRefsFollow);
  });
  return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
  return inner.name + occurenceInParent + IN;
}
var __extends5, ResyncFollowsWalker;
var init_follow = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/follow.js"() {
    "use strict";
    init_rest();
    init_first();
    init_utils();
    init_constants();
    init_gast_public();
    __extends5 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    ResyncFollowsWalker = /** @class */
    function(_super) {
      __extends5(ResyncFollowsWalker2, _super);
      function ResyncFollowsWalker2(topProd) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.follows = {};
        return _this;
      }
      ResyncFollowsWalker2.prototype.startWalking = function() {
        this.walk(this.topProd);
        return this.follows;
      };
      ResyncFollowsWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
      };
      ResyncFollowsWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
        var followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
        var fullRest = currRest.concat(prevRest);
        var restProd = new Alternative({ definition: fullRest });
        var t_in_topProd_follows = first2(restProd);
        this.follows[followName] = t_in_topProd_follows;
      };
      return ResyncFollowsWalker2;
    }(RestWalker);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/errors_public.js
var defaultParserErrorProvider, defaultGrammarResolverErrorProvider, defaultGrammarValidatorErrorProvider;
var init_errors_public = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/errors_public.js"() {
    "use strict";
    init_tokens_public();
    init_utils();
    init_utils();
    init_gast_public();
    init_gast();
    defaultParserErrorProvider = {
      buildMismatchTokenMessage: function(_a) {
        var expected = _a.expected, actual = _a.actual, previous = _a.previous, ruleName = _a.ruleName;
        var hasLabel = hasTokenLabel(expected);
        var expectedMsg = hasLabel ? "--> " + tokenLabel(expected) + " <--" : "token of type --> " + expected.name + " <--";
        var msg = "Expecting " + expectedMsg + " but found --> '" + actual.image + "' <--";
        return msg;
      },
      buildNotAllInputParsedMessage: function(_a) {
        var firstRedundant = _a.firstRedundant, ruleName = _a.ruleName;
        return "Redundant input, expecting EOF but found: " + firstRedundant.image;
      },
      buildNoViableAltMessage: function(_a) {
        var expectedPathsPerAlt = _a.expectedPathsPerAlt, actual = _a.actual, previous = _a.previous, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
        var errPrefix = "Expecting: ";
        var actualText = first(actual).image;
        var errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
          return errPrefix + customUserDescription + errSuffix;
        } else {
          var allLookAheadPaths = reduce(expectedPathsPerAlt, function(result, currAltPaths) {
            return result.concat(currAltPaths);
          }, []);
          var nextValidTokenSequences = map(allLookAheadPaths, function(currPath) {
            return "[" + map(currPath, function(currTokenType) {
              return tokenLabel(currTokenType);
            }).join(", ") + "]";
          });
          var nextValidSequenceItems = map(nextValidTokenSequences, function(itemMsg, idx) {
            return "  " + (idx + 1) + ". " + itemMsg;
          });
          var calculatedDescription = "one of these possible Token sequences:\n" + nextValidSequenceItems.join("\n");
          return errPrefix + calculatedDescription + errSuffix;
        }
      },
      buildEarlyExitMessage: function(_a) {
        var expectedIterationPaths = _a.expectedIterationPaths, actual = _a.actual, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
        var errPrefix = "Expecting: ";
        var actualText = first(actual).image;
        var errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
          return errPrefix + customUserDescription + errSuffix;
        } else {
          var nextValidTokenSequences = map(expectedIterationPaths, function(currPath) {
            return "[" + map(currPath, function(currTokenType) {
              return tokenLabel(currTokenType);
            }).join(",") + "]";
          });
          var calculatedDescription = "expecting at least one iteration which starts with one of these possible Token sequences::\n  " + ("<" + nextValidTokenSequences.join(" ,") + ">");
          return errPrefix + calculatedDescription + errSuffix;
        }
      }
    };
    Object.freeze(defaultParserErrorProvider);
    defaultGrammarResolverErrorProvider = {
      buildRuleNotFoundError: function(topLevelRule, undefinedRule) {
        var msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
        return msg;
      }
    };
    defaultGrammarValidatorErrorProvider = {
      buildDuplicateFoundError: function(topLevelRule, duplicateProds) {
        function getExtraProductionArgument2(prod) {
          if (prod instanceof Terminal) {
            return prod.terminalType.name;
          } else if (prod instanceof NonTerminal) {
            return prod.nonTerminalName;
          } else {
            return "";
          }
        }
        var topLevelName = topLevelRule.name;
        var duplicateProd = first(duplicateProds);
        var index = duplicateProd.idx;
        var dslName = getProductionDslName(duplicateProd);
        var extraArgument = getExtraProductionArgument2(duplicateProd);
        var hasExplicitIndex = index > 0;
        var msg = "->" + dslName + (hasExplicitIndex ? index : "") + "<- " + (extraArgument ? "with argument: ->" + extraArgument + "<-" : "") + "\n                  appears more than once (" + duplicateProds.length + " times) in the top level rule: ->" + topLevelName + "<-.                  \n                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ";
        msg = msg.replace(/[ \t]+/g, " ");
        msg = msg.replace(/\s\s+/g, "\n");
        return msg;
      },
      buildNamespaceConflictError: function(rule) {
        var errMsg = "Namespace conflict found in grammar.\n" + ("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <" + rule.name + ">.\n") + "To resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter.";
        return errMsg;
      },
      buildAlternationPrefixAmbiguityError: function(options) {
        var pathMsg = map(options.prefixPath, function(currTok) {
          return tokenLabel(currTok);
        }).join(", ");
        var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        var errMsg = "Ambiguous alternatives: <" + options.ambiguityIndices.join(" ,") + "> due to common lookahead prefix\n" + ("in <OR" + occurrence + "> inside <" + options.topLevelRule.name + "> Rule,\n") + ("<" + pathMsg + "> may appears as a prefix path in all these alternatives.\n") + "See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details.";
        return errMsg;
      },
      buildAlternationAmbiguityError: function(options) {
        var pathMsg = map(options.prefixPath, function(currtok) {
          return tokenLabel(currtok);
        }).join(", ");
        var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        var currMessage = "Ambiguous Alternatives Detected: <" + options.ambiguityIndices.join(" ,") + "> in <OR" + occurrence + ">" + (" inside <" + options.topLevelRule.name + "> Rule,\n") + ("<" + pathMsg + "> may appears as a prefix path in all these alternatives.\n");
        currMessage = currMessage + "See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.";
        return currMessage;
      },
      buildEmptyRepetitionError: function(options) {
        var dslName = getProductionDslName(options.repetition);
        if (options.repetition.idx !== 0) {
          dslName += options.repetition.idx;
        }
        var errMsg = "The repetition <" + dslName + "> within Rule <" + options.topLevelRule.name + "> can never consume any tokens.\nThis could lead to an infinite loop.";
        return errMsg;
      },
      // TODO: remove - `errors_public` from nyc.config.js exclude
      //       once this method is fully removed from this file
      buildTokenNameError: function(options) {
        return "deprecated";
      },
      buildEmptyAlternationError: function(options) {
        var errMsg = "Ambiguous empty alternative: <" + (options.emptyChoiceIdx + 1) + ">" + (" in <OR" + options.alternation.idx + "> inside <" + options.topLevelRule.name + "> Rule.\n") + "Only the last alternative may be an empty alternative.";
        return errMsg;
      },
      buildTooManyAlternativesError: function(options) {
        var errMsg = "An Alternation cannot have more than 256 alternatives:\n" + ("<OR" + options.alternation.idx + "> inside <" + options.topLevelRule.name + "> Rule.\n has " + (options.alternation.definition.length + 1) + " alternatives.");
        return errMsg;
      },
      buildLeftRecursionError: function(options) {
        var ruleName = options.topLevelRule.name;
        var pathNames = map(options.leftRecursionPath, function(currRule) {
          return currRule.name;
        });
        var leftRecursivePath = ruleName + " --> " + pathNames.concat([ruleName]).join(" --> ");
        var errMsg = "Left Recursion found in grammar.\n" + ("rule: <" + ruleName + "> can be invoked from itself (directly or indirectly)\n") + ("without consuming any Tokens. The grammar path that causes this is: \n " + leftRecursivePath + "\n") + " To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.";
        return errMsg;
      },
      // TODO: remove - `errors_public` from nyc.config.js exclude
      //       once this method is fully removed from this file
      buildInvalidRuleNameError: function(options) {
        return "deprecated";
      },
      buildDuplicateRuleNameError: function(options) {
        var ruleName;
        if (options.topLevelRule instanceof Rule) {
          ruleName = options.topLevelRule.name;
        } else {
          ruleName = options.topLevelRule;
        }
        var errMsg = "Duplicate definition, rule: ->" + ruleName + "<- is already defined in the grammar: ->" + options.grammarName + "<-";
        return errMsg;
      }
    };
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/resolver.js
function resolveGrammar(topLevels, errMsgProvider) {
  var refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
  refResolver.resolveRefs();
  return refResolver.errors;
}
var __extends6, GastRefResolverVisitor;
var init_resolver = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/resolver.js"() {
    "use strict";
    init_parser();
    init_utils();
    init_gast_visitor_public();
    __extends6 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    GastRefResolverVisitor = /** @class */
    function(_super) {
      __extends6(GastRefResolverVisitor2, _super);
      function GastRefResolverVisitor2(nameToTopRule, errMsgProvider) {
        var _this = _super.call(this) || this;
        _this.nameToTopRule = nameToTopRule;
        _this.errMsgProvider = errMsgProvider;
        _this.errors = [];
        return _this;
      }
      GastRefResolverVisitor2.prototype.resolveRefs = function() {
        var _this = this;
        forEach(values(this.nameToTopRule), function(prod) {
          _this.currTopLevel = prod;
          prod.accept(_this);
        });
      };
      GastRefResolverVisitor2.prototype.visitNonTerminal = function(node) {
        var ref = this.nameToTopRule[node.nonTerminalName];
        if (!ref) {
          var msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
          this.errors.push({
            message: msg,
            type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
            ruleName: this.currTopLevel.name,
            unresolvedRefName: node.nonTerminalName
          });
        } else {
          node.referencedRule = ref;
        }
      };
      return GastRefResolverVisitor2;
    }(GAstVisitor);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js
function possiblePathsFrom(targetDef, maxLength, currPath) {
  if (currPath === void 0) {
    currPath = [];
  }
  currPath = cloneArr(currPath);
  var result = [];
  var i = 0;
  function remainingPathWith(nextDef) {
    return nextDef.concat(drop(targetDef, i + 1));
  }
  function getAlternativesForProd(definition) {
    var alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
    return result.concat(alternatives);
  }
  while (currPath.length < maxLength && i < targetDef.length) {
    var prod = targetDef[i];
    if (prod instanceof Alternative) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof NonTerminal) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof Option) {
      result = getAlternativesForProd(prod.definition);
    } else if (prod instanceof RepetitionMandatory) {
      var newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      var newDef = [
        new Alternative({ definition: prod.definition }),
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ];
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionWithSeparator) {
      var newDef = prod.definition.concat([
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Repetition) {
      var newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Alternation) {
      forEach(prod.definition, function(currAlt) {
        if (isEmpty(currAlt.definition) === false) {
          result = getAlternativesForProd(currAlt.definition);
        }
      });
      return result;
    } else if (prod instanceof Terminal) {
      currPath.push(prod.terminalType);
    } else {
      throw Error("non exhaustive match");
    }
    i++;
  }
  result.push({
    partialPath: currPath,
    suffixDef: drop(targetDef, i)
  });
  return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
  var EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
  var EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
  var EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
  var foundCompletePath = false;
  var tokenVectorLength = tokenVector.length;
  var minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
  var result = [];
  var possiblePaths = [];
  possiblePaths.push({
    idx: -1,
    def: initialDef,
    ruleStack: [],
    occurrenceStack: []
  });
  while (!isEmpty(possiblePaths)) {
    var currPath = possiblePaths.pop();
    if (currPath === EXIT_ALTERNATIVE) {
      if (foundCompletePath && last(possiblePaths).idx <= minimalAlternativesIndex) {
        possiblePaths.pop();
      }
      continue;
    }
    var currDef = currPath.def;
    var currIdx = currPath.idx;
    var currRuleStack = currPath.ruleStack;
    var currOccurrenceStack = currPath.occurrenceStack;
    if (isEmpty(currDef)) {
      continue;
    }
    var prod = currDef[0];
    if (prod === EXIT_NON_TERMINAL) {
      var nextPath = {
        idx: currIdx,
        def: drop(currDef),
        ruleStack: dropRight(currRuleStack),
        occurrenceStack: dropRight(currOccurrenceStack)
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Terminal) {
      if (currIdx < tokenVectorLength - 1) {
        var nextIdx = currIdx + 1;
        var actualToken = tokenVector[nextIdx];
        if (tokMatcher(actualToken, prod.terminalType)) {
          var nextPath = {
            idx: nextIdx,
            def: drop(currDef),
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
          };
          possiblePaths.push(nextPath);
        }
      } else if (currIdx === tokenVectorLength - 1) {
        result.push({
          nextTokenType: prod.terminalType,
          nextTokenOccurrence: prod.idx,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        });
        foundCompletePath = true;
      } else {
        throw Error("non exhaustive match");
      }
    } else if (prod instanceof NonTerminal) {
      var newRuleStack = cloneArr(currRuleStack);
      newRuleStack.push(prod.nonTerminalName);
      var newOccurrenceStack = cloneArr(currOccurrenceStack);
      newOccurrenceStack.push(prod.idx);
      var nextPath = {
        idx: currIdx,
        def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, drop(currDef)),
        ruleStack: newRuleStack,
        occurrenceStack: newOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Option) {
      var nextPathWithout = {
        idx: currIdx,
        def: drop(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      var nextPathWith = {
        idx: currIdx,
        def: prod.definition.concat(drop(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof RepetitionMandatory) {
      var secondIteration = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      var nextDef = prod.definition.concat([secondIteration], drop(currDef));
      var nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      var separatorGast = new Terminal({
        terminalType: prod.separator
      });
      var secondIteration = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      var nextDef = prod.definition.concat([secondIteration], drop(currDef));
      var nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionWithSeparator) {
      var nextPathWithout = {
        idx: currIdx,
        def: drop(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      var separatorGast = new Terminal({
        terminalType: prod.separator
      });
      var nthRepetition = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      var nextDef = prod.definition.concat([nthRepetition], drop(currDef));
      var nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Repetition) {
      var nextPathWithout = {
        idx: currIdx,
        def: drop(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      var nthRepetition = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      var nextDef = prod.definition.concat([nthRepetition], drop(currDef));
      var nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Alternation) {
      for (var i = prod.definition.length - 1; i >= 0; i--) {
        var currAlt = prod.definition[i];
        var currAltPath = {
          idx: currIdx,
          def: currAlt.definition.concat(drop(currDef)),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(currAltPath);
        possiblePaths.push(EXIT_ALTERNATIVE);
      }
    } else if (prod instanceof Alternative) {
      possiblePaths.push({
        idx: currIdx,
        def: prod.definition.concat(drop(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      });
    } else if (prod instanceof Rule) {
      possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
    } else {
      throw Error("non exhaustive match");
    }
  }
  return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
  var newRuleStack = cloneArr(currRuleStack);
  newRuleStack.push(topRule.name);
  var newCurrOccurrenceStack = cloneArr(currOccurrenceStack);
  newCurrOccurrenceStack.push(1);
  return {
    idx: currIdx,
    def: topRule.definition,
    ruleStack: newRuleStack,
    occurrenceStack: newCurrOccurrenceStack
  };
}
var __extends7, AbstractNextPossibleTokensWalker, NextAfterTokenWalker, AbstractNextTerminalAfterProductionWalker, NextTerminalAfterManyWalker, NextTerminalAfterManySepWalker, NextTerminalAfterAtLeastOneWalker, NextTerminalAfterAtLeastOneSepWalker;
var init_interpreter = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js"() {
    "use strict";
    init_rest();
    init_utils();
    init_first();
    init_gast_public();
    __extends7 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    AbstractNextPossibleTokensWalker = /** @class */
    function(_super) {
      __extends7(AbstractNextPossibleTokensWalker2, _super);
      function AbstractNextPossibleTokensWalker2(topProd, path) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.path = path;
        _this.possibleTokTypes = [];
        _this.nextProductionName = "";
        _this.nextProductionOccurrence = 0;
        _this.found = false;
        _this.isAtEndOfPath = false;
        return _this;
      }
      AbstractNextPossibleTokensWalker2.prototype.startWalking = function() {
        this.found = false;
        if (this.path.ruleStack[0] !== this.topProd.name) {
          throw Error("The path does not start with the walker's top Rule!");
        }
        this.ruleStack = cloneArr(this.path.ruleStack).reverse();
        this.occurrenceStack = cloneArr(this.path.occurrenceStack).reverse();
        this.ruleStack.pop();
        this.occurrenceStack.pop();
        this.updateExpectedNext();
        this.walk(this.topProd);
        return this.possibleTokTypes;
      };
      AbstractNextPossibleTokensWalker2.prototype.walk = function(prod, prevRest) {
        if (prevRest === void 0) {
          prevRest = [];
        }
        if (!this.found) {
          _super.prototype.walk.call(this, prod, prevRest);
        }
      };
      AbstractNextPossibleTokensWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
        if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
          var fullRest = currRest.concat(prevRest);
          this.updateExpectedNext();
          this.walk(refProd.referencedRule, fullRest);
        }
      };
      AbstractNextPossibleTokensWalker2.prototype.updateExpectedNext = function() {
        if (isEmpty(this.ruleStack)) {
          this.nextProductionName = "";
          this.nextProductionOccurrence = 0;
          this.isAtEndOfPath = true;
        } else {
          this.nextProductionName = this.ruleStack.pop();
          this.nextProductionOccurrence = this.occurrenceStack.pop();
        }
      };
      return AbstractNextPossibleTokensWalker2;
    }(RestWalker);
    NextAfterTokenWalker = /** @class */
    function(_super) {
      __extends7(NextAfterTokenWalker2, _super);
      function NextAfterTokenWalker2(topProd, path) {
        var _this = _super.call(this, topProd, path) || this;
        _this.path = path;
        _this.nextTerminalName = "";
        _this.nextTerminalOccurrence = 0;
        _this.nextTerminalName = _this.path.lastTok.name;
        _this.nextTerminalOccurrence = _this.path.lastTokOccurrence;
        return _this;
      }
      NextAfterTokenWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
        if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
          var fullRest = currRest.concat(prevRest);
          var restProd = new Alternative({ definition: fullRest });
          this.possibleTokTypes = first2(restProd);
          this.found = true;
        }
      };
      return NextAfterTokenWalker2;
    }(AbstractNextPossibleTokensWalker);
    AbstractNextTerminalAfterProductionWalker = /** @class */
    function(_super) {
      __extends7(AbstractNextTerminalAfterProductionWalker2, _super);
      function AbstractNextTerminalAfterProductionWalker2(topRule, occurrence) {
        var _this = _super.call(this) || this;
        _this.topRule = topRule;
        _this.occurrence = occurrence;
        _this.result = {
          token: void 0,
          occurrence: void 0,
          isEndOfRule: void 0
        };
        return _this;
      }
      AbstractNextTerminalAfterProductionWalker2.prototype.startWalking = function() {
        this.walk(this.topRule);
        return this.result;
      };
      return AbstractNextTerminalAfterProductionWalker2;
    }(RestWalker);
    NextTerminalAfterManyWalker = /** @class */
    function(_super) {
      __extends7(NextTerminalAfterManyWalker2, _super);
      function NextTerminalAfterManyWalker2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      NextTerminalAfterManyWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
        if (manyProd.idx === this.occurrence) {
          var firstAfterMany = first(currRest.concat(prevRest));
          this.result.isEndOfRule = firstAfterMany === void 0;
          if (firstAfterMany instanceof Terminal) {
            this.result.token = firstAfterMany.terminalType;
            this.result.occurrence = firstAfterMany.idx;
          }
        } else {
          _super.prototype.walkMany.call(this, manyProd, currRest, prevRest);
        }
      };
      return NextTerminalAfterManyWalker2;
    }(AbstractNextTerminalAfterProductionWalker);
    NextTerminalAfterManySepWalker = /** @class */
    function(_super) {
      __extends7(NextTerminalAfterManySepWalker2, _super);
      function NextTerminalAfterManySepWalker2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      NextTerminalAfterManySepWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
        if (manySepProd.idx === this.occurrence) {
          var firstAfterManySep = first(currRest.concat(prevRest));
          this.result.isEndOfRule = firstAfterManySep === void 0;
          if (firstAfterManySep instanceof Terminal) {
            this.result.token = firstAfterManySep.terminalType;
            this.result.occurrence = firstAfterManySep.idx;
          }
        } else {
          _super.prototype.walkManySep.call(this, manySepProd, currRest, prevRest);
        }
      };
      return NextTerminalAfterManySepWalker2;
    }(AbstractNextTerminalAfterProductionWalker);
    NextTerminalAfterAtLeastOneWalker = /** @class */
    function(_super) {
      __extends7(NextTerminalAfterAtLeastOneWalker2, _super);
      function NextTerminalAfterAtLeastOneWalker2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      NextTerminalAfterAtLeastOneWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
        if (atLeastOneProd.idx === this.occurrence) {
          var firstAfterAtLeastOne = first(currRest.concat(prevRest));
          this.result.isEndOfRule = firstAfterAtLeastOne === void 0;
          if (firstAfterAtLeastOne instanceof Terminal) {
            this.result.token = firstAfterAtLeastOne.terminalType;
            this.result.occurrence = firstAfterAtLeastOne.idx;
          }
        } else {
          _super.prototype.walkAtLeastOne.call(this, atLeastOneProd, currRest, prevRest);
        }
      };
      return NextTerminalAfterAtLeastOneWalker2;
    }(AbstractNextTerminalAfterProductionWalker);
    NextTerminalAfterAtLeastOneSepWalker = /** @class */
    function(_super) {
      __extends7(NextTerminalAfterAtLeastOneSepWalker2, _super);
      function NextTerminalAfterAtLeastOneSepWalker2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      NextTerminalAfterAtLeastOneSepWalker2.prototype.walkAtLeastOneSep = function(atleastOneSepProd, currRest, prevRest) {
        if (atleastOneSepProd.idx === this.occurrence) {
          var firstAfterfirstAfterAtLeastOneSep = first(currRest.concat(prevRest));
          this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0;
          if (firstAfterfirstAfterAtLeastOneSep instanceof Terminal) {
            this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
            this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
          }
        } else {
          _super.prototype.walkAtLeastOneSep.call(this, atleastOneSepProd, currRest, prevRest);
        }
      };
      return NextTerminalAfterAtLeastOneSepWalker2;
    }(AbstractNextTerminalAfterProductionWalker);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js
function getProdType(prod) {
  if (prod instanceof Option) {
    return PROD_TYPE.OPTION;
  } else if (prod instanceof Repetition) {
    return PROD_TYPE.REPETITION;
  } else if (prod instanceof RepetitionMandatory) {
    return PROD_TYPE.REPETITION_MANDATORY;
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
  } else if (prod instanceof RepetitionWithSeparator) {
    return PROD_TYPE.REPETITION_WITH_SEPARATOR;
  } else if (prod instanceof Alternation) {
    return PROD_TYPE.ALTERNATION;
  } else {
    throw Error("non exhaustive match");
  }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
  var lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
  var tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
}
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
  var lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
  var tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return lookaheadBuilder(lookAheadPaths[0], tokenMatcher2, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
  var numOfAlts = alts.length;
  var areAllOneTokenLookahead = every(alts, function(currAlt) {
    return every(currAlt, function(currPath) {
      return currPath.length === 1;
    });
  });
  if (hasPredicates) {
    return function(orAlts) {
      var predicates = map(orAlts, function(currAlt2) {
        return currAlt2.GATE;
      });
      for (var t = 0; t < numOfAlts; t++) {
        var currAlt = alts[t];
        var currNumOfPaths = currAlt.length;
        var currPredicate = predicates[t];
        if (currPredicate !== void 0 && currPredicate.call(this) === false) {
          continue;
        }
        nextPath:
          for (var j = 0; j < currNumOfPaths; j++) {
            var currPath = currAlt[j];
            var currPathLength = currPath.length;
            for (var i = 0; i < currPathLength; i++) {
              var nextToken = this.LA(i + 1);
              if (tokenMatcher2(nextToken, currPath[i]) === false) {
                continue nextPath;
              }
            }
            return t;
          }
      }
      return void 0;
    };
  } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    var singleTokenAlts = map(alts, function(currAlt) {
      return flatten(currAlt);
    });
    var choiceToAlt_1 = reduce(singleTokenAlts, function(result, currAlt, idx) {
      forEach(currAlt, function(currTokType) {
        if (!has(result, currTokType.tokenTypeIdx)) {
          result[currTokType.tokenTypeIdx] = idx;
        }
        forEach(currTokType.categoryMatches, function(currExtendingType) {
          if (!has(result, currExtendingType)) {
            result[currExtendingType] = idx;
          }
        });
      });
      return result;
    }, []);
    return function() {
      var nextToken = this.LA(1);
      return choiceToAlt_1[nextToken.tokenTypeIdx];
    };
  } else {
    return function() {
      for (var t = 0; t < numOfAlts; t++) {
        var currAlt = alts[t];
        var currNumOfPaths = currAlt.length;
        nextPath:
          for (var j = 0; j < currNumOfPaths; j++) {
            var currPath = currAlt[j];
            var currPathLength = currPath.length;
            for (var i = 0; i < currPathLength; i++) {
              var nextToken = this.LA(i + 1);
              if (tokenMatcher2(nextToken, currPath[i]) === false) {
                continue nextPath;
              }
            }
            return t;
          }
      }
      return void 0;
    };
  }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled) {
  var areAllOneTokenLookahead = every(alt, function(currPath) {
    return currPath.length === 1;
  });
  var numOfPaths = alt.length;
  if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    var singleTokensTypes = flatten(alt);
    if (singleTokensTypes.length === 1 && isEmpty(singleTokensTypes[0].categoryMatches)) {
      var expectedTokenType = singleTokensTypes[0];
      var expectedTokenUniqueKey_1 = expectedTokenType.tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey_1;
      };
    } else {
      var choiceToAlt_2 = reduce(singleTokensTypes, function(result, currTokType, idx) {
        result[currTokType.tokenTypeIdx] = true;
        forEach(currTokType.categoryMatches, function(currExtendingType) {
          result[currExtendingType] = true;
        });
        return result;
      }, []);
      return function() {
        var nextToken = this.LA(1);
        return choiceToAlt_2[nextToken.tokenTypeIdx] === true;
      };
    }
  } else {
    return function() {
      nextPath:
        for (var j = 0; j < numOfPaths; j++) {
          var currPath = alt[j];
          var currPathLength = currPath.length;
          for (var i = 0; i < currPathLength; i++) {
            var nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return true;
        }
      return false;
    };
  }
}
function initializeArrayOfArrays(size) {
  var result = new Array(size);
  for (var i = 0; i < size; i++) {
    result[i] = [];
  }
  return result;
}
function pathToHashKeys(path) {
  var keys2 = [""];
  for (var i = 0; i < path.length; i++) {
    var tokType = path[i];
    var longerKeys = [];
    for (var j = 0; j < keys2.length; j++) {
      var currShorterKey = keys2[j];
      longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
      for (var t = 0; t < tokType.categoryMatches.length; t++) {
        var categoriesKeySuffix = "_" + tokType.categoryMatches[t];
        longerKeys.push(currShorterKey + categoriesKeySuffix);
      }
    }
    keys2 = longerKeys;
  }
  return keys2;
}
function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
  for (var currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
    if (currAltIdx === idx) {
      continue;
    }
    var otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
    for (var searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
      var searchKey = searchPathKeys[searchIdx];
      if (otherAltKnownPathsKeys[searchKey] === true) {
        return false;
      }
    }
  }
  return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
  var partialAlts = map(altsDefs, function(currAlt) {
    return possiblePathsFrom([currAlt], 1);
  });
  var finalResult = initializeArrayOfArrays(partialAlts.length);
  var altsHashes = map(partialAlts, function(currAltPaths) {
    var dict = {};
    forEach(currAltPaths, function(item) {
      var keys2 = pathToHashKeys(item.partialPath);
      forEach(keys2, function(currKey) {
        dict[currKey] = true;
      });
    });
    return dict;
  });
  var newData = partialAlts;
  for (var pathLength = 1; pathLength <= k; pathLength++) {
    var currDataset = newData;
    newData = initializeArrayOfArrays(currDataset.length);
    var _loop_1 = function(altIdx2) {
      var currAltPathsAndSuffixes = currDataset[altIdx2];
      for (var currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
        var currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
        var suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
        var prefixKeys = pathToHashKeys(currPathPrefix);
        var isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx2);
        if (isUnique || isEmpty(suffixDef) || currPathPrefix.length === k) {
          var currAltResult = finalResult[altIdx2];
          if (containsPath(currAltResult, currPathPrefix) === false) {
            currAltResult.push(currPathPrefix);
            for (var j = 0; j < prefixKeys.length; j++) {
              var currKey = prefixKeys[j];
              altsHashes[altIdx2][currKey] = true;
            }
          }
        } else {
          var newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
          newData[altIdx2] = newData[altIdx2].concat(newPartialPathsAndSuffixes);
          forEach(newPartialPathsAndSuffixes, function(item) {
            var prefixKeys2 = pathToHashKeys(item.partialPath);
            forEach(prefixKeys2, function(key) {
              altsHashes[altIdx2][key] = true;
            });
          });
        }
      }
    };
    for (var altIdx = 0; altIdx < currDataset.length; altIdx++) {
      _loop_1(altIdx);
    }
  }
  return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
  var visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
  ruleGrammar.accept(visitor);
  return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
  var insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
  ruleGrammar.accept(insideDefVisitor);
  var insideDef = insideDefVisitor.result;
  var afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
  var afterDef = afterDefWalker.startWalking();
  var insideFlat = new Alternative({ definition: insideDef });
  var afterFlat = new Alternative({ definition: afterDef });
  return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, searchPath) {
  compareOtherPath:
    for (var i = 0; i < alternative.length; i++) {
      var otherPath = alternative[i];
      if (otherPath.length !== searchPath.length) {
        continue;
      }
      for (var j = 0; j < otherPath.length; j++) {
        var searchTok = searchPath[j];
        var otherTok = otherPath[j];
        var matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
        if (matchingTokens === false) {
          continue compareOtherPath;
        }
      }
      return true;
    }
  return false;
}
function isStrictPrefixOfPath(prefix, other) {
  return prefix.length < other.length && every(prefix, function(tokType, idx) {
    var otherTokType = other[idx];
    return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
  });
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
  return every(lookAheadPaths, function(singleAltPaths) {
    return every(singleAltPaths, function(singlePath) {
      return every(singlePath, function(token) {
        return isEmpty(token.categoryMatches);
      });
    });
  });
}
var __extends8, PROD_TYPE, RestDefinitionFinderWalker, InsideDefinitionFinderVisitor;
var init_lookahead = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js"() {
    "use strict";
    init_utils();
    init_interpreter();
    init_rest();
    init_tokens();
    init_gast_public();
    init_gast_visitor_public();
    __extends8 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    (function(PROD_TYPE2) {
      PROD_TYPE2[PROD_TYPE2["OPTION"] = 0] = "OPTION";
      PROD_TYPE2[PROD_TYPE2["REPETITION"] = 1] = "REPETITION";
      PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
      PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
      PROD_TYPE2[PROD_TYPE2["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
      PROD_TYPE2[PROD_TYPE2["ALTERNATION"] = 5] = "ALTERNATION";
    })(PROD_TYPE || (PROD_TYPE = {}));
    RestDefinitionFinderWalker = /** @class */
    function(_super) {
      __extends8(RestDefinitionFinderWalker2, _super);
      function RestDefinitionFinderWalker2(topProd, targetOccurrence, targetProdType) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.targetOccurrence = targetOccurrence;
        _this.targetProdType = targetProdType;
        return _this;
      }
      RestDefinitionFinderWalker2.prototype.startWalking = function() {
        this.walk(this.topProd);
        return this.restDef;
      };
      RestDefinitionFinderWalker2.prototype.checkIsTarget = function(node, expectedProdType, currRest, prevRest) {
        if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
          this.restDef = currRest.concat(prevRest);
          return true;
        }
        return false;
      };
      RestDefinitionFinderWalker2.prototype.walkOption = function(optionProd, currRest, prevRest) {
        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
          _super.prototype.walkOption.call(this, optionProd, currRest, prevRest);
        }
      };
      RestDefinitionFinderWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
          _super.prototype.walkOption.call(this, atLeastOneProd, currRest, prevRest);
        }
      };
      RestDefinitionFinderWalker2.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
          _super.prototype.walkOption.call(this, atLeastOneSepProd, currRest, prevRest);
        }
      };
      RestDefinitionFinderWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
          _super.prototype.walkOption.call(this, manyProd, currRest, prevRest);
        }
      };
      RestDefinitionFinderWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
          _super.prototype.walkOption.call(this, manySepProd, currRest, prevRest);
        }
      };
      return RestDefinitionFinderWalker2;
    }(RestWalker);
    InsideDefinitionFinderVisitor = /** @class */
    function(_super) {
      __extends8(InsideDefinitionFinderVisitor2, _super);
      function InsideDefinitionFinderVisitor2(targetOccurrence, targetProdType, targetRef) {
        var _this = _super.call(this) || this;
        _this.targetOccurrence = targetOccurrence;
        _this.targetProdType = targetProdType;
        _this.targetRef = targetRef;
        _this.result = [];
        return _this;
      }
      InsideDefinitionFinderVisitor2.prototype.checkIsTarget = function(node, expectedProdName) {
        if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef)) {
          this.result = node.definition;
        }
      };
      InsideDefinitionFinderVisitor2.prototype.visitOption = function(node) {
        this.checkIsTarget(node, PROD_TYPE.OPTION);
      };
      InsideDefinitionFinderVisitor2.prototype.visitRepetition = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION);
      };
      InsideDefinitionFinderVisitor2.prototype.visitRepetitionMandatory = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
      };
      InsideDefinitionFinderVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
      };
      InsideDefinitionFinderVisitor2.prototype.visitRepetitionWithSeparator = function(node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
      };
      InsideDefinitionFinderVisitor2.prototype.visitAlternation = function(node) {
        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
      };
      return InsideDefinitionFinderVisitor2;
    }(GAstVisitor);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js
function validateGrammar(topLevels, globalMaxLookahead, tokenTypes, errMsgProvider, grammarName) {
  var duplicateErrors = map(topLevels, function(currTopLevel) {
    return validateDuplicateProductions(currTopLevel, errMsgProvider);
  });
  var leftRecursionErrors = map(topLevels, function(currTopRule) {
    return validateNoLeftRecursion(currTopRule, currTopRule, errMsgProvider);
  });
  var emptyAltErrors = [];
  var ambiguousAltsErrors = [];
  var emptyRepetitionErrors = [];
  if (every(leftRecursionErrors, isEmpty)) {
    emptyAltErrors = map(topLevels, function(currTopRule) {
      return validateEmptyOrAlternative(currTopRule, errMsgProvider);
    });
    ambiguousAltsErrors = map(topLevels, function(currTopRule) {
      return validateAmbiguousAlternationAlternatives(currTopRule, globalMaxLookahead, errMsgProvider);
    });
    emptyRepetitionErrors = validateSomeNonEmptyLookaheadPath(topLevels, globalMaxLookahead, errMsgProvider);
  }
  var termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
  var tooManyAltsErrors = map(topLevels, function(curRule) {
    return validateTooManyAlts(curRule, errMsgProvider);
  });
  var duplicateRulesError = map(topLevels, function(curRule) {
    return validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider);
  });
  return flatten(duplicateErrors.concat(emptyRepetitionErrors, leftRecursionErrors, emptyAltErrors, ambiguousAltsErrors, termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError));
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
  var collectorVisitor2 = new OccurrenceValidationCollector();
  topLevelRule.accept(collectorVisitor2);
  var allRuleProductions = collectorVisitor2.allProductions;
  var productionGroups = groupBy(allRuleProductions, identifyProductionForDuplicates);
  var duplicates = pick(productionGroups, function(currGroup) {
    return currGroup.length > 1;
  });
  var errors = map(values(duplicates), function(currDuplicates) {
    var firstProd = first(currDuplicates);
    var msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
    var dslName = getProductionDslName(firstProd);
    var defError = {
      message: msg,
      type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
      ruleName: topLevelRule.name,
      dslName,
      occurrence: firstProd.idx
    };
    var param = getExtraProductionArgument(firstProd);
    if (param) {
      defError.parameter = param;
    }
    return defError;
  });
  return errors;
}
function identifyProductionForDuplicates(prod) {
  return getProductionDslName(prod) + "_#_" + prod.idx + "_#_" + getExtraProductionArgument(prod);
}
function getExtraProductionArgument(prod) {
  if (prod instanceof Terminal) {
    return prod.terminalType.name;
  } else if (prod instanceof NonTerminal) {
    return prod.nonTerminalName;
  } else {
    return "";
  }
}
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
  var errors = [];
  var occurrences = reduce(allRules, function(result, curRule) {
    if (curRule.name === rule.name) {
      return result + 1;
    }
    return result;
  }, 0);
  if (occurrences > 1) {
    var errMsg = errMsgProvider.buildDuplicateRuleNameError({
      topLevelRule: rule,
      grammarName: className
    });
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
      ruleName: rule.name
    });
  }
  return errors;
}
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
  var errors = [];
  var errMsg;
  if (!contains(definedRulesNames, ruleName)) {
    errMsg = "Invalid rule override, rule: ->" + ruleName + "<- cannot be overridden in the grammar: ->" + className + "<-as it is not defined in any of the super grammars ";
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
      ruleName
    });
  }
  return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path) {
  if (path === void 0) {
    path = [];
  }
  var errors = [];
  var nextNonTerminals = getFirstNoneTerminal(currRule.definition);
  if (isEmpty(nextNonTerminals)) {
    return [];
  } else {
    var ruleName = topRule.name;
    var foundLeftRecursion = contains(nextNonTerminals, topRule);
    if (foundLeftRecursion) {
      errors.push({
        message: errMsgProvider.buildLeftRecursionError({
          topLevelRule: topRule,
          leftRecursionPath: path
        }),
        type: ParserDefinitionErrorType.LEFT_RECURSION,
        ruleName
      });
    }
    var validNextSteps = difference(nextNonTerminals, path.concat([topRule]));
    var errorsFromNextSteps = map(validNextSteps, function(currRefRule) {
      var newPath = cloneArr(path);
      newPath.push(currRefRule);
      return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
    });
    return errors.concat(flatten(errorsFromNextSteps));
  }
}
function getFirstNoneTerminal(definition) {
  var result = [];
  if (isEmpty(definition)) {
    return result;
  }
  var firstProd = first(definition);
  if (firstProd instanceof NonTerminal) {
    result.push(firstProd.referencedRule);
  } else if (firstProd instanceof Alternative || firstProd instanceof Option || firstProd instanceof RepetitionMandatory || firstProd instanceof RepetitionMandatoryWithSeparator || firstProd instanceof RepetitionWithSeparator || firstProd instanceof Repetition) {
    result = result.concat(getFirstNoneTerminal(firstProd.definition));
  } else if (firstProd instanceof Alternation) {
    result = flatten(map(firstProd.definition, function(currSubDef) {
      return getFirstNoneTerminal(currSubDef.definition);
    }));
  } else if (firstProd instanceof Terminal) {
  } else {
    throw Error("non exhaustive match");
  }
  var isFirstOptional = isOptionalProd(firstProd);
  var hasMore = definition.length > 1;
  if (isFirstOptional && hasMore) {
    var rest = drop(definition);
    return result.concat(getFirstNoneTerminal(rest));
  } else {
    return result;
  }
}
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
  var orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  var ors = orCollector.alternations;
  var errors = reduce(ors, function(errors2, currOr) {
    var exceptLast = dropRight(currOr.definition);
    var currErrors = map(exceptLast, function(currAlternative, currAltIdx) {
      var possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], null, 1);
      if (isEmpty(possibleFirstInAlt)) {
        return {
          message: errMsgProvider.buildEmptyAlternationError({
            topLevelRule,
            alternation: currOr,
            emptyChoiceIdx: currAltIdx
          }),
          type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
          ruleName: topLevelRule.name,
          occurrence: currOr.idx,
          alternative: currAltIdx + 1
        };
      } else {
        return null;
      }
    });
    return errors2.concat(compact(currErrors));
  }, []);
  return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
  var orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  var ors = orCollector.alternations;
  ors = reject(ors, function(currOr) {
    return currOr.ignoreAmbiguities === true;
  });
  var errors = reduce(ors, function(result, currOr) {
    var currOccurrence = currOr.idx;
    var actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
    var alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
    var altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    var altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    return result.concat(altsAmbiguityErrors, altsPrefixAmbiguityErrors);
  }, []);
  return errors;
}
function validateTooManyAlts(topLevelRule, errMsgProvider) {
  var orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  var ors = orCollector.alternations;
  var errors = reduce(ors, function(errors2, currOr) {
    if (currOr.definition.length > 255) {
      errors2.push({
        message: errMsgProvider.buildTooManyAlternativesError({
          topLevelRule,
          alternation: currOr
        }),
        type: ParserDefinitionErrorType.TOO_MANY_ALTS,
        ruleName: topLevelRule.name,
        occurrence: currOr.idx
      });
    }
    return errors2;
  }, []);
  return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
  var errors = [];
  forEach(topLevelRules, function(currTopRule) {
    var collectorVisitor2 = new RepetionCollector();
    currTopRule.accept(collectorVisitor2);
    var allRuleProductions = collectorVisitor2.allProductions;
    forEach(allRuleProductions, function(currProd) {
      var prodType = getProdType(currProd);
      var actualMaxLookahead = currProd.maxLookahead || maxLookahead;
      var currOccurrence = currProd.idx;
      var paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead);
      var pathsInsideProduction = paths[0];
      if (isEmpty(flatten(pathsInsideProduction))) {
        var errMsg = errMsgProvider.buildEmptyRepetitionError({
          topLevelRule: currTopRule,
          repetition: currProd
        });
        errors.push({
          message: errMsg,
          type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: currTopRule.name
        });
      }
    });
  });
  return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
  var foundAmbiguousPaths = [];
  var identicalAmbiguities = reduce(alternatives, function(result, currAlt, currAltIdx) {
    if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
      return result;
    }
    forEach(currAlt, function(currPath) {
      var altsCurrPathAppearsIn = [currAltIdx];
      forEach(alternatives, function(currOtherAlt, currOtherAltIdx) {
        if (currAltIdx !== currOtherAltIdx && containsPath(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
        alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
          altsCurrPathAppearsIn.push(currOtherAltIdx);
        }
      });
      if (altsCurrPathAppearsIn.length > 1 && !containsPath(foundAmbiguousPaths, currPath)) {
        foundAmbiguousPaths.push(currPath);
        result.push({
          alts: altsCurrPathAppearsIn,
          path: currPath
        });
      }
    });
    return result;
  }, []);
  var currErrors = map(identicalAmbiguities, function(currAmbDescriptor) {
    var ambgIndices = map(currAmbDescriptor.alts, function(currAltIdx) {
      return currAltIdx + 1;
    });
    var currMessage = errMsgProvider.buildAlternationAmbiguityError({
      topLevelRule: rule,
      alternation,
      ambiguityIndices: ambgIndices,
      prefixPath: currAmbDescriptor.path
    });
    return {
      message: currMessage,
      type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
      ruleName: rule.name,
      occurrence: alternation.idx,
      alternatives: [currAmbDescriptor.alts]
    };
  });
  return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
  var errors = [];
  var pathsAndIndices = reduce(alternatives, function(result, currAlt, idx) {
    var currPathsAndIdx = map(currAlt, function(currPath) {
      return { idx, path: currPath };
    });
    return result.concat(currPathsAndIdx);
  }, []);
  forEach(pathsAndIndices, function(currPathAndIdx) {
    var alternativeGast = alternation.definition[currPathAndIdx.idx];
    if (alternativeGast.ignoreAmbiguities === true) {
      return;
    }
    var targetIdx = currPathAndIdx.idx;
    var targetPath = currPathAndIdx.path;
    var prefixAmbiguitiesPathsAndIndices = findAll(pathsAndIndices, function(searchPathAndIdx) {
      return (
        // ignore (skip) ambiguities with this "other" alternative
        alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
        // will be be detected using a different validation.
        isStrictPrefixOfPath(searchPathAndIdx.path, targetPath)
      );
    });
    var currPathPrefixErrors = map(prefixAmbiguitiesPathsAndIndices, function(currAmbPathAndIdx) {
      var ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
      var occurrence = alternation.idx === 0 ? "" : alternation.idx;
      var message = errMsgProvider.buildAlternationPrefixAmbiguityError({
        topLevelRule: rule,
        alternation,
        ambiguityIndices: ambgIndices,
        prefixPath: currAmbPathAndIdx.path
      });
      return {
        message,
        type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
        ruleName: rule.name,
        occurrence,
        alternatives: ambgIndices
      };
    });
    errors = errors.concat(currPathPrefixErrors);
  });
  return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
  var errors = [];
  var tokenNames = map(tokenTypes, function(currToken) {
    return currToken.name;
  });
  forEach(topLevels, function(currRule) {
    var currRuleName = currRule.name;
    if (contains(tokenNames, currRuleName)) {
      var errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
      errors.push({
        message: errMsg,
        type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: currRuleName
      });
    }
  });
  return errors;
}
var __extends9, OccurrenceValidationCollector, OrCollector, RepetionCollector;
var init_checks = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js"() {
    "use strict";
    init_utils();
    init_utils();
    init_parser();
    init_gast();
    init_lookahead();
    init_interpreter();
    init_gast_public();
    init_gast_visitor_public();
    __extends9 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    OccurrenceValidationCollector = /** @class */
    function(_super) {
      __extends9(OccurrenceValidationCollector2, _super);
      function OccurrenceValidationCollector2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProductions = [];
        return _this;
      }
      OccurrenceValidationCollector2.prototype.visitNonTerminal = function(subrule) {
        this.allProductions.push(subrule);
      };
      OccurrenceValidationCollector2.prototype.visitOption = function(option) {
        this.allProductions.push(option);
      };
      OccurrenceValidationCollector2.prototype.visitRepetitionWithSeparator = function(manySep) {
        this.allProductions.push(manySep);
      };
      OccurrenceValidationCollector2.prototype.visitRepetitionMandatory = function(atLeastOne) {
        this.allProductions.push(atLeastOne);
      };
      OccurrenceValidationCollector2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
      };
      OccurrenceValidationCollector2.prototype.visitRepetition = function(many) {
        this.allProductions.push(many);
      };
      OccurrenceValidationCollector2.prototype.visitAlternation = function(or) {
        this.allProductions.push(or);
      };
      OccurrenceValidationCollector2.prototype.visitTerminal = function(terminal) {
        this.allProductions.push(terminal);
      };
      return OccurrenceValidationCollector2;
    }(GAstVisitor);
    OrCollector = /** @class */
    function(_super) {
      __extends9(OrCollector2, _super);
      function OrCollector2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alternations = [];
        return _this;
      }
      OrCollector2.prototype.visitAlternation = function(node) {
        this.alternations.push(node);
      };
      return OrCollector2;
    }(GAstVisitor);
    RepetionCollector = /** @class */
    function(_super) {
      __extends9(RepetionCollector2, _super);
      function RepetionCollector2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProductions = [];
        return _this;
      }
      RepetionCollector2.prototype.visitRepetitionWithSeparator = function(manySep) {
        this.allProductions.push(manySep);
      };
      RepetionCollector2.prototype.visitRepetitionMandatory = function(atLeastOne) {
        this.allProductions.push(atLeastOne);
      };
      RepetionCollector2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
      };
      RepetionCollector2.prototype.visitRepetition = function(many) {
        this.allProductions.push(many);
      };
      return RepetionCollector2;
    }(GAstVisitor);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_resolver_public.js
function resolveGrammar2(options) {
  options = defaults(options, {
    errMsgProvider: defaultGrammarResolverErrorProvider
  });
  var topRulesTable = {};
  forEach(options.rules, function(rule) {
    topRulesTable[rule.name] = rule;
  });
  return resolveGrammar(topRulesTable, options.errMsgProvider);
}
function validateGrammar2(options) {
  options = defaults(options, {
    errMsgProvider: defaultGrammarValidatorErrorProvider
  });
  return validateGrammar(options.rules, options.maxLookahead, options.tokenTypes, options.errMsgProvider, options.grammarName);
}
function assignOccurrenceIndices(options) {
  forEach(options.rules, function(currRule) {
    var methodsCollector = new DslMethodsCollectorVisitor();
    currRule.accept(methodsCollector);
    forEach(methodsCollector.dslMethods, function(methods) {
      forEach(methods, function(currMethod, arrIdx) {
        currMethod.idx = arrIdx + 1;
      });
    });
  });
}
var init_gast_resolver_public = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_resolver_public.js"() {
    "use strict";
    init_utils();
    init_resolver();
    init_checks();
    init_errors_public();
    init_gast();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js
function isRecognitionException(error) {
  return contains(RECOGNITION_EXCEPTION_NAMES, error.name);
}
var __extends10, MISMATCHED_TOKEN_EXCEPTION, NO_VIABLE_ALT_EXCEPTION, EARLY_EXIT_EXCEPTION, NOT_ALL_INPUT_PARSED_EXCEPTION, RECOGNITION_EXCEPTION_NAMES, RecognitionException, MismatchedTokenException, NoViableAltException, NotAllInputParsedException, EarlyExitException;
var init_exceptions_public = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js"() {
    "use strict";
    init_utils();
    __extends10 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
    NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
    EARLY_EXIT_EXCEPTION = "EarlyExitException";
    NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
    RECOGNITION_EXCEPTION_NAMES = [
      MISMATCHED_TOKEN_EXCEPTION,
      NO_VIABLE_ALT_EXCEPTION,
      EARLY_EXIT_EXCEPTION,
      NOT_ALL_INPUT_PARSED_EXCEPTION
    ];
    Object.freeze(RECOGNITION_EXCEPTION_NAMES);
    RecognitionException = /** @class */
    function(_super) {
      __extends10(RecognitionException2, _super);
      function RecognitionException2(message, token) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.token = token;
        _this.resyncedTokens = [];
        Object.setPrototypeOf(_this, _newTarget.prototype);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
      }
      return RecognitionException2;
    }(Error);
    MismatchedTokenException = /** @class */
    function(_super) {
      __extends10(MismatchedTokenException2, _super);
      function MismatchedTokenException2(message, token, previousToken) {
        var _this = _super.call(this, message, token) || this;
        _this.previousToken = previousToken;
        _this.name = MISMATCHED_TOKEN_EXCEPTION;
        return _this;
      }
      return MismatchedTokenException2;
    }(RecognitionException);
    NoViableAltException = /** @class */
    function(_super) {
      __extends10(NoViableAltException2, _super);
      function NoViableAltException2(message, token, previousToken) {
        var _this = _super.call(this, message, token) || this;
        _this.previousToken = previousToken;
        _this.name = NO_VIABLE_ALT_EXCEPTION;
        return _this;
      }
      return NoViableAltException2;
    }(RecognitionException);
    NotAllInputParsedException = /** @class */
    function(_super) {
      __extends10(NotAllInputParsedException2, _super);
      function NotAllInputParsedException2(message, token) {
        var _this = _super.call(this, message, token) || this;
        _this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
        return _this;
      }
      return NotAllInputParsedException2;
    }(RecognitionException);
    EarlyExitException = /** @class */
    function(_super) {
      __extends10(EarlyExitException2, _super);
      function EarlyExitException2(message, token, previousToken) {
        var _this = _super.call(this, message, token) || this;
        _this.previousToken = previousToken;
        _this.name = EARLY_EXIT_EXCEPTION;
        return _this;
      }
      return EarlyExitException2;
    }(RecognitionException);
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/recoverable.js
function InRuleRecoveryException(message) {
  this.name = IN_RULE_RECOVERY_EXCEPTION;
  this.message = message;
}
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  var key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
  var firstAfterRepInfo = this.firstAfterRepMap[key];
  if (firstAfterRepInfo === void 0) {
    var currRuleName = this.getCurrRuleFullName();
    var ruleGrammar = this.getGAstProductions()[currRuleName];
    var walker = new nextToksWalker(ruleGrammar, prodOccurrence);
    firstAfterRepInfo = walker.startWalking();
    this.firstAfterRepMap[key] = firstAfterRepInfo;
  }
  var expectTokAfterLastMatch = firstAfterRepInfo.token;
  var nextTokIdx = firstAfterRepInfo.occurrence;
  var isEndOfRule = firstAfterRepInfo.isEndOfRule;
  if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === void 0) {
    expectTokAfterLastMatch = EOF;
    nextTokIdx = 1;
  }
  if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
    this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
  }
}
var EOF_FOLLOW_KEY, IN_RULE_RECOVERY_EXCEPTION, Recoverable;
var init_recoverable = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/recoverable.js"() {
    "use strict";
    init_tokens_public();
    init_utils();
    init_exceptions_public();
    init_constants();
    init_parser();
    EOF_FOLLOW_KEY = {};
    IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
    InRuleRecoveryException.prototype = Error.prototype;
    Recoverable = /** @class */
    function() {
      function Recoverable2() {
      }
      Recoverable2.prototype.initRecoverable = function(config) {
        this.firstAfterRepMap = {};
        this.resyncFollows = {};
        this.recoveryEnabled = has(config, "recoveryEnabled") ? config.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled;
        if (this.recoveryEnabled) {
          this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
        }
      };
      Recoverable2.prototype.getTokenToInsert = function(tokType) {
        var tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
        tokToInsert.isInsertedInRecovery = true;
        return tokToInsert;
      };
      Recoverable2.prototype.canTokenTypeBeInsertedInRecovery = function(tokType) {
        return true;
      };
      Recoverable2.prototype.tryInRepetitionRecovery = function(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
        var _this = this;
        var reSyncTokType = this.findReSyncTokenType();
        var savedLexerState = this.exportLexerState();
        var resyncedTokens = [];
        var passedResyncPoint = false;
        var nextTokenWithoutResync = this.LA(1);
        var currToken = this.LA(1);
        var generateErrorMessage = function() {
          var previousToken = _this.LA(0);
          var msg = _this.errorMessageProvider.buildMismatchTokenMessage({
            expected: expectedTokType,
            actual: nextTokenWithoutResync,
            previous: previousToken,
            ruleName: _this.getCurrRuleFullName()
          });
          var error = new MismatchedTokenException(msg, nextTokenWithoutResync, _this.LA(0));
          error.resyncedTokens = dropRight(resyncedTokens);
          _this.SAVE_ERROR(error);
        };
        while (!passedResyncPoint) {
          if (this.tokenMatcher(currToken, expectedTokType)) {
            generateErrorMessage();
            return;
          } else if (lookAheadFunc.call(this)) {
            generateErrorMessage();
            grammarRule.apply(this, grammarRuleArgs);
            return;
          } else if (this.tokenMatcher(currToken, reSyncTokType)) {
            passedResyncPoint = true;
          } else {
            currToken = this.SKIP_TOKEN();
            this.addToResyncTokens(currToken, resyncedTokens);
          }
        }
        this.importLexerState(savedLexerState);
      };
      Recoverable2.prototype.shouldInRepetitionRecoveryBeTried = function(expectTokAfterLastMatch, nextTokIdx, notStuck) {
        if (notStuck === false) {
          return false;
        }
        if (expectTokAfterLastMatch === void 0 || nextTokIdx === void 0) {
          return false;
        }
        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
          return false;
        }
        if (this.isBackTracking()) {
          return false;
        }
        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
          return false;
        }
        return true;
      };
      Recoverable2.prototype.getFollowsForInRuleRecovery = function(tokType, tokIdxInRule) {
        var grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
        var follows = this.getNextPossibleTokenTypes(grammarPath);
        return follows;
      };
      Recoverable2.prototype.tryInRuleRecovery = function(expectedTokType, follows) {
        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
          var tokToInsert = this.getTokenToInsert(expectedTokType);
          return tokToInsert;
        }
        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
          var nextTok = this.SKIP_TOKEN();
          this.consumeToken();
          return nextTok;
        }
        throw new InRuleRecoveryException("sad sad panda");
      };
      Recoverable2.prototype.canPerformInRuleRecovery = function(expectedToken, follows) {
        return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
      };
      Recoverable2.prototype.canRecoverWithSingleTokenInsertion = function(expectedTokType, follows) {
        var _this = this;
        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
          return false;
        }
        if (isEmpty(follows)) {
          return false;
        }
        var mismatchedTok = this.LA(1);
        var isMisMatchedTokInFollows = find(follows, function(possibleFollowsTokType) {
          return _this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
        }) !== void 0;
        return isMisMatchedTokInFollows;
      };
      Recoverable2.prototype.canRecoverWithSingleTokenDeletion = function(expectedTokType) {
        var isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
        return isNextTokenWhatIsExpected;
      };
      Recoverable2.prototype.isInCurrentRuleReSyncSet = function(tokenTypeIdx) {
        var followKey = this.getCurrFollowKey();
        var currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
        return contains(currentRuleReSyncSet, tokenTypeIdx);
      };
      Recoverable2.prototype.findReSyncTokenType = function() {
        var allPossibleReSyncTokTypes = this.flattenFollowSet();
        var nextToken = this.LA(1);
        var k = 2;
        while (true) {
          var nextTokenType = nextToken.tokenType;
          if (contains(allPossibleReSyncTokTypes, nextTokenType)) {
            return nextTokenType;
          }
          nextToken = this.LA(k);
          k++;
        }
      };
      Recoverable2.prototype.getCurrFollowKey = function() {
        if (this.RULE_STACK.length === 1) {
          return EOF_FOLLOW_KEY;
        }
        var currRuleShortName = this.getLastExplicitRuleShortName();
        var currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
        var prevRuleShortName = this.getPreviousExplicitRuleShortName();
        return {
          ruleName: this.shortRuleNameToFullName(currRuleShortName),
          idxInCallingRule: currRuleIdx,
          inRule: this.shortRuleNameToFullName(prevRuleShortName)
        };
      };
      Recoverable2.prototype.buildFullFollowKeyStack = function() {
        var _this = this;
        var explicitRuleStack = this.RULE_STACK;
        var explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
        return map(explicitRuleStack, function(ruleName, idx) {
          if (idx === 0) {
            return EOF_FOLLOW_KEY;
          }
          return {
            ruleName: _this.shortRuleNameToFullName(ruleName),
            idxInCallingRule: explicitOccurrenceStack[idx],
            inRule: _this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
          };
        });
      };
      Recoverable2.prototype.flattenFollowSet = function() {
        var _this = this;
        var followStack = map(this.buildFullFollowKeyStack(), function(currKey) {
          return _this.getFollowSetFromFollowKey(currKey);
        });
        return flatten(followStack);
      };
      Recoverable2.prototype.getFollowSetFromFollowKey = function(followKey) {
        if (followKey === EOF_FOLLOW_KEY) {
          return [EOF];
        }
        var followName = followKey.ruleName + followKey.idxInCallingRule + IN + followKey.inRule;
        return this.resyncFollows[followName];
      };
      Recoverable2.prototype.addToResyncTokens = function(token, resyncTokens) {
        if (!this.tokenMatcher(token, EOF)) {
          resyncTokens.push(token);
        }
        return resyncTokens;
      };
      Recoverable2.prototype.reSyncTo = function(tokType) {
        var resyncedTokens = [];
        var nextTok = this.LA(1);
        while (this.tokenMatcher(nextTok, tokType) === false) {
          nextTok = this.SKIP_TOKEN();
          this.addToResyncTokens(nextTok, resyncedTokens);
        }
        return dropRight(resyncedTokens);
      };
      Recoverable2.prototype.attemptInRepetitionRecovery = function(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
      };
      Recoverable2.prototype.getCurrentGrammarPath = function(tokType, tokIdxInRule) {
        var pathRuleStack = this.getHumanReadableRuleStack();
        var pathOccurrenceStack = cloneArr(this.RULE_OCCURRENCE_STACK);
        var grammarPath = {
          ruleStack: pathRuleStack,
          occurrenceStack: pathOccurrenceStack,
          lastTok: tokType,
          lastTokOccurrence: tokIdxInRule
        };
        return grammarPath;
      };
      Recoverable2.prototype.getHumanReadableRuleStack = function() {
        var _this = this;
        return map(this.RULE_STACK, function(currShortName) {
          return _this.shortRuleNameToFullName(currShortName);
        });
      };
      return Recoverable2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
  return occurrence | dslMethodIdx | ruleIdx;
}
var BITS_FOR_METHOD_TYPE, BITS_FOR_OCCURRENCE_IDX, BITS_FOR_ALT_IDX, OR_IDX, OPTION_IDX, MANY_IDX, AT_LEAST_ONE_IDX, MANY_SEP_IDX, AT_LEAST_ONE_SEP_IDX, BITS_START_FOR_ALT_IDX;
var init_keys = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js"() {
    "use strict";
    BITS_FOR_METHOD_TYPE = 4;
    BITS_FOR_OCCURRENCE_IDX = 8;
    BITS_FOR_ALT_IDX = 8;
    OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
    OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
    MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
    AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
    MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
    AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
    BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/looksahead.js
var LooksAhead;
var init_looksahead = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/looksahead.js"() {
    "use strict";
    init_lookahead();
    init_utils();
    init_parser();
    init_keys();
    init_gast();
    LooksAhead = /** @class */
    function() {
      function LooksAhead2() {
      }
      LooksAhead2.prototype.initLooksAhead = function(config) {
        this.dynamicTokensEnabled = has(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
        this.maxLookahead = has(config, "maxLookahead") ? config.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead;
        this.lookAheadFuncsCache = isES2015MapSupported() ? /* @__PURE__ */ new Map() : [];
        if (isES2015MapSupported()) {
          this.getLaFuncFromCache = this.getLaFuncFromMap;
          this.setLaFuncCache = this.setLaFuncCacheUsingMap;
        } else {
          this.getLaFuncFromCache = this.getLaFuncFromObj;
          this.setLaFuncCache = this.setLaFuncUsingObj;
        }
      };
      LooksAhead2.prototype.preComputeLookaheadFunctions = function(rules) {
        var _this = this;
        forEach(rules, function(currRule) {
          _this.TRACE_INIT(currRule.name + " Rule Lookahead", function() {
            var _a = collectMethods(currRule), alternation = _a.alternation, repetition = _a.repetition, option = _a.option, repetitionMandatory = _a.repetitionMandatory, repetitionMandatoryWithSeparator = _a.repetitionMandatoryWithSeparator, repetitionWithSeparator = _a.repetitionWithSeparator;
            forEach(alternation, function(currProd) {
              var prodIdx = currProd.idx === 0 ? "" : currProd.idx;
              _this.TRACE_INIT("" + getProductionDslName(currProd) + prodIdx, function() {
                var laFunc = buildLookaheadFuncForOr(currProd.idx, currRule, currProd.maxLookahead || _this.maxLookahead, currProd.hasPredicates, _this.dynamicTokensEnabled, _this.lookAheadBuilderForAlternatives);
                var key = getKeyForAutomaticLookahead(_this.fullRuleNameToShort[currRule.name], OR_IDX, currProd.idx);
                _this.setLaFuncCache(key, laFunc);
              });
            });
            forEach(repetition, function(currProd) {
              _this.computeLookaheadFunc(currRule, currProd.idx, MANY_IDX, PROD_TYPE.REPETITION, currProd.maxLookahead, getProductionDslName(currProd));
            });
            forEach(option, function(currProd) {
              _this.computeLookaheadFunc(currRule, currProd.idx, OPTION_IDX, PROD_TYPE.OPTION, currProd.maxLookahead, getProductionDslName(currProd));
            });
            forEach(repetitionMandatory, function(currProd) {
              _this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_IDX, PROD_TYPE.REPETITION_MANDATORY, currProd.maxLookahead, getProductionDslName(currProd));
            });
            forEach(repetitionMandatoryWithSeparator, function(currProd) {
              _this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_SEP_IDX, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currProd.maxLookahead, getProductionDslName(currProd));
            });
            forEach(repetitionWithSeparator, function(currProd) {
              _this.computeLookaheadFunc(currRule, currProd.idx, MANY_SEP_IDX, PROD_TYPE.REPETITION_WITH_SEPARATOR, currProd.maxLookahead, getProductionDslName(currProd));
            });
          });
        });
      };
      LooksAhead2.prototype.computeLookaheadFunc = function(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
        var _this = this;
        this.TRACE_INIT("" + dslMethodName + (prodOccurrence === 0 ? "" : prodOccurrence), function() {
          var laFunc = buildLookaheadFuncForOptionalProd(prodOccurrence, rule, prodMaxLookahead || _this.maxLookahead, _this.dynamicTokensEnabled, prodType, _this.lookAheadBuilderForOptional);
          var key = getKeyForAutomaticLookahead(_this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
          _this.setLaFuncCache(key, laFunc);
        });
      };
      LooksAhead2.prototype.lookAheadBuilderForOptional = function(alt, tokenMatcher2, dynamicTokensEnabled) {
        return buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled);
      };
      LooksAhead2.prototype.lookAheadBuilderForAlternatives = function(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
        return buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
      };
      LooksAhead2.prototype.getKeyForAutomaticLookahead = function(dslMethodIdx, occurrence) {
        var currRuleShortName = this.getLastExplicitRuleShortName();
        return getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
      };
      LooksAhead2.prototype.getLaFuncFromCache = function(key) {
        return void 0;
      };
      LooksAhead2.prototype.getLaFuncFromMap = function(key) {
        return this.lookAheadFuncsCache.get(key);
      };
      LooksAhead2.prototype.getLaFuncFromObj = function(key) {
        return this.lookAheadFuncsCache[key];
      };
      LooksAhead2.prototype.setLaFuncCache = function(key, value) {
      };
      LooksAhead2.prototype.setLaFuncCacheUsingMap = function(key, value) {
        this.lookAheadFuncsCache.set(key, value);
      };
      LooksAhead2.prototype.setLaFuncUsingObj = function(key, value) {
        this.lookAheadFuncsCache[key] = value;
      };
      return LooksAhead2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/cst/cst.js
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  }
}
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.startColumn = newLocationInfo.startColumn;
    currNodeLocation.startLine = newLocationInfo.startLine;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  }
}
function addTerminalToCst(node, token, tokenTypeName) {
  if (node.children[tokenTypeName] === void 0) {
    node.children[tokenTypeName] = [token];
  } else {
    node.children[tokenTypeName].push(token);
  }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
  if (node.children[ruleName] === void 0) {
    node.children[ruleName] = [ruleResult];
  } else {
    node.children[ruleName].push(ruleResult);
  }
}
var init_cst = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/cst/cst.js"() {
    "use strict";
  }
});

// node_modules/chevrotain/lib_esm/src/lang/lang_extensions.js
function classNameFromInstance(instance) {
  return functionName(instance.constructor);
}
function functionName(func) {
  var existingNameProp = func.name;
  if (existingNameProp) {
    return existingNameProp;
  } else {
    return "anonymous";
  }
}
function defineNameProp(obj, nameValue) {
  var namePropDescriptor = Object.getOwnPropertyDescriptor(obj, NAME);
  if (isUndefined(namePropDescriptor) || namePropDescriptor.configurable) {
    Object.defineProperty(obj, NAME, {
      enumerable: false,
      configurable: true,
      writable: false,
      value: nameValue
    });
    return true;
  }
  return false;
}
var NAME;
var init_lang_extensions = __esm({
  "node_modules/chevrotain/lib_esm/src/lang/lang_extensions.js"() {
    "use strict";
    init_utils();
    NAME = "name";
  }
});

// node_modules/chevrotain/lib_esm/src/parse/cst/cst_visitor.js
function defaultVisit(ctx, param) {
  var childrenNames = keys(ctx);
  var childrenNamesLength = childrenNames.length;
  for (var i = 0; i < childrenNamesLength; i++) {
    var currChildName = childrenNames[i];
    var currChildArray = ctx[currChildName];
    var currChildArrayLength = currChildArray.length;
    for (var j = 0; j < currChildArrayLength; j++) {
      var currChild = currChildArray[j];
      if (currChild.tokenTypeIdx === void 0) {
        this[currChild.name](currChild.children, param);
      }
    }
  }
  return void 0;
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
  var derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
  var semanticProto = {
    visit: function(cstNode, param) {
      if (isArray(cstNode)) {
        cstNode = cstNode[0];
      }
      if (isUndefined(cstNode)) {
        return void 0;
      }
      return this[cstNode.name](cstNode.children, param);
    },
    validateVisitor: function() {
      var semanticDefinitionErrors = validateVisitor(this, ruleNames);
      if (!isEmpty(semanticDefinitionErrors)) {
        var errorMessages = map(semanticDefinitionErrors, function(currDefError) {
          return currDefError.msg;
        });
        throw Error("Errors Detected in CST Visitor <" + functionName(this.constructor) + ">:\n	" + ("" + errorMessages.join("\n\n").replace(/\n/g, "\n	")));
      }
    }
  };
  derivedConstructor.prototype = semanticProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  derivedConstructor._RULE_NAMES = ruleNames;
  return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
  var derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
  var withDefaultsProto = Object.create(baseConstructor.prototype);
  forEach(ruleNames, function(ruleName) {
    withDefaultsProto[ruleName] = defaultVisit;
  });
  derivedConstructor.prototype = withDefaultsProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  return derivedConstructor;
}
function validateVisitor(visitorInstance, ruleNames) {
  var missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
  var redundantErrors = validateRedundantMethods(visitorInstance, ruleNames);
  return missingErrors.concat(redundantErrors);
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
  var errors = map(ruleNames, function(currRuleName) {
    if (!isFunction(visitorInstance[currRuleName])) {
      return {
        msg: "Missing visitor method: <" + currRuleName + "> on " + functionName(visitorInstance.constructor) + " CST Visitor.",
        type: CstVisitorDefinitionError.MISSING_METHOD,
        methodName: currRuleName
      };
    }
  });
  return compact(errors);
}
function validateRedundantMethods(visitorInstance, ruleNames) {
  var errors = [];
  for (var prop in visitorInstance) {
    if (isFunction(visitorInstance[prop]) && !contains(VALID_PROP_NAMES, prop) && !contains(ruleNames, prop)) {
      errors.push({
        msg: "Redundant visitor method: <" + prop + "> on " + functionName(visitorInstance.constructor) + " CST Visitor\nThere is no Grammar Rule corresponding to this method's name.\n",
        type: CstVisitorDefinitionError.REDUNDANT_METHOD,
        methodName: prop
      });
    }
  }
  return errors;
}
var CstVisitorDefinitionError, VALID_PROP_NAMES;
var init_cst_visitor = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/cst/cst_visitor.js"() {
    "use strict";
    init_utils();
    init_lang_extensions();
    (function(CstVisitorDefinitionError2) {
      CstVisitorDefinitionError2[CstVisitorDefinitionError2["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
      CstVisitorDefinitionError2[CstVisitorDefinitionError2["MISSING_METHOD"] = 1] = "MISSING_METHOD";
    })(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
    VALID_PROP_NAMES = ["constructor", "visit", "validateVisitor"];
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/tree_builder.js
var TreeBuilder;
var init_tree_builder = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/tree_builder.js"() {
    "use strict";
    init_cst();
    init_utils();
    init_cst_visitor();
    init_parser();
    TreeBuilder = /** @class */
    function() {
      function TreeBuilder2() {
      }
      TreeBuilder2.prototype.initTreeBuilder = function(config) {
        this.CST_STACK = [];
        this.outputCst = config.outputCst;
        this.nodeLocationTracking = has(config, "nodeLocationTracking") ? config.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
        if (!this.outputCst) {
          this.cstInvocationStateUpdate = NOOP;
          this.cstFinallyStateUpdate = NOOP;
          this.cstPostTerminal = NOOP;
          this.cstPostNonTerminal = NOOP;
          this.cstPostRule = NOOP;
        } else {
          if (/full/i.test(this.nodeLocationTracking)) {
            if (this.recoveryEnabled) {
              this.setNodeLocationFromToken = setNodeLocationFull;
              this.setNodeLocationFromNode = setNodeLocationFull;
              this.cstPostRule = NOOP;
              this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
            } else {
              this.setNodeLocationFromToken = NOOP;
              this.setNodeLocationFromNode = NOOP;
              this.cstPostRule = this.cstPostRuleFull;
              this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
            }
          } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
            if (this.recoveryEnabled) {
              this.setNodeLocationFromToken = setNodeLocationOnlyOffset;
              this.setNodeLocationFromNode = setNodeLocationOnlyOffset;
              this.cstPostRule = NOOP;
              this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
            } else {
              this.setNodeLocationFromToken = NOOP;
              this.setNodeLocationFromNode = NOOP;
              this.cstPostRule = this.cstPostRuleOnlyOffset;
              this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
            }
          } else if (/none/i.test(this.nodeLocationTracking)) {
            this.setNodeLocationFromToken = NOOP;
            this.setNodeLocationFromNode = NOOP;
            this.cstPostRule = NOOP;
            this.setInitialNodeLocation = NOOP;
          } else {
            throw Error('Invalid <nodeLocationTracking> config option: "' + config.nodeLocationTracking + '"');
          }
        }
      };
      TreeBuilder2.prototype.setInitialNodeLocationOnlyOffsetRecovery = function(cstNode) {
        cstNode.location = {
          startOffset: NaN,
          endOffset: NaN
        };
      };
      TreeBuilder2.prototype.setInitialNodeLocationOnlyOffsetRegular = function(cstNode) {
        cstNode.location = {
          // without error recovery the starting Location of a new CstNode is guaranteed
          // To be the next Token's startOffset (for valid inputs).
          // For invalid inputs there won't be any CSTOutput so this potential
          // inaccuracy does not matter
          startOffset: this.LA(1).startOffset,
          endOffset: NaN
        };
      };
      TreeBuilder2.prototype.setInitialNodeLocationFullRecovery = function(cstNode) {
        cstNode.location = {
          startOffset: NaN,
          startLine: NaN,
          startColumn: NaN,
          endOffset: NaN,
          endLine: NaN,
          endColumn: NaN
        };
      };
      TreeBuilder2.prototype.setInitialNodeLocationFullRegular = function(cstNode) {
        var nextToken = this.LA(1);
        cstNode.location = {
          startOffset: nextToken.startOffset,
          startLine: nextToken.startLine,
          startColumn: nextToken.startColumn,
          endOffset: NaN,
          endLine: NaN,
          endColumn: NaN
        };
      };
      TreeBuilder2.prototype.cstInvocationStateUpdate = function(fullRuleName, shortName) {
        var cstNode = {
          name: fullRuleName,
          children: {}
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
      };
      TreeBuilder2.prototype.cstFinallyStateUpdate = function() {
        this.CST_STACK.pop();
      };
      TreeBuilder2.prototype.cstPostRuleFull = function(ruleCstNode) {
        var prevToken = this.LA(0);
        var loc = ruleCstNode.location;
        if (loc.startOffset <= prevToken.startOffset === true) {
          loc.endOffset = prevToken.endOffset;
          loc.endLine = prevToken.endLine;
          loc.endColumn = prevToken.endColumn;
        } else {
          loc.startOffset = NaN;
          loc.startLine = NaN;
          loc.startColumn = NaN;
        }
      };
      TreeBuilder2.prototype.cstPostRuleOnlyOffset = function(ruleCstNode) {
        var prevToken = this.LA(0);
        var loc = ruleCstNode.location;
        if (loc.startOffset <= prevToken.startOffset === true) {
          loc.endOffset = prevToken.endOffset;
        } else {
          loc.startOffset = NaN;
        }
      };
      TreeBuilder2.prototype.cstPostTerminal = function(key, consumedToken) {
        var rootCst = this.CST_STACK[this.CST_STACK.length - 1];
        addTerminalToCst(rootCst, consumedToken, key);
        this.setNodeLocationFromToken(rootCst.location, consumedToken);
      };
      TreeBuilder2.prototype.cstPostNonTerminal = function(ruleCstResult, ruleName) {
        var preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
        addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult);
        this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
      };
      TreeBuilder2.prototype.getBaseCstVisitorConstructor = function() {
        if (isUndefined(this.baseCstVisitorConstructor)) {
          var newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, keys(this.gastProductionsCache));
          this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
          return newBaseCstVisitorConstructor;
        }
        return this.baseCstVisitorConstructor;
      };
      TreeBuilder2.prototype.getBaseCstVisitorConstructorWithDefaults = function() {
        if (isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {
          var newConstructor = createBaseVisitorConstructorWithDefaults(this.className, keys(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
          this.baseCstVisitorWithDefaultsConstructor = newConstructor;
          return newConstructor;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
      };
      TreeBuilder2.prototype.getLastExplicitRuleShortName = function() {
        var ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 1];
      };
      TreeBuilder2.prototype.getPreviousExplicitRuleShortName = function() {
        var ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 2];
      };
      TreeBuilder2.prototype.getLastExplicitRuleOccurrenceIndex = function() {
        var occurrenceStack = this.RULE_OCCURRENCE_STACK;
        return occurrenceStack[occurrenceStack.length - 1];
      };
      return TreeBuilder2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/lexer_adapter.js
var LexerAdapter;
var init_lexer_adapter = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/lexer_adapter.js"() {
    "use strict";
    init_parser();
    LexerAdapter = /** @class */
    function() {
      function LexerAdapter2() {
      }
      LexerAdapter2.prototype.initLexerAdapter = function() {
        this.tokVector = [];
        this.tokVectorLength = 0;
        this.currIdx = -1;
      };
      Object.defineProperty(LexerAdapter2.prototype, "input", {
        get: function() {
          return this.tokVector;
        },
        set: function(newInput) {
          if (this.selfAnalysisDone !== true) {
            throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
          }
          this.reset();
          this.tokVector = newInput;
          this.tokVectorLength = newInput.length;
        },
        enumerable: false,
        configurable: true
      });
      LexerAdapter2.prototype.SKIP_TOKEN = function() {
        if (this.currIdx <= this.tokVector.length - 2) {
          this.consumeToken();
          return this.LA(1);
        } else {
          return END_OF_FILE;
        }
      };
      LexerAdapter2.prototype.LA = function(howMuch) {
        var soughtIdx = this.currIdx + howMuch;
        if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
          return END_OF_FILE;
        } else {
          return this.tokVector[soughtIdx];
        }
      };
      LexerAdapter2.prototype.consumeToken = function() {
        this.currIdx++;
      };
      LexerAdapter2.prototype.exportLexerState = function() {
        return this.currIdx;
      };
      LexerAdapter2.prototype.importLexerState = function(newState) {
        this.currIdx = newState;
      };
      LexerAdapter2.prototype.resetLexerState = function() {
        this.currIdx = -1;
      };
      LexerAdapter2.prototype.moveToTerminatedState = function() {
        this.currIdx = this.tokVector.length - 1;
      };
      LexerAdapter2.prototype.getLexerPosition = function() {
        return this.exportLexerState();
      };
      return LexerAdapter2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_api.js
var RecognizerApi;
var init_recognizer_api = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_api.js"() {
    "use strict";
    init_utils();
    init_exceptions_public();
    init_parser();
    init_errors_public();
    init_checks();
    init_gast_public();
    RecognizerApi = /** @class */
    function() {
      function RecognizerApi2() {
      }
      RecognizerApi2.prototype.ACTION = function(impl) {
        return impl.call(this);
      };
      RecognizerApi2.prototype.consume = function(idx, tokType, options) {
        return this.consumeInternal(tokType, idx, options);
      };
      RecognizerApi2.prototype.subrule = function(idx, ruleToCall, options) {
        return this.subruleInternal(ruleToCall, idx, options);
      };
      RecognizerApi2.prototype.option = function(idx, actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, idx);
      };
      RecognizerApi2.prototype.or = function(idx, altsOrOpts) {
        return this.orInternal(altsOrOpts, idx);
      };
      RecognizerApi2.prototype.many = function(idx, actionORMethodDef) {
        return this.manyInternal(idx, actionORMethodDef);
      };
      RecognizerApi2.prototype.atLeastOne = function(idx, actionORMethodDef) {
        return this.atLeastOneInternal(idx, actionORMethodDef);
      };
      RecognizerApi2.prototype.CONSUME = function(tokType, options) {
        return this.consumeInternal(tokType, 0, options);
      };
      RecognizerApi2.prototype.CONSUME1 = function(tokType, options) {
        return this.consumeInternal(tokType, 1, options);
      };
      RecognizerApi2.prototype.CONSUME2 = function(tokType, options) {
        return this.consumeInternal(tokType, 2, options);
      };
      RecognizerApi2.prototype.CONSUME3 = function(tokType, options) {
        return this.consumeInternal(tokType, 3, options);
      };
      RecognizerApi2.prototype.CONSUME4 = function(tokType, options) {
        return this.consumeInternal(tokType, 4, options);
      };
      RecognizerApi2.prototype.CONSUME5 = function(tokType, options) {
        return this.consumeInternal(tokType, 5, options);
      };
      RecognizerApi2.prototype.CONSUME6 = function(tokType, options) {
        return this.consumeInternal(tokType, 6, options);
      };
      RecognizerApi2.prototype.CONSUME7 = function(tokType, options) {
        return this.consumeInternal(tokType, 7, options);
      };
      RecognizerApi2.prototype.CONSUME8 = function(tokType, options) {
        return this.consumeInternal(tokType, 8, options);
      };
      RecognizerApi2.prototype.CONSUME9 = function(tokType, options) {
        return this.consumeInternal(tokType, 9, options);
      };
      RecognizerApi2.prototype.SUBRULE = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 0, options);
      };
      RecognizerApi2.prototype.SUBRULE1 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 1, options);
      };
      RecognizerApi2.prototype.SUBRULE2 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 2, options);
      };
      RecognizerApi2.prototype.SUBRULE3 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 3, options);
      };
      RecognizerApi2.prototype.SUBRULE4 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 4, options);
      };
      RecognizerApi2.prototype.SUBRULE5 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 5, options);
      };
      RecognizerApi2.prototype.SUBRULE6 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 6, options);
      };
      RecognizerApi2.prototype.SUBRULE7 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 7, options);
      };
      RecognizerApi2.prototype.SUBRULE8 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 8, options);
      };
      RecognizerApi2.prototype.SUBRULE9 = function(ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 9, options);
      };
      RecognizerApi2.prototype.OPTION = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 0);
      };
      RecognizerApi2.prototype.OPTION1 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 1);
      };
      RecognizerApi2.prototype.OPTION2 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 2);
      };
      RecognizerApi2.prototype.OPTION3 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 3);
      };
      RecognizerApi2.prototype.OPTION4 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 4);
      };
      RecognizerApi2.prototype.OPTION5 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 5);
      };
      RecognizerApi2.prototype.OPTION6 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 6);
      };
      RecognizerApi2.prototype.OPTION7 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 7);
      };
      RecognizerApi2.prototype.OPTION8 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 8);
      };
      RecognizerApi2.prototype.OPTION9 = function(actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 9);
      };
      RecognizerApi2.prototype.OR = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 0);
      };
      RecognizerApi2.prototype.OR1 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 1);
      };
      RecognizerApi2.prototype.OR2 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 2);
      };
      RecognizerApi2.prototype.OR3 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 3);
      };
      RecognizerApi2.prototype.OR4 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 4);
      };
      RecognizerApi2.prototype.OR5 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 5);
      };
      RecognizerApi2.prototype.OR6 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 6);
      };
      RecognizerApi2.prototype.OR7 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 7);
      };
      RecognizerApi2.prototype.OR8 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 8);
      };
      RecognizerApi2.prototype.OR9 = function(altsOrOpts) {
        return this.orInternal(altsOrOpts, 9);
      };
      RecognizerApi2.prototype.MANY = function(actionORMethodDef) {
        this.manyInternal(0, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY1 = function(actionORMethodDef) {
        this.manyInternal(1, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY2 = function(actionORMethodDef) {
        this.manyInternal(2, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY3 = function(actionORMethodDef) {
        this.manyInternal(3, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY4 = function(actionORMethodDef) {
        this.manyInternal(4, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY5 = function(actionORMethodDef) {
        this.manyInternal(5, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY6 = function(actionORMethodDef) {
        this.manyInternal(6, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY7 = function(actionORMethodDef) {
        this.manyInternal(7, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY8 = function(actionORMethodDef) {
        this.manyInternal(8, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY9 = function(actionORMethodDef) {
        this.manyInternal(9, actionORMethodDef);
      };
      RecognizerApi2.prototype.MANY_SEP = function(options) {
        this.manySepFirstInternal(0, options);
      };
      RecognizerApi2.prototype.MANY_SEP1 = function(options) {
        this.manySepFirstInternal(1, options);
      };
      RecognizerApi2.prototype.MANY_SEP2 = function(options) {
        this.manySepFirstInternal(2, options);
      };
      RecognizerApi2.prototype.MANY_SEP3 = function(options) {
        this.manySepFirstInternal(3, options);
      };
      RecognizerApi2.prototype.MANY_SEP4 = function(options) {
        this.manySepFirstInternal(4, options);
      };
      RecognizerApi2.prototype.MANY_SEP5 = function(options) {
        this.manySepFirstInternal(5, options);
      };
      RecognizerApi2.prototype.MANY_SEP6 = function(options) {
        this.manySepFirstInternal(6, options);
      };
      RecognizerApi2.prototype.MANY_SEP7 = function(options) {
        this.manySepFirstInternal(7, options);
      };
      RecognizerApi2.prototype.MANY_SEP8 = function(options) {
        this.manySepFirstInternal(8, options);
      };
      RecognizerApi2.prototype.MANY_SEP9 = function(options) {
        this.manySepFirstInternal(9, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE = function(actionORMethodDef) {
        this.atLeastOneInternal(0, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE1 = function(actionORMethodDef) {
        return this.atLeastOneInternal(1, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE2 = function(actionORMethodDef) {
        this.atLeastOneInternal(2, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE3 = function(actionORMethodDef) {
        this.atLeastOneInternal(3, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE4 = function(actionORMethodDef) {
        this.atLeastOneInternal(4, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE5 = function(actionORMethodDef) {
        this.atLeastOneInternal(5, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE6 = function(actionORMethodDef) {
        this.atLeastOneInternal(6, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE7 = function(actionORMethodDef) {
        this.atLeastOneInternal(7, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE8 = function(actionORMethodDef) {
        this.atLeastOneInternal(8, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE9 = function(actionORMethodDef) {
        this.atLeastOneInternal(9, actionORMethodDef);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP = function(options) {
        this.atLeastOneSepFirstInternal(0, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP1 = function(options) {
        this.atLeastOneSepFirstInternal(1, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP2 = function(options) {
        this.atLeastOneSepFirstInternal(2, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP3 = function(options) {
        this.atLeastOneSepFirstInternal(3, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP4 = function(options) {
        this.atLeastOneSepFirstInternal(4, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP5 = function(options) {
        this.atLeastOneSepFirstInternal(5, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP6 = function(options) {
        this.atLeastOneSepFirstInternal(6, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP7 = function(options) {
        this.atLeastOneSepFirstInternal(7, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP8 = function(options) {
        this.atLeastOneSepFirstInternal(8, options);
      };
      RecognizerApi2.prototype.AT_LEAST_ONE_SEP9 = function(options) {
        this.atLeastOneSepFirstInternal(9, options);
      };
      RecognizerApi2.prototype.RULE = function(name, implementation, config) {
        if (config === void 0) {
          config = DEFAULT_RULE_CONFIG;
        }
        if (contains(this.definedRulesNames, name)) {
          var errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
            topLevelRule: name,
            grammarName: this.className
          });
          var error = {
            message: errMsg,
            type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
            ruleName: name
          };
          this.definitionErrors.push(error);
        }
        this.definedRulesNames.push(name);
        var ruleImplementation = this.defineRule(name, implementation, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
      };
      RecognizerApi2.prototype.OVERRIDE_RULE = function(name, impl, config) {
        if (config === void 0) {
          config = DEFAULT_RULE_CONFIG;
        }
        var ruleErrors = [];
        ruleErrors = ruleErrors.concat(validateRuleIsOverridden(name, this.definedRulesNames, this.className));
        this.definitionErrors.push.apply(this.definitionErrors, ruleErrors);
        var ruleImplementation = this.defineRule(name, impl, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
      };
      RecognizerApi2.prototype.BACKTRACK = function(grammarRule, args) {
        return function() {
          this.isBackTrackingStack.push(1);
          var orgState = this.saveRecogState();
          try {
            grammarRule.apply(this, args);
            return true;
          } catch (e) {
            if (isRecognitionException(e)) {
              return false;
            } else {
              throw e;
            }
          } finally {
            this.reloadRecogState(orgState);
            this.isBackTrackingStack.pop();
          }
        };
      };
      RecognizerApi2.prototype.getGAstProductions = function() {
        return this.gastProductionsCache;
      };
      RecognizerApi2.prototype.getSerializedGastProductions = function() {
        return serializeGrammar(values(this.gastProductionsCache));
      };
      return RecognizerApi2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_engine.js
var RecognizerEngine;
var init_recognizer_engine = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_engine.js"() {
    "use strict";
    init_utils();
    init_keys();
    init_exceptions_public();
    init_lookahead();
    init_interpreter();
    init_parser();
    init_recoverable();
    init_tokens_public();
    init_tokens();
    init_lang_extensions();
    RecognizerEngine = /** @class */
    function() {
      function RecognizerEngine2() {
      }
      RecognizerEngine2.prototype.initRecognizerEngine = function(tokenVocabulary, config) {
        this.className = classNameFromInstance(this);
        this.shortRuleNameToFull = {};
        this.fullRuleNameToShort = {};
        this.ruleShortNameIdx = 256;
        this.tokenMatcher = tokenStructuredMatcherNoCategories;
        this.definedRulesNames = [];
        this.tokensMap = {};
        this.isBackTrackingStack = [];
        this.RULE_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
        this.gastProductionsCache = {};
        if (has(config, "serializedGrammar")) {
          throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
        }
        if (isArray(tokenVocabulary)) {
          if (isEmpty(tokenVocabulary)) {
            throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
          }
          if (typeof tokenVocabulary[0].startOffset === "number") {
            throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
          }
        }
        if (isArray(tokenVocabulary)) {
          this.tokensMap = reduce(tokenVocabulary, function(acc, tokType) {
            acc[tokType.name] = tokType;
            return acc;
          }, {});
        } else if (has(tokenVocabulary, "modes") && every(flatten(values(tokenVocabulary.modes)), isTokenType)) {
          var allTokenTypes = flatten(values(tokenVocabulary.modes));
          var uniqueTokens = uniq(allTokenTypes);
          this.tokensMap = reduce(uniqueTokens, function(acc, tokType) {
            acc[tokType.name] = tokType;
            return acc;
          }, {});
        } else if (isObject(tokenVocabulary)) {
          this.tokensMap = cloneObj(tokenVocabulary);
        } else {
          throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
        }
        this.tokensMap["EOF"] = EOF;
        var noTokenCategoriesUsed = every(values(tokenVocabulary), function(tokenConstructor) {
          return isEmpty(tokenConstructor.categoryMatches);
        });
        this.tokenMatcher = noTokenCategoriesUsed ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
        augmentTokenTypes(values(this.tokensMap));
      };
      RecognizerEngine2.prototype.defineRule = function(ruleName, impl, config) {
        if (this.selfAnalysisDone) {
          throw Error("Grammar rule <" + ruleName + "> may not be defined after the 'performSelfAnalysis' method has been called'\nMake sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");
        }
        var resyncEnabled = has(config, "resyncEnabled") ? config.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled;
        var recoveryValueFunc = has(config, "recoveryValueFunc") ? config.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc;
        var shortName = this.ruleShortNameIdx << BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX;
        this.ruleShortNameIdx++;
        this.shortRuleNameToFull[shortName] = ruleName;
        this.fullRuleNameToShort[ruleName] = shortName;
        function invokeRuleWithTry(args) {
          try {
            if (this.outputCst === true) {
              impl.apply(this, args);
              var cst = this.CST_STACK[this.CST_STACK.length - 1];
              this.cstPostRule(cst);
              return cst;
            } else {
              return impl.apply(this, args);
            }
          } catch (e) {
            return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
          } finally {
            this.ruleFinallyStateUpdate();
          }
        }
        var wrappedGrammarRule;
        wrappedGrammarRule = function(idxInCallingRule, args) {
          if (idxInCallingRule === void 0) {
            idxInCallingRule = 0;
          }
          this.ruleInvocationStateUpdate(shortName, ruleName, idxInCallingRule);
          return invokeRuleWithTry.call(this, args);
        };
        var ruleNamePropName = "ruleName";
        wrappedGrammarRule[ruleNamePropName] = ruleName;
        wrappedGrammarRule["originalGrammarAction"] = impl;
        return wrappedGrammarRule;
      };
      RecognizerEngine2.prototype.invokeRuleCatch = function(e, resyncEnabledConfig, recoveryValueFunc) {
        var isFirstInvokedRule = this.RULE_STACK.length === 1;
        var reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
        if (isRecognitionException(e)) {
          var recogError = e;
          if (reSyncEnabled) {
            var reSyncTokType = this.findReSyncTokenType();
            if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
              recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
              if (this.outputCst) {
                var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                partialCstResult.recoveredNode = true;
                return partialCstResult;
              } else {
                return recoveryValueFunc();
              }
            } else {
              if (this.outputCst) {
                var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                partialCstResult.recoveredNode = true;
                recogError.partialCstResult = partialCstResult;
              }
              throw recogError;
            }
          } else if (isFirstInvokedRule) {
            this.moveToTerminatedState();
            return recoveryValueFunc();
          } else {
            throw recogError;
          }
        } else {
          throw e;
        }
      };
      RecognizerEngine2.prototype.optionInternal = function(actionORMethodDef, occurrence) {
        var key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
        return this.optionInternalLogic(actionORMethodDef, occurrence, key);
      };
      RecognizerEngine2.prototype.optionInternalLogic = function(actionORMethodDef, occurrence, key) {
        var _this = this;
        var lookAheadFunc = this.getLaFuncFromCache(key);
        var action;
        var predicate;
        if (actionORMethodDef.DEF !== void 0) {
          action = actionORMethodDef.DEF;
          predicate = actionORMethodDef.GATE;
          if (predicate !== void 0) {
            var orgLookaheadFunction_1 = lookAheadFunc;
            lookAheadFunc = function() {
              return predicate.call(_this) && orgLookaheadFunction_1.call(_this);
            };
          }
        } else {
          action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
          return action.call(this);
        }
        return void 0;
      };
      RecognizerEngine2.prototype.atLeastOneInternal = function(prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
        return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
      };
      RecognizerEngine2.prototype.atLeastOneInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
        var _this = this;
        var lookAheadFunc = this.getLaFuncFromCache(key);
        var action;
        var predicate;
        if (actionORMethodDef.DEF !== void 0) {
          action = actionORMethodDef.DEF;
          predicate = actionORMethodDef.GATE;
          if (predicate !== void 0) {
            var orgLookaheadFunction_2 = lookAheadFunc;
            lookAheadFunc = function() {
              return predicate.call(_this) && orgLookaheadFunction_2.call(_this);
            };
          }
        } else {
          action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
          var notStuck = this.doSingleRepetition(action);
          while (lookAheadFunc.call(this) === true && notStuck === true) {
            notStuck = this.doSingleRepetition(action);
          }
        } else {
          throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
        }
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, NextTerminalAfterAtLeastOneWalker);
      };
      RecognizerEngine2.prototype.atLeastOneSepFirstInternal = function(prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
      };
      RecognizerEngine2.prototype.atLeastOneSepFirstInternalLogic = function(prodOccurrence, options, key) {
        var _this = this;
        var action = options.DEF;
        var separator = options.SEP;
        var firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
        if (firstIterationLookaheadFunc.call(this) === true) {
          ;
          action.call(this);
          var separatorLookAheadFunc = function() {
            return _this.tokenMatcher(_this.LA(1), separator);
          };
          while (this.tokenMatcher(this.LA(1), separator) === true) {
            this.CONSUME(separator);
            action.call(this);
          }
          this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            NextTerminalAfterAtLeastOneSepWalker
          ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, NextTerminalAfterAtLeastOneSepWalker);
        } else {
          throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
        }
      };
      RecognizerEngine2.prototype.manyInternal = function(prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
      };
      RecognizerEngine2.prototype.manyInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
        var _this = this;
        var lookaheadFunction = this.getLaFuncFromCache(key);
        var action;
        var predicate;
        if (actionORMethodDef.DEF !== void 0) {
          action = actionORMethodDef.DEF;
          predicate = actionORMethodDef.GATE;
          if (predicate !== void 0) {
            var orgLookaheadFunction_3 = lookaheadFunction;
            lookaheadFunction = function() {
              return predicate.call(_this) && orgLookaheadFunction_3.call(_this);
            };
          }
        } else {
          action = actionORMethodDef;
        }
        var notStuck = true;
        while (lookaheadFunction.call(this) === true && notStuck === true) {
          notStuck = this.doSingleRepetition(action);
        }
        this.attemptInRepetitionRecovery(
          this.manyInternal,
          [prodOccurrence, actionORMethodDef],
          lookaheadFunction,
          MANY_IDX,
          prodOccurrence,
          NextTerminalAfterManyWalker,
          // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
          // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
          // An infinite loop cannot occur as:
          // - Either the lookahead is guaranteed to consume something (Single Token Separator)
          // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
          notStuck
        );
      };
      RecognizerEngine2.prototype.manySepFirstInternal = function(prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
      };
      RecognizerEngine2.prototype.manySepFirstInternalLogic = function(prodOccurrence, options, key) {
        var _this = this;
        var action = options.DEF;
        var separator = options.SEP;
        var firstIterationLaFunc = this.getLaFuncFromCache(key);
        if (firstIterationLaFunc.call(this) === true) {
          action.call(this);
          var separatorLookAheadFunc = function() {
            return _this.tokenMatcher(_this.LA(1), separator);
          };
          while (this.tokenMatcher(this.LA(1), separator) === true) {
            this.CONSUME(separator);
            action.call(this);
          }
          this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            NextTerminalAfterManySepWalker
          ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, NextTerminalAfterManySepWalker);
        }
      };
      RecognizerEngine2.prototype.repetitionSepSecondInternal = function(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
        while (separatorLookAheadFunc()) {
          this.CONSUME(separator);
          action.call(this);
        }
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
          prodOccurrence,
          separator,
          separatorLookAheadFunc,
          action,
          nextTerminalAfterWalker
        ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
      };
      RecognizerEngine2.prototype.doSingleRepetition = function(action) {
        var beforeIteration = this.getLexerPosition();
        action.call(this);
        var afterIteration = this.getLexerPosition();
        return afterIteration > beforeIteration;
      };
      RecognizerEngine2.prototype.orInternal = function(altsOrOpts, occurrence) {
        var laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
        var alts = isArray(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
        var laFunc = this.getLaFuncFromCache(laKey);
        var altIdxToTake = laFunc.call(this, alts);
        if (altIdxToTake !== void 0) {
          var chosenAlternative = alts[altIdxToTake];
          return chosenAlternative.ALT.call(this);
        }
        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
      };
      RecognizerEngine2.prototype.ruleFinallyStateUpdate = function() {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        this.cstFinallyStateUpdate();
        if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
          var firstRedundantTok = this.LA(1);
          var errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
            firstRedundant: firstRedundantTok,
            ruleName: this.getCurrRuleFullName()
          });
          this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
        }
      };
      RecognizerEngine2.prototype.subruleInternal = function(ruleToCall, idx, options) {
        var ruleResult;
        try {
          var args = options !== void 0 ? options.ARGS : void 0;
          ruleResult = ruleToCall.call(this, idx, args);
          this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName);
          return ruleResult;
        } catch (e) {
          this.subruleInternalError(e, options, ruleToCall.ruleName);
        }
      };
      RecognizerEngine2.prototype.subruleInternalError = function(e, options, ruleName) {
        if (isRecognitionException(e) && e.partialCstResult !== void 0) {
          this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName);
          delete e.partialCstResult;
        }
        throw e;
      };
      RecognizerEngine2.prototype.consumeInternal = function(tokType, idx, options) {
        var consumedToken;
        try {
          var nextToken = this.LA(1);
          if (this.tokenMatcher(nextToken, tokType) === true) {
            this.consumeToken();
            consumedToken = nextToken;
          } else {
            this.consumeInternalError(tokType, nextToken, options);
          }
        } catch (eFromConsumption) {
          consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
        }
        this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken);
        return consumedToken;
      };
      RecognizerEngine2.prototype.consumeInternalError = function(tokType, nextToken, options) {
        var msg;
        var previousToken = this.LA(0);
        if (options !== void 0 && options.ERR_MSG) {
          msg = options.ERR_MSG;
        } else {
          msg = this.errorMessageProvider.buildMismatchTokenMessage({
            expected: tokType,
            actual: nextToken,
            previous: previousToken,
            ruleName: this.getCurrRuleFullName()
          });
        }
        throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
      };
      RecognizerEngine2.prototype.consumeInternalRecovery = function(tokType, idx, eFromConsumption) {
        if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
        eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
          var follows = this.getFollowsForInRuleRecovery(tokType, idx);
          try {
            return this.tryInRuleRecovery(tokType, follows);
          } catch (eFromInRuleRecovery) {
            if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
              throw eFromConsumption;
            } else {
              throw eFromInRuleRecovery;
            }
          }
        } else {
          throw eFromConsumption;
        }
      };
      RecognizerEngine2.prototype.saveRecogState = function() {
        var savedErrors = this.errors;
        var savedRuleStack = cloneArr(this.RULE_STACK);
        return {
          errors: savedErrors,
          lexerState: this.exportLexerState(),
          RULE_STACK: savedRuleStack,
          CST_STACK: this.CST_STACK
        };
      };
      RecognizerEngine2.prototype.reloadRecogState = function(newState) {
        this.errors = newState.errors;
        this.importLexerState(newState.lexerState);
        this.RULE_STACK = newState.RULE_STACK;
      };
      RecognizerEngine2.prototype.ruleInvocationStateUpdate = function(shortName, fullName, idxInCallingRule) {
        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
        this.RULE_STACK.push(shortName);
        this.cstInvocationStateUpdate(fullName, shortName);
      };
      RecognizerEngine2.prototype.isBackTracking = function() {
        return this.isBackTrackingStack.length !== 0;
      };
      RecognizerEngine2.prototype.getCurrRuleFullName = function() {
        var shortName = this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull[shortName];
      };
      RecognizerEngine2.prototype.shortRuleNameToFullName = function(shortName) {
        return this.shortRuleNameToFull[shortName];
      };
      RecognizerEngine2.prototype.isAtEndOfInput = function() {
        return this.tokenMatcher(this.LA(1), EOF);
      };
      RecognizerEngine2.prototype.reset = function() {
        this.resetLexerState();
        this.isBackTrackingStack = [];
        this.errors = [];
        this.RULE_STACK = [];
        this.CST_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
      };
      return RecognizerEngine2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/error_handler.js
var ErrorHandler;
var init_error_handler = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/error_handler.js"() {
    "use strict";
    init_exceptions_public();
    init_utils();
    init_lookahead();
    init_parser();
    ErrorHandler = /** @class */
    function() {
      function ErrorHandler2() {
      }
      ErrorHandler2.prototype.initErrorHandler = function(config) {
        this._errors = [];
        this.errorMessageProvider = has(config, "errorMessageProvider") ? config.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
      };
      ErrorHandler2.prototype.SAVE_ERROR = function(error) {
        if (isRecognitionException(error)) {
          error.context = {
            ruleStack: this.getHumanReadableRuleStack(),
            ruleOccurrenceStack: cloneArr(this.RULE_OCCURRENCE_STACK)
          };
          this._errors.push(error);
          return error;
        } else {
          throw Error("Trying to save an Error which is not a RecognitionException");
        }
      };
      Object.defineProperty(ErrorHandler2.prototype, "errors", {
        get: function() {
          return cloneArr(this._errors);
        },
        set: function(newErrors) {
          this._errors = newErrors;
        },
        enumerable: false,
        configurable: true
      });
      ErrorHandler2.prototype.raiseEarlyExitException = function(occurrence, prodType, userDefinedErrMsg) {
        var ruleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[ruleName];
        var lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
        var insideProdPaths = lookAheadPathsPerAlternative[0];
        var actualTokens = [];
        for (var i = 1; i <= this.maxLookahead; i++) {
          actualTokens.push(this.LA(i));
        }
        var msg = this.errorMessageProvider.buildEarlyExitMessage({
          expectedIterationPaths: insideProdPaths,
          actual: actualTokens,
          previous: this.LA(0),
          customUserDescription: userDefinedErrMsg,
          ruleName
        });
        throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
      };
      ErrorHandler2.prototype.raiseNoAltException = function(occurrence, errMsgTypes) {
        var ruleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[ruleName];
        var lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
        var actualTokens = [];
        for (var i = 1; i <= this.maxLookahead; i++) {
          actualTokens.push(this.LA(i));
        }
        var previousToken = this.LA(0);
        var errMsg = this.errorMessageProvider.buildNoViableAltMessage({
          expectedPathsPerAlt: lookAheadPathsPerAlternative,
          actual: actualTokens,
          previous: previousToken,
          customUserDescription: errMsgTypes,
          ruleName: this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
      };
      return ErrorHandler2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/context_assist.js
var ContentAssist;
var init_context_assist = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/context_assist.js"() {
    "use strict";
    init_interpreter();
    init_utils();
    ContentAssist = /** @class */
    function() {
      function ContentAssist2() {
      }
      ContentAssist2.prototype.initContentAssist = function() {
      };
      ContentAssist2.prototype.computeContentAssist = function(startRuleName, precedingInput) {
        var startRuleGast = this.gastProductionsCache[startRuleName];
        if (isUndefined(startRuleGast)) {
          throw Error("Rule ->" + startRuleName + "<- does not exist in this grammar.");
        }
        return nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
      };
      ContentAssist2.prototype.getNextPossibleTokenTypes = function(grammarPath) {
        var topRuleName = first(grammarPath.ruleStack);
        var gastProductions = this.getGAstProductions();
        var topProduction = gastProductions[topRuleName];
        var nextPossibleTokenTypes = new NextAfterTokenWalker(topProduction, grammarPath).startWalking();
        return nextPossibleTokenTypes;
      };
      return ContentAssist2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/gast_recorder.js
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep) {
  if (handleSep === void 0) {
    handleSep = false;
  }
  assertMethodIdxIsValid(occurrence);
  var prevProd = peek(this.recordingProdStack);
  var grammarAction = isFunction(mainProdArg) ? mainProdArg : mainProdArg.DEF;
  var newProd = new prodConstructor({ definition: [], idx: occurrence });
  if (handleSep) {
    newProd.separator = mainProdArg.SEP;
  }
  if (has(mainProdArg, "MAX_LOOKAHEAD")) {
    newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  this.recordingProdStack.push(newProd);
  grammarAction.call(this);
  prevProd.definition.push(newProd);
  this.recordingProdStack.pop();
  return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
  var _this = this;
  assertMethodIdxIsValid(occurrence);
  var prevProd = peek(this.recordingProdStack);
  var hasOptions = isArray(mainProdArg) === false;
  var alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
  var newOrProd = new Alternation({
    definition: [],
    idx: occurrence,
    ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
  });
  if (has(mainProdArg, "MAX_LOOKAHEAD")) {
    newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  var hasPredicates = some(alts, function(currAlt) {
    return isFunction(currAlt.GATE);
  });
  newOrProd.hasPredicates = hasPredicates;
  prevProd.definition.push(newOrProd);
  forEach(alts, function(currAlt) {
    var currAltFlat = new Alternative({ definition: [] });
    newOrProd.definition.push(currAltFlat);
    if (has(currAlt, "IGNORE_AMBIGUITIES")) {
      currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
    } else if (has(currAlt, "GATE")) {
      currAltFlat.ignoreAmbiguities = true;
    }
    _this.recordingProdStack.push(currAltFlat);
    currAlt.ALT.call(_this);
    _this.recordingProdStack.pop();
  });
  return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
  return idx === 0 ? "" : "" + idx;
}
function assertMethodIdxIsValid(idx) {
  if (idx < 0 || idx > MAX_METHOD_IDX) {
    var error = new Error(
      // The stack trace will contain all the needed details
      "Invalid DSL Method idx value: <" + idx + ">\n	" + ("Idx value must be a none negative value smaller than " + (MAX_METHOD_IDX + 1))
    );
    error.KNOWN_RECORDER_ERROR = true;
    throw error;
  }
}
var RECORDING_NULL_OBJECT, HANDLE_SEPARATOR, MAX_METHOD_IDX, RFT, RECORDING_PHASE_TOKEN, RECORDING_PHASE_CSTNODE, GastRecorder;
var init_gast_recorder = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/gast_recorder.js"() {
    "use strict";
    init_utils();
    init_gast_public();
    init_lexer_public();
    init_tokens();
    init_tokens_public();
    init_parser();
    init_keys();
    RECORDING_NULL_OBJECT = {
      description: "This Object indicates the Parser is during Recording Phase"
    };
    Object.freeze(RECORDING_NULL_OBJECT);
    HANDLE_SEPARATOR = true;
    MAX_METHOD_IDX = Math.pow(2, BITS_FOR_OCCURRENCE_IDX) - 1;
    RFT = createToken({ name: "RECORDING_PHASE_TOKEN", pattern: Lexer.NA });
    augmentTokenTypes([RFT]);
    RECORDING_PHASE_TOKEN = createTokenInstance(
      RFT,
      "This IToken indicates the Parser is in Recording Phase\n	See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details",
      // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
      // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    );
    Object.freeze(RECORDING_PHASE_TOKEN);
    RECORDING_PHASE_CSTNODE = {
      name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details",
      children: {}
    };
    GastRecorder = /** @class */
    function() {
      function GastRecorder2() {
      }
      GastRecorder2.prototype.initGastRecorder = function(config) {
        this.recordingProdStack = [];
        this.RECORDING_PHASE = false;
      };
      GastRecorder2.prototype.enableRecording = function() {
        var _this = this;
        this.RECORDING_PHASE = true;
        this.TRACE_INIT("Enable Recording", function() {
          var _loop_1 = function(i2) {
            var idx = i2 > 0 ? i2 : "";
            _this["CONSUME" + idx] = function(arg1, arg2) {
              return this.consumeInternalRecord(arg1, i2, arg2);
            };
            _this["SUBRULE" + idx] = function(arg1, arg2) {
              return this.subruleInternalRecord(arg1, i2, arg2);
            };
            _this["OPTION" + idx] = function(arg1) {
              return this.optionInternalRecord(arg1, i2);
            };
            _this["OR" + idx] = function(arg1) {
              return this.orInternalRecord(arg1, i2);
            };
            _this["MANY" + idx] = function(arg1) {
              this.manyInternalRecord(i2, arg1);
            };
            _this["MANY_SEP" + idx] = function(arg1) {
              this.manySepFirstInternalRecord(i2, arg1);
            };
            _this["AT_LEAST_ONE" + idx] = function(arg1) {
              this.atLeastOneInternalRecord(i2, arg1);
            };
            _this["AT_LEAST_ONE_SEP" + idx] = function(arg1) {
              this.atLeastOneSepFirstInternalRecord(i2, arg1);
            };
          };
          for (var i = 0; i < 10; i++) {
            _loop_1(i);
          }
          _this["consume"] = function(idx, arg1, arg2) {
            return this.consumeInternalRecord(arg1, idx, arg2);
          };
          _this["subrule"] = function(idx, arg1, arg2) {
            return this.subruleInternalRecord(arg1, idx, arg2);
          };
          _this["option"] = function(idx, arg1) {
            return this.optionInternalRecord(arg1, idx);
          };
          _this["or"] = function(idx, arg1) {
            return this.orInternalRecord(arg1, idx);
          };
          _this["many"] = function(idx, arg1) {
            this.manyInternalRecord(idx, arg1);
          };
          _this["atLeastOne"] = function(idx, arg1) {
            this.atLeastOneInternalRecord(idx, arg1);
          };
          _this.ACTION = _this.ACTION_RECORD;
          _this.BACKTRACK = _this.BACKTRACK_RECORD;
          _this.LA = _this.LA_RECORD;
        });
      };
      GastRecorder2.prototype.disableRecording = function() {
        var _this = this;
        this.RECORDING_PHASE = false;
        this.TRACE_INIT("Deleting Recording methods", function() {
          for (var i = 0; i < 10; i++) {
            var idx = i > 0 ? i : "";
            delete _this["CONSUME" + idx];
            delete _this["SUBRULE" + idx];
            delete _this["OPTION" + idx];
            delete _this["OR" + idx];
            delete _this["MANY" + idx];
            delete _this["MANY_SEP" + idx];
            delete _this["AT_LEAST_ONE" + idx];
            delete _this["AT_LEAST_ONE_SEP" + idx];
          }
          delete _this["consume"];
          delete _this["subrule"];
          delete _this["option"];
          delete _this["or"];
          delete _this["many"];
          delete _this["atLeastOne"];
          delete _this.ACTION;
          delete _this.BACKTRACK;
          delete _this.LA;
        });
      };
      GastRecorder2.prototype.ACTION_RECORD = function(impl) {
        return;
      };
      GastRecorder2.prototype.BACKTRACK_RECORD = function(grammarRule, args) {
        return function() {
          return true;
        };
      };
      GastRecorder2.prototype.LA_RECORD = function(howMuch) {
        return END_OF_FILE;
      };
      GastRecorder2.prototype.topLevelRuleRecord = function(name, def) {
        try {
          var newTopLevelRule = new Rule({ definition: [], name });
          newTopLevelRule.name = name;
          this.recordingProdStack.push(newTopLevelRule);
          def.call(this);
          this.recordingProdStack.pop();
          return newTopLevelRule;
        } catch (originalError) {
          if (originalError.KNOWN_RECORDER_ERROR !== true) {
            try {
              originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording';
            } catch (mutabilityError) {
              throw originalError;
            }
          }
          throw originalError;
        }
      };
      GastRecorder2.prototype.optionInternalRecord = function(actionORMethodDef, occurrence) {
        return recordProd.call(this, Option, actionORMethodDef, occurrence);
      };
      GastRecorder2.prototype.atLeastOneInternalRecord = function(occurrence, actionORMethodDef) {
        recordProd.call(this, RepetitionMandatory, actionORMethodDef, occurrence);
      };
      GastRecorder2.prototype.atLeastOneSepFirstInternalRecord = function(occurrence, options) {
        recordProd.call(this, RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
      };
      GastRecorder2.prototype.manyInternalRecord = function(occurrence, actionORMethodDef) {
        recordProd.call(this, Repetition, actionORMethodDef, occurrence);
      };
      GastRecorder2.prototype.manySepFirstInternalRecord = function(occurrence, options) {
        recordProd.call(this, RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
      };
      GastRecorder2.prototype.orInternalRecord = function(altsOrOpts, occurrence) {
        return recordOrProd.call(this, altsOrOpts, occurrence);
      };
      GastRecorder2.prototype.subruleInternalRecord = function(ruleToCall, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!ruleToCall || has(ruleToCall, "ruleName") === false) {
          var error = new Error("<SUBRULE" + getIdxSuffix(occurrence) + "> argument is invalid" + (" expecting a Parser method reference but got: <" + JSON.stringify(ruleToCall) + ">") + ("\n inside top level rule: <" + this.recordingProdStack[0].name + ">"));
          error.KNOWN_RECORDER_ERROR = true;
          throw error;
        }
        var prevProd = peek(this.recordingProdStack);
        var ruleName = ruleToCall["ruleName"];
        var newNoneTerminal = new NonTerminal({
          idx: occurrence,
          nonTerminalName: ruleName,
          // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
          referencedRule: void 0
        });
        prevProd.definition.push(newNoneTerminal);
        return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
      };
      GastRecorder2.prototype.consumeInternalRecord = function(tokType, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!hasShortKeyProperty(tokType)) {
          var error = new Error("<CONSUME" + getIdxSuffix(occurrence) + "> argument is invalid" + (" expecting a TokenType reference but got: <" + JSON.stringify(tokType) + ">") + ("\n inside top level rule: <" + this.recordingProdStack[0].name + ">"));
          error.KNOWN_RECORDER_ERROR = true;
          throw error;
        }
        var prevProd = peek(this.recordingProdStack);
        var newNoneTerminal = new Terminal({
          idx: occurrence,
          terminalType: tokType
        });
        prevProd.definition.push(newNoneTerminal);
        return RECORDING_PHASE_TOKEN;
      };
      return GastRecorder2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/traits/perf_tracer.js
var PerformanceTracer;
var init_perf_tracer = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/traits/perf_tracer.js"() {
    "use strict";
    init_utils();
    init_parser();
    PerformanceTracer = /** @class */
    function() {
      function PerformanceTracer2() {
      }
      PerformanceTracer2.prototype.initPerformanceTracer = function(config) {
        if (has(config, "traceInitPerf")) {
          var userTraceInitPerf = config.traceInitPerf;
          var traceIsNumber = typeof userTraceInitPerf === "number";
          this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
          this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
        } else {
          this.traceInitMaxIdent = 0;
          this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
        }
        this.traceInitIndent = -1;
      };
      PerformanceTracer2.prototype.TRACE_INIT = function(phaseDesc, phaseImpl) {
        if (this.traceInitPerf === true) {
          this.traceInitIndent++;
          var indent4 = new Array(this.traceInitIndent + 1).join("	");
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            console.log(indent4 + "--> <" + phaseDesc + ">");
          }
          var _a = timer(phaseImpl), time = _a.time, value = _a.value;
          var traceMethod = time > 10 ? console.warn : console.log;
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            traceMethod(indent4 + "<-- <" + phaseDesc + "> time: " + time + "ms");
          }
          this.traceInitIndent--;
          return value;
        } else {
          return phaseImpl();
        }
      };
      return PerformanceTracer2;
    }();
  }
});

// node_modules/chevrotain/lib_esm/src/parse/parser/parser.js
function EMPTY_ALT(value) {
  if (value === void 0) {
    value = void 0;
  }
  return function() {
    return value;
  };
}
var __extends11, END_OF_FILE, DEFAULT_PARSER_CONFIG, DEFAULT_RULE_CONFIG, ParserDefinitionErrorType, Parser, CstParser, EmbeddedActionsParser;
var init_parser = __esm({
  "node_modules/chevrotain/lib_esm/src/parse/parser/parser.js"() {
    "use strict";
    init_utils();
    init_follow();
    init_tokens_public();
    init_errors_public();
    init_gast_resolver_public();
    init_recoverable();
    init_looksahead();
    init_tree_builder();
    init_lexer_adapter();
    init_recognizer_api();
    init_recognizer_engine();
    init_error_handler();
    init_context_assist();
    init_gast_recorder();
    init_perf_tracer();
    __extends11 = /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
    Object.freeze(END_OF_FILE);
    DEFAULT_PARSER_CONFIG = Object.freeze({
      recoveryEnabled: false,
      maxLookahead: 3,
      dynamicTokensEnabled: false,
      outputCst: true,
      errorMessageProvider: defaultParserErrorProvider,
      nodeLocationTracking: "none",
      traceInitPerf: false,
      skipValidations: false
    });
    DEFAULT_RULE_CONFIG = Object.freeze({
      recoveryValueFunc: function() {
        return void 0;
      },
      resyncEnabled: true
    });
    (function(ParserDefinitionErrorType2) {
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
      ParserDefinitionErrorType2[ParserDefinitionErrorType2["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
    })(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
    Parser = /** @class */
    function() {
      function Parser3(tokenVocabulary, config) {
        this.definitionErrors = [];
        this.selfAnalysisDone = false;
        var that = this;
        that.initErrorHandler(config);
        that.initLexerAdapter();
        that.initLooksAhead(config);
        that.initRecognizerEngine(tokenVocabulary, config);
        that.initRecoverable(config);
        that.initTreeBuilder(config);
        that.initContentAssist();
        that.initGastRecorder(config);
        that.initPerformanceTracer(config);
        if (has(config, "ignoredIssues")) {
          throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
        }
        this.skipValidations = has(config, "skipValidations") ? config.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
      }
      Parser3.performSelfAnalysis = function(parserInstance) {
        throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
      };
      Parser3.prototype.performSelfAnalysis = function() {
        var _this = this;
        this.TRACE_INIT("performSelfAnalysis", function() {
          var defErrorsMsgs;
          _this.selfAnalysisDone = true;
          var className = _this.className;
          _this.TRACE_INIT("toFastProps", function() {
            toFastProperties(_this);
          });
          _this.TRACE_INIT("Grammar Recording", function() {
            try {
              _this.enableRecording();
              forEach(_this.definedRulesNames, function(currRuleName) {
                var wrappedRule = _this[currRuleName];
                var originalGrammarAction = wrappedRule["originalGrammarAction"];
                var recordedRuleGast = void 0;
                _this.TRACE_INIT(currRuleName + " Rule", function() {
                  recordedRuleGast = _this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                });
                _this.gastProductionsCache[currRuleName] = recordedRuleGast;
              });
            } finally {
              _this.disableRecording();
            }
          });
          var resolverErrors = [];
          _this.TRACE_INIT("Grammar Resolving", function() {
            resolverErrors = resolveGrammar2({
              rules: values(_this.gastProductionsCache)
            });
            _this.definitionErrors.push.apply(_this.definitionErrors, resolverErrors);
          });
          _this.TRACE_INIT("Grammar Validations", function() {
            if (isEmpty(resolverErrors) && _this.skipValidations === false) {
              var validationErrors = validateGrammar2({
                rules: values(_this.gastProductionsCache),
                maxLookahead: _this.maxLookahead,
                tokenTypes: values(_this.tokensMap),
                errMsgProvider: defaultGrammarValidatorErrorProvider,
                grammarName: className
              });
              _this.definitionErrors.push.apply(_this.definitionErrors, validationErrors);
            }
          });
          if (isEmpty(_this.definitionErrors)) {
            if (_this.recoveryEnabled) {
              _this.TRACE_INIT("computeAllProdsFollows", function() {
                var allFollows = computeAllProdsFollows(values(_this.gastProductionsCache));
                _this.resyncFollows = allFollows;
              });
            }
            _this.TRACE_INIT("ComputeLookaheadFunctions", function() {
              _this.preComputeLookaheadFunctions(values(_this.gastProductionsCache));
            });
          }
          if (!Parser3.DEFER_DEFINITION_ERRORS_HANDLING && !isEmpty(_this.definitionErrors)) {
            defErrorsMsgs = map(_this.definitionErrors, function(defError) {
              return defError.message;
            });
            throw new Error("Parser Definition Errors detected:\n " + defErrorsMsgs.join("\n-------------------------------\n"));
          }
        });
      };
      Parser3.DEFER_DEFINITION_ERRORS_HANDLING = false;
      return Parser3;
    }();
    applyMixins(Parser, [
      Recoverable,
      LooksAhead,
      TreeBuilder,
      LexerAdapter,
      RecognizerEngine,
      RecognizerApi,
      ErrorHandler,
      ContentAssist,
      GastRecorder,
      PerformanceTracer
    ]);
    CstParser = /** @class */
    function(_super) {
      __extends11(CstParser2, _super);
      function CstParser2(tokenVocabulary, config) {
        if (config === void 0) {
          config = DEFAULT_PARSER_CONFIG;
        }
        var _this = this;
        var configClone = cloneObj(config);
        configClone.outputCst = true;
        _this = _super.call(this, tokenVocabulary, configClone) || this;
        return _this;
      }
      return CstParser2;
    }(Parser);
    EmbeddedActionsParser = /** @class */
    function(_super) {
      __extends11(EmbeddedActionsParser2, _super);
      function EmbeddedActionsParser2(tokenVocabulary, config) {
        if (config === void 0) {
          config = DEFAULT_PARSER_CONFIG;
        }
        var _this = this;
        var configClone = cloneObj(config);
        configClone.outputCst = false;
        _this = _super.call(this, tokenVocabulary, configClone) || this;
        return _this;
      }
      return EmbeddedActionsParser2;
    }(Parser);
  }
});

// node_modules/chevrotain/lib_esm/src/diagrams/render_public.js
function createSyntaxDiagramsCode(grammar, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.resourceBase, resourceBase = _c === void 0 ? "https://unpkg.com/chevrotain@" + VERSION + "/diagrams/" : _c, _d = _b.css, css = _d === void 0 ? "https://unpkg.com/chevrotain@" + VERSION + "/diagrams/diagrams.css" : _d;
  var header = '\n<!-- This is a generated file -->\n<!DOCTYPE html>\n<meta charset="utf-8">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n';
  var cssHtml = "\n<link rel='stylesheet' href='" + css + "'>\n";
  var scripts = "\n<script src='" + resourceBase + "vendor/railroad-diagrams.js'></script>\n<script src='" + resourceBase + "src/diagrams_builder.js'></script>\n<script src='" + resourceBase + "src/diagrams_behavior.js'></script>\n<script src='" + resourceBase + "src/main.js'></script>\n";
  var diagramsDiv = '\n<div id="diagrams" align="center"></div>    \n';
  var serializedGrammar = "\n<script>\n    window.serializedGrammar = " + JSON.stringify(grammar, null, "  ") + ";\n</script>\n";
  var initLogic = '\n<script>\n    var diagramsDiv = document.getElementById("diagrams");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n</script>\n';
  return header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic;
}
var init_render_public = __esm({
  "node_modules/chevrotain/lib_esm/src/diagrams/render_public.js"() {
    "use strict";
    init_version();
  }
});

// node_modules/chevrotain/lib_esm/src/generate/generate.js
function genUmdModule(options) {
  return "\n(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD. Register as an anonymous module.\n        define(['chevrotain'], factory);\n    } else if (typeof module === 'object' && module.exports) {\n        // Node. Does not work with strict CommonJS, but\n        // only CommonJS-like environments that support module.exports,\n        // like Node.\n        module.exports = factory(require('chevrotain'));\n    } else {\n        // Browser globals (root is window)\n        root.returnExports = factory(root.b);\n    }\n}(typeof self !== 'undefined' ? self : this, function (chevrotain) {\n\n" + genClass(options) + "\n    \nreturn {\n    " + options.name + ": " + options.name + " \n}\n}));\n";
}
function genWrapperFunction(options) {
  return "    \n" + genClass(options) + "\nreturn new " + options.name + "(tokenVocabulary, config)    \n";
}
function genClass(options) {
  var result = "\nfunction " + options.name + "(tokenVocabulary, config) {\n    // invoke super constructor\n    // No support for embedded actions currently, so we can 'hardcode'\n    // The use of CstParser.\n    chevrotain.CstParser.call(this, tokenVocabulary, config)\n\n    const $ = this\n\n    " + genAllRules(options.rules) + "\n\n    // very important to call this after all the rules have been defined.\n    // otherwise the parser may not work correctly as it will lack information\n    // derived during the self analysis phase.\n    this.performSelfAnalysis(this)\n}\n\n// inheritance as implemented in javascript in the previous decade... :(\n" + options.name + ".prototype = Object.create(chevrotain.CstParser.prototype)\n" + options.name + ".prototype.constructor = " + options.name + "    \n    ";
  return result;
}
function genAllRules(rules) {
  var rulesText = map(rules, function(currRule) {
    return genRule(currRule, 1);
  });
  return rulesText.join("\n");
}
function genRule(prod, n) {
  var result = indent(n, '$.RULE("' + prod.name + '", function() {') + NL;
  result += genDefinition(prod.definition, n + 1);
  result += indent(n + 1, "})") + NL;
  return result;
}
function genTerminal(prod, n) {
  var name = prod.terminalType.name;
  return indent(n, "$.CONSUME" + prod.idx + "(this.tokensMap." + name + ")" + NL);
}
function genNonTerminal(prod, n) {
  return indent(n, "$.SUBRULE" + prod.idx + "($." + prod.nonTerminalName + ")" + NL);
}
function genAlternation(prod, n) {
  var result = indent(n, "$.OR" + prod.idx + "([") + NL;
  var alts = map(prod.definition, function(altDef) {
    return genSingleAlt(altDef, n + 1);
  });
  result += alts.join("," + NL);
  result += NL + indent(n, "])" + NL);
  return result;
}
function genSingleAlt(prod, n) {
  var result = indent(n, "{") + NL;
  result += indent(n + 1, "ALT: function() {") + NL;
  result += genDefinition(prod.definition, n + 1);
  result += indent(n + 1, "}") + NL;
  result += indent(n, "}");
  return result;
}
function genProd(prod, n) {
  if (prod instanceof NonTerminal) {
    return genNonTerminal(prod, n);
  } else if (prod instanceof Option) {
    return genDSLRule("OPTION", prod, n);
  } else if (prod instanceof RepetitionMandatory) {
    return genDSLRule("AT_LEAST_ONE", prod, n);
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return genDSLRule("AT_LEAST_ONE_SEP", prod, n);
  } else if (prod instanceof RepetitionWithSeparator) {
    return genDSLRule("MANY_SEP", prod, n);
  } else if (prod instanceof Repetition) {
    return genDSLRule("MANY", prod, n);
  } else if (prod instanceof Alternation) {
    return genAlternation(prod, n);
  } else if (prod instanceof Terminal) {
    return genTerminal(prod, n);
  } else if (prod instanceof Alternative) {
    return genDefinition(prod.definition, n);
  } else {
    throw Error("non exhaustive match");
  }
}
function genDSLRule(dslName, prod, n) {
  var result = indent(n, "$." + (dslName + prod.idx) + "(");
  if (prod.separator) {
    result += "{" + NL;
    result += indent(n + 1, "SEP: this.tokensMap." + prod.separator.name) + "," + NL;
    result += "DEF: " + genDefFunction(prod.definition, n + 2) + NL;
    result += indent(n, "}") + NL;
  } else {
    result += genDefFunction(prod.definition, n + 1);
  }
  result += indent(n, ")") + NL;
  return result;
}
function genDefFunction(definition, n) {
  var def = "function() {" + NL;
  def += genDefinition(definition, n);
  def += indent(n, "}") + NL;
  return def;
}
function genDefinition(def, n) {
  var result = "";
  forEach(def, function(prod) {
    result += genProd(prod, n + 1);
  });
  return result;
}
function indent(howMuch, text) {
  var spaces = Array(howMuch * 4 + 1).join(" ");
  return spaces + text;
}
var NL;
var init_generate = __esm({
  "node_modules/chevrotain/lib_esm/src/generate/generate.js"() {
    "use strict";
    init_utils();
    init_gast_public();
    NL = "\n";
  }
});

// node_modules/chevrotain/lib_esm/src/generate/generate_public.js
function generateParserFactory(options) {
  var wrapperText = genWrapperFunction({
    name: options.name,
    rules: options.rules
  });
  var constructorWrapper = new Function("tokenVocabulary", "config", "chevrotain", wrapperText);
  return function(config) {
    return constructorWrapper(
      options.tokenVocabulary,
      config,
      // TODO: check how the require is transpiled/webpacked
      (init_api(), __toCommonJS(api_exports))
    );
  };
}
function generateParserModule(options) {
  return genUmdModule({ name: options.name, rules: options.rules });
}
var init_generate_public = __esm({
  "node_modules/chevrotain/lib_esm/src/generate/generate_public.js"() {
    "use strict";
    init_generate();
  }
});

// node_modules/chevrotain/lib_esm/src/api.js
var api_exports = {};
__export(api_exports, {
  Alternation: () => Alternation,
  Alternative: () => Alternative,
  CstParser: () => CstParser,
  EMPTY_ALT: () => EMPTY_ALT,
  EOF: () => EOF,
  EarlyExitException: () => EarlyExitException,
  EmbeddedActionsParser: () => EmbeddedActionsParser,
  GAstVisitor: () => GAstVisitor,
  Lexer: () => Lexer,
  LexerDefinitionErrorType: () => LexerDefinitionErrorType,
  MismatchedTokenException: () => MismatchedTokenException,
  NoViableAltException: () => NoViableAltException,
  NonTerminal: () => NonTerminal,
  NotAllInputParsedException: () => NotAllInputParsedException,
  Option: () => Option,
  Parser: () => Parser2,
  ParserDefinitionErrorType: () => ParserDefinitionErrorType,
  Repetition: () => Repetition,
  RepetitionMandatory: () => RepetitionMandatory,
  RepetitionMandatoryWithSeparator: () => RepetitionMandatoryWithSeparator,
  RepetitionWithSeparator: () => RepetitionWithSeparator,
  Rule: () => Rule,
  Terminal: () => Terminal,
  VERSION: () => VERSION,
  assignOccurrenceIndices: () => assignOccurrenceIndices,
  clearCache: () => clearCache,
  createSyntaxDiagramsCode: () => createSyntaxDiagramsCode,
  createToken: () => createToken,
  createTokenInstance: () => createTokenInstance,
  defaultGrammarResolverErrorProvider: () => defaultGrammarResolverErrorProvider,
  defaultGrammarValidatorErrorProvider: () => defaultGrammarValidatorErrorProvider,
  defaultLexerErrorProvider: () => defaultLexerErrorProvider,
  defaultParserErrorProvider: () => defaultParserErrorProvider,
  generateParserFactory: () => generateParserFactory,
  generateParserModule: () => generateParserModule,
  isRecognitionException: () => isRecognitionException,
  resolveGrammar: () => resolveGrammar2,
  serializeGrammar: () => serializeGrammar,
  serializeProduction: () => serializeProduction,
  tokenLabel: () => tokenLabel,
  tokenMatcher: () => tokenMatcher,
  tokenName: () => tokenName,
  validateGrammar: () => validateGrammar2
});
function clearCache() {
  console.warn("The clearCache function was 'soft' removed from the Chevrotain API.\n	 It performs no action other than printing this message.\n	 Please avoid using it as it will be completely removed in the future");
}
var Parser2;
var init_api = __esm({
  "node_modules/chevrotain/lib_esm/src/api.js"() {
    "use strict";
    init_version();
    init_parser();
    init_lexer_public();
    init_tokens_public();
    init_errors_public();
    init_exceptions_public();
    init_lexer_errors_public();
    init_gast_public();
    init_gast_public();
    init_gast_visitor_public();
    init_gast_resolver_public();
    init_render_public();
    init_generate_public();
    Parser2 = /** @class */
    /* @__PURE__ */ function() {
      function Parser3() {
        throw new Error("The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	\nSee: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_7-0-0");
      }
      return Parser3;
    }();
  }
});

// node_modules/@xml-tools/parser/lib/lexer.js
var require_lexer = __commonJS({
  "node_modules/@xml-tools/parser/lib/lexer.js"(exports2, module2) {
    "use strict";
    var { createToken: createTokenOrg, Lexer: Lexer2 } = (init_api(), __toCommonJS(api_exports));
    var fragments = {};
    var f = fragments;
    function FRAGMENT(name, def) {
      fragments[name] = typeof def === "string" ? def : def.source;
    }
    function makePattern(strings, ...args) {
      let combined = "";
      for (let i = 0; i < strings.length; i++) {
        combined += strings[i];
        if (i < args.length) {
          let pattern = args[i];
          combined += `(?:${pattern})`;
        }
      }
      return new RegExp(combined);
    }
    var tokensArray = [];
    var tokensDictionary = {};
    function createToken2(options) {
      const newTokenType = createTokenOrg(options);
      tokensArray.push(newTokenType);
      tokensDictionary[options.name] = newTokenType;
      return newTokenType;
    }
    FRAGMENT(
      "NameStartChar",
      "(:|[a-zA-Z]|_|\\u2070-\\u218F|\\u2C00-\\u2FEF|\\u3001-\\uD7FF|\\uF900-\\uFDCF|\\uFDF0-\\uFFFD)"
    );
    FRAGMENT(
      "NameChar",
      makePattern`${f.NameStartChar}|-|\\.|\\d|\\u00B7||[\\u0300-\\u036F]|[\\u203F-\\u2040]`
    );
    FRAGMENT("Name", makePattern`${f.NameStartChar}(${f.NameChar})*`);
    var Comment = createToken2({
      name: "Comment",
      pattern: /<!--(.|\r?\n)*?-->/,
      // A Comment may span multiple lines.
      line_breaks: true
    });
    var CData = createToken2({
      name: "CData",
      pattern: /<!\[CDATA\[(.|\r?\n)*?]]>/,
      line_breaks: true
    });
    var DocType = createToken2({
      name: "DocType",
      pattern: /<!DOCTYPE/,
      push_mode: "INSIDE"
    });
    var IgnoredDTD = createToken2({
      name: "DTD",
      pattern: /<!.*?>/,
      group: Lexer2.SKIPPED
    });
    var EntityRef = createToken2({
      name: "EntityRef",
      pattern: makePattern`&${f.Name};`
    });
    var CharRef = createToken2({
      name: "CharRef",
      pattern: /&#\d+;|&#x[a-fA-F0-9]/
    });
    var SEA_WS = createToken2({
      name: "SEA_WS",
      pattern: /( |\t|\n|\r\n)+/
    });
    var XMLDeclOpen = createToken2({
      name: "XMLDeclOpen",
      pattern: /<\?xml[ \t\r\n]/,
      push_mode: "INSIDE"
    });
    var SLASH_OPEN = createToken2({
      name: "SLASH_OPEN",
      pattern: /<\//,
      push_mode: "INSIDE"
    });
    var INVALID_SLASH_OPEN = createToken2({
      name: "INVALID_SLASH_OPEN",
      pattern: /<\//,
      categories: [SLASH_OPEN]
    });
    var PROCESSING_INSTRUCTION = createToken2({
      name: "PROCESSING_INSTRUCTION",
      pattern: makePattern`<\\?${f.Name}.*\\?>`
    });
    var OPEN = createToken2({ name: "OPEN", pattern: /</, push_mode: "INSIDE" });
    var INVALID_OPEN_INSIDE = createToken2({
      name: "INVALID_OPEN_INSIDE",
      pattern: /</,
      categories: [OPEN]
    });
    var TEXT = createToken2({ name: "TEXT", pattern: /[^<&]+/ });
    var CLOSE = createToken2({ name: "CLOSE", pattern: />/, pop_mode: true });
    var SPECIAL_CLOSE = createToken2({
      name: "SPECIAL_CLOSE",
      pattern: /\?>/,
      pop_mode: true
    });
    var SLASH_CLOSE = createToken2({
      name: "SLASH_CLOSE",
      pattern: /\/>/,
      pop_mode: true
    });
    var SLASH = createToken2({ name: "SLASH", pattern: /\// });
    var STRING = createToken2({
      name: "STRING",
      pattern: /"[^<"]*"|'[^<']*'/
    });
    var EQUALS = createToken2({ name: "EQUALS", pattern: /=/ });
    var Name = createToken2({ name: "Name", pattern: makePattern`${f.Name}` });
    var S = createToken2({
      name: "S",
      pattern: /[ \t\r\n]/,
      group: Lexer2.SKIPPED
    });
    var xmlLexerDefinition = {
      defaultMode: "OUTSIDE",
      modes: {
        OUTSIDE: [
          Comment,
          CData,
          DocType,
          IgnoredDTD,
          EntityRef,
          CharRef,
          SEA_WS,
          XMLDeclOpen,
          SLASH_OPEN,
          PROCESSING_INSTRUCTION,
          OPEN,
          TEXT
        ],
        INSIDE: [
          // Tokens from `OUTSIDE` to improve error recovery behavior
          Comment,
          INVALID_SLASH_OPEN,
          INVALID_OPEN_INSIDE,
          // "Real" `INSIDE` tokens
          CLOSE,
          SPECIAL_CLOSE,
          SLASH_CLOSE,
          SLASH,
          EQUALS,
          STRING,
          Name,
          S
        ]
      }
    };
    var xmlLexer = new Lexer2(xmlLexerDefinition, {
      // Reducing the amount of position tracking can provide a small performance boost (<10%)
      // Likely best to keep the full info for better error position reporting and
      // to expose "fuller" ITokens from the Lexer.
      positionTracking: "full",
      ensureOptimizations: false,
      // TODO: inspect definitions for XML line terminators
      lineTerminatorCharacters: ["\n"],
      lineTerminatorsPattern: /\n|\r\n/g
    });
    module2.exports = {
      xmlLexer,
      tokensDictionary
    };
  }
});

// node_modules/@xml-tools/parser/lib/parser.js
var require_parser = __commonJS({
  "node_modules/@xml-tools/parser/lib/parser.js"(exports2, module2) {
    "use strict";
    var { CstParser: CstParser2, tokenMatcher: tokenMatcher2 } = (init_api(), __toCommonJS(api_exports));
    var { tokensDictionary: t } = require_lexer();
    var Parser3 = class extends CstParser2 {
      constructor() {
        super(t, {
          maxLookahead: 1,
          recoveryEnabled: true,
          nodeLocationTracking: "full"
        });
        this.deletionRecoveryEnabled = true;
        const $ = this;
        $.RULE("document", () => {
          $.OPTION(() => {
            $.SUBRULE($.prolog);
          });
          $.MANY(() => {
            $.SUBRULE($.misc);
          });
          $.OPTION2(() => {
            $.SUBRULE($.docTypeDecl);
          });
          $.MANY2(() => {
            $.SUBRULE2($.misc);
          });
          $.SUBRULE($.element);
          $.MANY3(() => {
            $.SUBRULE3($.misc);
          });
        });
        $.RULE("prolog", () => {
          $.CONSUME(t.XMLDeclOpen);
          $.MANY(() => {
            $.SUBRULE($.attribute);
          });
          $.CONSUME(t.SPECIAL_CLOSE);
        });
        $.RULE("docTypeDecl", () => {
          $.CONSUME(t.DocType);
          $.CONSUME(t.Name);
          $.OPTION(() => {
            $.SUBRULE($.externalID);
          });
          $.CONSUME(t.CLOSE);
        });
        $.RULE("externalID", () => {
          $.OR([
            {
              GATE: () => $.LA(1).image === "SYSTEM",
              ALT: () => {
                $.CONSUME2(t.Name, { LABEL: "System" });
                $.CONSUME(t.STRING, { LABEL: "SystemLiteral" });
              }
            },
            {
              GATE: () => $.LA(1).image === "PUBLIC",
              ALT: () => {
                $.CONSUME3(t.Name, { LABEL: "Public" });
                $.CONSUME2(t.STRING, { LABEL: "PubIDLiteral" });
                $.CONSUME3(t.STRING, { LABEL: "SystemLiteral" });
              }
            }
          ]);
        });
        $.RULE("content", () => {
          $.MANY(() => {
            $.OR([
              { ALT: () => $.SUBRULE($.element) },
              { ALT: () => $.SUBRULE($.chardata) },
              { ALT: () => $.SUBRULE($.reference) },
              { ALT: () => $.CONSUME(t.CData) },
              { ALT: () => $.CONSUME(t.PROCESSING_INSTRUCTION) },
              { ALT: () => $.CONSUME(t.Comment) }
            ]);
          });
        });
        $.RULE("element", () => {
          $.CONSUME(t.OPEN);
          try {
            this.deletionRecoveryEnabled = false;
            $.CONSUME(t.Name);
          } finally {
            this.deletionRecoveryEnabled = true;
          }
          $.MANY(() => {
            $.SUBRULE($.attribute);
          });
          $.OR([
            {
              ALT: () => {
                $.CONSUME(t.CLOSE, { LABEL: "START_CLOSE" });
                $.SUBRULE($.content);
                $.CONSUME(t.SLASH_OPEN);
                $.CONSUME2(t.Name, { LABEL: "END_NAME" });
                $.CONSUME2(t.CLOSE, { LABEL: "END" });
              }
            },
            {
              ALT: () => {
                $.CONSUME(t.SLASH_CLOSE);
              }
            }
          ]);
        });
        $.RULE("reference", () => {
          $.OR([
            { ALT: () => $.CONSUME(t.EntityRef) },
            { ALT: () => $.CONSUME(t.CharRef) }
          ]);
        });
        $.RULE("attribute", () => {
          $.CONSUME(t.Name);
          try {
            this.deletionRecoveryEnabled = false;
            $.CONSUME(t.EQUALS);
            $.CONSUME(t.STRING);
          } finally {
            this.deletionRecoveryEnabled = true;
          }
        });
        $.RULE("chardata", () => {
          $.OR([
            { ALT: () => $.CONSUME(t.TEXT) },
            { ALT: () => $.CONSUME(t.SEA_WS) }
          ]);
        });
        $.RULE("misc", () => {
          $.OR([
            { ALT: () => $.CONSUME(t.Comment) },
            { ALT: () => $.CONSUME(t.PROCESSING_INSTRUCTION) },
            { ALT: () => $.CONSUME(t.SEA_WS) }
          ]);
        });
        this.performSelfAnalysis();
      }
      canRecoverWithSingleTokenDeletion(expectedTokType) {
        if (this.deletionRecoveryEnabled === false) {
          return false;
        }
        return super.canRecoverWithSingleTokenDeletion(expectedTokType);
      }
      // TODO: provide this fix upstream to chevrotain
      // https://github.com/SAP/chevrotain/issues/1055
      /* istanbul ignore next - should be tested as part of Chevrotain */
      findReSyncTokenType() {
        const allPossibleReSyncTokTypes = this.flattenFollowSet();
        let nextToken = this.LA(1);
        let k = 2;
        while (true) {
          const foundMatch = allPossibleReSyncTokTypes.find((resyncTokType) => {
            const canMatch = tokenMatcher2(nextToken, resyncTokType);
            return canMatch;
          });
          if (foundMatch !== void 0) {
            return foundMatch;
          }
          nextToken = this.LA(k);
          k++;
        }
      }
    };
    var xmlParser = new Parser3();
    module2.exports = {
      xmlParser
    };
  }
});

// node_modules/@xml-tools/parser/lib/api.js
var require_api = __commonJS({
  "node_modules/@xml-tools/parser/lib/api.js"(exports2, module2) {
    "use strict";
    var { xmlLexer } = require_lexer();
    var { xmlParser } = require_parser();
    module2.exports = {
      parse: function parse(text) {
        const lexResult = xmlLexer.tokenize(text);
        xmlParser.input = lexResult.tokens;
        const cst = xmlParser.document();
        return {
          cst,
          tokenVector: lexResult.tokens,
          lexErrors: lexResult.errors,
          parseErrors: xmlParser.errors
        };
      },
      BaseXmlCstVisitor: xmlParser.getBaseCstVisitorConstructor()
    };
  }
});

// src/commit-changes/index.ts
var import_fs2 = require("fs");
var import_simple_git = require("simple-git");

// src/utils.ts
var import_os2 = require("os");

// src/summary.ts
var import_os = require("os");
var import_fs = require("fs");
var { access, appendFile, writeFile } = import_fs.promises;
var SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
var Summary = class {
  constructor() {
    this._buffer = "";
  }
  /**
   * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
   * Also checks r/w permissions.
   *
   * @returns step summary file path
   */
  async filePath() {
    if (this._filePath) {
      return this._filePath;
    }
    const pathFromEnv = process.env[SUMMARY_ENV_VAR];
    if (!pathFromEnv) {
      this._filePath = null;
      return this._filePath;
    }
    try {
      await access(pathFromEnv, import_fs.constants.R_OK | import_fs.constants.W_OK);
    } catch {
      throw new Error(
        `Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`
      );
    }
    this._filePath = pathFromEnv;
    return this._filePath;
  }
  /**
   * Wraps content in an HTML tag, adding any HTML attributes
   *
   * @param {string} tag HTML tag to wrap
   * @param {string | null} content content within the tag
   * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
   *
   * @returns {string} content wrapped in HTML element
   */
  wrap(tag, content, attrs = {}) {
    const htmlAttrs = Object.entries(attrs).map(([key, value]) => ` ${key}="${value}"`).join("");
    if (!content) {
      return `<${tag}${htmlAttrs}>`;
    }
    return `<${tag}${htmlAttrs}>${content}</${tag}>`;
  }
  /**
   * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
   *
   * @param {SummaryWriteOptions} [options] (optional) options for write operation
   *
   * @returns {Promise<Summary>} summary instance
   */
  async write(options) {
    const overwrite = !!(options == null ? void 0 : options.overwrite);
    const filePath = await this.filePath();
    if (!filePath) {
      console.log(
        `~~~ SUMMARY ~~~${import_os.EOL}${this._buffer}${import_os.EOL}~~~ END SUMMARY ~~~`
      );
      return this.emptyBuffer();
    }
    const writeFunc = overwrite ? writeFile : appendFile;
    await writeFunc(filePath, this._buffer, { encoding: "utf8" });
    return this.emptyBuffer();
  }
  /**
   * Clears the summary buffer and wipes the summary file
   *
   * @returns {Summary} summary instance
   */
  async clear() {
    return this.emptyBuffer().write({ overwrite: true });
  }
  /**
   * Returns the current summary buffer as a string
   *
   * @returns {string} string of summary buffer
   */
  stringify() {
    return this._buffer;
  }
  /**
   * If the summary buffer is empty
   *
   * @returns {boolen} true if the buffer is empty
   */
  isEmptyBuffer() {
    return this._buffer.length === 0;
  }
  /**
   * Resets the summary buffer without writing to summary file
   *
   * @returns {Summary} summary instance
   */
  emptyBuffer() {
    this._buffer = "";
    return this;
  }
  /**
   * Adds raw text to the summary buffer
   *
   * @param {string} text content to add
   * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
   *
   * @returns {Summary} summary instance
   */
  addRaw(text, addEOL = false) {
    this._buffer += text;
    return addEOL ? this.addEOL() : this;
  }
  /**
   * Adds the operating system-specific end-of-line marker to the buffer
   *
   * @returns {Summary} summary instance
   */
  addEOL() {
    return this.addRaw(import_os.EOL);
  }
  /**
   * Adds an HTML codeblock to the summary buffer
   *
   * @param {string} code content to render within fenced code block
   * @param {string} lang (optional) language to syntax highlight code
   *
   * @returns {Summary} summary instance
   */
  addCodeBlock(code, lang) {
    const attrs = {
      ...lang && { lang }
    };
    const element = this.wrap("pre", this.wrap("code", code), attrs);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML list to the summary buffer
   *
   * @param {string[]} items list of items to render
   * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
   *
   * @returns {Summary} summary instance
   */
  addList(items, ordered = false) {
    const tag = ordered ? "ol" : "ul";
    const listItems = items.map((item) => this.wrap("li", item)).join("");
    const element = this.wrap(tag, listItems);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML table to the summary buffer
   *
   * @param {SummaryTableCell[]} rows table rows
   *
   * @returns {Summary} summary instance
   */
  addTable(rows) {
    const tableBody = rows.map((row) => {
      const cells = row.map((cell) => {
        if (typeof cell === "string") {
          return this.wrap("td", cell);
        }
        const { header, data, colspan, rowspan } = cell;
        const tag = header ? "th" : "td";
        const attrs = {
          ...colspan && { colspan },
          ...rowspan && { rowspan }
        };
        return this.wrap(tag, data, attrs);
      }).join("");
      return this.wrap("tr", cells);
    }).join("");
    const element = this.wrap("table", tableBody);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds a collapsable HTML details element to the summary buffer
   *
   * @param {string} label text for the closed state
   * @param {string} content collapsable content
   *
   * @returns {Summary} summary instance
   */
  addDetails(label, content) {
    const element = this.wrap("details", this.wrap("summary", label) + content);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML image tag to the summary buffer
   *
   * @param {string} src path to the image you to embed
   * @param {string} alt text description of the image
   * @param {SummaryImageOptions} options (optional) addition image attributes
   *
   * @returns {Summary} summary instance
   */
  addImage(src, alt, options) {
    const { width, height } = options || {};
    const attrs = {
      ...width && { width },
      ...height && { height }
    };
    const element = this.wrap("img", null, { src, alt, ...attrs });
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML section heading element
   *
   * @param {string} text heading text
   * @param {number | string} [level=1] (optional) the heading level, default: 1
   *
   * @returns {Summary} summary instance
   */
  addHeading(text, level) {
    const tag = `h${level}`;
    const allowedTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag) ? tag : "h1";
    const element = this.wrap(allowedTag, text);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML thematic break (<hr>) to the summary buffer
   *
   * @returns {Summary} summary instance
   */
  addSeparator() {
    const element = this.wrap("hr", null);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML line break (<br>) to the summary buffer
   *
   * @returns {Summary} summary instance
   */
  addBreak() {
    const element = this.wrap("br", null);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML blockquote to the summary buffer
   *
   * @param {string} text quote text
   * @param {string} cite (optional) citation url
   *
   * @returns {Summary} summary instance
   */
  addQuote(text, cite) {
    const attrs = {
      ...cite && { cite }
    };
    const element = this.wrap("blockquote", text, attrs);
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds an HTML anchor tag to the summary buffer
   *
   * @param {string} text link text/content
   * @param {string} href hyperlink
   *
   * @returns {Summary} summary instance
   */
  addLink(text, href) {
    const element = this.wrap("a", text, { href });
    return this.addRaw(element).addEOL();
  }
  /**
   * Adds a blockquote alert to the summary buffer
   *
   * @param {string} type type of alert
   * @param {string} text alert text
   *
   * @returns {Summary} summary instance
   */
  addAlert(type, text) {
    const element = text.split(import_os.EOL).map((line3) => `> ${line3}`).join(import_os.EOL);
    const alert = `> [!${type.toUpperCase()}]${import_os.EOL}${element}`;
    return this.addRaw(alert).addEOL();
  }
};
var _summary = new Summary();
var summary = _summary;

// src/utils.ts
var import_prettier = __toESM(require("prettier"), 1);

// node_modules/@prettier/plugin-xml/src/parser.js
var import_parser13 = __toESM(require_api(), 1);

// node_modules/@prettier/plugin-xml/src/printer.js
var doc2 = __toESM(require("prettier/doc"), 1);

// node_modules/@prettier/plugin-xml/src/embed.js
var doc = __toESM(require("prettier/doc"), 1);
var {
  dedentToRoot,
  group,
  hardline,
  indent: indent2,
  join,
  line,
  literalline,
  softline
} = doc.builders;

// node_modules/@prettier/plugin-xml/src/printer.js
var { fill, group: group2, hardline: hardline2, indent: indent3, join: join2, line: line2, literalline: literalline2, softline: softline2 } = doc2.builders;

// src/utils.ts
var XML_LICENSE = `<!-- This Source Code Form is subject to the terms of the Mozilla Public${import_os2.EOL}   - License, v. 2.0. If a copy of the MPL was not distributed with this file,${import_os2.EOL}   - You can obtain one at http://mozilla.org/MPL/2.0/. -->`;
function getInput(name, required = true) {
  const val = getEnv(`INPUT_${name.replace(/ /g, "_").toUpperCase()}`);
  if (required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }
  return val.trim();
}
function getEnv(name) {
  return process.env[name] || "";
}
async function tryCatch(fn, errorSummary) {
  try {
    return await fn();
  } catch (error) {
    console.error(error);
    summary.addAlert("caution", errorSummary);
    summary.write();
    process.exit(1);
  }
}

// src/commit-changes/index.ts
var import_child_process = require("child_process");
var { writeFile: writeFile2 } = import_fs2.promises;
tryCatch(run, "Failed to commit changes. See logs for details.");
async function run() {
  const message = getInput("message", true);
  const status = await (0, import_simple_git.simpleGit)().status();
  if (status.files.length === 0) {
    summary.addHeading(":arrow_up: Did not commit any files", 3);
    summary.addRaw(`Did not commit because there were no changed files.`);
    summary.write();
    return;
  }
  await (0, import_simple_git.simpleGit)().add(status.files.map((file) => file.path));
  await setupGit();
  await (0, import_simple_git.simpleGit)().commit(message).push("origin");
  summary.addHeading(`:arrow_up: Committed ${status.files.length} files`, 3);
  summary.addList(status.files.map((file) => file.path));
  summary.write();
}
async function setupGit() {
  if (!process.env.GITHUB_ACTOR)
    return;
  const netrcContent = `
    machine github.com
    login ${process.env.GITHUB_ACTOR}
    password ${process.env.INPUT_GITHUB_TOKEN}
    machine api.github.com
    login ${process.env.GITHUB_ACTOR}
    password ${process.env.INPUT_GITHUB_TOKEN}
  `;
  await writeFile2(`${process.env.HOME}/.netrc`, netrcContent, { mode: 384 });
  (0, import_child_process.execSync)('git config --global user.email "actions@github.com"');
  (0, import_child_process.execSync)('git config --global user.name "GitHub Action"');
}
