# Claude Code One - 项目状态文档

> 本文档记录项目完整历史，供后续对话参考。最后更新：2026-04-03

---

## 一、项目概述

### 1.1 项目定位

**Claude Code One** 是对 Anthropic 官方 Claude Code CLI 的完整功能复现项目。

### 1.2 数据来源

| 来源 | 版本 | 说明 |
|------|------|------|
| claude-code-main | - | 社区逆向工程版本，提供工程框架 |
| claude-code-sourcemap-main | v2.1.88 | 官方 source map，提供类型和模块补充 |

### 1.3 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Bun | >= 1.3.11 | 运行时和包管理 |
| TypeScript | 6.0.2 | 主要语言 |
| React | 19.x | 终端 UI (Ink 框架) |
| Anthropic SDK | 0.80.0 | API 调用 |
| MCP SDK | 1.29.0 | Model Context Protocol |
| Biome | 2.4.10 | Lint 和 Format |

### 1.4 仓库信息

- **GitHub**: https://github.com/Edisonzszs/Claudecode-one
- **Owner**: Edisonzszs
- **License**: MIT (研究学习用途)

---

## 二、已完成里程碑

### M1: 项目初始化 ✅

**完成时间**: 2026-04-02

**工作内容**:
- 创建项目目录结构
- 设置 package.json 身份信息
- 配置 Bun workspaces
- 初始化 Git 仓库

**关键文件**:
- `package.json` - 项目身份配置
- `bunfig.toml` - Bun 配置
- `biome.json` - Lint 配置
- `tsconfig.json` - TypeScript 配置

### M2: 类型修复 ✅

**完成时间**: 2026-04-02

**工作内容**:
- 修复 TypeScript 类型错误
- 添加缺失的类型声明
- 解决模块导入问题

**关键修改**:
| 文件 | 修改内容 |
|------|----------|
| `packages/@ant/computer-use-mcp/src/types.ts` | 添加 `ComputerExecutor.listInstalledApps` 方法 |
| `packages/@ant/computer-use-mcp/src/index.ts` | 添加 `close()` 方法到 server stub |
| `src/utils/computerUse/executor.ts` | 修复返回类型 |

**最终状态**: 源码 TypeScript 错误 = 0

### M3: 核心模块对齐 ✅

**完成时间**: 2026-04-02

**工作内容**:
- 对比 sourcemap 验证核心模块对齐
- 确认 query.ts, QueryEngine.ts, context.ts, commands.ts 对齐

**对齐情况**:
| 文件 | claude-code-one | sourcemap | 差异 |
|------|-----------------|-----------|------|
| query.ts | 1732 行 | 1729 行 | 类型安全改进 |
| QueryEngine.ts | 1320 行 | 1295 行 | 类型安全改进 |
| context.ts | 189 行 | 189 行 | 完全一致 |
| commands.ts | 754 行 | 754 行 | 完全一致 |

### M4: 工具系统验证 ✅

**完成时间**: 2026-04-02

**工作内容**:
- 验证 27 个工具全部存在
- 确认 feature-gated 工具作为 stub 存在

**工具清单**:
| 工具 | 状态 | 说明 |
|------|------|------|
| BashTool | ✅ 功能完整 | Shell 命令执行 |
| ReadTool | ✅ 功能完整 | 文件读取 |
| EditTool | ✅ 功能完整 | 文件编辑 |
| WriteTool | ✅ 功能完整 | 文件写入 |
| GlobTool | ✅ 功能完整 | 文件模式匹配 |
| GrepTool | ✅ 功能完整 | 内容搜索 |
| WebFetchTool | ✅ 功能完整 | 网页抓取 |
| WebSearchTool | ✅ 功能完整 | 网页搜索 |
| AgentTool | ✅ 功能完整 | 子代理 |
| ScheduleCronTool | ✅ 功能完整 | 定时任务 |
| NotebookEditTool | ✅ 功能完整 | Jupyter 编辑 |
| TaskCreateTool | ✅ 功能完整 | 任务创建 |
| TaskUpdateTool | ✅ 功能完整 | 任务更新 |
| TaskListTool | ✅ 功能完整 | 任务列表 |
| TaskGetTool | ✅ 功能完整 | 任务获取 |
| TaskOutputTool | ✅ 功能完整 | 任务输出 |
| TaskStopTool | ✅ 功能完整 | 任务停止 |
| AskUserQuestionTool | ✅ 功能完整 | 用户提问 |
| SkillTool | ✅ 功能完整 | 技能调用 |
| SendMessageTool | ✅ 功能完整 | 消息发送 |
| TeamCreateTool | ✅ 功能完整 | 团队创建 |
| TeamDeleteTool | ✅ 功能完整 | 团队删除 |
| EnterPlanModeTool | ✅ 功能完整 | 进入规划模式 |
| ExitPlanModeTool | ✅ 功能完整 | 退出规划模式 |
| EnterWorktreeTool | ✅ 功能完整 | 进入 worktree |
| ExitWorktreeTool | ✅ 功能完整 | 退出 worktree |
| MonitorTool | ⚠️ Stub | feature-gated |
| SendUserFileTool | ⚠️ Stub | feature-gated |
| ComputerUseTools | ⚠️ Stub | feature-gated |

