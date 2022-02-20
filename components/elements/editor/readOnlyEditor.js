import React, { useEffect } from "react";
import ImageTool from "../../../components/editor-tools/image/index";
import Quote from "../../../components/editor-tools/quote/quote";

const EDITOR_HOLDER_ID = "content-block";
let editor;

const ContentReader = ({ content }) => {
  useEffect(() => {
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const Paragraph = require("@editorjs/paragraph");
    const List = require("@editorjs/list");
    const Delimiter = require("@editorjs/delimiter");
    const InlineCode = require("@editorjs/inline-code");
    const CodeTool = require("@editorjs/code");

    editor = new EditorJS({
      holder: EDITOR_HOLDER_ID,
      tools: {
        code: CodeTool,
        delimiter: Delimiter,
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter the heading..",
            levels: [2, 3, 4],
          },
        },
        image: ImageTool,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            preserveBlank: false,
          },
        },
        quote: Quote,
      },
      data: content,
      readOnly: true,
    });
    return () => {
      editor.destroy();
    };
  }, []);

  return <div id={EDITOR_HOLDER_ID}></div>;
};

export default ContentReader;
