// @bun
import {
  getBaseRenderOptions
} from "./chunk-v399mzxk.js";
import {
  AppStateProvider,
  KeybindingSetup,
  Select,
  init_AppState,
  init_CustomSelect,
  init_KeybindingProviderSetup
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
  ThemedBox_default,
  ThemedText,
  init_ink,
  render,
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
import {
  init_slowOperations,
  jsonStringify,
  writeFileSync_DEPRECATED
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

// src/components/InvalidConfigDialog.tsx
init_ink();
init_KeybindingProviderSetup();
init_AppState();
var import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
init_slowOperations();
init_CustomSelect();
init_Dialog();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function InvalidConfigDialog(t0) {
  const $ = import_compiler_runtime.c(19);
  const {
    filePath,
    errorDescription,
    onExit,
    onReset
  } = t0;
  let t1;
  if ($[0] !== onExit || $[1] !== onReset) {
    t1 = (value) => {
      if (value === "exit") {
        onExit();
      } else {
        onReset();
      }
    };
    $[0] = onExit;
    $[1] = onReset;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleSelect = t1;
  let t2;
  if ($[3] !== filePath) {
    t2 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        "The configuration file at ",
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          children: filePath
        }, undefined, false, undefined, this),
        " contains invalid JSON."
      ]
    }, undefined, true, undefined, this);
    $[3] = filePath;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== errorDescription) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: errorDescription
    }, undefined, false, undefined, this);
    $[5] = errorDescription;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== t2 || $[8] !== t3) {
    t4 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        t2,
        t3
      ]
    }, undefined, true, undefined, this);
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      bold: true,
      children: "Choose an option:"
    }, undefined, false, undefined, this);
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = [{
      label: "Exit and fix manually",
      value: "exit"
    }, {
      label: "Reset with default configuration",
      value: "reset"
    }];
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== handleSelect || $[13] !== onExit) {
    t7 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        t5,
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options: t6,
          onChange: handleSelect,
          onCancel: onExit
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[12] = handleSelect;
    $[13] = onExit;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== onExit || $[16] !== t4 || $[17] !== t7) {
    t8 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Configuration Error",
      color: "error",
      onCancel: onExit,
      children: [
        t4,
        t7
      ]
    }, undefined, true, undefined, this);
    $[15] = onExit;
    $[16] = t4;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  return t8;
}
var SAFE_ERROR_THEME_NAME = "dark";
async function showInvalidConfigDialog({
  error
}) {
  const renderOptions = {
    ...getBaseRenderOptions(false),
    theme: SAFE_ERROR_THEME_NAME
  };
  await new Promise(async (resolve) => {
    const {
      unmount
    } = await render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeybindingSetup, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(InvalidConfigDialog, {
          filePath: error.filePath,
          errorDescription: error.message,
          onExit: () => {
            unmount();
            resolve();
            process.exit(1);
          },
          onReset: () => {
            writeFileSync_DEPRECATED(error.filePath, jsonStringify(error.defaultConfig, null, 2), {
              flush: false,
              encoding: "utf8"
            });
            unmount();
            resolve();
            process.exit(0);
          }
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this), renderOptions);
  });
}
export {
  showInvalidConfigDialog
};
