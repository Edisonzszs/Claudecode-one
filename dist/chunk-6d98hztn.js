// @bun
import {
  getGlobalConfig,
  init_config1 as init_config,
  saveGlobalConfig
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
import"./chunk-w2z5pqd3.js";
import"./chunk-7ymfj7m3.js";
import"./chunk-f5ma3nh5.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x14dq3v1.js";
import"./chunk-cdz5yb0r.js";
import {
  init_analytics,
  logEvent
} from "./chunk-h0rbjg6x.js";
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/vim/vim.ts
var call = async () => {
  const config = getGlobalConfig();
  let currentMode = config.editorMode || "normal";
  if (currentMode === "emacs") {
    currentMode = "normal";
  }
  const newMode = currentMode === "normal" ? "vim" : "normal";
  saveGlobalConfig((current) => ({
    ...current,
    editorMode: newMode
  }));
  logEvent("tengu_editor_mode_changed", {
    mode: newMode,
    source: "command"
  });
  return {
    type: "text",
    value: `Editor mode set to ${newMode}. ${newMode === "vim" ? "Use Escape key to toggle between INSERT and NORMAL modes." : "Using standard (readline) keyboard bindings."}`
  };
};
var init_vim = __esm(() => {
  init_analytics();
  init_config();
});
init_vim();

export {
  call
};
