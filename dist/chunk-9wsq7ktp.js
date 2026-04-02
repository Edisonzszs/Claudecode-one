// @bun
import {
  StatusIcon,
  init_StatusIcon
} from "./chunk-zpmb93p9.js";
import {
  checkInstall,
  cleanupNpmInstallations,
  cleanupShellAliases,
  init_nativeInstaller,
  installLatest
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
import"./chunk-ksdv7arr.js";
import"./chunk-hfzj1m07.js";
import"./chunk-94dpgxzj.js";
import {
  ThemedBox_default,
  ThemedText,
  init_ink,
  render,
  require_compiler_runtime
} from "./chunk-g83s4r1f.js";
import"./chunk-7m2nd8da.js";
import"./chunk-ps49ymvj.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-7sgtxrsc.js";
import"./chunk-629hw6xs.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-9nk4ajz5.js";
import"./chunk-m06q12hg.js";
import"./chunk-qy4qw6e5.js";
import {
  getInitialSettings,
  init_settings1 as init_settings,
  updateSettingsForSource
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
import {
  env,
  init_env
} from "./chunk-w2z5pqd3.js";
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
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-nxsh6de2.js";
import"./chunk-fbv4apne.js";
import"./chunk-3r24h7t6.js";
import"./chunk-qqfa0dqg.js";
import"./chunk-hqmz36b3.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import"./chunk-xszk7n10.js";
import"./chunk-sdj9b9wh.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/install.tsx
init_analytics();
init_StatusIcon();
init_ink();
init_debug();
init_env();
init_errors();
init_nativeInstaller();
init_settings();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
import { homedir } from "os";
import { join } from "path";
function getInstallationPath() {
  const isWindows = env.platform === "win32";
  const homeDir = homedir();
  if (isWindows) {
    const windowsPath = join(homeDir, ".local", "bin", "claude.exe");
    return windowsPath.replace(/\//g, "\\");
  }
  return "~/.local/bin/claude";
}
function SetupNotes(t0) {
  const $ = import_compiler_runtime.c(5);
  const {
    messages
  } = t0;
  if (messages.length === 0) {
    return null;
  }
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "warning",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
            status: "warning",
            withSpace: true
          }, undefined, false, undefined, this),
          "Setup notes:"
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== messages) {
    t2 = messages.map(_temp);
    $[1] = messages;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 0,
      marginBottom: 1,
      children: [
        t1,
        t2
      ]
    }, undefined, true, undefined, this);
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function _temp(message, index) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    marginLeft: 2,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        "\u2022 ",
        message
      ]
    }, undefined, true, undefined, this)
  }, index, false, undefined, this);
}
function Install({
  onDone,
  force,
  target
}) {
  const [state, setState] = import_react.useState({
    type: "checking"
  });
  import_react.useEffect(() => {
    async function run() {
      try {
        logForDebugging(`Install: Starting installation process (force=${force}, target=${target})`);
        const channelOrVersion = target || getInitialSettings()?.autoUpdatesChannel || "latest";
        setState({
          type: "installing",
          version: channelOrVersion
        });
        logForDebugging(`Install: Calling installLatest(channelOrVersion=${channelOrVersion}, forceReinstall=${force})`);
        const result = await installLatest(channelOrVersion, force);
        logForDebugging(`Install: installLatest returned version=${result.latestVersion}, wasUpdated=${result.wasUpdated}, lockFailed=${result.lockFailed}`);
        if (result.lockFailed) {
          throw new Error("Could not install - another process is currently installing Claude. Please try again in a moment.");
        }
        if (!result.latestVersion) {
          logForDebugging("Install: Failed to retrieve version information during install", {
            level: "error"
          });
        }
        if (!result.wasUpdated) {
          logForDebugging("Install: Already up to date");
        }
        setState({
          type: "setting-up"
        });
        const setupMessages = await checkInstall(true);
        logForDebugging(`Install: Setup launcher completed with ${setupMessages.length} messages`);
        if (setupMessages.length > 0) {
          setupMessages.forEach((msg) => logForDebugging(`Install: Setup message: ${msg.message}`));
        }
        logForDebugging("Install: Cleaning up npm installations after successful install");
        const {
          removed,
          errors,
          warnings
        } = await cleanupNpmInstallations();
        if (removed > 0) {
          logForDebugging(`Cleaned up ${removed} npm installation(s)`);
        }
        if (errors.length > 0) {
          logForDebugging(`Cleanup errors: ${errors.join(", ")}`);
        }
        const aliasMessages = await cleanupShellAliases();
        if (aliasMessages.length > 0) {
          logForDebugging(`Shell alias cleanup: ${aliasMessages.map((m) => m.message).join("; ")}`);
        }
        logEvent("tengu_claude_install_command", {
          has_version: result.latestVersion ? 1 : 0,
          forced: force ? 1 : 0
        });
        if (target === "latest" || target === "stable") {
          updateSettingsForSource("userSettings", {
            autoUpdatesChannel: target
          });
          logForDebugging(`Install: Saved autoUpdatesChannel=${target} to user settings`);
        }
        const allWarnings = [...warnings, ...aliasMessages.map((m_0) => m_0.message)];
        if (setupMessages.length > 0) {
          setState({
            type: "set-up",
            messages: setupMessages.map((m_1) => m_1.message)
          });
          setTimeout(setState, 2000, {
            type: "success",
            version: result.latestVersion || "current",
            setupMessages: [...setupMessages.map((m_2) => m_2.message), ...allWarnings]
          });
        } else {
          logForDebugging("Install: Shell PATH already configured");
          setState({
            type: "success",
            version: result.latestVersion || "current",
            setupMessages: allWarnings.length > 0 ? allWarnings : undefined
          });
        }
      } catch (error) {
        logForDebugging(`Install command failed: ${error}`, {
          level: "error"
        });
        setState({
          type: "error",
          message: errorMessage(error)
        });
      }
    }
    run();
  }, [force, target]);
  import_react.useEffect(() => {
    if (state.type === "success") {
      setTimeout(onDone, 2000, "Claude Code installation completed successfully", {
        display: "system"
      });
    } else if (state.type === "error") {
      setTimeout(onDone, 3000, "Claude Code installation failed", {
        display: "system"
      });
    }
  }, [state, onDone]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      state.type === "checking" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "claude",
        children: "Checking installation status..."
      }, undefined, false, undefined, this),
      state.type === "cleaning-npm" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "warning",
        children: "Cleaning up old npm installations..."
      }, undefined, false, undefined, this),
      state.type === "installing" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "claude",
        children: [
          "Installing Claude Code native build ",
          state.version,
          "..."
        ]
      }, undefined, true, undefined, this),
      state.type === "setting-up" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "claude",
        children: "Setting up launcher and shell integration..."
      }, undefined, false, undefined, this),
      state.type === "set-up" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetupNotes, {
        messages: state.messages
      }, undefined, false, undefined, this),
      state.type === "success" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
                status: "success",
                withSpace: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "success",
                bold: true,
                children: "Claude Code successfully installed!"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            flexDirection: "column",
            gap: 1,
            children: [
              state.version !== "current" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Version: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "claude",
                    children: state.version
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Location: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "text",
                    children: getInstallationPath()
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            flexDirection: "column",
            gap: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: "Next: Run "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color: "claude",
                  bold: true,
                  children: "claude --help"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: " to get started"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          state.setupMessages && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetupNotes, {
            messages: state.setupMessages
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      state.type === "error" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
                status: "error",
                withSpace: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "error",
                children: "Installation failed"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "error",
            children: state.message
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Try running with --force to override checks"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var install = {
  type: "local-jsx",
  name: "install",
  description: "Install Claude Code native build",
  argumentHint: "[options]",
  async call(onDone, _context, args) {
    const force = args.includes("--force");
    const nonFlagArgs = args.filter((arg) => !arg.startsWith("--"));
    const target = nonFlagArgs[0];
    const {
      unmount
    } = await render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(Install, {
      onDone: (result, options) => {
        unmount();
        onDone(result, options);
      },
      force,
      target
    }, undefined, false, undefined, this));
  }
};
export {
  install
};
