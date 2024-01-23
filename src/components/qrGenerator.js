import React, { useEffect } from "react";

const QrGenerator = ({targetURL, logoURL, canvasRef}) => {
  useEffect(() => {
    const generateQR = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      let fetchURL = targetURL;
      if (logoURL !== "") {
        fetchURL += "&ecc=H";
      }
      const res = await fetch(fetchURL);
      const data = await res.blob();
  
      const qr = new Image();
  
      qr.onload = () => {
        ctx.drawImage(qr, 0, 0, 300, 300);
  
        if (logoURL !== "") {
          ctx.fillStyle = "white";
          ctx.fillRect(102, 102, 96, 96);
  
          const logo = new Image();
  
          logo.onload = () => {
            ctx.drawImage(logo, 102, 102, 96, 96);
          }
  
          logo.src = logoURL;
        }
      };
  
      qr.src = URL.createObjectURL(data);
    };

    generateQR();
  }, [targetURL, logoURL, canvasRef]);

  

  return(
    <div className="container-fluid image mt-3 d-flex justify-content-center">
      <canvas className="img-fluid" width={300} height={300} ref={canvasRef}></canvas>
    </div>
  )
}

export default QrGenerator;