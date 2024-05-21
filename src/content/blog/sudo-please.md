---
title: "Tired of Sudo? Use Please!"
description: "Learn how you can run the commands which require 'sudo' with 'please'"
pubDate: "May 21 2024"
heroImage: "/blogs/sudo-please/cover.jpg"
---

<!-- # Sudo Please! - Learn how you can run the commands which require 'sudo' with 'pleaase' -->

If you ever used linux, you know that some commands requires us to use `sudo` to run them. In this article, we will show you how you can run the commands which require `sudo` with `please`.

You know that we can give alias to the commands in linux. we can make use of it to create alias for the sudo command

run the below commands to set the alias for 'sudo'
```bash
alias please=sudo
```
now you can run the commands which require 'sudo' with 'please', see below examples
```bash
please whoami
please apt-get update
please rm -rf /tmp
```

# now make it work on every terminal session. 
open the ~/.bashrc or ~/.zshrc file and add the below code
```bash
alias please=sudo
```
save the file and restart the terminal. now you can run the commands which require 'sudo' with 'please'

---
### Thanks for hopping in! See you next time.