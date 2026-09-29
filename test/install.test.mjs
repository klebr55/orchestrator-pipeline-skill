import assert from 'node:assert/strict';
import test from 'node:test';
import { buildCommands, install, parseArgs, sources } from '../lib/install.mjs';

test('installs the orchestrator and every companion skill from upstream', () => {
  const calls = [];
  const result = install(parseArgs(['install', '--agent', 'antigravity', '--global']), {
    run(command, args) {
      calls.push([command, args]);
      return { status: 0 };
    },
    out() {}
  });
  assert.equal(result, 0);
  assert.equal(calls.length, sources.length);
  assert.deepEqual(calls.flatMap(([, args]) => args.flatMap((arg, i) => arg === '--skill' ? [args[i + 1]] : [])), sources.flatMap(source => source.skills));
  assert.ok(calls.every(([, args]) => args.includes('antigravity') && args.includes('--global')));
});

test('fails on a missing upstream without claiming the bundle succeeded', () => {
  const calls = [];
  const errors = [];
  const result = install(parseArgs([]), {
    run(command, args) {
      calls.push([command, args]);
      return { status: calls.length === 2 ? 1 : 0 };
    },
    out() {},
    err(message) { errors.push(message); }
  });
  assert.equal(result, 1);
  assert.equal(calls.length, 2);
  assert.match(errors[0], /Taste Skill/);
});

test('dry run is side-effect free and local by default', () => {
  const options = parseArgs(['--dry-run']);
  const commands = buildCommands(options);
  assert.ok(commands.every(({ args }) => args.includes('codex') && !args.includes('--global')));
  assert.equal(install(options, { run() { throw new Error('unexpected'); }, out() {} }), 0);
});

test('rejects invalid flags and agents', () => {
  assert.throws(() => parseArgs(['--unexpected']), /Unknown option/);
  assert.throws(() => parseArgs(['--agent', '../other']), /valid agent/);
});
