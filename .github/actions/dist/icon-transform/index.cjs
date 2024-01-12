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

// src/icon-transform/index.ts
var import_svgo = require("svgo");

// src/utils.ts
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"), 1);
var SVG_LICENSE = `<!-- This Source Code Form is subject to the terms of the Mozilla Public
- License, v. 2.0. If a copy of the MPL was not distributed with this
- file, You can obtain one at http://mozilla.org/MPL/2.0/. -->`;
function getInput(name, required = true) {
  const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  if (required && !val) {
    throw new Error(`Input required and not supplied: ${name}`);
  }
  return val.trim();
}
function getEnv(name) {
  return process.env[name] || "";
}
function setupGit() {
  if (!process.env.GITHUB_ACTOR) {
    return;
  }
  const netrcContent = `
    machine github.com
    login ${process.env.GITHUB_ACTOR}
    password ${process.env.INPUT_GITHUB_TOKEN}
    machine api.github.com
    login ${process.env.GITHUB_ACTOR}
    password ${process.env.INPUT_GITHUB_TOKEN}
  `;
  import_fs.default.writeFileSync(`${process.env.HOME}/.netrc`, netrcContent, { mode: 384 });
  (0, import_child_process.execSync)('git config --global user.email "actions@github.com"');
  (0, import_child_process.execSync)('git config --global user.name "GitHub Action"');
}

// src/icon-transform/index.ts
var import_fast_glob = __toESM(require("fast-glob"), 1);
var import_fs2 = __toESM(require("fs"), 1);
var import_simple_git = require("simple-git");
async function run() {
  const filesGlob = getInput("files", true);
  const files = await (0, import_fast_glob.default)(filesGlob);
  let changed = false;
  for (const file of files) {
    if (checkSvg(file)) {
      changed = true;
    }
  }
  if (!changed) {
    console.log("No files were changed");
    return;
  }
  setupGit();
  const git = (0, import_simple_git.simpleGit)();
  await git.add(filesGlob);
  git.commit("Updated icons", {
    "--author": `${getEnv("GITHUB_ACTOR")} <${getEnv(
      "GITHUB_ACTOR"
    )}@users.noreply.github.com>`
  });
  git.push("origin");
}
function checkSvg(path) {
  if (!path.endsWith(".svg")) {
    return false;
  }
  const originalFile = import_fs2.default.readFileSync(path, "utf8");
  const result = (0, import_svgo.optimize)(originalFile, {
    plugins: [
      "removeDesc",
      "removeStyleElement",
      "removeOffCanvasPaths",
      "removeNonInheritableGroupAttrs",
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      },
      {
        name: "removeAttrs",
        params: {
          attrs: "(id|data-name|class|fill|stroke|stroke-width|stroke-miterlimit|clip-rule|fill-rule)"
        }
      },
      {
        name: "viewBoxAndDimensions",
        fn: () => ({
          element: {
            exit(node) {
              if (node.name !== "svg") {
                return;
              }
              const viewBox = node.attributes.viewBox;
              const width = node.attributes.width;
              const height = node.attributes.height;
              if (viewBox && width && height) {
                return;
              }
              if (viewBox && !width || !height) {
                const [, , w, h] = viewBox.split(" ");
                node.attributes.width = w;
                node.attributes.height = h;
              } else if (width && height && !viewBox) {
                node.attributes.viewBox = `0 0 ${width} ${height}`;
              } else {
                throw new Error("SVG has no width, height, or viewBox");
              }
            }
          }
        })
      },
      {
        name: "addContextFill",
        fn: () => ({
          element: {
            exit(node) {
              if (node.name !== "svg") {
                return;
              }
              node.attributes.fill = "context-fill";
              node.attributes["fill-opacity"] = "context-fill-opacity";
            }
          }
        })
      },
      {
        name: "addContextFill",
        fn: () => ({
          element: {
            exit(node) {
              if (node.name !== "svg") {
                return;
              }
              node.attributes.fill = "context-fill";
              node.attributes["fill-opacity"] = "context-fill-opacity";
            }
          }
        })
      }
    ]
  });
  const afterWithLicense = `${SVG_LICENSE}
${result.data.replace(/>/g, ">\n")}`;
  const fileChanged = afterWithLicense !== originalFile;
  if (fileChanged) {
    import_fs2.default.writeFileSync(path, afterWithLicense);
  }
  return fileChanged;
}
run();
