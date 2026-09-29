---
name: orchestrator-pipeline
description: Orchestrate delegated frontend and UI implementation with shadcn MCP plus React Bits, Taste, Build Awwwards-Quality Sites, Animate, Web Design Guidelines, Playwright CLI, and targeted Chrome DevTools MCP; apply Three.js and R3F best practices when 3D is relevant. Use when planning, delegating, or executing interface work with another worker.
---

# Orchestrator Pipeline

Give the worker one coherent design and engineering brief. Treat the resources below as complementary expertise, not a checklist of effects or packages to install. Inspect the existing project before choosing a visual direction. Preserve its identity, data meaning, functional flows, accessibility, security, and explicit constraints. Respect narrower project instructions and the user's authorization.

## Resource routing

| Resource | Role and invocation |
| --- | --- |
| Taste Skill (`design-taste-frontend`) | For landing pages, portfolios, and redesigns: infer audience, brand, visual direction, and hierarchy. Its marketing guidance does not govern dashboard interactions. |
| Build Awwwards-Quality Sites | For expressive marketing, editorial, and portfolio work: define a coherent concept, media, narrative, and quality bar. Use its applicable craft principles in other interfaces without importing cinematic recipes. |
| Animate | For requested or justified motion: decide if it should animate, name its purpose, choose the cheapest suitable tool, then implement interruption, exit, and reduced-motion behavior. |
| shadcn MCP + free React Bits registry | Search accessible UI primitives in shadcn and, for justified expressive pieces, browse the `@react-bits` registry through the same MCP. Inspect the actual component source and dependencies before adopting it. |
| Web Design Guidelines | Audit changed interface code and fix applicable accessibility, semantic, interaction, and responsive issues using current rules. |
| Playwright CLI | Default live browser loop for routes, states, interactions, responsive captures, and repeatable checks with focused output. |
| Chrome DevTools MCP | Targeted second lens for difficult console or network issues, layout/rendering diagnosis, and performance traces. Use whenever its deeper evidence materially improves the result, regardless of token cost. |
| three-best-practices | Load when adding, changing, or auditing Three.js, WebGL/WebGPU scenes, shaders, assets, or rendering performance. |
| r3f-best-practices | Additionally load when the implementation uses React Three Fiber or its ecosystem. |

Load only skills relevant to the task. Before implementation, verify that the worker can read each chosen skill and use the browser or registry tools needed for the planned work. Check the project setup and permissions; install or connect missing capabilities through their official instructions if authorized and possible. A configured MCP entry is not proof that a tool works. If a tool is unavailable, use an authorized equivalent that provides the needed evidence, record the limitation, and continue work that does not depend on it. Do not buy a subscription, invent an API key, or claim an unrun check passed.

