# Bookshelf

Chrome Bookmarks 书签工具导出指定文件夹分享工具。

## 使用

```js
// step 1
yarn

// step 2
// 将导出的文件(eg. bookmarks_2020_1_14.html)放入项目中

// step 3
yarn start
// or
yarn start _your_file_

// step 4
// 访问 http://localhost:1234
```

- 右上角删除按钮，进入删除状态，点击文件夹标题，可删除整个分类文件夹。
- 右上角导出按钮，导出 `html` 文件，用于浏览器的导入。

## 上传至 github

```js
yarn build
// 复制导出后的 bookmark.html 到 docs/
// 重命名为 index.html
// 配置你项目的 github page
```

[配置 GitHub Pages 站点的发布源](https://help.github.com/cn/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 例子

http://blog.x-ray.work/bookshelf/
