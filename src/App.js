import React, {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import InputBox from "./components/inputBox";
import ConvertButton from "./components/ConvertButton";
import QrGenerator from "./components/qrGenerator";
import Footer from "./components/Footer";

const App = () => {
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


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-5">
          <InputBox placeHolder={"Enter Text to be Converted"} textFunction={handelText} textArea={text} />
        </div>
        <div className="container-fluid">
        <ConvertButton functionPass={handelClick}/>
      </div>
      <QrGenerator imageUrl={url}/>
       
      </div>
      <Footer />
    </>
  );
};

export default App;
