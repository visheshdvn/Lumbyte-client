// returned data format
//  {
//   url: "";
//   title: ""
//   imageURL: ""
//   description: ""
// };

import ReactDOM from "react-dom";
import UI from "./ui";
import React, { createRef } from "react";

export default class Link {
  constructor({ data, config, api, readOnly }) {
    this.data = data;
    this.api = api;
    this.readOnly = readOnly;

    this.config = {
      type: config.type || "",
    };

    this.linkRef = createRef();
    // this.titleRef = createRef();
    // this.descriptionRef = createRef();
    // this.imageURLRef = createRef();
  }

  static get toolbox() {
    return {
      icon: `<svg width="13" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z"
        transform="translate(-3.667 -2.7)"
      />
    </svg>`,
      title: "Link",
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  render() {
    const updateLink = (url) => {
      this.data.url = url;
    };
    const updateTitle = (title) => {
      this.data.title = title;
    };
    const updateDescription = (description) => {
      this.data.description = description;
    };
    const updateImageURL = (imageURL) => {
      this.data.imageURL = imageURL;
    };

    const rootNode = document.createElement("div");

    ReactDOM.render(
      <UI
        api={this.api}
        data={this.data}
        config={this.config}
        readOnly={this.readOnly}
        linkRef={this.linkRef}
        updateLink={updateLink}
        updateTitle={updateTitle}
        updateDescription={updateDescription}
        updateImageURL={updateImageURL}
      />,
      rootNode
    );

    return rootNode;
  }

  save() {
    return this.data;
  }

  validate(savedData) {
    if (!savedData.url || !savedData.title) {
      return false;
    }

    return true;
  }
}
