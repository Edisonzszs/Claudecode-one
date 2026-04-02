// @bun
import {
  AddWorkspaceDirectory,
  init_AddWorkspaceDirectory
} from "./chunk-w1swjpr0.js";
import"./chunk-w7wgpqcp.js";
import"./chunk-kd49j91f.js";
import {
  MessageResponse,
  SandboxManager,
  addDirHelpMessage,
  applyPermissionUpdate,
  init_MessageResponse,
  init_PermissionUpdate,
  init_sandbox_adapter,
  init_validation,
  persistPermissionUpdate,
  validateDirectoryForWorkspace
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
  init_source,
  source_default
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
import {
  getAdditionalDirectoriesForClaudeMd,
  init_state,
  setAdditionalDirectoriesForClaudeMd
} from "./chunk-qqfa0dqg.js";
import"./chunk-hqmz36b3.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import"./chunk-xszk7n10.js";
import"./chunk-sdj9b9wh.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/add-dir/add-dir.tsx
function AddDirError(t0) {
  const $ = import_compiler_runtime.c(10);
  const {
    message,
    args,
    onDone
  } = t0;
  let t1;
  let t2;
  if ($[0] !== onDone) {
    t1 = () => {
      const timer = setTimeout(onDone, 0);
      return () => clearTimeout(timer);
    };
    t2 = [onDone];
    $[0] = onDone;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  import_react.useEffect(t1, t2);
  let t3;
  if ($[3] !== args) {
    t3 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        figures_default.pointer,
        " /add-dir ",
        args
      ]
    }, undefined, true, undefined, this);
    $[3] = args;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== message) {
    t4 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MessageResponse, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: message
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
    $[5] = message;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== t3 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        t3,
        t4
      ]
    }, undefined, true, undefined, this);
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  return t5;
}
async function call(onDone, context, args) {
  const directoryPath = (args ?? "").trim();
  const appState = context.getAppState();
  const handleAddDirectory = async (path, remember = false) => {
    const destination = remember ? "localSettings" : "session";
    const permissionUpdate = {
      type: "addDirectories",
      directories: [path],
      destination
    };
    const latestAppState = context.getAppState();
    const updatedContext = applyPermissionUpdate(latestAppState.toolPermissionContext, permissionUpdate);
    context.setAppState((prev) => ({
      ...prev,
      toolPermissionContext: updatedContext
    }));
    const currentDirs = getAdditionalDirectoriesForClaudeMd();
    if (!currentDirs.includes(path)) {
      setAdditionalDirectoriesForClaudeMd([...currentDirs, path]);
    }
    SandboxManager.refreshConfig();
    let message;
    if (remember) {
      try {
        persistPermissionUpdate(permissionUpdate);
        message = `Added ${source_default.bold(path)} as a working directory and saved to local settings`;
      } catch (error) {
        message = `Added ${source_default.bold(path)} as a working directory. Failed to save to local settings: ${error instanceof Error ? error.message : "Unknown error"}`;
      }
    } else {
      message = `Added ${source_default.bold(path)} as a working directory for this session`;
    }
    const messageWithHint = `${message} ${source_default.dim("\xB7 /permissions to manage")}`;
    onDone(messageWithHint);
  };
  if (!directoryPath) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AddWorkspaceDirectory, {
      permissionContext: appState.toolPermissionContext,
      onAddDirectory: handleAddDirectory,
      onCancel: () => {
        onDone("Did not add a working directory.");
      }
    }, undefined, false, undefined, this);
  }
  const result = await validateDirectoryForWorkspace(directoryPath, appState.toolPermissionContext);
  if (result.resultType !== "success") {
    const message = addDirHelpMessage(result);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AddDirError, {
      message,
      args: args ?? "",
      onDone: () => onDone(message)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AddWorkspaceDirectory, {
    directoryPath: result.absolutePath,
    permissionContext: appState.toolPermissionContext,
    onAddDirectory: handleAddDirectory,
    onCancel: () => {
      onDone(`Did not add ${source_default.bold(result.absolutePath)} as a working directory.`);
    }
  }, undefined, false, undefined, this);
}
var import_compiler_runtime, import_react, jsx_dev_runtime;
var init_add_dir = __esm(() => {
  init_source();
  init_figures();
  init_state();
  init_MessageResponse();
  init_AddWorkspaceDirectory();
  init_ink();
  init_PermissionUpdate();
  init_sandbox_adapter();
  init_validation();
  import_compiler_runtime = __toESM(require_compiler_runtime(), 1);
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_add_dir();

export {
  call
};
