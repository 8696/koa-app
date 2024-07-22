# Koa Node.js 项目

## 描述
这个项目是一个使用 Koa 框架构建的 Node.js 应用程序。它利用了多种现代开发工具和实践，以确保可维护性、可扩展性和开发人员的生产力


## 特性

- **Koa 框架**：使用 Koa 框架处理 HTTP 请求和中间件。
- **TypeScript**：使用 TypeScript 编写，提升了类型安全性和代码可读性。
- **装饰器**：实现了装饰器，使代码更简洁且更具表现力，特别是在定义路由和中间件时。
- **中间件**：实现了错误捕获中间件，静态资源管理中间件，日志记录中间件等。
- **Sequelize**：使用 Sequelize ORM 与关系型数据库进行交互，提供了强大的数据建模和查询解决方案。
- **ESLint**：使用 ESLint 强制执行编码标准和最佳实践，确保代码库的一致性。


## 开发

### 前提条件

- Node.js（版本 16 或更高）
- npm 或 yarn

### 安装

1. 克隆仓库：
    ```sh
    git clone git@github.com:8696/koa-app.git
    cd koa-app
    ```

2. 安装依赖：
    ```sh
    yarn install
    ```

### 运行应用程序

1. 启动开发服务器：
    ```sh
    yarn start
    ```

2. 应用程序会在 `http://localhost:8091` 上运行

### 构建生产环境

1. 构建项目：
    ```sh
    yarn build
    ```

2. 启动生产服务器：
    ```sh
    yarn pm2:production
    ```
