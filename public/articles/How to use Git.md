# 如何使用 Git 将代码提交到 GitHub

## 步骤

### 1. 初始化本地仓库

在项目文件夹中打开终端并运行以下命令：

```bash
git init
```

### 2. 添加远程仓库

将本地仓库与 GitHub 仓库关联：

```bash
git remote add origin https://github.com/your-username/your-repository.git
```

### 3. 添加文件到暂存区

将所有更改添加到暂存区：

```bash
git add .
```

### 4. 提交更改

提交更改并添加提交信息：

```bash
git commit -m "Your commit message"
```

### 5. 推送到 GitHub

将本地仓库的更改推送到 GitHub：

```bash
git push -u origin (branch)
```

## 问题

### 本地分支的名称与远程仓库的分支名称不同，或本地分支未更新

1. **重命名本地分支以匹配远程分支名称**

如果本地分支名称与远程分支名称不同，可以使用以下命令重命名本地分支：

```bash
git branch -m old-branch-name new-branch-name
```

2. **将本地分支与远程分支关联**

如果本地分支未与远程分支关联，可以使用以下命令将本地分支与远程分支关联：

```bash
git branch --set-upstream-to=origin/remote-branch-name
```

3. **拉取远程分支的更新**

如果本地分支未更新，可以使用以下命令从远程分支拉取最新的更改：

```bash
git pull origin branch-name
```

4. **检查分支状态**

使用以下命令检查当前分支状态，确保本地分支与远程分支同步：

```bash
git status
```

### 本地分支与远程分支之间有差异

如果本地分支与远程分支之间有差异，可以按照以下步骤解决：

1. **查看差异**

   使用以下命令查看本地分支与远程分支之间的差异：

   ```bash
   git diff origin/branch-name
   ```

2. **合并远程分支的更改**

   如果需要将远程分支的更改合并到本地分支，可以使用以下命令：

   ```bash
   git merge origin/branch-name
   ```

3. **解决冲突**

   如果在合并过程中出现冲突，需要手动解决冲突。解决冲突后，使用以下命令标记冲突已解决：

   ```bash
   git add .
   ```

4. **提交合并结果**

   解决冲突并添加更改后，提交合并结果：

   ```bash
   git commit -m "Resolved merge conflicts"
   ```

5. **推送更改**

   最后，将本地分支的更改推送到远程分支：

   ```bash
   git push origin branch-name
   ```

## 常用命令

- `git status`：查看当前仓库状态
- `git branch`: 检查当前分支
- `git log`：查看提交历史
- `git pull`：拉取远程仓库的更改
- `git clone`：克隆远程仓库

- `git remote -v`：查看当前 Git 仓库的远程信息
- `git remote show origin`：查看更详细的远程仓库信息

- `git remote set-url origin <new-repository-url>`: 修改现有的远程仓库 URL

  ps：使用`Ctrl + Shift + V`可以快捷的打开 Markdown 文件的预览模式
