import React from "react";
import "./Button.css"

const InputBox = ({ placeHolder, textFunction, textArea}) => {
  return (
    <div>
      <div className="mt-3 mb-3">
        <div class="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={textArea}
            onChange={textFunction}
            style={{ height: "200px" }}
          ></textarea>
          <label for="floatingTextarea2">{placeHolder}</label>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
