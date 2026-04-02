// @bun
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-nrm24gcj.js";
import {
  getDisplayedEffortLevel,
  getEffortEnvOverride,
  getEffortValueDescription,
  init_AppState,
  init_effort,
  isEffortLevel,
  toPersistableEffort,
  useAppState,
  useSetAppState
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
import"./chunk-nxsh6de2.js";
import"./chunk-fbv4apne.js";
import"./chunk-3r24h7t6.js";
import"./chunk-qqfa0dqg.js";
import"./chunk-hqmz36b3.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import"./chunk-xszk7n10.js";
import"./chunk-sdj9b9wh.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/effort/effort.tsx
function setEffortValue(effortValue) {
  const persistable = toPersistableEffort(effortValue);
  if (persistable !== undefined) {
    const result = updateSettingsForSource("userSettings", {
      effortLevel: persistable
    });
    if (result.error) {
      return {
        message: `Failed to set effort level: ${result.error.message}`
      };
    }
  }
  logEvent("tengu_effort_command", {
    effort: effortValue
  });
  const envOverride = getEffortEnvOverride();
  if (envOverride !== undefined && envOverride !== effortValue) {
    const envRaw = process.env.CLAUDE_CODE_EFFORT_LEVEL;
    if (persistable === undefined) {
      return {
        message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${envRaw} overrides effort this session, and ${effortValue} is session-only (nothing saved)`,
        effortUpdate: {
          value: effortValue
        }
      };
    }
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${envRaw} overrides this session \u2014 clear it and ${effortValue} takes over`,
      effortUpdate: {
        value: effortValue
      }
    };
  }
  const description = getEffortValueDescription(effortValue);
  const suffix = persistable !== undefined ? "" : " (this session only)";
  return {
    message: `Set effort level to ${effortValue}${suffix}: ${description}`,
    effortUpdate: {
      value: effortValue
    }
  };
}
function showCurrentEffort(appStateEffort, model) {
  const envOverride = getEffortEnvOverride();
  const effectiveValue = envOverride === null ? undefined : envOverride ?? appStateEffort;
  if (effectiveValue === undefined) {
    const level = getDisplayedEffortLevel(model, appStateEffort);
    return {
      message: `Effort level: auto (currently ${level})`
    };
  }
  const description = getEffortValueDescription(effectiveValue);
  return {
    message: `Current effort level: ${effectiveValue} (${description})`
  };
}
function unsetEffortLevel() {
  const result = updateSettingsForSource("userSettings", {
    effortLevel: undefined
  });
  if (result.error) {
    return {
      message: `Failed to set effort level: ${result.error.message}`
    };
  }
  logEvent("tengu_effort_command", {
    effort: "auto"
  });
  const envOverride = getEffortEnvOverride();
  if (envOverride !== undefined && envOverride !== null) {
    const envRaw = process.env.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `Cleared effort from settings, but CLAUDE_CODE_EFFORT_LEVEL=${envRaw} still controls this session`,
      effortUpdate: {
        value: undefined
      }
    };
  }
  return {
    message: "Effort level set to auto",
    effortUpdate: {
      value: undefined
    }
  };
}
function executeEffort(args) {
  const normalized = args.toLowerCase();
  if (normalized === "auto" || normalized === "unset") {
    return unsetEffortLevel();
  }
  if (!isEffortLevel(normalized)) {
    return {
      message: `Invalid argument: ${args}. Valid options are: low, medium, high, max, auto`
    };
  }
  return setEffortValue(normalized);
}
function ShowCurrentEffort(t0) {
  const {
    onDone
  } = t0;
  const effortValue = useAppState(_temp);
  const model = useMainLoopModel();
  const {
    message
  } = showCurrentEffort(effortValue, model);
  onDone(message);
  return null;
}
function _temp(s) {
  return s.effortValue;
}
function ApplyEffortAndClose(t0) {
  const $ = import_compiler_runtime.c(6);
  const {
    result,
    onDone
  } = t0;
  const setAppState = useSetAppState();
  const {
    effortUpdate,
    message
  } = result;
  let t1;
  let t2;
  if ($[0] !== effortUpdate || $[1] !== message || $[2] !== onDone || $[3] !== setAppState) {
    t1 = () => {
      if (effortUpdate) {
        setAppState((prev) => ({
          ...prev,
          effortValue: effortUpdate.value
        }));
      }
      onDone(message);
    };
    t2 = [setAppState, effortUpdate, message, onDone];
    $[0] = effortUpdate;
    $[1] = message;
    $[2] = onDone;
    $[3] = setAppState;
    $[4] = t1;
    $[5] = t2;
  } else {
    t1 = $[4];
    t2 = $[5];
  }
  React.useEffect(t1, t2);
  return null;
}
async function call(onDone, _context, args) {
  args = args?.trim() || "";
  if (COMMON_HELP_ARGS.includes(args)) {
    onDone(`Usage: /effort [low|medium|high|max|auto]

Effort levels:
- low: Quick, straightforward implementation
- medium: Balanced approach with standard testing
- high: Comprehensive implementation with extensive testing
- max: Maximum capability with deepest reasoning (Opus 4.6 only)
- auto: Use the default effort level for your model`);
    return;
  }
  if (!args || args === "current" || args === "status") {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShowCurrentEffort, {
      onDone
    }, undefined, false, undefined, this);
  }
  const result = executeEffort(args);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ApplyEffortAndClose, {
    result,
    onDone
  }, undefined, false, undefined, this);
}
var import_compiler_runtime, React, jsx_dev_runtime, COMMON_HELP_ARGS;
var init_effort2 = __esm(() => {
  init_useMainLoopModel();
  init_analytics();
  init_AppState();
  init_effort();
  init_settings();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  React = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  COMMON_HELP_ARGS = ["help", "-h", "--help"];
});
init_effort2();

export {
  showCurrentEffort,
  executeEffort,
  call
};
