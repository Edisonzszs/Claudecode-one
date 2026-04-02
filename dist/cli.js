#!/usr/bin/env bun
// @bun
import {
  __require
} from "./chunk-qp2qdcda.js";

// src/entrypoints/cli.tsx
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  const existing = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = existing ? `${existing} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
if (false) {}
async function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && (args[0] === "--version" || args[0] === "-v" || args[0] === "-V")) {
    console.log(`${"1.0.4"} (Claude Code)`);
    return;
  }
  const { profileCheckpoint } = await import("./chunk-sjqtqj35.js");
  profileCheckpoint("cli_entry");
  if (false) {}
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    profileCheckpoint("cli_claude_in_chrome_mcp_path");
    const { runClaudeInChromeMcpServer } = await import("./chunk-2y7r1a1s.js");
    await runClaudeInChromeMcpServer();
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    profileCheckpoint("cli_chrome_native_host_path");
    const { runChromeNativeHost } = await import("./chunk-77g09znh.js");
    await runChromeNativeHost();
    return;
  } else if (false) {}
  if (false) {}
  if (false) {}
  if (false) {}
  if (false) {
    switch (args[0]) {
      case "ps":
      case "logs":
      case "attach":
      case "kill":
      default:
    }
  }
  if (false) {}
  if (false) {}
  if (false) {}
  const hasTmuxFlag = args.includes("--tmux") || args.includes("--tmux=classic");
  if (hasTmuxFlag && (args.includes("-w") || args.includes("--worktree") || args.some((a) => a.startsWith("--worktree=")))) {
    profileCheckpoint("cli_tmux_worktree_fast_path");
    const { enableConfigs } = await import("./chunk-hq602tzd.js");
    enableConfigs();
    const { isWorktreeModeEnabled } = await import("./chunk-pwwa7s62.js");
    if (isWorktreeModeEnabled()) {
      const { execIntoTmuxWorktree } = await import("./chunk-5k9kg2r7.js");
      const result = await execIntoTmuxWorktree(args);
      if (result.handled) {
        return;
      }
      if (result.error) {
        const { exitWithError } = await import("./chunk-y1784krc.js");
        exitWithError(result.error);
      }
    }
  }
  if (args.length === 1 && (args[0] === "--update" || args[0] === "--upgrade")) {
    process.argv = [process.argv[0], process.argv[1], "update"];
  }
  if (args.includes("--bare")) {
    process.env.CLAUDE_CODE_SIMPLE = "1";
  }
  const { startCapturingEarlyInput } = await import("./chunk-ywxd4qw4.js");
  startCapturingEarlyInput();
  profileCheckpoint("cli_before_main_import");
  const { main: cliMain } = await import("./chunk-g0qbbfzd.js");
  profileCheckpoint("cli_after_main_import");
  await cliMain();
  profileCheckpoint("cli_after_main_complete");
}
main();
