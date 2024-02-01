import React, { useEffect } from "react";

const QrGenerator = ({targetURL, logoURL, canvasRef}) => {
  useEffect(() => {
    const generateQR = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      const QR_SIZE = 300;
      const LOGO_SIZE = 64;
      console.log(targetURL);

      let fetchURL = targetURL;
      if (logoURL !== "") {
        fetchURL += "&ecc=H";
      }
      const res = await fetch(fetchURL);
      const data = await res.blob();
  
      const qr = new Image();
  
      qr.onload = () => {
        ctx.drawImage(qr, 0, 0, QR_SIZE, QR_SIZE);
  
        if (logoURL !== "") {
          ctx.fillStyle = "white";
          ctx.fillRect((QR_SIZE - LOGO_SIZE) / 2, (QR_SIZE - LOGO_SIZE) / 2, LOGO_SIZE, LOGO_SIZE);
  
          const logo = new Image();
  
          logo.onload = () => {
            ctx.drawImage(logo, (QR_SIZE - LOGO_SIZE) / 2, (QR_SIZE - LOGO_SIZE) / 2, LOGO_SIZE, LOGO_SIZE);
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