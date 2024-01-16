import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ChromePicker } from "react-color";

import Navbar from "./components/navbar";
import InputBox from "./components/inputBox";
import ConvertButton from "./components/ConvertButton";
import QrGenerator from "./components/qrGenerator";
import Footer from "./components/Footer";
import { saveAs } from "file-saver";
import Draggable from "react-draggable";
const App = () => {
  const [mode, setMode] = useState("light"); //Whether darkmode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [text, setText] = useState("");
  const [value, setValue] = useState("welcome to qr generator");
  const [qrColor, setQrColor] = useState("#000000");
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const handlePickerDrag = (e, ui) => {
    const { x, y } = ui;
    setPickerPosition({ x, y });
  };

  const handelText = (e) => {
    setText(e.target.value);
  };

  const handelClick = () => {
    console.log(text);
    if (text.length === 0) {
      alert("please enter the text");
      setValue("Please enter text");
    } else {
      setValue(text);
    }
  };

  const FileSaver = require("file-saver");
  console.log(FileSaver);

  const downimage = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    saveAs(url, "qr.jpg");
  };
  const handleColorChange = (color) => {
    setQrColor(color.hex);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        <div className='mt-5'>
          <InputBox placeHolder={"Enter Text to be Converted"} textFunction={handelText} textArea={text} mode={mode} />
        </div>
        <div className='container-fluid'>
          <ConvertButton functionPass={handelClick} />
          <div style={{ position: "fixed", top: "300px", right: "20px", zIndex: "1" }}>
            <Draggable position={pickerPosition} onDrag={handlePickerDrag} handle='.drag-handle'>
              <div>
                <div className='drag-handle'>
                  <p>Choose QR Code Color:</p>
                  <span style={{ fontSize: "10px" }}>You can drag the color and also drag this box.</span>
                </div>
                <ChromePicker color={qrColor} onChange={handleColorChange} />
              </div>
            </Draggable>
          </div>

          <button onClick={downimage} className='btn my-btn my-buton mt-3' style={{ width: "50%", marginLeft: "25%" }}>
            Download
          </button>
        </div>
        <QrGenerator data={value} qrColor={qrColor} />
      </div>
      <Footer />
    </>
  );
};

export default App;
