import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar";
import InputBox from "./components/inputBox";
import ConvertButton from "./components/ConvertButton";
import QrGenerator from "./components/qrGenerator";
import Footer from "./components/Footer";
import { saveAs } from 'file-saver';
import './style.css'

const App = () => {
  const [mode, setMode] = useState('light'); //Whether darkmode is enabled or not
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black
  const [selectedDownload, setSelectedDownload] = useState("#000000"); // Default color is black
  const darkTheme = localStorage.getItem("theme");

  // const setColor = () => {
  //   const input = document.getElementById("colorPicker");
  //   const colorCode = document.getElementById("colorCode");
  //   const qrcolor = input.value;
  //   colorCode.innerHTML = qrcolor;
  //   return qrcolor;
  // };

  const handleDownloadChange = (e) => {
    const qrdownload = e.target.value;
    setSelectedDownload(qrdownload);
    console.log("ho", selectedDownload, qrdownload);
  };

  useEffect(() => {
    const darkTheme = localStorage.getItem("theme");
    if (darkTheme === "true") {
      toggleMode();
    }

    // Accessing DOM elements here after the component has mounted
    // const body = document.querySelector("body");
    const input = document.getElementById("colorPicker");
    const colorCode = document.getElementById("colorCode");

    // Ensure that the input element is defined before attaching the event listener
    if (input) {
      setColor();
      input.addEventListener("input", setColor);
      const qrcolor = input.value;
      console.log(qrcolor);
      function setColor() {
        const qrcolor = input.value;
        // body.style.backgroundColor = input.value;
        colorCode.innerHTML = input.value;
        setSelectedColor(qrcolor);
      }
    }


    // Accessing DOM elements here after the component has mounted
    // const body = document.querySelector("body");
    const dinput = document.getElementById("downloadPicker");
    const dCode = document.getElementById("dCode");

    // Ensure that the input element is defined before attaching the event listener
    if (dinput) {
      setDownload();
      dinput.addEventListener("dinput", setDownload);
      const qrdownload = dinput.value;
      console.log(qrdownload);
      function setDownload() {
        const qrdownload = dinput.value;
        // body.style.backgroundColor = input.value;
        dCode.innerHTML = dinput.value;
        setSelectedDownload(qrdownload);
        var c = 1;
        console.log("ho", c++, selectedDownload, qrdownload)
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
    console.log(text);
    if (text.length === 0) {
      alert("please enter the text");
      setValue("Please enter text");
    } else {
      setValue(text);
    }
  }
  // const qr_color=setColor();
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}&color=${selectedColor.substring(1)}`
  console.log("URL", url);

  const FileSaver = require('file-saver');
  console.log(FileSaver);

  const downimage = () => {
    saveAs(url, "qr." + selectedDownload);
  }

  console.log(darkTheme);



  return (

    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <div className="mt-5">
          <InputBox placeHolder={"Enter Text to be Converted"} textFunction={handelText} charCount={charCount} textArea={text} mode={mode} limit={500} />

          <div className="colors" >
            <label htmlFor="colorPicker" style={{ color: mode === 'light' ? 'black' : 'white' }}>QR Color:</label>
            <input type="color" defaultValue={"00000"} id="colorPicker" />

            <b>Current color code: <code id="colorCode"></code></b>
          </div>

          <div className="colors" >

            <label htmlFor="downloadPicker" style={{ color: mode === 'light' ? 'black' : 'white' }}>QR Download:</label>

            <select name="cars" id="downloadPicker" onChange={handleDownloadChange}>
              <option value="jpg" selected>JPG</option>
              <option value="png">PNG</option>
            </select>
            <b>Current Download State: <code id="dCode">{selectedDownload}</code></b>

          </div>

        </div>
        <div className="container-fluid">
          <ConvertButton functionPass={handelClick} />


          <button onClick={downimage} className="btn my-btn my-buton mt-3"
            style={{ width: "50%", marginLeft: "25%" }}>Download</button>



        </div>
        <QrGenerator imageUrl={url} />

      </div>
      <Footer />
    </>
  );
};

export default App;