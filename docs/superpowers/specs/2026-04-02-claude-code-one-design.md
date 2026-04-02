# Claude Code One - 设计文档

**日期**: 2026-04-02
**状态**: 待审核
**版本**: 1.0.4

---

## 项目概述与目标

### 项目名称与定位

- **名称**: claude-code-one
- **版本**: 继承 claude-code-main 的 1.0.x 系列，起始 1.0.4
- **定位**: Anthropic Claude Code CLI 的功能完整复现版本，作为官方替代品

### 核心目标

1. **功能完整**: 实现 README 中标记为 ✅ 的所有功能（约 90%）
2. **类型安全**: 消除 decompilation 导致的类型错误，目标 tsc 错误 < 100
3. **运行稳定**: 通过 Bun 和 Node.js 双运行时验证
4. **API 兼容**: 支持 Anthropic Direct + Bedrock + Vertex + Azure 四个 Provider

### 范围边界

- **包含**: 核心 REPL、工具系统、斜杠命令、MCP 集成、会话管理
- **排除**: 31 个 Feature Flag 关闭的功能（KAIROS/PROACTIVE/VOICE 等）
- **排除**: ANT-ONLY 功能（内部 Anthropic 命令/工具）

---

## 架构设计

### 项目结构

```
claude-code-one/
├── src/
│   ├── entrypoints/
│   │   ├── cli.tsx              # 入口（MACRO/feature polyfill）
│   │   └── sdk/                 # SDK stub（暂不实现）
│   ├── main.tsx                 # Commander CLI 定义
│   ├── query.ts                 # API 查询核心循环
│   ├── QueryEngine.ts           # 会话引擎
│   ├── tools/                   # 工具实现（~40 个）
│   ├── commands/                # 斜杠命令（~50 个）
│   ├── services/                # 服务层
│   │   ├── api/                 # API 客户端（4 Provider）
│   │   ├── mcp/                 # MCP 服务管理
│   │   ├── plugins/             # 插件系统
│   │   └── compact/             # 对话压缩
│   ├── components/              # Ink UI 组件
│   ├── ink/                     # 自定义 Ink 框架
│   ├── state/                   # 状态管理
│   ├── utils/                   # 工具函数
│   └── types/                   # 类型定义
├── packages/                    # Monorepo 内部包
│   ├── color-diff-napi/         # Diff 高亮（已完整）
│   ├── audio-capture-napi/      # 音频捕获（stub）
│   ├── image-processor-napi/    # 图片处理（stub）
│   ├── modifiers-napi/          # 修饰键检测（stub）
│   └── @ant/                    # Anthropic 内部包 stub
├── tests/                       # 测试目录
├── docs/                        # 文档站点
├── build.ts                     # Bun.build 脚本
├── package.json                 # Bun workspaces
├── biome.json                   # Lint/Format 配置
└── tsconfig.json                # TypeScript 配置
```

### 核心架构分层

```
┌─────────────────────────────────────────────┐
│              CLI Entry (cli.tsx)             │
│  - MACRO defines / feature() polyfill       │
└─────────────────────────────────────────────┘
                      │
┌─────────────────────────────────────────────┐
│           Commander Layer (main.tsx)         │
│  - 参数解析 / 模式选择 / 初始化             │
└─────────────────────────────────────────────┘
                      │
┌─────────────────────────────────────────────┐
│           REPL Screen (screens/REPL.tsx)     │
│  - 用户输入 / 消息渲染 / 快捷键             │
└─────────────────────────────────────────────┘
                      │
┌─────────────────────────────────────────────┐
│          Query Engine (QueryEngine.ts)       │
│  - 会话状态 / 压缩 / 归因追踪               │
└─────────────────────────────────────────────┘
                      │
┌─────────────────────────────────────────────┐
│            API Layer (services/api/)         │
│  - Anthropic / Bedrock / Vertex / Azure     │
└─────────────────────────────────────────────┘
                      │
┌─────────────────────────────────────────────┐
│           Tool System (tools/)               │
│  - 40+ tools + permission system            │
└─────────────────────────────────────────────┘
```

### 关键设计决策

1. **运行时**: Bun 优先（dev mode），产物兼容 Node.js（build 后）
2. **模块系统**: ESM + TSX，React Compiler runtime
3. **状态管理**: Zustand-style store + React Context
4. **Feature Flags**: `feature()` 始终返回 `false`，跳过未实现分支

---

## 模块补全计划

### 补全策略

从 sourcemap 向 claude-code-main 补充缺失内容，按优先级分四个阶段：

### Phase 1：类型系统修复（优先级最高）

