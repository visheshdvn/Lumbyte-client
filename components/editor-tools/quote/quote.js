// returned data format
//  {
//   text: "",
//   author: "",
// };

import ReactDOM from "react-dom";
import UI from "./ui";
import React, { createRef } from "react";

export default class BlockQuote {
  constructor({ data, config, api, readOnly }) {
    this.data = data;
    this.api = api;
    this.readOnly = readOnly;

    this.config = {
      type: config.type || "",
    };

    this.quoteRef = createRef(data.text || "");
    this.authorRef = createRef(data.text || "");
  }

  static get toolbox() {
    return {
      icon: `<svg width="19" height="15.48" viewBox="0 0 173 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1666_332)">
      <path d="M34.1875 90.2C34.1875 88.2 33.5875 86.4 32.3875 84.8C31.1875 83.2 29.3875 81.6 26.9875 80C18.1875 74.8 11.5875 69 7.18748 62.6C2.78748 56.2 0.587484 49.4 0.587485 42.2C0.587486 30.6 4.78749 20.8 13.1875 12.8C21.9875 4.39998 32.3875 0.199992 44.3875 0.199993C55.9875 0.199994 65.1875 3.8 71.9875 11C79.1875 18.2 82.7875 27.8 82.7875 39.8C82.7875 55.8 76.1875 73.2 62.9875 92C49.7875 110.4 32.1875 126.6 10.1875 140.6C8.18748 139.4 6.78748 138.2 5.98747 137C5.18748 135.4 4.78748 133.8 4.78748 132.2L34.1875 90.2ZM124 90.2C124 88.2 123.4 86.4 122.2 84.8C121 83.2 119.2 81.6 116.8 80C108 74.8 101.4 69 97 62.6C92.6 56.2 90.4 49.4 90.4 42.2C90.4 30.6 94.6 20.8 103 12.8C111.8 4.39999 122.2 0.2 134.2 0.200001C145.8 0.200002 155 3.8 161.8 11C169 18.2 172.6 27.8 172.6 39.8C172.6 55.8 166 73.2 152.8 92C139.6 110.4 122 126.6 100 140.6C98 139.4 96.6 138.2 95.8 137C95 135.4 94.6 133.8 94.6 132.2L124 90.2Z" fill="#707684"/>
      </g>
      <defs>
      <clipPath id="clip0_1666_332">
      <rect width="173" height="141" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
      title: "Quote",
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  render() {
    const updateQuote = () => {
      this.data.text = this.quoteRef.current.innerText;
    };

    const updateAuthor = () => {
      this.data.author = this.authorRef.current.value;
    };

    const rootNode = document.createElement("div");

    ReactDOM.render(
      <UI
        api={this.api}
        data={this.data}
        config={this.config}
        readOnly={this.readOnly}
        updateQuote={updateQuote}
        updateAuthor={updateAuthor}
        quoteRef={this.quoteRef}
        authorRef={this.authorRef}
      />,
      rootNode
    );

    return rootNode;
  }

  save() {
    return this.data;
  }

  //   validate(savedData) {
  //     if (this.data && this.data.file && this.data.file.url) {
  //       return true;
  //     }

  //     return false;
  //   }
}
