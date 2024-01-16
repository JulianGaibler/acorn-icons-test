import {
  ensureLicense,
  formatFile,
  getInput,
  summary,
  svgoBasePlugins,
  svgoRemoveAttrs,
  tryCatch
} from "../chunk-BDXLBHEC.js";

// src/desktop-transform/index.ts
import { optimize } from "svgo";
import fg from "fast-glob";
import fs from "fs";
tryCatch(run, "Failed to check desktop SVGs. See logs for details.");
async function run() {
  const filesGlob = getInput("files", true);
  const files = await fg(filesGlob);
  if (files.length === 0) {
    summary.addHeading(":desktop_computer: No files found", 3);
    summary.addAlert("warning", `No files found matching "${filesGlob}".`);
    summary.write();
    return;
  }
  const changedFiles = [];
  for (const file of files) {
    if (await updateDesktopIcon(file)) {
      changedFiles.push(file);
    }
  }
  if (changedFiles.length === 0) {
    summary.addHeading(":desktop_computer: No SVGs changed", 3);
    summary.addRaw(`Checked ${files.length} desktop SVGs and made no changes.`);
    summary.write();
    return;
  }
  summary.addHeading(
    `:desktop_computer: Updated ${changedFiles.length} desktop SVGs`,
    3
  );
  summary.addList(changedFiles);
  summary.write();
}
async function updateDesktopIcon(path) {
  if (!path.endsWith(".svg")) {
    return false;
  }
  console.log(`::notice::Checking ${path}`);
  const originalFile = fs.readFileSync(path, "utf8");
  const result = optimize(originalFile, {
    plugins: [
      // custom plugin to add viewBox and dimensions if missing
      viewBoxAndDimensions,
      // custom plugin to add context fill
      addContextFill,
      // Import the base config from utils.ts
      ...svgoBasePlugins,
      // Remove all these attributes
      // They usually are added in the export process but for our simple
      //shapes we don't need them
      svgoRemoveAttrs([
        "id",
        "data-name",
        "class",
        "fill",
        "stroke",
        "stroke-width",
        "stroke-miterlimit",
        "clip-rule",
        "fill-rule",
        "fill-opacity"
      ])
    ]
  });
  const formatted = await formatFile("svg", result.data);
  const withLicense = ensureLicense(formatted);
  const fileChanged = withLicense !== originalFile;
  if (fileChanged) {
    fs.writeFileSync(path, withLicense);
  }
  return fileChanged;
}
var viewBoxAndDimensions = {
  name: "viewBoxAndDimensions",
  fn: () => ({
    element: {
      enter(node) {
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
};
var addContextFill = {
  name: "addContextFill",
  fn: () => ({
    element: {
      enter(node) {
        if (node.name !== "svg") {
          return;
        }
        node.attributes.fill = "context-fill";
        node.attributes["fill-opacity"] = "context-fill-opacity";
      }
    }
  })
};
