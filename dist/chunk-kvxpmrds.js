// @bun
import {
  init_sideQuestion,
  runSideQuestion
} from "./chunk-r6rpyd5n.js";
import {
  ScrollBox_default,
  init_ScrollBox
} from "./chunk-8c30pbrj.js";
import {
  Markdown,
  SpinnerGlyph,
  asSystemPrompt,
  createAbortController,
  getLastCacheSafeParams,
  getMessagesAfterCompactBoundary,
  getSystemContext,
  getSystemPrompt,
  getUserContext,
  init_Markdown,
  init_SpinnerGlyph,
  init_abortController,
  init_context,
  init_forkedAgent,
  init_messages1 as init_messages,
  init_prompts1 as init_prompts,
  init_systemPromptType
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
import {
  init_modalContext,
  init_useTerminalSize,
  useModalOrTerminalSize,
  useTerminalSize
} from "./chunk-94dpgxzj.js";
import {
  ThemedBox_default,
  ThemedText,
  init_dist,
  init_ink,
  require_compiler_runtime,
  useInterval
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
  DOWN_ARROW,
  UP_ARROW,
  init_config1 as init_config,
  init_figures,
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/btw/btw.tsx
function BtwSideQuestion(t0) {
  const $ = import_compiler_runtime.c(25);
  const {
    question,
    context,
    onDone
  } = t0;
  const [response, setResponse] = import_react.useState(null);
  const [error, setError] = import_react.useState(null);
  const [frame, setFrame] = import_react.useState(0);
  const scrollRef = import_react.useRef(null);
  const {
    rows
  } = useModalOrTerminalSize(useTerminalSize());
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => setFrame(_temp);
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  useInterval(t1, response || error ? null : 80);
  let t2;
  if ($[1] !== onDone) {
    t2 = function handleKeyDown2(e) {
      if (e.key === "escape" || e.key === "return" || e.key === " " || e.ctrl && (e.key === "c" || e.key === "d")) {
        e.preventDefault();
        onDone(undefined, {
          display: "skip"
        });
        return;
      }
      if (e.key === "up" || e.ctrl && e.key === "p") {
        e.preventDefault();
        scrollRef.current?.scrollBy(-SCROLL_LINES);
      }
      if (e.key === "down" || e.ctrl && e.key === "n") {
        e.preventDefault();
        scrollRef.current?.scrollBy(SCROLL_LINES);
      }
    };
    $[1] = onDone;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleKeyDown = t2;
  let t3;
  let t4;
  if ($[3] !== context || $[4] !== question) {
    t3 = () => {
      const abortController = createAbortController();
      const fetchResponse = async function fetchResponse2() {
        try {
          const cacheSafeParams = await buildCacheSafeParams(context);
          const result = await runSideQuestion({
            question,
            cacheSafeParams
          });
          if (!abortController.signal.aborted) {
            if (result.response) {
              setResponse(result.response);
            } else {
              setError("No response received");
            }
          }
        } catch (t52) {
          const err = t52;
          if (!abortController.signal.aborted) {
            setError(errorMessage(err) || "Failed to get response");
          }
        }
      };
      fetchResponse();
      return () => {
        abortController.abort();
      };
    };
    t4 = [question, context];
    $[3] = context;
    $[4] = question;
    $[5] = t3;
    $[6] = t4;
  } else {
    t3 = $[5];
    t4 = $[6];
  }
  import_react.useEffect(t3, t4);
  const maxContentHeight = Math.max(5, rows - CHROME_ROWS - OUTER_CHROME_ROWS);
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      color: "warning",
      bold: true,
      children: [
        "/btw",
        " "
      ]
    }, undefined, true, undefined, this);
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== question) {
    t6 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        t5,
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: question
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
    $[8] = question;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== error || $[11] !== frame || $[12] !== response) {
    t7 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ScrollBox_default, {
      ref: scrollRef,
      flexDirection: "column",
      flexGrow: 1,
      children: error ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "error",
        children: error
      }, undefined, false, undefined, this) : response ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Markdown, {
        children: response
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SpinnerGlyph, {
            frame,
            messageColor: "warning"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "warning",
            children: "Answering..."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
    $[10] = error;
    $[11] = frame;
    $[12] = response;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  let t8;
  if ($[14] !== maxContentHeight || $[15] !== t7) {
    t8 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      marginTop: 1,
      marginLeft: 2,
      maxHeight: maxContentHeight,
      children: t7
    }, undefined, false, undefined, this);
    $[14] = maxContentHeight;
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== error || $[18] !== response) {
    t9 = (response || error) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      marginTop: 1,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          UP_ARROW,
          "/",
          DOWN_ARROW,
          " to scroll \xB7 Space, Enter, or Escape to dismiss"
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
    $[17] = error;
    $[18] = response;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  let t10;
  if ($[20] !== handleKeyDown || $[21] !== t6 || $[22] !== t8 || $[23] !== t9) {
    t10 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingLeft: 2,
      marginTop: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: handleKeyDown,
      children: [
        t6,
        t8,
        t9
      ]
    }, undefined, true, undefined, this);
    $[20] = handleKeyDown;
    $[21] = t6;
    $[22] = t8;
    $[23] = t9;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  return t10;
}
function _temp(f) {
  return f + 1;
}
function stripInProgressAssistantMessage(messages) {
  const last = messages.at(-1);
  if (last?.type === "assistant" && last.message.stop_reason === null) {
    return messages.slice(0, -1);
  }
  return messages;
}
async function buildCacheSafeParams(context) {
  const forkContextMessages = getMessagesAfterCompactBoundary(stripInProgressAssistantMessage(context.messages));
  const saved = getLastCacheSafeParams();
  if (saved) {
    return {
      systemPrompt: saved.systemPrompt,
      userContext: saved.userContext,
      systemContext: saved.systemContext,
      toolUseContext: context,
      forkContextMessages
    };
  }
  const [rawSystemPrompt, userContext, systemContext] = await Promise.all([getSystemPrompt(context.options.tools, context.options.mainLoopModel, [], context.options.mcpClients), getUserContext(), getSystemContext()]);
  return {
    systemPrompt: asSystemPrompt(rawSystemPrompt),
    userContext,
    systemContext,
    toolUseContext: context,
    forkContextMessages
  };
}
async function call(onDone, context, args) {
  const question = args?.trim();
  if (!question) {
    onDone("Usage: /btw <your question>", {
      display: "system"
    });
    return null;
  }
  saveGlobalConfig((current) => ({
    ...current,
    btwUseCount: current.btwUseCount + 1
  }));
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(BtwSideQuestion, {
    question,
    context,
    onDone
  }, undefined, false, undefined, this);
}
var import_compiler_runtime, import_react, jsx_dev_runtime, CHROME_ROWS = 5, OUTER_CHROME_ROWS = 6, SCROLL_LINES = 3;
var init_btw = __esm(() => {
  init_dist();
  init_Markdown();
  init_SpinnerGlyph();
  init_figures();
  init_prompts();
  init_modalContext();
  init_context();
  init_useTerminalSize();
  init_ScrollBox();
  init_ink();
  init_abortController();
  init_config();
  init_errors();
  init_forkedAgent();
  init_messages();
  init_sideQuestion();
  init_systemPromptType();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_btw();

export {
  call
};
