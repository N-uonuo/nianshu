**常见的提交信息格式**

    <类型>(<范围>): <描述>

    [可选] <正文>

    [可选] <脚注>

**提交信息的组成部分**

- 类型（type）: 必须，表示提交的目的或行为类型。

- 范围（scope）: 可选，表示提交影响的范围（例如，功能模块、文件等）。

- 描述（description）: 必须，简洁明了地描述此次提交的目的或修改内容。
- 正文（body）: 可选，详细描述本次提交的更改（可分多行描述，最好写清楚为什么做这项修改）。
- 脚注（footer）: 可选，通常用于关联任务、bug ID 或 breaking changes。

**常见类型**

- feat: 新功能（feature）

- fix: 修复 bug

- docs: 仅仅修改文档
- style: 代码格式（不影响功能的更改，如缩进、空格、分号等）
- refactor: 代码重构（既不修复 bug 也不添加新功能的更改）
- perf: 性能优化
- test: 添加测试或修改测试
- build: 影响构建系统的更改（如 webpack 配置、CI 配置）
- ci: 与持续集成相关的更改
- chore: 其他杂项更改（例如，依赖项更新、代码清理等）
- revert: 撤销某个提交
