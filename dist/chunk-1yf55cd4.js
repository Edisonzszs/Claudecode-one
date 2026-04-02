// @bun
import {
  BashTool,
  ShellProgressMessage,
  UserBashInputMessage,
  createSyntheticUserCaveatMessage,
  createUserInterruptionMessage,
  createUserMessage,
  escapeXml,
  exports_PowerShellTool,
  init_BashTool,
  init_PowerShellTool,
  init_ShellProgressMessage,
  init_UserBashInputMessage,
  init_messages1 as init_messages,
  init_shellToolUtils,
  init_toolResultStorage,
  init_xml,
  isPowerShellToolEnabled,
  prepareUserContent,
  processToolResultBlock
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
  init_ink,
  require_compiler_runtime
} from "./chunk-g83s4r1f.js";
import"./chunk-7m2nd8da.js";
import"./chunk-ps49ymvj.js";
import {
  require_jsx_dev_runtime
} from "./chunk-7sgtxrsc.js";
import"./chunk-629hw6xs.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-9nk4ajz5.js";
import"./chunk-m06q12hg.js";
import"./chunk-qy4qw6e5.js";
import {
  getInitialSettings,
  init_settings1 as init_settings
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
  ShellError,
  errorMessage,
  init_errors
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
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/processUserInput/processBashCommand.tsx
import { randomUUID } from "crypto";

// src/components/BashModeProgress.tsx
init_ink();
init_BashTool();
init_UserBashInputMessage();
init_ShellProgressMessage();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function BashModeProgress(t0) {
  const $ = import_compiler_runtime.c(8);
  const {
    input,
    progress,
    verbose
  } = t0;
  const t1 = `<bash-input>${input}</bash-input>`;
  let t2;
  if ($[0] !== t1) {
    t2 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(UserBashInputMessage, {
      addMargin: false,
      param: {
        text: t1,
        type: "text"
      }
    }, undefined, false, undefined, this);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== progress || $[3] !== verbose) {
    t3 = progress ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShellProgressMessage, {
      fullOutput: progress.fullOutput,
      output: progress.output,
      elapsedTimeSeconds: progress.elapsedTimeSeconds,
      totalLines: progress.totalLines,
      verbose
    }, undefined, false, undefined, this) : BashTool.renderToolUseProgressMessage?.([], {
      verbose,
      tools: [],
      terminalSize: undefined
    });
    $[2] = progress;
    $[3] = verbose;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t2 || $[6] !== t3) {
    t4 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        t2,
        t3
      ]
    }, undefined, true, undefined, this);
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
}

// src/utils/processUserInput/processBashCommand.tsx
init_BashTool();
init_analytics();
init_errors();
init_messages();

// src/utils/shell/resolveDefaultShell.ts
init_settings();
function resolveDefaultShell() {
  return getInitialSettings().defaultShell ?? "bash";
}

// src/utils/processUserInput/processBashCommand.tsx
init_shellToolUtils();
init_toolResultStorage();
init_xml();
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
async function processBashCommand(inputString, precedingInputBlocks, attachmentMessages, context, setToolJSX) {
  const usePowerShell = isPowerShellToolEnabled() && resolveDefaultShell() === "powershell";
  logEvent("tengu_input_bash", {
    powershell: usePowerShell
  });
  const userMessage = createUserMessage({
    content: prepareUserContent({
      inputString: `<bash-input>${inputString}</bash-input>`,
      precedingInputBlocks
    })
  });
  let jsx;
  setToolJSX({
    jsx: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(BashModeProgress, {
      input: inputString,
      progress: null,
      verbose: context.options.verbose
    }, undefined, false, undefined, this),
    shouldHidePromptInput: false
  });
  try {
    const bashModeContext = {
      ...context,
      setToolJSX: (_) => {
        jsx = _?.jsx;
      }
    };
    const onProgress = (progress) => {
      setToolJSX({
        jsx: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(BashModeProgress, {
              input: inputString,
              progress: progress.data,
              verbose: context.options.verbose
            }, undefined, false, undefined, this),
            jsx
          ]
        }, undefined, true, undefined, this),
        shouldHidePromptInput: false,
        showSpinner: false
      });
    };
    let PowerShellTool = null;
    if (usePowerShell) {
      PowerShellTool = (init_PowerShellTool(), __toCommonJS(exports_PowerShellTool)).PowerShellTool;
    }
    const shellTool = PowerShellTool ?? BashTool;
    const response = PowerShellTool ? await PowerShellTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, undefined, undefined, onProgress) : await BashTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, undefined, undefined, onProgress);
    const data = response.data;
    if (!data) {
      throw new Error("No result received from shell command");
    }
    const stderr = data.stderr;
    const mapped = await processToolResultBlock(shellTool, {
      ...data,
      stderr: ""
    }, randomUUID());
    const stdout = typeof mapped.content === "string" ? mapped.content : escapeXml(data.stdout);
    return {
      messages: [createSyntheticUserCaveatMessage(), userMessage, ...attachmentMessages, createUserMessage({
        content: `<bash-stdout>${stdout}</bash-stdout><bash-stderr>${escapeXml(stderr)}</bash-stderr>`
      })],
      shouldQuery: false
    };
  } catch (e) {
    if (e instanceof ShellError) {
      if (e.interrupted) {
        return {
          messages: [createSyntheticUserCaveatMessage(), userMessage, createUserInterruptionMessage({
            toolUse: false
          }), ...attachmentMessages],
          shouldQuery: false
        };
      }
      return {
        messages: [createSyntheticUserCaveatMessage(), userMessage, ...attachmentMessages, createUserMessage({
          content: `<bash-stdout>${escapeXml(e.stdout)}</bash-stdout><bash-stderr>${escapeXml(e.stderr)}</bash-stderr>`
        })],
        shouldQuery: false
      };
    }
    return {
      messages: [createSyntheticUserCaveatMessage(), userMessage, ...attachmentMessages, createUserMessage({
        content: `<bash-stderr>Command failed: ${escapeXml(errorMessage(e))}</bash-stderr>`
      })],
      shouldQuery: false
    };
  } finally {
    setToolJSX(null);
  }
}
export {
  processBashCommand
};
