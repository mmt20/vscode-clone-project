import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showInlineLineNumbers
      showLineNumbers
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        overflowY: "auto",
        fontSize: "1.5rem",
      }}
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
