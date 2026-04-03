# Claude Code One

<p align="center">
  <strong>Claude Code CLI 源码还原</strong><br>
  <sub>从官方 npm 包 source map 中还原的完整 TypeScript 源码，可本地运行</sub>
</p>

---

## ⚠️ Warning

本仓库为非官方版本，基于公开 npm 发布包 source map 还原，仅供研究学习。源码版权归 Anthropic 所有。

---

## 快速开始

```bash
# 安装依赖（需要 Bun ≥ 1.3.5 或 Node.js ≥ 18）
bun install

# 启动 CLI
bun run dev

# 验证版本
bun run dev -- --version
```

## 从源码中发现的 7 大隐藏功能

通过阅读还原后的 TypeScript 源文件，我们发现了大量未公开的隐藏功能。这些功能通过编译开关（`feature()`）和用户类型（`USER_TYPE`）进行门控，外部发布版中大部分被裁剪。

### 1. BUDDY — AI 电子宠物

终端里的拓麻歌子！一个完整的虚拟宠物系统。

- **18 种物种**：鸭子、鹅、猫、龙、章鱼、猫头鹰、企鹅、乌龟、蜗牛、幽灵、六角恐龙、水豚、仙人掌、机器人、兔子、蘑菇、果冻、胖猫
- **5 级稀有度**：普通(60%) → 非凡(25%) → 稀有(10%) → 史诗(4%) → 传说(1%)
- **1% 闪光概率**：独立于稀有度，任何宠物都有 1% 概率成为闪光个体
- **编译开关**：`feature('BUDDY')`

### 2. KAIROS — 永不关机的 Claude

关掉终端 Claude 还在运行的持久助手模式。

- **跨会话持久运行**：通过 `.claude/settings.json` 的 `assistant: true` 激活
- **自动做梦（Dream）**：距上次整合超 24 小时且有 5+ 新会话时，后台自动启动记忆整合
- **编译开关**：`feature('KAIROS')`

### 3. ULTRAPLAN — 云端深度规划

把难题甩给云端 Opus 独立研究最长 30 分钟。

- **流程**：`/ultraplan <prompt>` → 创建远程会话 → Opus 独立研究 → 浏览器查看方案
- **完全内部限定**：外部版永远不可用
- **编译开关**：`feature('ULTRAPLAN')`

### 4. Coordinator — 多 Agent 编排模式

主 Claude 变成纯指挥官，Worker 并行执行任务。

- **角色分离**：Coordinator 只有三个工具——派活（Agent）、通信（SendMessage）、停工（Shutdown）
- **核心铁律**：系统提示中明确规定"禁止甩锅式委派"
- **编译开关**：`feature('COORDINATOR_MODE')`

### 5. 26+ 隐藏命令 & 秘密开关

| 命令 | 功能 | 开关 |
|------|------|------|
| `/buddy` | 宠物系统 | `BUDDY` |
| `/proactive` | 主动自主模式 | `PROACTIVE` / `KAIROS` |
| `/assistant` | 助手模式 | `KAIROS` |
| `/brief` | 简报模式 | `KAIROS_BRIEF` |
| `/bridge` | 远程控制桥接 | `BRIDGE_MODE` |
| `/voice` | 语音模式 | `VOICE_MODE` |
| `/ultraplan` | 云端深度规划 | `ULTRAPLAN` |
| `/fork` | 子代理分叉 | `FORK_SUBAGENT` |

### 6. Bridge — 远程遥控终端

从 claude.ai 或手机直接操控本地 CLI。

- **WebSocket 实时连接**：本地 CLI 通过 WebSocket 与 claude.ai 建立双向通道
- **完整远程控制**：远程端可以发送消息、批准权限、查看输出
- **编译开关**：`feature('BRIDGE_MODE')`

### 7. 50 个编译开关 + 远程门控

外部发布版是阉割版。Anthropic 通过三层门控控制功能：

1. **编译时开关**（`feature()`，约 50 个）— 构建时决定代码包含/排除
2. **用户类型**（`USER_TYPE`）：`ant`（内部）vs `external`（外部用户）
3. **GrowthBook 远程 A/B 测试**：运行时动态控制功能

---

## 项目结构

```
src/                    # 核心源码
├── tools/              # 53 个工具（Bash/FileEdit/Agent/MCP...）
├── commands/           # 87 个斜杠命令
├── services/           # API / MCP / analytics / autoDream
├── components/         # 148 个终端 UI 组件（React + Ink）
├── hooks/              # 87 个自定义 Hooks
├── buddy/              # 宠物伴侣系统
├── assistant/          # KAIROS 助手模式
├── coordinator/        # 多 Agent 协调器
├── bridge/             # 远程控制桥接
├── proactive/          # 主动模式
├── vim/                # Vim 模式引擎
└── voice/              # 语音交互
```

---

## 项目状态

| Milestone | Status | Description |
|-----------|--------|-------------|
| M1: Project Init | ✅ | Directory structure and identity |
| M2: Type Fix | ✅ | TypeScript error reduction (0 source errors) |
| M3: Core Modules | ✅ | Query engine and API layer |
| M4: Tools | ✅ | Tool system verification (27 tools) |
| M5: Tests | ✅ | All tests passing (2009/2009) |
| M6: Release | ✅ | Build verification |

---

## 平台支持

| Platform | Status | Notes |
|----------|--------|-------|
| Windows | ✅ | Requires Git Bash |
| macOS | ✅ | Full support |
| Linux | ✅ | Full support |
| WSL | ✅ | Full support |

---

## 数据来源

- **npm 包**：`@anthropic-ai/claude-code`
- **还原方式**：提取 `cli.js.map` 中的 `sourcesContent`

---

## License

MIT License - This project is for research and learning purposes only.

All rights to Claude Code belong to [Anthropic](https://www.anthropic.com/).

---

## 声明

- 源码版权归 Anthropic 所有
- 仅用于技术研究与学习，请勿用于商业用途
- 如有侵权，请联系删除

---

## Contributors

- [Edisonzszs](https://github.com/Edisonzszs) - Repository Owner
- [Claude](https://www.anthropic.com/) - AI Assistant