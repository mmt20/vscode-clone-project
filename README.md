# VS Code Clone

A powerful, lightweight code editor inspired by Visual Studio Code. Built with React, Redux Toolkit, and modern web technologies.

## 🚀 Tech Stack

- **Frontend:** React, TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS

## Features

- **File Explorer**: Recursive file tree with toggle support
- **Tabs System**: Open, close, and manage multiple files
- **Syntax Highlighting**: Code highlighting for various languages
- **Resizable Panels**: Adjustable layout for better usability
- **Custom Context Menu**: Advanced right-click actions
- **State Management**: Powered by Redux Toolkit

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mmt20/vscode-clone-project.git
   cd vscode-clone-project
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

## Folder Structure

```sh

/src
 ├── app/
 │ ├── features/ # Redux slices and state management
 │ ├── store.ts # Main Redux store configuration
 │
 ├── assets/ # Static assets (icons, images, etc.)
 │
 ├── components/
 │ ├── styles/ # Global and component-specific styles
 │ ├── SVG/ # SVG icons and vector graphics
 │ ├── ui/ # UI components
 │ │ ├── ContextMenu.tsx
 │ ├──FileSyntaxHighlighter.tsx
 │ ├──IconImg.tsx
 │ ├──OpenedFileBar.tsx
 │ ├──OpenedFilesBarTab.tsx
 │ ├──Preview.tsx
 │ ├──RecursiveComponent.tsx
 │ ├──ResizablePanel.tsx
 │ ├──WelcomeTab.tsx
 │
 ├── constant/ # Constant values and configurations
 ├── data/ #  fileTree data
 ├── interfaces/ # TypeScript interfaces and types
 │
 ├── utils/ # Helper functions and utilities
 │
 ├── App.tsx # Main application component
 ├── index.css # Global styles
 ├── main.tsx # React app entry point
```

## Contact

Mostafa Mohamed - [@MMTAHA22](https://x.com/MMTAHA22) - mmt202002@gmail.com
