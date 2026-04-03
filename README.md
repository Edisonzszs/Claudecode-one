# Claude Code One

A complete functional reproduction of Anthropic's Claude Code CLI, based on official source map (v2.1.88).

## Overview

Claude Code One is a research project that implements the Claude Code CLI functionality. This project is based on:
- Official Claude Code source map (v2.1.88) for type and module reference

## Features

- ✅ Full CLI functionality (REPL mode, pipe mode)
- ✅ 27 built-in tools (Bash, Read, Edit, Write, Glob, Grep, WebFetch, etc.)
- ✅ Multi-provider support (Anthropic, AWS Bedrock, Google Vertex, Azure)
- ✅ MCP (Model Context Protocol) integration
- ✅ Cross-platform (Windows, macOS, Linux)

## Requirements

- [Bun](https://bun.sh/) >= 1.3.11
- or Node.js >= 18

## Installation

```bash
# Clone the repository
git clone https://github.com/Edisonzszs/Claudecode-one.git
cd Claudecode-one

# Install dependencies
bun install
```

## Usage

### Development Mode

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Run with Node.js

```bash
node dist/cli.js
```

### Pipe Mode

```bash
echo "your prompt" | bun run dev -- -p
```

### CLI Options

```bash
bun run dev -- --help
```

## Project Status

| Milestone | Status | Description |
|-----------|--------|-------------|
| M1: Project Init | ✅ | Directory structure and identity |
| M2: Type Fix | ✅ | TypeScript error reduction (0 source errors) |
| M3: Core Modules | ✅ | Query engine and API layer |
| M4: Tools | ✅ | Tool system verification (27 tools) |
| M5: Tests | ✅ | All tests passing (2009/2009) |
| M6: Release | ✅ | Build verification |

## Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| Windows | ✅ | Requires Git Bash |
| macOS | ✅ | Full support |
| Linux | ✅ | Full support |
| WSL | ✅ | Full support |

## License

MIT License - This project is for research and learning purposes only.

All rights to Claude Code belong to [Anthropic](https://www.anthropic.com/).

## Contributors

- [Edisonzszs](https://github.com/Edisonzszs) - Repository Owner
- [Claude](https://www.anthropic.com/) - AI Assistant

---

**Disclaimer:** This is an unofficial reproduction for educational purposes. It is not affiliated with, endorsed by, or connected to Anthropic.