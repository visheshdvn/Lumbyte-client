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
      icon: `<svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5443 8.4563C10.7252 7.63753 9.61445 7.17758 8.4563 7.17758C7.29815 7.17758 6.18741 7.63753 5.3683 8.4563L2.2793 11.5443C1.46018 12.3634 1 13.4744 1 14.6328C1 15.7912 1.46018 16.9022 2.2793 17.7213C3.09842 18.5404 4.20939 19.0006 5.3678 19.0006C6.52621 19.0006 7.63718 18.5404 8.4563 17.7213L10.0003 16.1773" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.4563 11.5443C9.27541 12.3631 10.3861 12.823 11.5443 12.823C12.7024 12.823 13.8132 12.3631 14.6323 11.5443L17.7213 8.4563C18.5404 7.63718 19.0006 6.52621 19.0006 5.3678C19.0006 4.20939 18.5404 3.09842 17.7213 2.2793C16.9022 1.46018 15.7912 1 14.6328 1C13.4744 1 12.3634 1.46018 11.5443 2.2793L10.0003 3.8233" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,
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
