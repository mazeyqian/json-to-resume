# json-to-resume

这是一个便捷的 JSON 转简历工具

## 预览

![](./images/json-to-resume-print-w800.jpg)

## 使用指南

JSON 文件位于路径：`src/conf/resume.js`

| 字段 | 说明 | 示例 |
| --- | --- | --- |
| title | 简历标题 | 初级喂猫师 |
| pageAndFileName | 页面/文件标题 | 猫宁-初级喂猫师-2年 |
| personInfo | 个人信息 | - |
| personInfo.left | 个人信息 - 左边栏 | 姓名、性别 |
| personInfo.left | 个人信息 - 右边栏  |  院校、专业 |
| companies | 工作经历 | - |
| projects | 项目经验 | - |
| skills | 技能 | - |
| patents | 其他 | - |

## 本地启动

``` bash
# install dependencies
npm install

# serve with hot reload
npm run dev

# build for production
npm run build
```
