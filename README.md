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
| M2: Type Fix | ✅ | TypeScript error reduction (0 source errors) |
| M3: Core Modules | ✅ | Query engine and API layer |
| M4: Tools | ✅ | Tool system verification (27 tools) |
| M5: Tests | ✅ | All tests passing (2009/2009) |
| M6: Release | ✅ | Build verification |

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