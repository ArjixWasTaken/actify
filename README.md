<p align="center">
  <a href="https://actifyjs.com">
    <img alt="Actify Logo" width="100" src="https://actifyjs.com/actify.svg">
  </a>
</p>

### 🚀 Introduction

Actify is a React Components Library based on Material Design 3 Web Components.
Inspired by Vuetify. Some highlights include:

- **Vite:** Use Vite to build lib and docs.
- **Tailwind CSS:** Build with Tailwind CSS.
- **CSS Property:** Use css property to control web component styles.
- **Theme System:** A powerful color system that makes it easy to style your application with a consistent color palette.

### 🌻 Get Started

```bash
# with npm
npm install actify

# with yarn
yarn add actity
```

### 🎉 Example

- common react app

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'actify'

export default () => {
  return <Button variant="outlined">Hello Actify</Button>
}
```

- Next.js

```jsx
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('actify').then((res) => res.Button), {
  ssr: false
})

export default () => {
  return <Button>Hello Actify</Button>
}
```

### 🚧 Status

- ❌ Not started
- 🟡 In progress
- ✅ Complete

### 🌐 Browser Support

| Browser  | Version |
| -------- | ------- |
| Chrome   | 112 +   |
| Edge     | 112 +   |
| Firefox  | 113 +   |
| Safari\* | 16.4 +  |
