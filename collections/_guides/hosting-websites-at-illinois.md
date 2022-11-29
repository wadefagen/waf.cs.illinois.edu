---
title: Hosting a Website at The University of Illinois
---

For nearly a decade, I have hosted various websites at Illinois including my [faculty website (https://waf.cs.illinois.edu/)](https://waf.cs.illinois.edu/), research websites like [d7](https://d7.cs.illinois.edu), and others.  This post specifically looks at **how to host static files** and assumes you already know how to build a website (ex: using Jekyll, 11ty, raw HTML, or whatever other technology stack you love).


## Hosting

The University of Illinois provides free cPanel website hosting at [https://web.illinois.edu/](https://web.illinois.edu/).

- You can use SCP/SFTP to move files into your cPanel account.
- You will need to use SSH keys to login.
- Visit [https://web.illinois.edu/](https://web.illinois.edu/) to get started.


## Synchronizing Content

Initially, I was building my content and using `rsync` to synchronize content:

```
rsync -avzh waf@web.illinois.edu:/home/waf/public_html /public
#           User@RemoveHost:RemotePath                 LocalPath
```

However, this is both an extra step and breaks down when you need to allow others to update content (ex: in a research group) without giving them your credentials.

### Using GitHub Actions

Today, all of my sites are automatically built and updated using Github Actions.  The Action triggers automatically every push and does the following:

- Checks out the latest code in your git repository,
- Builds your website using the command you supply (ex: using Jekyll, 11ty, etc)
- Synchronize the built website with the web server


#### Step 1: Creating, Authorizing, and Downloading your Private SSH Key

Setting up GitHub Actions requires the use of an SSH Key.

1. Once logged in, find **SSH Action** in your cPanel and click on it.
2. Then click **Manage SSH Keys**,
3. Then click **Generate a New Key**,
4. Complete the "Generate a Public Key" page *(use any throw-away passowrd here, we'll remove the from the key in a moment; the default RSA/2048 key type/size is fine)* and then click **Generate Key**,
5. Once you see "Key Generation Complete!", click **Go Back**,
6. Find your new key under "Public Keys" and click **Manage**,
7. Click **Authorize** to enable the use of the key,
8. Once you see "The key {name} has been authorized.", click **Go Back**,
9. Finally, under "Private Keys* (the second list), click **Download Key**


#### Step 2: Setting Up GitHub Actions















You can always manually synchronize content, but GitHub Actions provides a means to automatically syncronize 