import React from "react";

const QrGenerator = ({imageUrl}) => {
    return(
        <div className="container-fluid image mt-3 d-flex justify-content-center">
        <img
          src={imageUrl}
          className="img-fluid"
          alt="QR code"
        ></img>
      </div>
    )
}

export default QrGenerator;