### M5: 测试修复 ✅

**完成时间**: 2026-04-02

**工作内容**:
- 修复 23 个失败测试
- 解决跨平台兼容问题

**修复的测试**:
| 测试文件 | 问题 | 解决方案 |
|----------|------|----------|
| `cli-arguments.test.ts` | 硬编码路径 | 改用 `require('commander')` |
| `formatBriefTimestamp.test.ts` | locale 依赖 | 设置 `LC_ALL=en_US.UTF-8` |
| `path.test.ts` | Windows 路径 | 添加平台判断 |
| `file.test.ts` | 路径分隔符 | 添加平台判断 |
| `xdg.test.ts` | 路径分隔符 | 添加 `normalizePath` |
| `claudemd.test.ts` | `isMemoryFilePath` | 使用 `sep` 变量 |
| `context-build.test.ts` | 同上 | 使用 `sep` 变量 |
| `sliceAnsi.test.ts` | emoji 宽度 | 更新 mock |
| `gitSafety.test.ts` | mock 冲突 | 移除重复 mock |

**最终状态**: 2009 pass / 0 fail

### M6: 发布准备 ✅

**完成时间**: 2026-04-03

**工作内容**:
- 添加 MIT LICENSE
- 更新 README.md
- 创建 CONTRIBUTORS.md
- 推送到 GitHub

---

## 三、Git 提交记录

### 完整提交历史

```
8c81973c Edisonzszs <Edisonzszs@users.noreply.github.com> chore: add CONTRIBUTORS file
cc0d02c8 Claude Code One <claude-code-one@example.com> docs: rewrite README based on reference document
65d8f81c Claude Code One <claude-code-one@example.com> docs: update README with contributors and official references
fae34f0b Claude Code One <claude-code-one@example.com> release: v1.0.4 complete
42cb1f93 Claude Code One <claude-code-one@example.com> fix(m3): add close method to MCP server stub
b81f028a Claude Code One <claude-code-one@example.com> fix(m2): reduce tsc errors from 60 to 56
fb202f6f Claude Code One <claude-code-one@example.com> init: claude-code-one project initialization
```

---

## 四、项目结构

```
claude-code-one/
├── dist/                      # 构建输出 (445 chunks)
├── docs/                      # 文档
│   └── superpowers/          # 超能力系统文档
├── packages/                  # 内部包
│   ├── @ant/                 # Anthropic stub 包
│   │   ├── computer-use-mcp/ # Computer Use MCP stub
│   │   ├── computer-use-input/
│   │   ├── computer-use-swift/
│   │   └── claude-for-chrome-mcp/
│   ├── audio-capture-napi/   # 音频捕获 stub
│   ├── color-diff-napi/      # 颜色差异 (已实现)
│   ├── image-processor-napi/ # 图像处理 stub
│   ├── modifiers-napi/       # 修改器 stub
│   └── url-handler-napi/     # URL 处理 stub
├── scripts/                   # 构建脚本
│   ├── defines.ts            # MACRO defines
│   ├── dev.ts                # 开发脚本
│   └── health-check.ts       # 健康检查
├── src/                       # 核心源码
│   ├── entrypoints/          # 入口点
│   │   └── cli.tsx           # CLI 入口 (polyfill)
│   ├── main.tsx              # Commander CLI 定义
│   ├── query.ts              # 核心 API 查询函数
│   ├── QueryEngine.ts        # 查询引擎
│   ├── context.ts            # 上下文构建
│   ├── commands.ts           # 斜杠命令注册
│   ├── tools.ts              # 工具注册
│   ├── tools/                # 工具实现
│   │   ├── BashTool/
│   │   ├── ReadTool/
│   │   ├── EditTool/
│   │   ├── WriteTool/
│   │   ├── GlobTool/
│   │   ├── GrepTool/
│   │   ├── WebFetchTool/
│   │   ├── WebSearchTool/
│   │   ├── AgentTool/
│   │   └── ...
│   ├── services/             # 服务层
│   │   ├── api/              # API 客户端
│   │   ├── mcp/              # MCP 服务
│   │   └── analytics/        # 分析
│   ├── components/           # React 组件 (Ink)
│   ├── state/                # 状态管理
│   ├── utils/                # 工具函数
│   └── ink/                  # Ink 框架
├── tests/                     # 测试
│   ├── integration/          # 集成测试
│   └── mocks/                # Mock 文件
├── CLAUDE.md                  # Claude Code 指引
├── README.md                  # 项目说明
├── CONTRIBUTORS.md            # 贡献者
├── LICENSE                    # MIT 许可证
├── build.ts                   # 构建脚本
├── package.json               # 项目配置
└── tsconfig.json              # TypeScript 配置
```

