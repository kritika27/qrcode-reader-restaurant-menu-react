import React from "react";
import "./App.css"
const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=kritikasrivastava.com";
const fileDownloadHandler = async (pictureUrl) => {
    console.log(pictureUrl);
    const response = await fetch(pictureUrl);
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "picture.jpeg";
      a.click();
    });
  };

const Qr = ({toggle}) => {
    return (
        <div className="App">

            <img
                style={{ backgroundColor: "red", color: "blue" }}
                src={url}
                  alt="varieties of food on the plates on the table"
            />
            {!toggle && <button className="btn" onClick={()=>fileDownloadHandler(url)}>Download</button>}
            {toggle && <button className="btn" onClick={()=>fileDownloadHandler(url)}>Herunterladen</button>}

        </div>
    );
}

export default Qr
