// @bun
import {
  ValidationErrorsList,
  init_ValidationErrorsList
} from "./chunk-vfn5av1g.js";
import {
  Select,
  init_CustomSelect
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
  ThemedText,
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

// src/components/InvalidSettingsDialog.tsx
init_ink();
init_CustomSelect();
init_Dialog();
init_ValidationErrorsList();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function InvalidSettingsDialog(t0) {
  const $ = import_compiler_runtime.c(13);
  const {
    settingsErrors,
    onContinue,
    onExit
  } = t0;
  let t1;
  if ($[0] !== onContinue || $[1] !== onExit) {
    t1 = function handleSelect2(value) {
      if (value === "exit") {
        onExit();
      } else {
        onContinue();
      }
    };
    $[0] = onContinue;
    $[1] = onExit;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleSelect = t1;
  let t2;
  if ($[3] !== settingsErrors) {
    t2 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ValidationErrorsList, {
      errors: settingsErrors
    }, undefined, false, undefined, this);
    $[3] = settingsErrors;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: "Files with errors are skipped entirely, not just the invalid settings."
    }, undefined, false, undefined, this);
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "Exit and fix manually",
      value: "exit"
    }, {
      label: "Continue without these settings",
      value: "continue"
    }];
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== handleSelect) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
      options: t4,
      onChange: handleSelect
    }, undefined, false, undefined, this);
    $[7] = handleSelect;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== onExit || $[10] !== t2 || $[11] !== t5) {
    t6 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Settings Error",
      onCancel: onExit,
      color: "warning",
      children: [
        t2,
        t3,
        t5
      ]
    }, undefined, true, undefined, this);
    $[9] = onExit;
    $[10] = t2;
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  return t6;
}
export {
  InvalidSettingsDialog
};
