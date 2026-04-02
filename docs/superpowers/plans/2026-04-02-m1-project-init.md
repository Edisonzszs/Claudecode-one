# Claude Code One Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create claude-code-one, a complete functional reproduction of Anthropic's Claude Code CLI, based on claude-code-main with type and module supplements from sourcemap.

**Architecture:** Incremental补全 approach - start from claude-code-main's working codebase, systematically supplement missing types and modules from sourcemap while preserving existing engineering infrastructure (build/test/lint).

**Tech Stack:** Bun runtime, TypeScript/TSX, React (Ink terminal UI), Anthropic SDK, MCP SDK, Commander.js

---

## File Structure

This plan covers M1 (Project Initialization). Subsequent milestones will have separate plan documents.

### Files Modified in M1:

| File | Purpose | Change Type |
|------|---------|-------------|
| `package.json` | Project identity | Modify: name, version, description |
| `CLAUDE.md` | Claude Code guidance | Modify: project description |
| `README.md` | Project documentation | Rewrite: new project intro |
| `scripts/defines.ts` | Build MACRO defines | Modify: VERSION constant |
| `.gitignore` | Git ignore rules | Verify/adjust if needed |

### Directories Created:

| Directory | Purpose |
|-----------|---------|
| `claude-code-one/` | New project root (copied from claude-code-main) |

---

## Milestone 1: Project Initialization

### Task 1: Copy Base Project

**Files:**
- Source: `claude-code-main/claude-code-main/`
- Target: `claude-code-one/`

- [ ] **Step 1: Copy entire directory**

```bash
cp -r "F:/AI AGENT/Claude code/claude code 复现/claude-code-main/claude-code-main" "F:/AI AGENT/Claude code/claude code 复现/claude-code-one"
```

Expected: Directory `claude-code-one` created with all files

- [ ] **Step 2: Verify copy completed**

```bash
ls -la "F:/AI AGENT/Claude code/claude code 复现/claude-code-one"
```

Expected output: List of files including `package.json`, `src/`, `packages/`, `build.ts`

---

### Task 2: Update package.json Identity

**Files:**
- Modify: `claude-code-one/package.json`

- [ ] **Step 1: Read current package.json**

```bash
cat "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/package.json"
```

Expected: Current name is `"claude-js"`, version `"1.0.3"`

- [ ] **Step 2: Update name and version**

Edit `package.json` lines 2-4:

```json
{
  "name": "claude-code-one",
  "version": "1.0.4",
  "description": "Claude Code One - A complete functional reproduction of Anthropic's Claude Code CLI",
```

- [ ] **Step 3: Update author and repository**

Edit `package.json` lines 6-14:

```json
  "author": "claude-code-one",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/claude-code-one/claude-code-one.git"
  },
  "homepage": "https://github.com/claude-code-one/claude-code-one#readme",
  "bugs": {
    "url": "https://github.com/claude-code-one/claude-code-one/issues"
  },
```

- [ ] **Step 4: Update bin entry**

Edit `package.json` line 28:

```json
  "bin": {
    "claude-one": "dist/cli.js"
  },
```

- [ ] **Step 5: Verify changes**

```bash
cat "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/package.json" | head -30
```

Expected: name is `"claude-code-one"`, version `"1.0.4"`

---

### Task 3: Update CLAUDE.md

**Files:**
- Modify: `claude-code-one/CLAUDE.md`

- [ ] **Step 1: Read current CLAUDE.md**

```bash
head -20 "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/CLAUDE.md"
```

- [ ] **Step 2: Update project overview section**

Edit `CLAUDE.md` lines 5-8:

```markdown
## Project Overview

Claude Code One is a complete functional reproduction of Anthropic's official Claude Code CLI tool. Based on the claude-code-best reverse-engineering effort with type and module supplements from the official sourcemap (v2.1.88).
```

- [ ] **Step 3: Verify changes**

```bash
head -10 "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/CLAUDE.md"
```

Expected: First line shows project description for claude-code-one

---

### Task 4: Rewrite README.md

**Files:**
- Modify: `claude-code-one/README.md`

- [ ] **Step 1: Create new README header**

Replace the entire README.md content with:

```markdown
# Claude Code One

A complete functional reproduction of Anthropic's Claude Code CLI.

## Overview

Claude Code One is based on:
- **claude-code-best**: Reverse-engineered implementation with engineering infrastructure
- **sourcemap (v2.1.88)**: Official source map for type and module supplements

## Status

| Milestone | Status | Description |
|-----------|--------|-------------|
| M1: Project Init | ✅ | Directory structure and identity |
| M2: Type Fix | 🚧 | TypeScript error reduction |
| M3: Core Modules | 🚧 | Query engine and API layer |
| M4: Tools | 🚧 | Tool system alignment |
| M5: Tests | 🚧 | Test coverage > 80% |
| M6: Release | 🚧 | Build verification |

## Quick Start

### Requirements

- [Bun](https://bun.sh/) >= 1.3.11

### Installation

```bash
bun install
```

### Development

```bash
# Development mode (shows version 888)
bun run dev

# Build
bun run build

# Test
bun test
```

## License

This project is for research and learning purposes only. All rights to Claude Code belong to [Anthropic](https://www.anthropic.com/).
```

- [ ] **Step 2: Verify README**

```bash
head -30 "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/README.md"
```

Expected: Title is "Claude Code One"

---

### Task 5: Update MACRO Defines

**Files:**
- Modify: `claude-code-one/scripts/defines.ts`