| 目标 | 说明 |
|------|------|
| `global.d.ts` | 补充 MACRO 类型定义 |
| `internal-modules.d.ts` | 补充 bun:bundle、bun:ffi 类型 |
| `message.ts` | 修复消息类型层级 |
| `permissions.ts` | 补全权限模式类型 |
| 工具 schema | 每个工具的 inputSchema 类型对齐 |

**验收标准**: tsc 错误从 ~1341 降至 < 300（Phase 1），最终目标 < 100

---

### Phase 2：核心模块补全

| 模块 | sourcemap 状态 | 需要补全 |
|------|----------------|----------|
| `query.ts` | 68KB，完整 | 类型注解修复 |
| `QueryEngine.ts` | 46KB，完整 | 对齐 claude-code-main 改动 |
| `services/api/` | 完整 | Bedrock/Vertex/Azure 适配器验证 |
| `context.ts` | 6KB | 确保 git status/memory 加载完整 |
| `commands.ts` | 25KB | 斜杠命令注册完整性 |

---

### Phase 3：工具系统对齐

对比 sourcemap 与 claude-code-main 的工具目录：

**sourcemap 有但 main 缺失**:

| 工具 | 处理方式 |
|------|----------|
| `MonitorTool` | Feature flag 关闭，添加 stub |
| `SendUserFileTool` | Feature flag 关闭，添加 stub |
| `OverflowTestTool` | Feature flag 关闭，添加 stub |
| `DiscoverSkillsTool` | stub，未注册 |
| `ReviewArtifactTool` | stub，未注册 |

**main 已实现需验证**:

| 工具 | 验证项 |
|------|--------|
| `AgentTool` | 子代理派生逻辑完整 |
| `WebFetchTool` | URL 抓取 → Markdown |
| `WebSearchTool` | 搜索 + 域名过滤 |
| `CronCreate/Delete/List` | 定时任务完整性 |

---

### Phase 4：UI 组件与状态

| 组件 | 状态 |
|------|------|
| `screens/REPL.tsx` | 主屏幕需对齐 sourcemap 的完整版本 |
| `components/Messages.tsx` | 消息渲染逻辑验证 |
| `components/PromptInput/` | 用户输入组件补全 |
| `state/AppState.tsx` | 状态类型完整化 |

---

### 不补全的模块（Feature Flag 关闭）

| 模块 | Flag | 处理方式 |
|------|------|----------|
| `assistant/` | KAIROS | 保持 stub |
| `coordinator/` | COORDINATOR_MODE | 保持 stub |
| `voice/` | VOICE_MODE | 保持 stub |
| `bridge/` | BRIDGE_MODE | 保持 stub |
| `buddy/` | BUDDY | 保持 stub |

---

## 构建与测试策略

### 构建系统

继承 claude-code-main 的构建配置：

```typescript
// build.ts 核心配置
Bun.build({
  entrypoint: "src/entrypoints/cli.tsx",
  outdir: "dist",
  splitting: true,           // code splitting，产出 ~450 chunks
  format: "esm",
  target: "bun",
  define: defines,           // MACRO.* 注入
  external: ["bun:bundle"],  // 构建时模块
})
```

**构建产物**:
- `dist/cli.js` — 入口文件
- `dist/*.chunk.js` — ~450 个分块文件
- 兼容 Bun + Node.js 双运行时（自动后处理 `import.meta.require`）

### MACRO Defines（scripts/defines.ts）

```typescript
{
  MACRO: {
    VERSION: "1.0.4",
    BUILD_TIME: Date.now(),
    BUILD_TARGET: "cli",
    INTERFACE_TYPE: "terminal",
    // ... 其他 MACRO 字段从 sourcemap 补充
  }
}
```

---

### 测试策略

继承 claude-code-main 的测试框架（bun:test），当前状态：
- 1286 tests / 67 files / 0 fail

**测试补全计划**:

| 阶段 | 目标 | 新增测试 |
|------|------|----------|
| Phase 1 | 类型验证 | 工具 schema 测试（~20 个） |
| Phase 2 | 核心模块 | query.ts / QueryEngine.ts 测试 |
| Phase 3 | 工具系统 | 每个工具的 call() 单元测试 |
| Phase 4 | 集成测试 | REPL 流程 / API Provider / MCP |

**测试命名规范**:
```typescript
describe("functionName")
test("behavior description")  // 英文
// 文件位置：src/**/__tests__/<module>.test.ts
```

---

### CI/CD 流程

