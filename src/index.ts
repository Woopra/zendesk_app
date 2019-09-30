#!/usr/bin/env node
import { statSync } from "fs";
import { resolve } from "path";
import chalk from "chalk";
import * as meow from "meow";
import * as emoji from "node-emoji";
import Migrator from "./migrator";

const cli = meow(
  `
  Usage
      $ app_migrator <input>

  Options
    -p, --path        Path to the app to be migrated
    -r, --replace-v1  Whether or not to replace the v1 app files with the v2 files
    -a, --auto        Try to automatically migrate all JavaScript/CSS. Note: may be unstable, please test extensively
    --insight         Switch on anonymous tracking to help improve the tool
    --no-insight      Switch off anonymous tracking

  Examples
    $ app_migrator migrate --/Users/fatmaocal/Desktop/Work/zendesk_app /path/to/my/app/directory/
`,
  {
    alias: {
      p: "path",
      r: "replace-v1",
      v: "version",
      a: "auto"
    }
  }
);

const cmd = cli.input[0];
if (cmd !== "migrate") throw new Error(`${cmd} not implemented yet`);
cli.flags.path = resolve(process.cwd(), cli.flags.path);
const stats = statSync(cli.flags.path);
if (!stats.isDirectory()) {
  throw new Error(`
    Please provide the path to a v1 app directory
  `);
}

// Do the migration
Migrator.migrate(cli.flags);
