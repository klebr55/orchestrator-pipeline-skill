#!/usr/bin/env node
import { install, parseArgs } from '../lib/install.mjs';

const usage = `Orchestrator Pipeline

Usage:
  orchestrator-pipeline install [--agent codex] [--global] [--dry-run]

Installs the orchestrator and eight companion skills from their original repositories.
Defaults to a project installation for Codex. Use --agent antigravity, cursor,
claude-code, or another agent supported by the Skills CLI. Use --global to install
for your user account. Browser executables and MCP servers require separate setup.`;

try {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) console.log(usage);
  else process.exitCode = install(options);
} catch (error) {
  console.error(error.message);
  console.error(usage);
  process.exitCode = 2;
}
