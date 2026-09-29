import { spawnSync } from 'node:child_process';

export const sources = [
  { name: 'Orchestrator Pipeline', repo: 'klebr55/orchestrator-pipeline-skill', skills: ['orchestrator-pipeline'] },
  { name: 'Taste Skill', repo: 'Leonxlnx/taste-skill', skills: ['design-taste-frontend'] },
  { name: 'Build Awwwards-Quality Sites', repo: 'https://github.com/MengTo/Skills/tree/main/agent-skills/web-design/build-awwwards-quality-sites', skills: ['build-awwwards-quality-sites'] },
  { name: 'Animate', repo: 'emilkowalski/skills', skills: ['animate'] },
  { name: 'Web Design Guidelines', repo: 'vercel-labs/agent-skills', skills: ['web-design-guidelines'] },
  { name: 'Three.js + R3F Best Practices', repo: 'emalorenzo/three-agent-skills', skills: ['three-best-practices', 'r3f-best-practices'] },
  { name: 'shadcn', repo: 'shadcn/ui', skills: ['shadcn'] },
  { name: 'Playwright CLI', repo: 'microsoft/playwright-cli', skills: ['playwright-cli'] }
];

export function parseArgs(argv) {
  const options = { agent: 'codex', global: false, dryRun: false, help: false };
  const args = [...argv];
  if (args[0] === 'install') args.shift();

  for (let index = 0; index < args.length; index += 1) {
    const value = args[index];
    if (value === '--agent' || value === '-a') {
      const agent = args[++index];
      if (!agent || !/^[a-z][a-z0-9-]*$/.test(agent)) throw new Error('Specify a valid agent after --agent.');
      options.agent = agent;
    } else if (value === '--global' || value === '-g') {
      options.global = true;
    } else if (value === '--dry-run') {
      options.dryRun = true;
    } else if (value === '--help' || value === '-h') {
      options.help = true;
    } else {
      throw new Error(`Unknown option: ${value}`);
    }
  }

  return options;
}

export function buildCommands(options) {
  return sources.map(source => ({
    name: source.name,
    command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
    args: [
      'exec', '--yes', '--package=skills@latest', '--', 'skills', 'add', source.repo,
      ...source.skills.flatMap(skill => ['--skill', skill]),
      '--agent', options.agent,
      ...(options.global ? ['--global'] : []),
      '--yes'
    ]
  }));
}

export function install(options, { run = spawnSync, out = console.log, err = console.error } = {}) {
  const commands = buildCommands(options);
  for (const { name, command, args } of commands) {
    out(`\n${name}: ${command} ${args.join(' ')}`);
    if (options.dryRun) continue;
    const result = run(command, args, { stdio: 'inherit', shell: false });
    if (result.error || result.status !== 0) {
      err(`Installation stopped at ${name}. Previous skills may already be installed. Fix the cause and run the same command again.`);
      if (result.error) err(result.error.message);
      return result.status || 1;
    }
  }
  if (!options.dryRun) out(`\nInstalled ${sources.flatMap(source => source.skills).length} skills for ${options.agent}${options.global ? ' globally' : ' in this project'}. Browser executables and MCP servers require their own setup.`);
  return 0;
}
