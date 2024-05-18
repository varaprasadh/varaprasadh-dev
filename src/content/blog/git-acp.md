---
title: "How i do git add, commit, and push with a single command"
description: "you were in hurry to run git add, git commit, and git push? Well, Learn how."
pubDate: "May 18 2024"
heroImage: "/blogs/git-acp-cover.jpg"
---

## Office is on fire 🔥, Push the code to git. 

Are you ever in a situation when you commit the code and forgot to push it? and your co-developer is awaiting for the new bug fixes you made. 

```bash
git add .
git commit -m "fixed display name in the profile page"
# you forgets to run the git push command
```

### what if i say running below command does add, commit and push for me. 

```bash
gitacp "fixed display name in the profile page"
```
in order to use the above command, you need to edit your `~/.bashrc` or `~/.zshrc` file and apped the below code. <br/>
and run `source ~/.bashrc` or `source ~/.zshrc` to reflect the changes.
```bash
function gitacp() {
    if [ -z "$1" ]; then
        echo "Please provide a commit message."
        return 1
    fi
    git add .
    git commit -m "$1"
    git push
}

```

Now you can have the ability to run the command like below and forget about pushing the code manually.

```bash
gitacp "added navbar"
```

It's gonna run `git add .` and `git commit -m "added navbar"` and `git push` for you.

### Well, well, well. until next time, keep pushing.