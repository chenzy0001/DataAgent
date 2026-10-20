# 顶会顶刊 Text2SQL 论文精选（2024–2026 · 含开源代码）

> 目标：筛选近两年（2024–2026）Text-to-SQL 方向的顶刊顶会论文，且**必须有公开开源代码**。
> 口径：会议范围覆盖 NLP（ACL / EMNLP / NAACL / COLING / COLM / IJCNLP-AACL）、数据库（SIGMOD / VLDB / ICDE）与通用 AI（NeurIPS / ICLR / ICML / AAAI）。所有代码仓库均已逐一做 HTTP 可达性校验。
> 结果：共 **42 篇**符合"顶会顶刊 + 有开源代码"条件的论文；另附少量影响力大但暂未官方开源的工作作为对照。

## 一、一页速览

| 方向 | 篇数 | 代表工作 |
|---|---|---|
| 数据库顶会（SIGMOD / VLDB / ICDE） | 8 | CodeS、OmniSQL、OpenSQL、ReViSQL、FinSQL |
| NLP 顶会（ACL / EMNLP / NAACL / COLING / COLM / AACL） | 19 | SENSE、DEA-SQL、SHARE、LinkAlign、MSC-SQL |
| 通用 AI 顶会（NeurIPS / ICLR / ICML / AAAI） | 15 | Alpha-SQL、CHESS、Spider 2.0、SQL-R1、Think2SQL |

## 二、数据库顶会（SIGMOD / VLDB / ICDE）