---

## 五、运行方式

### 5.1 开发模式

```bash
# 安装依赖
bun install

# 开发模式 (显示版本 888)
bun run dev

# 或指定版本
bun run dev -- --version
```

### 5.2 构建模式

```bash
# 构建
bun run build

# 用 Node.js 运行
node dist/cli.js
```

### 5.3 管道模式

```bash
echo "your prompt" | bun run dev -- -p
```

### 5.4 Windows 特殊配置

Windows 需要设置 Git Bash 路径：

```bash
# 设置环境变量
set CLAUDE_CODE_GIT_BASH_PATH=F:\app\gitbash\Git\bin\bash.exe

# 或在 PowerShell
$env:CLAUDE_CODE_GIT_BASH_PATH = "F:\app\gitbash\Git\bin\bash.exe"
```

### 5.5 Linux/WSL 运行

```bash
cd /mnt/f/AI\ AGENT/Claude\ code/claude\ code\ 复现/claude-code-one
node dist/cli.js --version
```

---

## 六、后续方向

### 6.1 待完成功能

| 功能 | 优先级 | 说明 |
|------|--------|------|
| API Key 配置引导 | 高 | 添加首次运行配置向导 |
| 单元测试补充 | 中 | 提高覆盖率到 80%+ |
| CI/CD 配置 | 中 | GitHub Actions |
| 更多 Provider 支持 | 低 | Azure, Vertex |

### 6.2 已知限制

| 限制 | 原因 |
|------|------|
| Feature flags 全部关闭 | `feature()` 始终返回 false |
| Computer Use 功能受限 | Stub 实现 |
| 语音模式不可用 | 依赖原生模块 |
| Chrome 集成不可用 | Stub 实现 |

### 6.3 技术债务

1. **类型声明**: 部分模块使用 `any` 类型
2. **测试覆盖**: 当前约 25%，目标 80%
3. **文档**: API 文档不完整

---

## 七、关键配置文件

### 7.1 package.json 关键字段

```json
{
  "name": "claude-code-one",
  "version": "1.0.4",
  "bin": {
    "claude-one": "dist/cli.js"
  },
  "scripts": {
    "build": "bun run build.ts",
    "dev": "bun run scripts/dev.ts",
    "test": "bun test"
  }
}
```

### 7.2 scripts/defines.ts

```typescript
export const DEFINES: Record<string, string | boolean | number> = {
  VERSION: '"1.0.4"',
  BUILD_TIME: Date.now(),
  BUILD_TARGET: '"cli"',
  BUILD_ENV: '"development"',
}
```

### 7.3 src/entrypoints/cli.tsx (Polyfill)

```typescript
// Feature flag polyfill
globalThis.feature = () => false

// MACRO polyfill
globalThis.MACRO = {
  VERSION: '1.0.4',
  // ...
}
```

---

## 八、依赖说明

### 8.1 核心依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| @anthropic-ai/sdk | ^0.80.0 | Anthropic API |
| @modelcontextprotocol/sdk | ^1.29.0 | MCP 协议 |
| commander | ^14.0.3 | CLI 框架 |
| react | ^19.2.4 | UI 框架 |
| ink | 内置 | 终端 UI |
| marked | ^17.0.5 | Markdown 解析 |
| zod | ^4.3.6 | Schema 验证 |

### 8.2 平台特定依赖

| 包名 | 平台 | 用途 |
|------|------|------|
| sharp | 全平台 | 图像处理 |
| fflate | 全平台 | 压缩解压 |

---

## 九、问题排查指南

### 9.1 常见问题

| 问题 | 解决方案 |
|------|----------|
| `git-bash not found` | 设置 `CLAUDE_CODE_GIT_BASH_PATH` |
| `API key not found` | 设置 `ANTHROPIC_API_KEY` |
| `Module not found` | 运行 `bun install` |
| `TypeScript errors` | 检查 `bun.lock` 是否最新 |

### 9.2 调试命令

```bash
# 查看版本
bun run dev -- --version

# 查看帮助
bun run dev -- --help

# 调试模式
bun run dev -- -d

# 运行测试
bun test

# 类型检查
bunx tsc --noEmit
```

---

## 十、联系信息

- **Repository Owner**: Edisonzszs
- **GitHub**: https://github.com/Edisonzszs/Claudecode-one
- **AI Assistant**: Claude (Anthropic)

---

*本文档由 Claude 生成，用于项目状态追踪。*