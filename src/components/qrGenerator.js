import React from "react";
import QRCode from "qrcode.react";

const QrGenerator = ({ data, qrColor }) => {
  return (
    <div className='container-fluid image mt-3 d-flex justify-content-center'>
      <div>
        <QRCode value={data} fgColor={qrColor} />
      </div>
    </div>
  );
};

export default QrGenerator;
