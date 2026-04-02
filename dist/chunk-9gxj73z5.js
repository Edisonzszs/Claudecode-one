// @bun
import {
  WelcomeV2
} from "./chunk-zwtxdmqb.js";
import {
  ApproveApiKey
} from "./chunk-4jwga1ng.js";
import {
  ThemePicker,
  init_ThemePicker
} from "./chunk-04t6zykk.js";
import {
  PressEnterToContinue,
  init_PressEnterToContinue
} from "./chunk-bvbyrs9g.js";
import {
  ConsoleOAuthFlow,
  Select,
  Spinner,
  getSSLErrorHint,
  init_ConsoleOAuthFlow,
  init_Spinner,
  init_errorUtils,
  init_select
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
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-xsdyx1y2.js";
import"./chunk-9gbamk79.js";
import {
  init_terminalSetup,
  setupTerminal,
  shouldOfferTerminalSetup
} from "./chunk-ksdv7arr.js";
import"./chunk-hfzj1m07.js";
import {
  init_useKeybinding,
  useKeybindings
} from "./chunk-94dpgxzj.js";
import {
  Link,
  Newline,
  ThemedBox_default,
  ThemedText,
  init_ink,
  require_compiler_runtime,
  useTheme
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
  getCustomApiKeyStatus,
  getUserAgent,
  init_auth,
  init_authPortable,
  init_config1 as init_config,
  init_http,
  isAnthropicAuthEnabled,
  normalizeApiKeyForConfig
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
import {
  getOauthConfig,
  init_oauth
} from "./chunk-7ymfj7m3.js";
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
import {
  init_log,
  logError
} from "./chunk-p7g7pf3f.js";
import"./chunk-8tnsngw2.js";
import"./chunk-8bedvdm1.js";
import"./chunk-7wm5s02e.js";
import"./chunk-nxsh6de2.js";
import"./chunk-fbv4apne.js";
import {
  init_envUtils,
  isRunningOnHomespace
} from "./chunk-3r24h7t6.js";
import"./chunk-qqfa0dqg.js";
import"./chunk-hqmz36b3.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import {
  axios_default,
  init_axios
} from "./chunk-xszk7n10.js";
import"./chunk-sdj9b9wh.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/Onboarding.tsx
init_analytics();
init_terminalSetup();
init_useExitOnCtrlCDWithKeybindings();
init_ink();
init_useKeybinding();
init_auth();
init_authPortable();
init_config();
init_env();
init_envUtils();
var import_compiler_runtime4 = __toESM(require_compiler_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// src/utils/preflightChecks.tsx
init_axios();
init_analytics();
init_Spinner();
init_oauth();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// src/hooks/useTimeout.ts
var import_react = __toESM(require_react(), 1);
function useTimeout(delay, resetTrigger) {
  const [isElapsed, setIsElapsed] = import_react.useState(false);
  import_react.useEffect(() => {
    setIsElapsed(false);
    const timer = setTimeout(setIsElapsed, delay, true);
    return () => clearTimeout(timer);
  }, [delay, resetTrigger]);
  return isElapsed;
}

// src/utils/preflightChecks.tsx
init_ink();
init_errorUtils();
init_http();
init_log();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
async function checkEndpoints() {
  try {
    const oauthConfig = getOauthConfig();
    const tokenUrl = new URL(oauthConfig.TOKEN_URL);
    const endpoints = [`${oauthConfig.BASE_API_URL}/api/hello`, `${tokenUrl.origin}/v1/oauth/hello`];
    const checkEndpoint = async (url) => {
      try {
        const response = await axios_default.get(url, {
          headers: {
            "User-Agent": getUserAgent()
          }
        });
        if (response.status !== 200) {
          const hostname = new URL(url).hostname;
          return {
            success: false,
            error: `Failed to connect to ${hostname}: Status ${response.status}`
          };
        }
        return {
          success: true
        };
      } catch (error) {
        const hostname = new URL(url).hostname;
        const sslHint = getSSLErrorHint(error);
        return {
          success: false,
          error: `Failed to connect to ${hostname}: ${error instanceof Error ? error.code || error.message : String(error)}`,
          sslHint: sslHint ?? undefined
        };
      }
    };
    const results = await Promise.all(endpoints.map(checkEndpoint));
    const failedResult = results.find((result) => !result.success);
    if (failedResult) {
      logEvent("tengu_preflight_check_failed", {
        isConnectivityError: false,
        hasErrorMessage: !!failedResult.error,
        isSSLError: !!failedResult.sslHint
      });
    }
    return failedResult || {
      success: true
    };
  } catch (error) {
    logError(error);
    logEvent("tengu_preflight_check_failed", {
      isConnectivityError: true
    });
    return {
      success: false,
      error: `Connectivity check error: ${error instanceof Error ? error.code || error.message : String(error)}`
    };
  }
}
function PreflightStep(t0) {
  const $ = import_compiler_runtime.c(12);
  const {
    onSuccess
  } = t0;
  const [result, setResult] = import_react2.useState(null);
  const [isChecking, setIsChecking] = import_react2.useState(true);
  const showSpinner = useTimeout(1000) && isChecking;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      const run = async function run2() {
        const checkResult = await checkEndpoints();
        setResult(checkResult);
        setIsChecking(false);
      };
      run();
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  import_react2.useEffect(t1, t2);
  let t3;
  let t4;
  if ($[2] !== onSuccess || $[3] !== result) {
    t3 = () => {
      if (result?.success) {
        onSuccess();
      } else {
        if (result && !result.success) {
          const timer = setTimeout(_temp, 100);
          return () => clearTimeout(timer);
        }
      }
    };
    t4 = [result, onSuccess];
    $[2] = onSuccess;
    $[3] = result;
    $[4] = t3;
    $[5] = t4;
  } else {
    t3 = $[4];
    t4 = $[5];
  }
  import_react2.useEffect(t3, t4);
  let t5;
  if ($[6] !== isChecking || $[7] !== result || $[8] !== showSpinner) {
    t5 = isChecking && showSpinner ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      paddingLeft: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "Checking connectivity..."
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : !result?.success && !isChecking && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "error",
          children: "Unable to connect to Anthropic services"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "error",
          children: result?.error
        }, undefined, false, undefined, this),
        result?.sslHint ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          gap: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: result.sslHint
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "suggestion",
              children: "See https://code.claude.com/docs/en/network-config"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          gap: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "Please check your internet connection and network settings."
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                "Note: Claude Code might not be available in your country. Check supported countries at",
                " ",
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color: "suggestion",
                  children: "https://anthropic.com/supported-countries"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[6] = isChecking;
    $[7] = result;
    $[8] = showSpinner;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== t5) {
    t6 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: t5
    }, undefined, false, undefined, this);
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  return t6;
}
function _temp() {
  return process.exit(1);
}

