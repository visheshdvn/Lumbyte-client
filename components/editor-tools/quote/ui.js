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

  const editableMarkup = (
    <>
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
    </>
  );

  const readOnlyMarkup = (
    <>
      <q className="mb-0 font-serif text-lg md:leading-8 md:text-xl italic outline-none">{data.text}</q>
      {authorField && (
        <p className="mt-3 font-serif italic text-right">{"~ " + authorField}</p>
      )}
    </>
  );

  return (
    <div className="mb-8 rounded-r border-l-2 border-zinc-800 bg-neutral-50 py-3 px-5">
      {!readOnly && editableMarkup}
      {readOnly && readOnlyMarkup}
    </div>
  );
};

export default Ui;
