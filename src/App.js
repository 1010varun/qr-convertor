import React, {useState, useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar";
import InputBox from "./components/inputBox";
import ConvertButton from "./components/ConvertButton";
import QrGenerator from "./components/qrGenerator";
import Footer from "./components/Footer";
import { saveAs } from 'file-saver';

const App = () => {
  const [mode, setMode] = useState('light'); //Whether darkmode is enabled or not
  const darkTheme = localStorage.getItem("theme");

  useEffect(() => {
    if (darkTheme === "true") {
      toggleMode();
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      localStorage.setItem("theme", true);
      document.body.style.backgroundColor='#212529';
    }
    else if(mode==='dark'){
      setMode('light');
      localStorage.setItem("theme", false);
      document.body.style.backgroundColor='white';
    }
  }

  const [text, setText] = useState("");
  const [value, setValue] = useState("welcome to qr generator");

  const handelText = (e) => {
    setText(e.target.value);

  };


  const handelClick = () => {
    console.log(text);
    if(text.length === 0){
      alert("please enter the text");
        setValue("Please enter text");
    }else{
    setValue(text);
    }
  }

  var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`

  const FileSaver = require('file-saver');
  console.log(FileSaver);

  const downimage=()=>{
    saveAs(url, "qr.jpg");
  }

  return (
    
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <div className="mt-5">
          <InputBox placeHolder={"Enter Text to be Converted"} textFunction={handelText} textArea={text} mode={mode}/>
        </div>
        <div className="container-fluid">
        <ConvertButton functionPass={handelClick}/>
        

        <button onClick={downimage} className="btn my-btn my-buton mt-3"
        style={{ width: "50%", marginLeft: "25%" }}>Download</button> 
              


      </div>
      <QrGenerator imageUrl={url}/>
        <Footer />
      </div>
    </>
  );
};

export default App;