- [ ] **Step 1: Read current defines.ts**

```bash
cat "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/scripts/defines.ts"
```

- [ ] **Step 2: Update VERSION constant**

Edit `scripts/defines.ts` line 11:

```typescript
// Change from:
"MACRO.VERSION": JSON.stringify("2.1.888"),
// To:
"MACRO.VERSION": JSON.stringify("1.0.4"),
```

- [ ] **Step 3: Verify changes**

```bash
grep "MACRO.VERSION" "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/scripts/defines.ts"
```

Expected: Output shows `"MACRO.VERSION": JSON.stringify("1.0.4")`

---

### Task 6: Install and Verify Dependencies

**Files:**
- Verify: `claude-code-one/bun.lock`

- [ ] **Step 1: Navigate to project directory**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one"
```

- [ ] **Step 2: Install dependencies**

```bash
bun install
```

Expected: Dependencies installed successfully, no errors

- [ ] **Step 3: Verify installation**

```bash
ls node_modules | head -20
```

Expected: node_modules contains installed packages

---

### Task 7: Verify Development Mode

**Files:**
- Verify: `claude-code-one/src/entrypoints/cli.tsx`

- [ ] **Step 1: Run development mode**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && bun run dev -- --version
```

Expected: Shows version number (dev mode typically shows 888 or 1.0.4)

- [ ] **Step 2: Check for errors**

If errors occur, check the output and verify:
- `src/entrypoints/cli.tsx` exists
- MACRO defines are properly injected

- [ ] **Step 3: Record result**

Document the output for reference.

---

### Task 8: Verify Build Process

**Files:**
- Create: `claude-code-one/dist/cli.js`

- [ ] **Step 1: Run build**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && bun run build
```

Expected: Build completes without errors, creates `dist/` directory

- [ ] **Step 2: Verify dist directory**

```bash
ls -la "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/dist"
```

Expected: `dist/cli.js` and multiple `.chunk.js` files

- [ ] **Step 3: Count chunk files**

```bash
ls "F:/AI AGENT/Claude code/claude code 复现/claude-code-one/dist"/*.js | wc -l
```

Expected: Approximately 450+ files

---

### Task 9: Verify Node.js Compatibility

**Files:**
- Verify: `claude-code-one/dist/cli.js`

- [ ] **Step 1: Run with Node.js**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && node dist/cli.js --version
```

Expected: Shows version number without errors

- [ ] **Step 2: Run with Bun**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && bun dist/cli.js --version
```

Expected: Shows same version number

---

### Task 10: Run Existing Tests

**Files:**
- Verify: `claude-code-one/tests/`

- [ ] **Step 1: Run test suite**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && bun test
```

Expected: Tests run, summary shows pass/fail count

- [ ] **Step 2: Check test results**

Document test results:
- Total tests: (expected ~1286)
- Passed: (expected all)
- Failed: (expected 0)

---

### Task 11: Initialize Git Repository

**Files:**
- Create: `claude-code-one/.git/`

- [ ] **Step 1: Initialize git**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && git init
```

Expected: Git repository initialized

- [ ] **Step 2: Add all files**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && git add .
```

- [ ] **Step 3: Create initial commit**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && git commit -m "$(cat <<'EOF'
init: claude-code-one project initialization

Based on claude-code-best with identity updates:
- package.json: name -> claude-code-one, version -> 1.0.4
- CLAUDE.md: updated project description
- README.md: rewritten for claude-code-one
- scripts/defines.ts: VERSION -> 1.0.4

Verified: bun install, bun run dev, bun run build, bun test all pass

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 4: Verify commit**

```bash
cd "F:/AI AGENT/Claude code/claude code 复现/claude-code-one" && git log --oneline -1
```

Expected: Shows initial commit

---

## M1 Completion Checklist

- [ ] Directory copied from claude-code-main
- [ ] package.json identity updated (name, version, description)
- [ ] CLAUDE.md project description updated
- [ ] README.md rewritten
- [ ] scripts/defines.ts VERSION updated
- [ ] `bun install` successful
- [ ] `bun run dev` runs without errors
- [ ] `bun run build` produces dist/
- [ ] `node dist/cli.js --version` works
- [ ] `bun dist/cli.js --version` works
- [ ] `bun test` passes
- [ ] Git repository initialized with commit

---

## Next Milestones Preview

### M2: Type System Fix (Day 3-5)

Will be detailed in separate plan document. Key tasks:
- Supplement `src/types/global.d.ts` from sourcemap
- Supplement `src/types/internal-modules.d.ts` from sourcemap
- Fix `src/types/message.ts` type hierarchy
- Supplement `src/types/permissions.ts`
- Add tool schema types

### M3: Core Module Alignment (Day 6-10)

- Merge query.ts differences
- Merge QueryEngine.ts differences
- Verify API provider adapters
- Verify context.ts completeness
- Verify commands.ts registration

### M4: Tool System (Day 11-15)

- Add missing tool stubs (MonitorTool, SendUserFileTool, OverflowTestTool)
- Verify AgentTool implementation
- Verify WebFetchTool implementation
- Verify WebSearchTool implementation
- Verify Cron tools implementation

### M5: Test Coverage (Day 16-18)

- Add tool schema tests
- Add query.ts tests
- Add QueryEngine.ts tests
- Add integration tests

### M6: Release Preparation (Day 19-20)

- Final build verification
- Node.js/Bun dual runtime test
- Documentation update
- Release checklist