Sources: [Taste](https://github.com/Leonxlnx/taste-skill), [Awwwards skill](https://github.com/MengTo/Skills/tree/main/agent-skills/web-design/build-awwwards-quality-sites), [Animate](https://github.com/emilkowalski/skills/tree/main/skills/animate), [Web Design Guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines), [shadcn MCP](https://ui.shadcn.com/docs/mcp), [React Bits MCP setup](https://www.reactbits.dev/get-started/mcp), [React Bits source](https://github.com/DavidHDev/react-bits), [Playwright CLI](https://github.com/microsoft/playwright-cli), [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp), [Three.js practices](https://github.com/threejs/three.js), [R3F](https://r3f.docs.pmnd.rs/).

## 1. Read the project and decide what belongs

Inventory framework, dependencies, components, design system, routes, users, constraints, and current behavior. Inspect user-provided references for hierarchy, pacing, transitions, spatial behavior, and interaction feedback. Treat [Nothin'](https://www.noth.in/#works), [Lusion](https://lusion.co/), [Noomo](https://noomoagency.com/), [Persepolis](https://persepolis.getty.edu/), and [Corn Revolution](https://cornrevolution.resn.global/#science) as examples of craft to analyze when relevant, never as code or assets to reproduce. Form a brief visual thesis and motion map for the actual product.

Use Taste within its stated scope; use Awwwards for expressive direction and its applicable quality checks. Do not combine Taste with `Frontend Design Skill`. Existing design systems take priority over unrelated registry components. For dense or frequent-use applications, prioritize stable information, restrained motion, and accessible controls. A memorable experience can be quiet; no skill obliges a WebGL scene or animated background.

**Gate:** report the intended structure, visual thesis, motion purposes, component candidates, browser strategy, and the reason for using or skipping 3D.

## 2. Discover and fit components

Use the shadcn MCP for established primitives, behavior, and accessibility. In a React project that benefits from expressive motion, configure the free React Bits registry in the project's existing `components.json` and search it through shadcn MCP:

```json
{"registries":{"@react-bits":"https://reactbits.dev/r/{name}.json"}}
```

Merge the entry with existing configuration; do not replace the project's design system or registry list. Verify the actual registry item and choose the project's React, TypeScript/JavaScript, and CSS/Tailwind variant. If MCP access is unavailable, consult the official React Bits catalog and install a verified item through the shadcn CLI only when compatible. The free registry does not require React Bits Pro access.

Choose a component by its **job**, not its spectacle:

| Need | Suitable placement | Avoid |
| --- | --- | --- |
| Accessible forms, menus, dialogs, tables | Existing system or shadcn primitives in task flows | Decorative replacements for keyboard and data behavior |
| Text reveal or headline emphasis | Rare hero or section transition where it supports the story | Every heading, changing values, or essential content hidden until animation |
| Pointer-reactive image, grid, or card | Portfolio/work showcase with a clear reveal or preview purpose | Dense result lists and essential touch-only interactions |
| Ambient background or shader | A bounded focal region with readable text and static fallback | Competing effects across the whole page or heavy effects behind data |
| Feedback microinteraction | A state change whose meaning becomes clearer | Repeated controls where animation delays the action |

Preview each candidate and inspect its source, props, dependencies, licensing, accessibility, reduced-motion behavior, touch/keyboard support, bundle and runtime cost. Adapt typography, color, spacing, timing, and transitions to the page's authored visual language. Limit effects to focal moments; compose sections from real content. If no candidate fits, implement with project-native components. Do not silently substitute a paid registry.

**Gate:** show selected components and why each belongs, adapted states, and functioning interactions. Record when no registry component fits.

## 3. Build one coordinated motion and 3D system

Apply Animate's ordered decision to each proposed interaction. Favor CSS for simple feedback; use the existing motion stack for sequences. Where the Awwwards skill prescribes GSAP for a suitable expressive site, use it as the page's choreography owner. Do not let GSAP, a React Bits component, CSS animation, and an R3F frame loop write the same property independently. Define ownership and lifecycle for scroll, pointer, camera, DOM transforms, and shader uniforms. Use one smooth-scroll engine at most, integrated with ScrollTrigger if present; synchronize scene state through refs/uniforms and bounded updates instead of forcing React renders every frame.

Introduce Three.js or WebGL only when spatial depth, navigation, storytelling, or product demonstration benefits. Use `three-best-practices` for resource disposal, frame scheduling, pixel ratio, assets, and performance. If using R3F, also apply `r3f-best-practices` for `Canvas`, `useFrame`, state isolation, events, loading, and cleanup. Choose plain Three.js or R3F to match the architecture; do not run two competing renderers for one scene. Verify pointer and scroll coordination, resize, page visibility, unmount, and WebGL context loss. Preserve a meaningful static first frame or poster, semantic DOM content, keyboard path, touch behavior, and a reduced-motion mode that presents the final state without a running decorative scene.

**Gate:** review desktop and mobile composition, focus, contrast, reduced motion, and scene frame stability. Explain how the chosen design and motion skills affected the implementation. For 3D, report measured performance and fallback behavior on a representative device or emulator.

## 4. Audit and validate in the browser

Run current Web Design Guidelines against changed code, fix relevant findings, and execute project lint, typecheck, focused tests, and build. Distinguish existing failures from regressions.

Use Playwright CLI for the normal live loop: open affected routes, exercise core flows and keyboard paths, resize to relevant viewports, capture focused screenshots, and verify reduced motion and error/empty states. Prefer targeted snapshots, `find`, and focused evidence over dumping whole page trees. Use Chrome DevTools MCP when you need source-mapped console details, network requests, performance traces, memory or frame diagnosis, or when visual behavior remains unexplained. Both can be used on the same local build; do not assume they share browser state, authentication, or cookies. Reproduce the exact route and state and correlate evidence by viewport and interaction. Keep DevTools investigation scoped to the concrete question; pay the token cost when insight merits it. If a required browser surface cannot run, say which checks remain unverified and provide any static checks completed.

**Gate:** report exact commands and outcomes, guideline findings, routes and viewport sizes, interaction and screenshot evidence, console/network/performance findings where investigated, fixes and retests, and unresolved limits. Never declare visual validation from a build alone.

## Worker handoff

Adapt this prompt to the project and its permissions. Ask for phase checkpoints; do not require a new agent if the current worker can do the job.

```text
Task: [specific interface work]
Context: [framework, routes, existing design system, constraints, references]
Acceptance: [observable behavior and quality targets]

Use orchestrator-pipeline. Inspect the codebase and load the relevant installed skills: Taste for landing/portfolio/redesign; Build Awwwards-Quality Sites for expressive sites; Animate when creating motion; Web Design Guidelines for the changed UI; three-best-practices for Three.js/WebGL; additionally r3f-best-practices when using R3F. Verify access to shadcn MCP and the free @react-bits registry if compatible components would help. Use Playwright CLI for routine live checks and Chrome DevTools MCP for targeted deeper diagnosis when justified. Read official setup when a needed capability is missing, use a suitable available equivalent where possible, and report any check you cannot perform.

Phase 1: Read project and references; report design read, motion map, components and 3D decision.
Phase 2: Implement working structure and states using existing components, shadcn primitives, and selectively chosen React Bits components.
Phase 3: Integrate coherent motion and justified 3D with reduced-motion, static, touch and keyboard fallbacks, lifecycle cleanup and performance checks.
Phase 4: Audit guidelines, run project checks, validate affected routes and states with Playwright CLI, use DevTools for unresolved or deep issues, fix and retest.

Preserve project conventions, data semantics and unrelated changes. Report evidence at each phase. Follow the user's and repository's version-control and deployment authorization; never claim checks or tools you did not run.
```
