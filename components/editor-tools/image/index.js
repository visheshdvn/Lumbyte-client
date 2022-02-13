// returned data format
//  {
//   file: {
//     url: "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
//   },
//   caption: "Roadster // tesla.com",
//   alt: "Roadster",
//   withBorder: false,
//   withBackground: false,
//   stretched: true,
// };

import ReactDOM from "react-dom";
import UI from "./ui";

export default class ImageTool {
  constructor({ data, config, api, readOnly }) {
    this.data = data;
    this.api = api;
    this.readOnly = readOnly;

    this.config = {
      endpoints: config.endpoints || "",
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || "image",
      types: config.types || "image/*",
      captionPlaceholder: this.api.i18n.t(
        config.captionPlaceholder || "Caption"
      ),
      buttonContent: config.buttonContent || "",
      uploader: config.uploader || undefined,
      actions: config.actions || [],
    };

    this.nodes = {
      holder: null,
    };
  }

  static get toolbox() {
    return {
      icon: `<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>`,
      title: "ImageTool",
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  render() {
    const mutateData = (data) => {
      this.data = data;
    };

    const rootNode = document.createElement("div");
    this.nodes.holder = rootNode;

    ReactDOM.render(
      <UI
        api={this.api}
        data={this.data}
        updateData={mutateData}
        config={this.config}
        readOnly={this.readOnly}
      />,
      rootNode
    );

    return this.nodes.holder;
  }

  save() {
    return this.data;
  }

  validate(savedData) {
    if (this.data && this.data.file && this.data.file.url) {
      return true;
    }

    return false;
  }
}
