// @bun
import {
  AppStateProvider,
  checkOutTeleportedSessionBranch,
  init_AppState,
  init_teleport,
  processMessagesForTeleportResume,
  teleportResumeCodeSession
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
  require_compiler_runtime,
  useAnimationFrame
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
import"./chunk-9y3y1bsh.js";
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
import"./chunk-h0rbjg6x.js";
import"./chunk-7z8j9qfn.js";
import"./chunk-hrzerbfw.js";
import"./chunk-d18z9pna.js";
import"./chunk-qnfx3qtx.js";
import"./chunk-hjhc4cpt.js";
import"./chunk-vyc0rjyx.js";
import {
  figures_default,
  init_figures
} from "./chunk-hx2tr4ep.js";
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
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/TeleportProgress.tsx
init_figures();
init_ink();
init_AppState();
init_teleport();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SPINNER_FRAMES = ["\u25D0", "\u25D3", "\u25D1", "\u25D2"];
var STEPS = [{
  key: "validating",
  label: "Validating session"
}, {
  key: "fetching_logs",
  label: "Fetching session logs"
}, {
  key: "fetching_branch",
  label: "Getting branch info"
}, {
  key: "checking_out",
  label: "Checking out branch"
}];
function TeleportProgress(t0) {
  const $ = import_compiler_runtime.c(16);
  const {
    currentStep,
    sessionId
  } = t0;
  const [ref, time] = useAnimationFrame(100);
  const frame = Math.floor(time / 100) % SPINNER_FRAMES.length;
  let t1;
  if ($[0] !== currentStep) {
    t1 = (s) => s.key === currentStep;
    $[0] = currentStep;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentStepIndex = STEPS.findIndex(t1);
  const t2 = SPINNER_FRAMES[frame];
  let t3;
  if ($[2] !== t2) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      marginBottom: 1,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        color: "claude",
        children: [
          t2,
          " Teleporting session\u2026"
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== sessionId) {
    t4 = sessionId && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      marginBottom: 1,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: sessionId
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[4] = sessionId;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== currentStepIndex || $[7] !== frame) {
    t5 = STEPS.map((step, index) => {
      const isComplete = index < currentStepIndex;
      const isCurrent = index === currentStepIndex;
      const isPending = index > currentStepIndex;
      let icon;
      let color;
      if (isComplete) {
        icon = figures_default.tick;
        color = "green";
      } else {
        if (isCurrent) {
          icon = SPINNER_FRAMES[frame];
          color = "claude";
        } else {
          icon = figures_default.circle;
          color = undefined;
        }
      }
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            width: 2,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color,
              dimColor: isPending,
              children: icon
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: isPending,
            bold: isCurrent,
            children: step.label
          }, undefined, false, undefined, this)
        ]
      }, step.key, true, undefined, this);
    });
    $[6] = currentStepIndex;
    $[7] = frame;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t5) {
    t6 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginLeft: 2,
      children: t5
    }, undefined, false, undefined, this);
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] !== ref || $[12] !== t3 || $[13] !== t4 || $[14] !== t6) {
    t7 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      ref,
      flexDirection: "column",
      paddingX: 1,
      paddingY: 1,
      children: [
        t3,
        t4,
        t6
      ]
    }, undefined, true, undefined, this);
    $[11] = ref;
    $[12] = t3;
    $[13] = t4;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
async function teleportWithProgress(root, sessionId) {
  let setStep = () => {};
  function TeleportProgressWrapper() {
    const [step, _setStep] = import_react.useState("validating");
    setStep = _setStep;
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportProgress, {
      currentStep: step,
      sessionId
    }, undefined, false, undefined, this);
  }
  root.render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportProgressWrapper, {}, undefined, false, undefined, this)
  }, undefined, false, undefined, this));
  const result = await teleportResumeCodeSession(sessionId, setStep);
  setStep("checking_out");
  const {
    branchName,
    branchError
  } = await checkOutTeleportedSessionBranch(result.branch);
  return {
    messages: processMessagesForTeleportResume(result.log, branchError),
    branchName
  };
}
export {
  teleportWithProgress,
  TeleportProgress
};
