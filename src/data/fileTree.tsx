import { IFile } from "../interfaces";
import { nanoid } from "nanoid";

export const fileTree: IFile = {
  id: nanoid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: nanoid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: nanoid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: nanoid(),
              name: "react.js",
              isFolder: false,
              content: "// Vite React dependencies here",
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      name: "index.html",
      isFolder: false,
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
    },
    {
      id: nanoid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: nanoid(),
          name: "index.html",
          isFolder: false,
          content: `<!-- public/index.html (Optional) -->`,
        },
      ],
    },
    {
      id: nanoid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: nanoid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: nanoid(),
              name: "Button.tsx",
              isFolder: false,
              content: `interface IProps {
  label?: string;
  onClick?: () => void;
}

const Button = ({ label = "Click me!", onClick }: IProps) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button`,
            },
          ],
        },
        {
          id: nanoid(),
          name: "App.tsx",
          isFolder: false,
          content: `import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <Button label="Press Me" onClick={() => alert('Button Clicked!')} />
    </div>
  );
}

export default App;`,
        },
        {
          id: nanoid(),
          name: "main.tsx",
          isFolder: false,
          content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
        },
        {
          id: nanoid(),
          name: "index.css",
          isFolder: false,
          content: `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`,
        },
        {
          id: nanoid(),
          name: "vite-env.d.ts",
          isFolder: false,
          content: `/// <reference types="vite/client" />`,
        },
      ],
    },
    {
      id: nanoid(),
      name: "package.json",
      isFolder: false,
      content: `{
  "name": "vs-code-clone",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "nanoid": "^5.0.4"
  }
}`,
    },
    {
      id: nanoid(),
      name: "tsconfig.json",
      isFolder: false,
      content: `{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,
    },
    {
      id: nanoid(),
      name: "tsconfig.node.json",
      isFolder: false,
      content: `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`,
    },
    {
      id: nanoid(),
      name: "vite.config.ts",
      isFolder: false,
      content: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`,
    },
  ],
};
