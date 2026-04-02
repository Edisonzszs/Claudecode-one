// @bun
import {
  init_thinkback,
  playAnimation
} from "./chunk-374ky5x0.js";
import"./chunk-52qfx49m.js";
import"./chunk-jhr887f7.js";
import {
  OFFICIAL_MARKETPLACE_NAME,
  init_installedPluginsManager,
  init_officialMarketplace,
  loadInstalledPluginsV2
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
import"./chunk-g83s4r1f.js";
import"./chunk-7m2nd8da.js";
import"./chunk-ps49ymvj.js";
import"./chunk-7sgtxrsc.js";
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/thinkback-play/thinkback-play.ts
import { join } from "path";
function getPluginId() {
  const marketplaceName = process.env.USER_TYPE === "ant" ? INTERNAL_MARKETPLACE_NAME : OFFICIAL_MARKETPLACE_NAME;
  return `thinkback@${marketplaceName}`;
}
async function call() {
  const v2Data = loadInstalledPluginsV2();
  const pluginId = getPluginId();
  const installations = v2Data.plugins[pluginId];
  if (!installations || installations.length === 0) {
    return {
      type: "text",
      value: "Thinkback plugin not installed. Run /think-back first to install it."
    };
  }
  const firstInstall = installations[0];
  if (!firstInstall?.installPath) {
    return {
      type: "text",
      value: "Thinkback plugin installation path not found."
    };
  }
  const skillDir = join(firstInstall.installPath, "skills", SKILL_NAME);
  const result = await playAnimation(skillDir);
  return { type: "text", value: result.message };
}
var INTERNAL_MARKETPLACE_NAME = "claude-code-marketplace", SKILL_NAME = "thinkback";
var init_thinkback_play = __esm(() => {
  init_installedPluginsManager();
  init_officialMarketplace();
  init_thinkback();
});
init_thinkback_play();

export {
  call
};
