<p align="center">
  <img src="https://raw.githubusercontent.com/klebr55/orchestrator-pipeline-skill/main/assets/orchestrator-banner.svg?v=2b43980" alt="Orchestrator Pipeline. One direction. Many specialists. Evidence in the browser. Four stages and the technology ecosystem." width="100%" />
</p>

<h1 align="center">Orchestrator Pipeline</h1>

<p align="center"><strong>One direction. Many specialists. Evidence in the browser.</strong></p>

<p align="center">
  <a href="#install"><img src="https://img.shields.io/badge/install-one_command-61D8DB?style=for-the-badge&labelColor=111827" alt="Install in one command" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-AEA6FF?style=for-the-badge&labelColor=111827" alt="MIT license" /></a>
  <a href="https://github.com/vercel-labs/skills"><img src="https://img.shields.io/badge/Agent_Skills-compatible-FFCB9A?style=for-the-badge&labelColor=111827" alt="Compatible with Agent Skills" /></a>
  <a href="https://github.com/klebr55/orchestrator-pipeline-skill/stargazers"><img src="https://img.shields.io/github/stars/klebr55/orchestrator-pipeline-skill?style=for-the-badge&labelColor=111827&color=8B8CF8" alt="GitHub stars" /></a>
</p>

<p align="center">
  <strong>English</strong> · <a href="docs/README.pt-BR.md">Português (Brasil)</a> · <a href="docs/README.es.md">Español</a>
</p>

---

Orchestrator Pipeline is an open Agent Skill for frontend workers. It coordinates visual direction, component selection, motion, optional 3D, accessibility, and live browser validation into one working method. It tells an agent **which expertise to call, when to call it, and what evidence to bring back**.

> Great interfaces are not a pile of effects. They are a series of decisions that hold together.

<p align="center">
  <img src="https://raw.githubusercontent.com/klebr55/orchestrator-pipeline-skill/main/assets/pipeline-map.svg" alt="Four-stage pipeline: understand the product, choose components, coordinate motion and 3D, and validate in the browser; findings feed back into implementation" width="100%" />
</p>

<p align="center"><a href="#install">Install</a> · <a href="#the-ensemble">The ensemble</a> · <a href="#how-it-works">How it works</a> · <a href="#configure-the-tools">Configure tools</a> · <a href="#releasing">Releasing</a></p>

## Install

Requires **Node.js 20+** and **Git**. Run this inside your project:

```bash
npx --yes --package=@klebr55/orchestrator-pipeline-skill orchestrator-pipeline install --agent codex
```

