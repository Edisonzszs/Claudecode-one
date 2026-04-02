// @bun
import {
  getDoctorDiagnostic,
  getLatestVersion,
  getPackageManager,
  gracefulShutdown,
  init_autoUpdater,
  init_doctorDiagnostic,
  init_gracefulShutdown,
  init_localInstaller,
  init_nativeInstaller,
  init_packageManagers,
  installGlobalPackage,
  installLatest,
  installOrUpdateClaudePackage,
  localInstallationExists,
  removeInstalledSymlink
} from "./chunk-44qpntvw.js";
import"./chunk-whr270jq.js";
import"./chunk-1ffzkqd7.js";
import"./chunk-y44d9q0r.js";
import"./chunk-t0rgmccj.js";
import"./chunk-sn7kzc5g.js";
import"./chunk-9fabv7ym.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-mv1sx2wx.js";
import"./chunk-azqqdp5f.js";
import"./chunk-3be7ka25.js";
import"./chunk-fhaznd5y.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-45kxdsp8.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-h4gnnr43.js";
import"./chunk-xsdyx1y2.js";
import"./chunk-9gbamk79.js";
import {
  init_completionCache,
  regenerateCompletionCache
} from "./chunk-ksdv7arr.js";
import"./chunk-hfzj1m07.js";
import"./chunk-94dpgxzj.js";
import"./chunk-g83s4r1f.js";
import"./chunk-7m2nd8da.js";
import {
  gte,
  init_semver
} from "./chunk-ps49ymvj.js";
import"./chunk-7sgtxrsc.js";
import"./chunk-629hw6xs.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-9nk4ajz5.js";
import"./chunk-m06q12hg.js";
import"./chunk-qy4qw6e5.js";
import {
  getGlobalConfig,
  getInitialSettings,
  init_config1 as init_config,
  init_settings1 as init_settings,
  init_source,
  saveGlobalConfig,
  source_default
} from "./chunk-9y3y1bsh.js";
import"./chunk-e3g8q4cn.js";
import"./chunk-ctw5jwcd.js";
import"./chunk-vratq94g.js";
import"./chunk-f51cmsb8.js";
import"./chunk-0e1xsncc.js";
import"./chunk-g0j0t6qk.js";
import"./chunk-3c25bcsw.js";
import"./chunk-tjaqa99q.js";
import"./chunk-55wgxwa9.js";
import"./chunk-spqaamnc.js";
import"./chunk-4jm600zv.js";
import"./chunk-w2z5pqd3.js";
import"./chunk-7ymfj7m3.js";
import"./chunk-f5ma3nh5.js";
import"./chunk-qz2x630m.js";
import"./chunk-cvge4pvp.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-x14dq3v1.js";
import"./chunk-cdz5yb0r.js";
import {
  init_analytics,
  logEvent
} from "./chunk-h0rbjg6x.js";
import"./chunk-7z8j9qfn.js";
import"./chunk-hrzerbfw.js";
import"./chunk-d18z9pna.js";
import"./chunk-qnfx3qtx.js";
import"./chunk-hjhc4cpt.js";
import"./chunk-vyc0rjyx.js";
import"./chunk-hx2tr4ep.js";
import"./chunk-p7g7pf3f.js";
import"./chunk-8tnsngw2.js";
import"./chunk-8bedvdm1.js";
import"./chunk-7wm5s02e.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-nxsh6de2.js";
import {
  init_process,
  writeToStdout
} from "./chunk-fbv4apne.js";
import"./chunk-3r24h7t6.js";
import"./chunk-qqfa0dqg.js";
import"./chunk-hqmz36b3.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import"./chunk-xszk7n10.js";
import"./chunk-sdj9b9wh.js";
import"./chunk-qp2qdcda.js";

