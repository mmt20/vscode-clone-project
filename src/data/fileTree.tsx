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
          children: [{ id: nanoid(), name: "react.js", isFolder: false }],
        },
      ],
    },
    { id: nanoid(), name: "index.html", isFolder: false },
    {
      id: nanoid(),
      name: "public",
      isFolder: true,
      children: [{ id: nanoid(), name: "index.html", isFolder: false }],
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
              content:
                "import React from 'react';\n\nconst Button = () => {\n  return <button>Click me</button>;\n};\n\nexport default Button;",
            },
          ],
        },
      ],
    },
  ],
};
