# Wallhaven 壁纸站接口

本项目基于Nodejs编写，提供Docker支持！可自行打包成镜像使用！

# 如何使用

## 常规方式

* 拉取项目
* 输入 `yarn` 或者 `npm install` 安装依赖包
* 输入 `yarn run start` 或 `npm run start` 启动项目
* 打开：[http://127.0.0.1:8360](http://127.0.0.1:8360) 开始使用！

## 容器方式

* 拉取项目
* 打包成容器镜像
* 基于该镜像运行容器
* 完事

# 接口规则

## 基础字段

* data：结果
* code：状态码
  * 200 = 请求成功
  * -1 = 请求失败
* msg：请求失败的时候错误信息

## 包含接口

![](www/static/image/img.png)