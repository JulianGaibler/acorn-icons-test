"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/test2/index.ts
var import_svgo = require("svgo");

// src/utils.ts
function getInput(name, required = true) {
  const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  if (required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }
  return val.trim();
}

// src/test2/index.ts
var import_fast_glob = __toESM(require("fast-glob"), 1);
async function run() {
  const filesGlob = getInput("files", { required: true });
  const files = await (0, import_fast_glob.default)(filesGlob);
  console.log("files:", files);
  const result = (0, import_svgo.optimize)("<svg></svg>", {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      }
    ]
  });
  console.log(result.data);
}
run();
