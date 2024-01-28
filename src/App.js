import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar";
import InputBox from "./components/inputBox";
import ConvertButton from "./components/ConvertButton";
import QrGenerator from "./components/qrGenerator";
import Footer from "./components/Footer";
import { saveAs } from 'file-saver';
import './style.css'
import { SketchPicker } from 'react-color';

const App = () => {
  const [mode, setMode] = useState('light'); //Whether darkmode is enabled or not
  const [bgselectedColor, setbgSelectedColor] = useState("#ffffff"); // Default color is white
  // const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black
  const [selectedDownload, setSelectedDownload] = useState("#000000"); // Default color is black
  // const darkTheme = localStorage.getItem("theme");


  const [currentColor, setCurrentColor] = useState("#000")
  const handleOnChange = (color) => {
    setCurrentColor(color.hex)
  }


  const handleDownloadChange = (e) => {
    const qrdownload = e.target.value;
    setSelectedDownload(qrdownload);
    // console.log("ho", selectedDownload, qrdownload);
  };
// console.log(selectedColor)
  useEffect(() => {
    const darkTheme = localStorage.getItem("theme");
    if (darkTheme === "true") {
      toggleMode();
    }

  

    const input = document.getElementById("bgcolorPicker");
    // const colorCode = document.getElementById("colorCode");

    if (input) {
      setColor();
      input.addEventListener("input", setColor);
      function setColor() {
        const qrcolor=input.value;
        // colorCode.innerHTML = input.value;
        setbgSelectedColor(qrcolor);
      }}


    // Accessing DOM elements here after the component has mounted
    // const body = document.querySelector("body");
    const dinput = document.getElementById("downloadPicker");
    const dCode = document.getElementById("dCode");


    if (dinput) {
      setDownload();
      dinput.addEventListener("dinput", setDownload);
      function setDownload() {
        const qrdownload = dinput.value;
        dCode.innerHTML = dinput.value;
        setSelectedDownload(qrdownload);
        
      }
    }





  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      localStorage.setItem("theme", true);
      document.body.style.backgroundColor = '#212529';
    }
    else if (mode === 'dark') {
      setMode('light');
      localStorage.setItem("theme", false);
      document.body.style.backgroundColor = 'white';
    }
  }

  const [text, setText] = useState("");
  const [value, setValue] = useState("welcome to qr generator");
  const [charCount, setCharCount] = useState(0);

  const handelText = (e) => {
    setText(e.target.value);
    setCharCount(e.target.value.length);
  };


  const handelClick = () => {
    // console.log(text);
    if (text.length === 0) {
      alert("please enter the text");
      setValue("Please enter text");
    } else {
      setValue(text);
    }
  }
  // const qr_color=setColor();
  // var url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}&color=${currentColor.substring(1)}`
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}&color=${currentColor.substring(1)}&bgcolor=${bgselectedColor.substring(1)}`
  // console.log("URL", url);

  // const FileSaver = require('file-saver');
  // console.log(FileSaver);

  const downimage = () => {
    saveAs(url, "qr." + selectedDownload);
  }

  // console.log(darkTheme);



  return (

    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <div className="mt-5">
        <InputBox placeHolder={"Enter Text to be Converted"} textFunction={handelText} charCount={charCount} textArea={text} mode={mode} limit={500} />

<div className="">
          <div className="row">
            <div className="flex">
            <div className="column column1">
            <QrGenerator imageUrl={url} />
            </div>
            <div className="column column2">
              <SketchPicker color={currentColor} onChangeComplete={handleOnChange} />

<div>
              <div className="colors" >

              


              <div className="bgcolors" >
            <label htmlFor="bgcolorPicker">Background Color:</label>
            <input type="color"  defaultValue={"#ffffff"} id="bgcolorPicker"/>

              {/* <b>Current color code: <code id="colorCode"></code></b> */}
              </div>



              

                <label htmlFor="downloadPicker" style={{ color: mode === 'light' ? 'black' : 'white' }}>Download As:</label>

                <select name="cars" id="downloadPicker" onChange={handleDownloadChange}>
                  <option value="jpg"  defaultValue={"jpg"}>JPG</option>
                  <option value="png">PNG</option>
                </select>
                <b style={{display:'none'}}>Current Download State: <code id="dCode">{selectedDownload}</code></b>

              </div>
              <div className="container-fluid">
                <ConvertButton functionPass={handelClick} />


                <button onClick={downimage} className="btn my-btn my-buton mt-3"
                  style={{ width: "93%" }}>Download</button>


</div>
              </div>
              </div>

            </div>
          </div>
          </div>





          {/* <div className="colors" >
            <label htmlFor="colorPicker" style={{ color: mode === 'light' ? 'black' : 'white' }}>QR Color:</label>
            <input type="color" defaultValue={"00000"} id="colorPicker" />

            <b>Current color code: <code id="colorCode"></code></b>
          </div> */}



        </div>

        

      </div>
      <Footer />
    </>
  );
};

export default App;