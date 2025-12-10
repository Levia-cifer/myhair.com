# MyHair.com — Local Project

This repository contains the My Hair Dot Com static site (HTML/CSS/JS) with videos and assets.

Quick notes:
- The project is static — open `index.html` in a browser to preview.
- The repo may contain large video files. For large binaries (MP4s) we recommend using Git LFS before pushing to GitHub:
  - Install Git LFS: `git lfs install`
  - Track MP4s: `git lfs track "*.mp4"`
  - Commit the generated `.gitattributes` and then push.

How to create a remote and push (pick one):

1) Using GitHub CLI (`gh`):

```powershell
cd "C:\Users\MY DELL LAPTOP 5\Downloads\MyHair.com"
# create repo interactively (private/public)
gh repo create myhairdotcom --public --source=. --remote=origin
# then push
git push -u origin main
```

2) Using GitHub web UI:
- Create a new repository on GitHub (name: `myhairdotcom` or whatever you prefer).
- In your project folder run:

```powershell
cd "C:\Users\MY DELL LAPTOP 5\Downloads\MyHair.com"
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

If you have large media files and don't want them in git history, consider:
- Moving `video/` into a separate storage (cloud) and referencing them.
- Or use Git LFS to track `*.mp4`.

If you'd like, I can:
- Create and commit these files locally (I will initialize git and make the first commit now).
- Attempt to create the GitHub repo for you with `gh` (requires you to be logged-in). Let me know if you want me to run `gh repo create`.

