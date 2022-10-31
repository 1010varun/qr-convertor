import React from "react";

const QrGenerator = ({imageUrl}) => {
    return(
        <div className="container-fluid image mt-5 ms-xl-5">
        <img
          src={imageUrl}
          className="img-fluid"
          alt="QR code"
          style={{ marginLeft: "38%" }}
        ></img>
      </div>
    )
}

export default QrGenerator;