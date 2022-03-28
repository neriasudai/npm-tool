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
  .parse();
const folder = argv._[0];
let files = fs.readdirSync(folder);
if (!argv.hidden) {
  files = files.filter((file) => !file.startsWith("."));
}

for (const file of files) {
  console.log(clc.greenBright(file));
}

console.log("npm-tool");

// hello
