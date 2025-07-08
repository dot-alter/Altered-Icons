# 项目贡献指南  
<sub>阅读时间：8分钟</sub>

**喜欢打造你自己的设计环境吗 💫？** 我们重视每一位创意者的参与。

贡献非常简单：你只需要了解项目的设计原则、风格和度量标准。你可以在这里找到相关信息：

+ [原则 →](./01_principles.md)
+ [设计 →](./02_design.md)
+ [度量指标 →](./03_metrics.md)

如果你已经熟悉这些内容，接下来请仔细阅读**贡献条款**、**实践流程**和**建议指南**。

**本节内容：**

+ [参与意识 ↴](#-参与意识)
+ [贡献实践 ↴](#-贡献实践)
+ [建议与提示 ↴](#-建议与提示)
+ [标签系统 ↴](#-标签系统)
+ [其他条款 ↴](#-其他条款)

---

## 🙇‍♂️ 参与意识

通过你的贡献，你正在帮助更多人找到他们需要的素材。因此，请确保你的贡献符合项目的目标和风格。

### 你可以如何贡献？

1. **新增图标**  
   你可以上传 SVG 图标文件至对应分类目录。请克隆此仓库并提交 Pull Request（简称 PR），我们会进行每周审查。

2. **建议与想法**  
   如果你觉得缺少某个图标，可以通过创建新 Issue 的方式提交建议。我们会在每周进行审阅。

3. **语言翻译**  
   包容性对我们来说至关重要。如果你发现缺少某种语言的文档，欢迎提交你的翻译版本。

开始之前，建议你先查看下方的各个内容小节。

---

## ⛳ 贡献实践

如果你打算设计一个全新的图标，请遵循以下步骤，确保你的工作**有效**、**可审阅**并**符合项目标准**：

1. ### 选择  
   明确你要设计图标的主题和风格（Chubby 或 Flattered）。可以参阅 [设计原则 →](./01_principles.md)。

2. ### 审查  
   查看该图标是否已存在，避免重复提交。请参考 [分类列表 →](../../icons/README.md)。

3. ### 设计指南  
   若该图标尚未存在，你可以开始设计。请使用提供的网格和基础形状：
   + [基础图形 →](../../icons/material/Ai-key-shapes-cb.png)
   + [圆形图形 →](../../icons/material/Ai-key-shapes-circle-cb.png)
   + [三角形图形 →](../../icons/material/Ai-key-shapes-triangle-cb.png)

4. ### 发布提交  
   提交一个 PR，并包含 SVG 和 PNG（背景透明）格式的图标。请查看 [发布要求 ↴](#发布要求)

5. ### 审核通过  
   我们将审查你的 PR 是否符合项目标准。如被拒绝且你认为是误判，欢迎发起一个讨论（Discussion），我们会重新评估。

### 发布要求

+ **Chubby 风格图标** 存放路径：
  - SVG: `./icons/chubby/svg/<category>`
  - PNG: `./icons/chubby/png/<category>`

+ **Flattered 风格图标** 存放路径：
  - SVG: `./icons/flattered/svg/<category>`
  - PNG: `./icons/flattered/png/<category>`

+ 每个图标都必须在相应类型与分类中按字母顺序添加到图标索引中。 [查看索引 →](../../icons/README.md)

+ Issues、PR 和提交记录需遵循特定格式。请参阅以下模板：

	+ [🆕 添加新图标](../../.github/PULL_REQUEST_TEMPLATE/pull_request_icon.md)  
	+ [🔀 图标请求](../../.github/ISSUE_TEMPLATE/new_icon_request.md)  
	+ [🐞 Bug 报告](../../.github/ISSUE_TEMPLATE/bug_report.md)  
	+ [🆎 翻译请求](../../.github/PULL_REQUEST_TEMPLATE/translation_request)

---

## 📋 建议与提示

想获得更好的设计效果？我们建议：

1. **草图绘制很关键**  
   在进入数字化设计前，先绘制草图。对 Chubby 风格特别有效。

2. **遵循设计指南**  
   使用提供的网格与基础图形可以保持统一风格。

3. **勇敢提问**  
   如有任何疑问，可在 GitHub 发起讨论或创建一个 Issue。

---

## 🏷️ 标签系统

为保持井然有序并便于追踪，我们在 PR 和 Issues 中使用以下标签：

| 标签                        | 描述                             |
|----------------------------|----------------------------------|
| `status: pending`          | PR 正在等待审核                 |
| `status: approved`         | PR 已通过审核，准备合并         |
| `status: changes requested`| 已请求作者进行更改              |
| `status: rejected`         | PR 或 Issue 被拒绝               |
| `type: icon`               | 新图标贡献                       |
| `type: translation`        | 翻译类贡献                       |
| `type: suggestion`         | 新想法或建议                     |
| `help-wanted`              | 需要社区协助                     |
| `good-first-issue`         | 新手贡献者的良好入门项           |

---

## 🧾 其他条款

### 图标文件命名规范：

```md
ai-[icon-name]-[style]
```

**说明：**

+ `ai` → 固定前缀，表示 Altered Icons 项目
+ `[icon-name]` → 图标名称，使用 **kebab-case** 格式
+ `[style]` → 图标风格后缀：
  + `cb` 表示 **Chubby 风格**
  + `ft` 表示 **Flattered 风格**

**示例：**

+ 消息图标（Chubby）：`ai-message-box-cb.svg`  
+ 设置图标（Flattered）：`ai-settings-bald-man.svg`  
+ 用户图标（Chubby）：`ai-user-profile-cb.png`

⚠️ **请避免以下命名错误：**

- ❌ 使用空格或大写字母：`Ai MessageBox CB.svg`
- ❌ 添加冗余单词或语言代码：`Ai-icon-MessageBox-chubby-final.svg`
- ❌ 使用特殊字符：`Ai-message@box(cb).svg`

### 语言规范

为了确保一致性并方便国际协作，**所有 Issues、PR、提交记录及图标文件名**必须使用**英文**，包括：

+ Issue 的标题与描述
+ Pull Request 的标题与说明
+ Commit 的信息与技术备注
+ SVG/PNG 图标文件名

> 这将帮助全球的开发者更容易地理解与参与项目。

---

### 未通过图标

即使某项贡献未被采纳，我们依然重视其创意价值。若某个图标可作为灵感或参考，我们将其移至 `./icons/community-drafts/` 文件夹中。

此类图标需符合部分发布要求：需包含 SVG 和 PNG 两种格式，并存放于 `community-drafts` 对应子目录中。

该文件夹中的所有图标通过 Git 提交历史保留贡献者署名。未来可以重新调整并重新提交以获取采纳机会。

查看详情：[未通过图标 →](../../icons/community-drafts/README.md)

---

## 🔮 第一次参与 GitHub 项目？

如果你是开源新手，可查看以下链接：

+ [什么是 GitHub Issue？（访问）](https://docs.github.com/zh/issues/tracking-your-work-with-issues/about-issues)  
+ [如何在 GitHub 上贡献（访问）](https://docs.github.com/zh/get-started/quickstart/contributing-to-projects)  
+ [如何创建 Pull Request（访问）](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)
