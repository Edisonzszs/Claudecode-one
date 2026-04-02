// @bun
import {
  call as call2,
  init_upgrade
} from "./chunk-hgj92myf.js";
import {
  call,
  init_extra_usage
} from "./chunk-e64zqy5g.js";
import"./chunk-8gqtpqzk.js";
import"./chunk-02aqvfqv.js";
import"./chunk-nrm24gcj.js";
import"./chunk-fvbechj2.js";
import"./chunk-wrhdszge.js";
import"./chunk-j1fd2ckc.js";
import {
  Select,
  extraUsage,
  init_claudeAiLimitsHook,
  init_extra_usage as init_extra_usage2,
  init_select,
  init_upgrade as init_upgrade2,
  upgrade_default,
  useClaudeAiLimits
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
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getRateLimitTier,
  getSubscriptionType,
  hasClaudeAiBillingAccess,
  init_auth,
  init_billing,
  init_growthbook
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

// src/commands/rate-limit-options/rate-limit-options.tsx
function RateLimitOptionsMenu(t0) {
  const $ = import_compiler_runtime.c(25);
  const {
    onDone,
    context
  } = t0;
  const [subCommandJSX, setSubCommandJSX] = import_react.useState(null);
  const claudeAiLimits = useClaudeAiLimits();
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = getSubscriptionType();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const subscriptionType = t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = getRateLimitTier();
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const rateLimitTier = t2;
  const hasExtraUsageEnabled = getOauthAccountInfo()?.hasExtraUsageEnabled === true;
  const isMax = subscriptionType === "max";
  const isMax20x = isMax && rateLimitTier === "default_claude_max_20x";
  const isTeamOrEnterprise = subscriptionType === "team" || subscriptionType === "enterprise";
  const buyFirst = getFeatureValue_CACHED_MAY_BE_STALE("tengu_jade_anvil_4", false);
  let t3;
  bb0: {
    let actionOptions;
    if ($[2] !== claudeAiLimits.overageDisabledReason || $[3] !== claudeAiLimits.overageStatus) {
      actionOptions = [];
      if (extraUsage.isEnabled()) {
        const hasBillingAccess = hasClaudeAiBillingAccess();
        const needsToRequestFromAdmin = isTeamOrEnterprise && !hasBillingAccess;
        const isOrgSpendCapDepleted = claudeAiLimits.overageDisabledReason === "out_of_credits" || claudeAiLimits.overageDisabledReason === "org_level_disabled_until" || claudeAiLimits.overageDisabledReason === "org_service_zero_credit_limit";
        if (needsToRequestFromAdmin && isOrgSpendCapDepleted) {} else {
          const isOverageState = claudeAiLimits.overageStatus === "rejected" || claudeAiLimits.overageStatus === "allowed_warning";
          let label;
          if (needsToRequestFromAdmin) {
            label = isOverageState ? "Request more" : "Request extra usage";
          } else {
            label = hasExtraUsageEnabled ? "Add funds to continue with extra usage" : "Switch to extra usage";
          }
          let t43;
          if ($[5] !== label) {
            t43 = {
              label,
              value: "extra-usage"
            };
            $[5] = label;
            $[6] = t43;
          } else {
            t43 = $[6];
          }
          actionOptions.push(t43);
        }
      }
      if (!isMax20x && !isTeamOrEnterprise && upgrade_default.isEnabled()) {
        let t43;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
          t43 = {
            label: "Upgrade your plan",
            value: "upgrade"
          };
          $[7] = t43;
        } else {
          t43 = $[7];
        }
        actionOptions.push(t43);
      }
      $[2] = claudeAiLimits.overageDisabledReason;
      $[3] = claudeAiLimits.overageStatus;
      $[4] = actionOptions;
    } else {
      actionOptions = $[4];
    }
    let t42;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
      t42 = {
        label: "Stop and wait for limit to reset",
        value: "cancel"
      };
      $[8] = t42;
    } else {
      t42 = $[8];
    }
    const cancelOption = t42;
    if (buyFirst) {
      let t53;
      if ($[9] !== actionOptions) {
        t53 = [...actionOptions, cancelOption];
        $[9] = actionOptions;
        $[10] = t53;
      } else {
        t53 = $[10];
      }
      t3 = t53;
      break bb0;
    }
    let t52;
    if ($[11] !== actionOptions) {
      t52 = [cancelOption, ...actionOptions];
      $[11] = actionOptions;
      $[12] = t52;
    } else {
      t52 = $[12];
    }
    t3 = t52;
  }
  const options = t3;
  let t4;
  if ($[13] !== onDone) {
    t4 = function handleCancel2() {
      logEvent("tengu_rate_limit_options_menu_cancel", {});
      onDone(undefined, {
        display: "skip"
      });
    };
    $[13] = onDone;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  const handleCancel = t4;
  let t5;
  if ($[15] !== context || $[16] !== handleCancel || $[17] !== onDone) {
    t5 = function handleSelect2(value) {
      if (value === "upgrade") {
        logEvent("tengu_rate_limit_options_menu_select_upgrade", {});
        call2(onDone, context).then((jsx) => {
          if (jsx) {
            setSubCommandJSX(jsx);
          }
        });
      } else {
        if (value === "extra-usage") {
          logEvent("tengu_rate_limit_options_menu_select_extra_usage", {});
          call(onDone, context).then((jsx_0) => {
            if (jsx_0) {
              setSubCommandJSX(jsx_0);
            }
          });
        } else {
          if (value === "cancel") {
            handleCancel();
          }
        }
      }
    };
    $[15] = context;
    $[16] = handleCancel;
    $[17] = onDone;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  const handleSelect = t5;
  if (subCommandJSX) {
    return subCommandJSX;
  }
  let t6;
  if ($[19] !== handleSelect || $[20] !== options) {
    t6 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
      options,
      onChange: handleSelect,
      visibleOptionCount: options.length
    }, undefined, false, undefined, this);
    $[19] = handleSelect;
    $[20] = options;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  let t7;
  if ($[22] !== handleCancel || $[23] !== t6) {
    t7 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "What do you want to do?",
      onCancel: handleCancel,
      color: "suggestion",
      children: t6
    }, undefined, false, undefined, this);
    $[22] = handleCancel;
    $[23] = t6;
    $[24] = t7;
  } else {
    t7 = $[24];
  }
  return t7;
}
async function call3(onDone, context) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RateLimitOptionsMenu, {
    onDone,
    context
  }, undefined, false, undefined, this);
}
var import_compiler_runtime, import_react, jsx_dev_runtime;
var init_rate_limit_options = __esm(() => {
  init_select();
  init_Dialog();
  init_growthbook();
  init_analytics();
  init_claudeAiLimitsHook();
  init_auth();
  init_billing();
  init_extra_usage();
  init_extra_usage2();
  init_upgrade2();
  init_upgrade();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_rate_limit_options();

export {
  call3 as call
};
