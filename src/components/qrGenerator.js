import React from "react";
import QRCode from "qrcode.react";

const QrGenerator = ({ data }) => {
  return (
    <div className='container-fluid image mt-3 d-flex justify-content-center'>
      <div>
        <QRCode value={data} fgColor='#FF00FF' />
      </div>
    </div>
  );
};

export default QrGenerator;