This installs **nine Agent Skills**: the orchestrator and eight companion skills from their original repositories. It installs into the current project by default. Add `--global` for your user account, change `codex` to an agent supported by [Skills CLI](https://github.com/vercel-labs/skills), or preview all operations with `--dry-run`.

Prefer npm's explicit syntax? It runs the same package:

```bash
npm exec --yes --package=@klebr55/orchestrator-pipeline-skill -- orchestrator-pipeline install --agent codex
```

The package is [public on npm](https://www.npmjs.com/package/@klebr55/orchestrator-pipeline-skill). Preview the operations by adding `--dry-run` to the install command; then check the result with `npx skills ls -a codex`. To run directly from GitHub instead of the registry, use `--package=github:klebr55/orchestrator-pipeline-skill`.

## The ensemble

| Specialist | Call it for | Source |
| --- | --- | --- |
| 🧭 **Orchestrator Pipeline** | Brief, sequence, handoffs, decisions, and evidence | [This repository](skills/orchestrator-pipeline/SKILL.md) |
| ◈ **Taste Skill** | Audience, brand, hierarchy, and visual language | [Leonxlnx](https://github.com/Leonxlnx/taste-skill) |
| ✦ **Build Awwwards-Quality Sites** | Expressive concepts, narrative, imagery, and craft | [MengTo](https://github.com/MengTo/Skills) |
| 〰 **Animate** | Purpose, timing, interruption, and reduced motion | [Emil Kowalski](https://github.com/emilkowalski/skills) |
| ▦ **Web Design Guidelines** | Semantics, accessibility, usability, and responsive checks | [Vercel](https://github.com/vercel-labs/agent-skills) |
| ⬡ **Three.js Best Practices** | Scenes, shaders, assets, and performance when 3D helps | [emalorenzo](https://github.com/emalorenzo/three-agent-skills) |
| ◇ **R3F Best Practices** | React Three Fiber lifecycle and state when using R3F | [emalorenzo](https://github.com/emalorenzo/three-agent-skills) |
| ▣ **shadcn** | Accessible primitives and component registries | [shadcn/ui](https://ui.shadcn.com/docs/skills) |
| ◎ **Playwright CLI** | Focused browser checks for routes, states, and interactions | [Microsoft](https://github.com/microsoft/playwright-cli) |

Installing the ensemble makes the instructions available; the worker **loads only the relevant skills for the task**. A dashboard does not inherit a portfolio's cinematic treatment, and a static page does not need a WebGL scene.

**React Bits is a component registry, not a tenth skill.** The worker uses the free React Bits registry through shadcn MCP when a component has a real job in the interface. **Chrome DevTools MCP is an optional deep diagnostic tool**, not part of the nine skill installs. The paid 21st.dev MCP is not used.

## How it works

| Stage | Worker decision | Deliverable |
| --- | --- | --- |
| **01 · Read** | Inspect users, existing code, design system, content, and references. Decide whether 3D belongs. | A visual thesis, constraints, motion map, and component candidates. |
| **02 · Compose** | Prefer existing UI and accessible primitives; select React Bits only where its behavior strengthens the story. | Working structure and meaningful interaction states. |
| **03 · Choreograph** | Give CSS, GSAP, component motion, and the R3F frame loop clear ownership. Apply Three.js/R3F practices when used. | Coherent motion, cleanup, fallbacks, and reduced motion. |
| **04 · Verify** | Audit guidelines, run code checks, exercise real flows and viewports in the browser, then fix and retest. | Commands, screenshots, observed results, and unresolved limitations. |

The visual references in the [skill itself](skills/orchestrator-pipeline/SKILL.md) include Nothin', Lusion, Noomo, Persepolis, and Corn Revolution. They are studied for hierarchy, pacing, and interaction principles, never copied as identity or assets.

### A component belongs where it helps

| If the page needs… | Reach for… | Ask before shipping… |
| --- | --- | --- |
| Forms, menus, dialogs, data tables | Existing design system or shadcn primitives | Does it work with keyboard, touch, and assistive technology? |
| A memorable hero or work reveal | One carefully adapted React Bits component | Does it advance the content, or merely compete with it? |
| Spatial storytelling or a product demo | Three.js; R3F when React owns the scene | Does a static first frame and non-WebGL path preserve the story? |
| Scroll and state transitions | CSS for simple feedback; GSAP for justified choreography | Who owns each animated property, and how does it stop? |

### Two browser tools, one evidence trail

| Question | First tool | Escalate when needed |
| --- | --- | --- |
| Does the flow work across routes, viewports, and states? | **Playwright CLI** for focused interaction and screenshots | Reproduce the exact route and state in DevTools if the cause remains unclear. |
| Why does a request, frame, layout, or runtime fail? | The most direct browser evidence available | **Chrome DevTools MCP** for console, network, rendering, and performance traces. |

The worker scopes DevTools calls to a concrete question. Its token cost informs that scope; it never overrides the need for useful evidence. Playwright and DevTools sessions may not share cookies or browser state.

The banner uses original editorial layout and verified brand marks from [Simple Icons](https://simpleicons.org/), [Playwright](https://github.com/microsoft/playwright.dev), and [React Bits](https://github.com/DavidHDev/react-bits). Marks identify tools in the ecosystem; they do not imply endorsement.

## Configure the tools

The one-command installer installs **skill instructions**. Browser executables, MCP servers, and project components have separate setup:

1. [Playwright CLI](https://github.com/microsoft/playwright-cli): install or make `@playwright/cli` and a browser available as its official guide describes.
2. [shadcn MCP](https://ui.shadcn.com/docs/mcp): connect the server to your agent. In a compatible React project, **merge** this free registry into the existing `components.json`:

   ```json
   {"registries":{"@react-bits":"https://reactbits.dev/r/{name}.json"}}
   ```

3. [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp): connect it when deep browser investigation will improve the result.

The installer does not modify your MCP configuration or add React components before the worker has inspected the project. The [full skill](skills/orchestrator-pipeline/SKILL.md) contains the selection rules, phase gates, and worker handoff.

## Give it to a worker

```text
Use @orchestrator-pipeline for this interface.
Read the existing project and references. Explain the visual direction, component choices,
motion ownership, and whether 3D serves the product. Implement the complete states.
Validate changed routes with Playwright CLI; use Chrome DevTools MCP for targeted
diagnostics where its deeper evidence helps. Report fixes and browser evidence.
```

## Releasing

The initial `1.0.0` release is public on npm. Subsequent releases use [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/) with the manually triggered [GitHub Actions workflow](.github/workflows/publish.yml). The trust relationship is configured for `klebr55/orchestrator-pipeline-skill` and `publish.yml`, with direct publishing allowed. No long-lived npm token is needed in GitHub Actions.

Update `package.json` and `package-lock.json` to the next unused version, review the documentation and package contents, run `npm test` and `npm pack --dry-run`, then commit the changes to `main`. Run **Publish to npm** from GitHub Actions on `main` and verify the version on [npm](https://www.npmjs.com/package/@klebr55/orchestrator-pipeline-skill). A published name/version pair cannot be reused. The workflow uses GitHub OIDC on a hosted runner and requires Node.js 24 with a current npm CLI.

## Authorship and limits

This repository ships the original orchestration skill and the installer. The eight companion skills are fetched from their authors' repositories under their own licenses; they are not copied into this package. “Awwwards” is an aspiration for craft, not an award or affiliation. Report issues with the project context and a reproducible observation. This repository's own code and documentation are [MIT licensed](LICENSE).
