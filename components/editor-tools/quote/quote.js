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
      icon: `<svg width="19" height="17.7" viewBox="0 0 183 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1249_120)">
      <path d="M88.2625 56.3998C88.2625 44.7998 84.4625 35.3998 76.8625 28.1998C69.2625 21.3998 59.6625 17.9998 48.0625 17.9998C34.0625 17.9998 22.4625 22.5998 13.2625 31.7998C4.4625 40.9998 0.0625017 54.1998 0.0625017 71.3998C0.0625017 89.7998 5.2625 107.8 15.6625 125.4C26.4625 143.4 41.4625 157.6 60.6625 168L74.4625 147C64.0625 139.8 55.6625 131.8 49.2625 123C43.2625 114.2 39.2625 104 37.2625 92.3998C40.8625 93.9998 45.0625 94.7998 49.8625 94.7998C61.0625 94.7998 70.2625 91.1998 77.4625 83.9998C84.6625 76.7998 88.2625 67.5998 88.2625 56.3998ZM94 111.6C94 123.2 97.8 132.4 105.4 139.2C113 146.4 122.6 150 134.2 150C148.2 150 159.6 145.4 168.4 136.2C177.6 127 182.2 113.8 182.2 96.5998C182.2 78.1998 176.8 59.9998 166 41.9998C155.6 24.3998 140.8 10.3998 121.6 -0.000174999L107.8 20.9998C118.2 28.1998 126.4 36.1998 132.4 44.9998C138.8 53.7998 143 63.9998 145 75.5998C141.4 73.9998 137.2 73.1998 132.4 73.1998C121.2 73.1998 112 76.7998 104.8 83.9998C97.6 91.1998 94 100.4 94 111.6Z" fill="#707684"/>
      </g>
      <defs>
      <clipPath id="clip0_1249_120">
      <rect width="182.2" height="168" fill="white"/>
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
    console.log(this.data);
    return this.data;
  }

  //   validate(savedData) {
  //     if (this.data && this.data.file && this.data.file.url) {
  //       return true;
  //     }

  //     return false;
  //   }
}
