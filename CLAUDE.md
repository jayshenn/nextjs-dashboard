# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Next.js App Router 的仪表板应用程序，是 Next.js 官方教程的起始模板。项目使用 TypeScript、Tailwind CSS 和 NextAuth 进行身份验证。

## 开发命令

**开发模式**: `pnpm dev` (使用 Turbopack 提升性能)
**构建**: `pnpm build`  
**生产启动**: `pnpm start`

注意：项目强制使用 pnpm 作为包管理器，不支持 npm 或 yarn。

## 代码架构

### 目录结构
- `app/` - Next.js App Router 主目录
  - `ui/` - React 组件库，按功能模块组织
    - `dashboard/` - 仪表板相关组件
    - `invoices/` - 发票管理组件  
    - `customers/` - 客户管理组件
  - `lib/` - 工具函数和数据处理逻辑
  - `query/` - 数据查询相关代码
  - `seed/` - 数据库种子数据

### 技术栈
- **框架**: Next.js (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **认证**: NextAuth 5.0.0-beta
- **数据库**: PostgreSQL (使用 `postgres` 库)
- **图标**: Heroicons
- **表单验证**: Zod

### 开发约定
- 使用严格的 TypeScript 配置
- 组件采用函数式组件和 React Hooks
- 路径别名 `@/*` 指向项目根目录
- 样式使用 Tailwind CSS 原子类
- 表单处理结合 Zod 验证

## 项目特点

这是一个教学项目，代码结构清晰，适合学习 Next.js App Router 的最佳实践。包含完整的认证流程、数据管理和用户界面组件。