```yaml
# 简化版 CI（暂不配置 GitHub Actions）
1. bun install
2. bun run lint          # Biome 检查
3. bun test              # 单元测试
4. bun run build         # 构建
5. node dist/cli.js --version  # Node.js 兼容验证
6. bun dist/cli.js --version   # Bun 运行验证
```

---

### 质量检查工具

| 工具 | 配置文件 | 用途 |
|------|----------|------|
| Biome | biome.json | Lint + Format |
| Knip | knip.json | 未使用代码检测 |
| TypeScript | tsconfig.json | 类型检查（目标错误 < 100） |

---

## 实施路线图

### 里程碑规划

| 阶段 | 时间 | 目标 | 验收标准 |
|------|------|------|----------|
| **M1：基础搭建** | Day 1-2 | 项目初始化 + 目录结构 | `bun run dev` 可启动（开发模式版本号 888） |
| **M2：类型修复** | Day 3-5 | Phase 1 类型系统补全 | tsc 错误 < 300 |
| **M3：核心模块** | Day 6-10 | Phase 2 核心模块对齐 | REPL 基本对话可用 |
| **M4：工具系统** | Day 11-15 | Phase 3 工具补全验证 | 所有 ✅ 工具可调用 |
| **M5：完整测试** | Day 16-18 | Phase 4 测试补全 | 测试覆盖率 > 80% |
| **M6：发布准备** | Day 19-20 | 文档 + 构建验证 | Node.js/Bun 双运行通过 |

---

### M1 详细任务（Day 1-2）

```bash
# 1. 复制 claude-code-main 为 claude-code-one
cp -r claude-code-main claude-code-one

# 2. 修改项目标识
# - package.json: name -> "claude-code-one", version -> "1.0.4"
# - CLAUDE.md: 更新项目描述
# - README.md: 重写为 claude-code-one 说明
# - scripts/defines.ts: VERSION -> "1.0.4"

# 3. 验证基础运行
bun install
bun run dev   # 应显示开发模式版本号 888
bun run build
node dist/cli.js --version
```

---

### M2 详细任务（Day 3-5）

从 sourcemap 补充类型文件：

```
优先级排序：
1. src/types/global.d.ts          → MACRO 类型完整性
2. src/types/internal-modules.d.ts → bun:* 模块类型
3. src/types/message.ts           → 消息层级修复
4. src/types/permissions.ts       → 权限系统类型
5. 各工具目录下的 schema 文件     → inputSchema 类型
```

---

### M3 详细任务（Day 6-10）

核心文件对齐清单：

| 文件 | 源 | 目标 |
|------|-----|------|
| `query.ts` | sourcemap 68KB → main 69KB | 合并差异 |
| `QueryEngine.ts` | sourcemap 46KB → main 48KB | 合并差异 |
| `services/api/*.ts` | sourcemap → main | Provider 验证 |
| `context.ts` | sourcemap → main | 确保 memory 加载完整 |
| `commands.ts` | sourcemap → main | 命令注册完整性 |

---

### 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| sourcemap 代码过时 | 优先保留 main 已修复的版本 |
| 类型冲突 | 使用 `// @ts-ignore` 临时绕过，后续修复 |
| 构建失败 | 回退到上一个可运行版本 |
| API 兼容性 | 使用 Anthropic SDK 最新版本 |

---

## 附录

### 参考资源

- **sourcemap 源码**: `claude-code-sourcemap-main/restored-src/src/`（1884 个 TS 文件）
- **main 源码**: `claude-code-main/claude-code-main/src/`（2877 个 TS 文件）
- **npm 包**: `@anthropic-ai/claude-code` v2.1.88

### Feature Flags 列表（全部关闭）

`ABLATION_BASELINE` `AGENT_MEMORY_SNAPSHOT` `BG_SESSIONS` `BRIDGE_MODE` `BUDDY` `CCR_MIRROR` `CCR_REMOTE_SETUP` `CHICAGO_MCP` `COORDINATOR_MODE` `DAEMON` `DIRECT_CONNECT` `EXPERIMENTAL_SKILL_SEARCH` `FORK_SUBAGENT` `HARD_FAIL` `HISTORY_SNIP` `KAIROS` `KAIROS_BRIEF` `KAIROS_CHANNELS` `KAIROS_GITHUB_WEBHOOKS` `LODESTONE` `MCP_SKILLS` `PROACTIVE` `SSH_REMOTE` `TORCH` `TRANSCRIPT_CLASSIFIER` `UDS_INBOX` `ULTRAPLAN` `UPLOAD_USER_SETTINGS` `VOICE_MODE` `WEB_BROWSER_TOOL` `WORKFLOW_SCRIPTS`