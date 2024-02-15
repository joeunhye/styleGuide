import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const CodeSnippet = ({ language, code }) => {
  const codeBlockRef = useRef(null);
  useEffect(() => {
    hljs.highlightElement(codeBlockRef.current);
  }, [codeBlockRef]);
  return (
    <pre>
      <code ref={codeBlockRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};
export default CodeSnippet;

// https://www.friendstudio.net/how-to-use-highlightjs-with-react/
// https://rehype-pretty-code.netlify.app/