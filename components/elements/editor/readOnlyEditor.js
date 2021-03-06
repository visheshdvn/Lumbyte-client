import React, { useEffect } from "react";
import ImageTool from "../../../components/editor-tools/image/index";
import Quote from "../../../components/editor-tools/quote/quote";
import Paragraph from "../../../components/editor-tools/paragraph-read-only/index";
import PageLink from "../../editor-tools/page-link/link";

const EDITOR_HOLDER_ID = "content-block";
let editor;

const ContentReader = ({ content }) => {
  useEffect(() => {
    const EditorJS = require("@editorjs/editorjs");
    const Header = require("@editorjs/header");
    const List = require("@editorjs/list");
    const Delimiter = require("@editorjs/delimiter");
    const InlineCode = require("@editorjs/inline-code");
    const CodeTool = require("@editorjs/code");
    const Tooltip = require("editorjs-tooltip");

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
        pagelink: PageLink,
        paragraph: Paragraph,
        tooltip: {
          class: Tooltip,
          config: {
            location: "top",
            backgroundColor: "#262611",
            textColor: "#FDFEFE",
            holder: EDITOR_HOLDER_ID,
          },
        },
        quote: Quote,
      },
      data: content,
      readOnly: true,
      logLevel: "ERROR",
    });
    return () => {
      editor.destroy();
    };
  }, []);

  return <div id={EDITOR_HOLDER_ID}></div>;
};

export default ContentReader;