// src/cli/update.ts
init_source();
init_analytics();
init_autoUpdater();
init_completionCache();
init_config();
init_debug();
init_doctorDiagnostic();
init_gracefulShutdown();
init_localInstaller();
init_nativeInstaller();
init_packageManagers();
init_process();
init_semver();
init_settings();
async function update() {
  logEvent("tengu_update_check", {});
  writeToStdout(`Current version: ${"1.0.4"}
`);
  const channel = getInitialSettings()?.autoUpdatesChannel ?? "latest";
  writeToStdout(`Checking for updates to ${channel} version...
`);
  logForDebugging("update: Starting update check");
  logForDebugging("update: Running diagnostic");
  const diagnostic = await getDoctorDiagnostic();
  logForDebugging(`update: Installation type: ${diagnostic.installationType}`);
  logForDebugging(`update: Config install method: ${diagnostic.configInstallMethod}`);
  if (diagnostic.multipleInstallations.length > 1) {
    writeToStdout(`
`);
    writeToStdout(source_default.yellow("Warning: Multiple installations found") + `
`);
    for (const install of diagnostic.multipleInstallations) {
      const current = diagnostic.installationType === install.type ? " (currently running)" : "";
      writeToStdout(`- ${install.type} at ${install.path}${current}
`);
    }
  }
  if (diagnostic.warnings.length > 0) {
    writeToStdout(`
`);
    for (const warning of diagnostic.warnings) {
      logForDebugging(`update: Warning detected: ${warning.issue}`);
      logForDebugging(`update: Showing warning: ${warning.issue}`);
      writeToStdout(source_default.yellow(`Warning: ${warning.issue}
`));
      writeToStdout(source_default.bold(`Fix: ${warning.fix}
`));
    }
  }
  const config = getGlobalConfig();
  if (!config.installMethod && diagnostic.installationType !== "package-manager") {
    writeToStdout(`
`);
    writeToStdout(`Updating configuration to track installation method...
`);
    let detectedMethod = "unknown";
    switch (diagnostic.installationType) {
      case "npm-local":
        detectedMethod = "local";
        break;
      case "native":
        detectedMethod = "native";
        break;
      case "npm-global":
        detectedMethod = "global";
        break;
      default:
        detectedMethod = "unknown";
    }
    saveGlobalConfig((current) => ({
      ...current,
      installMethod: detectedMethod
    }));
    writeToStdout(`Installation method set to: ${detectedMethod}
`);
  }
  if (diagnostic.installationType === "development") {
    writeToStdout(`
`);
    writeToStdout(source_default.yellow("Warning: Cannot update development build") + `
`);
    await gracefulShutdown(1);
  }
  if (diagnostic.installationType === "package-manager") {
    const packageManager = await getPackageManager();
    writeToStdout(`
`);
    if (packageManager === "homebrew") {
      writeToStdout(`Claude is managed by Homebrew.
`);
      const latest = await getLatestVersion(channel);
      if (latest && !gte("1.0.4", latest)) {
        writeToStdout(`Update available: ${"1.0.4"} \u2192 ${latest}
`);
        writeToStdout(`
`);
        writeToStdout(`To update, run:
`);
        writeToStdout(source_default.bold("  brew upgrade claude-code") + `
`);
      } else {
        writeToStdout(`Claude is up to date!
`);
      }
    } else if (packageManager === "winget") {
      writeToStdout(`Claude is managed by winget.
`);
      const latest = await getLatestVersion(channel);
      if (latest && !gte("1.0.4", latest)) {
        writeToStdout(`Update available: ${"1.0.4"} \u2192 ${latest}
`);
        writeToStdout(`
`);
        writeToStdout(`To update, run:
`);
        writeToStdout(source_default.bold("  winget upgrade Anthropic.ClaudeCode") + `
`);
      } else {
        writeToStdout(`Claude is up to date!
`);
      }
    } else if (packageManager === "apk") {
      writeToStdout(`Claude is managed by apk.
`);
      const latest = await getLatestVersion(channel);
      if (latest && !gte("1.0.4", latest)) {
        writeToStdout(`Update available: ${"1.0.4"} \u2192 ${latest}
`);
        writeToStdout(`
`);
        writeToStdout(`To update, run:
`);
        writeToStdout(source_default.bold("  apk upgrade claude-code") + `
`);
      } else {
        writeToStdout(`Claude is up to date!
`);
      }
    } else {
      writeToStdout(`Claude is managed by a package manager.
`);
      writeToStdout(`Please use your package manager to update.
`);
    }
    await gracefulShutdown(0);
  }
  if (config.installMethod && diagnostic.configInstallMethod !== "not set" && diagnostic.installationType !== "package-manager") {
    const runningType = diagnostic.installationType;
    const configExpects = diagnostic.configInstallMethod;
    const typeMapping = {
      "npm-local": "local",
      "npm-global": "global",
      native: "native",
      development: "development",
      unknown: "unknown"
    };
    const normalizedRunningType = typeMapping[runningType] || runningType;
    if (normalizedRunningType !== configExpects && configExpects !== "unknown") {
      writeToStdout(`
`);
      writeToStdout(source_default.yellow("Warning: Configuration mismatch") + `
`);
      writeToStdout(`Config expects: ${configExpects} installation
`);
      writeToStdout(`Currently running: ${runningType}
`);
      writeToStdout(source_default.yellow(`Updating the ${runningType} installation you are currently using`) + `
`);
      saveGlobalConfig((current) => ({
        ...current,
        installMethod: normalizedRunningType
      }));
      writeToStdout(`Config updated to reflect current installation method: ${normalizedRunningType}
`);
    }
  }
  if (diagnostic.installationType === "native") {
    logForDebugging("update: Detected native installation, using native updater");
    try {
      const result = await installLatest(channel, true);
      if (result.lockFailed) {
        const pidInfo = result.lockHolderPid ? ` (PID ${result.lockHolderPid})` : "";
        writeToStdout(source_default.yellow(`Another Claude process${pidInfo} is currently running. Please try again in a moment.`) + `
`);
        await gracefulShutdown(0);
      }
      if (!result.latestVersion) {
        process.stderr.write(`Failed to check for updates
`);
        await gracefulShutdown(1);
      }
      if (result.latestVersion === "1.0.4") {
        writeToStdout(source_default.green(`Claude Code is up to date (${"1.0.4"})`) + `
`);
      } else {
        writeToStdout(source_default.green(`Successfully updated from ${"1.0.4"} to version ${result.latestVersion}`) + `
`);
        await regenerateCompletionCache();
      }
      await gracefulShutdown(0);
    } catch (error) {
      process.stderr.write(`Error: Failed to install native update
`);
      process.stderr.write(String(error) + `
`);
      process.stderr.write(`Try running "claude doctor" for diagnostics
`);
      await gracefulShutdown(1);
    }
  }
  if (config.installMethod !== "native") {
    await removeInstalledSymlink();
  }
  logForDebugging("update: Checking npm registry for latest version");
  logForDebugging(`update: Package URL: ${""}`);
  const npmTag = channel === "stable" ? "stable" : "latest";
  const npmCommand = `npm view ${""}@${npmTag} version`;
  logForDebugging(`update: Running: ${npmCommand}`);
  const latestVersion = await getLatestVersion(channel);
  logForDebugging(`update: Latest version from npm: ${latestVersion || "FAILED"}`);
  if (!latestVersion) {
    logForDebugging("update: Failed to get latest version from npm registry");
    process.stderr.write(source_default.red("Failed to check for updates") + `
`);
    process.stderr.write(`Unable to fetch latest version from npm registry
`);
    process.stderr.write(`
`);
    process.stderr.write(`Possible causes:
`);
    process.stderr.write(`  \u2022 Network connectivity issues
`);
    process.stderr.write(`  \u2022 npm registry is unreachable
`);
    process.stderr.write(`  \u2022 Corporate proxy/firewall blocking npm
`);
    if ("") {}
    process.stderr.write(`
`);
    process.stderr.write(`Try:
`);
    process.stderr.write(`  \u2022 Check your internet connection
`);
    process.stderr.write(`  \u2022 Run with --debug flag for more details
`);
    const packageName = process.env.USER_TYPE === "ant" ? "@anthropic-ai/claude-cli" : "@anthropic-ai/claude-code";
    process.stderr.write(`  \u2022 Manually check: npm view ${packageName} version
`);
    process.stderr.write(`  \u2022 Check if you need to login: npm whoami
`);
    await gracefulShutdown(1);
  }
  if (latestVersion === "1.0.4") {
    writeToStdout(source_default.green(`Claude Code is up to date (${"1.0.4"})`) + `
`);
    await gracefulShutdown(0);
  }
  writeToStdout(`New version available: ${latestVersion} (current: ${"1.0.4"})
`);
  writeToStdout(`Installing update...
`);
  let useLocalUpdate = false;
  let updateMethodName = "";
  switch (diagnostic.installationType) {
    case "npm-local":
      useLocalUpdate = true;
      updateMethodName = "local";
      break;
    case "npm-global":
      useLocalUpdate = false;
      updateMethodName = "global";
      break;
    case "unknown": {
      const isLocal = await localInstallationExists();
      useLocalUpdate = isLocal;
      updateMethodName = isLocal ? "local" : "global";
      writeToStdout(source_default.yellow("Warning: Could not determine installation type") + `
`);
      writeToStdout(`Attempting ${updateMethodName} update based on file detection...
`);
      break;
    }
    default:
      process.stderr.write(`Error: Cannot update ${diagnostic.installationType} installation
`);
      await gracefulShutdown(1);
  }
  writeToStdout(`Using ${updateMethodName} installation update method...
`);
  logForDebugging(`update: Update method determined: ${updateMethodName}`);
  logForDebugging(`update: useLocalUpdate: ${useLocalUpdate}`);
  let status;
  if (useLocalUpdate) {
    logForDebugging("update: Calling installOrUpdateClaudePackage() for local update");
    status = await installOrUpdateClaudePackage(channel);
  } else {
    logForDebugging("update: Calling installGlobalPackage() for global update");
    status = await installGlobalPackage();
  }
  logForDebugging(`update: Installation status: ${status}`);
  switch (status) {
    case "success":
      writeToStdout(source_default.green(`Successfully updated from ${"1.0.4"} to version ${latestVersion}`) + `
`);
      await regenerateCompletionCache();
      break;
    case "no_permissions":
      process.stderr.write(`Error: Insufficient permissions to install update
`);
      if (useLocalUpdate) {
        process.stderr.write(`Try manually updating with:
`);
        process.stderr.write(`  cd ~/.claude/local && npm update ${""}
`);
      } else {
        process.stderr.write(`Try running with sudo or fix npm permissions
`);
        process.stderr.write(`Or consider using native installation with: claude install
`);
      }
      await gracefulShutdown(1);
      break;
    case "install_failed":
      process.stderr.write(`Error: Failed to install update
`);
      if (useLocalUpdate) {
        process.stderr.write(`Try manually updating with:
`);
        process.stderr.write(`  cd ~/.claude/local && npm update ${""}
`);
      } else {
        process.stderr.write(`Or consider using native installation with: claude install
`);
      }
      await gracefulShutdown(1);
      break;
    case "in_progress":
      process.stderr.write(`Error: Another instance is currently performing an update
`);
      process.stderr.write(`Please wait and try again later
`);
      await gracefulShutdown(1);
      break;
  }
  await gracefulShutdown(0);
}
export {
  update
};
