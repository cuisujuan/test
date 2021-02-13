## 项目名称

## 项目介绍

## 项目人员

## 目录结构

```
mock/ mock 接口文件存储

src/
	common/ 所有页面的通用文件
		api/
			index.js 所有页面请求的 API 列表，统一维护
		styles/
			common.less 通用样式文件，包括 reset 和一些工具样式
		utils/
			index.js 通用工具方法，包括 login、ua、cookie、request 等

pages/  （入口，必须命名为 pages）
	index/   index.html（index 页面）
		components/ 各个子模块
		index.html
		index.js（入口文件，且必须命名为 index.js）
		index.less

	detail/   detail.html（detail 页）
		components/ 各个子模块
		index.html
		index.js（入口文件，且必须命名为 index.js）
		index.less
```
