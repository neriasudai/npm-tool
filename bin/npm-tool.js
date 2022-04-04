#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
var clc = require("cli-color");

const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
  .command("npm-tool <folder>", "list the file in the folder")
  .demandCommand(1)
  .option("hidden", {
    alias: "h",
    type: "boolean",
    description: "show hidden files",
  })
  .option("color", {
    alias: "c",
    type: "boolean",
    description: "colorize the output",
  })
  .option("backGround", {
    alias: "b",
    type: "boolean",
    description: "colorize the backGround output",
  })
  .option("version", {
    alias: "v",
    type: "boolean",
    description: "show version",
  })
  .parse();
const folder = argv._[0];
let files = fs.readdirSync(folder);
if (!argv.hidden) {
  files = files.filter((file) => !file.startsWith("."));
}

for (const file of files) {
  if (argv.color) {
    console.log(clc.greenBright(file));
  } else if (argv.backGround) {
    console.log(clc.bgWhite(clc.black(file)));
  } else if (argv.color && argv.backGround) {
    console.log(clc.bgYellow(clc.black(file)));
  } else {
    console.log(file);
  }
}

console.log("npm-tool");
