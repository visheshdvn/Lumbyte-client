// returned data format
//  {
//   text: "",
//   author: "",
// };

import { update } from "lodash";
import React, { useState, useEffect } from "react";

const Ui = ({
  api,
  data,
  config,
  readOnly,
  updateQuote,
  quoteRef,
  updateAuthor,
  authorRef,
}) => {
  const [uiData, setUiData] = useState(data);
  const [authorField, setAuthor] = useState(data.author);

  // const readOnlyMarkup = ()

  return (
    <div className="mb-8 rounded-r border-l-2 border-zinc-800 bg-neutral-50 py-3 px-5">
      <p
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="mb-3 text-xl italic outline-none"
        ref={quoteRef}
        onInput={updateQuote}
      >
        {data.text}
      </p>
      <p>
        <input
          placeholder="~ Author"
          className="bg-transparent outline-none"
          ref={authorRef}
          value={authorField || ""}
          onChange={(e) => {
            setAuthor(e.target.value);
            updateAuthor();
          }}
        />
      </p>
    </div>
  );
};

export default Ui;