// src/components/Onboarding.tsx
init_ConsoleOAuthFlow();
init_select();
init_PressEnterToContinue();
init_ThemePicker();

// src/components/ui/OrderedList.tsx
init_ink();
var import_compiler_runtime3 = __toESM(require_compiler_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// src/components/ui/OrderedListItem.tsx
init_ink();
var import_compiler_runtime2 = __toESM(require_compiler_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var OrderedListItemContext = import_react3.createContext({
  marker: ""
});
function OrderedListItem(t0) {
  const $ = import_compiler_runtime2.c(7);
  const {
    children
  } = t0;
  const {
    marker
  } = import_react3.useContext(OrderedListItemContext);
  let t1;
  if ($[0] !== marker) {
    t1 = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      dimColor: true,
      children: marker
    }, undefined, false, undefined, this);
    $[0] = marker;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== children) {
    t2 = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children
    }, undefined, false, undefined, this);
    $[2] = children;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      gap: 1,
      children: [
        t1,
        t2
      ]
    }, undefined, true, undefined, this);
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
}

// src/components/ui/OrderedList.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var OrderedListContext = import_react4.createContext({
  marker: ""
});
function OrderedListComponent(t0) {
  const $ = import_compiler_runtime3.c(9);
  const {
    children
  } = t0;
  const {
    marker: parentMarker
  } = import_react4.useContext(OrderedListContext);
  let numberOfItems = 0;
  for (const child of import_react4.default.Children.toArray(children)) {
    if (!import_react4.isValidElement(child) || child.type !== OrderedListItem) {
      continue;
    }
    numberOfItems++;
  }
  const maxMarkerWidth = String(numberOfItems).length;
  let t1;
  if ($[0] !== children || $[1] !== maxMarkerWidth || $[2] !== parentMarker) {
    let t22;
    if ($[4] !== maxMarkerWidth || $[5] !== parentMarker) {
      t22 = (child_0, index) => {
        if (!import_react4.isValidElement(child_0) || child_0.type !== OrderedListItem) {
          return child_0;
        }
        const paddedMarker = `${String(index + 1).padStart(maxMarkerWidth)}.`;
        const marker = `${parentMarker}${paddedMarker}`;
        return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(OrderedListContext.Provider, {
          value: {
            marker
          },
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(OrderedListItemContext.Provider, {
            value: {
              marker
            },
            children: child_0
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this);
      };
      $[4] = maxMarkerWidth;
      $[5] = parentMarker;
      $[6] = t22;
    } else {
      t22 = $[6];
    }
    t1 = import_react4.default.Children.map(children, t22);
    $[0] = children;
    $[1] = maxMarkerWidth;
    $[2] = parentMarker;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[7] !== t1) {
    t2 = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: t1
    }, undefined, false, undefined, this);
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
}
OrderedListComponent.Item = OrderedListItem;
var OrderedList = OrderedListComponent;

// src/components/Onboarding.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
function Onboarding({
  onDone
}) {
  const [currentStepIndex, setCurrentStepIndex] = import_react5.useState(0);
  const [skipOAuth, setSkipOAuth] = import_react5.useState(false);
  const [oauthEnabled] = import_react5.useState(() => isAnthropicAuthEnabled());
  const [theme, setTheme] = useTheme();
  import_react5.useEffect(() => {
    logEvent("tengu_began_setup", {
      oauthEnabled
    });
  }, [oauthEnabled]);
  function goToNextStep() {
    if (currentStepIndex < steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      logEvent("tengu_onboarding_step", {
        oauthEnabled,
        stepId: steps[nextIndex]?.id
      });
    } else {
      onDone();
    }
  }
  function handleThemeSelection(newTheme) {
    setTheme(newTheme);
    goToNextStep();
  }
  const exitState = useExitOnCtrlCDWithKeybindings();
  const themeStep = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    marginX: 1,
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemePicker, {
      onThemeSelect: handleThemeSelection,
      showIntroText: true,
      helpText: "To change this later, run /theme",
      hideEscToCancel: true,
      skipExitHandling: true
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
  const securityStep = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 1,
    paddingLeft: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        bold: true,
        children: "Security notes:"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        width: 70,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(OrderedList, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(OrderedList.Item, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                  children: "Claude can make mistakes"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                  dimColor: true,
                  wrap: "wrap",
                  children: [
                    "You should always review Claude's responses, especially when",
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Newline, {}, undefined, false, undefined, this),
                    "running code.",
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Newline, {}, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(OrderedList.Item, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                  children: "Due to prompt injection risks, only use it with code you trust"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                  dimColor: true,
                  wrap: "wrap",
                  children: [
                    "For more details see:",
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Newline, {}, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Link, {
                      url: "https://code.claude.com/docs/en/security"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(PressEnterToContinue, {}, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  const preflightStep = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(PreflightStep, {
    onSuccess: goToNextStep
  }, undefined, false, undefined, this);
  const apiKeyNeedingApproval = import_react5.useMemo(() => {
    if (!process.env.ANTHROPIC_API_KEY || isRunningOnHomespace()) {
      return "";
    }
    const customApiKeyTruncated = normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY);
    if (getCustomApiKeyStatus(customApiKeyTruncated) === "new") {
      return customApiKeyTruncated;
    }
  }, []);
  function handleApiKeyDone(approved) {
    if (approved) {
      setSkipOAuth(true);
    }
    goToNextStep();
  }
  const steps = [];
  if (oauthEnabled) {
    steps.push({
      id: "preflight",
      component: preflightStep
    });
  }
  steps.push({
    id: "theme",
    component: themeStep
  });
  if (apiKeyNeedingApproval) {
    steps.push({
      id: "api-key",
      component: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ApproveApiKey, {
        customApiKeyTruncated: apiKeyNeedingApproval,
        onDone: handleApiKeyDone
      }, undefined, false, undefined, this)
    });
  }
  if (oauthEnabled) {
    steps.push({
      id: "oauth",
      component: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SkippableStep, {
        skip: skipOAuth,
        onSkip: goToNextStep,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConsoleOAuthFlow, {
          onDone: goToNextStep
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    });
  }
  steps.push({
    id: "security",
    component: securityStep
  });
  if (shouldOfferTerminalSetup()) {
    steps.push({
      id: "terminal-setup",
      component: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            bold: true,
            children: "Use Claude Code's terminal setup?"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            width: 70,
            gap: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                children: [
                  "For the optimal coding experience, enable the recommended settings",
                  /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Newline, {}, undefined, false, undefined, this),
                  "for your terminal:",
                  " ",
                  env.terminal === "Apple_Terminal" ? "Option+Enter for newlines and visual bell" : "Shift+Enter for newlines"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Select, {
                options: [{
                  label: "Yes, use recommended settings",
                  value: "install"
                }, {
                  label: "No, maybe later with /terminal-setup",
                  value: "no"
                }],
                onChange: (value) => {
                  if (value === "install") {
                    setupTerminal(theme).catch(() => {}).finally(goToNextStep);
                  } else {
                    goToNextStep();
                  }
                },
                onCancel: () => goToNextStep()
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                dimColor: true,
                children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
                  children: [
                    "Press ",
                    exitState.keyName,
                    " again to exit"
                  ]
                }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
                  children: "Enter to confirm \xB7 Esc to skip"
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    });
  }
  const currentStep = steps[currentStepIndex];
  const handleSecurityContinue = import_react5.useCallback(() => {
    if (currentStepIndex === steps.length - 1) {
      onDone();
    } else {
      goToNextStep();
    }
  }, [currentStepIndex, steps.length, oauthEnabled, onDone]);
  const handleTerminalSetupSkip = import_react5.useCallback(() => {
    goToNextStep();
  }, [currentStepIndex, steps.length, oauthEnabled, onDone]);
  useKeybindings({
    "confirm:yes": handleSecurityContinue
  }, {
    context: "Confirmation",
    isActive: currentStep?.id === "security"
  });
  useKeybindings({
    "confirm:no": handleTerminalSetupSkip
  }, {
    context: "Confirmation",
    isActive: currentStep?.id === "terminal-setup"
  });
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(WelcomeV2, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          currentStep?.component,
          exitState.pending && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
            padding: 1,
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function SkippableStep(t0) {
  const $ = import_compiler_runtime4.c(4);
  const {
    skip,
    onSkip,
    children
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onSkip || $[1] !== skip) {
    t1 = () => {
      if (skip) {
        onSkip();
      }
    };
    t2 = [skip, onSkip];
    $[0] = onSkip;
    $[1] = skip;
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  import_react5.useEffect(t1, t2);
  if (skip) {
    return null;
  }
  return children;
}
export {
  SkippableStep,
  Onboarding
};
