// @bun
import {
  getProjectDir,
  getTranscriptPath,
  getTranscriptPathForSession,
  init_sessionStorage,
  isTranscriptMessage,
  saveCustomTitle,
  searchSessionsByCustomTitle
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
import {
  escapeRegExp,
  init_stringUtils
} from "./chunk-9y3y1bsh.js";
import {
  init_json,
  parseJSONL
} from "./chunk-e3g8q4cn.js";
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
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-nxsh6de2.js";
import"./chunk-fbv4apne.js";
import"./chunk-3r24h7t6.js";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-qqfa0dqg.js";
import"./chunk-hqmz36b3.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import"./chunk-xszk7n10.js";
import"./chunk-sdj9b9wh.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/branch/branch.ts
import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
function deriveFirstPrompt(firstUserMessage) {
  const content = firstUserMessage?.message?.content;
  if (!content)
    return "Branched conversation";
  const raw = typeof content === "string" ? content : content.find((block) => block.type === "text")?.text;
  if (!raw)
    return "Branched conversation";
  return raw.replace(/\s+/g, " ").trim().slice(0, 100) || "Branched conversation";
}
async function createFork(customTitle) {
  const forkSessionId = randomUUID();
  const originalSessionId = getSessionId();
  const projectDir = getProjectDir(getOriginalCwd());
  const forkSessionPath = getTranscriptPathForSession(forkSessionId);
  const currentTranscriptPath = getTranscriptPath();
  await mkdir(projectDir, { recursive: true, mode: 448 });
  let transcriptContent;
  try {
    transcriptContent = await readFile(currentTranscriptPath);
  } catch {
    throw new Error("No conversation to branch");
  }
  if (transcriptContent.length === 0) {
    throw new Error("No conversation to branch");
  }
  const entries = parseJSONL(transcriptContent);
  const mainConversationEntries = entries.filter((entry) => isTranscriptMessage(entry) && !entry.isSidechain);
  const contentReplacementRecords = entries.filter((entry) => entry.type === "content-replacement" && entry.sessionId === originalSessionId).flatMap((entry) => entry.replacements);
  if (mainConversationEntries.length === 0) {
    throw new Error("No messages to branch");
  }
  let parentUuid = null;
  const lines = [];
  const serializedMessages = [];
  for (const entry of mainConversationEntries) {
    const forkedEntry = {
      ...entry,
      sessionId: forkSessionId,
      parentUuid,
      isSidechain: false,
      forkedFrom: {
        sessionId: originalSessionId,
        messageUuid: entry.uuid
      }
    };
    const serialized = {
      ...entry,
      sessionId: forkSessionId
    };
    serializedMessages.push(serialized);
    lines.push(jsonStringify(forkedEntry));
    if (entry.type !== "progress") {
      parentUuid = entry.uuid;
    }
  }
  if (contentReplacementRecords.length > 0) {
    const forkedReplacementEntry = {
      type: "content-replacement",
      sessionId: forkSessionId,
      replacements: contentReplacementRecords
    };
    lines.push(jsonStringify(forkedReplacementEntry));
  }
  await writeFile(forkSessionPath, lines.join(`
`) + `
`, {
    encoding: "utf8",
    mode: 384
  });
  return {
    sessionId: forkSessionId,
    title: customTitle,
    forkPath: forkSessionPath,
    serializedMessages,
    contentReplacementRecords
  };
}
async function getUniqueForkName(baseName) {
  const candidateName = `${baseName} (Branch)`;
  const existingWithExactName = await searchSessionsByCustomTitle(candidateName, { exact: true });
  if (existingWithExactName.length === 0) {
    return candidateName;
  }
  const existingForks = await searchSessionsByCustomTitle(`${baseName} (Branch`);
  const usedNumbers = new Set([1]);
  const forkNumberPattern = new RegExp(`^${escapeRegExp(baseName)} \\(Branch(?: (\\d+))?\\)$`);
  for (const session of existingForks) {
    const match = session.customTitle?.match(forkNumberPattern);
    if (match) {
      if (match[1]) {
        usedNumbers.add(parseInt(match[1], 10));
      } else {
        usedNumbers.add(1);
      }
    }
  }
  let nextNumber = 2;
  while (usedNumbers.has(nextNumber)) {
    nextNumber++;
  }
  return `${baseName} (Branch ${nextNumber})`;
}
async function call(onDone, context, args) {
  const customTitle = args?.trim() || undefined;
  const originalSessionId = getSessionId();
  try {
    const {
      sessionId,
      title,
      forkPath,
      serializedMessages,
      contentReplacementRecords
    } = await createFork(customTitle);
    const now = new Date;
    const firstPrompt = deriveFirstPrompt(serializedMessages.find((m) => m.type === "user"));
    const baseName = title ?? firstPrompt;
    const effectiveTitle = await getUniqueForkName(baseName);
    await saveCustomTitle(sessionId, effectiveTitle, forkPath);
    logEvent("tengu_conversation_forked", {
      message_count: serializedMessages.length,
      has_custom_title: !!title
    });
    const forkLog = {
      date: now.toISOString().split("T")[0],
      messages: serializedMessages,
      fullPath: forkPath,
      value: now.getTime(),
      created: now,
      modified: now,
      firstPrompt,
      messageCount: serializedMessages.length,
      isSidechain: false,
      sessionId,
      customTitle: effectiveTitle,
      contentReplacements: contentReplacementRecords
    };
    const titleInfo = title ? ` "${title}"` : "";
    const resumeHint = `
To resume the original: claude -r ${originalSessionId}`;
    const successMessage = `Branched conversation${titleInfo}. You are now in the branch.${resumeHint}`;
    if (context.resume) {
      await context.resume(sessionId, forkLog, "fork");
      onDone(successMessage, { display: "system" });
    } else {
      onDone(`Branched conversation${titleInfo}. Resume with: /resume ${sessionId}`);
    }
    return null;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    onDone(`Failed to branch conversation: ${message}`);
    return null;
  }
}
var init_branch = __esm(() => {
  init_state();
  init_analytics();
  init_json();
  init_sessionStorage();
  init_slowOperations();
  init_stringUtils();
});
init_branch();

export {
  deriveFirstPrompt,
  call
};
