## A workflow
1. update posts in data/posts/*.md, where * is the date today.
```bash
npm run post
```
2. generate web pages
```bash
npm run dev
```
3. update on git
```bash
git add .
git commit -m"update"
git push
```