| 方法 | 会议·年份 | 核心贡献 | 开源代码 |
|---|---|---|---|
| CodeS | SIGMOD 2024 | 首个**完全开源**的 Text-to-SQL 语言模型系列（1B–15B），增量预训练 + 课程学习 + 双向数据增强；获 SIGMOD'24 最具影响力论文奖 | [github.com/RUCKBReasoning/codes](https://github.com/RUCKBReasoning/codes) |
| DAIL-SQL | VLDB 2024 | 系统评测 prompt engineering 三个维度（问题表示 / 示例选择 / 示例组织），提出集成方案，Spider 执行准确率 86.6% | [github.com/BeachWang/DAIL-SQL](https://github.com/BeachWang/DAIL-SQL) |
| NL2SQL360 | VLDB 2024 | 自动化 NL2SQL **设计空间探索与评测框架**，可面向用户需求搜索最优方案，提出 SuperSQL（Spider 87% / BIRD 62.66%） | [github.com/HKUSTDial/NL2SQL360](https://github.com/HKUSTDial/NL2SQL360) |
| MetaSQL | ICDE 2024 | Generate-then-Rank 框架，以 "metasql" 图结构作为中间表示，提升多表复杂查询 | [github.com/Kaimary/MetaSQL](https://github.com/Kaimary/MetaSQL) |
| FinSQL (BULL) | SIGMOD 2025 | 面向**金融分析**的模型无关 Text-to-SQL 框架 + BULL 数据集，参数高效微调适配财务报表 | [github.com/bigbigwatermalon/FinSQL](https://github.com/bigbigwatermalon/FinSQL) |
| OmniSQL | VLDB 2025 | 自动合成 2.5M 高质量数据（SynSQL-2.5M），7B / 14B 开源模型即达 SOTA | [github.com/RUCKBReasoning/OmniSQL](https://github.com/RUCKBReasoning/OmniSQL) |
| OpenSQL | VLDB 2025 | 用**合成中间监督**提升开源 LLM 的数据效率，缓解标注成本问题 | [github.com/TsinghuaDatabaseGroup/OpenSQL](https://github.com/TsinghuaDatabaseGroup/OpenSQL) |
| ReViSQL | VLDB 2025 | 可控且可验证的交互式 Text-to-SQL，逼近人类水平 | [github.com/uiuc-kang-lab/ReViSQL](https://github.com/uiuc-kang-lab/ReViSQL) |

## 三、NLP 顶会（ACL / EMNLP / NAACL / COLING / COLM / AACL）

| 方法 | 会议·年份 | 核心贡献 | 开源代码 |
|---|---|---|---|
| SENSE | ACL 2024 | 用"强 / 弱 LLM"合成数据 + 偏好学习，让 7B 模型在 BIRD 上超越更大模型 | [github.com/Yangjiaxi/Sense](https://github.com/Yangjiaxi/Sense) |
| DEA-SQL | ACL 2024 Findings | 工作流范式 + 分解增强注意力，Spider / Spider-Realistic / BIRD 提升 2–3 个百分点 | [github.com/FlyingFeather/DEA-SQL](https://github.com/FlyingFeather/DEA-SQL) |
| Knowledge-to-SQL | ACL 2024 Findings | 引入"数据专家 LLM"注入领域知识，缓解 schema 与业务语义鸿沟 | [github.com/Rcrossmeister/Knowledge-to-SQL](https://github.com/Rcrossmeister/Knowledge-to-SQL) |
| TA-SQL | ACL 2024 Findings | "生成前先对齐"策略抑制幻觉，对齐表 / 列 / 关系后再生 SQL | [github.com/quge2023/TA-SQL](https://github.com/quge2023/TA-SQL) |
| Symbol-LLM | ACL 2024 | 面向符号（表 / 知识 / 公式）的基础接口模型，统一结构化推理（含 Text2SQL） | [github.com/xufangzhi/Symbol-LLM](https://github.com/xufangzhi/Symbol-LLM) |
| Middleware | EMNLP 2024 | 为语言智能体提供工具中间件，提升复杂环境（含数据库 / 表格）中的任务表现 | [github.com/OSU-NLP-Group/Middleware](https://github.com/OSU-NLP-Group/Middleware) |
| Fused | EMNLP 2024 Findings | 无需人工的演示融合，提升 in-context 示例多样性 | [github.com/zirui-HIT/Fused](https://github.com/zirui-HIT/Fused) |
| DTS-SQL | EMNLP 2024 Findings | 面向**小模型**的分解式 Text-to-SQL 微调 | [github.com/MohammadrezaPourreza/DTS-SQL](https://github.com/MohammadrezaPourreza/DTS-SQL) |
| StructLM | COLM 2024 | 通用结构化知识 grounding 模型，覆盖含 Text2SQL 在内的 18 类任务 | [github.com/TIGER-AI-Lab/StructLM](https://github.com/TIGER-AI-Lab/StructLM) |
| SHARE | ACL 2025 | 基于小模型的层级式**动作纠错**助手，用纠错数据重构错误动作序列 | [github.com/quge2023/SHARE](https://github.com/quge2023/SHARE) |
| DCG-SQL | ACL 2025 | 深度上下文 **schema 链接图**，同时提升示例检索质量与 ICL 效率 | [github.com/jjklle/DCG-SQL](https://github.com/jjklle/DCG-SQL) |
| MSC-SQL | NAACL 2025 | 多候选采样 + 基于元数据的批判模型，小模型低成本逼近大模型 | [github.com/layer6ai-labs/msc-sql](https://github.com/layer6ai-labs/msc-sql) |
| Track-SQL | NAACL 2025 | 双抽取模块做 schema 与上下文追踪，**多轮对话**准确率提升 7–9 个百分点 | [github.com/DMIRLAB-Group/Track-SQL](https://github.com/DMIRLAB-Group/Track-SQL) |
| Gen-SQL | COLING 2025 | "生成-接地-再生成"，用伪 schema 桥接自然语言问题与库结构，降本增效 | [github.com/jieshi10/gensql](https://github.com/jieshi10/gensql) |
| MAC-SQL | COLING 2025 | 多智能体协作框架（Selector / Decomposer / Refiner） | [github.com/wbbeyourself/MAC-SQL](https://github.com/wbbeyourself/MAC-SQL) |
| LinkAlign | EMNLP 2025 | 面向真实大规模多库的可扩展 schema 链接，Spider 2.0-Lite 纯开源 LLM 达 33.09 | [github.com/Satissss/LinkAlign](https://github.com/Satissss/LinkAlign) |
| JOLT-SQL | EMNLP 2025 | 联合损失微调 + 混淆感知的噪声 schema 采样，"小而强"且更快 | [github.com/Songjw133/JOLT-SQL](https://github.com/Songjw133/JOLT-SQL) |
| Chain-of-Query | IJCNLP-AACL 2025 | 多智能体协作的 SQL 辅助表格理解 | [github.com/SongyuanSui/ChainofQuery](https://github.com/SongyuanSui/ChainofQuery) |
| SLM-SQL | IJCNLP-AACL 2025 Findings | 系统探索**小语言模型**做 Text-to-SQL，并配套数据与模型 | [github.com/CycloneBoy/slm_sql](https://github.com/CycloneBoy/slm_sql) |

## 四、通用 AI 顶会（NeurIPS / ICLR / ICML / AAAI）

| 方法 | 会议·年份 | 核心贡献 | 开源代码 |
|---|---|---|---|
| CLLMs | ICML 2024 | 一致性 LLM，实现高效并行解码（可迁移到 SQL 等结构化生成） | [github.com/hao-ai-lab/Consistency_LLM](https://github.com/hao-ai-lab/Consistency_LLM) |
| Spider2-V | NeurIPS 2024 (D&B) | 首个**多模态智能体**基准，面向数据科学与工程真实工作流 | [spider2-v.github.io](https://spider2-v.github.io) |
| DACO | NeurIPS 2024 (D&B) | 应用驱动的数据分析数据集 + 代码生成评测 | [github.com/shirley-wu/daco](https://github.com/shirley-wu/daco) |
| CHESS | ICML 2025 (MAS workshop) | 四智能体分解框架（信息检索 / 模式选择 / 候选生成 / 单元测试），可在精度-成本-隐私间权衡 | [github.com/ShayanTalaei/CHESS](https://github.com/ShayanTalaei/CHESS) |
| ROUTE | ICLR 2025 | 鲁棒多任务微调与协作，跨 8 个开源 LLM 降低幻觉 | [github.com/D2I-ai/Route](https://github.com/D2I-ai/Route) |
| Spider 2.0 | ICLR 2025 | **企业级真实** Text-to-SQL 工作流基准（多方言 / Snowflake / 长上下文） | [github.com/xlang-ai/Spider2](https://github.com/xlang-ai/Spider2) |
| Alpha-SQL | ICML 2025 | 用**蒙特卡洛树搜索**做零样本推理式 Text2SQL，开源 32B 在 BIRD 达 SOTA | [github.com/HKUSTDial/Alpha-SQL](https://github.com/HKUSTDial/Alpha-SQL) |
| MAGIC | AAAI 2025 | 自动生成"自纠错指南"，即插即用提升 ICL | [github.com/microsoft/SynQo](https://github.com/microsoft/SynQo) |
| SQL-R1 | NeurIPS 2025 | 用纯强化学习（GRPO）训练 NL2SQL 推理模型，Spider 88.6 / BIRD 67.1 | [github.com/IDEA-FinAI/SQL-R1](https://github.com/IDEA-FinAI/SQL-R1) |
| BIRD-CRITIC | NeurIPS 2025 (D&B) | 真实数据库应用中"用户问题修复"基准（SWE-SQL） | [github.com/bird-bench/BIRD-CRITIC-1](https://github.com/bird-bench/BIRD-CRITIC-1) |
| PARROT | NeurIPS 2025 (D&B) | 覆盖 22 种数据库系统的 **SQL 方言翻译**基准 | [code4db.github.io/parrot-bench](https://code4db.github.io/parrot-bench) |
| BIRD-INTERACT | ICLR 2026 | 以**动态交互**视角重新定义 Text-to-SQL 评测 | [github.com/bird-bench/BIRD-Interact](https://github.com/bird-bench/BIRD-Interact) |
| LearNAT | ICLR 2026 | AST 引导的任务分解学习，增强 LLM 的 NL2SQL 分解能力 | [github.com/MrBlankness/LearNAT](https://github.com/MrBlankness/LearNAT) |
| Think2SQL | ICLR 2026 | 奖励密度与优势缩放用于 Text2SQL 的 RLVR，4B 模型对标 o3 | [github.com/spapicchio/Think2SQL](https://github.com/spapicchio/Think2SQL) |
| ReFoRCE | ICLR 2025 Workshop | 自我精炼 + 共识约束 + 列探索的 Text-to-SQL 智能体（Snowflake） | [github.com/Snowflake-Labs/ReFoRCE](https://github.com/Snowflake-Labs/ReFoRCE) |

## 五、重点论文精要（12 篇）

**CodeS（SIGMOD 2024）**：把 Text-to-SQL 当作"数据库领域语言"来预训练，训练出 1B–15B 全开源模型家族；核心贡献是证明**开源小模型 + 领域预训练**可在多个基准上超越通用闭源模型，是后续开源工作的基线起点。

**OmniSQL（VLDB 2025）**：与其苦思模型结构，不如把数据做对。先用自动化流水线合成 250 万条高质量 (question, SQL) 对，再微调开源底座；7B 模型即刷新开源 SOTA，强调**数据质量 > 模型规模**。

**OpenSQL（VLDB 2025）**：针对"开源 LLM 缺少高质量监督信号"的痛点，引入**中间监督**（如子查询、推理步骤）合成数据，在数据效率上显著优于直接监督微调。

**Alpha-SQL（ICML 2025）**：把 SQL 生成建模成搜索问题，用 MCTS + LLM 作为动作模型逐步构造查询，配合 LLM-as-Action-Model 做状态评估；零样本下开源 32B 在 BIRD 上取得 SOTA，是"推理式 Text2SQL"的代表。

**SQL-R1（NeurIPS 2025）**：只用**强化学习**（GRPO + 冷启动）训练 NL2SQL 推理能力，不依赖大量监督数据；在 Spider 88.6%、BIRD 67.1%，证明 RL 可有效注入 SQL 领域推理。

**Think2SQL（ICLR 2026）**：进一步研究 RLVR 的**奖励密度**与**优势缩放**，4B 小模型即可对标 o3 级别，是"小模型 + RL"路线的最新进展。

**CHESS（ICML 2025 workshop）**：把 pipeline 拆成信息检索、模式选择、候选生成、单元测试四个可插拔智能体，让用户在**准确率、成本、隐私**之间自由取舍，而非绑定单一昂贵管线。

**MAC-SQL（COLING 2025）**：经典多智能体范式——选择器筛表、分解器拆问题、精炼器改错，是 agent 化 Text2SQL 的早期代表性落地。

**LinkAlign（EMNLP 2025）**：聚焦真实企业场景的**大规模多数据库 schema 链接**，解决列名远超传统基准（Spider 2.0-Lite 每库平均列数 > 755）带来的链接难题，纯开源 LLM 即达该榜 SOTA。

**Spider 2.0（ICLR 2025）**：把评测从"教学数据库"推向**真实企业工作流**——需要处理超长 schema、多 SQL 方言、云数仓（Snowflake）与工程化上下文，标志评测进入"真实可用性"阶段。

**BIRD-INTERACT（ICLR 2026）**：认为静态问答不足以衡量实用能力，提出**动态多轮交互**评测范式（追问、澄清、试错），更贴近真实分析师工作方式。

**Track-SQL（NAACL 2025）**：专门针对**多轮对话**场景，用双抽取模块持续追踪 schema 与上下文，在 SparC / CoSQL 上把执行准确率提升 7.1% / 9.55%。

## 六、技术路线观察

1. **从"提示工程"走向"训练与强化"**：2024 年以 ICL / prompt 优化为主（DAIL-SQL、TA-SQL、DEA-SQL）；2025 年起，RL（SQL-R1、Think2SQL）、搜索式推理（Alpha-SQL）与高质量合成数据（OmniSQL、SENSE）成为主流。
2. **Schema Linking 被重新定义**：问题从"要不要做链接"变为"何时做、如何规模化"（LinkAlign、DCG-SQL、E-SQL、Knapsack Schema Linking）。
3. **评测向真实企业级与交互式迁移**：Spider 2.0、BIRD-CRITIC、BIRD-INTERACT、PARROT 共同把评测推向多方言、真实库、动态交互。
4. **开源小模型崛起**：CodeS、OmniSQL、SQL-R1、Think2SQL、DTS-SQL 证明 7B–32B 可逼近甚至超越闭源大模型，私有化部署成为可能。
5. **智能体化与多智能体协作**：MAC-SQL、CHESS、ReFoRCE、R3、Chain-of-Query 把 Text2SQL 从"单次生成"变成"多步协作 + 自校验"。

## 七、选型建议

| 场景 | 推荐工作 |
|---|---|
| 追求榜单 SOTA（有算力预算） | Alpha-SQL、SQL-R1、OmniSQL |
| 私有化 / 低成本部署 | CodeS、OmniSQL、SLM-SQL、DTS-SQL、SQL-R1 |
| 真实大规模多库 schema linking | LinkAlign、DCG-SQL、OpenSQL |
| 企业级 / 真实工作流评测 | Spider 2.0、BIRD-CRITIC、BIRD-INTERACT、PARROT |
| 多轮对话式分析 | Track-SQL、MSC-SQL |
| 多智能体 / Agent 架构 | CHESS、MAC-SQL、ReFoRCE、Chain-of-Query |
| 高质量训练数据合成 | OmniSQL、SENSE、OpenSQL |

## 八、补充：同方向影响力大但暂未官方开源

- **PURPLE**（ICDE 2024）：检索"逻辑算子组合"示例增强 LLM 的 SQL 逻辑组织能力。
- **REDSQL**（VLDB 2025）：基于数据库内容约束的即插即用 SQL 修正框架（论文声明的代码链接当前不可达）。
- **CHASE-SQL**（ICLR 2025）：多路径推理 + 偏好优化候选选择，曾登顶 BIRD（73.0%）。
- **XiYan-SQL**（arXiv 2024，技术报告）：多生成器集成 + M-Schema，长期位居 BIRD 公开榜前列（[github.com/XGenerationLab/XiYan-SQL](https://github.com/XGenerationLab/XiYan-SQL)）。

## 九、数据来源

1. **权威综述配套清单**：DEEP-PolyU《Next-Generation Database Interfaces: A Survey of LLM-based Text-to-SQL》(TKDE 2025) 及其 Awesome-LLM-based-Text2SQL 仓库。
2. **会议论文合集**：ACL Anthology、OpenReview、NeurIPS/ICML/ICLR/SIGMOD/VLDB 官方论文集。
3. **代码校验**：所有 GitHub 仓库均通过 HTTP 可达性校验（2026-10）。

> 说明：会议年份以论文正式发表年份为准；部分 2026 年会议（ICLR 2026 / SIGKDD 2026）录用信息以官方 OpenReview / 会议页面为准。
