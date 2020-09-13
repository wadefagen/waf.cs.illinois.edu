---
title: Using Github Actions to Build a Jekyll Site and Deploy via `rsync` at Illinois
---

GitHub provides **GitHub Actions** as a streamlined way to trigger when events occur (ex: a `push`) to a git repository.  An action is comprised of three required pieces:

- A name describing the action (ex: `Jekyll Build and Deploy`)
- The list of triggers (ex: `on: push: branches: ['master']`)
- The job(s) that run in response to a trigger activation, which runs in a virtual container

I have several websites here at Illinois that are using Jekyll including my faculty website, my course websites, and my research group website.  Previously, I had a server listening for a webhook that was sent by git when a `push` occurred.  This process removed the need for the server and now building and deploying is handled by a GitHub Action.

## 1. Defining the GitHub Action

All GitHub Actions are defined by `.yml` files inside `/.github/workflows/` in a git repository.  (The specific name of the `.yml` file is up to you.)  I created `.github/workflows/jekyll.yml` and configured it in the following way to build and deploy a Jekyll-based:

- The action triggers on a `push` to the `master` branch only.
- The action then does four steps as part of it's job:
  1. Checks out the repository to the local VM (via the github-provided `actions/checkout@v2` script)
  2. Builds the Jekyll site (via a `docker run` command using the `jekyll/builder:latest` docker image)
  3. Installs the ssh key for the deployment (via the `shimataro/ssh-key-action@v2` script)
  4. Deploys the built `_site` using `rsync` (via calling `rsync` directly)

The full script is below, with details follow the script to set up the secrets defined within:

```
name: Jekyll Build and Deploy

on:
  push:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Build the site in the jekyll/builder container
      run: |
        docker run \
        -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
        jekyll/builder:latest /bin/bash -c "chmod -R 777 /srv/jekyll && jekyll build --future"

    - name: Install SSH key
      uses: shimataro/ssh-key-action@v2
      with:
        key: ${{ secrets.DEPLOY_KEY }}
        known_hosts: ${{ secrets.KNOWN_HOSTS }}

    - name: Deploy via rsync
      run: |
        rsync -rtvzi ${{ github.workspace }}/_site/ ${{ secrets.DEPLOY_USER }}@${{ secrets.DEPLOY_HOST }}:${{ secrets.DEPLOY_PATH }}
```

## 2. Setting up secrets

All variables in the `secrets` dictionary are stored, encrypted, in your GitHub repository under "Settings -> 

Five secret values are required to run the script:

1. `DEPLOY_HOST`, the name of the deployment machine (ex: `web.illinois.edu`)
2. `DEPLOY_USER`, the username for the connection to `DEPLOY_HOST` (ex: `waf`)
3. `DEPLOY_KEY`, the private key file to access `DEPLOY_HOST` as `DEPLOY_USER` (including all header/footer lines)
4. `DEPLOY_PATH`, the path to deploy the built site on `DEPLOY_HOST` (ex: `/home/waf/public_html`)
5. `KNOWN_HOSTS`, the public keys (known_hosts) to connect to `DEPLOY_HOST` (the full output of `ssh-keyscan web.illinois.edu`)

The specific values depend on where the site is deployed.  For many of my sites, I use the cPanel hosting provided by campus as https://web.illinois.edu/.

### CPanel

For websites hosted on the `web.illinois.edu` CPanel, use the following secrets:

- `DEPLOY_HOST` is `web.illinois.edu`
- `DEPLOY_USER` is the username of your hosting account (by default it's your NetID, but may be anything)
- `DEPLOY_PATH` is based off your username, replacing `$USER` with your username, and using: `/home/$USER/public_html`
- `KNOWN_HOSTS` is the following public keys (this is the full output of `ssh-keyscan web.illinois.edu`):

```
# web.illinois.edu:22 SSH-2.0-OpenSSH_7.4
web.illinois.edu ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCrm5DNKPN2dJ2CiTqjE1U/msIdpdeLtCvdejsCZqElwZ+z9GIVJ5j5J5BNCbytfZ5Cv7u3fw2XB2DWrqgZkQWQ2APL/UhHB/PuYBu/NUOH0Zso7sKtE2jy1sIb4SEJ+eLpYVHsddQ0AB5FDcpFzA86MvKulcjGRsWAc9S2nVaXjTuU+Nrl2gqtgaTAFCHs/nxryoGL7xRMOlOi6xseSJouS8+8/2Q/M11xXcHgkY7sDaFudWMWerKtJ296HaOjg4+sk+nm0VbZCwa3YJNykzK8ltYc8B+/wbxBc7ynsTgRlaTNf2Bl/s5qXk2IU2gMcuX6CUrCxXLBTASh/4jg1Pyv
# web.illinois.edu:22 SSH-2.0-OpenSSH_7.4
web.illinois.edu ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBASneN9P+7Hn37Per7p2lRSLRzoUlOWUOjObaXiM9qdrCnD/WmujEBd4R+5iCgGOEA9ruFY3i+XfDMx1CeArHU8=
# web.illinois.edu:22 SSH-2.0-OpenSSH_7.4
web.illinois.edu ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBbW65Sk2dssyQ4vx6hZ1ecD10EPN26HkX+kG2sGyoP7
```

Finally, your `DEPLOY_KEY` is your private SSH key (basically a really, really long password).  Unfortunately, CPanel will only give you an encrypted key (which requires a password to decrypt it every time it is used, which makes it not useful for this script).  To produce a useful key, we'll:

1. Generate the encrypted key from CPanel,
2. Decrypt it,
3. Save the decrypted key as the `DEPLOY_KEY` secret

To decrypt the key: `ssh-keygen -p -f $KEY_FILE`, where $KEY_FILE is your encrypted key file.







