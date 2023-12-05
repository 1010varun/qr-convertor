import React from "react";
import "./Button.css"

const InputBox = ({ placeHolder, textFunction, textArea, mode}) => {
  return (
    <div>
      <div className="mt-3 mb-3">
        <div class="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={textArea}
            onChange={textFunction}
            //style={{ height: "200px" }}
            style={{height: "200px", backgroundColor:mode==='light'?'white':'grey', color:mode==='light'?'black':'white'}}
          ></textarea>
          <label for="floatingTextarea2"  style={{ color: mode === 'light' ? 'black' : 'white' }}>{placeHolder}</label>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
