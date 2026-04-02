// @bun
import {
  Select,
  gracefulShutdownSync,
  init_CustomSelect,
  init_gracefulShutdown
} from "./chunk-44qpntvw.js";
import"./chunk-whr270jq.js";
import"./chunk-1ffzkqd7.js";
import"./chunk-y44d9q0r.js";
import"./chunk-t0rgmccj.js";
import"./chunk-sn7kzc5g.js";
import {
  Dialog,
  init_Dialog
} from "./chunk-9fabv7ym.js";
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
  Link,
  Newline,
  ThemedBox_default,
  ThemedText,
  init_ink,
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
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/BypassPermissionsModeDialog.tsx
init_analytics();
init_ink();
init_gracefulShutdown();
init_settings();
init_CustomSelect();
init_Dialog();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function BypassPermissionsModeDialog(t0) {
  const $ = import_compiler_runtime.c(7);
  const {
    onAccept
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  import_react.default.useEffect(_temp, t1);
  let t2;
  if ($[1] !== onAccept) {
    t2 = function onChange2(value) {
      bb3:
        switch (value) {
          case "accept": {
            logEvent("tengu_bypass_permissions_mode_dialog_accept", {});
            updateSettingsForSource("userSettings", {
              skipDangerousModePermissionPrompt: true
            });
            onAccept();
            break bb3;
          }
          case "decline": {
            gracefulShutdownSync(1);
          }
        }
    };
    $[1] = onAccept;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const onChange = t2;
  const handleEscape = _temp2;
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Newline, {}, undefined, false, undefined, this),
            "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged."
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
          url: "https://code.claude.com/docs/en/security"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "No, exit",
      value: "decline"
    }, {
      label: "Yes, I accept",
      value: "accept"
    }];
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] !== onChange) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "WARNING: Claude Code running in Bypass Permissions mode",
      color: "error",
      onCancel: handleEscape,
      children: [
        t3,
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options: t4,
          onChange: (value_0) => onChange(value_0)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[5] = onChange;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  return t5;
}
function _temp2() {
  gracefulShutdownSync(0);
}
function _temp() {
  logEvent("tengu_bypass_permissions_mode_dialog_shown", {});
}
export {
  BypassPermissionsModeDialog
};
