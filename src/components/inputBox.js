import React from "react";
import "./Button.css"

const InputBox = ({ placeHolder, textFunction, textArea, mode, limit, charCount }) => {
  return (
    <div>
      <div className="mt-3 mb-3">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={textArea}
            onChange={textFunction}
            maxLength={limit}
            //style={{ height: "200px" }}
            style={{height: "200px", backgroundColor:mode==='light'?'white':'grey', color:mode==='light'?'black':'white'}}
          ></textarea>
          <label htmlFor="floatingTextarea2"  style={{ color: mode === 'light' ? 'black' : 'white' }}>{placeHolder}</label>
        </div>
        <div className="text-end fs-6 fst-italic" style={{color:mode==='light'?'black':'white'}}>{limit - charCount} {limit - charCount === 1 ? "character" : "characters"} remaining</div>
      </div>
    </div>
  );
};

export default InputBox;
